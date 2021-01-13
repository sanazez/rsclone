import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
// import classes from './Card.module.css';
import { makeStyles } from '@material-ui/core/styles';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PublicIcon from '@material-ui/icons/Public';

const useStyles = makeStyles({
  root: {
    height: 115,
    marginTop: 30,
    maxWidth: 790

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
  companyName: {
    fontSize: 14,
    color: '#334680',
    fontWeight: 'bold',
    marginBottom: 5
  },
  positionName: {
    fontSize: 20,
    color: '#334680',
    marginBottom: 14
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
function countDays(creatureDate) {
  let res = Date.now() - Date.parse(creatureDate);
  res /= (1000 * 60 * 60 *24);
  if (res < 1) {
    return 'today'
  }
  return (Math.round(res) === 1) ? '1 day ago' : `${Math.round(res)} days ago`
}

const JobCard = (props) => {
  const classes = useStyles();

  console.log(props.mainState);

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.actionArea}>
        <CardMedia
          className={classes.cardImg}
          component="img"
          alt="Company logo"
          image={props.mainState[props.cardIndex].company_logo}
        />
        <CardContent>
          <Typography className={classes.companyName} variant="body2" color="textSecondary" component="p">
            {props.mainState[props.cardIndex].company}
          </Typography>
          <Typography className={classes.positionName} gutterBottom variant="h5" component="h2">
            {props.mainState[props.cardIndex].title}
          </Typography>
          <Typography className={classes.jobType} variant="body2" color="textSecondary" component="p">
            {props.mainState[props.cardIndex].type}
          </Typography>
        </CardContent>
        <CardContent className={classes.jobAdditional}>
          <PublicIcon className={classes.jobLocation} color="disabled" fontSize="small" />
          <Typography variant="caption" display="block" gutterBottom>
            {props.mainState[props.cardIndex].location}
          </Typography>
          <AccessTimeIcon className={classes.jobUpdate} color="disabled" fontSize="small" />
          <Typography variant="caption" display="block" gutterBottom>
            {countDays(props.mainState[props.cardIndex].created_at)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default JobCard;