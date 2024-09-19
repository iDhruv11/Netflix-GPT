import { useRef, useState } from "react"
import { Logo } from "../utils/Icons"
import { AvatarImage } from "./AvatarImage"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import { NextBtn } from "./NextBtn";
import { PrevBtn } from "./PrevBtn";

export const AvatarSlider = ({ show, showSelected, setShowSelected, nextPfp }) => {

    const slider = useRef(null);
    
    return (
        <div className="flex flex-col overflow-x-visible w-full gap-1 group ">

            <div className={` ${show.title == "Lucifer" ? `w-[20%]` : `w-[25%]`}`}>
                {
                    show.title == 'Netflix' ? <Logo width={"180px"} /> : <img src={show.logoURL} />
                }
            </div>

            <Slider
                className={`${show.title == "Money Heist" ? `-ml-9` : `` } `}
                ref={slider}
                dots={false}          
                infinite={show.avatars.length >= 8}
                speed={1000}
                draggable={false}
                slidesToShow={7.3}
                slidesToScroll={6}
                nextArrow={(show.avatars.length >= 8) ? <PrevBtn /> : <></>}
                prevArrow={(show.avatars.length >= 8) ? <NextBtn /> : <></>}
            >

                {
                    show.avatars.map((avatarFace) => <AvatarImage avatarFace={avatarFace} showSelected={showSelected} setShowSelected={setShowSelected} nextPfp={nextPfp} />)
                }
                
            </Slider>
                                
        </div>
    )
}