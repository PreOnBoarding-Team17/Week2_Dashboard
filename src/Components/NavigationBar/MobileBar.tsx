import React, { useState } from 'react';
import Logo from 'Assets/Logo_White.png';
import MenuIcon from 'Assets/MenuIcon.png';
import Modal from 'Components/NavigationBar/Modal';
import 'Components/NavigationBar/scss/MobileBar.scss';

export default function MobileBar() {
  const [open, setOpen] = useState<boolean>(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <nav className="MobileBar__Container">
      <img
        className="MobileBar__Menu"
        src={MenuIcon}
        alt="메뉴 아이콘"
        onClick={handleClick}
      />
      <img className="MobileBar__Logo" src={Logo} alt="로고" />
      <Modal data={open} handler={handleClick} />
    </nav>
  );
}
