import React from 'react';

import logo from './logo.svg';
import './App.css';

import List from './components/list/list.component';
import ITEMS_LIST from './components/list/list.data';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <List itemsList={ [...ITEMS_LIST] } />
        <List itemsList={ ["Get bread", "Get eggs"] } />
      </header>
    </div>
  );
};

export default App;
