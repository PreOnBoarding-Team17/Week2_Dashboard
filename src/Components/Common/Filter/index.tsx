import React from 'react';
import { METHOD, METHOD_NAME, MATERIAL, MATERIAL_NAME } from 'Utils/Constants';

function Filter() {
  return (
    <div className="filter__container">
      <div className="filter__select-item">
        <div className="filter__container__method">
          <select name="method" id="">
            {[METHOD_NAME, ...METHOD].map((method, index) => {
              const val = index === 0 ? '' : method;
              return (
                <option value={val} key={index}>
                  {method}
                </option>
              );
            })}
          </select>
        </div>
        <div className="filter__container__material">
          <select name="material" id="">
            {[MATERIAL_NAME, ...MATERIAL].map((material, index) => {
              const val = index === 0 ? '' : material;
              return (
                <option value={val} key={index}>
                  {material}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="filter__toggle-item">
        <div className="filter__container__counseling">
          <input type="checkbox" id="counseling" />
          <label htmlFor="counseling">상담 중인 요청만 보기</label>
        </div>
      </div>
    </div>
  );
}

export default Filter;
