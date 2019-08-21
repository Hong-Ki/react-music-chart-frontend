import React, { FC } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

import './index.scss';

import ModalContainer from './containers/ModalContainer';
import ChartsContainer from './containers/ChartsContainer';
import client from './modules/apollo/client';

const App: FC = () => {
  return (
    <ApolloProvider client={client}>
      <div className="wrapper">
        <ChartsContainer />
      </div>
      <ModalContainer />
    </ApolloProvider>
  );
};

export default App;
