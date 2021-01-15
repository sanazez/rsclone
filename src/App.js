import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import MainContainer from './components/Main/MainContainer';



const App = (props) => {
  console.log('ПЕРЕРЕНДЕР!!!')
  return (
    <div className="wrapper">
      <Header />
      <MainContainer />
    </div>
  );
}

export default App;
