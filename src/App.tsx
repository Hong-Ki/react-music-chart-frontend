import React, { FC } from 'react';
import './App.css';

import ModalContainer from './containers/ModalContainer';
import ChartsContainer from './containers/ChartsContainer';

const App: FC = () => {
  return (
    <>
      <div className="wrapper">
        <ChartsContainer />
      </div>
      <ModalContainer />
    </>
  );
};

export default App;
