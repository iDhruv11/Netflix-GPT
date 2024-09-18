import { useEffect, useRef, useState } from "react"
import { LeftArrow, Logo } from "../utils/Icons";
import { AvatarSlider } from "./AvatarSlider";

export const AvatarSection = ({ setShowAvatars, nextPfp, pfpURL }) => {

    const [backToNormalSize, setBackToNormalSize] = useState(false);
    const main = useRef(null);
    const header = useRef(null);
    useEffect( () => {
        setTimeout(() => {
            setBackToNormalSize(true);
        }, 500);
        
    }, [])

    const handleScroll = () => {
        
        (main.current.scrollTop > 20) ? header.current.classList.add('bg-[#0c0c0ce2]') : header.current.classList.remove('bg-[#0c0c0ce2]');

    }

    return (
        <div className="absolute w-full h-screen bg-[#141414] overflow-y-hidden pt-28 ">
            <div className="bg-gradient-to-b from-black to-transparent w-full h-[8vh] px-20 fixed top-0 left-0">
                <div className="pt-6"><Logo /></div>
            </div>
            <div 
                className={`w-[70%] mx-auto h-[90vh] overflow-y-scroll pl-8 no-scrollbar inner-shadow ${ (backToNormalSize) ? `scale-100 opacity-100` : `scale-110 opacity-0` } transition-all duration-300 ease-linear pb-14`}
                onScroll={handleScroll}
                ref = {main}
            >
                <div
                    className="w-full flex justify-between items-center pr-10 py-3 pl-3 sticky top-0 transition-all duration-300 ease-linear z-30"
                    ref = {header}
                >
                    <div className="flex items-center gap-4">
                        <div
                            onClick={ () => setShowAvatars(false) }
                            className="h-full flex items-center hover:bg-neutral-800 rounded-sm transition-all duration-200 ease-linear"
                        >
                            <LeftArrow />
                        </div>
                        <div className="flex flex-col gap-0">
                            <p className="text-white font-bold text-[2.35rem]">Edit Profile</p>
                            <p className="text-white font-bold text-3xl">Choose a profile icon.</p>
                        </div>
                    </div>
                    <div className="w-16">
                        <img src={nextPfp.src} className="rounded-md"/>
                    </div>
                </div>
                <div className="flex flex-col gap-20 pt-16">
                    {
                        pfpURL.current.map( (show) => <AvatarSlider show={show} />)
                    }
                </div>
            </div>
        </div>
    )
}