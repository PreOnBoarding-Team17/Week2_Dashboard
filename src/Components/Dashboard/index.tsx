import React from 'react';
import Card from 'Components/Common/Card';
import FilterMenu from 'Components/Dashboard/FilterMenu';
import { DataInterface } from 'Utils/Interface';
import useApi from 'Utils/Hooks/useApi';

import 'Components/Dashboard/scss/Dashboard.scss';

const Dashboard: React.FC = () => {
  const { cardDatas } = useApi();

  return (
    <div className="body-container">
      <div className="body-container__header">
        <h1 className="body-container__header__title">들어온 요청</h1>
        <h3 className="body-container__header__subtitle">
          파트너님에게 딱 맞는 요청서를 찾아보세요.
        </h3>
      </div>
      <FilterMenu />
      <div className="dash-board">
        {cardDatas.map((data: DataInterface) => {
          return <Card key={data['id']} data={data} />;
        })}
      </div>

      {cardDatas.length === 0 && (
        <div className="card-zero">조건에 맞는 견적 요청이 없습니다.</div>
      )}
    </div>
  );
};

export default Dashboard;
