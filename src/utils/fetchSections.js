import axios from "axios"
import { useDispatch } from "react-redux"
import { addContent } from "./sectionSlice"

const dispatcher = useDispatch()
const limiter = new Bottleneck({
    maxConcurrent: 49,
    minTime: 20,
})

const extractInfoMovie = (isPosterNeeded, movie, sectionName) => {

    const ageRatingMap = {
        "G": "U-Rated",
        "PG": "U/A 7+",
        "PG-10": "U/A 10+",
        "PG-13": "U/A 13+",
        "R": "A-Rated",
        "A": "A-Rated",
        "U": "U-Rated",
        "UA": "U/A 12+",
        "S": "S-Rated",
    }

    const title = movie.title
    let desc = movie.overview || "Not Available"
    if (desc.length > 200) desc = desc.slice(0, 200) + "..."
    const genres = movie.genres.length ? movie.genres.slice(0, 3).map(genre => genre.name) : ["Not Available"]
    const runtime = movie.runtime || [90, 105, 120, 135, 150, 165, 180][Math.floor(Math.random() * 7)]
    const isMostLiked = movie.popularity > 30.0 ? true : false
    const year = movie['release_date'].slice(0, 4)
    const month = movie['release_date'].slice(5, 7)

    const videos = {
        clip: movie.videos.results.find(({ site, type }) => site == 'YouTube' && type == 'Clip')?.key,
        trailer: movie.videos.results.find(({ site, type }) => site == 'YouTube' && type == 'Trailer')?.key,
        teaser: movie.videos.results.find(({ site, type }) => site == 'YouTube' && type == 'Teaser')?.key,
    }

    const extractImage = (imageArray, type) => {

        const image = imageArray.find(image => (image['iso_639_1'] == 'en' || image['iso_639_1'] == 'hi') && !(image['file_path'].includes('.svg')))
            || imageArray.find(image => (image['iso_639_1'] == null) && !(image['file_path'].includes('.svg')))



        if (!image) {
            if (type == 'logo') return null
            return {
                image: (type == 'backdrop')
                    ? "https://res.cloudinary.com/dianmmxft/image/upload/v1728211234/9d4191f121d4b931ae826bed54f39fbb_ni4gtl.jpg"
                    : "https://res.cloudinary.com/dianmmxft/image/upload/v1728210943/netflix-wallpaper-1600x900_rivdtg.jpg",
                isLogoIncluded: false
            }
        }
        return {
            image: `https://image.tmdb.org/t/p/${
                (() => {
                    if(type == 'poster') return `w400`
                    if(type == 'backdrop') return `w500`
                    if(type == 'logo') return `w342`
                })()
            }${image['file_path']}`,
            isLogoIncluded: image['iso_639_1'] ? true : false
        }
    }

    const backdropNoLang = (["netflix", "trendingIndia", "directors", "newRelease"].includes(sectionName)) ? `https://image.tmdb.org/t/p/original${movie["backdrop_path"]}` : ""


    const backdrop = extractImage(movie.images.backdrops, 'backdrop')
    const logo = extractImage(movie.images.logos, 'logo')
    let poster = null
    if (isPosterNeeded) {
        poster = extractImage(movie.images.posters, 'poster')
    }

    const keywords = movie.keywords.keywords.length
        ? movie.keywords.keywords.filter(keyword => keyword.name.length < 18).slice(0, 3).map(keyword => keyword.name)
        : ["Not Available"]

    let ageRatingMapKey = movie['release_dates'].results.find(country => country['iso_3166_1'] == 'US')?.['release_dates'].find(rating => rating.certification)?.certification

    if (!ageRatingMapKey || ageRatingMapKey == "NR") {
        ageRatingMapKey = movie['release_dates'].results.find(country => country['iso_3166_1'] == 'IN')?.['release_dates'][0]?.certification || ["G", "PG", "PG-10"][Math.floor(Math.random() * 3)]
    }
    const ageRating = Object.keys(ageRatingMap).includes(ageRatingMapKey) ? ageRatingMap[ageRatingMapKey] : ageRatingMapKey
    const cast = movie.credits.cast.slice(0, 3).map(person => person.name)

    return {
        type: "movie",
        title,
        desc,
        genres,
        runtime,
        year,
        month,
        isMostLiked,
        videos,
        backdrop,
        backdropNoLang,
        poster,
        logo,
        keywords,
        cast,
        ageRating
    }
}
const extractInfoShow = (isPosterNeeded, show, sectionName) => {

    const title = show.name
    let desc = show.overview || "Not Available"
    if (desc.length > 200) desc = desc.slice(0, 200) + "..."
    const genres = show.genres.length ? show.genres.slice(0, 3).map(genre => genre.name) : ["Not Available"]
    const totalSeasons = show['number_of_seasons']
    const totalEpisodes = show['number_of_episodes']
    const isMostLiked = show.popularity > 50.0 ? true : false
    const year = show['first_air_date'].slice(0, 4)
    const month = show['first_air_date'].slice(5, 7)
    let ageRating = null
    const certificates = [
        "U/A 13+",
        "U/A 17+"
    ]

    const backdropNoLang = (["netflix", "trendingIndia", "directors", "newRelease"].includes(sectionName)) ? `https://image.tmdb.org/t/p/original${show["backdrop_path"]}` : ""

    const videos = {
        clip: show.videos.results.find(({ site, type }) => site == 'YouTube' && type == 'Clip')?.key,
        trailer: show.videos.results.find(({ site, type }) => site == 'YouTube' && type == 'Trailer')?.key,
        teaser: show.videos.results.find(({ site, type }) => site == 'YouTube' && type == 'Teaser')?.key,
    }

    const extractImage = (imageArray, type) => {

        const image = imageArray.find(image => (image['iso_639_1'] == 'en' || image['iso_639_1'] == 'hi') && !(image['file_path'].includes('.svg'))) || imageArray.find(image => (image['iso_639_1'] == null) && !(image['file_path'].includes('.svg')))



        if (!image) {
            if (type == 'logo') return null
            return {
                image: (type == 'backdrop')
                    ? "https://res.cloudinary.com/dianmmxft/image/upload/v1728211234/9d4191f121d4b931ae826bed54f39fbb_ni4gtl.jpg"
                    : "https://res.cloudinary.com/dianmmxft/image/upload/v1728210943/netflix-wallpaper-1600x900_rivdtg.jpg",
                isLogoIncluded: false
            }
        }
        return {
            image: `https://image.tmdb.org/t/p/${
                (() => {
                    if(type == 'poster') return `w400`
                    if(type == 'backdrop') return `w500`
                    if(type == 'logo') return `w342`
                })()
            }${image['file_path']}`,
            isLogoIncluded: image['iso_639_1'] ? true : false
        }
    }

    const backdrop = extractImage(show.images.backdrops, 'backdrop')
    const logo = extractImage(show.images.logos, 'logo')
    let poster = null
    if (isPosterNeeded) {
        poster = extractImage(show.images.posters, 'poster')
    }

    const keywords = show.keywords.results.length
        ? show.keywords.results.filter(keyword => keyword.name.length < 18).slice(0, 3).map(keyword => keyword.name)
        : ["Not Available"]

    const cast = show.credits.cast.length
        ? show.credits.cast.slice(0, 3).map(person => person?.name)
        : ["Not Available"]

    const seasons = show.seasons.filter(season => (season['season_number'] > 0)).map((season, index) => {

        let overview = season?.overview || desc
        if (overview.length > 200) overview = overview.slice(0, 200) + "..."

        return {
            name: season?.name,
            desc: overview,
            posterPath: (season?.['poster_path']
                ? `https://image.tmdb.org/t/p/w400${season?.['poster_path']}`
                : `https://image.tmdb.org/t/p/w400${show.images.posters[0]?.['file_path']}`),
            totalEpisode: season?.['episode_count'] || "Not Disclosed Yet",
            year: season?.['air_date']?.slice(0, 4) || "202- (Unannounced)"
        }

    })

    if (sectionName == 'family') ageRating = "U-Rated"
    else if (sectionName == 'sitcom') ageRating = "U/A 13+"
    else ageRating = certificates[Math.floor(Math.random() * 2)]

    return {
        type: "show",
        title,
        desc,
        genres,
        totalSeasons,
        totalEpisodes,
        year,
        month,
        isMostLiked,
        videos,
        backdrop,
        backdropNoLang,
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

        const dataArray = await Promise.all(
            [
                limiter.schedule(() => axios.get(movieUrlOne)),
                limiter.schedule(() => axios.get(movieUrlTwo)),
                limiter.schedule(() => axios.get(showUrlOne)),
                limiter.schedule(() => axios.get(showUrlTwo)),
            ]
        )

        const combinedIdArray = [
            ...dataArray[0].data.results.slice(0, Math.floor(limit / 2)).map(movie => movie.id),
            ...dataArray[1].data.results.slice(0, Math.floor(limit / 2)).map(movie => movie.id),
            ...dataArray[2].data.results.slice(0, Math.floor(limit / 2)).map(show => show.id),
            ...dataArray[3].data.results.slice(0, Math.floor(limit / 2)).map(show => show.id)
        ]

        const combinedPromiseArray = combinedIdArray.map((id, index) => {
            const type = index < limit ? `movie` : `tv`
            return limiter.schedule(() => axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=99821f5d8417dc69c3ffd66d204f12cc&append_to_response=videos,images,keywords,credits,release_dates`))
        })

        let combinedData = await Promise.all(combinedPromiseArray)

        combinedData = combinedData.map(({ data }, index) => (index < limit) ? extractInfoMovie(extractPosters, data, key) : extractInfoShow(extractPosters, data, key))

        await Promise.all(combinedData.map(content => fetch(content.backdrop.image)))

        dispatcher(addContent({
            key,
            movies: combinedData.slice(0, 12),
            shows: combinedData.slice(12)
        }))

    } catch (error) {
        console.log(`Error setting ${key} section: `, error)
    }
}
export const fetchMovieSectionWithTwoUrl = async (movieUrlOne, movieUrlTwo, key) => {

    try {

        const dataArray = await Promise.all(
            [
                limiter.schedule(() => axios.get(movieUrlOne)),
                limiter.schedule(() => axios.get(movieUrlTwo))
            ]
        )

        const combinedIdArray = [
            ...dataArray[0].data.results.slice(0, 6).map(movie => movie.id),
            ...dataArray[1].data.results.slice(0, 6).map(movie => movie.id),
        ]

        const combinedPromiseArray = combinedIdArray.map(id => limiter.schedule(() => axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=99821f5d8417dc69c3ffd66d204f12cc&append_to_response=videos,images,keywords,credits,release_dates`)))

        let combinedData = await Promise.all(combinedPromiseArray)
        combinedData = combinedData.map(({ data }) => extractInfoMovie(false, data, key))

        await Promise.all(combinedData.map(content => fetch(content.backdrop.image)))

        dispatcher(addContent({
            key,
            movies: combinedData,
            shows: []
        }))

    } catch (error) {
        console.log(`Error setting ${key} section: `, error)
    }
}
export const fetchShowSectionWithTwoUrl = async (showUrlOne, showUrlTwo, key) => {

    try {

        const dataArray = await Promise.all(
            [
                limiter.schedule(() => axios.get(showUrlOne)),
                limiter.schedule(() => axios.get(showUrlTwo))
            ]
        )

        const combinedIdArray = [
            ...dataArray[0].data.results.slice(0, 6).map(show => show.id),
            ...dataArray[1].data.results.slice(0, 6).map(show => show.id)
        ]
        const combinedPromiseArray = combinedIdArray.map(id => limiter.schedule(() => axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=99821f5d8417dc69c3ffd66d204f12cc&append_to_response=videos,images,keywords,credits,release_dates`)))

        let combinedData = await Promise.all(combinedPromiseArray)
        combinedData = combinedData.map(({ data }) => extractInfoShow(false, data, key))

        await Promise.all(combinedData.map(content => fetch(content.backdrop.image)))

        dispatcher(addContent({
            key,
            movies: [],
            shows: combinedData
        }))
    } catch (error) {

        console.log(`Error setting ${key} section: `, error)

    }
}
export const fetchShowSectionWithOneUrl = async (showUrl, key) => {
    try {

        const dataArray = await Promise.all(
            [
                limiter.schedule(() => axios.get(showUrl))
            ]
        )

        const combinedIdArray = dataArray[0].data.results.slice(0, 12).map(show => show.id)

        const combinedPromiseArray = combinedIdArray.map(id => limiter.schedule(() => axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=99821f5d8417dc69c3ffd66d204f12cc&append_to_response=videos,images,keywords,credits,release_dates`)))

        let combinedData = await Promise.all(combinedPromiseArray)
        combinedData = combinedData.map(({ data }) => extractInfoShow(false, data, key))

        await Promise.all(combinedData.map(content => fetch(content.backdrop.image)))

        dispatcher(addContent({
            key,
            movies: [],
            shows: combinedData
        }))
    } catch (error) {

        console.log(`Error setting ${key} section: `, error)

    }
}
export const fetchTopRated = async () => {

    const movieUrl = 'https://api.themoviedb.org/3/movie/top_rated?api_key=99821f5d8417dc69c3ffd66d204f12cc&language=en-US&page=1'
    const showUrl = 'https://api.themoviedb.org/3/discover/tv?api_key=99821f5d8417dc69c3ffd66d204f12cc&sort_by=vote_count.desc&vote_count.gte=1000&language=en'

    try {

        const dataArray = await Promise.all(
            [
                limiter.schedule(() => axios.get(movieUrl)),
                limiter.schedule(() => axios.get(showUrl))
            ]
        )

        const combinedIdArray = [
            ...dataArray[0].data.results.slice(0, 12).map(movie => movie.id),
            ...dataArray[1].data.results.slice(0, 12).map(show => show.id)
        ]

        const combinedPromiseArray = combinedIdArray.map((id, index) => {
            const type = index < 12 ? `movie` : `tv`
            return limiter.schedule(() => axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=99821f5d8417dc69c3ffd66d204f12cc&append_to_response=videos,images,keywords,release_dates,credits`))
        })

        let combinedData = await Promise.all(combinedPromiseArray)

        combinedData = combinedData.map(({ data }, index) => (index < 12) ? extractInfoMovie(false, data, 'topRated') : extractInfoShow(false, data, 'topRated'))

        await Promise.all(combinedData.map(content => fetch(content.backdrop.image)))

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

    try {
        const combinedIdArray = [62, 1578, 15774, 426, 11423, 77, 28, 857, 21625, 6977, 1398, 76331, 67744, 60622, 1438, 60059, 1104, 4613, 100911, 103051]

        const combinedPromiseArray = combinedIdArray.map((id, index) => {

            const type = index < 10 ? `movie` : `tv`
            return limiter.schedule(() => axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=99821f5d8417dc69c3ffd66d204f12cc&append_to_response=videos,images,keywords,release_dates,credits`))

        })

        let combinedData = await Promise.all(combinedPromiseArray)

        combinedData = combinedData.map(({ data }, index) => index < 10 ? extractInfoMovie(false, data, 'critic') : extractInfoShow(false, data, 'critic'))

        await Promise.all(combinedData.map(content => fetch(content.backdrop.image)))

        dispatcher(addContent({
            key: 'critic',
            movies: combinedData.slice(0, 10),
            shows: combinedData.slice(10)
        }))
    } catch (error) {

        console.log('Error updating Critic section: ', error)

    }
}

