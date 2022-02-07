import React, { useEffect, useState } from 'react';
import Card from 'Components/Common/Card';
import { callAPI } from 'API';
import { DataInterface } from 'Utils/Interface';

import 'Components/Dashboard/scss/Dashboard.scss';

const Dashboard: React.FC = () => {
  const [datas, setDatas] = useState<DataInterface[]>([]);
  const requestGET = async () => {
    await callAPI.get('/').then((res) => setDatas(res.data));
  };

  useEffect(() => {
    requestGET();
  }, []);

  return (
    <div className="dash-board">
      {datas.map((data: DataInterface) => (
        <Card key={data['id']} data={data} />
      ))}
    </div>
  );
};

export default Dashboard;
