import React from 'react';
import classes from './Header.module.css';
import CustomizedInputBase from './Search/Search.jsx';
const Header = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <a href="/">
                    <span className={classes.logo_company}>Github</span> <span className={classes.logo_text}>Jobs</span>
                </a>
            </div>
            <div className={classes.wrapper_search}>
                <CustomizedInputBase searchText={props.headreState.searchText} updateSearchText={props.updateSearchText} onSearchInfo={props.onSearchInfo} />
            </div>
        </header>
    )
}
export default Header;