export const fetchNetflix = async () => {
    try {

        const showUrlOne = 'https://api.themoviedb.org/3/discover/tv?&api_key=99821f5d8417dc69c3ffd66d204f12cc&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=vote_count.desc&with_networks=213&with_origin_country=IN&with_original_language=hi&without_genres=99'
        const showUrlTwo = 'https://api.themoviedb.org/3/discover/tv?&api_key=99821f5d8417dc69c3ffd66d204f12cc&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_networks=213&with_original_language=en'


        const movieIdArray = [405774, 545609, 398978, 547016, 454983, 497582, 658412, 714338, 706783, 675592, 786190, 695969]

        const dataArray = await Promise.all(
            [
                limiter.schedule(() => axios.get(showUrlOne)),
                limiter.schedule(() => axios.get(showUrlTwo))
            ]
        )

        const combinedIdArray = [
            ...movieIdArray,
            ...dataArray[0].data.results.slice(0, 6).map(show => show.id),
            ...dataArray[1].data.results.slice(0, 6).map(show => show.id),
        ]

        const combinedPromiseArray = combinedIdArray.map((id, index) => {
            const type = index < 12 ? `movie` : `tv`
            return limiter.schedule(() => axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=99821f5d8417dc69c3ffd66d204f12cc&append_to_response=videos,images,keywords,credits,release_dates`))
        })

        let combinedData = await Promise.all(combinedPromiseArray)

        combinedData = combinedData.map(({ data }, index) => index < 12 ? extractInfoMovie(false, data, 'netflix') : extractInfoShow(false, data, 'netflix'))

        await Promise.all(combinedData.map(content => fetch(content.backdrop.image)))

        dispatcher(addContent({
            key: 'netflix',
            movies: combinedData.slice(0, 12),
            shows: combinedData.slice(12)
        }))

    } catch (error) {

        console.log('error updating netflix section: ', error)

    }
}

export const fetchBestOfYear = async () => {
    try {

        const movieUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=99821f5d8417dc69c3ffd66d204f12cc&include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=2023&primary_release_date.gte=2023-01-01&primary_release_date.lte=2023-12-01&region=IN&sort_by=vote_count.desc&with_origin_country=IN&with_original_language=hi&without_genres=16&year=2023'
        const showUrl = 'https://api.themoviedb.org/3/discover/tv?api_key=99821f5d8417dc69c3ffd66d204f12cc&air_date.gte=2023-01-01&air_date.lte=2023-12-01&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=vote_count.desc&with_networks=213%7C1024%7C3373&with_origin_country=IN&with_original_language=hi'

        const dataArray = await Promise.all(
            [
                limiter.schedule(() => axios.get(movieUrl)),
                limiter.schedule(() => axios.get(showUrl))
            ]
        )

        const combinedIdArray = [
            ...dataArray[0].data.results.slice(0, 6).map(movie => movie.id),
            ...dataArray[1].data.results.slice(0, 6).map(show => show.id),
        ]

        const combinedPromiseArray = combinedIdArray.map((id, index) => {
            const type = index < 6 ? `movie` : `tv`
            return limiter.schedule(() => axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=99821f5d8417dc69c3ffd66d204f12cc&append_to_response=videos,images,keywords,credits,release_dates`))
        })

        let combinedData = await Promise.all(combinedPromiseArray)
        combinedData = combinedData.map(({ data }, index) => index < 6 ? extractInfoMovie(false, data, 'bestOfYear') : extractInfoShow(false, data, 'bestOfYear'))

        await Promise.all(combinedData.map(content => fetch(content.backdrop.image)))

        dispatcher(addContent({
            key: 'bestOfYear',
            movies: combinedData.slice(0, 6),
            shows: combinedData.slice(6)
        }))

    } catch (error) {

        console.log('Error setting best of year section: ', error)

    }
}

