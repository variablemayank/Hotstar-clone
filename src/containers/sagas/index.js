import {
        FETCH_MOVIES_REQUEST_ERROR,
        FETCH_MOVIES_REQUEST_SUCCESS,
        FETCH_MOVIE_REQUEST} from '../actionTypes';

import {all,call,delay,put,take,takeLatest} from "redux-saga/effects";


import axios from 'axios';
import data from '../../global/data';

const url = "";

const getMoviesList = data;


function * fetchMovies() {
    try {
        let moviesList = getMoviesList;
        console.log("moviesList -->",moviesList);

        yield put ({
            type : FETCH_MOVIES_REQUEST_SUCCESS,
            response: moviesList
        })
    }
    catch(error) {
        yield put ({type:FETCH_MOVIES_REQUEST_ERROR,error:error && error.toString()})
    }
}

export function * moviesListWatcher() {
    yield takeLatest(FETCH_MOVIE_REQUEST,fetchMovies);
}