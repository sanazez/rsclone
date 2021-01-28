import React from 'react';
import JobCardContainer from '../Card/CardContainer';
import { makeStyles } from '@material-ui/core/styles';
// import Pagination from '@material-ui/lab/Pagination';
// import { Link } from "react-router-dom";
// import PaginationItem from "@material-ui/lab/PaginationItem";
import PaginationControlled from './Pagination';


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
}));

const Content = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {props.arr.map((val, index) => <JobCardContainer cardIndex={index} key={index} />)}
      <PaginationControlled currentPage={props.currentPage} pages={props.pages} />
    </div>
  );
}
export default Content;