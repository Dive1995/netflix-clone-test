import React from 'react'
import './Banner.css'
import {useState,useEffect} from 'react'
import axios from './axios'
import requests from './Requests'

function Banner() {
    const [movies,setMovies] = useState([])
    // https://image.tmdb.org/t/p/original/     - for image

    useEffect(() => {
        const fetchMovies = async () => {
            const request = await axios.get(requests.fetchTrending)
            // console.log(Math.floor(Math.random()*response.data.results.length - 1));
            // console.log(response.data.results[
            //     Math.floor(Math.random()*response.data.results.length - 1)
            // ]);
            setMovies(
                request.data.results[
                    Math.floor(Math.random()*request.data.results.length - 1)
                ]
            );
            return request
        }

        fetchMovies()
    },[])

    // console.log(movies);

    const image = movies.backdrop_path

    // to add ... to lenghtier text
    const truncateString = (string,n) => {
        return string?.length > n ? string.substr(0,n-1) + '...' : string;
    }

    return (
        <header className="banner" style={{
            // backgroundImage:`url("https://littleletterslinked.com/wp-content/uploads/2019/10/netflix_Banner-01.png")`,
            backgroundImage:`url("https://image.tmdb.org/t/p/original/${image}")`,
            backgroundPosition:"center",
            backgroundSize:"cover"
        }}>
            <div className="banner__contents">
                <h1 className="banner__heading">
                    {movies?.name || movies?.title || movies?.original_name}
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">Watch</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">
                    {truncateString(`${movies?.overview}`,150)}
                </h1>
            </div>

            <div className="banner--fadeBottom"/>
        </header>
    )
}

export default Banner
