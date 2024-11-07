export const Backdrop = ({ number=null, sliderScrolled=null, content}) => {
    return (

        // <div className={`w-[19.3rem] aspect-video relative ${number == 0 && !sliderScrolled ? `pl-16` : `pl-0`}`}>
        <div className={`w-[19.3rem] aspect-video relative ${
            (()=>{
                if(number != null ){
                    return number == 0 && !sliderScrolled ? `pl-16` : `pl-0`
                }
            })()
        }`}>

            <img src={content?.backdrop?.image} className="w-full h-full object-cover rounded-[4px]" />

            {/* <div className={`w-full h-full absolute top-0 left-0 rounded-[4px] ${(!sliderScrolled && number == 0) && `hidden`}`}> */}
            <div className={`w-full h-full absolute top-0 left-0 rounded-[4px] ${
                (() => {
                    if(number != null){
                        return (!sliderScrolled && number == 0) ? `hidden` : ``
                    }
                })()
            }`}>

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
    )
}