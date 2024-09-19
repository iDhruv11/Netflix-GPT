import { useParams } from "react-router-dom"
import { HeaderMini } from "./HeaderMini";
import { SaveBtn } from "../Buttons/SaveBtn";
import { DeleteBtn } from "../Buttons/DeleteBtn";
import { useRef } from "react";
import { AvatarURL } from "../utils/AvatarURL";

export const EditProfile = () => {

    const { profileId } = useParams();
    const pfpURL = useRef(AvatarURL);
    
    return (
        <div className="absolute w-full h-screen bg-[#141414] overflow-y-hidden pt-28 ">
            <HeaderMini showLogo={true}/>            
            <div className="w-1/3 bg-gray-500 flex flex-col">
                <h1 className="text-5xl text-white font-semibold">Edit Profile</h1>
                <div>
                    <div>
                        <img src={pfpURL.current[Math.floor(profileId/100)].avatars[profileId].src} />
                    </div>
                    <div></div>
                </div>
                <div>
                    <div>
                        <SaveBtn />
                    </div>
                    <div>
                        <DeleteBtn />
                    </div>
                    <div>
                        <DeleteBtn />      
                    </div>
                </div>
            </div>
        </div>
    )
}