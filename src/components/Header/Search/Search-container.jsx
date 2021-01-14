import React from 'react';
import { updateSearchTextActionCreater, searchJobsActionCreater } from '../../../redux/header-reducer';
import SearchHeader from './Search'
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
        searchText: state.headerElement.searchText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchJobs: () => {
            let action = searchJobsActionCreater();
            dispatch(action);
        },
        searchChange: (text) => {
            let action = updateSearchTextActionCreater(text);
            dispatch(action);
        }
    }
}
const SearchHeaderContainer = connect(mapStateToProps, mapDispatchToProps)(SearchHeader);
export default SearchHeaderContainer; 