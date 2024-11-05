
export const ContentCard = ({ content, isTrending = false, number, sliderScrolled }) => {

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
        : <div className={`w-[19.3rem] rounded-md aspect-video ${number == 0 && !sliderScrolled ? `pl-16` : `pl-0` }`}>
            <img src={content?.backdrop?.image} className="w-full h-full object-cover rounded-[4px]" />
        </div >
}