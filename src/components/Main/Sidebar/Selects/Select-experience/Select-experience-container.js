import {connect} from 'react-redux';
import SelectExperience from "./Select-experience";
import {changeValueSelectExperienceAC} from "../../../../../redux/sidebar-reducer";


const mapStateToProps = (state) => {
    return {
        experience: state.sidebarState.experience,
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        changeValue: (value) => {
            let action = changeValueSelectExperienceAC(value);
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SelectExperience)