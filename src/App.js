import React from 'react';
import './App.css';
import MainPage from './components/MainPage/MainPage';
import JobProfileContainer from './components/JobPage/JobContainer';
import { Route } from 'react-router-dom'; 
import { Switch } from 'react-router-dom';


const App = (props) => {
  return (
    <div className="wrapper">
      <Switch>
        <Route exact path='/' render={() => <MainPage />} />
        <Route exact path='/job/:jobId' render={() => <JobProfileContainer />} />
      </Switch>
    </div>
  );
}

export default App;
