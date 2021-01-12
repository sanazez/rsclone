import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import classes from './Main.module.css';
import Content from './Content/Content';

const Main = (props) => {
  return <main className={classes.main}>
    <Sidebar />
    <Content />
  </main>
}

export default Main;