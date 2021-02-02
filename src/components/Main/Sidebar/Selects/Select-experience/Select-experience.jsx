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

export default function SelectExperience(props) {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
        console.log(event.target.value)
        props.changeValue(event.target.value)
    };
    return (
        <div>
            <FormControl className={classes.margin}>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={props.experience}
                    onChange={handleChange}
                    input={<BootstrapInput/>}
                    displayEmpty
                >
                    <MenuItem value={0}>Не имеет значение</MenuItem>
                    <MenuItem value={'noExperience'}>Нет опыта</MenuItem>
                    <MenuItem value={'between1And3'}>От 1 года до 3 лет</MenuItem>
                    <MenuItem value={'between3And6'}>От 3 до 6 лет</MenuItem>
                    <MenuItem value={'moreThan6'}>Более 6 лет</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
