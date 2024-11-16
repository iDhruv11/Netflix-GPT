import { useState, useEffect } from "react"
import { ArrowDown } from "../utils/Icons"

export const Tooltip = ({ text, left }) => {

    const [backToNormalSize, setBackToNormalSize] = useState(false)
    useEffect(() => {

        requestAnimationFrame( () => setBackToNormalSize(true)) // will wait for the brower to perform the painting of elemtns on webpage first and will wait for the initial styles to get applied, then only it will update the state ( try state updating without requestAnimationFrame )

    }, [])
    return (

        <div className={`flex flex-col items-center absolute pt-[5px] -top-11 ${ (backToNormalSize) ? `opacity-100 scale-100 translate-y-0` : `opacity-100 scale-75 translate-y-5`} transition-all duration-75 ease-linear ${left}`}>

            <p className="bg-neutral-200 text-[1.35rem] font-medium px-5 rounded-[4px] py-1 text-neutral-900">{text}</p>

            <div className="absolute top-5">
                <ArrowDown fill="#e5e5e5" stroke="e5e5e5" width="3.5em" height="3.5em" />
            </div>

        </div>
    )
}