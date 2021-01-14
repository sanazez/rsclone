import React from 'react';
import { updateSearchTextActionCreater, searchJobsActionCreater } from '../../../redux/header-reducer';
import SearchHeader from './Search'



const SearchHeaderContainer = (props) => {
    const searchChange = (text) => {
        let action = updateSearchTextActionCreater(text);
        props.store.dispatch(action);
    }

    const searchJobs = () => {
        let action = searchJobsActionCreater();
        props.store.dispatch(action);
    }

    return (
        <SearchHeader searchJobs={searchJobs} searchChange={searchChange} />
    );
}
export default SearchHeaderContainer;