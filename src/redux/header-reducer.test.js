import headerReducer from './header-reducer';
import { clearKeyWordsAC, getKeyWordsAC, changeCityAC, selectFullTimeAC, updateSearchTextActionCreater, loadAllActionCreater, changePageCreater, loadJobProfileActionCreater, loadSimilarJobsActionCreater } from './header-reducer';

let initialState = {
    searchText: '',
    searchResults: [],
    allResults: [],
    jobPage: [],
    similarJobs: [],
    pageId: null,
    pagesNumber: 1,
    allJobs: [],
    currentCity: '',
    searchCity: '',
    isFullTime: false,
    keyWords: []
};

it('state should get new pageId that store current pagination page', () => {
    let action = changePageCreater(25);
    let newState = headerReducer(initialState, action);
    expect(newState.pageId).toBe(25);
});

it('state should get new pageId that store current pagination page', () => {
    let action = changePageCreater(25);
    let newState = headerReducer(initialState, action);
    expect(newState.pageId).toBe(25);
});