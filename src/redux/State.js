import rerender from '../index'
let state = {
    header: {
        searchText: 'reactdasda',
        searchResults: [],
    }
}
export const updateSearchText = (newText) => {
    state.header.searchText = newText;
    rerender();
}
export const onSearchInfo = async () => {
    let data = await fetch(`http://localhost:9000/testAPI?search=${state.header.searchText}`)
    data = await data.json()
    state.header.searchResults = data
    console.log(state.header.searchResults)
}
export default state