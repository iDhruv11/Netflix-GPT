import { useEffect, useRef, useState } from "react";
import kidsPfp from '../img/kids.png'
import { Add } from "../utils/Icons";
import { AddProfile } from "./AddProfile";
import { useSelector } from "react-redux";
import { ProfileAvatar } from "./ProfileAvatar";
import { LimitExceed } from "./LimitExceed";
import { AvatarSection } from "./AvatarSection";

export const ProfileSection = () => {

    const loggedinUser = useSelector( (store) => store.user )
    const [showAddPopup, setShowAddPopup] = useState(false);
    const [backToNormalSize, setBackToNormalSize] = useState(false);
    const [showLimitExceeded, setShowLimitExceeded] = useState(false);
    const [showAvatars, setShowAvatars] = useState(false);
    const [nextPfp, setNextPfp] = useState(
        {
            id: null,
            src: null,
        }
    )
    const pfpURL = useRef(
        [
            {
                title: "Netflix",
                avatars: [
                    {
                        id: 0,   
                        src: "https://i.pinimg.com/736x/30/db/47/30db479e1558c3ed46b4ed23b3cd98ae.jpg",
                        isSelected : false
                    },
                    {
                        id: 1,
                        src: "https://i.pinimg.com/474x/0c/91/71/0c9171ce965fb4ec175c2b001516e754.jpg",
                        isSelected : false
                    },
                    {
                        id: 2,
                        src: "https://i.pinimg.com/736x/c3/3b/32/c33b322b61b8f30f0df1d0b3de690734.jpg",
                        isSelected : false
                    },
                    {
                        id: 3,
                        src: "https://i.pinimg.com/736x/c4/88/34/c488340ad56e5454f4576f6c708b63aa.jpg",
                        isSelected : false
                    },
                    {
                        id: 4,
                        src: "https://res.cloudinary.com/dianmmxft/image/upload/c_crop,w_215,h_219/v1726234948/Cartoon-13_mv6buk.jpg",
                        isSelected : false
                    },
                    {
                        id: 5,
                        src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726234948/Cartoon-14_etmeou.jpg",
                        isSelected : false
                    },
                    {
                        id: 6,
                        src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726234948/Cartoon-12_nd8gyc.jpg",
                        isSelected : false
                    },
                    {
                        id: 7,
                        src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726234947/Cartoon-9_pxox6n.jpg",
                        isSelected : false
                    },
                    {
                        id: 8,
                        src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726234948/Cartoon-10_wdv1pl.jpg",
                        isSelected : false
                    },
                    {
                        id: 9,
                        src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726234947/Cartoon-7_hlmtwv.jpg",
                        isSelected : false
                    },
                    {
                        id: 10,
                        src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726234947/Cartoon-8_x8lbcp.jpg",
                        isSelected : false
                    },
                    {
                        id: 11,
                        src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726234947/Cartoon-6_kpifzb.jpg",
                        isSelected : false
                    },
                    {
                        id: 12,
                        src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726234947/Cartoon-5_suasgf.jpg",
                        isSelected : false
                    },
                    {
                        id: 13,
                        src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726234946/Cartoon-3_isghy3.jpg",
                        isSelected : false
                    },
                    {
                        id: 14,
                        src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726234947/Cartoon-4_jgbm9t.jpg",
                        isSelected : false
                    },
                    {
                        id: 15,
                        src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726234946/Cartoon-2_drsshm.jpg",
                        isSelected : false
                    },
                    {
                        id: 16,
                        src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726234946/Cartoon-1_ah6cki.jpg",
                        isSelected : false
                    },
                ]
            },
            {
                title: "Lucifer",
                logoURL: "https://image.tmdb.org/t/p/original/vI2mH4P2qiaRD9cxPSBWyU7PawL.png",
                avatars: [
                    {   
                        id: 100,
                        src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726234947/cartoon-44_cpmydw.jpg",
                        isSelected : false
                    },
                    {   
                        id: 101,
                        src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726234945/cartoon-50_ygzj1p.jpg",
                        isSelected : false
                    },
                    {   
                        id: 102,
                        src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726234945/cartoon-51_ntar9u.jpg",
                        isSelected : false
                    },
                    {   
                        id: 103,
                        src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726234945/cartoon-49_ouyg1o.jpg",
                        isSelected : false
                    },
                    {   
                        id: 104,
                        src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726234945/cartoon-48_xdxwxo.jpg",
                        isSelected : false
                    },
                    {   
                        id: 105,
                        src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726234945/cartoon-47_om8drh.jpg",
                        isSelected : false
                    },
                    {   
                        id: 106,
                        src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726234944/cartoon-45_mcjje5.jpg",
                        isSelected : false
                    },
                    {   
                        id: 107,
                        src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726234944/cartoon-46_guwj4i.jpg",
                        isSelected : false
                    },
                ]
            },
            {   
                title: "Stranger Things",
                logoURL: "https://image.tmdb.org/t/p/original/rMYypjcVoeeijgh5Jwdvm1jaybh.png",
                avatars: [
                    {   
                        id: 200,
                        src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726234948/Cartoon-15_nqog9y.jpg",
                        isSelected : false
                    },
                    {   
                        id: 201,
                        src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726234948/Cartoon-16_uojqzr.jpg",
                        isSelected : false
                    },
                    {   
                        id: 202,
                        src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726234967/Cartoon-18_eexcmh.jpg",
                        isSelected : false
                    },
                    {   
                        id: 203,
                        src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726234967/Cartoon-17_gjqo3y.jpg",
                        isSelected : false
                    },
                    {   
                        id: 204,
                        src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726234968/Cartoon-19_a2nayr.jpg",
                        isSelected : false
                    },
                    {   
                        id: 205,
                        src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726234968/Cartoon-20_dlllfu.jpg",
                        isSelected : false
                    },
                    {   
                        id: 206,
                        src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726234968/Cartoon-22_upanpg.jpg",
                        isSelected : false
                    },
                    {   
                        id: 207,
                        src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726234968/Cartoon-23_m0qdyh.jpg",
                        isSelected : false
                    },
                    {   
                        id: 208,
                        src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726234968/Cartoon-24_zi8w9t.jpg",
                        isSelected : false
                    },
                    {   
                        id: 209,
                        src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726234968/Cartoon-21_judslx.jpg",
                        isSelected : false
                    },
                    {   
                        id: 210,
                        src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726234969/Cartoon-25.jpg_daidmc.jpg",
                        isSelected : false
                    },
                    {   
                        id: 211,
                        src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726234968/Cartoon-26_cadh6g.jpg",
                        isSelected : false
                    },
                    {   
                        id: 212,
                        src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726234969/cartoon-27_xg2sr5.jpg",
                        isSelected : false
                    },
                ]
            },
            {
                title: "Squid Game",
                logoURL: "https://image.tmdb.org/t/p/original/6itv9RmNAd6KAtQPaJCguvg2Zmw.png",
                avatars: [
                    {
                        id: 300,
                        src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726234969/cartoon-28_szlrb7.jpg",
                        isSelected : false
                    },
                    {
                        id: 301,
                        src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726234945/cartoon-33_r4uh37.jpg",
                        isSelected : false
                    },
                    {
                        id: 302,
                        src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726234945/cartoon-36_pw5gvt.jpg",
                        isSelected : false
                    },
                    {
                        id: 303,
                        src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726234945/cartoon-35_jvpe1e.jpg",
                        isSelected : false
                    },
                    {
                        id: 304,
                        src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726234945/cartoon-34_aqiy1c.jpg",
                        isSelected : false
                    },
                    {
                        id: 305,
                        src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726234944/cartoon-32_tsctut.jpg",
                        isSelected : false
                    },
                    {
                        id: 306,
                        src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726234944/cartoon-31_yh6yev.jpg",
                        isSelected : false
                    },
                    {
                        id: 307,
                        src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726234944/cartoon-30_uv9w1v.jpg",
                        isSelected : false
                    },
                    {
                        id: 308,
                        src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726234944/cartoon-29_sulcbp.jpg",
                        isSelected : false
                    }
                ]
            },
            {
                title: "Money Heist",
                logoURL: "https://image.tmdb.org/t/p/w500/vgGUC33xZhnkyTwZgU9HAtqAZxX.png",
                avatars: [
                    {
                        id: 400,
                        src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726234945/cartoon-37_q41bma.jpg",
                        isSelected : false
                    },
                    {
                        id: 401,
                        src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726234946/cartoon-40_ycokcf.jpg",
                        isSelected : false
                    },
                    {
                        id: 402,
                        src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726234945/cartoon-38_qoci7u.jpg",
                        isSelected : false
                    },
                    {
                        id: 403,
                        src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726234947/cartoon-42_od7law.jpg",
                        isSelected : false
                    },
                    {
                        id: 404,
                        src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726234946/cartoon-39_sphted.jpg",
                        isSelected : false
                    },
                    {
                        id: 405,
                        src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726234946/cartoon-43_q6fb3d.jpg",
                        isSelected : false
                    },
                    {
                        id: 406,
                        src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726234946/cartoon-41_sgw2pm.jpg",
                        isSelected : false
                    }
                ]
            }
        ]
    )
    const [users, setUsers] = useState([
        {
            name : loggedinUser.name,
            photoURL : loggedinUser.photoURL, 
            type : 'adult'
        },
        {
            name: 'Children',
            photoURL : kidsPfp,
            type : 'children'
        }
    ]);
    useEffect( () => {
        setTimeout(() => {            
            setBackToNormalSize(true);
        }, 300);
    }, [])

    const displayPopUp = () => {

        if(users.length >= 6){
            setShowLimitExceeded(true)
            return
        }

        setShowAddPopup(true);
        setBackToNormalSize(false);

    }    

    return (
        <div className={`h-[100vh] w-full flex justify-center items-center ${ (showAddPopup) ? `bg-[#000000fa]` : `bg-[#141414] `} overflow-x-hidden overflow-y-hidden`}>
            {/* header gradient */}
            <div className="bg-gradient-to-b from-black to-transparent h-[7vh] absolute top-0 left-0 w-full"></div>
            {/* Hero Profile Section */}
            <div className={`inline-flex flex-col items-center gap-14 ${ (backToNormalSize) ? `scale-100 opacity-100` : `scale-125 opacity-0` } transition-all duration-300 ease-linear`}>

                {/* Hero Title */}
                <h1 className="text-white text-7xl font-semibold flex-wrap">Who's watching?</h1>

                {/* Profile Container */}
                <div className="flex w-8/12 gap-10 justify-center items-center ">             
                   
                    {
                        users.map( user => <ProfileAvatar name = {user.name} photoURL = {user.photoURL} />)
                    }


                    {/* Add Profile Button  */}
                    <div
                        className="flex flex-col justify-center items-center group w-[25%] gap-5"
                        onClick={ displayPopUp }
                    >
                        <div className="group-hover:bg-slate-200 hover:cursor-pointer rounded-md w-full flex justify-center items-center aspect-square">
                            <Add />
                        </div>
                        <p className="text-center text-[#808080] font-medium tracking-wide text-2xl mt-auto group-hover:text-white group-hover:cursor-pointer">Add Profile</p>
                    </div>

                </div>

                {/* Manage Profiles Button */}
                <button className="border-[#808080] border-[1px] text-[#808080] text-[1.45em]  font-semibold tracking-widest px-8 py-3 hover:border-white hover:text-white hover:cursor-pointer">
                    Manage Profiles
                </button>

            </div>
            
            {/* Popup to add a new profile  */}
            {
                ( showAddPopup ) && <AddProfile setShowAddPopup = {setShowAddPopup} setBackToNormalSize = {setBackToNormalSize} users = {users} setUsers = {setUsers} pfpURL = {pfpURL} setShowAvatars={setShowAvatars} nextPfp={nextPfp} setNextPfp={setNextPfp} />
            }
            {/* Profile Limit Exceeded Popup */}
            {
                ( showLimitExceeded )  && <LimitExceed setShowLimitExceeded = {setShowLimitExceeded} /> 
            }
            {/* Profile Avatars Sections  */}
            {
                (showAvatars) && <AvatarSection setShowAvatars = { setShowAvatars } nextPfp = {nextPfp} pfpURL = {pfpURL} />
            }
        </div>
    )
}