import {
    FETCH_MOVIES_REQUEST_ERROR,
    FETCH_MOVIE_REQUEST,
    FETCH_MOVIES_REQUEST_SUCCESS
} from '../actionTypes';

const INITIAL_STATE = {
    movies: [],
    fetchMoviesErro: "",
    isFetchingMovies:false
}

export default function MoviesReducer(state = INITIAL_STATE,action = {}) {
    // eslint-disable-next-line default-case
    switch(action.type) {
        case FETCH_MOVIE_REQUEST : {
            return {
                ...state,
                isFetchingMovies: true
            }
        }
        case FETCH_MOVIES_REQUEST_ERROR: {
            return {
                ...state,
                isFetchingMovies: false,
            }
        }
        case FETCH_MOVIES_REQUEST_SUCCESS: {
            return {
                ...state,
                isFetchingMovies:false,
                movies: [action.response,...state.movies]

            }
        }
        default: 
        return state;
    }
    
}