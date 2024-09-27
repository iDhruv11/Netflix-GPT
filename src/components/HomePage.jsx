import { useDispatch, useSelector } from "react-redux"
import MainMovie from "./MainMovie"
import SuggestedMovies from "./SuggestedMovies"
import { Loading } from "./Loading"
import { setAreHomeSectionsLoaded } from "../utils/sectionSlice"

export const HomePage = () => {

    const areHomeSectionsLoaded = useSelector( store => store.contents.homeContent )

    return (!areHomeSectionsLoaded)
        ? <Loading /> : 
        <div>
            <h1 className="text-6xl font-bold mx-20 py-20">Home Page</h1>
        </div>
}