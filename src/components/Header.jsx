import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Arrow, Bell, Logo, Pencil, Person, Question, Search, Squareface } from "../utils/Icons";
import { Link, useNavigate } from "react-router-dom";
import { PageTitle } from "./PageTitle";

const Header = ({ hasScrolled, page, setPage, blurTitle, setBlurTitle }) => {

    const profileIndex = useSelector(state => state.user.selectedProfile);
    const user = useSelector(state => state.user.profiles[profileIndex]);
    const navigate = useNavigate()
    const [showAccPopup, setShowAccPopup] = useState(false);
    const timeoutID = useRef();

    const options = {
        home: [],
        movies: [
            {
                genre: "Action",
                id: "action"
            },
            {
                genre: "Comedy",
                id: "comedy",
            },
            {
                genre: "Adventure",
                id: "adventure"
            },
            {
                genre: "Crime", 
                id: "crime"
            },
            {
                genre: "Feel Good",
                id: "feelGood",
            },
            {
                genre: "Docudramas",
                id: "trueStories"
            },
        ],
        shows: [
            {
                genre: "Comedy",
                id: "comedy"
            },
            {
                genre: "Feel Good",
                id: "feelGood"
            },
            {
                genre: "Family",
                id: "family"
            },
            {
                genre: "Crime",
                id: "crime"
            },
            {
                genre: "Mystery",
                id: "mystery"
            },
            {
                genre: "Anime",
                id: "anime"
            },
        ],
        directors: [
            {
                genre: "Martin Scorsese",
                id: "martin"
            },
            {
                genre: "Satyajit Ray",
                id: "ray"
            },
            {
                genre: "Quentin Tarantino",
                id: "tarantino"
            },
            {
                genre: "Steven Spielberg",
                id: "steven"
            },
            {
                genre: "Christopher Nolan",
                id: "nolan"
            },
            {
                genre: "Stanely Kubrick",
                id: "kubrick"
            },
            {
                genre: "David Fincher",
                id: "fincher"
            },
            {
                genre: "Coen Brothers",
                id: "coen"
            },
            {
                genre: "Anurag Kashyap",
                id: "anurag"
            },
            {
                genre: "Rajkumar Hirani",
                id: "hirani"
            },
            {
                genre: "Guru Dutt",
                id: "guru"
            }
        ]
    }

    return (
        <div className="absolute z-50 top-0 left-0 w-screen ">

            <div className={`flex py-[1.3em] pl-16 pr-14 text-white font-semibold text-[0.92em] justify-between w-full bg-gradient-to-b from-black/80 ${(hasScrolled) ? `bg-[#121212]/100` : `bg-[#121212]/0 transition-all duration-300 ease-linear` }`}>

                <div className="flex gap-14">

                    <div className="flex ">
                        <Logo />
                    </div>

                    <ul className="flex flex-row no-underline gap-5 pt-[0.15rem]">

                            <li
                                className={`tracking-normal text-[0.96rem] ${(page == "home") ? ` text-white text-[0.97rem]` : `text-slate-300`} font-normal transition-all duration-150 ease-linear`}
                                onClick={ () => {
                                    setPage("home")
                                    navigate("/Browse")
                                    setBlurTitle(false)
                                }}
                            >Home</li>

                            <li
                                className={`tracking-normal text-[0.96rem] font-normal ${(page == "movies") ? ` text-white text-[0.97rem]` : `text-slate-300`} font-normal transition-all duration-150 ease-linear`}
                                onClick={ () => {
                                    setPage("movies")
                                    navigate("/Browse/Movies")
                                    setBlurTitle(false)
                                }}
                            >Movies</li>

                            <li
                                className={`tracking-normal text-[0.96rem] ${(page == "shows") ? ` text-white text-[0.97rem]` : `text-slate-300`} font-normal transition-all duration-150 ease-linear`}
                                onClick={ () => {
                                    setPage("shows")
                                    navigate("/Browse/Shows")
                                    setBlurTitle(false)
                                }}
                            >TV Shows</li>

                            <li
                                className={`tracking-normal text-[0.96rem] ${(page == "directors") ? ` text-white text-[0.97rem]` : `text-slate-300`} font-normal transition-all duration-150 ease-linear`}
                                onClick={ () => {
                                    setPage("directors")
                                    navigate("/Browse/Directors")
                                    setBlurTitle(false)
                                }}
                            >Director's Chair</li>

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
                        className={`absolute bg-black top-16 right-16 ${(showAccPopup) ? `opacity-90` : `opacity-0`} transition-all duration-150 ease-linear`}
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
            {
                (page != "home") && <PageTitle page={page} options={options[page]} hasScrolled={hasScrolled} blurTitle={blurTitle} />
            }
        </div>
    )
}
export default Header;


