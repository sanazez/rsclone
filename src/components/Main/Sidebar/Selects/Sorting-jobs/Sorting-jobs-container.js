import {connect} from 'react-redux';
import {sortingJobsAC} from "../../../../../redux/sidebar-reducer";
import SortingJobs from "./Sorting-jobs";

const mapStateToProps = (state) => {
    return {
        typeSorting: state.sidebarState.typeSorting,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        sortingJobs: (sorting) => {
            let action = sortingJobsAC(sorting);
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SortingJobs)