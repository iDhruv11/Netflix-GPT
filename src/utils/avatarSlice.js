import { createSlice } from "@reduxjs/toolkit";

const avatarSlice = createSlice({
    name: "avatars",
    initialState: [
        {
            title: "Netflix",
            avatars: [
                {
                    id: 0,
                    src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726833128/new_cubop6.jpg",
                    isSelected: true
                },
                {
                    id: 1,   
                    src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726833128/new3_b8cu5u.jpg",
                    isSelected : false
                },
                {
                    id: 2,
                    src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726833128/new4_q8wta4.jpg",
                    isSelected : false
                },
                {
                    id: 3,
                    src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726833128/new2_hth8gq.jpg",
                    isSelected : false
                },
                {
                    id: 4,
                    src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726833128/new5_sr4vff.jpg",
                    isSelected : false
                },
                {
                    id: 5,
                    src: "https://res.cloudinary.com/dianmmxft/image/upload/c_crop,w_215,h_219/v1726234948/Cartoon-13_mv6buk.jpg",
                    isSelected : false
                },
                {
                    id: 6,
                    src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726234948/Cartoon-14_etmeou.jpg",
                    isSelected : false
                },
                {
                    id: 7,
                    src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726234948/Cartoon-12_nd8gyc.jpg",
                    isSelected : false
                },
                {
                    id: 8,
                    src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726234947/Cartoon-9_pxox6n.jpg",
                    isSelected : false
                },
                {
                    id: 9,
                    src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726234948/Cartoon-10_wdv1pl.jpg",
                    isSelected : false
                },
                {
                    id: 10,
                    src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726234947/Cartoon-7_hlmtwv.jpg",
                    isSelected : false
                },
                {
                    id: 11,
                    src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726234947/Cartoon-8_x8lbcp.jpg",
                    isSelected : false
                },
                {
                    id: 12,
                    src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726234947/Cartoon-6_kpifzb.jpg",
                    isSelected : false
                },
                {
                    id: 13,
                    src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726234947/Cartoon-5_suasgf.jpg",
                    isSelected : false
                },
                {
                    id: 14,
                    src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726234946/Cartoon-3_isghy3.jpg",
                    isSelected : false
                },
                {
                    id: 15,
                    src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726234947/Cartoon-4_jgbm9t.jpg",
                    isSelected : false
                },
                {
                    id: 16,
                    src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726234946/Cartoon-2_drsshm.jpg",
                    isSelected : false
                },
                {
                    id: 17,
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
                    src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726636644/Mask_cwdtdu.jpg",
                    isSelected : false
                },
                {
                    id: 401,
                    src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726636680/cartoon-38_krhjag.jpg",
                    isSelected : false
                },
                {
                    id: 402,
                    src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726636644/cartoon-39_jd5m6x.jpg",
                    isSelected : false
                },
                {
                    id: 403,
                    src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726636644/cartoon-40_xrkqy6.jpg",
                    isSelected : false
                },
                {
                    id: 404,
                    src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726636644/cartoon-42_fgwn3a.jpg",
                    isSelected : false
                },
                {
                    id: 405,
                    src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726636644/cartoon-43_j31tul.jpg",
                    isSelected : false
                },
                {
                    id: 406,
                    src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726636644/cartoon-41_p2dl1z.jpg",
                    isSelected : false
                }
            ]
        },
        {
            title: "Bojack",
            logoURL: "https://res.cloudinary.com/dianmmxft/image/upload/v1726658021/pnB0AQj9pBkczDsMpqDpFXaKYEX_cne2oa.png",
            avatars: [
                {
                    id: 500,
                    src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726657770/Bojack_t1ua03.png",
                    isSelected : false
                },
                {
                    id: 501,
                    src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726657769/Bojack2_slhuxq.png",
                    isSelected : false
                },
                {
                    id: 502,
                    src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726657770/Bojack3_ve7qqd.png",
                    isSelected : false
                },
                {
                    id: 503,
                    src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726657769/Bojack4_lfl6no.png",
                    isSelected : false
                },
                {
                    id: 504,
                    src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726657769/Bojack5_j91cyc.png",
                    isSelected : false
                },
                {
                    id: 505,
                    src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726657750/Bojack6_e0acnp.png",
                    isSelected : false
                },
                {
                    id: 506,
                    src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726657750/Bojack8_k924zn.png",
                    isSelected : false
                },
                {
                    id: 507,
                    src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726657750/Bojack7_w9v70n.png",
                    isSelected : false
                }
            ]
        },
        {
            title: "Witcher",
            logoURL: "https://image.tmdb.org/t/p/original/x3uBgefbFC8blsE4Sbdi0m2a71d.png",
            avatars: [
                {
                    id: 600,
                    src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726660123/Witcher1_svqg5d.jpg",
                    isSelected : false
                },
                {
                    id: 601,
                    src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726660123/witcher2_ql14ov.jpg",
                    isSelected : false
                },
                {
                    id: 602,
                    src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726660118/witcher3_iiro2g.jpg",
                    isSelected : false
                },
                {
                    id: 603,
                    src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726660118/witcher4_pjnzp4.jpg",
                    isSelected : false
                },
                {
                    id: 604,
                    src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726660117/witcher6_kojjzh.jpg",
                    isSelected : false
                },
                {
                    id: 605,
                    src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726660117/witcher5_oi1rxc.jpg",
                    isSelected : false
                },
                {
                    id: 606,
                    src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726660117/witcher7_dix5gl.jpg",
                    isSelected : false
                },
                {
                    id: 607,
                    src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726660117/Witcher9_detjpz.jpg",
                    isSelected : false
                },
                {
                    id: 508,
                    src: "https://res.cloudinary.com/dianmmxft/image/upload/v1726660117/witcher8_igdtra.jpg",
                    isSelected : false
                }
                
            ]
        },
    ],
    reducers: {
        changeIsSelected: (state, action) => {
            state[Math.floor((action.payload.id)/100)].avatars[(Math.floor(action.payload.id)%100)].isSelected = action.payload.setSelected;
        }
    }
})

export const { changeIsSelected } = avatarSlice.actions;
export default avatarSlice.reducer;  