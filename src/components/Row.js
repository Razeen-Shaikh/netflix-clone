import React, { useState, useEffect } from 'react'
import axios from '../axios'
import './Row.css'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const base_url = 'https://image.tmdb.org/t/p/w500'

const Row = ({ title, fetchUrl, isLargeRow }) => {
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState('')

    useEffect(() => {
        // Get Movies
        (async () => {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request
        })()
    }, [fetchUrl])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    }

    const handleClick = movie => {
        if (trailerUrl) {
            setTrailerUrl('')
        } else {
            movieTrailer(movie?.name || '')
                .then(url => {
                    const urlParams = new URLSearchParams(new URL(url).search)
                    setTrailerUrl(urlParams.get('v'))
                })
                .catch(error => console.log(error))
        }
    }

    return (
        <div className='row'>
            {/* title */}
            <h2>{title}</h2>

            {/* container with posters */}
            <div className='row-posters'>
                {/* Row Posters */}
                {movies.map(movie =>
                    movie?.backdrop_path &&
                    (<img
                        key={movie.id}
                        className={`row-poster ${isLargeRow && 'row-poster-large'}`}
                        src={base_url + (isLargeRow ? movie?.poster_path : movie?.backdrop_path)}
                        alt={movie.name}
                        onClick={() => handleClick(movie)}
                    />)
                )}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row
