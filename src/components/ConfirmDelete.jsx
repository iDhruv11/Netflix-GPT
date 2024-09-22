import { useEffect, useState } from "react";
import { Cross } from "../utils/Icons";
import { CancelBtn } from "../Buttons/CancelBtn";

export const ConfirmDelete = ({ setShowConfirm, handleDelete }) => {

    const [backToNormalSize, setBackToNormalSize] = useState(false);

    const handleExit = () => {
        setBackToNormalSize(false);
        setTimeout(() => {
            setShowConfirm(false);
        }, 200)
    }

    useEffect(() => {
        setBackToNormalSize(true);
    }, [])

    return (
        <div className="w-full h-full bg-[#000000d6] flex items-center justify-center absolute top-0 left-0">

            <div className={`absolute bg-neutral-800 rounded-sm px-10 pb-8 pt-16 flex flex-col gap-3 transition-all duration-200 ease-linear ${(backToNormalSize) ? `opacity-100 scale-100 ` : `opacity-0 scale-110 `}`}>

                <h1 className="font-bold text-white text-3xl text-center tracking-wide mt-1">Do you wish to Proceed ?</h1>
                <p className="text-white text-xl text-center font-normal -mt-1">This will permanently delete your profile and all the data.</p>

                <div className="flex gap-4 items-center self-end mt-7">

                    <button
                        className="bg-white text-black px-8 py-2 font-extrabold text-xl tracking-wide hover:bg-[#bababa] transition-all duration-150 ease-linear rounded-sm "
                        onClick={ handleDelete }    
                    >Delete</button>

                    <button
                        className=" ring-2 ring-neutral-500 ring-inset px-8 py-2 font-extrabold text-xl tracking-wide text-neutral-500 hover:text-neutral-300 hover:ring-neutral-300 rounded-sm"
                        onClick={ handleExit }    
                    >Cancel</button>
                </div>

                <div
                    className="absolute rounded-full px-1 py-1 hover:bg-neutral-600 hover:cursor-pointer transition-all duration-100 ease-linear top-3 right-4"
                    onClick={ handleExit }
                ><Cross /></div>
            </div>
        </div>
    )
}