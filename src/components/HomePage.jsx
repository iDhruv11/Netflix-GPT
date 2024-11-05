import { useSelector } from "react-redux"
import { MainMovie } from "./MainMovie"
import { Loading } from "./Loading"
import { useEffect, useRef } from "react"
import { useOutletContext } from "react-router-dom"
import SuggestedSections from "./SuggestedSections"

export const HomePage = () => {

    const {setHasScrolled, contentOccurance} = useOutletContext()
    const areHomeSectionsLoaded = useSelector(store => store.contents.homeContent)
    const sections = ['topRated', 'newRelease', 'popular', 'critic', 'netflix', 'trendingIndia', 'adventure', 'action', 'bestOfYear', 'trueStories', 'comedy', 'family', 'feelGood']

    const mainMovieCollection = useSelector(store => {
        return (areHomeSectionsLoaded) 
            ? {
                page: "home",
                content: [
    
                    ...store.contents["trendingIndia"].movies
                        .filter(movie => (movie.backdropNoLang && movie.logo))
                        .filter((movie, index) => index <= 4),
    
                    ...store.contents["trendingIndia"].shows
                        .filter(show => (show.backdropNoLang && show.logo))
                        .filter((show, index) => index <= 4),
                        
                    ...store.contents["netflix"].movies.filter((movie, index) => index <= 4)
                ]
            }
            : null
    })

    const scrolledElement = useRef(null)
    const handleScroll = () => {
        scrolledElement.current.scrollTop > 5 ? setHasScrolled(true) : setHasScrolled(false)
    }

    useEffect( () => {
        setHasScrolled(false)
    }, [])

    return (!areHomeSectionsLoaded)
        ? <Loading /> :
        <div
            className="relative bg-[#141414] w-screen h-screen overflow-y-scroll overflow-x-hidden custom-scrollbar"
            ref={scrolledElement}
            onScroll={handleScroll}
        >
            <MainMovie mainMovieCollection={mainMovieCollection} bottom={`bottom-64`} contentOccurance={contentOccurance.home}/>
            <SuggestedSections sections={sections} page={"home"}/>
        </div>
}