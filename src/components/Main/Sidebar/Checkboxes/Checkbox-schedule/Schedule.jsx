import FormControlLabel from "@material-ui/core/FormControlLabel";
import classes from "./Schedule.module.css";
import Checkbox from "@material-ui/core/Checkbox";
import React from "react";

const Schedule = (props) => {
    const onChangeHandler = (e) => {
        props.markCheckbox(e.target.value, e.target.checked)
    }
    return (<div className={classes.wrapper}>
        <FormControlLabel
            className={classes.checkBox}
            control={<Checkbox color="primary"/>}
            label="Полный день"
            value={'fullDay'}
            onChange={onChangeHandler}
        />
        <FormControlLabel
            className={classes.checkBox}
            control={<Checkbox color="primary"/>}
            label="Сменный график"
            value={'shift'}
            onChange={onChangeHandler}
        />
        <FormControlLabel
            className={classes.checkBox}
            control={<Checkbox color="primary"/>}
            label="Гибкий график"
            value={'flexible'}
            onChange={onChangeHandler}
        />
        <FormControlLabel
            className={classes.checkBox}
            control={<Checkbox color="primary"/>}
            label="Удаленная работа"
            value={'remote'}
            onChange={onChangeHandler}
        />
        <FormControlLabel
            className={classes.checkBox}
            control={<Checkbox color="primary"/>}
            label="Вахтовый метод"
            value={'flyInFlyOut'}
            onChange={onChangeHandler}
        />
    </div>)
}
export default Schedule;