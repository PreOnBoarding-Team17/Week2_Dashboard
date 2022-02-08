import React, { useEffect, useState } from 'react';
import Card from 'Components/Common/Card';
import FilterMenu from 'Components/Dashboard/FilterMenu';
import { callAPI } from 'API';
import { DataInterface } from 'Utils/Interface';

import 'Components/Dashboard/scss/Dashboard.scss';

const Dashboard: React.FC = () => {
  const [datas, setDatas] = useState<DataInterface[]>([]);
  const [selectedMethod, setSelectedMethod] = useState<string[]>([]);
  const [selectedMaterial, setSelectedMaterial] = useState<string[]>([]);
  const [toggle, setToggle] = useState<boolean>(false);

  const requestGET = async (): Promise<void> => {
    await callAPI.get('/').then((res) => setDatas(res.data));
  };

  useEffect(() => {
    requestGET();
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
