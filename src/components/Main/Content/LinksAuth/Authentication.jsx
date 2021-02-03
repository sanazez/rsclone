/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import classes from './Auth.module.css'
import {Registration} from "./Registration";
import {Login} from "./Login";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));

export default function LinksAuth(props) {
    const style = useStyles();
    const preventDefault = (event) => {

    };
    const showRegistration = () => {
        props.showHideRegistration(true);
    }
    if (props.isShowRegistration) {
        return <div>
            <Typography className={style.root}>
                <Link onMouseUp={showRegistration} className={classes.link} onClick={preventDefault}>
                    Регистрация
                </Link>
                <Link onMouseUp={props.showHideLogin} className={classes.link} onClick={preventDefault}>
                    Войти
                </Link>
            </Typography>
            <div>
                <Registration showHideRegistration={props.showHideRegistration}/>
            </div>
        </div>
    }
    if (props.isShowLogin) {
        return <div>
            <Typography className={style.root}>
                <Link onMouseUp={showRegistration} className={classes.link} onClick={preventDefault}>
                    Регистрация
                </Link>
                <Link onMouseUp={props.showHideLogin} className={classes.link} onClick={preventDefault}>
                    Войти
                </Link>
            </Typography>
            <div>
                {<Login close={props.showHideLogin}/>}
            </div>
        </div>
    }
    return (
        <div>
            <Typography className={style.root}>
                <Link onMouseUp={showRegistration} className={classes.link} onClick={preventDefault}>
                    Регистрация
                </Link>
                <Link onMouseUp={props.showHideLogin} className={classes.link} onClick={preventDefault}>
                    Войти
                </Link>
            </Typography>
        </div>

    );
}