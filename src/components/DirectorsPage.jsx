import { useEffect, useRef } from "react"
import { useSelector } from "react-redux"
import { useOutletContext } from "react-router-dom"
import { MainMovie } from "./MainMovie"
import SuggestedMovies from "./SuggestedMovies"

export const DirectorsPage = () => {
    
    const scrolledElement = useRef(null)
    const setHasScrolled = useOutletContext()

    const directorKeys = ["martin", "tarantino", "steven", "kubrick", "fincher", "nolan", "anurag", "hirani"]
    
    // const mainMovieCollection = useSelector( store => {

    //     const content = directorKeys.reduce( (collection, director) => {

    //         return [
    //             ...collection,
    //             {
    //                 director, 
    //                 movies: store.contents[director].movies.every( (movie, index) => index < 4 )
    //             }
    //         ]
            
    //     }, [])

    //     return {
    //         page: "director",
    //         content
    //     }

    // })
    const mainMovieCollection = useSelector( store => {

        const content = directorKeys.reduce( (collection, director) => {

            return [
                ...collection,
                ...store.contents[director].movies
                       .filter( (movie, index) => index < ( director != "hirani" ? 4 : 2 ))
                       .map( movie => ({
                           ...movie,
                           director
                       }))
            ]
            
        }, [])

        return {
            page: "director",
            content
        }

    })

    useEffect( () => {
        setHasScrolled(true)
    })

    return (
        <div
            className="relative bg-[#141414] w-screen h-screen overflow-y-scroll overflow-x-hidden custom-scrollbar"
            ref={scrolledElement}
        >
            <MainMovie mainMovieCollection={mainMovieCollection} bottom={`bottom-56`}/>
            <SuggestedMovies />
        </div>
    )

}