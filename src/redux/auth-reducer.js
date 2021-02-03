const SHOW_HIDE_REGISTRATION = 'SHOW-HIDE-REGISTRATION';
const SHOW_HIDE_LOGIN = 'SHOW-HIDE-LOGIN'
const initialState = {
    isShowRegistration: false,
    isShowLogin: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_HIDE_REGISTRATION: {
            let copyState = {...state};
            if (action.isShow === true) {
                copyState.isShowRegistration = true;
            } else {
                copyState.isShowRegistration = false
            }
            console.log('registration')
            return copyState;
        }
        case SHOW_HIDE_LOGIN: {
            console.log('login')
            let copyState = {...state};

            copyState.isShowLogin = !state.isShowLogin;
            return copyState;
        }
        default:
            return state
    }
}

export const registrationAC = (isShow) => {
    return {
        type: SHOW_HIDE_REGISTRATION,
        isShow
    }
}

export const loginAC = (isShow) => {
    return {
        type: SHOW_HIDE_LOGIN,
        isShow
    }
}