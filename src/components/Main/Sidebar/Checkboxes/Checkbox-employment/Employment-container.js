import {connect} from 'react-redux';
import {MarkCheckBoxEmploymentAC} from "../../../../../redux/sidebar-reducer";
import Employment from "./Employmen";

const mapStateToProps = (state) => {
    return {}
}
const masDispatchToProps = (dispatch) => {
    return {
        markCheckbox: (value, isSelect) => {
            let action = MarkCheckBoxEmploymentAC(value, isSelect);
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, masDispatchToProps)(Employment);