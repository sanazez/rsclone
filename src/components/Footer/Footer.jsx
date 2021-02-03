import React from 'react';
import classes from './Footer.module.css';


const Footer = () => {
    return <footer className={classes.mainFooter}>
        <div className={classes.footerContainer}>
            <div>© 2021 RS Clone Wars</div>
            <a className={classes.footerRSLink} href="https://rs.school/js/">RS link</a>
            <div className={classes.footerGitLinks}>
                <a href="https://github.com/sanazez"  target="_blank" rel="noreferrer">sanazez</a>
                <a href="https://github.com/HannaHerman" target="_blank" rel="noreferrer">Hanna Herman</a>
            </div>
        </div>
    </footer>
}

export default Footer;
