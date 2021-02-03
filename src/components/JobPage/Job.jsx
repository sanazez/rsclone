import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import CardMedia from '@material-ui/core/CardMedia';
import noLogo from '../../img/no-logo.png';
import PublicIcon from '@material-ui/icons/Public';
import Chip from '@material-ui/core/Chip';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SimilarJobs from './SimilarJobs/SimilarJobs';
import similarJobAudio from '../../sounds/click1.mp3';
import accordionAudio from '../../sounds/click3.mp3';
import Avatar from '@material-ui/core/Avatar';
import Skeleton from '@material-ui/lab/Skeleton';
import MainHeaderContiner from '../Header/MainHeader/MainHeaderContainer';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    maxWidth: 1200,
    margin: '0 auto',
    minHeight: '100vh',
    flexDirection: 'column',
    alignItems: 'left'
  },
  profileMain: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    padding: '10px 15px',
    width: '100%'
  },
  profileTitle: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 5,
    marginTop: 35
  },
  profileTitleText: {
    margin: '0 10px 0 0'
  },
  profileDate: {
    display: 'flex',
    marginBottom: 20,
  },
  profileCompany: {
    display: 'flex',
    marginBottom: 25
  },
  profileCompanyTitle: {

  },
  profileSkills: {
    marginBottom: 20
  },
  profileSkillsTitle: {

  },
  profileSkillsBlock: {
    marginRight: 8,
    marginBottom: 8
  },
  profileLocation: {
    display: 'flex'
  },
  profileDescription: {
    padding: 20,
    overflow: 'hidden'
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
    backgroundColor: 'white',
    width: 90,
    height: 90,
    objectFit: 'contain',
    borderRadius: 4,
    marginRight: 10
  },
  contactInfo: {
    flexDirection: 'column'
  },
  contactInfoTel: {
    display: 'flex',
    flexDirection: 'column'
  },
  profileAccordion: {
    marginBottom: 10
  },
  tmpl_hh_wrapper: {
    maxWidth: '100%'
  },
  section: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    transform: 'skewY(-1deg)',
    padding: '50px 10px'
  },
  skeletonRoot: {
    width: '90%',
    height: '100vh',
    margin: '0 auto',
  
  },
  skeletonHeader: {
    display: 'flex',
    marginTop: 35
  }
});

const JobProfile = (props) => {
  const classes = useStyles();
  if (!props.profileInfo.id) {
    return <article className={classes.root}>
      <main className={classes.profileMain}>
        <MainHeaderContiner />
      </main>
        <div className={classes.skeletonRoot}>
          <div className={classes.skeletonHeader}>
            <Skeleton className={classes.skeletonAvatar} variant="circle">
              <Avatar />
            </Skeleton>
            <Skeleton className={classes.skeletonTitle} width="100%">
              <Typography>.</Typography>
            </Skeleton>
          </div>
          <Skeleton className={classes.skeletonText} variant="rect" width="100%">
            <div style={{ paddingTop: '57%' }} />
          </Skeleton>
        </div>
      
    </article>
  }
  
  function handleSimilarJobSound() {
    let isMute = JSON.parse(window.localStorage.getItem('isMute'));
    if (!isMute) {
      const soundSimilarJob = new Audio(similarJobAudio);
      soundSimilarJob.play();
    }
  }
  function handleAccordionSound() {
    let isMute = JSON.parse(window.localStorage.getItem('isMute'));
    if (!isMute) {
      const soundAccordion = new Audio(accordionAudio);
      soundAccordion.play();
    }
  }
  if (!props.profileInfo.id) {
    return <article></article>
  }
  let similarJobsNumber = 0;
  if (props.similarJobs.items && props.similarJobs.items.length) {
    similarJobsNumber = props.similarJobs.items.length > 2 ? 3 : props.similarJobs.items.length;
  }
  let similarJobsForRender = [];
  for (let i = 0; i < similarJobsNumber; i++) {
    similarJobsForRender.push(props.similarJobs.items[i]);
  }
  let logo = props.profileInfo.employer.logo_urls;
  const phones = () => {
    if (props.profileInfo.contacts && props.profileInfo.contacts.phones && props.profileInfo.contacts.phones.length) {
      return props.profileInfo.contacts.phones.map((val, ind) => {
        return <a href={`tel:+${val.country}${val.city}${val.number}`} key={ind}>{`+${val.country} (${val.city}) ${val.number}`}</a>
      })
    }
  }
  return <article className={classes.root}>

    <main className={classes.profileMain}>
      <MainHeaderContiner />
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
      <div className={classes.profileSkills}>
        <Typography className={classes.profileSkillsTitle} gutterBottom variant="h6" component="h6">
          {props.profileInfo.key_skills.length ? 'Ключевые навыки' : ''}
        </Typography>
        {props.profileInfo.key_skills.map((val, index) => <Chip className={classes.profileSkillsBlock} icon={<HowToRegIcon />} label={val.name} key={index} />)}
      </div>
      <div className={classes.profileAccordion}>
        <Accordion>
          <AccordionSummary
            onClick={handleAccordionSound}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Контакты</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.contactInfo}>
            <Typography>
              <a href={`${props.profileInfo.contacts ? (props.profileInfo.contacts.email ? `mailto:${props.profileInfo.contacts.email}` : '') : props.profileInfo.alternate_url}`}>{`${props.profileInfo.contacts ? (props.profileInfo.contacts.email ? props.profileInfo.contacts.email : '') : 'Откликнуться'}`}</a>
            </Typography>
            <Typography>
              {`${props.profileInfo.contacts ? (props.profileInfo.contacts.name ? props.profileInfo.contacts.name : '') : ''}`}
            </Typography>
            <div className={classes.contactInfoTel}>
              {phones()}
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            onClick={handleAccordionSound}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Заработная плата</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.contactInfo}>
            <Typography gutterBottom variant="h6" component="h6">
              {props.profileInfo.salary ? `${props.profileInfo.salary.to ? '' : 'от'} ${props.profileInfo.salary.from ? props.profileInfo.salary.from : 'до'} ${props.profileInfo.salary.from && props.profileInfo.salary.to ? '-' : ' '} ${props.profileInfo.salary.to ? props.profileInfo.salary.to : ''}  ${props.profileInfo.salary.currency}` : 'Не указана'}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            onClick={handleAccordionSound}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Требуемый опыт</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.contactInfo}>
            <Typography gutterBottom variant="h6" component="h6">
              {props.profileInfo.experience ? (props.profileInfo.experience.name ? props.profileInfo.experience.name : '') : ''}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className={classes.profileDescription} dangerouslySetInnerHTML={{ __html: props.profileInfo.branded_description ? props.profileInfo.branded_description : props.profileInfo.description }}></div>
      <div className={classes.section}>
        {similarJobsForRender.map((val, index) => <SimilarJobs onClick={handleSimilarJobSound} similarJob={val} key={index} />)}
      </div>
    </main>
  </article>
}

export default JobProfile;
