import { useEffect, useState } from "react"

export const Backdrop = ({ number = null, sliderScrolled = null, content, rounded=`rounded-[4px]` }) => {

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

    return (
        <div className={`w-full aspect-video relative ${(() => {
                if (number != null) {
                    return number == 0 && !sliderScrolled ? `pl-16` : `pl-0`
                }
            })()
            }`}>

            <img src={content?.backdrop?.image} className={`w-full h-full object-cover ${rounded} `} />

            <div>
                
            </div>

            <div className={`w-full h-full absolute top-0 left-0 ${rounded} ${
                    (() => {

                        if (number != null) {
                            return (!sliderScrolled && number == 0) ? `hidden` : ``
                        }
                    
                    })()
                }
                `}>

                {
                    (() => {

                        if (logo && !content.backdrop.isLogoIncluded) {

                            return <img
                                src={logo.src}
                                alt="logo"
                                className={`${logo.width} absolute bottom-2 left-4`}
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
    )
}