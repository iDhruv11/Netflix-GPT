import { useEffect, useRef, useState } from "react"
import { Logo } from "../utils/Icons"
import { AvatarImage } from "./AvatarImage"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import { NextBtn } from "./NextBtn";
import { PrevBtn } from "./PrevBtn";

export const AvatarSlider = ({ show }) => {

    const [showArrows, setShowArrows] = useState(false);
    const slider = useRef(null);
    // useEffect(() => {
    //     (slider.current.scrollWidth > slider.current.clientWidth) ? setShowArrows(true) : setShowArrows(false);
    // }, [])
    

    return (
        <div className="flex flex-col overflow-x-visible w-full gap-1 group">
            <div className={` ${show.title == "Lucifer" ? `w-[20%]` : `w-[25%]`}`}>
                {
                    show.title == 'Netflix' ? <Logo width={"200px"} /> : <img src={show.logoURL} />
                }
            </div>
            <Slider
                // className="flex overflow-x-scroll gap-3 no-scrollbar overflow-y-hidden relative"
                ref={slider}
                dots={false}          
                infinite={show.avatars.length >= 8}
                speed={1000}
                draggable={false}
                slidesToShow={7.8}
                slidesToScroll={6}
                nextArrow={(show.avatars.length >= 8) ? <PrevBtn /> : <></>}
                prevArrow={(show.avatars.length >= 8) ? <NextBtn /> : <></>}
            >
                {
                    show.avatars.map((avatarFace) => <AvatarImage avatarFace={avatarFace} />)
                }
            </Slider>
                                
        </div>
    )
}