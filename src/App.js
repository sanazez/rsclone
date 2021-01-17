import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';



const App = (props) => {
  return (
    <div className="wrapper">
      <Header />
      <Main />
    </div>
  );
}

export default App;
