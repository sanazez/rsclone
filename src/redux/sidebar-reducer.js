const KEY_WORDS_CITIES = 'KEY-WORDS-CITIES';
const UPDATE_SEARCH_TEXT_CITIES = 'UPDATE-SEARCH-TEXT-CITIES';
const SET_CURRENT_CITY = 'SET-CURRENT-CITY';
const CHANGE_VALUE_SELECT_TIME = 'CHANGE-VALUE-SELECT-TIME';
const CHANGE_VALUE_SELECT_EXPERIENCE = 'CHANGE-VALUE-SELECT-EXPERIENCE';

const initialState = {
    keyWords: [],
    searchCityText: '',
    currentCityId: '',
    period: 0,
    experience: 0,
}

const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case KEY_WORDS_CITIES : {
            let copyState = {...state};
            copyState.keyWords = action.keyWords;
            return copyState;

        }
        case UPDATE_SEARCH_TEXT_CITIES: {
            let copyState = {...state};
            copyState.searchCityText = action.text;
            copyState.keyWords = state.keyWords;
            if (!action.text) {
                copyState.currentCityId = '';
            }
            return copyState;
        }
        case SET_CURRENT_CITY: {
            let copyState = {...state};
            copyState.searchCityText = action.city;
            copyState.currentCityId = action.cityId;
            copyState.keyWords = [];
            return copyState;
        }
        case CHANGE_VALUE_SELECT_TIME: {
            let copyState = {...state};
            copyState.period = action.value;

            console.log(action.value);
            return copyState;
        }
        case CHANGE_VALUE_SELECT_EXPERIENCE: {
            let copyState = {...state};
            copyState.experience = action.value;
            return copyState;
        }
        default:
            return state;
    }
}

export const changeValueSelectExperienceAC = (value) => {
    return {
        type: CHANGE_VALUE_SELECT_EXPERIENCE,
        value
    }
}

export const changeValueSelectTimeAC = (value) => {
    return {
        type: CHANGE_VALUE_SELECT_TIME,
        value
    }
}

export const setCurrentCityAC = (city, cityId) => {
    return {
        type: SET_CURRENT_CITY,
        city,
        cityId
    }
}

export const updateSearchTextCities = (text) => {
    return {
        type: UPDATE_SEARCH_TEXT_CITIES,
        text,
    }
}

export const getKeyWordsCitiesAC = (keyWords) => {
    return {
        type: KEY_WORDS_CITIES,
        keyWords,
    }
}

export default sidebarReducer;