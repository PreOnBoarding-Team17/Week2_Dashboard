import React, { useState } from 'react';
import { METHOD, METHOD_NAME, MATERIAL, MATERIAL_NAME } from 'Utils/Constants';
import Filter from 'Components/Common/Filter';
import Toggle from 'Components/Common/Toggle';
import 'Components/Dashboard/scss/FilterMenu.scss';

function FilterMenu() {
  const [toggle, setToggle] = useState<boolean>(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  console.log(toggle);
  return (
    <div className="filter">
      <div className="filter__select-item">
        <Filter title={METHOD_NAME} name="method" options={METHOD} />
        <Filter title={MATERIAL_NAME} name="material" options={MATERIAL} />
      </div>
      <div className="filter__toggle-item">
        <Toggle handleToggle={handleToggle} />
      </div>
    </div>
  );
}

export default FilterMenu;
