import React from 'react';
import 'Utils/Styles/_reset.scss';
import 'App.scss';

import Dashboard from 'Components/Dashboard';
import NavigationBar from 'Components/NavigationBar';

export default function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Dashboard />
    </div>
  );
}
