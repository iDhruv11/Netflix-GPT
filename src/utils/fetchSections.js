import axios from "axios"
import { useDispatch } from "react-redux"
import { addContent } from "./sectionSlice"

const dispatcher = useDispatch()

export const extractInfoMovie = (isPosterNeeded, movie) => {

    const ageRatingMap = {
        "G": "U-Rated",
        "PG": "U/A 7+",
        "PG-13": "U/A 13+",
        "R": "U/A 17+",
        "A": "A-Rated",
        "U": "U-Rated",
        "UA": "U/A 12+",
        "S": "S-Rated",
    }

    const title = movie.title 
    const desc = movie.overview
    const genres = movie.genres.slice(0, 3).map( genre => genre.name)
    const runtime = movie.runtime 
    const isMostLiked = movie.popularity > 30.0 ? true : false
    const year = movie['release_date'].slice(0, 4)

    const videos = {
        clip: movie.videos.results.find( ( { site, type } ) => site == 'YouTube' && type == 'Clip')?.key,
        trailer: movie.videos.results.find( ( { site, type } ) => site == 'YouTube' && type == 'Trailer')?.key,
        teaser: movie.videos.results.find( ( { site, type } ) => site == 'YouTube' && type == 'Teaser')?.key,
    }

    const extractImage = (imageArray, defaultImage, type) => {

        const image = imageArray.find( image => (image['iso_639_1'] == 'en' || image['iso_639_1'] == 'hi') && !(image['file_path'].includes('.svg')) )?.['file_path']

        if(!image){
            if(type == 'logo') return null
            return {
                image: defaultImage?.['file_path']
                    ? `https://image.tmdb.org/t/p/${ type == 'logo' ? `w200` : `w500` }${defaultImage['file_path']}`
                    : "https://res.cloudinary.com/dianmmxft/image/upload/v1727777674/netflix-wallpaper-1024x576_eyvlct.jpg",
                isLogoIncluded: false
            } 
        } 
        
        return {
            image: `https://image.tmdb.org/t/p/${ type == 'logo' ? `w200` : `w500`}${image}`,
            isLogoIncluded: true
        }
    }

    const backdrop = extractImage(movie.images.backdrops, movie.images.backdrops[0], 'backdrop')
    const logo = extractImage(movie.images.logos, movie.images.logos[0], 'logo')
    let poster = null
    if(isPosterNeeded){
        poster = extractImage(movie.images.posters, movie.images.posters[0], 'poster')
    }

    const keywords = movie.keywords.keywords.slice(0, 3).map( keyword => keyword.name ) 
    let ageRatingMapKey = movie['release_dates'].results.find( country => country['iso_3166_1'] == 'US')?.['release_dates'][0]?.certification

    if(!ageRatingMapKey){
        ageRatingMapKey = movie['release_dates'].results.find( country => country['iso_3166_1'] == 'IN')?.['release_dates'][0]?.certification
    }
    const ageRating = ageRatingMap[ageRatingMapKey]
    const cast = movie.credits.cast.slice(0, 3).map( person => person.name)
    
    return {
        title,
        desc,
        genres,
        runtime,
        year,
        isMostLiked,
        videos,
        backdrop,
        poster,
        logo,
        keywords,
        cast,
        ageRating
    }
}
export const extractInfoShow = (isPosterNeeded, show, sectionName) => {

    const title = show.name 
    const desc = show.overview
    const genres = show.genres.slice(0, 3).map( genre => genre.name)
    const totalSeasons = show['number_of_seasons']
    const totalEpisodes = show['number_of_episodes']
    const isMostLiked = show.popularity > 50.0 ? true : false
    const year = show['first_air_date'].slice(0, 4)
    let ageRating = null
    const certificates = [ 
        "U/A 13+",
        "A-Rated",
        "U/A 17+"
    ]

    const videos = {
        clip: show.videos.results.find( ( { site, type } ) => site == 'YouTube' && type == 'Clip')?.key,
        trailer: show.videos.results.find( ( { site, type } ) => site == 'YouTube' && type == 'Trailer')?.key,
        teaser: show.videos.results.find( ( { site, type } ) => site == 'YouTube' && type == 'Teaser')?.key,
    }

    const extractImage = (imageArray, defaultImage) => {
        const image = imageArray.find( image => (image['iso_639_1'] == 'en' || image['iso_639_1'] == 'hi') && !(image['file_path'].includes('.svg')) )?.['file_path']
        if(!image){
            return defaultImage?.['file_path'] 
        } 
        return image
    }

    const backdrop = extractImage(show.images.backdrops, show.images.backdrops[0])
    const logo = extractImage(show.images.logos, show.images.logos[0])
    let poster = null
    if(isPosterNeeded){
        poster = extractImage(show.images.posters, show.images.posters[0])
    }

    const keywords = show.keywords.results.slice(0, 3).map( keyword => keyword?.name ) 
    const cast = show.credits.cast.slice(0, 3).map( person => person?.name)
    
    const seasons = show.seasons.filter( season => (season['season_number'] > 0) && (season.name.includes('Season ')) ).map( season => ({
        name: season?.name, 
        desc: season?.overview,
        posterPath: season?.['poster_path'],
        totalEpisode: season?.['episode_count'],
        year: season?.['air_date'].slice(0, 4)
    }))

    if( sectionName == 'family') ageRating = "U-Rated"
    else if( sectionName == 'sitcom') ageRating = "U/A 13+"
    else {
        ageRating = certificates[ Math.floor(Math.random()*3) ]
    }

    return {
        title,
        desc,
        genres,
        totalSeasons,
        totalEpisodes,
        year,
        isMostLiked,
        videos,
        backdrop,
        poster,
        logo,
        keywords,
        cast,
        seasons,
        ageRating
    }       
}
export const fetchMovieSectionWithFourUrl = async (movieUrlOne, movieUrlTwo, showUrlOne, showUrlTwo, limit, key, extractPosters) => {

    try {
    
        const dataArray = await Promise.all([axios.get(movieUrlOne), axios.get(movieUrlTwo), axios.get(showUrlOne), axios.get(showUrlTwo)])

        const combinedIdArray = [
            ...dataArray[0].results.slice(0, Math.floor(limit/2) ).map(movie => movie.id),
            ...dataArray[1].results.slice(0, Math.floor(limit/2) ).map(movie => movie.id),
            ...dataArray[2].results.slice(0, Math.floor(limit/2) ).map(show => show.id),
            ...dataArray[3].results.slice(0, Math.floor(limit/2) ).map(show => show.id)
        ]

        const combinedPromiseArray = combinedIdArray.map((id, index) => {
            const type = index < limit ? `movie` : `tv`
            return axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=99821f5d8417dc69c3ffd66d204f12cc&append_to_response=videos,images,keywords,credits,release_dates`)
        })

        let combinedData = await Promise.all(combinedPromiseArray)

        combinedData = combinedData.map( (content, index) => ( index < limit ) ? extractInfoMovie(extractPosters, content) : extractInfoShow(extractPosters, content, key) )

        dispatcher(addContent({
            key,
            movies: combinedData.slice(0, limit),
            shows: combinedData.slice(limit)
        }))

    } catch (error) {
        console.log(`Error setting ${key} section: `, error)
    }
}
export const fetchMovieSectionWithTwoUrl = async (movieUrlOne, movieUrlTwo, key) => {
    
    try {

        const dataArray = await Promise.all([axios.get(movieUrlOne), axios.get(movieUrlTwo)])

        const combinedIdArray = [
            ...dataArray[0].results.slice(0, 6).map( movie => movie.id ),
            ...dataArray[1].results.slice(0, 6).map( movie => movie.id ),
        ]

        const combinedPromiseArray = combinedIdArray.map( id => axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=99821f5d8417dc69c3ffd66d204f12cc&append_to_response=videos,images,keywords,credits,release_dates`) )

        let combinedData = await Promise.all(combinedPromiseArray)
        combinedData = combinedData.map( content => extractInfoMovie(true, content) )

        dispatcher(addContent({
            key,
            movies: combinedData,
            shows: []
        }))

    }catch(error){
        console.log(`Error setting ${key} section: `, error )
    }    
}
export const fetchShowSectionWithTwoUrl = async (showUrlOne, showUrlTwo, key) => {

    try {

        const dataArray = await Promise.all([ axios.get(showUrlOne), axios.get(showUrlTwo) ])

        const combinedIdArray = [
            ...dataArray[0].results.slice(0, 6).map( show => show.id ),
            ...dataArray[1].results.slice(0, 6).map( show => show.id )
        ]
        const combinedPromiseArray = combinedIdArray.map( id => axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=99821f5d8417dc69c3ffd66d204f12cc&append_to_response=videos,images,keywords,credits`))

        let combinedData = await Promise.all(combinedPromiseArray)
        combinedData = combinedData.map( content => extractInfoShow(false, content, key) )

        dispatcher(addContent({
            key,
            movies: [],
            shows: combinedData
        }))

    }catch(error){

        console.log(`Error setting ${key} section: `, error )

    }
}
export const fetchShowSectionWithOneUrl = async (showUrl, key) => {
    try {

        const dataArray = await Promise.all([ axios.get(showUrl) ])

        const combinedIdArray = dataArray[0].results.slice(0, 12).map( show => show.id )

        const combinedPromiseArray = combinedIdArray.map( id => axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=99821f5d8417dc69c3ffd66d204f12cc&append_to_response=videos,images,keywords,credits`))

        let combinedData = await Promise.all(combinedPromiseArray)
        combinedData = combinedData.map( content => extractInfoShow(false, content, key) )

        dispatcher(addContent({
            key,
            movies: [],
            shows: combinedData
        }))

    }catch(error){

        console.log(`Error setting ${key} section: `, error )

    }
}
export const fetchTopRated = async () => {

    const movieUrl = 'https://api.themoviedb.org/3/movie/top_rated?api_key=99821f5d8417dc69c3ffd66d204f12cc&language=en-US&page=1'
    const showUrl = 'https://api.themoviedb.org/3/discover/tv?api_key=99821f5d8417dc69c3ffd66d204f12cc&sort_by=vote_count.desc&vote_count.gte=1000&language=en'

    try {

        const dataArray = await Promise.all([axios.get(movieUrl), axios.get(showUrl)])

        const combinedIdArray = [
            ...dataArray[0].results.slice(0, 12).map(movie => movie.id),
            ...dataArray[1].results.slice(0, 12).map(show => show.id)
        ]

        const combinedPromiseArray = combinedIdArray.map((id, index) => {
            const type = index < 12 ? `movie` : `tv`
            return axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=99821f5d8417dc69c3ffd66d204f12cc&append_to_response=videos,images,keywords,release_dates,credits`)
        })

        let combinedData = await Promise.all(combinedPromiseArray)

        combinedData = combinedData.map( (content, index) => ( index < 12 ) ? extractInfoMovie(false, content) : extractInfoShow(false, content, 'topRated') )

        dispatcher(addContent({
            key: 'topRated',
            movies: combinedData.slice(0, 12),
            shows: combinedData.slice(12)
        }))

    } catch (error) {

        console.log('Top Rated Section could not be fetched :', error)

    }
}

export const fetchCritic = async () => {

    try{
        const combinedIdArray = [62, 1578, 15774, 426, 11423, 77, 28, 857, 21625, 6977, 1398, 76331, 67744, 60622, 1438, 60059, 1104, 4613, 100911, 103051]
    
        const combinedPromiseArray = combinedIdArray.map( (id, index) => {

            const type = index < 10 ? `movie` : `type`
            return axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=99821f5d8417dc69c3ffd66d204f12cc&append_to_response=videos,images,keywords,release_dates,credits`)

        })
    
        let combinedData = await Promise.all(combinedPromiseArray)
    
        combinedData = combinedData.map( (content, index) => index < 10 ? extractInfoMovie(false, content) : extractInfoShow(false, content, 'critic') )
        
        dispatcher(addContent({
            key: 'critic',
            movies: combinedData.slice(0, 10),
            shows: combinedData.slice(10)
        }))
    }catch(error){

        console.log('Error updating Critic section: ', error )

    }
}

