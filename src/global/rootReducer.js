import {combineReducers} from "redux";

import MoviesReducer from '../containers/reducer';

export default combineReducers({
    movieList: MoviesReducer
});