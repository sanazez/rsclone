import React from 'react';
import JobCardContainer from '../Card/CardContainer';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { Link } from "react-router-dom";
import PaginationItem from "@material-ui/lab/PaginationItem";


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
  const [pageVal, setPageVal] = React.useState(null);
  const handleChange = (event, value) => {
    props.onChangePage(value);
    props.changePageInfo(value);
    setPageVal(value);
  };
  console.log(props);
  return (
    <div className={classes.root}>
      {props.arr.map((val, index) => <JobCardContainer cardIndex={index} key={index} />)}
      <Pagination count={props.pages} defaultPage={pageVal} onChange={handleChange} variant="outlined" shape="rounded"
        renderItem={(item) => (
          <PaginationItem
            type={"start-ellipsis"}
            component={Link}
            
            to={`/page/${item.page}`}
            {...item}
          />
        )} />
    </div>
  );
}
// 
export default Content;