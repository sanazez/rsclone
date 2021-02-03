import classes from './Auth.module.css'
import Button from "@material-ui/core/Button";
import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import CloseIcon from '@material-ui/icons/Close';
import {useHttp} from "../../../../hooks/http.hook";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '270px',
    },
    name: {
        width: '270px'
    },

    close: {}

}));


export const Registration = (props) => {
    const styles = useStyles();
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });


    const handleClickShowPassword = () => {
        setValues({...values, showPassword: !values.showPassword});
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const close = () => {
        props.showHideRegistration(false)
    }
    const {loading, error, request} = useHttp()
    const [form, setForm] = useState({
        email: '',
        password: '',
        name: '',
        surName: ''
    })

    const changeHandler = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }
    const handleChange = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value});
        changeHandler(event);
    };
    const registerHandler = async () => {
        try {
            const data = await request('http://localhost:9000/api/auth/register', 'POST', {...form})
            console.log('Data: ', data)
        } catch (e) {

        }
    }
    return (
        <div className={classes.wrapperRegistration}>
            <CloseIcon onMouseUp={close} className={classes.close}/>
            <h4 className={styles.titleRegistration}>
                Регистрация
            </h4>
            <div>
                <TextField name={'name'} onChange={changeHandler} className={styles.name} required
                           label="Введиет имя"/>
            </div>
            <div>
                <TextField required name={'surName'} onChange={changeHandler} className={styles.name}
                           label="Введиет Фамилию"/>
            </div>
            <div>
                <TextField required name={'email'} onChange={changeHandler} className={styles.name}
                           label="Введиет email"/>
            </div>
            <div>
                <FormControl className={clsx(styles.margin, styles.textField)}>
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        name={'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {values.showPassword ? <Visibility/> : <VisibilityOff/>}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </div>
            <div className={styles.action}>
                <Button onClick={registerHandler} disabled={loading} variant="contained" color="primary">
                    Регистрация
                </Button>
            </div>
        </div>

    )
}