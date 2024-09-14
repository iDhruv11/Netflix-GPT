
import { Nlogo } from "../utils/Icons"

export const AvatarImage = ({ avatarFace }) => {
    return (
        <div className="min-w-[150px] aspect-square rounded-sm m-2 ring-[#E50914] ring-offset-4 ring-offset-[#141414] hover:ring-[4px] relative">
            <img src={avatarFace.src} className="w-full h-full rounded-sm"/>
            <div className={`w-full h-full absolute bg-[#0000006f] top-0 left-0 flex justify-center items-center ${ (avatarFace.isSelected) ? `scale-100 hover:cursor-not-allowed` : `scale-0` }`}>
              <Nlogo />  
            </div>
        </div>
    )
}