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
    let {pageId} = useParams()
    const history = useHistory();
    console.log(pageId)
    // console.log('pages', props.pages)
    const changePageId = () => {
        props.changePage();
    }
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Pagination count={props.pages ? props.pages : 10} page={Number(pageId)}
                        variant="outlined" shape="rounded"
                        renderItem={(item) => {
                            return <PaginationItem
                                type={"start-ellipsis"}
                                component={Link}
                                to={`/page/${item.page}`}
                                {...item}
                            />
                        }}/>
        </div>
    );
}