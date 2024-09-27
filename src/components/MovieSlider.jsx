import Slider from "react-slick"
import { PrevBtn } from "./PrevBtn"
import { NextBtn } from "./NextBtn"
import { MovieBackdrop } from "./MovieBackdrop"
const MovieSlider = ({ title, movies }) => {
    return (

        <div className="flex flex-col gap-5">
            <h1 className=" text-white text-4xl">{title}</h1>
            <div className="w-full">
                <Slider
                    dots={false}
                    infinite={true}
                    speed={1000}
                    draggable={false}
                    slidesToShow={6.1}
                    slidesToScroll={5}
                    nextArrow={<div className="bg-sky-400"></div>}
                    prevArrow={<div className="bg-sky-400`"></div>}
                >

                    {
                        movies.map(movie => <MovieBackdrop movie={movie} />)
                    }

                </Slider>
            </div>
        </div>
    )
}

export default MovieSlider