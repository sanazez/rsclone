import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import classes from './Main.module.css';
import ContentContainer from './Content/ContentContainer';

const Main = (props) => {
  props.onloadInfo();
  return <main className={classes.main}>
    <Sidebar />
    <ContentContainer />
  </main>
}

export default Main;