export const fetchNetflix = async () => {                                           
    try{

        const showUrlOne = 'https://api.themoviedb.org/3/discover/tv?&api_key=99821f5d8417dc69c3ffd66d204f12cc&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=vote_count.desc&with_networks=213&with_origin_country=IN&with_original_language=hi'
        const showUrlTwo = 'https://api.themoviedb.org/3/discover/tv?&api_key=99821f5d8417dc69c3ffd66d204f12cc&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_networks=213&with_original_language=en'


        const movieIdArray = [405774, 545609, 398978, 547016, 454983, 497582, 658412, 714338, 706783, 675592, 786190, 695969 ]

        const dataArray = await Promise.all( [ axios.get(showUrlOne), axios.get(showUrlTwo) ] ) 

        const combinedIdArray = [
            ...movieIdArray,
            ...dataArray[0].results.slice(0, 6).map( show => show.id),
            ...dataArray[1].results.slice(0, 6).map( show => show.id),
        ]

        const combinedPromiseArray = combinedIdArray.map( (id, index) => {
            const type = index < 12 ? `movie` : `tv`
            return axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=99821f5d8417dc69c3ffd66d204f12cc&append_to_response=videos,images,keywords,credits`)
        } )
        
        let combinedData = await Promise.all(combinedPromiseArray)

        combinedData = combinedData.map( (content, index) => index < 12 ? extractInfoMovie(false, content) : extractInfoShow(false, content, 'netflix') )

        dispatcher(addContent({
            key: 'netflix',
            movies: combinedData.slice(0, 12),
            shows: combinedData.slice(12)
        }))

    }catch(error){

        console.log('error updating netflix section: ', error )

    }
}


export const fetchBestOfYear = async () =>  {
    try {

        const movieUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=99821f5d8417dc69c3ffd66d204f12cc&include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=2023&primary_release_date.gte=2023-01-01&primary_release_date.lte=2023-12-01&region=IN&sort_by=vote_count.desc&with_origin_country=IN&with_original_language=hi&without_genres=16&year=2023'
        const showUrl = 'https://api.themoviedb.org/3/discover/tv?api_key=99821f5d8417dc69c3ffd66d204f12cc&air_date.gte=2023-01-01&air_date.lte=2023-12-01&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=vote_count.desc&with_networks=213%7C1024%7C3373&with_origin_country=IN&with_original_language=hi'

        const dataArray = await Promise.all([axios.get(movieUrl), axios.get(showUrl)])

        const combinedIdArray = [
            ...dataArray[0].results.slice(0, 6).map( movie => movie.id ),
            ...dataArray[1].results.slice(0, 6).map( show => show.id ),
        ]

        const combinedPromiseArray = combinedIdArray.map( (id, index)=> {
            const type = index < 6 ? `movie` : `tv`
            return axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=99821f5d8417dc69c3ffd66d204f12cc&append_to_response=videos,images,keywords,credits`)
        } )

        let combinedData = await Promise.all(combinedPromiseArray)
        combinedData = combinedData.map( (content, index) => index < 6 ? extractInfoMovie(false, content) : extractInfoShow(false, content, 'bestOfYear') )

        dispatcher(addContent({
            key: 'bestOfYear',
            movies: combinedData.slice(0, 6),
            shows: combinedData.slice(6)
        }))

    }catch(error){

        console.log('Error setting best of year section: ', error )

    }
}

