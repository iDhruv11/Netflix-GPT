import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Arrow, Bell, Logo, Pencil, Person, Question, Search, Squareface } from "../utils/Icons";

const Header = () => {
    const user = useSelector(state => state.user);
    const [showAccPopup, setShowAccPopup] = useState(false);
    const timeoutID = useRef();
    return (
        <div className="flex bg-gradient-to-b from-black/80 to-transparent py-[1.4em] px-16 text-white font-semibold text-[0.92em] justify-between fixed w-full z-50">
            <div className="flex gap-14">
                <div>
                    <Logo />
                </div>
                <ul className="flex flex-row no-underline gap-5">
                    <li>Home</li>
                    <li>Movies</li>
                    <li>TV Shows</li>
                    <li>My List</li>
                </ul>
            </div>
            <div className="flex justify-center items-center gap-5">
                <div>
                    <Search />
                </div>
                <div>
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
                    <img src={user.photoURL} alt="User Profile Picture" width="30px" height="30px" className="rounded-md" />
                    <div className={`${(showAccPopup) ? `rotate-180` : ``} transition-transform duration-150 ease-linear`}>
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
                            <img src={user.photoURL} alt="User Profile Picture" width="30px" height="30px" className="rounded-md" />
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