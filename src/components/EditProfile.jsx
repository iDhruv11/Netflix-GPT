import { useNavigate, useParams } from "react-router-dom"
import { HeaderMini } from "./HeaderMini";
import { SaveBtn } from "../Buttons/SaveBtn";
import { DeleteBtn } from "../Buttons/DeleteBtn";
import { CancelBtn } from "../Buttons/CancelBtn";
import { Checkbox } from "../Buttons/Checkbox";
import { Edit, ErrorIcon } from "../utils/Icons";
import { useDispatch, useSelector } from "react-redux";
import { AvatarSection } from "./AvatarSection";
import { useEffect, useRef, useState } from "react";
import { deleteProfile, editProfile } from "../utils/profileSlice";
import { changeIsSelected } from "../utils/avatarSlice";
import { ConfirmDelete } from "./ConfirmDelete";
import { verifyName } from "../utils/verifyName";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebaseConfig";

export const EditProfile = () => {

    const { profileIndex } = useParams();
    const newName = useRef(null);
    const pfpURL = useSelector( store => store.avatars );
    const users = useSelector(store => store.profiles );
    const [showAvatars, setShowAvatars] = useState(false);
    const [backToNormalSize, setBackToNormalSize] = useState(false);
    const [showError, setShowError] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [nextPfp, setNextPfp] = useState({
        id: users[profileIndex].photoID,
        src: users[profileIndex].photoURL,
    });
    const dispatcher = useDispatch();
    const navigate = useNavigate();
    useEffect( () => {
        setTimeout(() => {
            setBackToNormalSize(true);
        }, 300);
    }, [])
    const handleSave = () => {

        setShowError(false)
        const prevPhotoId = users[profileIndex].photoID;
        if( verifyName(users, newName.current.value, profileIndex)){
            setShowError(true);
            return ;
        } 

        dispatcher(editProfile({
            index: profileIndex,
            name: newName.current.value,
            photoURL: nextPfp.src,
            photoID: nextPfp.id,
        }))

        handleExit();

        dispatcher(changeIsSelected({
            id: prevPhotoId,
            setSelected: false,
        }))

        dispatcher(changeIsSelected({
            id: nextPfp.id,
            setSelected: true,
        }))

        if(auth.currentUser.displayName == newName.current.value && auth.currentUser.photoURL == nextPfp.src){
            return 
        }

        updateProfile(auth.currentUser, {
            displayName: newName.current.value,
            photoURL: nextPfp.src 
        }).then(() => {
            console.log("default profile updated successfully");
        }).catch((err)=>{
            console.log(err)
        })

    }
    const handleExit = () => {
        setBackToNormalSize(false);
        setTimeout(() => {
            navigate('/Profiles');
        }, 300);
    }
    const handleDelete = () => {

        handleExit();
        setTimeout(() => {
            dispatcher(deleteProfile(profileIndex))
        }, 300);
        dispatcher(changeIsSelected({
            id: users[profileIndex].photoID,
            setSelected: false
        }))
    }
    
    return (
        <div className="absolute w-full min-h-screen bg-[#141414] flex flex-col items-center justify-center pt-10 overflow-y-hidden ">

            <HeaderMini showLogo={true} />

            <div className={`w-2/5 flex flex-col mx-auto transition-all duration-300 ease-linear ${ (backToNormalSize) ? `opacity-100 scale-100` : `opacity-0 scale-110` }`}>

                <h1 className="text-5xl text-white font-semibold">Edit Profile</h1>

                <div className="flex py-8 mt-3 mb-8 border-y-[1px] border-neutral-700">

                    <div className="w-1/4">
                        <div className="w-4/5 group relative">
                            <img src={nextPfp.src} className="rounded-md w-full"/>
                            <div
                                className="w-full h-full bg-[#191818c0] absolute opacity-0 scale-0 group-hover:top-0 group-hover:opacity-100 group-hover:scale-100 hover:cursor-pointer transition-opacity duration-200 ease-linear flex items-center justify-center"
                                onClick={ () => setShowAvatars(true)}
                            >
                                <Edit width="3em" height="3em"/>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col w-3/4">

                        <div className={`border-b-[1px] border-neutral-700 pb-8 flex flex-col ${ showError ? `gap-3` : `gap-5`}`}>

                            <div className="relative">
                                <input
                                    type="text"
                                    maxLength={8}
                                    className="w-full py-2 bg-neutral-500 rounded-sm px-3 text-white text-xl font-bold tracking-wider hover:cursor-pointer"
                                    defaultValue={users[profileIndex].name}
                                    ref={newName}
                                />
                               {
                                (showError) && <p className="flex gap-2 text-[#e50914] text-sm font-extrabold mt-2 items-center"><ErrorIcon /> Name is already taken </p>
                               }
                            </div>

                            <div className="w-1/5 flex flex-col gap-1">
                                <label htmlFor="lang" className="text-xl block tracking-wide text-neutral-400 font-medium">Language:</label>
                                <select
                                    name="lang"
                                    id="lang"
                                    className="border-2 border-neutral-400 text-neutral-400 font-bold px-2 py-[.1rem] w-full focus:outline-none appearance-none modify-arrow bg-black hover:cursor-pointer"
                                >
                                    <option
                                        value="English"
                                        selected
                                    >English</option>
                                </select>
                            
                            </div>

                            <div className="flex flex-col gap-1">

                                <h3 className="text-xl block font-medium text-neutral-400">Game Handle:</h3>
                                <p className="text-neutral-400 tracking-normal font-semibold">Your handle is a unique name that'll be used for playing with other Netflix members across all Netflix Games. <span className="text-white hover:underline hover:cursor-pointer">Learn More</span></p>
                                <h2 className="w-full rounded-sm text-white bg-neutral-500 hover:cursor-pointer text-xl py-2 px-3 font-semibold tracking-wide mt-1">Create Game Handle</h2>
                            </div>

                        </div>

                        <div className="border-b-[1px] border-neutral-700 pb-8 pt-5 flex flex-col gap-2 items-start">
                            <h2 className="text-xl block font-medium text-neutral-400">Maturity Settings:</h2>
                            <button className="text-white font-semibold bg-neutral-700 px-4 py-2 rounded-sm ">All Maturity Ratings</button>
                            <p className="text-neutral-400 tracking-normal font-semibold">Show titles of <span className="text-neutral-200 hover:cursor-pointer hover:underline">all maturity ratings</span> for this profile.</p>
                            <button className="border-2 border-neutral-700 text-neutral-700 font-semibold px-5 hover:text-neutral-300 hover:border-neutral-300 mt-2 py-1">Edit</button>
                        </div>

                        <div className="flex flex-col gap-2 pt-5">
                            <h2 className="text-xl block font-medium text-neutral-400">Autoplay controls:</h2>
                            <div className="flex gap-2">
                                <Checkbox />
                                <p className="text-neutral-400 tracking-normal font-semibold">Autoplay next episode in a series of all devices.</p>
                            </div>
                            <div className="flex gap-2">
                                <Checkbox />
                                <p className="text-neutral-400 tracking-normal font-semibold">Autoplay previews while browsing on all devices.</p>
                            </div>
                        </div>

                    </div>

                </div>
                
                <div className="flex gap-4">
                    <div onClick={ handleSave }>
                        <SaveBtn />
                    </div>
                    <div onClick={ handleExit }>
                        <CancelBtn />
                    </div>
                    <div onClick={ () =>{
                        setShowConfirm(true);
                    }}>
                        <DeleteBtn />
                    </div>
                </div>
            </div>
            {
                (showAvatars) && <AvatarSection setShowAvatars={setShowAvatars} nextPfp={nextPfp} setNextPfp={setNextPfp}/> 
            }
            {
                (showConfirm) && <ConfirmDelete setShowConfirm={setShowConfirm} handleDelete={handleDelete}/>
            }
        </div>
    )
}
