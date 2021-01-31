import React from 'react';
import classes from './Main.module.css';
import PaginationContainer from './Content/PaginationContainer';
import SidebarContainer from './Sidebar/Sidebar-container';
import ContentConteiner from "./Content/ContentConteiner";
import {Route, Switch} from "react-router-dom";

const Main = (props) => {
    return <main className={classes.main}>
        <SidebarContainer/>
        <div>
            <Switch>
                <Route path='/page/:pageId' component={ContentConteiner}/>
            </Switch>
            <PaginationContainer/>
        </div>

        {/* <Route exact path='/page/:pageId' render={() => <ContentContainer />} /> */}
    </main>
}

export default Main;