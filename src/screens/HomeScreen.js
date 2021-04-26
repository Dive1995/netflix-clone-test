import React from 'react'
import Nav from '../Nav'
import './HomeScreen.css'
import TestHtml from '../TestHtml'
import Banner from '../Banner'
import Row from '../Row'
import requests from '../Requests'
import {data} from '../netflix-list'

function HomeScreen() {

    return (
        <div className="homescreen">
            {/* testing css */}

            {/* <TestHtml/> */}

            {/* navbar */}
            <Nav/>
            
            {/* banners */}
            <Banner/>

            {/* rows */}
            {data.map(item => <Row key={item.id} title={item.title} fetchURL={item.fetchURL} isLargeRow/>)}

            {/* <div className="detail">
                <h1>this is the detail page of the particular movie</h1>
            </div> */}
            
            {/* <Row title="Netflix Originals" fetchURL={requests.fetchNetflixOriginals} isLargeRow/> */}
            {/* <Row title="Trending Now" fetchURL={requests.fetchTrending}/> */}
            {/* <Row title="Top Rated" fetchURL={requests.fetchTopRated}/>
            <Row title="Action Movies" fetchURL={requests.fetchActionMovies}/>
            <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies}/>
            <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies}/>
            <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies}/>
            <Row title="Documentaries Movies" fetchURL={requests.fetchDocumentaries}/> */}
        </div>
    )
}

export default HomeScreen
