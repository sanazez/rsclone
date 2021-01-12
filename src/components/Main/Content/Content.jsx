import React from 'react';
import JobCard from '../Card/Card';
const arr = [1, 2, 3, 4, 5];

const Content = () => {
  return <div className="jobsContainer">
    {arr.map(() => {
      return <JobCard />
    })}
  </div>
}

export default Content;