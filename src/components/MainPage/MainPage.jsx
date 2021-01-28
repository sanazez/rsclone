import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import { changePageCreater } from '../../redux/header-reducer';


const MainPage = (props) => {
    return <div>
      <Header />
      <Main />
    </div>
  }
  
export default MainPage;