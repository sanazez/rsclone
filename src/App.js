import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';



const App = (props) => {
  console.log(props);
  return (
    <div className="wrapper">
      <Header dispatch={props.store.dispatch} state={props.state.mainElement} />
      <Main dispatch={props.store.dispatch} state={props.state.mainElement}/>
    </div>
  );
}

export default App;
