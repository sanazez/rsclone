const UPDATE_SEARCH_TEXT = 'UPDATE-SEARCH-TEXT';
const LOAD_JOBS = 'LOAD-JOBS';
const CHANGE_PAGE = 'CHANGE_PAGE';
const LOAD_PROFILE = 'LOAD_PROFILE';
const FULL_TIME = 'FULL-TIME';
const KEY_WORDS = 'KEY-WORDS';
const CLEAR_KEY_WORDS = 'CLEAR-KEY-WORDS';
const LOAD_SIMILAR = 'LOAD_SIMILAR';
const MUTE_VOLUME = 'MUTE_VOLUME';

const initialState = {
    searchText: '',
    searchResults: [],
    allResults: [],
    jobPage: {},
    similarJobs: [],
    pageId: null,
    pagesNumber: 1,
    allJobs: [],
    currentCity: '',
    searchCity: '',
    isFullTime: false,
    keyWords: [],
    isMute: false
}

export const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_SEARCH_TEXT: {
            let stateCopy = {...state};
            stateCopy.searchText = action.newText;
            return stateCopy;
        }

        case LOAD_JOBS: {
            let stateCopy = {...state};
            stateCopy.searchResults = [...action.jobs];
            stateCopy.pagesNumber = action.pagesNumber;
            return stateCopy;
        }

        case CHANGE_PAGE: {
            let stateCopy = {...state};
            stateCopy.pageId = Number(action.page);
            return stateCopy;
        }

        case LOAD_PROFILE: {
            let stateCopy = {...state};
            stateCopy.jobPage = action.info;
            return stateCopy;
        }

        case LOAD_SIMILAR: {
            let stateCopy = {...state};
            stateCopy.similarJobs = action.info;
            return stateCopy;
        }

        case KEY_WORDS: {
            let stateCopy = {...state};
            stateCopy.keyWords = action.keyWords;
            return stateCopy;
        }

        case CLEAR_KEY_WORDS: {
            let stateCopy = {...state};
            stateCopy.keyWords = [];
            return stateCopy;
        }

        case FULL_TIME: {
            let stateCopy = {...state};
            stateCopy.isFullTime = !state.isFullTime;
            return stateCopy;
        }

        case MUTE_VOLUME: {
            let stateCopy = {...state};
            stateCopy.isMute = action.value;
            return stateCopy;
        }

        default:
            return state;

    }
}
export const clearKeyWordsAC = () => {
    return {
        type: CLEAR_KEY_WORDS
    }
}

export const getKeyWordsAC = (keyWords, numberSymbols) => {
    return {
        type: KEY_WORDS,
        keyWords,
        numberSymbols
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

export const loadAllActionCreater = (jobs, pages) => {
    return {
        type: LOAD_JOBS,
        jobs: jobs,
        pagesNumber: pages,
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

export const loadSimilarJobsActionCreater = (info) => {
    return {
        type: LOAD_SIMILAR,
        info: info
    }
}

export const updateVolumeActionCreater = (value) => {
    return {
        type: MUTE_VOLUME,
        value: value
    }
}

export default headerReducer;
