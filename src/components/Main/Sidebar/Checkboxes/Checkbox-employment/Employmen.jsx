import FormControlLabel from "@material-ui/core/FormControlLabel";
import classes from "./Employment.module.css";
import Checkbox from "@material-ui/core/Checkbox";
import React from "react";

const Employment = (props) => {
    const onChangeHandler = (e) => {
        props.markCheckbox(e.target.value, e.target.checked)
    }
    return <div className={classes.wrapper}>
        <FormControlLabel
            className={classes.checkBox}
            control={<Checkbox color="primary"/>}
            label="Полная занятость"
            onChange={onChangeHandler}
            value={'full'}
        />
        <FormControlLabel
            className={classes.checkBox}
            control={<Checkbox color="primary"/>}
            label="Частичная занятость"
            value={'part'}
            onChange={onChangeHandler}
        />
        <FormControlLabel
            className={classes.checkBox}
            control={<Checkbox color="primary"/>}
            label="Стажировка"
            value={'probation'}
            onChange={onChangeHandler}
        />
        <FormControlLabel
            className={classes.checkBox}
            control={<Checkbox color="primary"/>}
            label="Волонтерство"
            value={'volunteer'}
            onChange={onChangeHandler}
        />

    </div>
}
export default Employment;