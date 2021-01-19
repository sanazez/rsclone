import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import JobProfile from './Job';
import * as axios from 'axios';
import { loadJobProfileActionCreater } from '../../redux/header-reducer';

class JobProfileContainer extends React.Component {
  componentDidMount() {
    this.props.onLoadProfileInfo([]);
    let searchJob = this.props.match.params.jobId;
    axios.get(`http://localhost:9000/id?idJob=${searchJob}`)
      .then(res => {
        this.props.onLoadProfileInfo((res.data).flat(1));
      })
  }
  render() {
    return <JobProfile profileInfo={this.props.profileInfo[0]} />
  }
}

const mapStateToProps = (state) => ({
  profileInfo: state.headerElement.jobPage
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
