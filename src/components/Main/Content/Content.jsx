import React from 'react';
import JobCardContainer from './Card/CardContainer';
import { makeStyles } from '@material-ui/core/styles';
import PaginationControlled from './Pagination/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
    maxWidth: 790,
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    paddingLeft: 30
  },
  cardsContainer: {
    minHeight: 725
  }
}));

const Content = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.cardsContainer}>
        {props.arr.map((val, index) => <JobCardContainer cardIndex={index} key={index} />)}
      </div>
      <PaginationControlled currentPage={props.currentPage} pages={props.pages} />
    </div>
  );
}
export default Content;