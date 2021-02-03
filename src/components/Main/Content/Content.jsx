import React from 'react';
import JobCardContainer from './Card/CardContainer';
import {makeStyles} from '@material-ui/core/styles';
import PaginationControlled from './Pagination/Pagination';
import LinksAuthContainer from "./LinksAuth/AuthenticationContainer";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
        maxWidth: 790,
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        paddingLeft: 30,
        position: "relative"
    },
    cardsContainer: {
        minHeight: 725
    },
    wrapperAuth: {
        display: 'flex',
        justifyContent: 'flex-end'
    }
}));
let isAuthenticated = false;

const Content = (props) => {
    const classes = useStyles();
    if (isAuthenticated) {
        return (
            <div className={classes.root}>
                <div>
                    Пользователь авторизован!))
                </div>
                <div className={classes.cardsContainer}>
                    {props.arr.map((val, index) => <JobCardContainer cardIndex={index} key={index}/>)}
                </div>
                <PaginationControlled currentPage={props.currentPage} pages={props.pages}/>
            </div>
        );
    }
    return (
        <div className={classes.root}>
            <div className={classes.wrapperAuth}>
                <LinksAuthContainer/>
            </div>
            <div className={classes.cardsContainer}>
                {props.arr.map((val, index) => <JobCardContainer cardIndex={index} key={index}/>)}
            </div>
            <PaginationControlled currentPage={props.currentPage} pages={props.pages}/>
        </div>
    );

}
export default Content;