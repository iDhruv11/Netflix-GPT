import { useSelector } from "react-redux"
import MainMovie from "./MainMovie"
import SuggestedMovies from "./SuggestedMovies"
import { useState } from "react"
import { useEffect } from "react"
import { Loading } from "./Loading"
import { useMemo } from "react"

export const Browse = () => {

    const [status, setStatus] = useState(false)
    const allSections = useSelector( store => store.contents )
    const homeSections = useMemo(()=>{
        return Object.keys(allSections).slice(0, 13).reduce((acc, key) => {
            acc[key] = allSections[key]
            return acc
        }, {})
    })  
    
    // useEffect( () => {
    //     Object.keys(homeSections).every( (key) => homeSections[key].movies && homeSections[key].shows ) ? setStatus(true) : setStatus(false)
    // }, [homeSections])
     
    if(!status){
        Object.keys(homeSections).every( (key) => homeSections[key].movies && homeSections[key].shows )
            ? setStatus(true)
            : null
    }

    return (
        <div>
            {
                (!status) ? <Loading /> : (
                    <div>
                        <MainMovie />
                        <SuggestedMovies />
                    </div>
                )
            }
        </div>
    )
}