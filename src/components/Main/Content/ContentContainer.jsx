import React from 'react';
import { connect } from 'react-redux';
import Content from './Content';

const mapStateToProps = (state) => {
  return {
    arr: state.headerElement.searchResults
  }
}
const ContentContainer = connect(mapStateToProps)(Content);

export default ContentContainer;