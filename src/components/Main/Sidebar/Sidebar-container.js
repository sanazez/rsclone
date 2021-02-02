import React from 'react';
import {connect} from 'react-redux';
import Sidebar from './Sidebar';
import {loadAllActionCreater} from "../../../redux/header-reducer";
import * as axios from "axios";
import {getKeyWordsCitiesAC, setCurrentCityAC, updateSearchTextCities} from "../../../redux/sidebar-reducer";
import {apiGetKeyWordsCities, apiSearch} from "../../../api/api";


class SidebarContainer extends React.Component {
    getKeyWordsCities = (text) => {
        apiGetKeyWordsCities(text)
            .then(res => {
                if (this.props.text.length >= 2) {
                    if (res.data.items) {
                        this.props.getKeyWords(res.data.items)
                    }
                } else {
                    this.props.getKeyWords([]);
                }
            })
    }

    getJobsFromCity = (city, cityId) => {
        this.props.setCity(city, cityId)
        apiSearch(this.props.searchText, cityId, this.props.period, this.props.experience, this.props.schedule, this.props.employment)
            .then(res => {
                if (res.data.items && res.data.items.length) {
                    this.props.setJobs(res.data.items, res.data.pages);
                }
            })
    }

    render() {
        return <Sidebar textKeyWords={this.props.text} getKeyWords={this.getKeyWordsCities}
                        updateTextKeyWords={this.props.updateTextKeyWords} cities={this.props.cities}
                        getJobs={this.getJobsFromCity}/>
    }
}

const mapStateToProps = (state) => {
    return {
        text: state.sidebarState.searchCityText,
        cities: state.sidebarState.keyWords,
        cityId: state.sidebarState.cityId,
        searchText: state.headerElement.searchText,
        period: state.sidebarState.period,
        experience: state.sidebarState.experience,
        schedule: state.sidebarState.schedule,
        employment: state.sidebarState.employment
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getKeyWords: (keyWords) => {
            let action = getKeyWordsCitiesAC(keyWords);
            dispatch(action);
        },
        updateTextKeyWords: (text) => {
            let action = updateSearchTextCities(text);
            dispatch(action)
        },
        setCity: (city, cityId) => {
            let action = setCurrentCityAC(city, cityId);
            dispatch(action);
        },
        setJobs: (jobs, pages) => {
            let action = loadAllActionCreater(jobs, pages);
            dispatch(action);
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer);