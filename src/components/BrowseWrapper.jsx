import { Outlet } from "react-router-dom"
import Header from "./Header"
import { useDispatch, useSelector } from "react-redux"
import { setAreHomeSectionsLoaded } from "../utils/sectionSlice"
import { useEffect, useRef, useState } from "react"

export const BrowseWrapper = () => {

    const [hasScrolled, setHasScrolled] = useState(false)
    const [page, setPage] = useState("home")

    const contentOccurance = useRef({
        home: [],
        shows: [],
        movies: [],
        director: []
    })

    const dispatcher = useDispatch()

    const keys = ['topRated', 'newRelease', 'popular', 'critic', 'netflix', 'trendingIndia', 'adventure', 'action', 'bestOfYear', 'trueStories', 'comedy', 'family', 'feelGood', 'martin', 'tarantino', 'steven', 'nolan', 'kubrick', 'fincher', 'coen', 'ray', 'hirani', 'guru', 'anurag']    

    const areHomeSectionsLoaded = useSelector( store => store.contents.homeContent )
    const homeSections = useSelector( store => {

        return (!areHomeSectionsLoaded) 
            ? keys.reduce( (acc, key) => {
                acc[key] = store.contents[key]
                return acc
            }, {})
            : null
    } )

    if(!areHomeSectionsLoaded){ 
        Object.keys(homeSections).every( (key) => homeSections[key].movies != null && homeSections[key].shows != null )
            ? dispatcher( setAreHomeSectionsLoaded(true) )
            // ? console.log("full data available")
            : null
    }
    
    useEffect( () => {
        
        // fetchAllData()
        console.log("mounted for the first time")
        
    }, [])
    return (
        <div className="w-screen">
            {
                (areHomeSectionsLoaded) && <Header hasScrolled={hasScrolled} page={page} setPage={setPage}/>
            }
            <Outlet context={{
                setHasScrolled,
                contentOccurance: contentOccurance.current
            }}/>
        </div>
    )
}