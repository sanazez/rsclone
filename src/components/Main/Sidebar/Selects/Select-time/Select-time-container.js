import {connect} from 'react-redux';
import SelectTime from "./Select-time";
import {changeValueSelectTimeAC} from "../../../../../redux/sidebar-reducer";


const mapStateToProps = (state) => {
    return {
        period: state.sidebarState.period,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeValueSelect: (value) => {
            let action = changeValueSelectTimeAC(value);
            dispatch(action);
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectTime);