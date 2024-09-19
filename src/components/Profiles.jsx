import { useDispatch, useSelector } from "react-redux";
import EmailUnverified from "./EmailUnverified";
import { auth } from "../../firebaseConfig";
import { updateUser } from "../utils/userSlice";
import { useEffect, useRef } from "react";
import { ProfileSection } from "./ProfileSection";


const Profiles = () => {
    const dispatcher = useDispatch();
    const user = useSelector(state => state.user)
    let intervalID = useRef(null);

    (user.emailVerified) ? clearInterval(intervalID.current) : null;
    useEffect(() => {
        if (!user.emailVerified) {
            intervalID.current = setInterval(() => {
                console.log('Timeout..');
                auth.currentUser.reload().then(() => {
                    (auth.currentUser.emailVerified) ? dispatcher(updateUser({ emailVerified: true })) : null
                })
            }, 2000);
        }
    }, [])



    return (!user.emailVerified) ? <EmailUnverified /> : <ProfileSection />

}
export default Profiles;