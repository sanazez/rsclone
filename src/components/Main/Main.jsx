import React from 'react';
import { Route } from 'react-router-dom';
import classes from './Main.module.css';
import ContentContainer from './Content/ContentContainer';
import SidebarContainer from './Sidebar/Sidebar-container';

const Main = (props) => {
    return <main className={classes.main}>
        <SidebarContainer />
        <ContentContainer />
        {/* <Route exact path='/page/:pageId' render={() => <ContentContainer />} /> */}
    </main>
}

export default Main;