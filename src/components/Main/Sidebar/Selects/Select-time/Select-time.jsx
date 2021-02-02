import React from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
        width: 300
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
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
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    }
}));

export default function SelectTime(props) {
    const classes = useStyles();
    const handleChange = (event) => {
        props.changeValueSelect(event.target.value);
    };
    return (
        <div>
            <FormControl className={classes.margin}>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={props.period}
                    onChange={handleChange}
                    input={<BootstrapInput/>}
                >
                    <MenuItem value={0}>За все время</MenuItem>
                    <MenuItem value={30}>За месяц</MenuItem>
                    <MenuItem value={7}>За неделю</MenuItem>
                    <MenuItem value={3}>За последние три дня</MenuItem>
                    <MenuItem value={1}>За сутки</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
