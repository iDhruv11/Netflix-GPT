import { useSelector } from "react-redux"
import { MainMovie } from "./MainMovie"
import SuggestedMovies from "./SuggestedMovies"
import { Loading } from "./Loading"
import { useEffect, useRef } from "react"
import { useOutletContext } from "react-router-dom"

export const HomePage = () => {

    const setHasScrolled = useOutletContext()
    const areHomeSectionsLoaded = useSelector(store => store.contents.homeContent)

    const mainMovieCollection = useSelector(store => {
        return {
            page: "home",
            trendingIndia: {
                groupOne: store.contents["trendingIndia"].movies
                    .filter(movie => (movie.backdropNoLang && movie.logo))
                    .filter((movie, index) => index <= 4),

                groupTwo: store.contents["trendingIndia"].shows
                    .filter(show => (show.backdropNoLang && show.logo))
                    .filter((show, index) => index <= 4)
            },
            netflix: {
                content: store.contents["netflix"].movies.filter((movie, index) => index <= 4)
            }
        }
    })

    const scrolledElement = useRef(null)
    const handleScroll = () => {
        scrolledElement.current.scrollTop > 5 ? setHasScrolled(true) : setHasScrolled(false)
    }

    return (!areHomeSectionsLoaded)
        ? <Loading /> :
        <div
            className="relative bg-[#141414] w-screen h-screen overflow-y-scroll overflow-x-hidden custom-scrollbar"
            ref={scrolledElement}
            onScroll={handleScroll}
        >
            <MainMovie mainMovieCollection={mainMovieCollection} />
            <SuggestedMovies />
        </div>
}