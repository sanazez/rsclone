import React from 'react';
import {connect} from 'react-redux';
import LinksAuth from "./Authentication";
import {loginAC, registrationAC} from "../../../../redux/auth-reducer";

const mapStateToProps = (state) => {
    return {
        isShowRegistration: state.authState.isShowRegistration,
        isShowLogin: state.authState.isShowLogin
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        showHideRegistration: (isShow) => {
            let action = registrationAC(isShow);
            dispatch(action);
        },
        showHideLogin: (isShow) => {
            let action = loginAC(isShow);
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LinksAuth)