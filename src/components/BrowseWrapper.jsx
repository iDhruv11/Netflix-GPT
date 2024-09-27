import { Outlet } from "react-router-dom"
import Header from "./Header"
import { useDispatch, useSelector } from "react-redux"
import { setAreHomeSectionsLoaded } from "../utils/sectionSlice"
import { useEffect } from "react"

export const BrowseWrapper = () => {

    const dispatcher = useDispatch()
    const areHomeSectionsLoaded = useSelector( store => store.contents.homeContent )
    const homeSections = useSelector( store => {
        return store.contents.keys.slice(0, 13).reduce( (acc, key) => {
            acc[key] = store.contents[key]
            return acc
        }, {})
    } )
  
    if(!areHomeSectionsLoaded){ 
        Object.keys(homeSections).every( (key) => homeSections[key].movies.length && homeSections[key].shows.length )
            ? dispatcher( setAreHomeSectionsLoaded(true) )
            : null
    }
    
    useEffect( () => {
        fetchAllData()
    }, [])
    return (
        <div className="w-full">
            {
                (areHomeSectionsLoaded) && <Header />
            }
            <Outlet />
        </div>
    )
}