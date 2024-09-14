import { useEffect, useRef, useState } from "react"
import { Greater, Logo, Smaller } from "../utils/Icons"
import { AvatarImage } from "./AvatarImage"

export const AvatarSlider = ({ show }) => {

    const [showArrows, setShowArrows] = useState(false);
    const slider = useRef(null);
    useEffect(() => {
        (slider.current.scrollWidth > slider.current.clientWidth) ? setShowArrows(true) : setShowArrows(false);
    }, [])

    return (
        <div className="flex flex-col overflow-x-visible w-full gap-3 group">
            <div className={` ${show.title == "Lucifer" ? `w-[20%]` : `w-[25%]`}`}>
                {
                    show.title == 'Netflix' ? <Logo width={"200px"} /> : <img src={show.logoURL} />
                }
            </div>
            <div
                className="flex overflow-x-scroll gap-3 no-scrollbar overflow-y-hidden relative"
                ref={slider}
            >
                {
                    show.avatars.map((avatarFace) => <AvatarImage avatarFace={avatarFace} />)
                }
                {/* placed at last as they are being used with positioning alrady */}
                {
                    (showArrows) && <div className="absolute top-0 left-0 opacity-0 bg-[#00000038] hover:bg-[#00000081] group-hover:opacity-100 flex items-center z-10 h-full transition-all duration-150 ease-linear"><Smaller /></div>
                }
                {               
                    (showArrows) && <div className="absolute top-0 right-0 opacity-0 bg-[#00000038] hover:bg-[#00000081] group-hover:opacity-100 flex items-center z-10 h-full transition-all duration-150 ease-linear"><Greater /></div>
                }
            </div>
        </div>
    )
}