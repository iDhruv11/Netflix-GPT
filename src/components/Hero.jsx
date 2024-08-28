import { useContext, useRef, useState } from "react";
import { useValidate } from "../utils/useValidate";
import { Link, useNavigate } from "react-router-dom";
import { mailContext } from "../utils/MailContext";
const Hero = () => {

    const [isFocused, setIsFocused] = useState(false);
    const email = useRef();
    const [errorMsg, setErrorMsg] = useState(null);
    const navigate = useNavigate();
    const [ , setMail ] = useContext(mailContext);

    const handleEmailSubmission = () => {
        email.current.focus();
        const [response] = useValidate(email.current.value);
        if(response == null){
            setErrorMsg(null);
            setMail(email.current.value)
            navigate('/SignIn');
        }
        else{
            setErrorMsg(response);
        }
    }
    

    return (
        <div>
            <div className="banner w-full h-[750px] border-b-8 border-b-[#3f3f3f] brightness-50">   
            </div>           
            <div className="w-full absolute z-5 top-0">
                <div className="w-[60%] mx-auto flex flex-col gap-48">
                        <div className="flex justify-between py-6 items-center">
                            <svg width="150px" fill="#e50914" viewBox="0 0 111 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="default-ltr-cache-1d568uk ev1dnif2"><g><path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"></path></g></svg>
                            <button className="text-white font-semibold px-3 py-[5px] rounded-[4px] bg-[#e50914] text-center" onClick={
                                ()=>{
                                    setMail(null);
                                    navigate('SignIn');
                                }
                            }>Sign In</button>
                        </div>
                        <div className="text-center flex flex-col gap-6 items-center">
                            <h1 className="text-6xl font-extrabold text-white max-w-[60%] leading-snug">Unlimited Movies, TV shows and more</h1>
                            <h3 className="text-2xl text-white font-semibold">Watch anywhere, Cancel anytime</h3>
                            <h3 className="text-xl text-white font-semibold">Ready to watch? Enter your email to create or restart your membership.</h3> 
                            <div className="flex w-6/12 mx-auto items-center flex-wrap relative">

                                <input type="text" name="mail" id="mail" className="px-4 rounded-sm bg-black bg-opacity-70 border-gray-400 border-[1px] mr-2 w-[65%] text-white font-bold pt-[19px] pb-[11px]"
                                ref = {email}
                                onFocus={
                                    ()=>{
                                        setIsFocused(true)
                                    }
                                }
                                onBlur={
                                    ()=>{
                                        if(email.current.value){
                                            return ;
                                        } 
                                        setIsFocused(false)
                                    }
                                }
                                onKeyDown={
                                    (e)=>{
                                        (e.code == 'Enter') ? handleEmailSubmission() : null
                                    }
                                }
                                />

                                <p className={`text-gray-400 text-md font-bold absolute left-[17px] top-4 ${(isFocused) ? `top-[5px] text-[13px]` : ``} transition-all ease-linear duration-150 `}>Email address</p>

                                <button className="text-white font-bold text-2xl bg-[#E50914] px-4 py-[12px] rounded-sm" onClick={handleEmailSubmission}>Get Started &nbsp; &gt;</button>

                                <h6 className="flex items-center text-[#ec352b] gap-1 mt-2 font-bold">
                                    {
                                        (errorMsg) && (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" role="img" data-icon="CircleXSmall" aria-hidden="true" class="default-ltr-cache-0 e1vkmu651"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM4.46967 5.53033L6.93934 8L4.46967 10.4697L5.53033 11.5303L8 9.06066L10.4697 11.5303L11.5303 10.4697L9.06066 8L11.5303 5.53033L10.4697 4.46967L8 6.93934L5.53033 4.46967L4.46967 5.53033Z" fill="currentColor"></path></svg>)
                                    }
                                    <p className="text-sm">{errorMsg}</p>
                                </h6>
                            </div>                        

                        </div>
                </div>
            </div> 
        </div>
    )
}

export default Hero;