import React from 'react';
import Logo from 'Assets/Logo_Blue.png';
import CompanyIcon from 'Assets/CompanyIcon_Black.png';
import { IModal } from 'Utils/Interface';
import 'Components/NavigationBar/scss/Modal.scss';

export default function Modal({ data, handler }: IModal) {
  return (
    <>
      <div className={data ? 'Modal__Container' : 'Modal__Container close'}>
        <div className="Modal__LogoBox">
          <img src={Logo} alt="로고" />
        </div>
        <div className="Modal__Menu">
          <img src={CompanyIcon} alt="회사 아이콘" />
          <p>파트너정밀가공</p>
        </div>
        <div className="Modal__Menu">
          <p>로그아웃</p>
        </div>
      </div>
      <div
        className={data ? 'Modal__Overlay' : 'Modal__Overlay hide'}
        onClick={handler}
      ></div>
    </>
  );
}
