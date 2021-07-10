import React from 'react';

import './App.css';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import TodoApp from './components/todo-app/todo-app.component';

const App = () => {
  return (
    <div className="App">
      <Header />
      <TodoApp />
      <Footer />
    </div>
  );
};

export default App;
