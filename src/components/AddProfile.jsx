import { useEffect, useRef, useState } from "react"
import { Cross, Edit, ErrorIcon } from "../utils/Icons";

export const AddProfile = ({ setShowAddPopup, setBackToNormalSize, users, setUsers, pfpURL, setShowAvatars, nextPfp, setNextPfp}) => {

    const [isFocused, setIsFocused] = useState(false);
    const [showError, setShowError] = useState(false);
    
    const newName = useRef();
    const isKidsType = useRef();

    useEffect(() => {

        for( let i = 0; i < pfpURL.current[0].avatars.length; i++){
            if(pfpURL.current[0].avatars[i].isSelected == false){
                setNextPfp(
                    {
                        id: pfpURL.current[0].avatars[i].id,
                        src: pfpURL.current[0].avatars[i].src,
                    }
                );
                break;
            }
        }

    }, [])

    const handleAddProfile = () => {
        if (!newName.current.value) {
            setShowError(true);
            return
        }
        setShowError(false);
        setUsers([
            ...users,
            {
                name: newName.current.value,
                photoURL: nextPfp.src,
                type: (isKidsType.current.checked) ? 'children' : 'adult'
            }
        ])
        console.log(nextPfp.id/100);
        pfpURL.current[Math.floor((nextPfp.id)/100)].avatars[(Math.floor(nextPfp.id)%100)].isSelected = true;
        setShowAddPopup(false)
        setBackToNormalSize(true);
    }

    const handlePfpEdit = () => {
        
        setShowAvatars(true);
        
    }
    return (
        <div className="absolute bg-[#161616] border border-neutral-600 flex flex-col w-4/12 px-9 pb-10 pt-20 items-center rounded-md gap-8">
            {/* cross icon  */}
            <div
                className="absolute rounded-full px-1 py-1 hover:bg-neutral-600 hover:cursor-pointer transition-all duration-100 ease-linear top-3 right-4"
                onClick={() => {
                    setShowAddPopup(false);
                    setBackToNormalSize(true);
                }}
            >
                <Cross />
            </div>
            {/* heading */}
            <div className="flex flex-col w-full text-center">
                <h2 className="text-3xl text-white font-extrabold tracking-wide">Add a profile</h2>
                <p className="text-base text-white font-semibold tracking-wide">Add a profile for another person while watching Netflix.</p>
            </div>
            {/* name input */}
            <div className="flex items-center gap-5 w-full">
                <div className="w-20 object-cover relative group">
                    <img
                        className="rounded-md"
                        src={ nextPfp.src }
                    />
                    <div
                        className="w-full aspect-square bg-[#191818c0] absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-all duration-150 ease-linear flex items-center justify-center hover:cursor-pointer"
                        onClick={ handlePfpEdit }

                    >
                        <Edit />
                    </div>
                </div>
                <div className="relative w-full">
                    <div>
                        <input
                            type="text"
                            className="bg-transparent border-neutral-600 border rounded-sm px-3 pb-2 pt-5 font-semibold w-full text-white"
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => {
                                (newName.current.value) ? null : setIsFocused(false);
                            }}
                            ref={newName}
                        />
                        {
                            (showError) ? (
                                <p className="flex items-center gap-1 text-[#cb3d36] font-semibold absolute mt-1 text-sm">
                                    <ErrorIcon /><span> Name can't be empty </span>
                                </p>
                            ) : null
                        }
                    </div>
                    <p
                        className={`absolute text-neutral-400 font-semibold ${(isFocused) ? `top-1 text-[0.80rem]` : `top-[0.85rem] `} left-3 transition-all duration-100 ease-linear`}
                    >Name</p>
                </div>
            </div>
            {/* horizontal line */}
            <hr className="w-full border-neutral-600" size="1px" />
            {/* children switch */}
            <div className="flex items-center justify-between w-full text-white">
                <div className="flex flex-col mt-3">
                    <h3 className="text-white font-semibold text-lg tracking-wide">Children's Profile</h3>
                    <p className="text-neutral-400 font-semibold text-base">Only see kid-friendly TV Shows and movies</p>
                </div>
                <div className="pt-5">
                    <label class="inline-flex items-center mb-5 cursor-pointer">
                        <input
                            type="checkbox"
                            value=""
                            class="sr-only peer"
                            ref={isKidsType}
                        />
                        <div class="relative w-12 h-7 bg-[#737373] peer-focus:outline-none rounded-full peer dark:bg-[#737373] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#4061e7]"></div>
                    </label>
                </div>
            </div>
            {/* button section  */}
            <div className="w-full flex flex-col gap-3 mt-5">
                <button
                    className="bg-white text-lg font-bold tracking-wide py-2 rounded-sm hover:bg-[#bababa] transition-all duration-100 ease-linear"
                    onClick={handleAddProfile}
                >Save</button>
                <button className="text-lg font-bold tracking-wide py-2 rounded-sm text-white hover:bg-neutral-600 transition-all duration-100 ease-linear">Cancel</button>
            </div>
        </div>
    )
}