import React from 'react';
import JobCard from '../Card/Card';
import classes from './Content.module.css';
const arr = [1, 2, 3, 4, 5];

const Content = (props) => {
  console.log(props);
  return <div className={classes.jobsContainer}>
    {arr.map((val, index) => {
      return <JobCard state={props.state.searchResults} cardIndex={index} />
    })}
  </div>
}

export default Content;