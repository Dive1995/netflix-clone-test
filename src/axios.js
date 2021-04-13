import axios from 'axios'

// this is for not writing the https://api.themoviedb.org/3 for every url
// you just can add the id or something at the end and get things done
const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3"
})

export default instance;