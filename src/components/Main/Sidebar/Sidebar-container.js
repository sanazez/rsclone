import React from 'react';
import {connect} from 'react-redux';
import Sidebar from './Sidebar';
import {changeCityAC,} from "../../../redux/header-reducer";


const mapStateToProps = (state) => {
    return {
        city: state.headerElement.currentCity,
        text: state.headerElement.searchCity
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setCity: (city) => {
            let action = changeCityAC(city);
            dispatch(action);
        },
    }
}

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);
export default SidebarContainer;