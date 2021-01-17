import React from 'react';
import { connect } from 'react-redux';
import Content from './Content';
import { changePageCreater } from '../../../redux/header-reducer';

const mapStateToProps = (state) => {
  if (!state.headerElement.searchResults || !state.headerElement.searchResults.length) {
    return {
      arr: [1, 2, 3, 4, 5],
      pages: 5
    }
  }
  let pages = Math.ceil(state.headerElement.allResults.length / 5);
  return {
    arr: state.headerElement.searchResults,
    pages
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onChangePage: (value) => {
      let action = changePageCreater(value);
      dispatch(action);
    }
  }
}
const ContentContainer = connect(mapStateToProps, mapDispatchToProps)(Content);

export default ContentContainer;