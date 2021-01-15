import React from 'react';
import { loadAllActionCreater } from '../../redux/header-reducer';
import Main from './Main';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchOnloadInfo = (dispatch) => {
  return {
    onloadInfo: () => {
      let action = loadAllActionCreater();
      dispatch(action);
    }
  }
};


const MainContainer = connect(mapStateToProps, mapDispatchOnloadInfo)(Main);
export default MainContainer;