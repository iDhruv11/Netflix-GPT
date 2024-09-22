import { useEffect, useState } from "react";

export const ManageBtn = () => {

    const [backToNormalSize, setBackToNormalSize] = useState(false)
    useEffect( ()=>{
        setTimeout(() => {
            setBackToNormalSize(true);
        }, 500);
    }, [])

    return (
        <button
            className={`border-[#808080] border-[1px] text-[#808080] text-[1.45em] font-semibold tracking-widest px-8 py-3 hover:border-white hover:text-white hover:cursor-pointer ${ backToNormalSize ? `opacity-100 scale-100` : `opacity-0 scale-110` } transition-all duration-200 ease-linear`}
            onClick={() => setBeingEdited(true)}
        >
            Manage Profiles
        </button>
    )
}