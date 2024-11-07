import { useState, useEffect } from "react"
import { Backdrop } from "./Backdrop"

export const ContentCard = ({ content, isTrending = false, number, sliderScrolled }) => {

    const [logo, setLogo] = useState(null)

    useEffect(() => {

        if (content.logo) {
            const logo = new Image()
            logo.src = content.logo.image
            logo.onload = () => {

                const aspectRatio = logo.naturalWidth / logo.naturalHeight

                if (aspectRatio >= 1.75) {
                    setLogo({
                        src: logo.src,
                        width: `w-8/12`
                    })
                }
                else if (aspectRatio >= 1.20 && aspectRatio < 1.75) {
                    setLogo({
                        src: logo.src,
                        width: `w-4/12`
                    })
                }
                else {
                    setLogo({
                        src: logo.src,
                        width: `w-3/12`
                    })
                }
            }
        }
        else {
            setLogo(false)
        }
    }, [])

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

        : <Backdrop number={number} sliderScrolled={sliderScrolled} content={content}/>
}