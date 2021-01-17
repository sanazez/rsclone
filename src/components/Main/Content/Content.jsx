import React from 'react';
import classes from './Content.module.css';
import JobCardContainer from '../Card/CardContainer';

const Content = (props) => {
  console.log(props);
  return <div className={classes.jobsContainer}>
    {props.arr.map((val, index) => {
      return <JobCardContainer cardIndex={index} key={index} />
    })}
  </div>
}

export default Content;