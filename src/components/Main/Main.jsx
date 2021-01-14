import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import classes from './Main.module.css';


const Main = (props) => {
  return <main className={classes.main}>
    <Sidebar />
  </main>
}

export default Main;