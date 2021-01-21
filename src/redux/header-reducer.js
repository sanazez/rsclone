const UPDATE_SEARCH_TEXT = 'UPDATE-SEARCH-TEXT';
const LOAD_JOBS = 'LOAD-JOBS';
const CHANGE_PAGE = 'CHANGE_PAGE';
const LOAD_PROFILE = 'LOAD_PROFILE';
const CHANGE_CITY = 'CHANGE-CITY';
const FULL_TIME = 'FULL-TIME';

const initialState = {
    searchText: '',
    searchResults: [],
    allResults: [],
    jobPage: [],
    allJobs: [],
    currentCity: '',
    searchCity: '',
    isFullTime: false
}

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_SEARCH_TEXT: {
            let stateCopy = {...state};
            stateCopy.searchText = action.newText;
            return stateCopy;
        }

        case LOAD_JOBS: {
            let stateCopy = {...state};
            stateCopy.allResults = [...action.jobs];
            stateCopy.allJobs = [...action.jobs];
            stateCopy.searchResults = [];
            let startNumber = 5;
            if (stateCopy.allResults.length < 5) {
                startNumber = stateCopy.allJobs.length
            }
            for (let i = 0; i < startNumber; i++) {
                stateCopy.searchResults.push(stateCopy.allResults[i]);
            }
            return stateCopy;
        }

        case CHANGE_PAGE: {
            let stateCopy = {...state};
            stateCopy.allResults = [...state.allResults];
            stateCopy.searchResults = [];
            let startValue = (action.page - 1) * 5;
            let cardsQuantity = 5
            if ((stateCopy.allResults.length - startValue) < 5) {
                cardsQuantity = stateCopy.allResults.length - startValue
            }
            for (let i = startValue; i < (startValue + cardsQuantity); i++) {
                stateCopy.searchResults.push(stateCopy.allResults[i]);
            }
            return stateCopy;
        }

        case LOAD_PROFILE: {
            let stateCopy = {...state};
            stateCopy.jobPage = action.info;
            return stateCopy;
        }

        case CHANGE_CITY: {
            let stateCopy = {...state};
            stateCopy.currentCity = action.city;
            let filterJobs = state.allJobs.filter(job => {
                return job.location === action.city;
            });
            if (filterJobs.length) {
                stateCopy.allResults = [...filterJobs];
                stateCopy.searchResults = [];
                let startNumber = 5;
                if (stateCopy.allResults.length < 5) {
                    startNumber = stateCopy.allResults.length
                }
                for (let i = 0; i < startNumber; i++) {
                    stateCopy.searchResults.push(stateCopy.allResults[i]);
                }
            }
            return stateCopy;
        }

        case FULL_TIME: {
            let stateCopy = {...state};
            stateCopy.isFullTime = !state.isFullTime;
            return stateCopy;
        }

        default:
            return state;

    }
}

export const changeCityAC = (city) => {
    return {
        type: CHANGE_CITY,
        city: city
    }
}

export const selectFullTimeAC = () => {
    return {
        type: FULL_TIME
    }
}

export const updateSearchTextActionCreater = (text) => {
    return {
        type: UPDATE_SEARCH_TEXT,
        newText: text
    }
}

export const loadAllActionCreater = (jobs) => {
    console.log('LOAD_JOBS');
    return {
        type: LOAD_JOBS,
        jobs: jobs
    }
}

export const changePageCreater = (value) => {
    return {
        type: CHANGE_PAGE,
        page: value
    }
}

export const loadJobProfileActionCreater = (info) => {
    return {
        type: LOAD_PROFILE,
        info: info
    }
}

export default headerReducer;
