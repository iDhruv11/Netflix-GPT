import { useRef } from "react"
import { useSelector } from "react-redux"
import { useOutletContext } from "react-router-dom"
import { MainMovie } from "./MainMovie"
import SuggestedMovies from "./SuggestedMovies"

export const MoviesPage = () => {

    const scrolledElement = useRef(null)
    const setHasScrolled = useOutletContext()

    const trending = useSelector( store => {
        return store.contents["trendingIndia"].movies
            .filter( movie => movie.backdropNoLang && movie.logo )
            .filter( (movie, index) => index <= 4)
    })

    const newRelease = useSelector( store => {
        return store.contents["newRelease"].movies
            .filter( movie => movie.backdropNoLang && movie.logo)
            .filter( movie => !trending.some( trendingMovie => trendingMovie.title == movie.title ) )
            .filter( (movie, index) => index <= 4 )
    })
    const netflix = useSelector( store => {
        return store.contents["netflix"].movies
            .filter( movie => movie.backdropNoLang && movie.logo )
            .filter( (movie, index) => index > 4)
    })

    const mainMovieCollection = {

        page: "movie",
        trendingIndia: {
            groupOne: trending,
            groupTwo: newRelease,
        },
        netflix: {
            content: netflix 
        }
    }

    const handleScroll = () => {
        scrolledElement.current.scrollTop > 5 ? setHasScrolled(true) : setHasScrolled(false) 
    } 

    return (
        <div
            className="relative bg-[#141414] w-screen h-screen overflow-y-scroll overflow-x-hidden custom-scrollbar"
            ref={scrolledElement}
            onScroll={ handleScroll } 
        >
            <MainMovie mainMovieCollection={mainMovieCollection}/>
            <SuggestedMovies />
        </div>
    )

}