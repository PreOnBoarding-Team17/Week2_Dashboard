import React, { useState, useRef } from 'react';
import { METHOD, METHOD_NAME, MATERIAL, MATERIAL_NAME } from 'Utils/Constants';
import Filter from 'Components/Common/Filter';
import Toggle from 'Components/Common/Toggle';
import 'Components/Dashboard/scss/FilterMenu.scss';
import RefreshIcon from 'Assets/RefreshIcon.png';
import useFilter from 'Utils/Hooks/useFilter';

export default function FilterMenu() {
  const [isToggleSelect, setIsToggleSelect] = useState<string>('');
  const methodRef = useRef<HTMLButtonElement>(null);
  const materialRef = useRef<HTMLButtonElement>(null);

  const {
    toggle,
    handleToggle,
    handleReset,
    method,
    material,
    setMethod,
    setMaterial,
  } = useFilter();

  const onClickSelect = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    name: string
  ) => {
    e.preventDefault();
    if (isToggleSelect === '') {
      setIsToggleSelect(name);
    } else {
      setIsToggleSelect('');
    }
  };

  const handleFilterReset = () => {
    handleReset();
    setIsToggleSelect('');
    methodRef.current?.classList.remove('focused');
    materialRef.current?.classList.remove('focused');
  };

  return (
    <div className="filter">
      <div className="filter__select-item">
        <Filter
          title={METHOD_NAME}
          name="method"
          options={METHOD}
          isToggleSelect={isToggleSelect === 'method'}
          buttonRef={methodRef}
          onClickSelect={onClickSelect}
          selected={method}
          setSelected={setMethod}
        />
        <Filter
          title={MATERIAL_NAME}
          name="material"
          options={MATERIAL}
          isToggleSelect={isToggleSelect === 'material'}
          buttonRef={materialRef}
          onClickSelect={onClickSelect}
          selected={material}
          setSelected={setMaterial}
        />
        {(method.length + material.length > 0 || toggle) && (
          <button className="filter__select-reset" onClick={handleFilterReset}>
            <img src={RefreshIcon} alt="필터링 리셋" />
            필터링 리셋
          </button>
        )}
      </div>
      <div className="filter__toggle-item">
        <Toggle handleToggle={handleToggle} toggle={toggle} />
      </div>
    </div>
  );
}
