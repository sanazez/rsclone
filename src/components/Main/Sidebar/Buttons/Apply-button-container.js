import {connect} from 'react-redux';
import ApplyButton from "./Apply-button";
import {loadAllActionCreater} from "../../../../redux/header-reducer";
import React from "react";
import {apiSearch} from "../../../../api/api";

class ApplyButtonContainer extends React.Component {
    getJobsFromFilter = () => {
               apiSearch(this.props.searchText, Number(this.props.cityId), this.props.period, this.props.experience, this.props.schedule, this.props.employment, this.props.typeSorting)
            .then(res => {
                if (res.data.items && res.data.items.length) {
                    this.props.setJobs(res.data.items, res.data.pages);
                }
            })
    }

    render() {
        return <ApplyButton getJobs={this.getJobsFromFilter}/>
    }
}

const mapStateToProps = (state) => {
    return {
        cityId: state.sidebarState.currentCityId,
        searchText: state.headerElement.searchText,
        period: state.sidebarState.period,
        experience: state.sidebarState.experience,
        schedule: state.sidebarState.schedule,
        employment: state.sidebarState.employment,
        typeSorting: state.sidebarState.typeSorting
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setJobs: (jobs, pages) => {
            let action = loadAllActionCreater(jobs, pages);
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplyButtonContainer)