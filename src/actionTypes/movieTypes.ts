export const SET_MOVIES = "moviesActionTypes/SET_MOVIES";
export interface SetMoviesAction {
  type: typeof SET_MOVIES;
  movies: string;
}

export const GET_MOVIES = "moviesActionTypes/GET_MOVIES";
export interface GetMoviesAction {
    type: typeof GET_MOVIES;
}

export const GET_MOVIES_REQUEST = "moviesActionTypes/GET_MOVIES_REQUEST";
export interface GetMoviesRequestAction {
    type: typeof GET_MOVIES_REQUEST;
}

export const GET_MOVIES_SUCCESS = "moviesActionTypes/GET_MOVIES_SUCCESS";
export interface GetMoviesSuccessAction {
    type: typeof GET_MOVIES_SUCCESS;
    movies: string;
}

export const GET_MOVIES_FAILURE = "moviesActionTypes/GET_MOVIES_FAILURE";
export interface GetMoviesFailureAction {
    type: typeof GET_MOVIES_FAILURE;
    error: Error | string;
}

export type MovieAction =
    | SetMoviesAction
    | GetMoviesAction
    | GetMoviesRequestAction
    | GetMoviesSuccessAction
    | GetMoviesFailureAction;
