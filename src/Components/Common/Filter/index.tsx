import React, { useRef, useState } from 'react';
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
}) => {
  const [count, setCount] = useState<number>(0);
  const [selected, setSelected] = useState<string[]>([]);

  const onChangeCheckbox = (option: string) => {
    if (selected.find((item: string) => item === option) === undefined) {
      setSelected([...selected, option]);
      setCount(count + 1);
    } else {
      setSelected(selected.filter((item: string) => item !== option));
      setCount(count - 1);
    }
    setIsToggleSelect('');
    buttonRef.current?.classList.remove('focused');
  };

  return (
    <div className={`select-item filter__select-item__${name}`}>
      <form name={name}>
        <button
          type="button"
          className="select-item__title"
          onClick={(e) => onClickSelect(e, name)}
          ref={buttonRef}
        >
          {title}
          {count > 0 && (
            <span className="select-item__title__count">({count})</span>
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
      </form>
    </div>
  );
};

export default Filter;