export const fetchFamily = async () =>  {
    try {

        const movieUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=99821f5d8417dc69c3ffd66d204f12cc&include_adult=false&include_video=false&language=en-US&page=1&region=IN&sort_by=vote_count.desc&with_genres=10751&with_keywords=18035%7C199630&with_origin_country=IN&with_original_language=hi&without_genres=16%7C12&without_keywords=210714%7C'
        const showUrl = 'https://api.themoviedb.org/3/discover/tv?api_key=99821f5d8417dc69c3ffd66d204f12cc&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=vote_count.desc&with_genres=10751&with_original_language=en&without_genres=10762%7C16&without_keywords=5970'

        const dataArray = await Promise.all([axios.get(movieUrl), axios.get(showUrl)])

        const combinedIdArray = [
            ...dataArray[0].results.slice(0, 4).map( movie => movie.id ),
            ...dataArray[1].results.slice(0, 12).map( show => show.id ),
        ]

        const combinedPromiseArray = combinedIdArray.map( (id, index) => {
            const type = index < 4 ? `movie` : `tv`
            return axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=99821f5d8417dc69c3ffd66d204f12cc&append_to_response=videos,images,keywords,credits`)
        })

        let combinedData = await Promise.all(combinedPromiseArray)
        combinedData = combinedData.map( (content, index) => index < 4 ? extractInfoMovie(false, content) : extractInfoShow(false, content, 'family') )

        dispatcher(addContent({
            key: 'family',
            movies: combinedData.slice(0, 4),
            shows: combinedData.slice(4)
        }))

    }catch(error){

        console.log('Error setting family section: ', error )

    }
}

export const fetchMcu = async () =>  {
    try {

        const movieUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=99821f5d8417dc69c3ffd66d204f12cc&include_adult=false&include_video=false&language=en-US&page=1&sort_by=revenue.desc&with_keywords=180547&without_keywords=310%2C14900'

        const dataArray = await Promise.all([ axios.get(movieUrl) ])

        const combinedIdArray = dataArray[0].results.slice(0, 12).map( movie => movie.id )

        const combinedPromiseArray = combinedIdArray.map( id => axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=99821f5d8417dc69c3ffd66d204f12cc&append_to_response=videos,images,keywords,credits`) )

        let combinedData = await Promise.all(combinedPromiseArray)
        combinedData = combinedData.map( content => extractInfoMovie(false, content) )

        dispatcher(addContent({
            key: 'mcu',
            movies: combinedData,
            shows: []
        }))

    }catch(error){

        console.log('Error setting MCU section: ', error )

    }
}
export const fetchAward = async () =>  {
    try {

        const movieUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=99821f5d8417dc69c3ffd66d204f12cc&include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_count.desc&vote_count.gte=500&with_keywords=191741%7C164186%7C320648%7C329315&with_original_language=en&without_genres=16&without_keywords=180547%7C9715%7C329315'
        const movieIdArray = [ 7508, 19666, 5801, 415358, 290815, 491625 ]

        const dataArray = await Promise.all([ axios.get(movieUrl) ])

        const combinedIdArray = [
            ...dataArray[0].results.slice(0, 12).map( movie => movie.id ),
            ...movieIdArray
        ]

        const combinedPromiseArray = combinedIdArray.map( id => axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=99821f5d8417dc69c3ffd66d204f12cc&append_to_response=videos,images,keywords,credits`) )

        let combinedData = await Promise.all(combinedPromiseArray)
        combinedData = combinedData.map( content => extractInfoMovie(false, content) )

        dispatcher(addContent({
            key: 'award',
            movies: combinedData,
            shows: []
        }))

    }catch(error){

        console.log('Error setting award section: ', error )

    }
}
export const fetchCult = async () =>  {
    try {

        const combinedIdArray = [ 185, 550, 680, 141, 111, 115, 12259, 7913, 21502, 15977, 79464, 15917 ]

        const combinedPromiseArray = combinedIdArray.map( id => axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=99821f5d8417dc69c3ffd66d204f12cc&append_to_response=videos,images,keywords,credits`) )

        let combinedData = await Promise.all(combinedPromiseArray)
        combinedData = combinedData.map( content => extractInfoMovie(false, content) )

        dispatcher(addContent({
            key: 'cult',
            movies: combinedData,
            shows: []
        }))

    }catch(error){

        console.log('Error setting Cult section: ', error )

    }
}
export const fetchViolent = async () =>  {
    try {
        const movieUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=99821f5d8417dc69c3ffd66d204f12cc&include_adult=false&include_video=false&language=en-US&page=1&sort_by=revenue.desc&with_genres=28%7C27%7C53&with_keywords=10292%7C312898%7C14707%7C12339%7C%7C261071%7C14546%7C10714&with_original_language=en&without_genres=12&without_keywords=9715%7C293198%7C5147'

        const dataArray = await Promise.all([ axios.get(movieUrl) ])

        const combinedIdArray = dataArray[0].results.slice(0, 12).map( movie => movie.id )
        const combinedPromiseArray = combinedIdArray.map( id => axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=99821f5d8417dc69c3ffd66d204f12cc&append_to_response=videos,images,keywords,credits`))

        let combinedData = await Promise.all(combinedPromiseArray)
        combinedData = combinedData.map( content => extractInfoMovie(false, content) )

        dispatcher(addContent({
            key: 'violent',
            movies: combinedData,
            shows: []
        }))

    }catch(error){

        console.log('Error setting violent section: ', error )

    }
}
export const fetchDirectorSection = async (movieIdArray, director) => {

    const promiseArray = movieIdArray.map( id => axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=99821f5d8417dc69c3ffd66d204f12cc&append_to_response=videos,images,keywords,credits,release_dates`))

    const movieArray = await Promise.all(promiseArray)

    const finalArray = movieArray.map( movie => extractInfoMovie(false, movie))

    dispatcher(addContent({
        key: director,
        movies: finalArray,
        shows: []
    }))
}


