import React from 'react';
import { connect } from 'react-redux';
import JobCard from './Card';

function countDays(creatureDate) {
  let res = Date.now() - Date.parse(creatureDate);
  res /= (1000 * 60 * 60 * 24);
  if (res < 1) {
    return 'today'
  }
  return (Math.round(res) === 1) ? '1 day ago' : `${Math.round(res)} days ago`
}

let mapStateToProps = (state, props) => {
  if (state.headerElement.searchResults && state.headerElement.searchResults.length) {
    return {
      logo: state.headerElement.searchResults[props.cardIndex].company_logo,
      company: state.headerElement.searchResults[props.cardIndex].company,
      title: state.headerElement.searchResults[props.cardIndex].title,
      type: state.headerElement.searchResults[props.cardIndex].type,
      location: state.headerElement.searchResults[props.cardIndex].location,
      created: countDays(state.headerElement.searchResults[props.cardIndex].created_at)
    }
  }
  return {}
}

const JobCardContainer = connect(mapStateToProps)(JobCard)
export default JobCardContainer;