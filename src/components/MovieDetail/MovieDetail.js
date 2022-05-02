import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getMovieSelectedOrShow, 
    fetchAsyncMovieOrSelectedShow, 
    removeMovieSelectedOrShow } 
from '../../features/movies/movieSlice';
import './MovieDetail.scss'


const MovieDetail = () => {
    const { imdbID } = useParams()
    const dispatch = useDispatch()
    const movie = useSelector(getMovieSelectedOrShow)

    useEffect(() => {
        dispatch(fetchAsyncMovieOrSelectedShow(imdbID))
        dispatch(removeMovieSelectedOrShow())
    }, [imdbID, dispatch])
    return (
        
        <div className='movie-section'>
            {Object.keys(movie).length === 0 ? 
            (
                <div className='loading'>Loading ...</div>
            ) : 
            (
                <><div className='movie-left'>
                        <div className='movie-title'>
                            <h2>{movie.Title}</h2>
                        </div>
                        <div className='movie-rating'>
                            <span>
                                IMDB Rating <i className='fa fa-star'></i>: {movie.imdbRating}
                            </span>
                            <span>
                                IMDB Votes <i className='fa fa-thumbs-up'></i>: {movie.imdbVotes}
                            </span>
                            <span>
                                Runtime <i className='fa fa-film'></i>: {movie.Runtime}
                            </span>
                            <span>
                                Year <i className='fa fa-calendar'></i>: {movie.Year}
                            </span>
                        </div>
                        <div className='movie-plot'>{movie.Plot}</div>
                        <div className='movie-info'>
                            <div>
                                <span>Direction </span>
                                <span>{movie.Director}</span>
                            </div>
                            <div>
                                <span>Star </span>
                                <span>{movie.Actors}</span>
                            </div>
                            <div>
                                <span>Genres </span>
                                <span>{movie.Genre}</span>
                            </div>
                            <div>
                                <span>Language </span>
                                <span>{movie.Language}</span>
                            </div>
                            <div>
                                <span>Awards </span>
                                <span>{movie.Awards}</span>
                            </div>
                        </div>
                    </div><div className='movie-right'>
                            <img src={movie.Poster} alt={movie.Title} />
                        </div></>
            )}
        </div>
    )
}

export default MovieDetail