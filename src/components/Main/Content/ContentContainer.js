import React from 'react';
import {connect} from 'react-redux';
import Content from './Content';
import {changePageCreater} from '../../../redux/header-reducer';
import {withRouter} from 'react-router-dom';
import {loadAllActionCreater} from '../../../redux/header-reducer';
import apiForContent from "../../../api/api";

class ContentContainer extends React.Component {
    componentDidMount() {
        this.props.setJobs([]);
        this.unsubscribeFromHistory = this.props.history.listen((location, action) => {
            let routedPage = location.pathname.split('/');
            if (routedPage[1] === 'page') {
                this.changePageInfo(routedPage[2]);
            }
        });
        let searchPage = this.props.match.params.pageId ? this.props.match.params.pageId : (this.props.currentPage || 1);
        this.props.onChangePage(this.props.match.params.pageId);
        apiForContent(searchPage, this.props.searchText, this.props.currentCityId, this.props.period, this.props.experience, this.props.schedule, this.props.employment)
            .then(res => {
                if (res.data.items && res.data.items.length) {
                    this.props.setJobs(res.data.items, res.data.pages)
                }
            })
    }

    componentWillUnmount() {
        if (this.unsubscribeFromHistory) this.unsubscribeFromHistory();
    }

    changePageInfo(value) {
        this.props.onChangePage(value);
        apiForContent(value, this.props.searchText, this.props.currentCityId, this.props.period, this.props.experience, this.props.schedule, this.props.employment, this.props.typeSorting)
            .then(res => {
                if (res.data.items && res.data.items.length) {
                    this.props.setJobs(res.data.items, res.data.pages);
                }
            })
    }

    render() {
        return <Content pages={this.props.pages} arr={this.props.arr} currentPage={this.props.currentPage}
                        onChangePage={this.props.onChangePage} changePageInfo={this.changePageInfo.bind(this)}/>

    }
}

const mapStateToProps = (state) => {
    if (!state.headerElement.searchResults || !state.headerElement.searchResults.length) {
        return {
            arr: [1, 2, 3, 4, 5],
            pages: 1,
            currentPage: state.headerElement.pageId
        }
    }
    return {
        arr: state.headerElement.searchResults,
        pages: state.headerElement.pagesNumber,
        currentPage: state.headerElement.pageId,
        searchText: state.headerElement.searchText,
        currentCityId: state.sidebarState.currentCityId,
        period: state.sidebarState.period,
        experience: state.sidebarState.experience,
        schedule: state.sidebarState.schedule,
        employment: state.sidebarState.employment,
        typeSorting: state.sidebarState.typeSorting
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangePage: (value) => {
            let action = changePageCreater(value);
            dispatch(action);
        },
        setJobs: (jobs, pages, searchPage) => {
            let action = loadAllActionCreater(jobs, pages, searchPage);
            dispatch(action);
        }
    }
}

let WithUrlContentContainer = withRouter(ContentContainer);
export default connect(mapStateToProps, mapDispatchToProps)(WithUrlContentContainer);
