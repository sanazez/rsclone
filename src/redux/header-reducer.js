const UPDATE_SEARCH_TEXT = 'UPDATE-SEARCH-TEXT';
const LOAD_JOBS = 'LOAD-JOBS';
const CHANGE_PAGE = 'CHANGE_PAGE';

const initialState = {
    searchText: '',
    searchResults: [],
    allResults: []
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
            stateCopy.allResults = action.jobs;
            stateCopy.searchResults = [];
            for (let i = 0; i < 5; i++) {
                stateCopy.searchResults.push(stateCopy.allResults[i]);
            }
            return stateCopy;
        }

        case CHANGE_PAGE: {
            let stateCopy = { ...state };
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

export const changePageCreater = (value) => {
    return {
        type: CHANGE_PAGE,
        page: value
    }
}


export default headerReducer;
