import { put, call, takeLatest, all, fork } from "redux-saga/effects";
import axios from "axios";

import * as actions from "../actions/movieActions";
import * as movieTypes from "../actionTypes/movieTypes";

interface responseMovie {
    data: movieTypes.Movies
}

interface responseYoutube {
    data: movieTypes.YoutubeMovie
}

async function fetchGetMovies(): Promise<responseMovie> {
    const requestUrl: string = 'https://testapi.io/api/tien4720/movies';
    return await axios.get(requestUrl);
}

function* onGetMovies() {
    try {
        const response: responseMovie = yield call(fetchGetMovies);
        const data: any = response.data;
        const movies: movieTypes.Movies = data.movies;
        yield put(actions.getMoviesSuccess(movies));
    } catch (error: any) {
        yield put(actions.getMovieRequestFailure(error));
    }
}

async function fetchGetYoutubeData(youtubeUrl: string): Promise<responseYoutube> {
    const requestUrl: string = `http://youtube.com/oembed?url=${youtubeUrl}&format=json`;
    return await axios.get(requestUrl);
}

function* onGetYotubeData({youtubeUrl, sharedBy}: movieTypes.GetMovieRequestAction) {
    try {
        const urlParams: any = new URL(youtubeUrl);
        const searchParams: any = urlParams.searchParams;
        const youtubeId: string = searchParams.get('v');
        const response: responseYoutube = yield call(fetchGetYoutubeData, youtubeUrl);
        yield put(actions.getMovieRequestSuccess(response.data, youtubeId, sharedBy));
    } catch (error: any) {
        yield put(actions.getMovieRequestFailure(error));
    }
}

function* watchMovie() {
    yield takeLatest(movieTypes.GET_MOVIES_ACTION, onGetMovies);
    yield takeLatest(movieTypes.GET_MOVIE_REQUEST_ACTION, onGetYotubeData);
}

export default function* authSaga() {
    yield all([fork(watchMovie)]);
}
  