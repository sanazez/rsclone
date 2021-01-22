import React from 'react';
import {updateSearchTextActionCreater, loadAllActionCreater} from '../../../redux/header-reducer';
import SearchHeader from './Search'
import {connect} from 'react-redux';
import * as axios from 'axios';


class SearchContainer extends React.Component {
    componentDidMount() {
        // axios.get(`http://localhost:9000/`)
        //     .then(res => {
        //         console.log(res.data);
        //         this.props.setJobs(res.data.items);
        //     })
        // axios.get(`http://localhost:9000/hh`)
        //     .then(res => {
        //         this.props.setJobs(res.data.items);
        //     })
    }

    searchJobsOnClick = () => {
        axios.get(`http://localhost:9000/testAPI/search?search=${this.props.searchText}`)
            .then(res => {
                if (res.data.items && res.data.items.length) {
                    console.log(res.data);
                    this.props.setJobs(res.data.items, res.data.pages);
                }
            })
    }

    getKeywordFromSearch = (text) => {
        if (text.length > 1) {
            axios.get(`http://localhost:9000/keyword?word=${text}`)
                .then(res => {
                    console.log(res)
                })
        }
    }

    render() {
        return <SearchHeader searchChange={this.props.searchChange} searchJobs={this.searchJobsOnClick}
                             searchText={this.props.searchText} getKeyWord={this.getKeywordFromSearch}/>
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
        setJobs: (jobs, pages) => {
            let action = loadAllActionCreater(jobs, pages);
            dispatch(action)
        }
    }
}

const SearchHeaderContainer = connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
export default SearchHeaderContainer; 