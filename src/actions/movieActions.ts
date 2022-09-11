import * as actions from '../actionTypes/movieTypes';

export function setMovies(movies: string): actions.SetMoviesAction {
    return {
        type: actions.SET_MOVIES,
        movies
    };
}