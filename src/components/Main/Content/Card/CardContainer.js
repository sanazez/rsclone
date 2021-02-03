import {connect} from 'react-redux';
import JobCard from './Card';
import noLogo from '../../../../img/no-logo.png';

function countDays(creatureDate) {
    let res = Date.now() - Date.parse(creatureDate);
    res /= (1000 * 60 * 60 * 24);
    if (res < 1) {
        return 'сегодня'
    }
    let daysText = 'дней назад';
    if (Math.round(res) % 10 === 1 && Math.round(res) !== 11) {
        daysText = 'день назад'
    } else if (Math.round(res) % 10 > 1 && Math.round(res) % 10 < 5 && Math.round(res) !== 12 && Math.round(res) !== 13 && Math.round(res) !== 14) {
        daysText = 'дня назад'
    }
    return `${Math.round(res)} ${daysText}`
}

let mapStateToProps = (state, props) => {
    if (state.headerElement.searchResults && state.headerElement.searchResults.length) {
        let logo = state.headerElement.searchResults[props.cardIndex].employer.logo_urls ? state.headerElement.searchResults[props.cardIndex].employer.logo_urls.original : noLogo;
        return {
            logo,
            company: state.headerElement.searchResults[props.cardIndex].employer.name,
            title: state.headerElement.searchResults[props.cardIndex].name,
            type: state.headerElement.searchResults[props.cardIndex].schedule.name,
            location: state.headerElement.searchResults[props.cardIndex].area.name,
            created: countDays(state.headerElement.searchResults[props.cardIndex].created_at),
            jobId: state.headerElement.searchResults[props.cardIndex].id
        }
    }
    return {}
}

const JobCardContainer = connect(mapStateToProps)(JobCard)
export default JobCardContainer;
