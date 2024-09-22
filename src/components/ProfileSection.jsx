import { useEffect, useRef, useState } from "react";
import kidsPfp from '../img/kids.png'
import { Add } from "../utils/Icons";
import { AddProfile } from "./AddProfile";
import { useDispatch, useSelector } from "react-redux";
import { ProfileAvatar } from "./ProfileAvatar";
import { LimitExceed } from "./LimitExceed";
import { AvatarSection } from "./AvatarSection";
import { HeaderMini } from "./HeaderMini";
import { AvatarURL } from "../utils/AvatarURL";
import { ManageBtn } from "../Buttons/ManageBtn";
import { DoneBtn } from "../Buttons/DoneBtn";

export const ProfileSection = () => {

    const [showAddPopup, setShowAddPopup] = useState(false);
    const [backToNormalSize, setBackToNormalSize] = useState(false);
    const [showLimitExceeded, setShowLimitExceeded] = useState(false);
    const [showAvatars, setShowAvatars] = useState(false);
    const [beingEdited, setBeingEdited] = useState(false);
    const [nextPfp, setNextPfp] = useState(
        {
            id: null,
            src: null,
        }
    )
    const users = useSelector( (store) => store.profiles );
    useEffect( () => {
        setTimeout(() => {            
            setBackToNormalSize(true);
        }, 300);

    }, [])

    const displayPopUp = () => {

        if(users.length >= 6){
            setShowLimitExceeded(true)
            return
        }

        setShowAddPopup(true);
        setBackToNormalSize(false);

    }    

    return (
        <div className={`h-[100vh] w-full flex justify-center items-center ${ (showAddPopup) ? `bg-[#000000fa]` : `bg-[#141414] `} overflow-x-hidden overflow-y-hidden`}>
            {/* header gradient */}
            <HeaderMini showLogo={false}/>
            {/* Hero Profile Section */}
            <div className={`inline-flex flex-col items-center gap-14 ${ (backToNormalSize) ? `scale-100 opacity-100` : `scale-125 opacity-0` } transition-all duration-300 ease-linear`}>

                {/* Hero Title */}
                <h1 className="text-white text-7xl font-semibold flex-wrap">Who's watching?</h1>

                {/* Profile Container */}
                <div className="flex w-8/12 gap-10 justify-center items-center ">             
                   
                    {
                        users.map( (user, index) => <ProfileAvatar name = {user.name} photoURL = {user.photoURL} beingEdited={beingEdited} index={index}/>)
                    }


                    {/* Add Profile Button  */}
                    <div
                        className="flex flex-col justify-center items-center group w-[25%] gap-5"
                        onClick={ displayPopUp }
                    >
                        <div className="group-hover:bg-slate-200 hover:cursor-pointer rounded-md w-full flex justify-center items-center aspect-square">
                            <Add />
                        </div>
                        <p className="text-center text-[#808080] font-medium tracking-wide text-2xl mt-auto group-hover:text-white group-hover:cursor-pointer">Add Profile</p>
                    </div>

                </div>

                {/* Manage Profiles Button */}
                <div onClick={ () => setBeingEdited(!beingEdited) }>
                 {
                    (beingEdited) ? <DoneBtn /> : <ManageBtn />
                 }
                </div>

            </div>
            
            {/* Popup to add a new profile  */}
            {
                ( showAddPopup ) && <AddProfile setShowAddPopup = {setShowAddPopup} setBackToNormalSize = {setBackToNormalSize} setShowAvatars={setShowAvatars} nextPfp={nextPfp} setNextPfp={setNextPfp} />
            }
            {/* Profile Limit Exceeded Popup */}
            {
                ( showLimitExceeded )  && <LimitExceed setShowLimitExceeded = {setShowLimitExceeded} /> 
            }
            {/* Profile Avatars Sections  */}
            {
                (showAvatars) && <AvatarSection setShowAvatars = { setShowAvatars } nextPfp = {nextPfp} setNextPfp={setNextPfp} />
            }
        </div>
    )
}