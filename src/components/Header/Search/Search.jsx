import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import { Button } from '@material-ui/core';
import classes from './Search.module.css'
const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 790,
        minWidth: 315,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
    iconWork: {
        color: '#B9BDCF'
    }
}));

let searchElement = React.createRef();


export default function CustomizedInputBase(props) {
    const onSearchChange = () => {
        const text = searchElement.current.value;
        props.updateSearchText(text)
    }
    const onSearchInfo = () => {
        console.log(props)
        props.onSearchInfo();
    }
    const styles = useStyles();
    return (
        <Paper component="form" className={styles.root}>
            <WorkOutlineIcon className={styles.iconWork} />
            <InputBase
                className={`${styles.input} ${classes.search}`}
                placeholder="Title, companies, expertise or benefits"
                inputProps={{ 'aria-label': 'search jobs' }}
                value={props.searchText}
                inputRef={searchElement}
                onChange={onSearchChange}
            />
            <Button variant="contained" color="primary" onClick={onSearchInfo}>
                Search
            </Button>
        </Paper >
    );
}