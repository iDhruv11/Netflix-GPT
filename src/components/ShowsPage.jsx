import { useEffect, useRef } from "react"
import { useSelector } from "react-redux"
import { useOutletContext } from "react-router-dom"
import { MainMovie } from "./MainMovie"
import SuggestedSections from "./SuggestedSections"

export const ShowsPage = () => {

    const scrolledElement = useRef(null)
    const {setHasScrolled, contentOccurance, setBlurTitle} = useOutletContext()
    const sections = [
        'popular',
        'netflix',
        'binge',    
        'feelGood',
        'sitcom',        
        'newRelease',
        'critic',
        'family',
        'trendingIndia',
        'mystery',          
        'topRated',
        'crime',
        'anime',           
        'dark',    
    ];

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

        page: "shows",
        content: [
            ...trending,
            ...newRelease,
            ...netflix
        ]
    }

    useEffect(() => {
        setHasScrolled(true)
    }, [])

    const handleScroll = () => {
        scrolledElement.current.scrollTop > 50 ? setBlurTitle(true) : setBlurTitle(false)
    }

    return (
        <div
            className="relative bg-[#141414] w-screen h-screen overflow-y-scroll overflow-x-hidden custom-scrollbar"
            ref={scrolledElement}
            onScroll={handleScroll}
        >
            <MainMovie mainMovieCollection={mainMovieCollection} bottom={`bottom-56`} contentOccurance={contentOccurance.shows}/>
            <SuggestedSections sections={sections} page={"shows"}/>
        </div>
    )

}