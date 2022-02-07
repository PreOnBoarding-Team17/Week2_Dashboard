import React from 'react';
import Logo from 'Assets/Logo_White.png';
import CompanyIcon from 'Assets/CompanyIcon_White.png';
import 'Components/NavigationBar/scss/DesktopBar.scss';

export default function DesktopBar() {
  return (
    <nav className="DesktopBar__Container">
      <img className="DesktopBar__Logo" src={Logo} alt="로고" />
      <div className="DesktopBar__Wrapper">
        <div className="DesktopBar__Company">
          <img src={CompanyIcon} alt="회사 아이콘" />
          <p>A 가공 업체</p>
        </div>
        <div className="DesktopBar__Divider">|</div>
        <p>로그아웃</p>
      </div>
    </nav>
  );
}
