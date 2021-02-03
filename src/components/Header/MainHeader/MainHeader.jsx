import React from 'react';
import classes from '../Header.module.css';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import IconButton from '@material-ui/core/IconButton';

const MainHeader = (props) => {
    return (
        <div className={classes.logo}>
            <a href="/">
                <span className={classes.logo_company}>Jobs</span> <span className={classes.logo_text}>Scout</span>
            </a>
            <IconButton onClick={props.toggleVolume} color="primary" aria-label="upload picture" component="span">
                {props.isMute ? <VolumeOffIcon /> : <VolumeUpIcon />}
            </IconButton>
        </div>
    )
}
export default MainHeader;
