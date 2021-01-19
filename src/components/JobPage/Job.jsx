import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({

});
  
  const JobProfile = (props) => {
    const classes = useStyles();
    if (!props.profileInfo) {
      return <article></article>
    }
    let info = props.profileInfo.description;
    return <article className={classes.root}>
      <aside></aside>
      <main dangerouslySetInnerHTML={{ __html: info }}>
      </main>
    </article>
  }
  
  export default JobProfile;