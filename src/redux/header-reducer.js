const UPDATE_SEARCH_TEXT = 'UPDATE-SEARCH-TEXT';
const SEARCH_JOBS = 'SEARCH-JOBS';

const initialState = {
    searchText: '',
    searchResults: [],
}

const requestJobs = async (state) => {
    let data = await fetch(`http://localhost:9000/testAPI?search=${state.searchText}`);
    data = await data.json()
    state.searchResults = data;
    console.log(state)
}

const headerReducer = (state = initialState, action) => {
    if (action.type === UPDATE_SEARCH_TEXT) {
        state.searchText = action.newText;
    } else if (action.type === SEARCH_JOBS) {
        requestJobs(state)
    }
    return state;
}

export const updateSearchTextActionCreater = (text) => {
    return {
        type: UPDATE_SEARCH_TEXT,
        newText: text
    }
}

export const searchJobsActionCreater = () => {
    return {
        type: SEARCH_JOBS,
    }
}
export default headerReducer;