export interface User {
    username: string;
    password: string;
    response?: string; 
}

export const LOGIN_ACTION = 'authActionTypes/LOGIN_ACTION';
export interface LoginAction {
    type: typeof LOGIN_ACTION;
    user: User;
}

export const REGISTER_ACTION = 'authActionTypes/REGISTER_ACTION';
export interface RegisterAction {
    type: typeof REGISTER_ACTION;
    user: User;
}

export const LOGIN_SUCCESS_ACTION = 'authActionTypes/LOGIN_SUCCESS_ACTION';
export interface LoginSuccessAction {
    type: typeof LOGIN_SUCCESS_ACTION;
    response: string;
}

export const LOGIN_FAILURE_ACTION = 'authActionTypes/LOGIN_FAILURE_ACTION';
export interface LoginFailureAction {
    type: typeof LOGIN_FAILURE_ACTION;
    response: string;
}

export const REGISTER_SUCCESS_ACTION = 'authActionTypes/REGISTER_SUCCESS_ACTION';
export interface RegisterSuccessAction {
    type: typeof REGISTER_SUCCESS_ACTION;
    response: string;
}

export const REGISTER_FAILURE_ACTION = 'authActionTypes/REGISTER_FAILURE_ACTION';
export interface RegisterFailureAction {
    type: typeof REGISTER_FAILURE_ACTION;
    response: string;
}

export const LOGOUT_ACTION = 'authActionTypes/LOGOUT_ACTION';
export interface LogoutAction {
    type: typeof LOGOUT_ACTION;
}

export type AuthAction =
    | LoginAction
    | RegisterAction
    | LoginSuccessAction
    | LoginFailureAction
    | RegisterSuccessAction
    | RegisterFailureAction
    | LogoutAction;
