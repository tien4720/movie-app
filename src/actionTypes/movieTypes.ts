export interface YoutubeMovie {
    author_name: string,
    author_url: string,
    provider_url: string,
    title: string,
    description?: string,
}

export interface Movie {
    url: string;
    title: string;
    sharedBy: string;
    description?: string;
    like: number;
    dislike: number;
}

export interface Movies {
    movies: Movie[];
    response: string;
    isCallGetMovies: boolean;
}

export const SET_MOVIES_ACTION = 'moviesActionTypes/SET_MOVIES_ACTION';
export interface SetMoviesAction {
    type: typeof SET_MOVIES_ACTION;
    movies: Movies;
}

export const GET_MOVIES_ACTION = 'moviesActionTypes/GET_MOVIES_ACTION';
export interface GetMoviesAction {
    type: typeof GET_MOVIES_ACTION;
}

export const GET_MOVIES_SUCCESS_ACTION = 'moviesActionTypes/GET_MOVIES_SUCCESS_ACTION';
export interface GetMoviesSuccessAction {
    type: typeof GET_MOVIES_SUCCESS_ACTION;
    movies: Movies;
}

export const GET_MOVIES_FAILURE_ACTION = 'moviesActionTypes/GET_MOVIES_FAILURE_ACTION';
export interface GetMoviesFailureAction {
    type: typeof GET_MOVIES_FAILURE_ACTION;
    response: Error | string;
}

export const GET_MOVIE_REQUEST_ACTION = 'moviesActionTypes/GET_MOVIE_REQUEST_ACTION';
export interface GetMovieRequestAction {
    type: typeof GET_MOVIE_REQUEST_ACTION;
    youtubeUrl: string;
    sharedBy: string;
}

export const GET_MOVIE_REQUEST_SUCCESS_ACTION = 'moviesActionTypes/GET_MOVIE_REQUEST_SUCCESS_ACTION';
export interface GetMovieRequestSuccessAction {
    type: typeof GET_MOVIE_REQUEST_SUCCESS_ACTION;
    youtubeMovie: YoutubeMovie;
    youtubeId: string;
    sharedBy: string;
}

export const GET_MOVIE_REQUEST_FAILURE_ACTION = 'moviesActionTypes/GET_MOVIE_REQUEST_FAILURE_ACTION';
export interface GetMovieRequestFailureAction {
    type: typeof GET_MOVIE_REQUEST_FAILURE_ACTION;
    response: Error | string;
}

export const RESET_RESPONSE = 'moviesActionTypes/RESET_RESPONSE'
export interface ResetResponse {
    type: typeof RESET_RESPONSE;
}

export type MovieAction =
    | SetMoviesAction
    | GetMoviesAction
    | GetMoviesSuccessAction
    | GetMoviesFailureAction
    | GetMovieRequestAction
    | GetMovieRequestSuccessAction
    | GetMovieRequestFailureAction
    | ResetResponse;
