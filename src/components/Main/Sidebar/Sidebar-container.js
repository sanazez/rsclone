import React from 'react';
import {connect} from 'react-redux';
import Sidebar from './Sidebar';
import {loadAllActionCreater} from "../../../redux/header-reducer";
import {getKeyWordsCitiesAC, setCurrentCityAC, updateSearchTextCities} from "../../../redux/sidebar-reducer";
import {apiGetKeyWordsCities} from "../../../api/api";


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


    render() {
        return <Sidebar textKeyWords={this.props.text} getKeyWords={this.getKeyWordsCities}
                        updateTextKeyWords={this.props.updateTextKeyWords} cities={this.props.cities}
                        setCity={this.props.setCity}/>
    }
}

const mapStateToProps = (state) => {
    return {
        text: state.sidebarState.searchCityText,
        cities: state.sidebarState.keyWords,

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
            console.log(action)
            dispatch(action);
        },
        setJobs: (jobs, pages) => {
            let action = loadAllActionCreater(jobs, pages);
            dispatch(action);
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer);