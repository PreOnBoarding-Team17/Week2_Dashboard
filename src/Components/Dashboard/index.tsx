import React, { useEffect, useState } from 'react';
import Card from 'Components/Common/Card';
import FilterMenu from 'Components/Dashboard/FilterMenu';
import { callAPI } from 'API';
import { DataInterface } from 'Utils/Interface';

import 'Components/Dashboard/scss/Dashboard.scss';

const Dashboard: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [datas, setDatas] = useState<DataInterface[]>([]);
  const [cardDatas, setCardDatas] = useState<DataInterface[]>([]);
  const [selectedMethod, setSelectedMethod] = useState<string[]>([]);
  const [selectedMaterial, setSelectedMaterial] = useState<string[]>([]);

  useEffect(() => {
    const requestGET = async (): Promise<void> => {
      await callAPI.get('/').then((res) => {
        setDatas(res.data);
        setCardDatas(res.data);
      });
    };
    requestGET();
  }, []);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleReset = () => {
    setSelectedMethod([]);
    setSelectedMaterial([]);

    if (toggle) setToggle(false);
  };

  useEffect(() => {
    const filterToggle = toggle
      ? datas.filter((element) => element.status === '상담중')
      : datas;

    const filterMethod =
      selectedMethod.length > 0
        ? filterToggle.filter((element) => {
            return selectedMethod.every((selectedMethod) =>
              element.method.find((method) => method === selectedMethod)
            );
          })
        : filterToggle;

    const filterMaterial =
      selectedMaterial.length > 0
        ? filterMethod.filter((element) => {
            return selectedMaterial.every((selectedMaterial) =>
              element.material.find((material) => material === selectedMaterial)
            );
          })
        : filterMethod;

    setCardDatas(filterMaterial);
  }, [toggle, selectedMethod, selectedMaterial]);

  return (
    <div className="body-container">
      <div className="body-container__header">
        <h1 className="body-container__header__title">들어온 요청</h1>
        <h3 className="body-container__header__subtitle">
          파트너님에게 딱 맞는 요청서를 찾아보세요.
        </h3>
      </div>
      <FilterMenu
        toggle={toggle}
        handleReset={handleReset}
        handleToggle={handleToggle}
        selectedMethod={selectedMethod}
        setSelectedMethod={setSelectedMethod}
        selectedMaterial={selectedMaterial}
        setSelectedMaterial={setSelectedMaterial}
      />
      <div className="dash-board">
        {cardDatas.map((data: DataInterface) => {
          return <Card key={data['id']} data={data} />;
        })}
      </div>

      {cardDatas.length === 0 &&
        ((selectedMethod !== [] && selectedMaterial !== []) || toggle) && (
          <div className="card-zero">조건에 맞는 견적 요청이 없습니다.</div>
        )}
    </div>
  );
};

export default Dashboard;
