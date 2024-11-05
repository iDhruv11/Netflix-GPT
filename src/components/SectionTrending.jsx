import Slider from "react-slick"
import { ContentCard } from "./ContentCard"
import { PrevBtn } from "./PrevBtn"
import { NextBtn } from "./NextBtn"
import { useState } from "react"
import { Explore } from "../utils/Icons"
import { useRef } from "react"
import { useEffect } from "react"

export const SectionTrending = ({ content, page }) => {

    // const [content, setContent] = useState([])
    const [sliderScrolled, setSliderScrolled] = useState(false)
    // const [titleHovered, setTitleHovered] = useState(false)
    // const timeoutId = useRef(null)

    // const title = (page == "home")
    //     ? "title"
    //     : (page == "movies")
    //         ? "movieTitle"
    //         : "showTitle"

    // const shuffle = (content) => {

    //     const tempContent = [...content]
    //     let mainContent = []
    //     let index

    //     while (tempContent.length) {
    //         let index = Math.floor(Math.random() * tempContent.length)
    //         mainContent.push(tempContent[index])
    //         tempContent.splice(index, 1)
    //     }

    //     return mainContent
    // }


    // useEffect(() => {

    //     let orderedContent
    //     if (page == "home") {

    //         if (sectionData.movies.length == 0 || sectionData.shows.length == 0) {

    //             orderedContent = [
    //                 ...shuffle(sectionData.movies),
    //                 ...shuffle(sectionData.shows)
    //             ]
    //         } else {
    //             orderedContent = [
    //                 ...shuffle([...sectionData.movies.slice(0, 6), ...sectionData.shows.slice(0, 6)]),
    //                 ...shuffle([...sectionData.movies.slice(6), ...sectionData.shows.slice(6)])
    //             ]
    //         }

    //     }
    //     else if (page == "movies") {
    //         orderedContent = sectionData.movies
    //     }
    //     else {
    //         orderedContent = sectionData.shows
    //     }
    //     orderedContent = orderedContent.slice(0, 14)
    //     setContent(orderedContent)

    // }, [])

    const numbers = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]

    return (
        <div className="flex flex-col gap-3 group hover:cursor-pointer">

            <p className={`text-neutral-200 text-[1.7rem] font-medium text-shadow self-start ml-14`}>{`Top 10 ${page} in India Today`} </p>

            <div className="w-full">
                <Slider
                    dots={false}
                    infinite={true}
                    speed={1000}
                    draggable={false}
                    slidesToShow={6.05}
                    slidesToScroll={4}
                    nextArrow={<PrevBtn setSliderScrolled={setSliderScrolled} />}
                    prevArrow={(sliderScrolled) ? <NextBtn /> : <></>}
                >

                    {
                        content.map((content, index) => <ContentCard content={content} isTrending={true} number={numbers[index]}/>)
                    }

                </Slider>
            </div>
        </div>
    )
}