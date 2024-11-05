import Slider from "react-slick"
import { ContentCard } from "./ContentCard"
import { PrevBtn } from "./PrevBtn"
import { NextBtn } from "./NextBtn"
import { useState } from "react"
import { Explore } from "../utils/Icons"
import { useRef } from "react"
import { useEffect } from "react"

export const Section = ({ sectionData, page }) => {

    console.log(sectionData.title, sectionData.movies.length, sectionData.shows.length)
    const [content, setContent] = useState([])
    const [sliderScrolled, setSliderScrolled] = useState(false)
    const [titleHovered, setTitleHovered] = useState(false)
    const timeoutId = useRef(null)

    const title = (page == "home")
        ? "title"
        : (page == "movies")
            ? "movieTitle"
            : "showTitle"

    const shuffle = (content) => {

        const tempContent = [...content]
        let mainContent = []
        let index

        while (tempContent.length) {
            let index = Math.floor(Math.random() * tempContent.length)
            mainContent.push(tempContent[index])
            tempContent.splice(index, 1)
        }

        return mainContent
    }


    useEffect(() => {

        let orderedContent
        if (page == "home") {

            if (sectionData.movies.length == 0 || sectionData.shows.length == 0) {

                orderedContent = [
                    ...shuffle(sectionData.movies),
                    ...shuffle(sectionData.shows)
                ]
            } else {
                orderedContent = [
                    ...shuffle([...sectionData.movies.slice(0, 6), ...sectionData.shows.slice(0, 6)]),
                    ...shuffle([...sectionData.movies.slice(6), ...sectionData.shows.slice(6)])
                ]
            }

        }
        else if (page == "movies") {
            orderedContent = sectionData.movies
        }
        else {
            orderedContent = sectionData.shows
        }
        orderedContent = orderedContent.slice(0, 14)
        setContent(orderedContent)

    }, [])

    return (
        <div className="flex flex-col gap-2 group hover:cursor-pointer">

            <div
                className={`text-neutral-200 text-[1.7rem] font-medium flex items-center ${titleHovered ? `gap-6` : `gap-0`} self-start ml-14`}
                onMouseEnter={() => {

                    clearTimeout(timeoutId.current)
                    timeoutId.current = setTimeout(() => setTitleHovered(true), 400)

                }}
                onMouseLeave={() => {

                    clearTimeout(timeoutId.current)
                    timeoutId.current = setTimeout(() => setTitleHovered(false), 400)

                }}
            >

                <p className="text-shadow">{sectionData[title]}</p>

                <div className="flex items-center gap-1 self-end mb-[2px]">

                    <p className={`text-[#26cbce] text-xl -mr-1 ${titleHovered ? `translate-x-0 opacity-100` : `-translate-x-3 absolute opacity-0`} hover:text-[#2ea2a4] duration-200 ease-linear transition-all text-shadow`}>Explore All</p>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-linear">
                        <Explore />
                    </div>

                </div>

            </div>

            <div
                className="w-full"
            >
                <Slider
                    dots={false}
                    infinite={true}
                    speed={1000}
                    draggable={false}
                    slidesToShow={6.05}
                    slidesToScroll={4}
                    nextArrow={<PrevBtn setSliderScrolled={setSliderScrolled}/>}
                    prevArrow={(sliderScrolled) ? <NextBtn /> : <></>}
                >
                    {
                        content.map((content, index) => <ContentCard content={content} number={index} sliderScrolled={sliderScrolled} />)
                    }

                </Slider>
            </div>
        </div>
    )
}