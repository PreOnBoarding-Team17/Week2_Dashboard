import React from 'react';
import 'Components/Common/Toggle/scss/Toggle.scss';
import { IToggle } from 'Utils/Interface';

export default function Toggle({ handleToggle }: IToggle) {
  return (
    <div className="Toggle__Container" onChange={handleToggle}>
      <label htmlFor="Toggle" className="Toggle__Wrapper">
        <input id="Toggle" type="checkbox" />
        <span className="Toggle__Slider"></span>
      </label>
      <label htmlFor="Toggle">상담 중인 요청만 보기</label>
    </div>
  );
}
