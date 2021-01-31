import React from 'react';
import './App.css';
import MainPage from './components/MainPage/MainPage';
import JobProfileContainer from './components/JobPage/JobContainer';
import {Route, Switch, Redirect, BrowserRouter} from 'react-router-dom';


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Route exact path="/">
                    <Redirect to='/page/1'/>
                </Route>
                <Route path='/page/' component={MainPage}/>
                <Route exact path='/job/:jobId' render={() => <JobProfileContainer/>}/>
            </div>
        </BrowserRouter>

    );
}

export default App;
