import React from 'react';
import {connect} from 'react-redux';
import Content from './Content';
import {changePageCreater} from '../../../redux/header-reducer';
import * as axios from 'axios';
import {withRouter} from 'react-router-dom';
import {loadAllActionCreater} from '../../../redux/header-reducer';
import PaginationControlled from "./Pagination";

class PaginationContainer extends React.Component {
    componentDidMount() {
        console.log(this.props)
        this.props.setJobs([]);
        /* this.props.history.listen((location, action) => {
             let routedPage = location.pathname.split('/');
             console.log(routedPage)
             //this.changePageInfo(routedPage[2]);
         });*/
        let searchPage = this.props.match.params.pageId ? this.props.match.params.pageId : (this.props.currentPage || 1);
        // this.props.onChangePage(this.props.match.params.pageId);
        axios.get(`http://localhost:9000/page?page=${searchPage - 1}`)
            .then(res => {
                if (res.data.items && res.data.items.length) {
                    this.props.setJobs(res.data.items, res.data.pages)
                }
            })
    }

    changePageInfo = (value) => {
        this.props.onChangePage(value);
        axios.get(`http://localhost:9000/page?page=${value - 1}&search=${this.props.searchText}&area=${this.props.currentCityId}&period=${this.props.period}&experience=${this.props.experience}`)
            .then(res => {
                if (res.data.items && res.data.items.length) {
                    this.props.setJobs(res.data.items, res.data.pages);
                }
            })
    }

    render() {
        return <PaginationControlled pages={this.props.pages}
                                     changePageInfo={this.changePageInfo}
                                     currentPage={this.props.currentPage}
        />
    }
}

const mapStateToProps = (state) => {

    return {
        pages: state.headerElement.pagesNumber,
        currentPage: state.headerElement.pageId,
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

let WithUrlPaginationContainer = withRouter(PaginationContainer);
export default connect(mapStateToProps, mapDispatchToProps)(WithUrlPaginationContainer);
