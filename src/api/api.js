import * as axios from 'axios';

const baseURL = 'https://quiet-fjord-93885.herokuapp.com/';
//const baseURL = 'http://localhost:9000/';

const getStringForRequest = (scheduleIn, employmentIn) => {
    let schedule = '';
    let employment = '';
    if (scheduleIn && scheduleIn.length > 0) {
        scheduleIn.forEach(item => {
            schedule += `&schedule=${item}`
        })
    }
    if (employmentIn && employmentIn.length > 0) {
        employmentIn.forEach(item => {
            employment += `&employment=${item}`
        })
    }
    return schedule + employment
}
export const apiJobContainerIdJob = (searchJob) => {
    return axios.get(`${baseURL}id?idJob=${searchJob}`);
}
export const apiJobContainerCodedJob = (searchJob) => {
    return axios.get(`${baseURL}code?codeJob=${searchJob}`)
}
export const apiGetKeyWordsCities = (text) => {
    return axios.get(`${baseURL}city-keyword?city=${text}`)
}

export const apiGetKeywordFromSearch = (text) => {
    return axios.get(`${baseURL}keyword?word=${text}`)
}

export const apiSearch = (searchText, currentCityId, period, experience, scheduleIn, employmentIn, typeSortingIn) => {
    let typeSorting = '';
    if (typeSortingIn) {
        typeSorting = `&vacancy_search_order=${typeSortingIn}`;
    }
    let scheduleEmployment = getStringForRequest(scheduleIn, employmentIn)
    return axios.get(`${baseURL}testAPI/search?search=${searchText}&area=${currentCityId}&period=${period}&experience=${experience}${scheduleEmployment + typeSorting}`)
}

const apiForContent = (searchPage, searchText, currentCityId, period, experience, scheduleIn, employmentIn, typeSortingIn) => {
    let typeSorting = '';
    if (typeSortingIn) {
        typeSorting = `&vacancy_search_order=${typeSortingIn}`;
    }
    let scheduleEmployment = getStringForRequest(scheduleIn, employmentIn);
    let search = '';
    let cityId = '';
    let per = '';
    let exp = '';
    let srchPg = '';
    if (searchPage) {
        srchPg = Number(searchPage) - 1
    }
    if (searchText) {
        search = `&search=${searchText}`
    }
    if (currentCityId) {
        cityId = `&area=${currentCityId}`
    }
    if (period) {
        per = `&period=${period}`
    }
    if (experience) {
        exp = `&experience=${experience}`
    }
    return axios.get(`${baseURL}page?page=${srchPg + search + cityId + per + exp + scheduleEmployment + typeSorting}`)
}
export default apiForContent;
