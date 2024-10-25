import { useEffect, useRef } from "react"
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

    const mainMovieCollection = useSelector(store => {
        return {

            page: "shows",
            content: [
                ...trending,
                ...newRelease,
                ...netflix
            ]
        }
    })

    useEffect(() => {
        setHasScrolled(true)
    })

    return (
        <div
            className="relative bg-[#141414] w-screen h-screen overflow-y-scroll overflow-x-hidden custom-scrollbar"
            ref={scrolledElement}
        >
            <MainMovie mainMovieCollection={mainMovieCollection} bottom={`bottom-56`} />
            <SuggestedMovies />
        </div>
    )

}