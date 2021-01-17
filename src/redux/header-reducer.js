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

const requestJobsFirstOnload = async () => {
    let data = await fetch(`http://localhost:9000/`);
    data = await data.json()
    return data;
}
const headerReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {
        case UPDATE_SEARCH_TEXT: {
            stateCopy = { ...state};
            stateCopy.searchText = action.newText;
            return stateCopy;
        }
        case SEARCH_JOBS: {
            stateCopy = { ...state,
                searchResults: [...state.searchResults]
            };
            requestJobs(stateCopy);
            return stateCopy;
        }
        case LOAD_ALL: {
            stateCopy = { ...state
            };
            requestJobsFirstOnload().then(res => { stateCopy.searchResults = res});
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
