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
      logo: state.headerElement.searchResults[props.cardIndex].company_logo_url,
      company: state.headerElement.searchResults[props.cardIndex].company_name,
      title: state.headerElement.searchResults[props.cardIndex].title,
      type: state.headerElement.searchResults[props.cardIndex].job_type,
      location: state.headerElement.searchResults[props.cardIndex].candidate_required_location,
      created: countDays(state.headerElement.searchResults[props.cardIndex].publication_date)
    }
  }
  return {}
}

const JobCardContainer = connect(mapStateToProps)(JobCard)
export default JobCardContainer;