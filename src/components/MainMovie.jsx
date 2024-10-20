import { useEffect, useRef, useState } from "react";
import Plyr from "plyr";
import 'plyr/dist/plyr.css';
import { Info, Play, Replay, Unmute, Mute } from "../utils/Icons";
import { ShimmerButton, ShimmerDiv, ShimmerText } from "shimmer-effects-react";
import { getMainMovie } from "../utils/getMainMovie";

const MainMovie = ({ mainMovieCollection }) => {

    const [minimize, setMinimize] = useState(false);
    const [showVideo, setShowVideo] = useState(false)
    const player = useRef(null)
    const playerWrapper = useRef(null)
    const error = useRef()
    const lastChosenControl = useRef("mute")
    const [showCover, setShowCover] = useState(true)
    const [controlBtn, setControlBtn] = useState("")
    const isMounted = useRef(null)
    const [mainMovie, setMainMovie] = useState({
        title: null,
        logo: {
            src: null,
            minWidth: null,
            maxWidth: null
        },
        desc: null,
        type: null,
        isNetflixOriginal: null,
        rank: null,
        ageRating: null,
        backdrop: null,
        videoKey: null
    })


    useEffect(() => {

        isMounted.current = true

        getMainMovie(mainMovieCollection, setMainMovie)

        return () => {
            if (player.current) {
                player.current.destroy()
            }
            isMounted.current = false
        }
    }, [])

    useEffect(() => {

        if (mainMovie.desc) {

            const initialisePlyr = () => {

                if (isMounted.current) {

                    console.log("Inside Initialise Plyr")
                    player.current = new Plyr(playerWrapper.current, {
                        controls: [],
                        settings: [],
                        autoplay: false,
                        muted: false,
                        loop: { active: false },
                        fullscreen: { enabled: true },
                        hideControls: true,
                        keyboard: { focused: false, global: false },
                        quality: { default: 1080 },
                    })

                    player.current.on("ready", () => {

                        let isExecutedAlready = false
                        player.current.volume = 0

                        player.current.on("playing", () => {

                            if (player.current.currentTime < 10) {

                                isExecutedAlready = false

                                if (!(player.current.duration <= 20)) {
                                    player.current.currentTime = 10
                                }

                            }
                        })

                        let cutAmount;
                        if (player.current.duration < 40) cutAmount = 5
                        else if (player.current.duration >= 40 && player.current.duration <= 60) cutAmount = 15
                        else if (player.current.duration > 60 && player.current.duration <= 80) cutAmount = 15
                        else cutAmount = 20

                        player.current.on("timeupdate", () => {

                            if (player.current.currentTime >= player.current.duration - cutAmount) {

                                if (!isExecutedAlready) {

                                    isExecutedAlready = true

                                    if(isMounted.current) setShowVideo(false)

                                    setTimeout(() => {

                                        if(isMounted.current){
                                            setControlBtn("")
                                            player.current.stop()
                                            setShowCover(true)
                                            setShowVideo(true)
                                        }

                                    }, 1500)

                                    setTimeout(() => {

                                        if(isMounted.current) setControlBtn("replay")

                                    }, 2000);
                                }

                            }
                        })

                    })

                }
            }

            const checkVideoExistence = () => {

                console.log("Inside checkVideoExistence")

                const prePlayer = new YT.Player('iframe', {
                    events: {

                        'onError': () => {
                            console.log("Error playing video")
                            error.current = true
                        },

                        'onReady': (event) => {
                            setTimeout(() => {
                                if (!error.current) {
                                    event.target.setPlaybackQuality('hd1080')
                                    initialisePlyr()
                                }
                            }, 500)
                        }
                    }
                })
            }

            if (!window?.YT) {

                window.onYouTubeIframeAPIReady = () => {
                    console.log("New Iframe API was fetched")
                    if(isMounted.current) checkVideoExistence()
                }
                const script = document.createElement("script")
                script.src = "https://www.youtube.com/iframe_api"
                document.body.appendChild(script)
            }
            else {
                console.log("Existing Iframe API was used")
                if(isMounted.current) checkVideoExistence()
            }

            setTimeout(() => {
                if (player.current && isMounted.current) {
                    setShowVideo(false)
                }
            }, 10000)

            setTimeout(() => {
                if (!player.current && isMounted.current) {
                    setMinimize(true)
                }
            }, 10000);

            setTimeout(() => {
                if (player.current && isMounted.current) {
                    setShowCover(false)
                    player.current.play()
                    setMinimize(true)
                }
            }, 11500);


            setTimeout(() => {
                if (player.current && isMounted.current) {
                    setShowVideo(true)
                    setControlBtn(lastChosenControl.current)
                }
            }, 13500);

            setTimeout(() => {
                if (isMounted.current && isMounted.current) {
                    setShowVideo(true)
                }
            }, 1000);
        }


    }, [mainMovie])

    return (
        <div className="h-screen w-screen bg-blue-500 overflow-hidden relative">

            {
                <div className="w-full h-full scale-[1.4]">
                    <div className="plyr__video-embed" id="player" ref={playerWrapper}>
                        <iframe
                            src={`https://www.youtube.com/embed/${mainMovie.videoKey}?autoplay=0&mute=0&controls=0&showinfo=0&modestbranding=1&enablejsapi=1&loop=0&rel=0`}
                            allowfullscreen
                            allow="autoplay; encrypted-media"
                            id="iframe"
                        ></iframe>
                    </div>
                </div>
            }

            <div className={`w-full h-full absolute text-[#1c1c1c] top-0 left-0 ${(showVideo) ? `bg-none` : `bg-[#000]`} transition-all duration-[1000ms] ease-linear z-30`}></div>

            <div className="w-full h-full absolute left-0 top-0 z-40">

                <div className={`absolute pl-16 w-[40%] flex flex-col bottom-64 ${(mainMovie.desc) ? `gap-1` : `gap-4`}`}>

                    <ShimmerDiv mode="custom" height={"15rem"} width={"90%"} loading={!mainMovie.logo.src} from="#141414" via="#1c1c1c" to="#141414" border={0} rounded={"0.3"}>
                        <div className={`${(minimize) ? `${mainMovie.logo.minWidth} translate-y-44 ` : `${mainMovie.logo.maxWidth}`} ${(mainMovie.isNetflixOriginal && mainMovie.title != "The Irishman") ? `mb-6` : `mb-0`} transition-all duration-1000 ease-linear transform-gpu`}>
                            <img src={`${mainMovie.logo.src}`} className="w-full" />
                        </div>

                    </ShimmerDiv>

                    {
                        (mainMovie.isNetflixOriginal)
                            ? <ShimmerDiv mode="custom" width={"70%"} height={"3.15rem"} from="#141414" via="#1c1c1c" to="#141414" border={0} rounded={"0.3"} loading={!mainMovie.type}>
                                <div className={`flex items-center gap-3 ${(minimize) ? `translate-y-20 opacity-0` : `opacity-100`} transition-all duration-700 ease-linear transform-gpu mb-[0.15rem]`}>
                                    <p className="text-white font-medium text-[2rem] flex gap-1 items-center text-shadow">
                                        A <img
                                            src="https://res.cloudinary.com/dianmmxft/image/upload/v1728646664/Netflix_Logo_RGB_rlx0yn.png"
                                            className="w-[7.3rem] object-contain pt-1"
                                        /> Original {mainMovie.type == "movie" ? "Film" : "Show"}
                                    </p>
                                </div>
                            </ShimmerDiv>
                            : <ShimmerDiv mode="custom" width={"70%"} height={"3.15rem"} from="#141414" via="#1c1c1c" to="#141414" border={0} rounded={"0.3"} loading={!mainMovie.type}>
                                <div className={`flex items-center gap-4 ${(minimize) ? `translate-y-20 opacity-0` : `opacity-100`} transition-all duration-700 ease-linear transform-gpu mb-[0.6rem] mt-6 `}>
                                    <img
                                        src="https://res.cloudinary.com/dianmmxft/image/upload/v1728642746/top10_ysb4ws.png"
                                        className="w-11"
                                    />
                                    <p className="text-white font-medium text-[2rem] text-shadow">{`#${mainMovie.rank} in ${mainMovie.type == "movie" ? `Movies` : `Shows`} Today`}</p>
                                </div>
                            </ShimmerDiv>
                    }


                    <ShimmerText mode="custom" width={90} height={15} line={3} gap={6} from="#141414" via="#1c1c1c" to="#141414" border={0} loading={!mainMovie.desc}>
                        <p className={`text-white text-[1.45rem] leading-snug font-medium text-shadow w-full ${(minimize) ? `translate-y-20 opacity-0` : `opacity-100`} transition-all duration-700 ease-linear transform-gpu mb-5`}>{mainMovie.desc}</p>
                    </ShimmerText>

                    <div className="flex gap-4 relative items-center ">
                        <ShimmerButton mode="custom" width={200} height={60} from="#141414" via="#1c1c1c" to="#141414" border={0} loading={!mainMovie.desc}>
                            <button className="bg-white flex items-center gap-3 px-7 py-[0.65rem] rounded-sm hover:bg-white/70 ">
                                <Play />
                                <p className="text-[1.45rem] text-black font-medium">Play</p>
                            </button>
                        </ShimmerButton>
                        <ShimmerButton mode="custom" width={250} height={60} from="#141414" via="#1c1c1c" to="#141414" border={0} loading={!mainMovie.desc}>
                            <button className="bg-[#6E7271]/80 flex items-center gap-3 px-6 py-2 rounded-sm hover:bg-[#6E7271]/50 ">
                                <Info />
                                <p className="text-[1.45rem] text-white font-medium ">More Info</p>
                            </button>
                        </ShimmerButton>
                    </div>

                </div>
                <div className="flex w-[12.5%] items-center absolute right-0 gap-4 bottom-64">
                    {
                        (controlBtn == "replay") ?
                            <div
                                className={`border-neutral-400 border-2 w-[25%] aspect-square flex justify-center items-center rounded-full hover:cursor-pointer ${(controlBtn) ? `` : `invisible pointer-events-none ml-4`} hover:border-white`}
                                onClick={() => {
                                    setShowVideo(false)
                                    setControlBtn("")
                                    setTimeout(() => {
                                        setShowCover(false)
                                        player.current.restart()
                                    }, 1500);
                                    setTimeout(() => {
                                        setShowVideo(true)
                                        setControlBtn(lastChosenControl.current)
                                    }, 3500);
                                }}
                            >
                                <Replay />
                            </div> :
                            (controlBtn == "mute") ?
                                <div
                                    className={`border-neutral-400 border-2 w-[25%] aspect-square flex justify-center items-center rounded-full hover:cursor-pointer ${(controlBtn) ? `` : `invisible pointer-events-none ml-4`} hover:border-white`}
                                    onClick={() => {
                                        player.current.volume = 0.9
                                        setControlBtn("unmute")
                                        lastChosenControl.current = "unmute"
                                    }}
                                >
                                    <Mute />
                                </div> :
                                <div
                                    className={`border-neutral-400 border-2 w-[25%] aspect-square flex justify-center items-center rounded-full hover:cursor-pointer ${(controlBtn) ? `` : `invisible pointer-events-none ml-4`} hover:border-white`}
                                    onClick={() => {
                                        player.current.volume = 0
                                        setControlBtn("mute")
                                        lastChosenControl.current = "mute"
                                    }}
                                >
                                    <Unmute />
                                </div>
                    }
                    <ShimmerDiv mode="custom" width={250} height={50} loading={!mainMovie.ageRating} from="#141414" via="#1c1c1c" to="#141414" border={0}>
                        <div className="font-medium text-[1.45rem] w-[80%] text-white tracking-tight border-white bg-neutral-700/50 border-l-4 pl-4 py-2">{mainMovie.ageRating}</div>
                    </ShimmerDiv>
                </div>
            </div>

            <div className="w-full h-full absolute top-0 left-0 z-20">
                {
                    (showCover) && <img
                        src={mainMovie.backdrop}
                        className="w-full min-h-[100%]"
                    />
                }
            </div>

        </div>
    )
}
export { MainMovie };
