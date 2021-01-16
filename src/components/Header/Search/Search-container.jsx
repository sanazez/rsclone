import React from 'react';
import { updateSearchTextActionCreater, loadAllActionCreater } from '../../../redux/header-reducer';
import SearchHeader from './Search'
import { connect } from 'react-redux';
import * as axios from 'axios';


class SearcContainer extends React.Component {
    componentDidMount() {
        axios.get(`http://localhost:9000/`)
            .then(res => {
                this.props.setJobs(res.data);
            })
    }

    searchJobsOnClick = () => {
        axios.get(`http://localhost:9000/testAPI/search?search=${this.props.searchText}`)
            .then(res => {
                this.props.setJobs(res.data);
            })

    }
    render() {
        return <SearchHeader searchChange={this.props.searchChange} searchJobs={this.searchJobsOnClick} searchText={this.props.searchText} />
    }
}

const mapStateToProps = (state) => {
    return {
        searchText: state.headerElement.searchText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchChange: (text) => {
            let action = updateSearchTextActionCreater(text);
            dispatch(action);
        },
        setJobs: (jobs) => {
            let action = loadAllActionCreater(jobs);
            dispatch(action)
        },

    }
}
const SearchHeaderContainer = connect(mapStateToProps, mapDispatchToProps)(SearcContainer);
export default SearchHeaderContainer; 