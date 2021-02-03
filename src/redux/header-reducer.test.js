import headerReducer from './header-reducer';
import { clearKeyWordsAC, getKeyWordsAC, selectFullTimeAC, updateSearchTextActionCreater, loadAllActionCreater, changePageCreater, loadJobProfileActionCreater, loadSimilarJobsActionCreater } from './header-reducer';

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

test('state should get new pageId that store current pagination page, tests changePageCreater', () => {
    let action = changePageCreater(25);
    let newState = headerReducer(initialState, action);
    expect(newState.pageId).toBe(25);
});

test('state should get and store search result and pages number, tests loadAllActionCreater', () => {
    const searchExample = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}];
    let action = loadAllActionCreater(searchExample, 51);
    let newState = headerReducer(initialState, action);
    expect(newState.pagesNumber).toBe(51);
    expect(newState.searchResults[3].id).toBe(4);
});

test('state should get and store search text string, tests updateSearchTextActionCreater', () => {
    const text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
    let action = updateSearchTextActionCreater(text);
    let newState = headerReducer(initialState, action);
    expect(newState.searchText).toBe('Lorem Ipsum is simply dummy text of the printing and typesetting industry.');
});

test('state should get and store info for job profile, tests loadJobProfileActionCreater', () => {
    const data = {id: 52, title: 'some kind of worker'};
    let action = loadJobProfileActionCreater(data);
    let newState = headerReducer(initialState, action);
    expect(newState.jobPage.id).toBe(52);
    expect(newState.jobPage.title).toBe('some kind of worker');
});

test('state should get and store info about similar jobs, tests loadSimilarJobsActionCreater', () => {
    const info = [{id: 52, title: 'some kind of worker'}, {id: 47, title: 'another kind of worker'}, {id: 1, title: 'different kind of worker'}];
    let action = loadSimilarJobsActionCreater(info);
    let newState = headerReducer(initialState, action);
    expect(newState.similarJobs[2].id).toBe(1);
    expect(newState.similarJobs[0].title).toBe('some kind of worker');
    expect(newState.similarJobs[1].title).toBe('another kind of worker');
    expect(newState.similarJobs.length).toBe(3);
});
