import { useEffect, useState } from "react"
import { ArrowDown, DislikeFilled, DoubleLikeFilled, Like, LikeFilled, Play, Plus, Tick } from "../utils/Icons"
import { Backdrop } from "./Backdrop"
import { Tooltip } from "./Tooltip"
import { Thumbs } from "./Thumbs"
import { useRef } from "react"

export const PopUpCard = ({ movieCard, setMovieCard }) => {

    const [tooltip, setTooltip] = useState(false)
    const [showThumbs, setShowThumbs] = useState(false)
    const [isAdded, setIsAdded] = useState(false)
    const [isLiked, setIsLiked] = useState(false)
    const [isDisliked, setIsDisliked] = useState(false)
    const [isDbLiked, setIsDbLiked] = useState(false)
    const match = useRef(Math.floor(Math.random() * (99 - 81)) + 81)
    const [backToNormalSize, setBackToNormalSize] = useState(false)
    const popUpCard = useRef(null)

    const hidePopUpCard = () => {
        setBackToNormalSize(false)
        setTimeout(() => {
            setMovieCard(null)
        }, 200)
    }

    const handleMouseMove = (e) => {

        const popUpCardPos = popUpCard.current.getBoundingClientRect()

        if (!(e.clientX >= popUpCardPos.left && e.clientX <= popUpCardPos.right && e.clientY >= popUpCardPos.top && e.clientY <= popUpCardPos.bottom)) {
            hidePopUpCard()
        }
    }

    useEffect(() => {

        setTimeout(() => {
            setBackToNormalSize(true)
        }, 300);

    }, [])

    useEffect(() => {

        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)

    }, [setBackToNormalSize])



    return (
        <div
            className="w-[27rem] absolute z-20 rounded-[6px]"
            style={{
                left: movieCard.left + "px",
                boxShadow: "0 0 10px black",
                opacity: backToNormalSize ? 1 : 0,
                transform: backToNormalSize ? `scale(1) translate(${movieCard.translateValueX}, ${movieCard.translateValueY})` : "scale(0.71)",
                transition: "opacity 150ms ease-in, transform 500ms ease"
            }}
            onMouseLeave={hidePopUpCard}
            ref={popUpCard}
        >
            <Backdrop content={movieCard} rounded={`rounded-t-[6px]`} />

            <div className="bg-[#181818] rounded-b-[6px] px-5 pt-[0.7rem] pb-[1.1rem] relative flex flex-col gap-[0.65rem] ">

                <div className="flex items-center gap-2 w-full py-2">

                    <div className="rounded-full bg-white w-[3rem] flex justify-center items-center aspect-square hover:bg-neutral-300 transition-all duration-75 ease-linear cursor-pointer">
                        <Play width={"1.7em"} height={"1.7em"} />
                    </div>

                    <div
                        className="rounded-full w-[3.1rem] flex justify-center items-center aspect-square border-neutral-500 border-[2px] hover:border-neutral-200 transition-all duration-75 ease-linear bg-[#202020] hover:bg-[#303030] cursor-pointer "

                        onMouseEnter={() => setTooltip({
                            text: (isAdded) ? "Added" : "Add to My List",
                            left: (isAdded) ? `left-[2.8rem]` : `left-[0.5rem]`
                        })}

                        onMouseLeave={() => setTooltip(false)}

                        onClick={(e) => {

                            if (!isAdded) {
                                setIsAdded(true)
                                setTooltip({ text: "Added", left: `left-[2.8rem]` })

                                const element = e.currentTarget
                                element.style.borderWidth = "4px"
                                element.style.borderColor = "white"

                                setTimeout(() => {
                                    element.style.borderWidth = "2px"
                                    element.style.borderColor = "#737373"
                                }, 5000);
                            }

                        }}
                    >
                        {(isAdded) ? <Tick color="white" width="1.6rem" height="1.6rem" /> : <Plus />}
                    </div>

                    <div
                        className="rounded-full w-[3.1rem] flex justify-center items-center aspect-square border-neutral-500 border-[2px] hover:border-neutral-200 transition-all duration-75 ease-linear bg-[#202020] hover:bg-[#303030] cursor-pointer"
                        onMouseEnter={() => setShowThumbs(true)}
                    >
                        {
                            (() => {
                                if (isDisliked) return <DislikeFilled width="1.6em" height="1.6em" />
                                if (isDbLiked) return <DoubleLikeFilled />
                                if (isLiked) return <LikeFilled />
                                else return <Like />
                            })()
                        }
                    </div>

                    <div
                        className="ml-auto rounded-full w-[3.1rem] flex justify-center items-center aspect-square border-neutral-500 border-[2px] hover:border-neutral-200 transition-all duration-75 ease-linear bg-[#202020] hover:bg-[#303030] cursor-pointer"
                    >
                        <ArrowDown />
                    </div>

                    {
                        (tooltip) && <Tooltip text={tooltip.text} left={tooltip.left} />
                    }
                    {
                        (showThumbs) && <Thumbs
                            setShowThumbs={setShowThumbs}
                            setTooltip={setTooltip}
                            isLiked={isLiked}
                            isDisliked={isDisliked}
                            isDbLiked={isDbLiked}
                            setIsLiked={setIsLiked}
                            setIsDisliked={setIsDisliked}
                            setIsDbLiked={setIsDbLiked}
                        />
                    }

                </div>

                <div className="flex items-center gap-2">
                    <p className="text-[#57c374] font-medium">{match.current + "% Match"}</p>
                    <p className="border-[1px] border-neutral-500 font-medium text-[#aeaeae] px-2">{movieCard.ageRating}</p>
                    <p className="font-medium text-[#aeaeae]">
                        {
                            (movieCard.type == "show") ? movieCard.totalSeasons + " Seasons" : `${Math.floor(movieCard.runtime / 60)}h ${movieCard.runtime % 60}m`
                        }
                    </p>
                    <p className="border-[1px] border-neutral-500 rounded-[4px] text-[0.70rem] text-neutral-300 font-semibold px-[0.30rem] mt-[2px]">HD</p>
                </div>
                <div>
                    <ul className="flex no-underline flex-row items-center gap-3">

                        {
                            movieCard.keywords.map((keyword, index) => {
                                return (
                                    <li className="flex items-center gap-3">
                                        {
                                            (index != 0) && <p className="text-3xl text-neutral-600">•</p>
                                        }
                                        <p className="font-semibold text-neutral-100 capitalize">{keyword}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                {
                    (movieCard.isMostLiked) && <div className="flex items-center gap-2">
                        <div className="bg-[#e50914f7] px-[0.30rem] py-[0.30rem] rounded-sm flex justify-center items-center">
                            <LikeFilled width="0.9em" height="0.9em" />
                        </div>
                        <p className="text-neutral-100 font-semibold">Most Liked</p>
                    </div>
                }
            </div>
        </div>
    )
}