import { Greater } from "../utils/Icons"

export const PrevBtn = ({onClick, setSliderScrolled}) => {

    return (
        <div
            className="absolute top-0 right-0 opacity-0 bg-[#00000063] hover:bg-[#00000098] group-hover:opacity-100 group-hover:cursor-pointer flex items-center z-50 h-full transition-all duration-150 ease-linear"
            onClick={()=>{
                onClick()
                setSliderScrolled(true)
            }}
            >
            <Greater />
        </div>
    )
}