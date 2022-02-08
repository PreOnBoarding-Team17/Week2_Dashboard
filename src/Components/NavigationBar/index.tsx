import React from 'react';
import DesktopBar from 'Components/NavigationBar/DesktopBar';
import MobileBar from 'Components/NavigationBar/MobileBar';

export default function NavigationBar() {
  return (
    <div className="NavigationBar__Container">
      <DesktopBar />
      <MobileBar />
    </div>
  );
}
