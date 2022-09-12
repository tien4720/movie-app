import * as actions from '../actionTypes/authTypes';


export function login(user: actions.User): actions.LoginAction {
    return {
        type: actions.LOGIN_ACTION,
        user
    };
}

export function loginSuccess(response: string): actions.LoginSuccessAction {
    return {
        type: actions.LOGIN_SUCCESS_ACTION,
        response
    };
}
  
export function loginFailure(response: string): actions.LoginFailureAction {
    return {
        type: actions.LOGIN_FAILURE_ACTION,
        response
    };
}

export function register(user: actions.User): actions.RegisterAction {
    return {
        type: actions.REGISTER_ACTION,
        user
    };
}

export function registerSuccess(response: string): actions.RegisterSuccessAction {
    return {
        type: actions.REGISTER_SUCCESS_ACTION,
        response
    };
}
  
export function registerFailure(response: string): actions.RegisterFailureAction {
    return {
        type: actions.REGISTER_FAILURE_ACTION,
        response
    };
}

export function logout(): actions.LogoutAction {
    return {
        type: actions.LOGOUT_ACTION
    }
}

export function resetResponse() {
    return {
        type: actions.RESET_RESPONSE
    }
}
