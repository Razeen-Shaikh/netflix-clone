import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import NetflixLogo from '../images/800px-Logo_Netflix.png'
import TMDB from '../images/TMDB.svg'
import './Nav.css'

const Nav = () => {
    const [show, handleShow] = useState(false)
    const [signedIn, setSignedIn] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                handleShow(true)
            } else handleShow(false)
        })
        return () => {
            window.removeEventListener('scroll')
        }
    }, [])

    return (
        <div className={`nav ${show && 'nav-black'}`}>
            <img
                className='nav-logo'
                src={NetflixLogo}
                alt='Netflix Logo'
            />
            {signedIn ?
                (<a href='https://www.themoviedb.org/'>
                    <img
                        className='nav-attribution'
                        src={TMDB}
                        alt='TMDB Logo'
                    />
                </a>
                ) : (
                    <button className='nav-btn btn btn-danger'>
                        <Link to='/movies' className='text-light' onClick={() => setSignedIn(true)}>Sign In</Link>
                    </button>)
            }
        </div>
    )
}

export default Nav
