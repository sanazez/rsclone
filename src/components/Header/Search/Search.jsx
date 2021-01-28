import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import {Button} from '@material-ui/core';
import classes from './Search.module.css';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 790,
        minWidth: 315,
        position: "relative"
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
    },
    keyWord: {
        width: '100%',
        backgroundColor: 'white',
        zIndex: 100,
        position: "absolute",
        top: 40,
        borderRadius: '5px',
        right: 0,
    }
}));

let searchElement = React.createRef();

const SearchHeader = (props) => {
    const onSearchChange = async () => {
        const text = searchElement.current.value;
        await props.getKeyWord(text);
        props.searchChange(text);

    }

    const onSearchJobs = (text) => {
        props.searchJobs(text);
        props.clearKeyWords();
    }

    const offPreventDefaultForm = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            onSearchJobs(props.searchText);
        }
    }

    const searchJobsOnclickButton = () => {
        onSearchJobs(props.searchText);
    }
    const styles = useStyles();
    return (
        <Paper component="form" onKeyPress={offPreventDefaultForm} className={styles.root}>
            <div className={styles.keyWord}>
                <ul className={classes.list}>
                    {props.keyWords.map((word, index) => {
                        const getJobsByKeyWords = () => {
                            props.searchChange(word.text);
                            onSearchJobs(word.text);
                        }
                        return <li className={classes.item} onClick={getJobsByKeyWords}
                                   key={index}>{word.text}</li>
                    })}
                </ul>
            </div>
            <WorkOutlineIcon className={styles.iconWork}/>
            <InputBase
                className={`${styles.input} ${classes.search}`}
                placeholder="Title, companies, expertise or benefits"
                inputProps={{'aria-label': 'search jobs'}}
                value={props.searchText}
                inputRef={searchElement}
                onChange={onSearchChange}
            />
            <Button variant="contained" color="primary" onClick={searchJobsOnclickButton}>
                Search
            </Button>
        </Paper>
    );
}
export default SearchHeader;