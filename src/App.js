import React from 'react';

import './App.css';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import TodoApp from './page/todo-app/todo-app.component';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className='todoapp' >
        <TodoApp />
      </div>
      <Footer />
    </div>
  );
};

export default App;
