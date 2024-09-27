import axios from "axios"

export const fetchTopRated = async () => {

    const movieUrl = 'https://api.themoviedb.org/3/movie/top_rated?api_key=99821f5d8417dc69c3ffd66d204f12cc&language=en-US&page=1'
    const showUrl = 'https://api.themoviedb.org/3/discover/tv?api_key=99821f5d8417dc69c3ffd66d204f12cc&sort_by=vote_count.desc&vote_count.gte=1000&language=en'
    const idArray = new Array()
    const dataArray = await Promise.all([axios.get(movieUrl), axios.get(showUrl)])
    dataArray.forEach( data => {
        data.results.filter( (content, index) => index < 12 )
    })
}