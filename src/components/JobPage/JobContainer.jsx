import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import JobProfile from './Job';
import * as axios from 'axios';
import { loadJobProfileActionCreater } from '../../redux/header-reducer';

function countDays(creatureDate) {
  let res = Date.now() - Date.parse(creatureDate);
  res /= (1000 * 60 * 60 * 24);
  if (res < 1) {
      return 'today'
  }
  return (Math.round(res) === 1) ? '1 day ago' : `${Math.round(res)} days ago`
}

class JobProfileContainer extends React.Component {
  componentDidMount() {
    this.props.onLoadProfileInfo({});
    let searchJob = this.props.match.params.jobId;
    axios.get(`http://localhost:9000/id?idJob=${searchJob}`)
      .then(res => {
        console.log(searchJob);
        this.props.onLoadProfileInfo(res.data);
      })
  }
  render() {
    return <JobProfile profileInfo={this.props.profileInfo} countDays={this.props.countDays} />
  }
}

const mapStateToProps = (state) => ({
  profileInfo: state.headerElement.jobPage,
  countDays
});

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadProfileInfo: (value) => {
      let action = loadJobProfileActionCreater(value);
      dispatch(action);
    }
  }
}

let WithUrlJobProfileContainer = withRouter(JobProfileContainer);
export default connect(mapStateToProps, mapDispatchToProps)(WithUrlJobProfileContainer);
