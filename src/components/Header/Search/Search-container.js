import React from 'react';
import {
    updateSearchTextActionCreater,
    loadAllActionCreater,
    getKeyWordsAC,
    clearKeyWordsAC
} from '../../../redux/header-reducer';
import SearchHeader from './Search'
import {connect} from 'react-redux';
import {apiGetKeywordFromSearch, apiSearch} from "../../../api/api";


class SearchContainer extends React.Component {
    componentDidMount() {
    }

    searchJobsOnClick = (text) => {
        apiSearch(text, this.props.cityId, this.props.period, this.props.experience, this.props.schedule, this.props.employment, this.props.typeSorting)
            .then(res => {
                if (res.data.items && res.data.items.length) {
                    this.props.setJobs(res.data.items, res.data.pages);
                }
            })
    }

    getKeywordFromSearch = (text) => {
        apiGetKeywordFromSearch(text)
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
        cityId: state.sidebarState.currentCityId,
        period: state.sidebarState.period,
        experience: state.sidebarState.experience,
        schedule: state.sidebarState.schedule,
        employment: state.sidebarState.employment,
        typeSorting: state.sidebarState.typeSorting
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