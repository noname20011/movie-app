import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import user from '../../images/user.png'
import './Header.scss'
import { UilSearch  } from '@iconscout/react-unicons'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice'

const Header = () => {
    const [term, setTerm] = useState('')
    const dispatch = useDispatch()
    const submitHandler = (e) => {
        e.preventDefault()
        if (term === "") alert("You don't type!")
        dispatch(fetchAsyncMovies(term))
        dispatch(fetchAsyncShows(term))
        setTerm("")
    }
    return (
        <div className='header'>
            <Link to={'/'}>
                <div className='logo'>Movie App</div>
            </Link>
            <form onSubmit={submitHandler} className='search-form'>
                <input  placeholder='Search here...'
                value={term} 
                name='search' id='search' 
                className='search-input' 
                onChange={(e) => setTerm(e.target.value)}/>
                <button type={"submit"} className='search-btn'>
                    <UilSearch className='search-icon'/>
                </button>
            </form> 
            <div className='user-img'>
                <img src={user} alt='name'/>
            </div>
        </div>
    )
}

export default Header