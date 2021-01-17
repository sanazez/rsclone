const UPDATE_SEARCH_TEXT = 'UPDATE-SEARCH-TEXT';
const LOAD_JOBS = 'LOAD-JOBS';

const initialState = {
    searchText: '',
    searchResults: [],
}

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_SEARCH_TEXT: {
            let stateCopy = { ...state };
            stateCopy.searchText = action.newText;
            return stateCopy;
        }

        case LOAD_JOBS: {
            let stateCopy = { ...state };
            stateCopy.searchResults = action.jobs;
            console.log(action.jobs)
            return stateCopy;
        }
        default: return state
    }

}

export const updateSearchTextActionCreater = (text) => {
    return {
        type: UPDATE_SEARCH_TEXT,
        newText: text
    }
}

export const loadAllActionCreater = (jobs) => {
    return {
        type: LOAD_JOBS,
        jobs: jobs
    }
}

export default headerReducer;
