import * as actions from '../actionTypes/movieTypes';

export interface MovieState {
    movies: string;
}

const initialState: MovieState = {
    movies: ''
};

export default function lyricsReducer(
    state: MovieState = initialState,
    action: actions.MovieAction
): MovieState {
    switch (action.type) {
        case actions.SET_MOVIES:
            return {
                movies: action.movies
            };
        default:
            return state;
    }
}
