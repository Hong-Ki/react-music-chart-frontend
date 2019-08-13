import React, { FC } from 'react';
import logo from './logo.svg';
import './App.css';

import Index from './components/Index/Index';

const App: FC = () => {
  return (
    <>
      <div className="wrapper">{'  '}</div>
      <Index text={['WELCOME', 'TO', 'MUSIC', 'CHARTS']} />
    </>
  );
};

export default App;
