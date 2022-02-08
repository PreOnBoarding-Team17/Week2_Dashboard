import React, { useEffect, useState } from 'react';
import Card from 'Components/Common/Card';
import FilterMenu from 'Components/Dashboard/FilterMenu';
import { callAPI } from 'API';
import { DataInterface } from 'Utils/Interface';

import 'Components/Dashboard/scss/Dashboard.scss';

const Dashboard: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [datas, setDatas] = useState<DataInterface[]>([]);
  const [selectedMethod, setSelectedMethod] = useState<string[]>([]);
  const [selectedMaterial, setSelectedMaterial] = useState<string[]>([]);

  useEffect(() => {
    const requestGET = async (): Promise<void> => {
      await callAPI.get('/').then((res) => setDatas(res.data));
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

  // '가공필터' 선택시 state 변화
  const handleMethodChange = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    name: string
  ) => {
    //setSelectedMethod();
  };

  // '재료' 필터 선택시 state 변화
  const handleMaterialChange = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    name: string
  ) => {
    //setSelectedMaterial();
  };

  useEffect(() => {
    const filterToggle = toggle
      ? datas.filter((element) => element.status === '상담중')
      : datas;
    const filterMethod =
      selectedMethod.length > 0
        ? filterToggle.filter((element) => {
            return selectedMethod.some((selectedMethod) =>
              element.method.find((method) => method === selectedMethod)
            );
          })
        : filterToggle;
    const filterMaterial =
      selectedMaterial.length > 0
        ? filterMethod.filter((element) => {
            return selectedMaterial.some((selectedMaterial) =>
              element.material.find((material) => material === selectedMaterial)
            );
          })
        : filterMethod;
    setDatas(filterMaterial);
  }, []);

  return (
    <div className="body-container">
      <div className="body-container__header">
        <h1 className="body-container__header__title">들어온 요청</h1>
        <h3 className="body-container__header__subtitle">
          파트너님에게 딱 맞는 요청서를 찾아보세요.
        </h3>
      </div>
      <FilterMenu
        handleToggle={handleToggle}
        methodSelected={selectedMethod}
        setMethodSelected={setSelectedMethod}
        materalSelected={selectedMaterial}
        setMaterialSelected={setSelectedMaterial}
      />
      <div className="dash-board">
        {datas.map((data: DataInterface) => {
          if (toggle && data.status !== '상담중') return null;
          else if (
            selectedMethod.length > 0 &&
            selectedMethod.filter((element) => data.method.includes(element))
          )
            return null;
          else if (
            selectedMaterial.length > 0 &&
            selectedMaterial.filter((element) =>
              data.material.includes(element)
            )
          )
            return null;
          return <Card key={data['id']} data={data} />;
        })}
      </div>
    </div>
  );
};

export default Dashboard;
