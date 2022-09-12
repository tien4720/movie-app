import * as actions from '../actionTypes/authTypes';

const initialState: actions.User = {
    username: '',
    password: '',
    response: '',
};

export default function authReducer(state: actions.User = initialState, action: actions.AuthAction) {
    switch (action.type) {
        case actions.LOGIN_ACTION:
            return {
                ...state,
                username: action.user.username,
            };
        case actions.REGISTER_ACTION:
            return {
                ...state,
            };
        case actions.LOGIN_SUCCESS_ACTION:
        case actions.REGISTER_SUCCESS_ACTION:
            const returnObject: any = action.response;
            const data: any = returnObject.data;
            return {
                ...state,
                response: data.status
            };
        case actions.LOGOUT_ACTION:
            return {
                ...state,
                username: '',
                response: '',
            };
        default:
            return state;
    }
}
