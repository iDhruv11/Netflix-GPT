import { useEffect, useRef } from "react";
import Header from "./Header";
import Plyr from "plyr";
import 'plyr/dist/plyr.css';

const MainMovie = () => {
    const playerWrapper = useRef(null);
    useEffect(()=>{
        const player = new Plyr(playerWrapper.current, {
            controls: [], // Hide all controls
            autoplay: true,
            muted: true,
            loop: { active: true },
            fullscreen: { enabled: true },
            hideControls: true,
          })
    }, [])
    return (
        <div className="h-[100vh] bg-[#141414]">
            <Header />
            <div className="h-full overflow-hidden">
                <div className="w-full h-full scale-110 relative">
                    <div className="overlap-gradient">

                    </div>
                    <div ref={playerWrapper} className="plyr__video-embed" id="player">
                        <iframe
                            src="https://www.youtube.com/embed/9CiW_DgxCnQ?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&loop=1&playlist=VIDEO_ID"
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
