import * as actions from '../actionTypes/movieTypes';

export function setMovies(movies: actions.Movies): actions.SetMoviesAction {
    return {
        type: actions.SET_MOVIES_ACTION,
        movies
    };
}

export function getMovies(): actions.GetMoviesAction {
    return {
        type: actions.GET_MOVIES_ACTION,
    };
}

export function getMoviesSuccess(movies: actions.Movies): actions.GetMoviesSuccessAction {
    return {
        type: actions.GET_MOVIES_SUCCESS_ACTION,
        movies,
    };
}
  
export function getMoviesFailure(response: string): actions.GetMoviesFailureAction {
    return {
        type: actions.GET_MOVIES_FAILURE_ACTION,
        response
    };
}

export function getMovieRequest(youtubeUrl: string, sharedBy: string): actions.GetMovieRequestAction {
    return {
        type: actions.GET_MOVIE_REQUEST_ACTION,
        youtubeUrl,
        sharedBy
    };
}

export function getMovieRequestSuccess(youtubeMovie: actions.YoutubeMovie, youtubeId: string, sharedBy: string): actions.GetMovieRequestSuccessAction {
    return {
        type: actions.GET_MOVIE_REQUEST_SUCCESS_ACTION,
        youtubeMovie,
        youtubeId,
        sharedBy,
    };
}
  
export function getMovieRequestFailure(response: string): actions.GetMovieRequestFailureAction {
    return {
        type: actions.GET_MOVIE_REQUEST_FAILURE_ACTION,
        response
    };
}

export function resetResponse() {
    return {
        type: actions.RESET_RESPONSE
    }
}