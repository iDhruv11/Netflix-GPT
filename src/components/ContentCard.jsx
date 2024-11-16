import { useEffect, useRef } from "react"
import { Backdrop } from "./Backdrop"

export const ContentCard = ({ content, isTrending = false, number, sliderScrolled, setMovieCard, movieCard }) => {

    const timeoutId = useRef(false)

    const getTranslateValue = (element) => {

        let translateValue = -100
        // console.log(element.getBoundingClientRect().top)
        // console.log(element.getBoundingClientRect().bottom)
        if(element.getBoundingClientRect().top >= 230 && element.getBoundingClientRect().top < 660){
            return translateValue + "px"
        }
        else if(element.getBoundingClientRect().top < 230){
            translateValue = translateValue + (230 - element.getBoundingClientRect().top)
            return Math.floor(translateValue) - 10 + "px"
        }
        else {
            translateValue = translateValue - (element.getBoundingClientRect().top - 650 )
            return Math.floor(translateValue) + "px"
        }
    }
    
    return (isTrending)

        ? <div
            className={`relative w-72 bg-no-repeat bg-left-top ${number} trending ${sliderScrolled ? `ml-0` : `ml-14`}`}
        >
            <div className={`w-6/12 relative ml-32`}>
                <img
                    src={content.poster.image}
                    alt=""
                    className="w-full rounded-md"
                />
                {
                    (content.year == new Date().getFullYear().toString() && Number(content.month) >= (new Date().getMonth() + 1) - 2)
                    && <div className="absolute top-0 left-0 flex items-end w-full h-full ">
                        <p className=" mx-auto bg-[#e50914] rounded-t-md px-2 text-white text-[0.840rem] font-medium tracking-wide">Recently added</p>
                    </div>

                }
            </div>
        </div>

        : <div
            className="w-[19.3rem] rounded-[4px]"
            onMouseEnter={(e) => {

                const left = Math.trunc(e.target.getBoundingClientRect().left - 62)
                const translateValueY = getTranslateValue(e.target)
                let translateValueX 

                if( e.target.getBoundingClientRect().left < 100 ){
                    translateValueX = Math.trunc(e.target.getBoundingClientRect().left) + "px"
                }
                else if(e.target.getBoundingClientRect().right > 1800){
                    translateValueX =  "-" + (window.innerWidth - Math.trunc(e.target.getBoundingClientRect().right)) + "px"
                }
                else translateValueX = "0"
                    

                if (movieCard) {
                    setTimeout(() => {
                        requestAnimationFrame(() => setMovieCard({ ...content, left, translateValueY, translateValueX }))
                    }, 300);
                } else {
                    requestAnimationFrame(() => setMovieCard({ ...content, left, translateValueY, translateValueX }))
                }

            }}
            onMouseLeave={() => {
                clearTimeout(timeoutId.current)
            }}
        >
            <Backdrop number={number} sliderScrolled={sliderScrolled} content={content} />
        </div>
}