import {connect} from 'react-redux';
import {MarkCheckBoxScheduleAC} from "../../../../../redux/sidebar-reducer";
import Schedule from "./Schedule";

const mapStateToProps = (state) => {
    return {}
}
const masDispatchToProps = (dispatch) => {
    return {
        markCheckbox: (value, isSelect) => {
            let action = MarkCheckBoxScheduleAC(value, isSelect)
            dispatch(action);
        }
    }


}

export default connect(mapStateToProps, masDispatchToProps)(Schedule);