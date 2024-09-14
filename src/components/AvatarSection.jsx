import { useState } from "react"
import { LeftArrow, Logo } from "../utils/Icons";

export const AvatarSection = ({ setShowAvatars }) => {

    const [backToNormalSize, setBackToNormalSize] = useState(false);

    return (
        <div className="absolute w-full min-h-screen bg-[#141414]">
            <div className="bg-gradient-to-b from-black to-transparent w-full h-[8vh] px-20 fixed">
                <div className="pt-6"><Logo /></div>
            </div>
            <div className="w-[70%] min-h-screen mx-auto pt-28">
                <div className="w-full flex justify-between">
                    <div className="flex items-center gap-4">
                        <div
                            onClick={ () => setShowAvatars(false) }
                            className="h-full flex items-center hover:bg-neutral-800 rounded-sm transition-all duration-200 ease-linear"
                        >
                            <LeftArrow />
                        </div>
                        <div className="flex flex-col gap-0">
                            <p className="text-white font-bold text-[2.35rem]">Edit Profile</p>
                            <p className="text-white font-bold text-3xl">Choose a profile icon.</p>
                        </div>
                    </div>
                    <div>
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}