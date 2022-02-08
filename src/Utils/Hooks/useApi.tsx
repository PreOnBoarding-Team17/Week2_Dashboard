import { useState, useEffect } from 'react';
import { getAPI } from 'API';
import { DataInterface } from 'Utils/Interface';

export default function useApi() {
  const [datas, setDatas] = useState<DataInterface[]>([]);
  const [cardDatas, setCardDatas] = useState<DataInterface[]>([]);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const data = await getAPI();
        setDatas(data);
        setCardDatas(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAPI();
  }, []);

  return { datas, cardDatas, setCardDatas };
}
