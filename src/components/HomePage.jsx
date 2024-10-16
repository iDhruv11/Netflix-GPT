import { useDispatch, useSelector } from "react-redux"
import MainMovie from "./MainMovie"
import SuggestedMovies from "./SuggestedMovies"
import { Loading } from "./Loading"
import { setAreHomeSectionsLoaded } from "../utils/sectionSlice"

export const HomePage = () => {

    const areHomeSectionsLoaded = useSelector( store => store.contents.homeContent )

    return (!areHomeSectionsLoaded)
        ? <Loading /> : 
        <div className="relative bg-[#141414] ">
            <MainMovie />
            <SuggestedMovies />
        </div>
}