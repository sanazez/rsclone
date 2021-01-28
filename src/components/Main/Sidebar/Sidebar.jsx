import React from 'react';
import classes from './Sidebar.module.css';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import PublicIcon from '@material-ui/icons/Public';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';


const Sidebar = (props) => {
    // const handleChange = (event) => {
    //   setState({ ...state, [event.target.name]: event.target.checked });
    // };
    const getCityOnchangeRadios = (e) => {
        props.setCity(e.target.value);
    }
    let searchElement = React.createRef();
    const getCityOnChangeTextField = (e) => {
        const text = searchElement.current.value;
        props.updateTextKeyWords(text);
        props.getKeyWords(text);
        if (e.nativeEvent.key === 'Enter') {

        }
    }

    return <aside className={classes.sidebar}>
        <FormControlLabel
            className={classes.checkBox}
            control={<Checkbox name="fullTime" color="primary"/>}
            label="Full Time"
        />
        <h3>LOCATION</h3>
        <Grid className={classes.searchContiner} container spacing={1} alignItems="flex-end">
            <Grid item>
                <PublicIcon className={classes.search}/>
            </Grid>
            <Grid item className={classes.wrapperCities}>
                <div className={classes.keywords}>
                    <ul className={classes.list}>
                        {props.cities.map((city, index) => {
                            const getJobsFromCity = () => {
                                props.getJobs(city.text, city.id);
                            }
                            return <li className={classes.item} key={index} onClick={getJobsFromCity}>
                                {city.text}
                            </li>
                        })}
                    </ul>
                </div>
                <TextField autoComplete={'off'} inputRef={searchElement} id="input-with-icon-grid"
                           label="Введите название города"
                           onChange={getCityOnChangeTextField}
                           value={props.textKeyWords}
                />
            </Grid>
        </Grid>
        <RadioGroup className={classes.radioBtn} aria-label="city" name="city" value={props.city}
        >
            <FormControlLabel value="Минск" control={<Radio color="primary"/>} label="Минск"/>
            <FormControlLabel value="Киев" control={<Radio color="primary"/>} label="Киев"/>
            <FormControlLabel value="Москва" control={<Radio color="primary"/>} label="Москва"/>
            <FormControlLabel value="Брест" control={<Radio color="primary"/>} label="Брест"/>
        </RadioGroup>
    </aside>
}

export default Sidebar;