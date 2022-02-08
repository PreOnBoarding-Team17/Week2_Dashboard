import React, { useState, useRef } from 'react';
import { METHOD, METHOD_NAME, MATERIAL, MATERIAL_NAME } from 'Utils/Constants';
import Filter from 'Components/Common/Filter';
import Toggle from 'Components/Common/Toggle';
import 'Components/Dashboard/scss/FilterMenu.scss';
import { IFilterMenu } from 'Utils/Interface';

const FilterMenu: React.FC<IFilterMenu> = ({
  handleToggle,
  methodSelected,
  setMethodSelected,
  materalSelected,
  setMaterialSelected,
}) => {
  const [isToggleSelect, setIsToggleSelect] = useState<string>('');
  const methodRef = useRef<HTMLButtonElement>(null);
  const materialRef = useRef<HTMLButtonElement>(null);

  const onClickSelect = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    name: string
  ) => {
    e.preventDefault();

    if (name === 'method') {
      methodRef.current?.classList.toggle('focused');
    } else if (name === 'material') {
      materialRef.current?.classList.toggle('focused');
    }
    if (isToggleSelect === '') {
      setIsToggleSelect(name);
    } else {
      setIsToggleSelect('');
      methodRef.current?.classList.remove('focused');
      materialRef.current?.classList.remove('focused');
    }
  };

  // console.log(toggle);
  return (
    <div className="filter">
      <div className="filter__select-item">
        <Filter
          title={METHOD_NAME}
          name="method"
          options={METHOD}
          isToggleSelect={isToggleSelect === 'method'}
          setIsToggleSelect={setIsToggleSelect}
          buttonRef={methodRef}
          onClickSelect={onClickSelect}
          selected={methodSelected}
          setSelected={setMethodSelected}
        />
        <Filter
          title={MATERIAL_NAME}
          name="material"
          options={MATERIAL}
          isToggleSelect={isToggleSelect === 'material'}
          setIsToggleSelect={setIsToggleSelect}
          buttonRef={materialRef}
          onClickSelect={onClickSelect}
          selected={materalSelected}
          setSelected={setMaterialSelected}
        />
      </div>
      <div className="filter__toggle-item">
        <Toggle handleToggle={handleToggle} />
      </div>
    </div>
  );
};

export default FilterMenu;
