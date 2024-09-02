import { useEffect, useRef, useState } from "react";
import Header from "./Header";
import Plyr from "plyr";
import 'plyr/dist/plyr.css';
import netflixSymbol from '../img/Netflix-Logo.png'
import movieTitle from '../img/Deadpool.png'
import { Info, Play } from "../utils/Icons";

const MainMovie = () => {
    
    const [minimize, setMinimize] = useState(false);
    const playerWrapper = useRef(null);
    useEffect(() => {
        const player = new Plyr(playerWrapper.current, {
            controls: [], // Hide all controls
            autoplay: true,
            muted: true,
            loop: { active: true },
            fullscreen: { enabled: true },
            hideControls: true,
        })
        setTimeout(() => {
            setMinimize(true);
        }, 5000);
    }, [])

    return (
        <div className="h-[100vh] bg-[#141414]">
            <Header />
            <div className="h-[95%] overflow-hidden">
                <div className="w-full h-full scale-110 relative">
                    <div className="overlap-gradient">

                        {/* title container */}
                        <div className=" absolute left-36 w-4/12 flex flex-col gap-8">

                        
                            <div className={`${(minimize) ? `translate-y-28 w-[300px]` : `w-[550px]` } transition-all duration-700 ease-linear transform-gpu`}>
                                <img src={`${movieTitle}`} width="550px" />
                            </div>

                            <p className={`text-white capitalize tracking-wider text-xl text-shadow ${(minimize) ? `translate-y-20 opacity-0` : `` } transition-all duration-700 ease-linear transform-gpu`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, nulla sit. Ex in ratione voluptatibus culpa temporibus sint corrupti vel unde cupidi.</p>

                            <div className="flex gap-4">
                                <button className="bg-white flex items-center gap-3 px-7 py-3 rounded-sm hover:bg-white/70">
                                    <Play />
                                    <p className="text-lg text-black font-extrabold tracking-wide">Play</p>
                                </button>
                                <button className="bg-[#6E7271]/70 flex items-center gap-3 px-8 py-3 rounded-sm hover:bg-[#6E7271]/40">
                                    <Info />
                                    <p className="text-lg text-white font-extrabold">More Info</p>
                                </button>
                            </div>

                        </div>

                    </div>
                    <div ref={playerWrapper} className="plyr__video-embed" id="player">
                        <iframe
                            src="https://www.youtube.com/embed/9CiW_DgxCnQ?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&loop=1"
                            allowfullscreen
                            allow="autoplay; encrypted-media"
                        ></iframe>
                    </div>

                </div>
                <div className="bottom-gradient">

                </div>
            </div>

        </div>
    )
}
export default MainMovie;
