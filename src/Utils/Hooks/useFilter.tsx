import { useState, useEffect } from 'react';
import useApi from './useApi';

export default function useFilter() {
  const [toggle, setToggle] = useState<boolean>(false);
  const [method, setMethod] = useState<string[]>([]);
  const [material, setMaterial] = useState<string[]>([]);

  const { datas, setCardDatas } = useApi();

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleReset = () => {
    setMethod([]);
    setMaterial([]);
    if (toggle) setToggle(false);
  };

  useEffect(() => {
    const filterToggle = toggle
      ? datas.filter((element) => element.status === '상담중')
      : datas;

    const filterMethod =
      method.length > 0
        ? filterToggle.filter((element) => {
            return method.every((selectedMethod) =>
              element.method.find((method) => method === selectedMethod)
            );
          })
        : filterToggle;

    const filterMaterial =
      material.length > 0
        ? filterMethod.filter((element) => {
            return material.every((selectedMaterial) =>
              element.material.find((material) => material === selectedMaterial)
            );
          })
        : filterMethod;

    setCardDatas(filterMaterial);
  }, [toggle, method, material]);

  return {
    toggle,
    handleToggle,
    handleReset,
    method,
    material,
    setMethod,
    setMaterial,
  };
}
