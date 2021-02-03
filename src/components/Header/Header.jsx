import React from 'react';
import classes from './Header.module.css';
import SearchHeaderContainer from './Search/Search-container';
import MainHeaderContainer from './MainHeader/MainHeaderContainer';

const Header = (props) => {
    return (
        <header className={classes.header}>
            <MainHeaderContainer />
            <div className={classes.wrapper_search}>
                <SearchHeaderContainer store={props.store} />
            </div>
        </header>
    )
}
export default Header;
