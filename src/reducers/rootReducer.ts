import { combineReducers } from 'redux';
import movieReducer from "./movieReducer";
import authReducer from "./authReducers";

const rootReducer = combineReducers({
    movie: movieReducer,
    auth: authReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
