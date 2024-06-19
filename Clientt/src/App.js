// client/src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskList from './components/TaskList';
import './styles.css';

function App() {
  return (
    <div className="container">
      <div className="text-center mb-1">
        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Shanture Logo" className="logo" />
      </div>
      <h1 className="text-center main-text">Todo List</h1>
      <TaskList />
    </div>
  );
}

export default App;

