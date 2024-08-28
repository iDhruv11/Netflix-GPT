import { useDispatch, useSelector } from "react-redux";
import EmailUnverified from "../utils/EmailUnverified";
import { auth } from "../../firebaseConfig";
import { updateUser } from "../utils/userSlice";
import { useEffect, useRef } from "react";
import MainMovie from "./MainMovie";
import SuggestedMovies from "./SuggestedMovies";

const Contents = () => {
    const dispatcher = useDispatch();
    const user = useSelector(state => state.user)
    let intervalID = useRef(null);
    
    (user.emailVerified) ? clearInterval(intervalID.current) : null;
    useEffect(()=>{
        intervalID.current = setInterval(() => {
            console.log('Timeout..');
            auth.currentUser.reload().then(() => {               
                (auth.currentUser.emailVerified) ? dispatcher(updateUser( { emailVerified: true} )) : null
            })
        }, 2000);
    }, [])
    return (!user.emailVerified) ? <EmailUnverified /> : (
        <div className="h-[1200px]">
            <MainMovie />
            <SuggestedMovies />
        </div>
    )

}
export default Contents;