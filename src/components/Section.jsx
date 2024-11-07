import Slider from "react-slick"
import { ContentCard } from "./ContentCard"
import { PrevBtn } from "./PrevBtn"
import { NextBtn } from "./NextBtn"
import { useState } from "react"
import { Explore } from "../utils/Icons"
import { useRef } from "react"
import { useEffect } from "react"

export const Section = ({ sectionData, page, section }) => {

    console.log(sectionData.title, sectionData.movies.length, sectionData.shows.length)
    const [content, setContent] = useState([])
    const [sliderScrolled, setSliderScrolled] = useState(false)
    const [titleHovered, setTitleHovered] = useState(false)
    const [movieCard, setMovieCard] = useState({
        type:"movie",
        title:"GoodFellas",
        desc:"The true story of Henry Hill, a half-Irish, half-Sicilian Brooklyn kid who is adopted by neighbourhood gangsters at an early age and climbs the ranks of a Mafia family under the guidance of Jimmy Conw...",
        genres:[
            "Drama",
            "Crime"
        ],
        runtime:145,
        year:"1990",
        isMostLiked:true,
        videos:{
            clip:"Pfcy15ZUE2c",
            trailer:"PTBRNXGQR9Q"
        },
        backdrop:{
            image:"https://image.tmdb.org/t/p/w500/ppF6t3eKHL0e6ggk3P8LhGav4fC.jpg",
            isLogoIncluded:true
        },
        backdropNoLang:"https://image.tmdb.org/t/p/original/7TF4p86ZafnxFuNqWdhpHXFO244.jpg",
        poster:null,
        logo:{
            image:"https://image.tmdb.org/t/p/w500/inwc0dp4lg2YUirexKRYv6qlNU5.png",
            isLogoIncluded:true
        },
        keywords:[
            "prison",
            "florida",
            "new york city"
        ],
        cast:[
            "Robert De Niro",
            "Ray Liotta",
            "Joe Pesci"
        ],
        ageRating:"A-Rated"
    })
    const timeoutId = useRef(null)

    const title = (page == "home" || page == "director")
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
            orderedContent = shuffle(sectionData.movies)
        }
        else if (page == "shows") {
            orderedContent = shuffle(sectionData.shows)
        }
        else orderedContent = sectionData.movies

        orderedContent = orderedContent.slice(0, 14)
        setContent(orderedContent)

    }, [])

    return (
        <div
            className={`flex flex-col gap-[0.6rem] group hover:cursor-pointer ${section} transition-all duration-700 ease-linear`}
        >

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
                        content.map((content, index) => <ContentCard content={content} number={index} sliderScrolled={sliderScrolled} />)
                    }

                </Slider>
            </div>
            <div className="w-[19.3rem] ">
                <div className="w-full aspect-video relative">

                    <img src={movieCard?.backdrop?.image} className="w-full h-full object-cover rounded-[4px]" />

                    <div className="w-full h-full absolute top-0 left-0 rounded-[4px]">

                        {
                            (() => {

                                if (logo && !content.backdrop.isLogoIncluded) {

                                    return <img
                                        src={logo.src}
                                        alt="logo"
                                        className={`${logo.width} absolute ${logo.width == `w-4/12` || logo.width == `w-3/12` ? `bottom-12` : `bottom-2`} left-4`}
                                        style={{ filter: "drop-shadow(0 0 5px rgba(0, 0, 0, 0.9)) drop-shadow(0 0 8px rgba(0, 0, 0, 0.8))" }}
                                    />

                                }
                                if (!content.logo && !content.backdrop.isLogoIncluded) {

                                    return <h1
                                        className={`${(() => {
                                            if (content.title.length <= 5) return `text-[3.6rem]`
                                            if (content.title.length > 5 && content.title.length <= 10) return `text-[3.2rem]`
                                            if (content.title.length > 10 && content.title.length < 18) return `text-[3rem]`
                                            if (content.title.length >= 18) return `text-[2.3rem]`
                                        })()
                                            } text-[#F9C034] font-bold absolute bottom-1 left-4 font-['Theater'] leading-[2.2rem]`}
                                        style={{ textShadow: "5px 5px 8px black" }}
                                    >{content.title}</h1>
                                }
                            })()

                        }
                    </div>
                </div>
            </div>
        </div>
    )
}