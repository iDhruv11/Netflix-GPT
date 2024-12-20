import { useNavigate } from "react-router-dom";
import { Edit } from "../utils/Icons";
import { useDispatch } from "react-redux";
import { updateSelectedProfile } from "../utils/userSlice";

const ProfileAvatar = ( { name, photoURL, beingEdited, index, setCutToBrowsePage} ) => {

    const navigate = useNavigate();
    const dispatcher = useDispatch()
    const handleClick = () => {
        dispatcher(updateSelectedProfile(index))
        setCutToBrowsePage(true)
        setTimeout(() => {
            navigate('/Browse')
        }, 700);
    }
    return (

        <div className="flex flex-col justify-center items-center gap-4 group w-[25%]">

            <div className="w-full h-full rounded-md group-hover:ring-4 group-hover:ring-white group-hover:cursor-pointer relative aspect-square">

                <img
                    className="w-full rounded-md h-full"
                    src={photoURL}
                    onClick={ handleClick }
                />

                <div
                    className={`absolute bg-[#191818c0] w-full h-full flex items-center justify-center rounded-md ${ (beingEdited && name!='Children') ? `top-0 opacity-100 scale-100` : `opacity-0 scale-0` } transition-opacity duration-200 ease-linear`}
                    onClick={ () => navigate(`/Profiles/${index}`) }
                >
                    <Edit width="3em" height="3em"/>
                </div>

            </div>
            <p className="text-center text-[#808080] font-medium tracking-wide text-2xl group-hover:text-white group-hover:cursor-pointer">{name}</p>

        </div>
    )
}
export {ProfileAvatar};