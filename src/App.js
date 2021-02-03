import React from 'react';
import './App.css';
import MainPage from './components/MainPage/MainPage';
import JobProfileContainer from './components/JobPage/JobContainer';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Footer from './components/Footer/Footer';

const App = () => {
  return <BrowserRouter>
    <Provider store={store}>
      <div className="wrapper">
        <Switch>
          <Route exact path="/">
            <Redirect to='/page/1' />
          </Route>
          <Route exact path='/page/:pageId' component={MainPage} />
          <Route exact path='/job/:jobId' render={() => <JobProfileContainer />} />
        </Switch>
      </div>
      <Footer />
    </Provider>
  </BrowserRouter>
}

export default App;
