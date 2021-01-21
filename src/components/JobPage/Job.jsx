import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import CardMedia from '@material-ui/core/CardMedia';
import noLogo from '../../img/no-logo.png';
import PublicIcon from '@material-ui/icons/Public';
import { FormHelperText } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    maxWidth: 1200,
    margin: '0 auto'
  },
  profileSidebar: {
    maxWidth: 230
  },
  profileMain: {
    maxWidth: 965,
    display: 'flex',
    flexDirection: 'column'
  },
  profileTitle: {
    display: 'flex',
    alignItems: 'center'
  },
  profileTitleText: {
    margin: '0 10px 0 0'
  },
  profileDate: {
    display: 'flex'
  },
  profileCompany: {
    display: 'flex'
  },
  profileCompanyTitle: {

  },
  profileLocation: {
    display: 'flex'
  },
  profileDescription: {

  },
  jobType: {
    color: '#334680',
    fontSize: 12,
    border: '1px solid #334680',
    display: 'flex',
    padding: '4px 6px',
    fontWeight: 'bold',
    borderRadius: 6
  },
  cardImg: {
    display: 'flex',
    width: 90,
    height: 90,
    objectFit: 'contain',
    borderRadius: 4
  },
  header: {
    maxWidth: 1200,
    width: '100%',
    margin: '0 auto',
    padding: '32px 12px 0'
  },
  logo: {
    fontFamily: '"Poppins", sans - serif',
    fontSize: '1.7rem',
  },
  logo_company: {
    fontWeight: 900
  },
  logo_text: {
    fontWeight: 200
  }
});

const JobProfile = (props) => {
  const classes = useStyles();
  console.log(props);
  if (!props.profileInfo.id) {
    return <article></article>
  }
  let logo = props.profileInfo.employer.logo_urls;
  return <article className={classes.root}>
    <header className={classes.header}>
      <div className={classes.logo}>
        <a href="/">
          <span className={classes.logo_company}>Github</span> <span className={classes.logo_text}>Jobs</span>
        </a>
      </div>
    </header>
    <aside className={classes.profileSidebar}></aside>
    <main className={classes.profileMain}>
      <div className={classes.profileTitle}>
        <Typography className={classes.profileTitleText} variant="h4" gutterBottom>
          {props.profileInfo.name}
        </Typography>
        <Typography className={classes.jobType} variant="body2" color="textSecondary" component="p">
          {props.profileInfo.employment.name}
        </Typography>
      </div>
      <div className={classes.profileDate}>
        <AccessTimeIcon className={classes.jobUpdate} color="disabled" fontSize="small" />
        <Typography variant="caption" display="block" gutterBottom>
          {props.countDays(props.profileInfo.published_at)}
        </Typography>
      </div>
      <div className={classes.profileCompany}>
        <CardMedia
          className={classes.cardImg}
          component="img"
          alt="Company logo"
          image={logo ? logo.original : noLogo}
        />
        <div className={classes.profileCompanyTitle}>
          <Typography className={classes.positionName} gutterBottom variant="h5" component="h5">
            {props.profileInfo.employer.name}
          </Typography>
          <div className={classes.profileLocation}>
            <PublicIcon className={classes.jobLocation} color="disabled" fontSize="small" />
            <Typography variant="caption" display="block" gutterBottom>
              {props.profileInfo.area.name}
            </Typography>
          </div>
        </div>
      </div>
      <div className={classes.profileDescription} dangerouslySetInnerHTML={{ __html: props.profileInfo.description }}></div>
    </main>
  </article>
}

export default JobProfile;