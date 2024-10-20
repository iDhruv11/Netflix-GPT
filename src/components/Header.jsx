import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Arrow, Bell, Logo, Pencil, Person, Question, Search, Squareface } from "../utils/Icons";
import { Link } from "react-router-dom";

const Header = ( { hasScrolled } ) => {

    const profileIndex = useSelector(state => state.user.selectedProfile);
    const user = useSelector(state => state.user.profiles[profileIndex]);
    const [showAccPopup, setShowAccPopup] = useState(false);
    const [selected, setSelected] = useState("Home")
    const timeoutID = useRef();
    
    return (
        <div className={`flex py-[1.3em] pl-16 pr-14 text-white font-semibold text-[0.92em] justify-between absolute w-full z-50 top-0 left-0 ${ (hasScrolled) ? `bg-neutral-700 bg-gradient-to-b from-[#0b0b0b] to-[#141414f5] via-[#0b0b0b] ` : `bg-gradient-to-b from-black/80 to-transparent ` } transition-all duration-300 ease-linear`}>
            <div className="flex gap-14">
                <div>
                    <Logo />
                </div>
                <ul className="flex flex-row no-underline gap-5 pt-[0.15rem]">
                    <Link to="/Browse">
                        <li
                            className={`tracking-normal text-[0.96rem] ${ (selected == "Home") ? ` text-white font-medium` : `text-slate-300 font-normal` } `}
                            onClick={ () => {
                                setSelected("Home")
                            }}
                        >Home</li>
                    </Link>
                    <Link to="/Browse/Movies">
                        <li
                            className={`tracking-normal text-[0.97rem] font-normal ${ (selected == "Movies") ? ` text-white` : `text-slate-300` } `}
                            onClick={ () => {
                                setSelected("Movies")
                            }}
                        >Movies</li>
                    </Link>
                    <Link to="/Browse/Shows">
                        <li
                            className={`tracking-normal text-[0.96rem] ${ (selected == "Shows") ? ` text-white font-medium` : `text-slate-300 font-normal` } `}
                            onClick={ () => {
                                setSelected("Shows")
                            }}
                        >TV Shows</li>
                    </Link>
                    <Link to="/Browse/Directors">
                        <li
                            className={`tracking-normal text-[0.96rem] ${ (selected == "Director") ? ` text-white font-medium` : `text-slate-300 font-normal` } `}
                            onClick={ () => {
                                setSelected("Director")
                            }}
                        >Director's Chair</li>
                    </Link>
                </ul>
            </div>
            <div className="flex justify-center items-center gap-5">
                <div className="hover:cursor-pointer">
                    <Search />
                </div>
                <div className="hover:cursor-pointer">
                    <Bell />
                </div>
                <div className="flex justify-center items-center gap-1"
                    onMouseEnter={() => {
                        clearInterval(timeoutID.current)
                        setShowAccPopup(true);
                    }}
                    onMouseLeave={() => {
                        timeoutID.current = setTimeout(() => {
                            setShowAccPopup(false);
                        }, 500);
                    }}
                >
                    <img src={user.photoURL} alt="User" className="rounded-md w-8" />
                    <div className={`${(showAccPopup) ? `rotate-180` : ``} transition-transform duration-150 ease-linear cursor-pointer`}>
                        <Arrow />
                    </div>
                </div>
                <div 
                    className={`absolute bg-black top-16 right-16 ${ (showAccPopup) ? `opacity-90` : `opacity-0` } transition-all duration-150 ease-linear`}
                    onMouseEnter={() => {
                        clearTimeout(timeoutID.current);
                    }}
                    onMouseLeave={() => {
                        timeoutID.current = setTimeout(() => {
                            setShowAccPopup(false);
                        }, 500);
                    }}
                >
                    <ul className="flex flex-col no-underline py-4">
                        <li className="flex items-center gap-3 pl-4 pr-10 hover:underline">
                            <img src={user.photoURL} alt="User" width="30px" height="30px" className="rounded-md" />
                            <p>{user.name}</p>
                        </li>
                        <li className="flex items-center gap-3 pl-4 pr-10 hover:underline">
                            <Pencil />
                            <p className="text-[0.95em]">Manage Profiles</p>
                        </li>
                        <li className="flex items-center gap-3 pl-4 pr-10 hover:underline">
                            <Squareface />
                            <p className="text-[0.95em]">Transfer Profiles</p>
                        </li>
                        <li className="flex items-center gap-3 pl-4 pr-10 hover:underline">
                            <Person />
                            <p className="text-[0.95em]">Account</p>
                        </li>
                        <li className="flex items-center gap-3 pl-4 pr-10 hover:underline">
                            <Question />
                            <p className="text-[0.95em]">Help Centre</p>
                        </li>
                    </ul>
                    <p className="text-sm py-3 border-t-[0.01em] border-gray-500 text-center hover:underline hover:cursor-pointer">Sign out of Netflix</p>
                </div>
            </div>
        </div>
    )
}
export default Header;