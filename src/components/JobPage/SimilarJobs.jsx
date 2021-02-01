import React from 'react';
import classes from './SimilarJobs.module.css';
import noLogo from '../../img/no-logo.png';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PublicIcon from '@material-ui/icons/Public';
import Typography from '@material-ui/core/Typography';

const SimilarJobs = (props) => {
    let logo = props.similarJob.employer.logo_urls;
    function countDays(creatureDate) {
        let res = Date.now() - Date.parse(creatureDate);
        res /= (1000 * 60 * 60 * 24);
        if (res < 1) {
            return 'today'
        }
        return (Math.round(res) === 1) ? '1 day ago' : `${Math.round(res)} days ago`
    }
    return <a onMouseDown={props.onClick} href={`/job/${props.similarJob.id}`} className={classes.similarJobContainer}>
        <div className={classes.similarJobLogo}>
            <img src={logo ? logo.original : noLogo} alt="company logo" />
        </div>
        <div className={classes.similarJobMain}>
            <h2 className={classes.similarJobTitle}>{props.similarJob.name}</h2>
            <div className={classes.jobAdditional}>
                <PublicIcon className={classes.jobLocation} color="disabled" fontSize="small" />
                <Typography variant="caption" display="block" gutterBottom>
                    {props.similarJob.area ? props.similarJob.area.name : 'не указано'}
                </Typography>
                <AccessTimeIcon className={classes.jobUpdate} color="disabled" fontSize="small" />
                <Typography variant="caption" display="block" gutterBottom>
                    {countDays(props.similarJob.published_at)}
                </Typography>
            </div>
        </div>
    </a>
}

export default SimilarJobs;