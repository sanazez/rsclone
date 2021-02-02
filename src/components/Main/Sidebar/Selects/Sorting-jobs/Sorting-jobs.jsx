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

export default function SortingJobs(props) {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
        console.log(event.target.value)
        props.sortingJobs(event.target.value)
    };
    return (
        <div>
            <FormControl className={classes.margin}>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={props.typeSorting}
                    onChange={handleChange}
                    input={<BootstrapInput/>}
                    displayEmpty
                >
                    <MenuItem value={'relevance'}>По соответствию</MenuItem>
                    <MenuItem value={'publication_time'}>По дате изменения</MenuItem>
                    <MenuItem value={'salary_desc'}>По убыванию зарплаты</MenuItem>
                    <MenuItem value={'salary_asc'}>По возрастанию зарплаты</MenuItem>
                    <MenuItem value={'distance'}>По удаленности</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}