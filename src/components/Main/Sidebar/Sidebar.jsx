import React from 'react';
import classes from './Sidebar.module.css';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import PublicIcon from '@material-ui/icons/Public';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

const Sidebar = () => {
  // const handleChange = (event) => {
  //   setState({ ...state, [event.target.name]: event.target.checked });
  // };
  return <aside className={classes.sidebar}>
    <FormControlLabel
      className={classes.checkBox}
      control={<Checkbox name="fullTime" color="primary" />}
      label="Full Time"
    />
    <h3>LOCATION</h3>
    <Grid className={classes.searchContiner} container spacing={1} alignItems="flex-end">
      <Grid item>
        <PublicIcon className={classes.search} />
      </Grid>
      <Grid item>
        <TextField id="input-with-icon-grid" label="City, state or country" />
      </Grid>
    </Grid>
    <RadioGroup className={classes.radioBtn} aria-label="city" name="city">
        <FormControlLabel value="London" control={<Radio color="primary" />} label="London" />
        <FormControlLabel value="Amsterdam" control={<Radio color="primary" />} label="Amsterdam" />
        <FormControlLabel value="New-York" control={<Radio color="primary" />} label="New York" />
        <FormControlLabel value="Berlin" control={<Radio color="primary" />} label="Berlin" />
      </RadioGroup>
  </aside>
}

export default Sidebar;