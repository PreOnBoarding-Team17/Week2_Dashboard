import React, { useCallback, useRef, useState } from 'react';
import 'Components/Common/Filter/scss/Filter.scss';
import { IFilter } from 'Utils/Interface';

const Filter: React.FC<IFilter> = ({
  title,
  name,
  options,
  isToggleSelect,
  setIsToggleSelect,
  buttonRef,
  onClickSelect,
  selected,
  setSelected,
}) => {
  const onChangeCheckbox = useCallback(
    (option: string) => {
      if (selected.find((item: string) => item === option) === undefined) {
        console.log([...selected, option]);
        setSelected([...selected, option]);
      } else {
        console.log(selected.filter((item: string) => item !== option));
        setSelected(selected.filter((item: string) => item !== option));
      }
      setIsToggleSelect('');
      buttonRef.current?.classList.remove('focused');
    },
    [selected, setSelected, setIsToggleSelect, buttonRef]
  );

  console.log(name);
  return (
    <div className={`select-item filter__select-item__${name}`}>
      <button
        type="button"
        className="select-item__title"
        onClick={(e) => onClickSelect(e, name)}
        ref={buttonRef}
      >
        {title}
        {selected.length > 0 && (
          <span className="select-item__title__count">({selected.length})</span>
        )}
        <span className="arrow-down-icon"></span>
      </button>
      {isToggleSelect && (
        <ul className="select-item__checkbox-wrap">
          {options.map((option: string, index: number) => {
            const isChecked =
              selected.find((item: string) => item === option) !== undefined
                ? true
                : false;
            return (
              <li key={index} className="checkbox-item">
                <input
                  type="checkbox"
                  id={option}
                  name={option}
                  value={option}
                  onChange={(e) => onChangeCheckbox(e.target.value)}
                  checked={isChecked}
                />
                <label htmlFor={option}>
                  <span></span>
                  {option}
                </label>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default React.memo(Filter);
