import { useEffect, useRef, useState } from "react"
import { LeftArrow, TickForBtn } from "../utils/Icons";
import { AvatarSlider } from "./AvatarSlider";
import { HeaderMini } from "./HeaderMini";
import { SaveBtn } from "../Buttons/SaveBtn";
import { CancelBtn } from "../Buttons/CancelBtn";

export const AvatarSection = ({ setShowAvatars, nextPfp, setNextPfp, pfpURL }) => {

    const [backToNormalSize, setBackToNormalSize] = useState(false);
    const [showSelected, setShowSelected] = useState({
        id: null,
        src: null
    });
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

    const handleExit = () => {
        setBackToNormalSize(false);
        setTimeout(() => {
            setShowAvatars(false);
        }, 800);
    }
    const setPfp = () => {
        (showSelected.id) ? setNextPfp(showSelected) : null;
        handleExit();
    }
    return (
        <div className="absolute w-full h-screen bg-[#141414] overflow-y-hidden pt-28 ">

            <HeaderMini showLogo={true} />

            <div 
                className={`w-[70%] mx-auto h-[90vh] overflow-y-scroll no-scrollbar inner-shadow ${ (backToNormalSize) ? `scale-100 opacity-100` : `scale-110 opacity-0` } transition-all duration-300 ease-linear pb-24`}
                onScroll={handleScroll}
                ref = {main}
            >
                <div
                    className="w-full flex justify-between items-center pr-10 py-3 pl-3 sticky top-0 transition-all duration-300 ease-linear z-30"
                    ref = {header}
                >
                    <div className="flex items-center gap-4">

                        <div
                            onClick={ handleExit }
                            className="h-full hover:bg-neutral-800 hover:cursor-pointer rounded-full px-2 py-2 transition-all duration-200 ease-linear"
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

                <div className="flex flex-col gap-20 pt-16 px-16 mb-14">
                    {
                        pfpURL.current.map( (show) => <AvatarSlider show={show} showSelected={showSelected} setShowSelected={setShowSelected} nextPfp={nextPfp} />)
                    }
                </div>
                <div className="flex gap-4 justify-end pr-16">
                    <div onClick={ setPfp }>
                        <SaveBtn />
                    </div>
                    <div onClick={ handleExit }>
                        <CancelBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}