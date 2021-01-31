import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import {Link} from "react-router-dom";
import PaginationItem from "@material-ui/lab/PaginationItem";
import {useHistory, useParams} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function PaginationControlled(props) {
    const changePageId = (e) => {
        props.changePageInfo(Number(e.target.innerText));
        console.log(e.target.innerText)

    }
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Pagination count={props.pages ? props.pages : 10} page={props.currentPage}
                        variant="outlined" shape="rounded"
                        onChange={changePageId}
                        renderItem={(item) => {
                            return <PaginationItem
                                type={"start-ellipsis"}
                                component={Link}
                                to={`/page/${item.page}`}
                                {...item}
                            />
                        }}/>
        </div>
    )
        ;
}