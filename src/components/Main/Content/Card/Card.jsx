import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PublicIcon from '@material-ui/icons/Public';
import Skeleton from '@material-ui/lab/Skeleton';
import noLogo from '../../../../img/no-logo.png';
import audio from '../../../../sounds/click1.mp3';
import styles from './Card.module.css';

const useStyles = makeStyles({
  root: {
    height: 115,
    marginTop: 30,
    maxWidth: 790
  },
  preloader: {
    height: 115,
    marginTop: 30,
    maxWidth: 790
  },
  preloaderContent: {
    height: '100%'
  },
  actionArea: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'start',
    height: '100%',
    padding: 12,
    flex: 1
  },
  cardImg: {
    display: 'flex',
    width: 90,
    height: 90,
    objectFit: 'contain'
  },
  jobType: {
    color: '#334680',
    fontSize: 12,
    border: '1px solid #334680',
    display: 'inline',
    padding: '4px 6px',
    fontWeight: 'bold',
    borderRadius: 6
  },
  jobAdditional: {
    display: 'flex',
    color: '#B9BDCF',
    padding: 0,
    position: 'absolute',
    right: '2%',
    bottom: '2%'
  },
  jobUpdate: {
    marginLeft: 13,
    marginRight: 3
  },
  jobLocation: {
    marginRight: 3
  }
});

const JobCard = (props) => {
  const classes = useStyles();
  if (!props.title) {
    return <Card className={classes.preloader} >
      <Skeleton className={classes.preloaderContent} variant="text" animation="wave" />
    </Card>
  }
  function clickCard() {
    let isMute = JSON.parse(window.localStorage.getItem('isMute'));
    if(!isMute) {
      const soundCard = new Audio(audio);
      soundCard.play();
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  return <a href={`/job/${props.jobId}`} onMouseDown={clickCard}>
    <Card className={classes.root}>
      <CardActionArea className={classes.actionArea}>
        <CardMedia
          className={classes.cardImg}
          component="img"
          alt="Company logo"
          image={props.logo ? props.logo : noLogo}
        />
        <CardContent>
          <p className={styles.companyName}>
            {props.company}
          </p>
          <h2 className={styles.positionName}>
            {props.title}
          </h2>
          <Typography className={classes.jobType} variant="body2" color="textSecondary" component="p">
            {props.type}
          </Typography>
        </CardContent>
        <CardContent className={classes.jobAdditional}>
          <PublicIcon className={classes.jobLocation} color="disabled" fontSize="small" />
          <Typography variant="caption" display="block" gutterBottom>
            {props.location}
          </Typography>
          <AccessTimeIcon className={classes.jobUpdate} color="disabled" fontSize="small" />
          <Typography variant="caption" display="block" gutterBottom>
            {props.created}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </a>
}

export default JobCard;
