import React, { useState } from 'react';
import 'Components/Common/Toggle/scss/Toggle.scss';

function Toggle() {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!checked);
  };

  return (
    <div className="Toggle__Container">
      <label htmlFor="Toggle" className="Toggle__Wrapper">
        <input id="Toggle" type="checkbox" onClick={handleToggle} />
        <span className="Toggle__Slider"></span>
      </label>
      <label htmlFor="Toggle">상담 중인 요청 보기</label>
    </div>
  );
}

export default Toggle;
