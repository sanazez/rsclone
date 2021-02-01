import React from 'react';
import {connect} from 'react-redux';
import Content from "./Content";
import {changePageCreater, loadAllActionCreater} from "../../../redux/header-reducer";
import * as axios from 'axios';


class ContentConteinerDiff extends React.Component {
    componentDidMount() {
        axios.get(`http://localhost:9000/page?page=${this.props.currentPage - 1}&search=${this.props.searchText}&area=${this.props.currentCityId}&period=${this.props.period}&experience=${this.props.experience}`)
            .then(res => {
                if (res.data.items && res.data.items.length) {
                    this.props.setJobs(res.data.items, res.data.pages);
                }
            })
    }

    getJoob = () => {
        axios.get(`http://localhost:9000/page?page=${this.props.currentPage - 1}&search=${this.props.searchText}&area=${this.props.currentCityId}&period=${this.props.period}&experience=${this.props.experience}`)
            .then(res => {
                if (res.data.items && res.data.items.length) {
                    this.props.setJobs(res.data.items, res.data.pages);
                }
            })
    }

    render() {
        return <Content arr={this.props.arr}
        />
    }
}

const mapStateToProps = (state) => {
    if (!state.headerElement.searchResults || !state.headerElement.searchResults.length) {
        return {
            arr: [1, 2, 3, 4, 5],
            pages: 1,
        }
    }
    return {
        arr: state.headerElement.searchResults, pages: state.headerElement.pagesNumber,
        searchText: state.headerElement.searchText,
        currentCityId: state.sidebarState.currentCityId,
        period: state.sidebarState.period,
        experience: state.sidebarState.experience,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onChangePage: (value) => {
            console.log(value);
            let action = changePageCreater(value);
            dispatch(action);
        },
        setJobs: (jobs, pages, searchPage) => {
            let action = loadAllActionCreater(jobs, pages, searchPage);
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentConteinerDiff)