import React from 'react';
import classes from './Main.module.css';
import ContentContainer from './Content/ContentContainer';
import SidebarContainer from './Sidebar/Sidebar-container';

const Main = (props) => {
    return <main className={classes.main}>
        <SidebarContainer />
        <ContentContainer props={props} />
    </main>
}

export default Main;