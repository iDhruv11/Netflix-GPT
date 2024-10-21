import { useRef } from "react"
import { useSelector } from "react-redux"
import { useOutletContext } from "react-router-dom"
import { MainMovie } from "./MainMovie"
import SuggestedMovies from "./SuggestedMovies"

export const ShowsPage = () => {
    
    const scrolledElement = useRef(null)
    const setHasScrolled = useOutletContext()

    const trending = useSelector( store => {
        return store.contents["trendingIndia"].shows
            .filter( show => show.backdropNoLang && show.logo )
            .filter( (show, index) => index <= 4)
    })

    const newRelease = useSelector( store => {
        return store.contents["newRelease"].shows
            .filter( show => show.backdropNoLang && show.logo)
            .filter( show => !trending.some( trendingShow => trendingShow.title == show.title ) )
            .filter( (show, index) => index <= 4 )
    })
    const netflix = useSelector( store => {
        return store.contents["netflix"].shows
            .filter( show => show.backdropNoLang && show.logo )
            .filter( (show, index) => index <= 4)
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