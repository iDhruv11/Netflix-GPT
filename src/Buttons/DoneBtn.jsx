import { useEffect, useState } from "react"

export const DoneBtn = () => {

    const [backToNormalSize, setBackToNormalSize] = useState(false)
    useEffect( ()=>{
        setTimeout(() => {
            setBackToNormalSize(true);
        }, 500);
    }, [])
    return (
        <button className={`text-black bg-white rounded-sm text-base font-extrabold tracking-wide px-10 py-2 hover:cursor-pointer hover:bg-neutral-300 transition-all duration-200 ease-linear mt-5 ${ backToNormalSize ? `scale-100 opacity-100` : `scale-110 opacity-0`} transition-all duration-200 ease-linear`}> 
            DONE
        </button>
    )
}