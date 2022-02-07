import React, { useState } from 'react';
import 'Components/Common/Filter/scss/Filter.scss';
import { IFilter } from 'Utils/Interface';
import ArrowDownIcon from 'Assets/ArrowDown.png';

const Filter: React.FC<IFilter> = ({ title, name, options }) => {
  const [isToggle, setIsToggle] = useState<boolean>(false);

  const onClickSelect = () => {
    // e.preventDefault();
    console.log(!isToggle);
    setIsToggle(!isToggle);
  };

  return (
    <div className={`select-item filter__select-item__${name}`}>
      <form name={name}>
        <button
          type="button"
          className="select-item__title"
          onClick={onClickSelect}
        >
          {title}
          <img src={ArrowDownIcon} alt="arrow down" />
        </button>
        {isToggle && (
          <ul className="select-item__checkbox-wrap">
            {options.map((option: string, index: number) => {
              return (
                <li key={index} className="checkbox-item">
                  <input type="checkbox" id={option} />

                  <label htmlFor={option}>
                    <span></span>
                    {option}
                  </label>
                </li>
              );
            })}
          </ul>
        )}
      </form>
    </div>
  );
};

export default Filter;
