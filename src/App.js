import React from 'react';

import './App.css';

import Header from './components/header/header.component';
import List from './components/list/list.component';
import ITEMS_LIST from './components/list/list.data';

const App = () => {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <List itemsList={ [...ITEMS_LIST] } />
        <List itemsList={ ["Get bread", "Get eggs"] } />
      </header>
    </div>
  );
};

export default App;
