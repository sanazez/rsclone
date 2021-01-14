import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import classes from './Main.module.css';
import Content from './Content/Content';
import { uploadAll } from '../../redux/main-reducer'

const Main = (props) => {
  const onloadInfo = function (props) {
    let action = uploadAll();
    props.dispatch(action);
    return props
  }
  onloadInfo(props);
  console.log(props);
  return <main className={classes.main}>
    <Sidebar />
    <Content state={props.state} />
  </main>
}

export default Main;