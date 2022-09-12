import { put, call, takeLatest, all, fork } from "redux-saga/effects";
import axios from "axios";

import * as actions from "../actions/authActions";
import * as authTypes from "../actionTypes/authTypes";

interface response {
    status: string;
}

async function fetchLogin(user: authTypes.User): Promise<response> {
    return await axios.post('https://testapi.io/api/tien4720/login', {username: user.username, password: user.password});
}

async function fetchRegister(user: authTypes.User): Promise<response> {
    return await axios.post('https://testapi.io/api/tien4720/register', {username: user.username, password: user.password});
}

function* onLogin({ user }: authTypes.LoginAction) {
    try {
        const response: string = yield call(fetchLogin, user);
        yield put(actions.loginSuccess(response));
    } catch (error: any) {
        yield put(actions.loginFailure(error));
    }
}

function* onRegister({ user }: authTypes.RegisterAction) {
    try {
        const response: string = yield call(fetchRegister, user);
        yield put(actions.registerSuccess(response));
    } catch (error: any) {
        yield put(actions.registerFailure(error));
    }
}

function* watchUserAuthentication() {
    yield takeLatest(authTypes.LOGIN_ACTION, onLogin);
    yield takeLatest(authTypes.REGISTER_ACTION, onRegister);
}

export default function* authSaga() {
    yield all([fork(watchUserAuthentication)]);
}
  