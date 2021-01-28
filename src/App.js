import React from 'react';
import './App.css';
import MainPage from './components/MainPage/MainPage';
import JobProfileContainer from './components/JobPage/JobContainer';
import {Route, Switch, Redirect} from 'react-router-dom';


const App = (props) => {
  return (
    <div className="wrapper">
      <Switch>
        <Route exact path="/">
          <Redirect to='/page/1' />
        </Route>
        <Route exact path='/page/:pageId' component={MainPage} />
        <Route exact path='/job/:jobId' render={() => <JobProfileContainer />} />
      </Switch>
    </div>
  );
}

export default App;
