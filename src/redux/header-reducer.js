const UPDATE_SEARCH_TEXT = 'UPDATE-SEARCH-TEXT';
const SEARCH_JOBS = 'SEARCH-JOBS';
const LOAD_ALL = 'LOAD-ALL';

const initialState = {
    searchText: 'react',
    searchResults: [],
}

const requestJobs = async (state) => {
    let data = await fetch(`http://localhost:9000/testAPI/search?search=${state.searchText}`);
    data = await data.json()
    state.searchResults = data;
    console.log(state)
}

const requestJobsFirstOnload = async (state) => {
    let data = await fetch(`http://localhost:9000/`);
    data = await data.json()
    state.searchResults = data;

}
const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_SEARCH_TEXT: {
            let stateCopy = { ...state };
            stateCopy.searchText = action.newText;
            return stateCopy;
        }
        case SEARCH_JOBS: {
            requestJobs(state);
            return state;
        }
        case LOAD_ALL: {
            requestJobsFirstOnload(state);
            return state;
        }
        default: return state
    }
    /* 
        if (action.type === UPDATE_SEARCH_TEXT) {
            state.searchText = action.newText;
            console.log(action.newText)
        } else if (action.type === SEARCH_JOBS) {
            requestJobs(state)
        }
        else if (action.type === LOAD_ALL) {
            requestJobsFirstOnload(state);
        }
        return state; */
}

export const updateSearchTextActionCreater = (text) => {
    return {
        type: UPDATE_SEARCH_TEXT,
        newText: text
    }
}

export const loadAllActionCreater = () => {
    return {
        type: LOAD_ALL
    }
}

export const searchJobsActionCreater = () => {
    return {
        type: SEARCH_JOBS,
    }
}
export default headerReducer;