export const fetchFamily = async () => {
    try {

        const movieUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=99821f5d8417dc69c3ffd66d204f12cc&certification=UA&include_adult=false&include_video=false&language=en-US&page=1&region=IN&sort_by=vote_count.desc&with_genres=10751&with_origin_country=IN&with_original_language=hi&without_keywords=215404%2C9799%2C11477'

        const showUrl = 'https://api.themoviedb.org/3/discover/tv?api_key=99821f5d8417dc69c3ffd66d204f12cc&first_air_date.gte=2000-01-01&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=vote_count.desc&with_genres=10751&with_original_language=en&without_genres=16%2C10762&without_keywords=11800%2C5923%2C158718%2C5938%2C158266'

        const dataArray = await Promise.all(
            [
                limiter.schedule(() => axios.get(movieUrl)),
                limiter.schedule(() => axios.get(showUrl))
            ]
        )

        const combinedIdArray = [
            ...dataArray[0].data.results.slice(0, 6).map(movie => movie.id),
            ...dataArray[1].data.results.slice(0, 12).map(show => show.id),
        ]

        const combinedPromiseArray = combinedIdArray.map((id, index) => {
            const type = index < 6 ? `movie` : `tv`
            return limiter.schedule(() => axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=99821f5d8417dc69c3ffd66d204f12cc&append_to_response=videos,images,keywords,credits,release_dates`))
        })

        let combinedData = await Promise.all(combinedPromiseArray)
        combinedData = combinedData.map(({ data }, index) => index < 6 ? extractInfoMovie(false, data, 'family') : extractInfoShow(false, data, 'family'))

        await Promise.all(combinedData.map(content => fetch(content.backdrop.image)))

        dispatcher(addContent({
            key: 'family',
            movies: combinedData.slice(0, 4),
            shows: combinedData.slice(4)
        }))

    } catch (error) {

        console.log('Error setting family section: ', error)

    }
}

export const fetchMcu = async () => {
    try {

        const movieUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=99821f5d8417dc69c3ffd66d204f12cc&include_adult=false&include_video=false&language=en-US&page=1&sort_by=revenue.desc&with_keywords=180547&without_keywords=310%2C14900'

        const dataArray = await Promise.all(
            [
                limiter.schedule(() => axios.get(movieUrl))
            ]
        )

        const combinedIdArray = dataArray[0].data.results.slice(0, 12).map(movie => movie.id)

        const combinedPromiseArray = combinedIdArray.map(id => limiter.schedule(() => axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=99821f5d8417dc69c3ffd66d204f12cc&append_to_response=videos,images,keywords,credits,release_dates`)))

        let combinedData = await Promise.all(combinedPromiseArray)
        combinedData = combinedData.map(({ data }) => extractInfoMovie(false, data, 'mcu'))

        await Promise.all(combinedData.map(content => fetch(content.backdrop.image)))

        dispatcher(addContent({
            key: 'mcu',
            movies: combinedData,
            shows: []
        }))
    } catch (error) {

        console.log('Error setting MCU section: ', error)

    }
}
export const fetchAward = async () => {
    try {

        const movieUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=99821f5d8417dc69c3ffd66d204f12cc&include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_count.desc&vote_count.gte=500&with_keywords=191741%7C164186%7C320648%7C329315&with_original_language=en&without_genres=16&without_keywords=180547%7C9715%7C329315'
        const movieIdArray = [7508, 19666, 5801, 290815, 491625]

        const dataArray = await Promise.all(
            [
                limiter.schedule(() => axios.get(movieUrl))
            ]
        )

        const combinedIdArray = [
            ...dataArray[0].data.results.slice(0, 6).map(movie => movie.id),
            ...movieIdArray
        ]

        const combinedPromiseArray = combinedIdArray.map(id => limiter.schedule(() => axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=99821f5d8417dc69c3ffd66d204f12cc&append_to_response=videos,images,keywords,credits,release_dates`)))

        let combinedData = await Promise.all(combinedPromiseArray)
        combinedData = combinedData.map(({ data }) => extractInfoMovie(false, data, 'award'))

        await Promise.all(combinedData.map(content => fetch(content.backdrop.image)))

        dispatcher(addContent({
            key: 'award',
            movies: combinedData,
            shows: []
        }))
    } catch (error) {

        console.log('Error setting award section: ', error)

    }
}
export const fetchCult = async () => {
    try {

        const combinedIdArray = [185, 550, 680, 141, 111, 115, 12259, 7913, 21502, 15977, 79464, 15917]

        const combinedPromiseArray = combinedIdArray.map(id => limiter.schedule(() => axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=99821f5d8417dc69c3ffd66d204f12cc&append_to_response=videos,images,keywords,credits,release_dates`)))

        let combinedData = await Promise.all(combinedPromiseArray)
        combinedData = combinedData.map(({ data }) => extractInfoMovie(false, data, 'cult'))

        await Promise.all(combinedData.map(content => fetch(content.backdrop.image)))

        dispatcher(addContent({
            key: 'cult',
            movies: combinedData,
            shows: []
        }))

    } catch (error) {

        console.log('Error setting Cult section: ', error)

    }
}
export const fetchViolent = async () => {
    try {
        const movieUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=99821f5d8417dc69c3ffd66d204f12cc&include_adult=false&include_video=false&language=en-US&page=1&sort_by=revenue.desc&with_genres=28%7C27%7C53&with_keywords=10292%7C312898%7C14707%7C12339%7C%7C261071%7C14546%7C10714&with_original_language=en&without_genres=12&without_keywords=9715%7C293198%7C5147'

        const dataArray = await Promise.all(
            [
                limiter.schedule(() => axios.get(movieUrl))
            ]
        )

        const combinedIdArray = dataArray[0].data.results.slice(0, 12).map(movie => movie.id)
        const combinedPromiseArray = combinedIdArray.map(id => limiter.schedule(() => axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=99821f5d8417dc69c3ffd66d204f12cc&append_to_response=videos,images,keywords,credits,release_dates`)))

        let combinedData = await Promise.all(combinedPromiseArray)
        combinedData = combinedData.map(({ data }) => extractInfoMovie(false, data, 'violent'))

        await Promise.all(combinedData.map(content => fetch(content.backdrop.image)))

        dispatcher(addContent({
            key: 'violent',
            movies: combinedData,
            shows: []
        }))
    } catch (error) {

        console.log('Error setting violent section: ', error)

    }
}
export const fetchDirectorSection = async (movieIdArray, director) => {

    const promiseArray = movieIdArray.map(id => limiter.schedule(() => axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=99821f5d8417dc69c3ffd66d204f12cc&append_to_response=videos,images,keywords,credits,release_dates`)))

    const movieArray = await Promise.all(promiseArray)

    const finalArray = movieArray.map(({ data }) => extractInfoMovie(false, data, "directors"))

    await Promise.all(finalArray.map(content => fetch(content.backdrop.image)))

    dispatcher(addContent({
        key: director,
        movies: finalArray,
        shows: []
    }))
}
export const fetchTrending = async () => {

    const movieUrlOne = "https://api.themoviedb.org/3/discover/movie?api_key=99821f5d8417dc69c3ffd66d204f12cc&include_adult=false&include_video=false&language=hi&page=1&primary_release_year=2024&primary_release_date.gte=2024-07-20&region=IN&with_original_language=hi&sort_by=vote_count.desc&with_original_language=hi&year=2024&without_keywords=1852&vote_count.gte=8"

    const movieUrlTwo = "https://api.themoviedb.org/3/discover/movie?api_key=99821f5d8417dc69c3ffd66d204f12cc&include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=2024&primary_release_date.gte=2024-07-20&sort_by=popularity.desc&with_original_language=en&year=2024&without_keywords=1852"

    const showUrlOne = "https://api.themoviedb.org/3/discover/tv?api_key=99821f5d8417dc69c3ffd66d204f12cc&air_date.gte=2024-05-20&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=vote_count.desc&with_origin_country=IN&with_original_language=hi&with_networks=213%7C1024%7C3373&vote_count.gte=4"

    const showUrlTwo = "https://api.themoviedb.org/3/discover/tv?api_key=99821f5d8417dc69c3ffd66d204f12cc&air_date.gte=2024-05-20&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_original_language=en&with_networks=213%7C1024%7C3373&without_genres=16|10762"

    const dataArray = await Promise.all(
        [
            limiter.schedule(() => axios.get(movieUrlOne)),
            limiter.schedule(() => axios.get(movieUrlTwo)),
            limiter.schedule(() => axios.get(showUrlOne)),
            limiter.schedule(() => axios.get(showUrlTwo))
        ]
    )

    const movieUrlOneLength = dataArray[0].data.results.length
    const showUrlOneLength = dataArray[2].data.results.length

    const combinedIdArray = [
        ...dataArray[0].data.results.slice(0, 10).map(movie => movie.id),
        ...dataArray[1].data.results.slice(0, 10 - movieUrlOneLength).map(movie => movie?.id),
        ...dataArray[2].data.results.slice(0, 10).map(show => show.id),
        ...dataArray[3].data.results.slice(0, 10 - showUrlOneLength).map(show => show?.id),
    ]

    const combinedPromiseArray = combinedIdArray.map((id, index) => {
        const type = index < 10 ? `movie` : `tv`
        return limiter.schedule(() => axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=99821f5d8417dc69c3ffd66d204f12cc&append_to_response=videos,images,keywords,credits,release_dates`))
    })

    let combinedData = await Promise.all(combinedPromiseArray)
    combinedData = combinedData.map(({ data }, index) => index < 10 ? extractInfoMovie(true, data, 'trending') : extractInfoShow(true, data, 'trending'))

    await Promise.all(combinedData.map(content => fetch(content.backdrop.image)))

    dispatcher(addContent({
        key: 'trendingIndia',
        movies: combinedData.slice(0, 10),
        shows: combinedData.slice(10)
    }))

}


