import { useEffect, useState } from "react";
import { Cross } from "../utils/Icons"

export const LimitExceed = ({ setShowLimitExceeded }) => {

    const [backToNormalSize, setBackToNormalSize] = useState(false);
    useEffect( () => {
        setBackToNormalSize(true);
    }, [])
    return (
        <div className={`absolute bg-neutral-800 w-2/5 rounded-sm px-10 pb-8 pt-16 flex flex-col gap-3 transition-all duration-150 ease-linear ${ (backToNormalSize) ? `opacity-100 scale-100 ` : `opacity-0 scale-110 `  }`}>
            <h1 className="font-bold text-white text-3xl text-center tracking-wide">You have reached the maximum profiles that can be associated with your account. </h1>
            <p className="text-white text-xl text-center font-normal">Upgrade your plan to add more profiles.</p>
            <button className="bg-white text-black px-3 py-2 font-extrabold text-lg tracking-wide mt-6 w-[100%] hover:bg-[#bababa] transition-all duration-150 ease-linear">Upgrade Plan</button>
            <div 
                className="absolute rounded-full px-1 py-1 hover:bg-neutral-600 hover:cursor-pointer transition-all duration-100 ease-linear top-3 right-4"
                onClick={ 
                    () => {
                        setBackToNormalSize(false);
                        setTimeout(() => {
                            setShowLimitExceeded(false);
                        }, 200)
                    }
                }    
            ><Cross /></div>
        </div>
    )
}