import React from 'react';

function Toggle() {
  return (
    <div className="filter__toggle-item__counseling">
      <input type="checkbox" id="counseling" />
      <label htmlFor="counseling">상담 중인 요청만 보기</label>
    </div>
  );
}

export default Toggle;
