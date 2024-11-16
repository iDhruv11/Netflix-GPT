import { useState } from "react"
import { Dislike, DislikeFilled, DoubleLike, DoubleLikeFilled, Like, LikeFilled } from "../utils/Icons"
import { useEffect } from "react"
import { useRef } from "react"

export const Thumbs = ({ setShowThumbs, setTooltip, isLiked, isDbLiked, isDisliked, setIsDbLiked, setIsLiked, setIsDisliked }) => {

    console.log(isLiked, isDbLiked, isDisliked)
    const [backToNormalSize, setBackToNormalSize] = useState(false)
    const timeoutId = useRef(null)
    useEffect(() => {
        requestAnimationFrame(() => setBackToNormalSize(true))
    }, [])

    return (
        
        <div
            className={`absolute flex left-[4.5rem] justify-center items-center bg-neutral-800 px-3 py-2 rounded-full gap-2 ${(backToNormalSize) ? `scale-100 opacity-100` : `scale-95 opacity-0`} transition-all duration-300 ease-linear`}
            style={{
                boxShadow: "0 -5px 15px rgba(0, 0, 0, 0.5), 0 5px 10px rgba(0, 0, 0, 0.3)"
            }}
            onMouseEnter={() => {
                clearTimeout(timeoutId.current)
            }}
            onMouseLeave={() => {

                timeoutId.current = setTimeout(() => {

                    setBackToNormalSize(false)
                    setTimeout(() => {
                        setShowThumbs(false)
                    }, 500)

                }, 500);
            }}
        >

            <div
                className={`w-[2.8rem] flex justify-center items-center rounded-full aspect-square bg-neural hover:bg-neutral-700 ${backToNormalSize ? `translate-x-0 opacity-100` : `translate-x-14 opacity-0`} transition-transform duration-300 ease-linear`}
                onMouseEnter={ () => setTooltip({ text: "I Dislike this", left: `left-7`})}
                onMouseLeave={ () => setTooltip(false)}
                onClick={ () => {
                    setIsDisliked(!isDisliked)
                    setIsLiked(false)
                    setIsDbLiked(false)
                }}
                >
                {
                    (isDisliked) ? <DislikeFilled /> : <Dislike />
                }
            </div>

            <div
                className={`w-[2.8rem] flex justify-center items-center rounded-full aspect-square bg-neural hover:bg-neutral-700  transition-transform duration-300 ease-linear ${backToNormalSize ? `opacity-100` : `opacity-0`}`}
                onMouseEnter={ () => setTooltip({ text: "I Like this", left: `left-[5.8rem]`})}
                onMouseLeave={ () => setTooltip(false)}
                onClick={ (e) => {
                   setIsLiked(!isLiked)
                   setIsDisliked(false)
                }}
            >
                {
                    (isLiked) ? <LikeFilled /> : <Like width="1.6em" height="1.6em" />
                }
            </div>
                

            <div
                className={`w-[2.8rem] flex justify-center items-center rounded-full aspect-square bg-neural hover:bg-neutral-700 ${backToNormalSize ? `translate-x-0 opacity-100` : `-translate-x-12 opacity-0`} transition-transform duration-300 ease-linear`}
                onMouseEnter={ () => setTooltip({ text: "Love this!", left: `left-[8.9rem]`})}
                onMouseLeave={ () => setTooltip(false)}
                onClick={ () => {
                    setIsDbLiked(!isDbLiked)
                    setIsDisliked(false)
                }}
            >
                {
                    (isDbLiked) ? <DoubleLikeFilled /> : <DoubleLike width="1.7em" height="1.7em" />
                }
            </div>

        </div>
    )
}