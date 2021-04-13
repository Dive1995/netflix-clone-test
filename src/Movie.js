import React from 'react'
import {useParams,Link} from 'react-router-dom'

function Movie() {
    const {movieid} = useParams()
    console.log(movieid);
    return (
        <div className="movie">
            <h1>movies here!!!!!</h1>
            {movieid}
        </div>
    )
}

export default Movie
