import requests from './Requests'

export const data = [
    {
        title:"Netflix Originals",
        fetchURL:requests.fetchNetflixOriginals
    },
    
    {
        title:"Trending Now",
        fetchURL:requests.fetchTrending
    },
    {
        title:"Top Rated",
        fetchURL:requests.fetchTopRated
    },
    {
        title:"Action Movies",
        fetchURL:requests.fetchActionMovies
    },
    {
        title:"Comedy Movies",
        fetchURL:requests.fetchComedyMovies
    },
    {
        title:"Horror Movies",
        fetchURL:requests.fetchHorrorMovies
    },
    {
        title:"Romance Movies",
        fetchURL:requests.fetchRomanceMovies
    },
    {
        title:"Documentaries Movies",
        fetchURL:requests.fetchDocumentaries
    }

]
