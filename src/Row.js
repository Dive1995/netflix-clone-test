import React from 'react'
import axios from './axios'
import {useState,useEffect} from 'react'
// import {Link} from "react-router-dom"
import "./Row.css"

function Row({title,fetchURL,isLargeRow = false}) {

    const [movielist,setMovielist] = useState([])

    useEffect(() => {
        const fetchItem = async () => {
            const request = await axios.get(fetchURL)
            setMovielist(request.data.results);
            // setMovielist(response)
            return request
        }

        fetchItem()
       

    },[fetchURL])

    const IMAGE_URL = "https://image.tmdb.org/t/p/original/";

    

    return (
        <div className="row">
            <h1 className="row__title">{title}</h1>
            <div className="row__posters">
                {movielist.map(item => (
                    ((isLargeRow && item.poster_path) || 
                    (!isLargeRow && item.backdrop_path)) && (
                        <img 
                            key={item.id}
                            src={`${IMAGE_URL}${isLargeRow ? item.poster_path : item.backdrop_path}`} 
                            alt={item.name}
                            className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
                        />
                    )
                ))}
            </div>
            
        </div>
    )
}

export default Row