import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { APIKey } from '../../common/apis/movieApiKey'
import movieApi from '../../common/apis/movieApi'

const initialState = {
    movie : {},
    movies: {},
    shows: {},
}

export const fetchAsyncMovies = createAsyncThunk(
    'movies/fetchAsyncMovies',
    async (term) => {
        const response = await movieApi
        .get(`?apiKey=${APIKey}&s=${term}&type=movie`)

        return response.data
    }
    
)

export const fetchAsyncShows = createAsyncThunk(
    'movies/fetchAsyncShows',
    async (term) => {
        const response = await movieApi
        .get(`?apiKey=${APIKey}&s=${term}&type=series`)

        return response.data
    }
    
)

export const fetchAsyncMovieOrSelectedShow = createAsyncThunk(
    'movies/fetchAsyncMovieOrSelectedShow',
    async (id) => {
        const response = await movieApi
        .get(`?apiKey=${APIKey}&i=${id}&plot=full`)
        return response.data
    }
    
)


const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers : {
        removeMovieSelectedOrShow: (state) => {
            state.movie = {}
        },
        removeAsyncMovies: (state) => {
            state.movies = {}
        },
        removeAsyncShows: (state) => {
            state.shows = {}
        }
    },
    extraReducers : {
        // Movies
        [fetchAsyncMovies.pending]: () => {
            console.log('Pending...');
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log("Successful fetch!");
            return { ...state, movies : payload}
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("Rejected");
        },

        // Shows
        [fetchAsyncShows.pending]: () => {
            console.log('Pending...');
        },
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            console.log("Successful fetch!");
            return { ...state, shows : payload}
        },
        [fetchAsyncShows.rejected]: () => {
            console.log("Rejected");
        },

        // Movie Selected
        [fetchAsyncMovieOrSelectedShow.fulfilled]: (state, { payload }) => {
            console.log("Successful fetch!");
            return { ...state, movie : payload}
        },
    }
})

export const {
    removeMovieSelectedOrShow, 
    removeAsyncMovies, 
    removeAsyncShows} = movieSlice.actions
export const getAllMovies = (state) => state.movies.movies
export const getAsyncShows = (state) => state.movies.shows
export const getMovieSelectedOrShow = (state) => state.movies.movie
export default movieSlice.reducer


