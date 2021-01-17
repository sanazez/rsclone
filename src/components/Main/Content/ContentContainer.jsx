import React from 'react';
import { connect } from 'react-redux';
import Content from './Content';

const countArr = (state) => {
  if (!state.searchResults) {
    return {
      arr: [1, 2, 3]
    }
  }
  let newArr = state.searchResults.map((val, index) => index);
  console.log(newArr);
  return {
    arr: newArr
  }
}
const ContentContainer = connect(countArr)(Content);

export default ContentContainer;