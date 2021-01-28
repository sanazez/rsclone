import React from 'react';
import {connect} from 'react-redux';
import Content from './Content';
import {changePageCreater} from '../../../redux/header-reducer';
import * as axios from 'axios';
import {withRouter} from 'react-router-dom';
import {loadAllActionCreater} from '../../../redux/header-reducer';
import {createBrowserHistory} from 'history';


class ContentContainer extends React.Component {
    componentDidMount() {
        this.props.setJobs([]);
        let searchPage = this.props.match.params.pageId ? this.props.match.params.pageId : (this.props.currentPage || 1);
        axios.get(`http://localhost:9000/page?page=${searchPage - 1}`)
            .then(res => {
                if (res.data.items && res.data.items.length) {
                    this.props.setJobs(res.data.items, res.data.pages, searchPage)
                }
            })
    }

    changePageInfo = (value) => {
        axios.get(`http://localhost:9000/page?page=${value}`)
            .then(res => {
                if (res.data.items && res.data.items.length) {
                    this.props.setJobs(res.data.items, res.data.pages);
                    this.props.onChangePage(Number(this.props.match.params.pageId))
                }
            })
    }

    render() {
        return <Content pages={this.props.pages} arr={this.props.arr} currentPage={this.props.currentPage}
                        page={this.props.match.params.pageId} changePageInfo={this.changePageInfo}/>
    }
}

const mapStateToProps = (state) => {
    if (!state.headerElement.searchResults || !state.headerElement.searchResults.length) {
        return {
            arr: [1, 2, 3, 4, 5],
            pages: 1
        }
    }
    return {
        arr: state.headerElement.searchResults,
        pages: state.headerElement.pagesNumber,
        currentPage: state.headerElement.pageId
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
