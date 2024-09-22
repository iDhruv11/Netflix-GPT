import { useContext, useEffect, useRef, useState } from "react";
import { mailContext } from "../utils/MailContext";
import { useValidate } from "../utils/useValidate";
import { registerUser } from "../utils/registerUser";
import { sendEmailVerification, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { updateUser } from "../utils/userSlice";
import { auth } from "../../firebaseConfig";
import { signInUser } from "../utils/signInUser";
import { useNavigate } from "react-router-dom";
import { ErrorIcon } from "../utils/Icons";

const SignIn = () => {

    const [mail, setMail] = useContext(mailContext);
    const [signIn, setSignIn] = useState(true);
    const [isMailFocused, setIsMailFocused] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false)
    const [isNameFocused, setIsNameFocused] = useState(false);
    const [mailErrMsg, setMailErrMsg] = useState(null);
    const [passErrMsg, setPassErrMsg] = useState(null);
    const [nameErrMsg, setNameErrMsg] = useState(null);
    const email = useRef();
    const password = useRef();
    const name = useRef();
    const regBtn = useRef();
    const dispatcher = useDispatch();
    const navigate = useNavigate();
    console.log(mail);    

    useEffect(() => {
        (mail) ? setSignIn(false) : null;
    }, [])

    const handleReg = async () => {
        console.log('inside registration');

        const [mailErr, passErr, nameErr] = useValidate(email.current?.value, password.current?.value, name.current?.value);
        setMailErrMsg(mailErr);
        setPassErrMsg(passErr);
        setNameErrMsg(nameErr);

        if (mailErr == null && passErr == null && nameErr == null) {
            try {
                const regResponse = await registerUser(email.current?.value, password.current?.value);
                sendEmailVerification(auth.currentUser)
                .then(() => {
                    console.log('email sent');                        
                });
                updateProfile(auth.currentUser, {
                    displayName: name.current?.value,
                    photoURL: "https://res.cloudinary.com/dianmmxft/image/upload/v1726833128/new_cubop6.jpg",
                }).then(() => {
                    const user = auth.currentUser;
                    const updatedName = user.displayName;
                    const updatedPhotoURL = user.photoURL;
                    console.log(updatedName, updatedPhotoURL);
                    dispatcher(updateUser({ name: updatedName, photoURL: updatedPhotoURL}));
                    navigate('/Profiles')
                })
                
            }
            catch (error) {
                (error.code == 'auth/email-already-in-use') ? setMailErrMsg('Email already in use!') : console.log('Name setting Error');
            }
        }
    }

    const handleLogIn = async () => {

        const [mailErr, ,] = useValidate(email.current?.value);
        setMailErrMsg(mailErr);

        if (mailErr == null) {
            try {
                const logInResponse = await signInUser(email.current?.value, password.current?.value);
            }
            catch (error) {
                (error.code == 'auth/invalid-credential') ? setPassErrMsg('Invalid email or password') : null;
            }
        }
    }


    return (
        <div>
            <div id="banner" className="w-full h-lvh brightness-50">
            </div>
            <div className="absolute top-0 left-0 w-full h-lvh pt-12">
                <div className="ml-96 mb-14">
                    <svg width="150px" fill="#e50914" viewBox="0 0 111 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="default-ltr-cache-1d568uk ev1dnif2"><g><path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"></path></g></svg>
                </div>
                <div className="w-[450px] bg-black bg-opacity-75 rounded-md text-white mx-auto py-12 px-4">
                    <h3 className="font-bold text-4xl pl-[50px] mb-8">
                        {
                            (signIn) ? "Sign In" : "Sign Up"
                        }
                    </h3>
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-9/12 relative">
                            <input type="text" name="mail" id="mail" className={`w-full bg-[#252424] bg-opacity-40 rounded-[3px] px-[15px] text-white font-bold text-base pt-5 pb-2 border-[1px] border-gray-500 ${(mailErrMsg) ? `border-[#f73e34]` : ``}`}
                                ref={email}
                                onFocus={
                                    () => {
                                        setIsMailFocused(true);
                                        setMailErrMsg(null)
                                    }
                                }
                                onBlur={
                                    () => {
                                        (email.current.value) ? null : setIsMailFocused(false);
                                        const [mailErrMsg, ,] = useValidate(email.current?.value, null, null);
                                        setMailErrMsg(mailErrMsg);
                                    }
                                }
                                defaultValue={mail}
                                onChange={
                                    () => {
                                        // even if we backspace from input field it does not change defaultValue, the defaultValue remains same what we set which is 'mail' and there's no email.current.defaultValue does not exist. Also defaultValue is editable in input field but value is read-only 

                                        // without this below line, even if we erase the entire pre-existing mail from getstarted page, it does not change defaultValue making the placeholder remain at the top.
                                        (!email.current.value) ? setMail(null) : null;
                                    }
                                }
                            />
                            <p className={`font-bold text-gray-300 absolute top-4 left-4 text-[17px] ${(isMailFocused || mail) ? `top-[6px] text-sm` : ``} transition-all ease-in-out duration-150 `}>Email</p>
                            {
                                (mailErrMsg) && (
                                    <div className="flex items-center text-[#f73e34] gap-1 mt-2 font-bold" >
                                        <ErrorIcon />
                                        <p className="text-sm">{mailErrMsg}</p>
                                    </div>
                                )
                            }
                        </div>
                        <div className="w-9/12 relative">
                            <input type="password" name="password" id="password" className={`w-full bg-[#252424] bg-opacity-40 rounded-[3px] px-[15px] text-white font-bold text-base pt-5 pb-2 border-[1px] border-gray-500 ${(passErrMsg) ? `border-[#f73e34]` : ``}`}
                                ref={password}
                                onFocus={
                                    () => {
                                        setIsPasswordFocused(true);
                                        setPassErrMsg(null)
                                    }
                                }
                                onBlur={
                                    () => {
                                        (password.current.value) ? null : setIsPasswordFocused(false);
                                        if (!signIn) {
                                            const [, passErrMsg,] = useValidate(null, password.current?.value, null);
                                            setPassErrMsg(passErrMsg);
                                        }
                                    }
                                } />
                            <p className={`font-bold text-gray-300 absolute top-4 left-4 text-[17px] ${(isPasswordFocused) ? `top-[6px] text-sm` : ``} transition-all ease-in-out duration-150`}>Password</p>
                            {
                                (passErrMsg) && (
                                    <div className="flex items-center text-[#f73e34] gap-1 mt-2 font-bold" >
                                        <ErrorIcon />
                                        <p className="text-sm">{passErrMsg}</p>
                                    </div>
                                )
                            }
                        </div>
                        {
                            (!signIn) && (
                                <div className="w-9/12 relative">
                                    <input type="text" name="name" id="name" className={`w-full bg-[#252424] bg-opacity-40 rounded-[3px] px-[15px] text-white font-bold text-base pt-5 pb-2 border-[1px] border-gray-500 ${(nameErrMsg) ? `border-[#f73e34]` : ``}`}
                                        ref={name}
                                        onFocus={
                                            () => {
                                                setIsNameFocused(true);
                                                setNameErrMsg(null)
                                            }
                                        }
                                        onBlur={
                                            () => {
                                                (name.current.value) ? null : setIsNameFocused(false);
                                                const [, , nameErrMsg] = useValidate(null, null, name.current?.value);
                                                setNameErrMsg(nameErrMsg);
                                            }
                                        } />
                                    <p className={`font-bold text-gray-300 absolute top-4 left-4 text-[17px] ${(isNameFocused) ? `top-[6px] text-sm ` : ``} transition-all ease-in-out duration-150 `}>Full Name</p>
                                    {
                                        (nameErrMsg) && (
                                            <div className="flex items-center text-[#f73e34] gap-1 mt-2 font-bold" >
                                                <ErrorIcon />
                                                <p className="text-sm">{nameErrMsg}</p>
                                            </div>
                                        )
                                    }
                                </div>
                            )
                        }
                        <button className="w-9/12 bg-[#e50914] text-lg font-bold py-2 rounded-sm mb-3"
                            onClick={(signIn) ? handleLogIn : handleReg} ref={regBtn}>
                            {
                                (signIn) ? "Sign In" : "Sign Up"
                            }
                        </button>
                    </div>
                    {
                        (signIn) && (<h5 className="font-bold text-center cursor-pointer hover:text-gray-300 hover:underline">Forgot Password?</h5>)
                    }

                    <h5 className="font-bold text-gray-300 pl-[50px] text-[17px] mt-5">
                        {
                            (signIn) ? "New to Netflix? " : "Already a User? "
                        }
                        <span className="font-bold text-center text-white hover:underline cursor-pointer"
                            onClick={
                                () => {
                                    setSignIn(!signIn);
                                    setMailErrMsg(null);
                                    setPassErrMsg(null);
                                    setNameErrMsg(null);
                                    password.current.value = "";
                                    setIsPasswordFocused(false)
                                }
                            }
                        >
                            {
                                (signIn) ? "Sign up now." : "Sign in to your account."
                            }
                        </span>
                    </h5>

                </div>
            </div>
        </div>
    )
}
export default SignIn;