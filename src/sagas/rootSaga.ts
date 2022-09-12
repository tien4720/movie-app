import { all, fork } from "redux-saga/effects";
import AuthSaga from "./authSaga";
import MovieSaga from "./movieSaga";

export default function* rootSaga() {
    yield all([fork(AuthSaga), fork(MovieSaga)]);
}