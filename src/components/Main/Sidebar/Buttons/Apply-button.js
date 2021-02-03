import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import confirmAudio from '../../../../sounds/click2.mp3';
import {NavLink} from "react-router-dom";

const BootstrapButton = withStyles({
    root: {
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        padding: '6px 12px',
        border: '1px solid',
        lineHeight: 1.5,
        backgroundColor: '#0063cc',
        borderColor: '#0063cc',
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
            backgroundColor: '#0069d9',
            borderColor: '#0062cc',
            boxShadow: 'none',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#0062cc',
            borderColor: '#005cbf',
        },
        '&:focus': {
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        },
    },
})(Button);


const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    link: {
        color: "white"
    }
}));

export default function ApplyButton(props) {
    const classes = useStyles();
    const clickConfirm = () => {
        let isMute = JSON.parse(window.localStorage.getItem('isMute'));
        if(!isMute) {
            const soundConfirm = new Audio(confirmAudio);
            soundConfirm.play();
        }
        props.getJobs();
    }
    return (
        <div>
            <BootstrapButton onMouseUp={clickConfirm} variant="contained" color="primary" disableRipple
                className={classes.margin}>
                <NavLink className={classes.link} to={'/page/1'}>
                    Применить
                </NavLink>
            </BootstrapButton>
        </div>
    );
}