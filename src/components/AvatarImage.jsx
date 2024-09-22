
import { Nlogo, Tick } from "../utils/Icons"

export const AvatarImage = ({ avatarFace, showSelected, setShowSelected, nextPfp={ id: null}}) => {

    return (
        <div className="aspect-square rounded-sm m-2 ring-[#E50914] ring-offset-4 ring-offset-[#141414] hover:ring-[4px] relative mx-3 hover:cursor-pointer">

            <img 
                src={avatarFace.src}
                className="w-full h-full rounded-sm"
                onClick={ () => setShowSelected(avatarFace)}    
            />

            <div className={`w-full h-full absolute bg-[#0000008a] top-0 left-0 flex justify-center items-center ${ (avatarFace.isSelected) ? `scale-100 hover:cursor-not-allowed` : `scale-0` }`}>

              <Nlogo />  

            </div>

            <div className={`w-full h-full absolute bg-[#0000008a] top-0 left-0 flex justify-center items-center ${ (showSelected.id == avatarFace.id || nextPfp.id == avatarFace.id ) ? `scale-100 opacity-100` : `scale-0 opacity-0` } transition-opacity duration-200 ease-linear`}>

              <Tick color={ (nextPfp.id == avatarFace.id) ? "#e50914" : "white" }/>  {/* Carefully analyse why we use backtics above and db-quotes here */}

            </div>
            
        </div>
    )
}