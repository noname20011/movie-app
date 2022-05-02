import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllMovies, getAsyncShows, removeAsyncMovies, removeAsyncShows } from '../../features/movies/movieSlice'
import MovieCard from '../MovieCard/MovieCard'
import Slider from 'react-slick'
import './MovieListing.scss'
import { settings } from '../../common/settings'

const MovieListing = () => {
    const dispatch = useDispatch()
    const movies = useSelector(getAllMovies)
    const shows = useSelector(getAsyncShows)
    let renderMovie, renderShow = ''

    // Movie
    renderMovie = movies.Response === 'True' 
    ? (
        movies.Search.map((movie, index) => 
            <MovieCard  data={movie} key={index}/>)
    ) 
    : (
    <div className='movie-error'>
        <h3>${movies.Error}</h3>
    </div>)

    // Show
    renderShow = shows.Response === 'True' 
    ? (
        shows.Search.map((movie, index) => 
            <MovieCard  data={movie} key={index}/>)
    ) 
    : (
    <div className='movie-error'>
        <h3>${shows.Error}</h3>
    </div>)

    return (
        <div className='movie-wrapper'>
            <div className='movie-list'>
                <h2>Movies</h2>
                <div className='movie-container'>
                    <Slider {...settings} >{renderMovie}</Slider>
                </div>
            </div>
            <div className='show-list'>
                <h2>Shows</h2>
                <div className='movie-container'>
                    <Slider {...settings}>{renderShow}</Slider>
                </div>
            </div>
        </div>
    )
}

export default MovieListing