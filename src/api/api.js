import * as axios from 'axios';

const baseURL = 'https://quiet-fjord-93885.herokuapp.com/';

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

export const apiSearch = (searchText, currentCityId, period, experience) => {
    return axios.get(`${baseURL}testAPI/search?search=${searchText}&area=${currentCityId}&period=${period}&experience=${experience}`)
}

const apiForContent = (searchPage, searchText, currentCityId, period, experience) => {
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
    return axios.get(`${baseURL}page?page=${srchPg + search + cityId + per + exp}`)
}
export default apiForContent;
