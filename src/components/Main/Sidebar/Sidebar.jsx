import React from 'react';
import classes from './Sidebar.module.css';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import PublicIcon from '@material-ui/icons/Public';
import SelectTimeContainer from "./Selects/Select-time/Select-time-container";
import SelectExperience from "./Selects/Select-experience/Select-experience-container";
import EmploymentContainer from "./Checkboxes/Checkbox-employment/Employment-container";
import ScheduleContainer from "./Checkboxes/Checkbox-schedule/Schedule-container";
import SortingJobsContainer from './Selects/Sorting-jobs/Sorting-jobs-container';
import ApplyButtonContainer from './Buttons/Apply-button-container';

const Sidebar = (props) => {
    // const handleChange = (event) => {
    //   setState({ ...state, [event.target.name]: event.target.checked });
    // };

    let searchElement = React.createRef();
    const getCityOnChangeTextField = (e) => {
        const text = searchElement.current.value;
        props.updateTextKeyWords(text);
        props.getKeyWords(text);

    }
    return <aside className={classes.sidebar}>
        <Grid className={classes.searchContiner} container spacing={1} alignItems="flex-end">
            <Grid item>
                <PublicIcon className={classes.search}/>
            </Grid>
            <Grid item className={classes.wrapperCities}>
                <div className={classes.keywords}>
                    <ul className={classes.list}>
                        {props.cities.map((city, index) => {
                            const getJobsFromCity = () => {
                                props.setCity(city.text, city.id);
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
        <div className={classes.filter}>
            <div className={classes.typeJobs}>
                <h4>Тип занятости</h4>
                <EmploymentContainer/>
            </div>
            <div className={classes.schedule}>
                <h4>График работы</h4>
                <ScheduleContainer/>
            </div>
            <div className={classes.experience}>
                <h4>Требуемый опыт работы</h4>
                <SelectExperience/>
            </div>
            <div className={classes.showJobs}>
                <h4>Показывать вакансии</h4>
                <SelectTimeContainer/>
            </div>
            <div className={classes.showJobs}>
                <h4>Сортировать</h4>
                <SortingJobsContainer/>
            </div>
            <div>
                <ApplyButtonContainer/>
            </div>
        </div>
    </aside>
}

export default Sidebar;