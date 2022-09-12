import * as actions from '../actionTypes/movieTypes';

const initialState: actions.Movies = {
    movies: [],
    response: '',
    isCallGetMovies: false,
};

export default function movieReducer(state: actions.Movies = initialState, action: actions.MovieAction) {
    switch (action.type) {
        case actions.SET_MOVIES_ACTION:
            return {
                ...state,
            };
        case actions.GET_MOVIES_SUCCESS_ACTION:
            return {
                ...state,
                movies: action.movies,
                isCallGetMovies: true
            };
        case actions.GET_MOVIE_REQUEST_SUCCESS_ACTION:
            const movie: actions.Movie = {
                url: 'https://www.youtube.com/embed/' + action.youtubeId,
                title: action.youtubeMovie.title,
                sharedBy: action.sharedBy,
                description: action.youtubeMovie.description,
                like: Math.floor(Math.random() * 1000),
                dislike: Math.floor(Math.random() * 1000),
            };
            return {
                ...state,
                movies: [...state.movies, movie],
                response: 'success'
            };
        case actions.RESET_RESPONSE:
            return {
                ...state,
                response: ''
            }
        default:
            return state;
    }
}
