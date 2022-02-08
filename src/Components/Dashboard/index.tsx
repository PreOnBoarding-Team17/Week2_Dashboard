import React, { useEffect, useState } from 'react';
import Card from 'Components/Common/Card';
import FilterMenu from 'Components/Dashboard/FilterMenu';
import { callAPI } from 'API';
import { DataInterface } from 'Utils/Interface';

import 'Components/Dashboard/scss/Dashboard.scss';

const Dashboard: React.FC = () => {
  const [datas, setDatas] = useState<DataInterface[]>([]);
  const [methodSelected, setMethodSelected] = useState<string[]>([]);
  const [materalSelected, setMaterialSelected] = useState<string[]>([]);
  const requestGET = async () => {
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
        methodSelected={methodSelected}
        setMethodSelected={setMethodSelected}
        materalSelected={materalSelected}
        setMaterialSelected={setMaterialSelected}
      />
      <div className="dash-board">
        {datas.map((data: DataInterface) => (
          <Card key={data['id']} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
