import { useDispatch, useSelector } from "react-redux";
import EmailUnverified from "./EmailUnverified";
import { auth } from "../../firebaseConfig";
import { updateUser } from "../utils/userSlice";
import { useEffect, useRef } from "react";
import { ProfileSection } from "./ProfileSection";


const Profiles = () => {
    const dispatcher = useDispatch();
    const emailVerified = useSelector(state => state.user.emailVerified)
    let intervalID = useRef(null);

    (emailVerified) ? clearInterval(intervalID.current) : null;
    useEffect(() => {
        if (!emailVerified) {
            intervalID.current = setInterval(() => {
                console.log('Timeout..');
                auth.currentUser.reload().then(() => {
                    (auth.currentUser.emailVerified) ? dispatcher(updateUser({ emailVerified: true })) : null
                })
            }, 2000);
        }
    }, [])



    return (!emailVerified) ? <EmailUnverified /> : <ProfileSection />

}
export default Profiles;