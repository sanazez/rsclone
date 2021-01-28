import React from 'react';
import {
    updateSearchTextActionCreater,
    loadAllActionCreater,
    getKeyWordsAC,
    clearKeyWordsAC
} from '../../../redux/header-reducer';
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

    searchJobsOnClick = (text) => {
        console.log(text)
        axios.get(`http://localhost:9000/testAPI/search?search=${text}&area=${this.props.cityId}`)
            .then(res => {
                console.log(res.data)
                if (res.data.items && res.data.items.length) {
                    this.props.setJobs(res.data.items, res.data.pages);
                }
            })
    }


    getKeywordFromSearch = (text) => {
        axios.get(`http://localhost:9000/keyword?word=${text}`)
            .then(res => {
                if (this.props.searchText.length >= 2) {
                    if (res.data.items) this.props.getKeyWords(res.data.items);
                } else this.props.getKeyWords([]);
            })
    }

    render() {
        return <SearchHeader searchChange={this.props.searchChange} searchJobs={this.searchJobsOnClick}
                             searchText={this.props.searchText} clearKeyWords={this.props.clearKeyWords}
                             getKeyWord={this.getKeywordFromSearch}
                             keyWords={this.props.keyWords}/>
    }
}

const mapStateToProps = (state) => {
    return {
        searchText: state.headerElement.searchText,
        keyWords: state.headerElement.keyWords,
        cityId: state.sidebarState.currentCityId
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
            dispatch(action);
        },
        getKeyWords: (keyWords) => {
            let action = getKeyWordsAC(keyWords);
            dispatch(action);
        },
        clearKeyWords: () => {
            let action = clearKeyWordsAC();
            dispatch(action);
        }
    }
}

const SearchHeaderContainer = connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
export default SearchHeaderContainer; 