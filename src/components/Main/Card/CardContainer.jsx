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

let getInfoForCard = (state, props) => {
  console.log(state.searchResults);
  if (state.searchResults && state.searchResults.length) {
    return {
      logo: state.searchResults[props.cardIndex].company_logo,
      company: state.searchResults[props.cardIndex].company,
      title: state.searchResults[props.cardIndex].title,
      type: state.searchResults[props.cardIndex].type,
      location: state.searchResults[props.cardIndex].location,
      created: countDays(state.searchResults[props.cardIndex].created_at)
    }
  }
  return {}
}

const JobCardContainer = connect(getInfoForCard)(JobCard)
export default JobCardContainer;