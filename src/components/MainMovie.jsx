import { useEffect, useRef, useState } from "react";
import Plyr from "plyr";
import 'plyr/dist/plyr.css';
import { Info, Play } from "../utils/Icons";

const MainMovie = () => {

    const [minimize, setMinimize] = useState(false);
    const [showVideo, setShowVideo] = useState(false)
    const player = useRef(null)
    const [showCover, setShowCover] = useState(true)
    const [scale, setScale] = useState({
        title: `1.4`,
        video: `1.0`
    })
    const isMounted = useRef(null)
    const [mainMovie, setMainMovie] = useState({
        logo: {
            src: "https://image.tmdb.org/t/p/original/ckZoF4j35HL1USGG2iX8GeQ7058.png",
            miniWidth: `w-[55%]`,
            marginTop: `mt-5`,
            maxWidth: `w-[90%]`
        },
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, nulla sit. Ex in ratione voluptatibus culpa temporibus sint corrupti vel unde cupidi.",
        type: "Movies",
        isNetflixOriginal: false,
        rank: 3,
    })

    useEffect(() => {
        isMounted.current = true
        const initialisePlyr = () => {
            if (isMounted.current) {
                player.current = new Plyr("#player", {
                    controls: [],
                    settings: [],
                    autoplay: false,
                    muted: false,
                    loop: { active: false },
                    fullscreen: { enabled: true },
                    hideControls: true,
                    keyboard: { focused: false, global: false },
                    quality: { default: 1080 }
                })

                player.current.on("ready", () => {

                    let isExecutedAlready = false
                    player.current.on("playing", () => {
                        if (player.current.currentTime < 10) {
                            isExecutedAlready = false
                            player.current.currentTime = player.current.duration - 15
                        }
                    })
                    // player.current.on("pause", () => {
                    //     player.current.currentTime = player.current.duration - 15
                    //     player.current.play()
                    // })
                    player.current.on("timeupdate", () => {
                        if (player.current.currentTime >= player.current.duration - 8) {

                            if (!isExecutedAlready) {

                                isExecutedAlready = true
                                setShowVideo(false)

                                setTimeout(() => {
                                    player.current.currrentTime = player.duration - 15
                                    setShowCover(true)
                                    setShowVideo(true)
                                    setScale({
                                        title: `1.4`,
                                        video: `1.0`
                                    })
                                }, 1500)
                            }

                        }
                    })

                })

            }
        }
        if (!window?.YT) {
            window.onYouTubeIframeAPIReady = () => {
                initialisePlyr()
            }
            const script = document.createElement("script")
            script.src = "https://www.youtube.com/iframe_api"
            document.body.appendChild(script)
        }
        else {
            initialisePlyr()
        }
        setTimeout(() => {
            setShowVideo(false)
        }, 10000)

        setTimeout(() => {
            setShowCover(false)
            setScale({
                title: `1.0`,
                video: `1.4`
            })
            player.current.play()
        }, 11500);

        setTimeout(() => {
            setShowVideo(true)
        }, 13500);
        setTimeout(() => {
            if (isMounted.current) {
                setShowVideo(true)
            }
        }, 800);

        return () => {
            if (player.current) {
                player.current.destroy()
            }
            isMounted.current = false
        }
    }, [])

    return (
        <div className="h-[100vh] ">
            {/* <Header /> */}
            <div className="h-[100%] overflow-hidden relative">
                <div className={`w-full h-full scale-[${scale.video}]`}>
                    <div className={`overlap-gradient relative ${(showVideo) ? `bg-none` : `bg-[#000]/100`} transition-colors duration-[1000ms] ease-linear scale-[${scale.title}]`}>

                        {/* title container */}
                        <div className={`absolute left-80 w-[27%] flex flex-col gap-1 ${mainMovie.logo.marginTop} bg-blue-500`}>


                            <div className={`${(minimize) ? `translate-y-36 ${mainMovie.logo.miniWidth} mb-6` : `${mainMovie.logo.maxWidth}`} transition-all duration-1000 ease-linear transform-gpu mb-2`}>
                                <img src={`${mainMovie.logo.src}`} className="w-full" />
                            </div>

                            {
                                (mainMovie.isNetflixOriginal)
                                    ? <div className={`flex items-center gap-3 ${(minimize) ? `translate-y-20 opacity-0` : `opacity-100`} transition-all duration-700 ease-linear transform-gpu mb-[0.15rem]`}>
                                        <p className="text-white font-extrabold text-2xl tracking-[0.030rem] flex gap-1 justify-center items-center">
                                            A <img
                                                src="https://res.cloudinary.com/dianmmxft/image/upload/v1728646664/Netflix_Logo_RGB_rlx0yn.png"
                                                className="w-[5.6rem] object-contain"
                                            /> Original {mainMovie.type == "Movies" ? "Film" : "Show"}
                                        </p>
                                    </div>
                                    : <div className={`flex items-center gap-3 ${(minimize) ? `translate-y-20 opacity-0` : `opacity-100`} transition-all duration-700 ease-linear transform-gpu mb-[0.6rem] ${(mainMovie.logo.maxWidth == "w-[90%]") ? `mt-2` : ``}`}>
                                        <img
                                            src="https://res.cloudinary.com/dianmmxft/image/upload/v1728642746/top10_ysb4ws.png"
                                            className="w-8"
                                        />
                                        <p className="text-white font-extrabold text-2xl tracking-[0.030rem]">{`#${mainMovie.rank} in ${mainMovie.type} Today`}</p>
                                    </div>


                            }

                            <p className={`text-white capitalize tracking-wide text-base font-semibold text-shadow w-full ${(minimize) ? `translate-y-20 opacity-0` : `opacity-100`} transition-all duration-700 ease-linear transform-gpu mb-4`}>{mainMovie.desc}</p>

                            <div className="flex gap-4 relative items-center ">
                                <button className="bg-white flex items-center gap-3 px-6 py-2 rounded-sm hover:bg-white/70 ">
                                    <Play />
                                    <p className="text-base text-black font-extrabold tracking-wide">Play</p>
                                </button>
                                <button className="bg-[#6E7271]/70 flex items-center gap-3 px-6 py-2 rounded-sm hover:bg-[#6E7271]/40 ">
                                    <Info />
                                    <p className="text-base text-white font-extrabold ">More Info</p>
                                </button>
                            </div>

                        </div>

                    </div>
                    <div className="plyr__video-embed relative" id="player">
                        <iframe
                            src="https://www.youtube.com/embed/QFIUD3aq_do?autoplay=0&mute=0&controls=0&showinfo=0&modestbranding=1&loop=0&start=126&rel=0"
                            allowfullscreen
                            allow="autoplay; encrypted-media"
                        ></iframe>
                        {
                            (showCover) && <img
                                src="https://image.tmdb.org/t/p/original/1Jpkm9qZcsT0mSyVXgs4VlGjPNI.jpg"
                                className="w-full h-full absolute z-10"
                            />
                        }
                    </div>

                </div>
            </div>

        </div>
    )
}
export default MainMovie;
