import sidebarReducer from './sidebar-reducer';
import { sortingJobsAC, MarkCheckBoxScheduleAC, MarkCheckBoxEmploymentAC, changeValueSelectExperienceAC, changeValueSelectTimeAC, setCurrentCityAC, updateSearchTextCities, getKeyWordsCitiesAC } from './sidebar-reducer';

const initialState = {
    keyWords: [],
    searchCityText: '',
    currentCityId: '',
    period: 0,
    experience: 0,
    employment: [],
    schedule: [],
    typeSorting: 'relevance'
}

test('state should get new key words, tests getKeyWordsCitiesAC', () => {
    const keyWords = ['job', 'react', 'driver'];
    let action = getKeyWordsCitiesAC(keyWords);
    let newState = sidebarReducer(initialState, action);
    expect(newState.keyWords[0]).toBe('job');
    expect(newState.keyWords[1]).toBe('react');
    expect(newState.keyWords[2]).toBe('driver');
    expect(newState.keyWords.length).toBe(3);
});

test('state should get new city, tests updateSearchTextCities', () => {
    const text = 'Minsk';
    let action = updateSearchTextCities(text);
    let newState = sidebarReducer(initialState, action);
    expect(newState.searchCityText).toBe('Minsk');
});

test('state should get new city and city id, tests setCurrentCityAC', () => {
    const city = 'Moscow';
    const cityId = '1003';
    let action = setCurrentCityAC(city, cityId);
    let newState = sidebarReducer(initialState, action);
    expect(newState.searchCityText).toBe('Moscow');
    expect(newState.currentCityId).toBe('1003');
});

test('state should get new time period, tests changeValueSelectTimeAC', () => {
    const value = 7;
    let action = changeValueSelectTimeAC(value);
    let newState = sidebarReducer(initialState, action);
    expect(newState.period).toBe(7);
});

test('state should get new experience value, tests changeValueSelectExperienceAC', () => {
    const value = 'between1And3';
    let action = changeValueSelectExperienceAC(value);
    let newState = sidebarReducer(initialState, action);
    expect(newState.experience).toBe('between1And3');
});

test('state should get value from marked checkboxes, tests MarkCheckBoxEmploymentAC', () => {
    const value = 'full';
    const isSelect = true;
    let action = MarkCheckBoxEmploymentAC(value, isSelect);
    let newState = sidebarReducer(initialState, action);
    expect(newState.employment[0]).toBe('full');
});

test('state should get value from marked checkboxes, tests MarkCheckBoxScheduleAC', () => {
    const value = 'fullDay';
    const isSelect = true;
    let action = MarkCheckBoxScheduleAC(value, isSelect);
    let newState = sidebarReducer(initialState, action);
    expect(newState.schedule[0]).toBe('fullDay');
});

test('state should get sorting type, tests sortingJobsAC', () => {
    const sorting = 'salary_desc';
    let action = sortingJobsAC(sorting);
    let newState = sidebarReducer(initialState, action);
    expect(newState.typeSorting).toBe('salary_desc');
});
