import React from 'react';
import classes from './Header.module.css';
import SearchHeaderContainer from './Search/Search-container';
const Header = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <a href="/">
                    <span className={classes.logo_company}>Github</span> <span className={classes.logo_text}>Jobs</span>
                </a>
            </div>
            <div className={classes.wrapper_search}>
                <SearchHeaderContainer store={props.store} />
            </div>
        </header>
    )
}
export default Header;

