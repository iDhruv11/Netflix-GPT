import { createSlice } from "@reduxjs/toolkit";

const sectionSlice = createSlice({
    name: 'sections',
    initialState: {

        homeContent: true,
        keys: ['topRated', 'newRelease', 'popular', 'critic', 'netflix', 'trendingIndia', 'adventure', 'action', 'bestOfYear', 'trueStories', 'comedy', 'family', 'feelGood'],

        topRated: {
            tabs: ['home', 'movie', 'show'],
            title: "Top Rated",
            movieTitle: "Highest Rated Movies",
            showTitle: "9+/10 Rated Shows",
            movies: [
                {
                    title: "The Shawshank Redemption",
                    desc: "Imprisoned in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an a...",
                    genres: [
                        "Drama",
                        "Crime"
                    ],
                    runtime: 142,
                    year: "1994",
                    isMostLiked: true,
                    videos: {
                        clip: "hUbIsfzOjk4",
                        trailer: "PLl99DlL6b4"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/xXXFdqV965crlxCO3dj3PhtcCAf.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/8pPq3gJG4oWYonbL6DaHslJeCaM.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "prison",
                        "friendship",
                        "police brutality"
                    ],
                    cast: [
                        "Tim Robbins",
                        "Morgan Freeman",
                        "Bob Gunton"
                    ],
                    ageRating: "A-Rated", type: "movie", backdropNoLang: ""
                },
                {
                    title: "The Godfather",
                    desc: "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his y...",
                    genres: [
                        "Drama",
                        "Crime"
                    ],
                    runtime: 175,
                    year: "1972",
                    isMostLiked: true,
                    videos: {
                        clip: "evl5ai7Mg7w",
                        trailer: "Ew9ngL1GZvs",
                        teaser: "gMjmsqvIPGc"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/AbgEQO2mneCSOc8CSnOMa8pBS8I.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/kysDTCloxUPJ1BILI4f8gs74fcr.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "loss of loved one",
                        "italy",
                        "symbolism"
                    ],
                    cast: [
                        "Marlon Brando",
                        "Al Pacino",
                        "James Caan"
                    ],
                    ageRating: "A-Rated", type: "movie", backdropNoLang: ""
                },
                {
                    title: "The Godfather Part II",
                    desc: "In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vega...",
                    genres: [
                        "Drama",
                        "Crime"
                    ],
                    runtime: 202,
                    year: "1974",
                    isMostLiked: true,
                    videos: {
                        trailer: "7pfqivkYUlE"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/uG0JWCEwQnyQA4yGjGrTYvLfu7L.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/gEfwCTLbcX7jvIHLTXfVW1idZby.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "italian american",
                        "cuba",
                        "italy"
                    ],
                    cast: [
                        "Al Pacino",
                        "Robert Duvall",
                        "Diane Keaton"
                    ],
                    ageRating: "A-Rated", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Schindler's List",
                    desc: "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
                    genres: [
                        "Drama",
                        "History",
                        "War"
                    ],
                    runtime: 195,
                    year: "1993",
                    isMostLiked: true,
                    videos: {
                        clip: "lx9Ahsr4544",
                        trailer: "mxphAlJID9U"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/wH7ZxjF1yU3azuj3pgXVcgrCTUk.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/krEC3MIxUbiZy2uM0TemRio2Z2E.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "factory",
                        "hero",
                        "nazi"
                    ],
                    cast: [
                        "Liam Neeson",
                        "Ben Kingsley",
                        "Ralph Fiennes"
                    ],
                    ageRating: "A-Rated", type: "movie", backdropNoLang: ""
                },
                {
                    title: "12 Angry Men",
                    desc: "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and sh...",
                    genres: [
                        "Drama"
                    ],
                    runtime: 97,
                    year: "1957",
                    isMostLiked: true,
                    videos: {
                        clip: "4_q_IA6LeUw",
                        trailer: "TEN-2uTi2c0"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/3x1hh3VGugF4pvLURkLLOmb1rj5.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/uvXtPqfDAFEyxKCh06y0uiofK4T.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "death penalty",
                        "anonymity",
                        "court case"
                    ],
                    cast: [
                        "Martin Balsam",
                        "John Fiedler",
                        "Lee J. Cobb"
                    ],
                    ageRating: "U/A 10+", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Spirited Away",
                    desc: "A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family...",
                    genres: [
                        "Animation",
                        "Family",
                        "Fantasy"
                    ],
                    runtime: 125,
                    year: "2001",
                    isMostLiked: true,
                    videos: {
                        clip: "W5szC4XgR1s",
                        trailer: "GAp2_0JJskk",
                        teaser: "oZzFsv22wqI"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/sRDfWh1x7qVi9R6Y86XVCQzSjVH.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/hkUi1Z15Ymj9GNamWQkzUhehLuy.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "witch",
                        "darkness",
                        "bath house"
                    ],
                    cast: [
                        "Rumi Hiiragi",
                        "Miyu Irino",
                        "Mari Natsuki"
                    ],
                    ageRating: "U/A 7+", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Dilwale Dulhania Le Jayenge",
                    desc: "Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran ha...",
                    genres: [
                        "Comedy",
                        "Drama",
                        "Romance"
                    ],
                    runtime: 190,
                    year: "1995",
                    isMostLiked: true,
                    videos: {
                        trailer: "oIZ4U21DRlM"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/vI3aUGTuRRdM7J78KIdW98LdxE5.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/yeMW3DcyEthgtsqp5Se7YnPRJwp.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "family history",
                        "family drama",
                        "love affair"
                    ],
                    cast: [
                        "Kajol",
                        "Shah Rukh Khan",
                        "Amrish Puri"
                    ],
                    ageRating: "U-Rated", type: "movie", backdropNoLang: ""
                },
                {
                    title: "The Dark Knight",
                    desc: "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the stree...",
                    genres: [
                        "Drama",
                        "Action",
                        "Crime"
                    ],
                    runtime: 152,
                    year: "2008",
                    isMostLiked: true,
                    videos: {
                        clip: "QEBCT-Lsh-A",
                        trailer: "LDG9bisJEaI"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/A9YICp8lGP7Es5R8oD6qUbvDWhn.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/nO5Uix3Qr4WjOyU1BMPv0okyNWm.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "joker",
                        "sadism",
                        "chaos"
                    ],
                    cast: [
                        "Christian Bale",
                        "Heath Ledger",
                        "Michael Caine"
                    ],
                    ageRating: "U/A 13+", type: "movie", backdropNoLang: ""
                },
                {
                    title: "The Green Mile",
                    desc: "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, rec...",
                    genres: [
                        "Fantasy",
                        "Drama",
                        "Crime"
                    ],
                    runtime: 189,
                    year: "1999",
                    isMostLiked: true,
                    videos: {
                        clip: "YVUz6xZXSzI",
                        trailer: "Bg7epsq0OIQ"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/5Nz25DPXfQaSpDgce42Y3kFg9G4.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/zvl6GTeDHTpA3VQfaJH3Pw5MUjC.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "mentally disabled",
                        "southern usa",
                        "psychopath"
                    ],
                    cast: [
                        "Tom Hanks",
                        "David Morse",
                        "Bonnie Hunt"
                    ],
                    ageRating: "A-Rated", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Parasite",
                    desc: "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
                    genres: [
                        "Comedy",
                        "Thriller",
                        "Drama"
                    ],
                    runtime: 133,
                    year: "2019",
                    isMostLiked: true,
                    videos: {
                        clip: "ZNFdGfouBh0",
                        trailer: "bM9QabAojCg",
                        teaser: "lkA5ifth91k"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/gf1cTS5rYIgGDMvqjPZaTbD3Ycy.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/eEGZWCv0OYbMLCaNsDl1cgrvnWR.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "dark comedy",
                        "private lessons",
                        "birthday party"
                    ],
                    cast: [
                        "Song Kang-ho",
                        "Lee Sun-kyun",
                        "Cho Yeo-jeong"
                    ],
                    ageRating: "A-Rated", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Pulp Fiction",
                    desc: "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that i...",
                    genres: [
                        "Thriller",
                        "Crime"
                    ],
                    runtime: 154,
                    year: "1994",
                    isMostLiked: true,
                    videos: {
                        clip: "Mw8NR6p8gyI",
                        trailer: "tGpTpVyI_OQ"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/jlVOS4D6ledQGxGdL0EIte3TXfL.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/kpuNKsIzVbK3LDVo4iOJDAY0y7d.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "drug dealer",
                        "boxer",
                        "massage"
                    ],
                    cast: [
                        "John Travolta",
                        "Samuel L. Jackson",
                        "Uma Thurman"
                    ],
                    ageRating: "A-Rated", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Your Name.",
                    desc: "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence conti...",
                    genres: [
                        "Animation",
                        "Romance",
                        "Drama"
                    ],
                    runtime: 106,
                    year: "2016",
                    isMostLiked: true,
                    videos: {
                        trailer: "o4-URMnBOPU"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/qg0P94wHVrrozZkxfcXx0w5fHl.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/zKI7UKmsB5ywy6Rjs3wWvBfhafJ.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "race against time",
                        "afterlife",
                        "natural disaster"
                    ],
                    cast: [
                        "Ryunosuke Kamiki",
                        "Mone Kamishiraishi",
                        "Ryo Narita"
                    ],
                    ageRating: "U/A 7+", type: "movie", backdropNoLang: ""
                }
            ],
            shows: [
                {
                    title: "Game of Thrones",
                    desc: "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the wa...",
                    genres: [
                        "Sci-Fi & Fantasy",
                        "Drama",
                        "Action & Adventure"
                    ],
                    totalSeasons: 8,
                    totalEpisodes: 73,
                    year: "2011",
                    isMostLiked: true,
                    videos: {
                        trailer: "KPLWWIOCOOQ",
                        teaser: "hhqRmcsWqac"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/8ykii0BhFxktfbS62fs7iFZxkCL.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/zTGSKzZktsPqzvd75KvByK5G54A.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "kingdom",
                        "dragon",
                        "king"
                    ],
                    cast: [
                        "Peter Dinklage",
                        "Kit Harington",
                        "Nikolaj Coster-Waldau"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "Trouble is brewing in the Seven Kingdoms of Westeros. For the driven inhabitants of this visionary world, control of Westeros' Iron Throne holds the lure of great power. But in a land where the season...",
                            posterPath: "https://image.tmdb.org/t/p/w400/wgfKiqzuMrFIkU1M68DDDY8kGC1.jpg",
                            totalEpisode: 10,
                            year: "2011"
                        },
                        {
                            name: "Season 2",
                            desc: "The cold winds of winter are rising in Westeros...war is coming...and five kings continue their savage quest for control of the all-powerful Iron Throne. With winter fast approaching, the coveted Iron...",
                            posterPath: "https://image.tmdb.org/t/p/w400/9xfNkPwDOqyeUvfNhs1XlWA0esP.jpg",
                            totalEpisode: 10,
                            year: "2012"
                        },
                        {
                            name: "Season 3",
                            desc: "Duplicity and treachery...nobility and honor...conquest and triumph...and, of course, dragons. In Season 3, family and loyalty are the overarching themes as many critical storylines from the first two...",
                            posterPath: "https://image.tmdb.org/t/p/w400/5MkZjRnCKiIGn3bkXrXfndEzqOU.jpg",
                            totalEpisode: 10,
                            year: "2013"
                        },
                        {
                            name: "Season 4",
                            desc: "The War of the Five Kings is drawing to a close, but new intrigues and plots are in motion, and the surviving factions must contend with enemies not only outside their ranks, but within.",
                            posterPath: "https://image.tmdb.org/t/p/w400/jXIMScXE4J4EVHUba1JgxZnWbo4.jpg",
                            totalEpisode: 10,
                            year: "2014"
                        },
                        {
                            name: "Season 5",
                            desc: "The War of the Five Kings, once thought to be drawing to a close, is instead entering a new and more chaotic phase. Westeros is on the brink of collapse, and many are seizing what they can while the r...",
                            posterPath: "https://image.tmdb.org/t/p/w400/7Q1Hy1AHxAzA2lsmzEMBvuWTX0x.jpg",
                            totalEpisode: 10,
                            year: "2015"
                        },
                        {
                            name: "Season 6",
                            desc: "Following the shocking developments at the conclusion of season five, survivors from all parts of Westeros and Essos regroup to press forward, inexorably, towards their uncertain individual fates. Fam...",
                            posterPath: "https://image.tmdb.org/t/p/w400/p1udLh0gfqyZFmXBGa393gk8go5.jpg",
                            totalEpisode: 10,
                            year: "2016"
                        },
                        {
                            name: "Season 7",
                            desc: "The long winter is here. And with it comes a convergence of armies and attitudes that have been brewing for years.",
                            posterPath: "https://image.tmdb.org/t/p/w400/oX51n32QyHeFP5kErksemJsJljL.jpg",
                            totalEpisode: 7,
                            year: "2017"
                        },
                        {
                            name: "Season 8",
                            desc: "The Great War has come, the Wall has fallen and the Night King's army of the dead marches towards Westeros. The end is here, but who will take the Iron Throne?",
                            posterPath: "https://image.tmdb.org/t/p/w400/259Q5FuaD3TNB7DGauTaJVRC8XV.jpg",
                            totalEpisode: 6,
                            year: "2019"
                        }
                    ],
                    ageRating: "U/A 17+", type: "show", backdropNoLang: ""
                },
                {
                    title: "Money Heist",
                    desc: "To carry out the biggest heist in history, a mysterious man called The Professor recruits a band of eight robbers who have a single characteristic: none of them has anything to lose. Five months of se...",
                    genres: [
                        "Crime",
                        "Drama"
                    ],
                    totalSeasons: 3,
                    totalEpisodes: 41,
                    year: "2017",
                    isMostLiked: true,
                    videos: {
                        trailer: "_InqQJRqGW4"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/2f92nfDnutSdrqEfwiZcOFWuNLH.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/mdjqHbSttjMci0OcCNdXSfQc8YK.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "spain",
                        "perfect crime",
                        "robbery"
                    ],
                    cast: [
                        "Álvaro Morte",
                        "Pedro Alonso",
                        "Úrsula Corberó"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "Under the guidance of The Professor, a group of eight very peculiar robbers have attacked the National Coinage and Stamp Factory of Spain and took hostages to carry out the most perfect robbery in the...",
                            posterPath: "https://image.tmdb.org/t/p/w400/p0QHfM7Qn5sV8cDqyH0Eegqa5P8.jpg",
                            totalEpisode: 15,
                            year: "2017"
                        },
                        {
                            name: "Season 2",
                            desc: "The Professor and his team reunite to free Rio, this time targeting the Bank of Spain with a daring and dangerous new plan. The Resistance continues.",
                            posterPath: "https://image.tmdb.org/t/p/w400/65f9SDRqooLZEnaC629TnDDiGzb.jpg",
                            totalEpisode: 16,
                            year: "2019"
                        },
                        {
                            name: "Season 3",
                            desc: "Three years after the heist on the Royal Mint of Spain, the robbers are enjoying their lives paired-up in diverse locations.",
                            posterPath: "https://image.tmdb.org/t/p/w400/kJxqdEfInoai6Ca2tUEWbelveUP.jpg",
                            totalEpisode: 10,
                            year: "2021"
                        }
                    ],
                    ageRating: "U/A 13+", type: "show", backdropNoLang: ""
                },
                {
                    title: "Stranger Things",
                    desc: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
                    genres: [
                        "Drama",
                        "Sci-Fi & Fantasy",
                        "Mystery"
                    ],
                    totalSeasons: 5,
                    totalEpisodes: 42,
                    year: "2016",
                    isMostLiked: true,
                    videos: {
                        clip: "CKtq-bZgS8I",
                        trailer: "sBEvEcpnG7k"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/nviyFKko4Uk1mqHxehvxGhnMHFV.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/uyVM5qGksUzCgwo6UU0UrHex8Oj.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "love triangle",
                        "skateboarding",
                        "sheriff"
                    ],
                    cast: [
                        "Millie Bobby Brown",
                        "Finn Wolfhard",
                        "Gaten Matarazzo"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "Strange things are afoot in Hawkins, Indiana, where a young boy's sudden disappearance unearths a young girl with otherworldly powers.",
                            posterPath: "https://image.tmdb.org/t/p/w400/jVQETVYFkUye1e02p5rH04FaHA4.jpg",
                            totalEpisode: 8,
                            year: "2016"
                        },
                        {
                            name: "Stranger Things 2",
                            desc: "It's been nearly a year since Will's strange disappearance. But life's hardly back to normal in Hawkins. Not even close.",
                            posterPath: "https://image.tmdb.org/t/p/w400/lXS60geme1LlEob5Wgvj3KilClA.jpg",
                            totalEpisode: 9,
                            year: "2017"
                        },
                        {
                            name: "Stranger Things 3",
                            desc: "Budding romance. A brand-new mall. And rabid rats running toward danger. It's the summer of 1985 in Hawkins ... and one summer can change everything.",
                            posterPath: "https://image.tmdb.org/t/p/w400/fcb8ZuOH88cNuDys9tkX1xssiOU.jpg",
                            totalEpisode: 8,
                            year: "2019"
                        },
                        {
                            name: "Stranger Things 4",
                            desc: "Darkness returns to Hawkins just in time for spring break, igniting fresh terror, disturbing memories — and an ominous new threat.",
                            posterPath: "https://image.tmdb.org/t/p/w400/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
                            totalEpisode: 9,
                            year: "2022"
                        },
                        {
                            name: "Stranger Things 5",
                            desc: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
                            posterPath: "https://image.tmdb.org/t/p/w400/fvNCsg5bYpGauZv1iTeBuFl8aWS.jpg",
                            totalEpisode: 8,
                            year: "202- (Unannounced)"
                        }
                    ],
                    ageRating: "U/A 13+", type: "show", backdropNoLang: ""
                },
                {
                    title: "The Walking Dead",
                    desc: "Sheriff's deputy Rick Grimes awakens from a coma to find a post-apocalyptic world dominated by flesh-eating zombies. He sets out to find his family and encounters many other survivors along the way.",
                    genres: [
                        "Action & Adventure",
                        "Drama",
                        "Sci-Fi & Fantasy"
                    ],
                    totalSeasons: 11,
                    totalEpisodes: 177,
                    year: "2010",
                    isMostLiked: true,
                    videos: {},
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/mu1zFlKK7pQbGbkCHDyRRQ6RMRW.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/A4wW4sa1PIPnOTrPoGkjIXoPcSF.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "gore",
                        "undead",
                        "survival"
                    ],
                    cast: [
                        "Lauren Cohan",
                        "Norman Reedus",
                        "Jeffrey Dean Morgan"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "Rick Grimes wakes up from a coma to a world overrun by zombies, on a journey to find his family he must learn to survive the streets of post-apocalyptic Atlanta.",
                            posterPath: "https://image.tmdb.org/t/p/w400/kKN1Klhdxhbiwe8TBXIs6NYPr4C.jpg",
                            totalEpisode: 6,
                            year: "2010"
                        },
                        {
                            name: "Season 2",
                            desc: "Under Rick's leadership, the group leave Atlanta in search of sanctuary.",
                            posterPath: "https://image.tmdb.org/t/p/w400/77sdrexHQx3uQRM68Ffdanw8QaV.jpg",
                            totalEpisode: 13,
                            year: "2011"
                        },
                        {
                            name: "Season 3",
                            desc: "Having seemingly found a place of security, the group are faced with an unprecedented new threat.",
                            posterPath: "https://image.tmdb.org/t/p/w400/8Vy2SK2aMIDW3c6NeslQk7nc6on.jpg",
                            totalEpisode: 16,
                            year: "2012"
                        },
                        {
                            name: "Season 4",
                            desc: "As the group settle into life in a stable shelter, a new danger threatens disaster.",
                            posterPath: "https://image.tmdb.org/t/p/w400/1bFtBZg4ehney9ogQncllQAeX8o.jpg",
                            totalEpisode: 16,
                            year: "2013"
                        },
                        {
                            name: "Season 5",
                            desc: "After the season 4 finale left most of the main characters at the mercy of the sadistic inhabitants of Terminus. Season 5 will offer new directions for the group of survivors as scientist Eugene Porte...",
                            posterPath: "https://image.tmdb.org/t/p/w400/cimCEzhKLayG91lrAkn8E5ZQc7x.jpg",
                            totalEpisode: 16,
                            year: "2014"
                        },
                        {
                            name: "Season 6",
                            desc: "Rick attempts to use his authority in Alexandria to keep the inhabitants safe, even as a new threat looms.",
                            posterPath: "https://image.tmdb.org/t/p/w400/xXTDbcXFOm7vCxQHl4D7lblb88U.jpg",
                            totalEpisode: 16,
                            year: "2015"
                        },
                        {
                            name: "Season 7",
                            desc: "Rick and his group's world becomes even more brutal due to Negan's deadly example of what happens if they don't live under his rules. Everyone must begin again.",
                            posterPath: "https://image.tmdb.org/t/p/w400/bz6IMoRiw6eV2pawWGeOlLGKilZ.jpg",
                            totalEpisode: 16,
                            year: "2016"
                        },
                        {
                            name: "Season 8",
                            desc: "Rick and his survivors bring \"All-Out War\" to Negan and his forces. The Saviors are larger, better-equipped, and ruthless - but Rick and the unified communities are fighting for the promise of a brigh...",
                            posterPath: "https://image.tmdb.org/t/p/w400/jP6XyARVDEMKAncIbUql3krIOyd.jpg",
                            totalEpisode: 16,
                            year: "2017"
                        },
                        {
                            name: "Season 9",
                            desc: "With the defeat of Negan and the Saviors, the survivors are now rebuilding civilisation under Rick’s leadership. However, the group are forced to face their biggest threat yet as the walkers around th...",
                            posterPath: "https://image.tmdb.org/t/p/w400/gLraG3uYQFjnSBktU8DM4ylh6By.jpg",
                            totalEpisode: 16,
                            year: "2018"
                        },
                        {
                            name: "Season 10",
                            desc: "It is now Spring, a few months after the end of Season 9, when our group of survivors dared to cross into Whisperer territory during the harsh winter. The collected communities are still dealing with ...",
                            posterPath: "https://image.tmdb.org/t/p/w400/rqeYMLryjcawh2JeRpCVUDXYM5b.jpg",
                            totalEpisode: 22,
                            year: "2019"
                        },
                        {
                            name: "Season 11",
                            desc: "All who live in Alexandria struggle to refortify it and feed its increasing number of residents, which include the survivors from the fall of the Kingdom and the burning of Hilltop; along with Maggie ...",
                            posterPath: "https://image.tmdb.org/t/p/w400/2ypIGPkSJSaY1F059VzgVA6f6OJ.jpg",
                            totalEpisode: 24,
                            year: "2021"
                        }
                    ],
                    ageRating: "U/A 17+", type: "show", backdropNoLang: ""
                },
                {
                    title: "Lucifer",
                    desc: "Bored and unhappy as the Lord of Hell, Lucifer Morningstar abandoned his throne and retired to Los Angeles, where he has teamed up with LAPD detective Chloe Decker to take down criminals. But the long...",
                    genres: [
                        "Crime",
                        "Sci-Fi & Fantasy"
                    ],
                    totalSeasons: 6,
                    totalEpisodes: 93,
                    year: "2016",
                    isMostLiked: true,
                    videos: {
                        trailer: "X4bF_quwNtw"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/fDuyYalDwUDRVwii0kgLubqBc2H.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/vI2mH4P2qiaRD9cxPSBWyU7PawL.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "based on comic",
                        "devil",
                        "lapd"
                    ],
                    cast: [
                        "Tom Ellis",
                        "Lauren German",
                        "Kevin Alejandro"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "Bored with being the Lord of Hell, the devil relocates to Los Angeles, where he opens a nightclub and forms a connection with a homicide detective.",
                            posterPath: "https://image.tmdb.org/t/p/w400/e6FQvm5jycG9xx1ZWowIYBc3Shn.jpg",
                            totalEpisode: 13,
                            year: "2016"
                        },
                        {
                            name: "Season 2",
                            desc: "Lucifer returns for another season, but his devil-may-care attitude may soon need an adjustment: His mother is coming to town.",
                            posterPath: "https://image.tmdb.org/t/p/w400/NhVsRaNhfXknIseUb2hY02gqom.jpg",
                            totalEpisode: 18,
                            year: "2016"
                        },
                        {
                            name: "Season 3",
                            desc: "As Lucifer struggles with an identity crisis, a gruff new police lieutenant shakes up the status quo with Chloe and the rest of the LAPD.",
                            posterPath: "https://image.tmdb.org/t/p/w400/x4oi3N7JNF0QGtBzyLJjolivmWx.jpg",
                            totalEpisode: 26,
                            year: "2017"
                        },
                        {
                            name: "Season 4",
                            desc: "As Chloe struggles to come to terms with Lucifer's disturbing revelation, a rogue priest sets out to stop a long-rumored prophecy.",
                            posterPath: "https://image.tmdb.org/t/p/w400/4FoFVP6wpBNutIG2FyglQhySa7V.jpg",
                            totalEpisode: 10,
                            year: "2019"
                        },
                        {
                            name: "Season 5",
                            desc: "Lucifer makes a tumultuous return to the land of the living in hopes of making things right with Chloe. A devil’s work is never done.",
                            posterPath: "https://image.tmdb.org/t/p/w400/f7uHY54huql9oIwMonFQd6Vylvd.jpg",
                            totalEpisode: 16,
                            year: "2020"
                        },
                        {
                            name: "Season 6",
                            desc: "Lucifer scored the promotion, but does he really want the job? Plus, Chloe prepares to give up detective work, Amenadiel joins the LAPD, and more.",
                            posterPath: "https://image.tmdb.org/t/p/w400/uHpfjWUJI2gXQIIxjgAvOZWJORx.jpg",
                            totalEpisode: 10,
                            year: "2021"
                        }
                    ],
                    ageRating: "U/A 17+", type: "show", backdropNoLang: ""
                },
                {
                    title: "Breaking Bad",
                    desc: "Walter White, a New Mexico chemistry teacher, is diagnosed with Stage III cancer and given a prognosis of only two years left to live. He becomes filled with a sense of fearlessness and an unrelenting...",
                    genres: [
                        "Drama",
                        "Crime"
                    ],
                    totalSeasons: 5,
                    totalEpisodes: 62,
                    year: "2008",
                    isMostLiked: true,
                    videos: {
                        trailer: "XZ8daibM3AE"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/hwIAR9FDsKULo8efoOUuxsFtO2u.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/chw44B2VnLha8iiTdyZcIW0ZELC.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "new mexico",
                        "drug dealer",
                        "narcissism"
                    ],
                    cast: [
                        "Bryan Cranston",
                        "Aaron Paul",
                        "Anna Gunn"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "High school chemistry teacher Walter White's life is suddenly transformed by a dire medical diagnosis. Street-savvy former student Jesse Pinkman \"teaches\" Walter a new trade.",
                            posterPath: "https://image.tmdb.org/t/p/w400/1BP4xYv9ZG4ZVHkL7ocOziBbSYH.jpg",
                            totalEpisode: 7,
                            year: "2008"
                        },
                        {
                            name: "Season 2",
                            desc: "Walt must deal with the chain reaction of his choice, as he and Jesse face new and severe consequences. When danger and suspicion around Walt escalate, he is pushed to new levels of desperation. Just ...",
                            posterPath: "https://image.tmdb.org/t/p/w400/e3oGYpoTUhOFK0BJfloru5ZmGV.jpg",
                            totalEpisode: 13,
                            year: "2009"
                        },
                        {
                            name: "Season 3",
                            desc: "Walt continues to battle dueling identities: a desperate husband and father trying to provide for his family, and a newly appointed key player in the Albuquerque drug trade. As the danger around him e...",
                            posterPath: "https://image.tmdb.org/t/p/w400/ffP8Q8ew048YofHRnFVM18B2fPG.jpg",
                            totalEpisode: 13,
                            year: "2010"
                        },
                        {
                            name: "Season 4",
                            desc: "Walt and Jesse must cope with the fallout of their previous actions, both personally and professionally. Tension mounts as Walt faces a true standoff with his employer, Gus, with neither side willing ...",
                            posterPath: "https://image.tmdb.org/t/p/w400/5p7WduYlIIFjVYUIsqRZLFYWjMc.jpg",
                            totalEpisode: 13,
                            year: "2011"
                        },
                        {
                            name: "Season 5",
                            desc: "Walt is faced with the prospect of moving on in a world without his enemy. As the pressure of a criminal life starts to build, Skyler struggles to keep Walt’s terrible secrets. Facing resistance from ...",
                            posterPath: "https://image.tmdb.org/t/p/w400/r3z70vunihrAkjILQKWHX0G2xzO.jpg",
                            totalEpisode: 16,
                            year: "2012"
                        }
                    ],
                    ageRating: "U/A 17+", type: "show", backdropNoLang: ""
                },
                {
                    title: "Squid Game",
                    desc: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits — with deadly high stakes.",
                    genres: [
                        "Action & Adventure",
                        "Mystery",
                        "Drama"
                    ],
                    totalSeasons: 2,
                    totalEpisodes: 12,
                    year: "2021",
                    isMostLiked: true,
                    videos: {
                        trailer: "oqxAJKy0ii4",
                        teaser: "5oFn2eodVD0"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/oIxbWNblYK3kG2DF3FOgS0Ahztd.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/6YFWTX7fiGjWpsnJWLLV4RSbJWd.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "challenge",
                        "survival",
                        "cruelty"
                    ],
                    cast: [
                        "Lee Jung-jae",
                        "Wi Ha-jun",
                        "Park Hae-soo"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits — with deadly high stakes.",
                            posterPath: "https://image.tmdb.org/t/p/w400/jlbrV1Kl4Y8pWXu12SppebRs7On.jpg",
                            totalEpisode: 9,
                            year: "2021"
                        },
                        {
                            name: "Season 2",
                            desc: "Three years after winning Squid Game, Player 456 remains determined to find the people behind the game and put an end to their vicious sport. Using this fortune to fund his search, Gi-hun starts with ...",
                            posterPath: "https://image.tmdb.org/t/p/w400/xRf1qFosRHrymBL34H6nQg773Rk.jpg",
                            totalEpisode: 3,
                            year: "2024"
                        }
                    ],
                    ageRating: "U/A 13+", type: "show", backdropNoLang: ""
                },
                {
                    title: "Riverdale",
                    desc: "Set in the present, the series offers a bold, subversive take on Archie, Betty, Veronica and their friends, exploring the surreality of small-town life, the darkness and weirdness bubbling beneath Riv...",
                    genres: [
                        "Crime",
                        "Drama",
                        "Mystery"
                    ],
                    totalSeasons: 7,
                    totalEpisodes: 137,
                    year: "2017",
                    isMostLiked: true,
                    videos: {
                        trailer: "HxtLlByaYTc"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/wkPsKQOGHaykXslm4x55X14RZWL.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/gn3jfu3KfOPH2dZ9J2ER52ZaBtL.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "love triangle",
                        "killing",
                        "small town"
                    ],
                    cast: [
                        "K.J. Apa",
                        "Lili Reinhart",
                        "Camila Mendes"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "Set in the present, the series offers a bold, subversive take on Archie, Betty, Veronica and their friends, exploring the surreality of small-town life, the darkness and weirdness bubbling beneath Riv...",
                            posterPath: "https://image.tmdb.org/t/p/w400/djryGEWHRgRjLjPeR6SnnmuoJDr.jpg",
                            totalEpisode: 13,
                            year: "2017"
                        },
                        {
                            name: "Season 2",
                            desc: "Set in the present, the series offers a bold, subversive take on Archie, Betty, Veronica and their friends, exploring the surreality of small-town life, the darkness and weirdness bubbling beneath Riv...",
                            posterPath: "https://image.tmdb.org/t/p/w400/sZReUR2oj6XDWPojwT5Sc6pBq0X.jpg",
                            totalEpisode: 22,
                            year: "2017"
                        },
                        {
                            name: "Season 3",
                            desc: "Set in the present, the series offers a bold, subversive take on Archie, Betty, Veronica and their friends, exploring the surreality of small-town life, the darkness and weirdness bubbling beneath Riv...",
                            posterPath: "https://image.tmdb.org/t/p/w400/gskv297rlbyzLaTU1XZf8UBbxp0.jpg",
                            totalEpisode: 22,
                            year: "2018"
                        },
                        {
                            name: "Season 4",
                            desc: "Set in the present, the series offers a bold, subversive take on Archie, Betty, Veronica and their friends, exploring the surreality of small-town life, the darkness and weirdness bubbling beneath Riv...",
                            posterPath: "https://image.tmdb.org/t/p/w400/4X7o1ssOEvp4BFLim1AZmPNcYbU.jpg",
                            totalEpisode: 19,
                            year: "2019"
                        },
                        {
                            name: "Season 5",
                            desc: "Set in the present, the series offers a bold, subversive take on Archie, Betty, Veronica and their friends, exploring the surreality of small-town life, the darkness and weirdness bubbling beneath Riv...",
                            posterPath: "https://image.tmdb.org/t/p/w400/wRbjVBdDo5qHAEOVYoMWpM58FSA.jpg",
                            totalEpisode: 19,
                            year: "2021"
                        },
                        {
                            name: "Season 6",
                            desc: "Picking up where season five ended, with Archie and Betty decide to give their romantic relationship another shot, just as a bomb planted by Hiram Lodge under Archie's bed was about to go off. Strange...",
                            posterPath: "https://image.tmdb.org/t/p/w400/7o73cSQ2JHi4pkV25E7Mba4mdwu.jpg",
                            totalEpisode: 22,
                            year: "2021"
                        },
                        {
                            name: "Season 7",
                            desc: "Picking up where season 6 ended, season 7 finds Jughead Jones trapped in the 1950s. He has no idea how he got there, nor how to get back to the present. His friends are no help, as they are living see...",
                            posterPath: "https://image.tmdb.org/t/p/w400/qjD9r1GYSd60jSw3LwP4zYkM7m0.jpg",
                            totalEpisode: 20,
                            year: "2023"
                        }
                    ],
                    ageRating: "U/A 17+", type: "show", backdropNoLang: ""
                },
                {
                    title: "The Good Doctor",
                    desc: "Shaun Murphy, a young surgeon with autism and savant syndrome, relocates from a quiet country life to join a prestigious hospital's surgical unit. Unable to personally connect with those around him, S...",
                    genres: [
                        "Drama"
                    ],
                    totalSeasons: 7,
                    totalEpisodes: 126,
                    year: "2017",
                    isMostLiked: true,
                    videos: {
                        trailer: "lnY9FWUTY84"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/i3GAgdr3adKPMI8FVxdXZuqiAQl.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/hw9K4mRwNZH1ebp4UUawvJp1Bbn.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "nurse",
                        "medicine",
                        "autism"
                    ],
                    cast: [
                        "Freddie Highmore",
                        "Fiona Gubelmann",
                        "Will Yun Lee"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "Shaun Murphy, a young surgeon with autism and savant syndrome, relocates from a quiet country life to join a prestigious hospital's surgical unit. Unable to personally connect with those around him, S...",
                            posterPath: "https://image.tmdb.org/t/p/w400/hiNyjUSTFrbMv3Sc0CxNW2o39az.jpg",
                            totalEpisode: 18,
                            year: "2017"
                        },
                        {
                            name: "Season 2",
                            desc: "Dr. Shaun Murphy’s world has begun to expand as he continues to work harder than he ever has before, navigating his new environment and relationships to prove to his colleagues at the prestigious St. ...",
                            posterPath: "https://image.tmdb.org/t/p/w400/sIq4SFloM0JSeRNAQVqb5g5zAng.jpg",
                            totalEpisode: 18,
                            year: "2018"
                        },
                        {
                            name: "Season 3",
                            desc: "Dr. Shaun Murphy continues to use his extraordinary medical gifts at St. Bonaventure Hospital’s surgical unit. As his friendships deepen, Shaun tackles the world of dating for the first time and conti...",
                            posterPath: "https://image.tmdb.org/t/p/w400/8QFssOwaWZ3eB60cGwDpfrZBscv.jpg",
                            totalEpisode: 20,
                            year: "2019"
                        },
                        {
                            name: "Season 4",
                            desc: "Dr. Shaun Murphy continues to use his extraordinary medical gifts at St. Bonaventure Hospital’s surgical unit. As his romantic relationship with Lea deepens, he will also face new responsibilities as ...",
                            posterPath: "https://image.tmdb.org/t/p/w400/6tfT03sGp9k4c0J3dypjrI8TSAI.jpg",
                            totalEpisode: 20,
                            year: "2020"
                        },
                        {
                            name: "Season 5",
                            desc: "Shaun Murphy, a young surgeon with autism and savant syndrome, relocates from a quiet country life to join a prestigious hospital's surgical unit. Unable to personally connect with those around him, S...",
                            posterPath: "https://image.tmdb.org/t/p/w400/cXUqtadGsIcZDWUTrfnbDjAy8eN.jpg",
                            totalEpisode: 18,
                            year: "2021"
                        },
                        {
                            name: "Season 6",
                            desc: "Shaun Murphy, a young surgeon with autism and savant syndrome, relocates from a quiet country life to join a prestigious hospital's surgical unit. Unable to personally connect with those around him, S...",
                            posterPath: "https://image.tmdb.org/t/p/w400/luhKkdD80qe62fwop6sdrXK9jUT.jpg",
                            totalEpisode: 22,
                            year: "2022"
                        },
                        {
                            name: "Season 7",
                            desc: "Shaun and Lea get off to a bumpy start as new parents, while at work Shaun tries to navigate a problematic with one of the new residents he has to supervise: another doctor with Autism Spectrum DIsord...",
                            posterPath: "https://image.tmdb.org/t/p/w400/pFqzXacKsi9or1GVdxTLutXD9zM.jpg",
                            totalEpisode: 10,
                            year: "2024"
                        }
                    ],
                    ageRating: "U/A 17+", type: "show", backdropNoLang: ""
                },
                {
                    title: "WandaVision",
                    desc: "Wanda Maximoff and Vision—two super-powered beings living idealized suburban lives—begin to suspect that everything is not as it seems.",
                    genres: [
                        "Sci-Fi & Fantasy",
                        "Mystery",
                        "Drama"
                    ],
                    totalSeasons: 1,
                    totalEpisodes: 9,
                    year: "2021",
                    isMostLiked: true,
                    videos: {
                        trailer: "UBhlqe2OTt4",
                        teaser: "1GQ9mH5Zzr0"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/jcQ5ez9AdJIq9IHVo61PqDPLQsS.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/bqIhmrQcPTqDqIkNhdiK5Epvk2D.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "witch",
                        "loss of loved one",
                        "sorcery"
                    ],
                    cast: [
                        "Elizabeth Olsen",
                        "Paul Bettany",
                        "Kathryn Hahn"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "Wanda Maximoff and Vision—two super-powered beings living idealized suburban lives—begin to suspect that everything is not as it seems.",
                            posterPath: "https://image.tmdb.org/t/p/w400/glKDfE6btIRcVB5zrjspRIs4r52.jpg",
                            totalEpisode: 9,
                            year: "2021"
                        }
                    ],
                    ageRating: "U/A 17+", type: "show", backdropNoLang: ""
                },
                {
                    title: "Loki",
                    desc: "After stealing the Tesseract during the events of “Avengers: Endgame,” an alternate version of Loki is brought to the mysterious Time Variance Authority, a bureaucratic organization that exists outsid...",
                    genres: [
                        "Drama",
                        "Sci-Fi & Fantasy"
                    ],
                    totalSeasons: 2,
                    totalEpisodes: 12,
                    year: "2021",
                    isMostLiked: true,
                    videos: {
                        trailer: "nW948Va-l10",
                        teaser: "R6o1UWEBVQA"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/6uEGQvlfel4E1TSFXMpr8i5Rux7.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/6yb7XUr6l7ctCwf8OJ9NN5brQ53.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "time",
                        "time travel",
                        "superhero"
                    ],
                    cast: [
                        "Tom Hiddleston",
                        "Sophia di Martino",
                        "Wunmi Mosaku"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "Loki, the God of Mischief, steps out of his brother's shadow to embark on an adventure that takes place after the events of \"Avengers: Endgame.\"",
                            posterPath: "https://image.tmdb.org/t/p/w400/ixLfQzzhBLxXf71mg1oosmGEcH5.jpg",
                            totalEpisode: 6,
                            year: "2021"
                        },
                        {
                            name: "Season 2",
                            desc: "In the aftermath of Season 1, Loki finds himself in a battle for the soul of the Time Variance Authority. Along with Mobius, Hunter B-15 and a team of new and returning characters, Loki navigates an e...",
                            posterPath: "https://image.tmdb.org/t/p/w400/6VcSRtdYz5B3xVb8zofFt2TCJLV.jpg",
                            totalEpisode: 6,
                            year: "2023"
                        }
                    ],
                    ageRating: "U/A 17+", type: "show", backdropNoLang: ""
                },
                {
                    title: "The Big Bang Theory",
                    desc: "Physicists Leonard and Sheldon find their nerd-centric social circle with pals Howard and Raj expanding when aspiring actress Penny moves in next door.",
                    genres: [
                        "Comedy"
                    ],
                    totalSeasons: 12,
                    totalEpisodes: 279,
                    year: "2007",
                    isMostLiked: true,
                    videos: {
                        clip: "3g2yTcg1QFI"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/4o1plAPue8wntFYO8lGZ4qQxQhY.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/bUD1Se00HywZOc0uWPo1DMRDCFU.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "geek",
                        "nerd",
                        "friends"
                    ],
                    cast: [
                        "Johnny Galecki",
                        "Jim Parsons",
                        "Kaley Cuoco"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "University physicists Leonard and Sheldon know whether to use an integral or a differential to solve the area under a curve. But they don't have a clue about girls. Or dating. Or clothes. Or parties. ...",
                            posterPath: "https://image.tmdb.org/t/p/w400/xeMLtxqVnHmtlrgvj3RUO9XQNT2.jpg",
                            totalEpisode: 17,
                            year: "2007"
                        },
                        {
                            name: "Season 2",
                            desc: "This season, Leonard gets a girl. So does Sheldon. Howard drives the Mars Rover into a ditch. Raj woos a terminator. Gorgeous girl-next-door Penny falls under the spell of Age of Conan. And super-smar...",
                            posterPath: "https://image.tmdb.org/t/p/w400/8W0AmwfAWsmx9I95Naqzv6pI94Z.jpg",
                            totalEpisode: 23,
                            year: "2008"
                        },
                        {
                            name: "Season 3",
                            desc: "Worlds collide in Season 3! A love affair with Penny has opened a big, wide, wonderful world of romance for Leonard. But Sheldon likes the world just the way it was, thank you. All of which makes for ...",
                            posterPath: "https://image.tmdb.org/t/p/w400/yzUeZH3Qhh21nQR2mH5VqHGrM9w.jpg",
                            totalEpisode: 23,
                            year: "2009"
                        },
                        {
                            name: "Season 4",
                            desc: "This season the Big Bang gang’s romantic universe expands. On the rebound from Penny, Leonard falls into the arms of Raj’s sister Priya. Sheldon gets a girlfriend, or rather a friend who is a girl: Am...",
                            posterPath: "https://image.tmdb.org/t/p/w400/gWVaLfld2V57gMoDd3Njv6JpRsq.jpg",
                            totalEpisode: 24,
                            year: "2010"
                        },
                        {
                            name: "Season 5",
                            desc: "In season five, Penny and Leonard's relationship is relaunched in full \"beta test\" mode, while Sheldon, Howard, and Raj discover the feminine mystique is something that cannot be easily graphed or cal...",
                            posterPath: "https://image.tmdb.org/t/p/w400/wlAxsPhqqfCakXIQJvOuo4aWAo7.jpg",
                            totalEpisode: 24,
                            year: "2011"
                        },
                        {
                            name: "Season 6",
                            desc: "Whether on or above Earth, hilarity is outrageously universal in TV's most popular comedy featuring four forward-thinking but socially backward geniuses. Fun discoveries multiply: Leonard learns jealo...",
                            posterPath: "https://image.tmdb.org/t/p/w400/loGfAOaq8mtuCUyRzXPylmogZlA.jpg",
                            totalEpisode: 24,
                            year: "2012"
                        },
                        {
                            name: "Season 7",
                            desc: "Leonard returns from his North Sea expedition to find that his relationship with Penny involves more beta-testing than he’s ever done in a lab. Howard’s attachment issues with the women in his life in...",
                            posterPath: "https://image.tmdb.org/t/p/w400/JCLYJdBQWYMYODiKAvCSiVqj1F.jpg",
                            totalEpisode: 24,
                            year: "2013"
                        },
                        {
                            name: "Season 8",
                            desc: "Sheldon is rescued from his soul-searching cross-country train trip (older but no wiser) and that means The Big Bang Theory gang's all here to spread another gear's cheer as TV's most attended laugh s...",
                            posterPath: "https://image.tmdb.org/t/p/w400/853ErM02RtBHdK5zA4E3J0TtxR7.jpg",
                            totalEpisode: 24,
                            year: "2014"
                        },
                        {
                            name: "Season 9",
                            desc: "Our two genius roommates, Leonard and Sheldon, and their friends are back once again (smarter, but no wiser). Last season, Sheldon went soul-searching (on a train, of course) and was prepared to make ...",
                            posterPath: "https://image.tmdb.org/t/p/w400/vZL8qekJxGqluZC5QauG7cJY6xc.jpg",
                            totalEpisode: 24,
                            year: "2015"
                        },
                        {
                            name: "Season 10",
                            desc: "Leonard and Penny renew their vows, this time inviting their friends and family for wedding party; they also learn that marriage is about compromise, and figure out how to support each other. Sheldon ...",
                            posterPath: "https://image.tmdb.org/t/p/w400/hZXAruQr6Kr8enwKN9pVWGxucDY.jpg",
                            totalEpisode: 24,
                            year: "2016"
                        },
                        {
                            name: "Season 11",
                            desc: "After years of only looking out for himself, Sheldon found Amy Farrah Fowler to be the most patient woman to ever walk the earth, and... they did it! Wedding fever continues in season 11.",
                            posterPath: "https://image.tmdb.org/t/p/w400/A373F7AzZtIFy3l2LryC2yr2hC2.jpg",
                            totalEpisode: 24,
                            year: "2017"
                        },
                        {
                            name: "Season 12",
                            desc: "Best friends and brilliant physicists Leonard Hofstadter and Sheldon Cooper are geniuses in the lab but socially challenge outside of it. Despite this, Leonard married his beautiful, street-smart neig...",
                            posterPath: "https://image.tmdb.org/t/p/w400/txta7TTNUfGCgsJI9oB6vb6uFlA.jpg",
                            totalEpisode: 24,
                            year: "2018"
                        }
                    ],
                    ageRating: "U/A 17+", type: "show", backdropNoLang: ""
                }
            ]
        },
        newRelease: {
            tabs: ['home', 'movie', 'show'],
            title: "New Releases",
            movieTitle: "Fresh Releases",
            showTitle: "New Arrivals",
            movies: [
                {
                    title: "Kill",
                    desc: "When an army commando finds out his true love is engaged against her will, he boards a New Dehli-bound train in a daring quest to derail the arranged marriage. But when a gang of knife-wielding thieve...",
                    genres: [
                        "Action",
                        "Crime",
                        "Thriller"
                    ],
                    runtime: 105,
                    year: "2024",
                    isMostLiked: true,
                    videos: {
                        clip: "rqV6AAqUlc0",
                        trailer: "da7lKeeS67c"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/zwWI0vlgTNkPqxrgP1MdjoJ5Nl.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/kdry2LAkDhiGMKdfXZGwM9figRj.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "relationship",
                        "aggressive",
                        "action hero"
                    ],
                    cast: [
                        "Lakshya Lalwani",
                        "Abhishek Chauhan",
                        "Pratap Verma"
                    ],
                    ageRating: "A-Rated", type: "movie", backdropNoLang: "https://image.tmdb.org/t/p/original/okVLmXL5y18dfN2R4ufMZEGaeCd.jpg"
                },
                {
                    title: "Sector 36",
                    desc: "When several children disappear at the hands of a serial killer in Sector 36, a corrupt cop is forced to pursue the chilling case at all costs.",
                    genres: [
                        "Crime",
                        "Thriller",
                        "Drama"
                    ],
                    runtime: 124,
                    year: "2024",
                    isMostLiked: true,
                    videos: {},
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/c1AMvqX97LhsZa9i54Xuz2u0XbG.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/9MJ5v9Dw0xErXEF1W9lLC7yzif3.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "suspenseful",
                        "horrified"
                    ],
                    cast: [
                        "Deepak Dobriyal",
                        "Vikrant Massey",
                        "Akash Khurana"
                    ],
                    ageRating: "A-Rated", type: "movie", backdropNoLang: "https://image.tmdb.org/t/p/original/as8fZuf0c8V2iMO43kw13hc6a9V.jpg"
                },
                {
                    title: "Stree 2",
                    desc: "After the events of Stree, the town of Chanderi is being haunted again. This time, women are mysteriously abducted by a terrifying headless entity. Once again, it's up to Vicky and his friends to save...",
                    genres: [
                        "Horror",
                        "Comedy"
                    ],
                    runtime: 143,
                    year: "2024",
                    isMostLiked: true,
                    videos: {
                        trailer: "VlvOgk5BHS4",
                        teaser: "D1SFjYoXRB8"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/yNy9rc3N4BmTOBJGYZUksd30MwR.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/8jM7kk7AoSMLFCLPWSbO2zxldns.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "Not Available"
                    ],
                    cast: [
                        "Rajkummar Rao",
                        "Shraddha Kapoor",
                        "Aparshakti Khurana"
                    ],
                    ageRating: "U/A 12+", type: "movie", backdropNoLang: "https://image.tmdb.org/t/p/original/jDxqjLUBpOVeKhLPJFKSyneKwF7.jpg"
                },
                {
                    title: "Maharaj",
                    desc: "Based on a real-life historic court case, a bold journalist questions a revered leader's immoral behavior.",
                    genres: [
                        "Drama",
                        "History"
                    ],
                    runtime: 132,
                    year: "2024",
                    isMostLiked: true,
                    videos: {},
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/9RdDCAdZ8PL2qo6pJGRU1vY0UYj.jpg",
                        isLogoIncluded: false
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/fMTEedgZoyPCo73mqUIvME4401t.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "adaptation"
                    ],
                    cast: [
                        "Junaid Khan",
                        "Jaideep Ahlawat",
                        "Sharvari Wagh"
                    ],
                    ageRating: "U/A 16+", type: "movie", backdropNoLang: "https://image.tmdb.org/t/p/original/9RdDCAdZ8PL2qo6pJGRU1vY0UYj.jpg"
                },
                {
                    title: "Phir Aayi Hasseen Dillruba",
                    desc: "While evading the cops in Agra, Rani and Rishu scheme to run away together. But when their plans go awry, Rani asks a mild-mannered admirer for help.",
                    genres: [
                        "Mystery",
                        "Thriller",
                        "Romance"
                    ],
                    runtime: 133,
                    year: "2024",
                    isMostLiked: false,
                    videos: {
                        teaser: "UPRseRavhYQ"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/h7X8blm6YL3ivEtHtyf5DgAeoXt.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/e7s8FBILdYKdpmMXpebmXDfHpRL.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "sequel"
                    ],
                    cast: [
                        "Taapsee Pannu",
                        "Vikrant Massey",
                        "Sunny Kaushal"
                    ],
                    ageRating: "U-Rated", type: "movie", backdropNoLang: "https://image.tmdb.org/t/p/original/qWyNNd4uAr8tta2Hd5Toiz14fVl.jpg"
                },
                {
                    title: "Munjya",
                    desc: "A young man's visit to his native village unveils a family secret and a vengeful spirit, Munjya, who wants to get married. Now the young man must fight to protect himself and his love from Munjya's cl...",
                    genres: [
                        "Comedy",
                        "Horror"
                    ],
                    runtime: 121,
                    year: "2024",
                    isMostLiked: true,
                    videos: {},
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/r1prcDoTsFDePj4W10eHLYX0xwK.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/nGV2pU4RXXvb1JuZgv6o2EDxydr.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "ghost",
                        "horror comedy",
                        "horror"
                    ],
                    cast: [
                        "Abhay Verma",
                        "Sharvari Wagh",
                        "Ayush Ulagadde"
                    ],
                    ageRating: "U/A 12+", type: "movie", backdropNoLang: "https://image.tmdb.org/t/p/original/tjmE6ZzJqfGynRvTYa55IM5e7Xc.jpg"
                },
                {
                    title: "Inside Out 2",
                    desc: "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been running a suc...",
                    genres: [
                        "Animation",
                        "Family",
                        "Adventure"
                    ],
                    runtime: 97,
                    year: "2024",
                    isMostLiked: true,
                    videos: {
                        clip: "HoqfAbrl7ro",
                        trailer: "u69y5Ie519M",
                        teaser: "QGFELnpig2M"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/hLuPF9HxtjbS7ZzSjMRG3RpUffp.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/h40hblm8J1if7T2CBMjCD85HwuD.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "sadness",
                        "disgust",
                        "sequel"
                    ],
                    cast: [
                        "Amy Poehler",
                        "Maya Hawke",
                        "Kensington Tallman"
                    ],
                    ageRating: "U/A 7+", type: "movie", backdropNoLang: "https://image.tmdb.org/t/p/original/p5ozvmdgsmbWe0H8Xk7Rc8SCwAB.jpg"
                },
                {
                    title: "Deadpool & Wolverine",
                    desc: "A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary, Deadpool, behind him. But when his homeworld faces an existential threat, Wade must reluctantly suit...",
                    genres: [
                        "Action",
                        "Comedy",
                        "Science Fiction"
                    ],
                    runtime: 128,
                    year: "2024",
                    isMostLiked: true,
                    videos: {
                        trailer: "Idh8n5XuYIA",
                        teaser: "LYaJVfiwv0w"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/wNa8cZp4fjF5Fa1oE5HhF6Km7kK.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/vbipZWH60X3h8RJIIgBYdDsBXwu.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "hero",
                        "superhero",
                        "anti hero"
                    ],
                    cast: [
                        "Ryan Reynolds",
                        "Hugh Jackman",
                        "Emma Corrin"
                    ],
                    ageRating: "A-Rated", type: "movie", backdropNoLang: "https://image.tmdb.org/t/p/original/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg"
                },
                {
                    title: "Bad Boys: Ride or Die",
                    desc: "After their late former Captain is framed, Lowrey and Burnett try to clear his name, only to end up on the run themselves.",
                    genres: [
                        "Action",
                        "Crime",
                        "Thriller"
                    ],
                    runtime: 115,
                    year: "2024",
                    isMostLiked: true,
                    videos: {
                        clip: "8LdzWbIz8DA",
                        trailer: "uWLNl_KQCAU",
                        teaser: "PoV5LL6u4TI"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/8LlguJSvtzhxi4onqZxTStStUHJ.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/4KqzvqfiXk7gPH6g1zwyPA48NKn.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "miami, florida",
                        "sequel",
                        "on the run"
                    ],
                    cast: [
                        "Will Smith",
                        "Martin Lawrence",
                        "Vanessa Hudgens"
                    ],
                    ageRating: "A-Rated", type: "movie", backdropNoLang: "https://image.tmdb.org/t/p/original/tncbMvfV0V07UZozXdBEq4Wu9HH.jpg"
                },
                {
                    title: "A Quiet Place: Day One",
                    desc: "As New York City is invaded by alien creatures who hunt by sound, a woman named Sam fights to survive with her cat.",
                    genres: [
                        "Horror",
                        "Science Fiction",
                        "Thriller"
                    ],
                    runtime: 99,
                    year: "2024",
                    isMostLiked: true,
                    videos: {
                        clip: "p_8e6h4atKY",
                        trailer: "E-WIb4ATfT8",
                        teaser: "kshP9EQX-Ss"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/lg5oc1YHigZopjOCXMctazUuAzI.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/hdlpXXbRWPlp5J5ni1qM7D7vezp.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "monster",
                        "escape",
                        "cat"
                    ],
                    cast: [
                        "Lupita Nyong'o",
                        "Joseph Quinn",
                        "Alex Wolff"
                    ],
                    ageRating: "U/A 13+", type: "movie", backdropNoLang: "https://image.tmdb.org/t/p/original/6XjMwQTvnICBz6TguiDKkDVHvgS.jpg"
                },
                {
                    title: "Despicable Me 4",
                    desc: "Gru and Lucy and their girls—Margo, Edith and Agnes—welcome a new member to the Gru family, Gru Jr., who is intent on tormenting his dad. Gru also faces a new nemesis in Maxime Le Mal and his femme fa...",
                    genres: [
                        "Animation",
                        "Family",
                        "Comedy"
                    ],
                    runtime: 94,
                    year: "2024",
                    isMostLiked: true,
                    videos: {
                        clip: "RaIucLGR3wo",
                        trailer: "LtNYaH61dXY",
                        teaser: "rq68v4Q6aSo"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/mFP1aLKpwo0Bkt7aD3FHcp537ft.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/lCAOTLWSQpZBoVtLjG67tY0nZJB.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "superhero",
                        "villain",
                        "sequel"
                    ],
                    cast: [
                        "Steve Carell",
                        "Kristen Wiig",
                        "Will Ferrell"
                    ],
                    ageRating: "U/A 7+", type: "movie", backdropNoLang: "https://image.tmdb.org/t/p/original/lgkPzcOSnTvjeMnuFzozRO5HHw1.jpg"
                },
                {
                    title: "Twisters",
                    desc: "As storm season intensifies, the paths of former storm chaser Kate Carter and reckless social-media superstar Tyler Owens collide when terrifying phenomena never seen before are unleashed. The pair an...",
                    genres: [
                        "Action",
                        "Adventure",
                        "Thriller"
                    ],
                    runtime: 123,
                    year: "2024",
                    isMostLiked: true,
                    videos: {
                        clip: "4DMFewOInMI",
                        trailer: "AZbEi95SuMg",
                        teaser: "5fuQUrEW8oc"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/qmsDsg7uAIHppsMXAChKDRFZwKL.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/ySUehfaAboyWvi4o7AhqehyPzgd.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "dying and death",
                        "rodeo",
                        "climate"
                    ],
                    cast: [
                        "Daisy Edgar-Jones",
                        "Glen Powell",
                        "Anthony Ramos"
                    ],
                    ageRating: "U/A 13+", type: "movie", backdropNoLang: "https://image.tmdb.org/t/p/original/7aPrv2HFssWcOtpig5G3HEVk3uS.jpg"
                }
            ],
            shows: [
                {
                    title: "Mirzapur",
                    desc: "The iron-fisted Akhandanand Tripathi is a millionaire carpet exporter and the mafia don of Mirzapur. His son, Munna, is an unworthy, power-hungry heir who will stop at nothing to inherit his father's ...",
                    genres: [
                        "Crime",
                        "Action & Adventure",
                        "Drama"
                    ],
                    totalSeasons: 3,
                    totalEpisodes: 29,
                    year: "2018",
                    isMostLiked: true,
                    videos: {
                        trailer: "33o3s4Vs4Sw",
                        teaser: "gPLrIJgsJlw"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/qCtSF2xvjiEPszmjor8Mpsqip9p.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/uQjaWfe6Wurfl6qQx8pKDvBDbmF.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "gun",
                        "gangster",
                        "lawlessness"
                    ],
                    cast: [
                        "Ali Fazal",
                        "Pankaj Tripathi",
                        "Shweta Tripathi Sharma"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "The iron-fisted Akhandanand Tripathi is a millionaire carpet exporter and the mafia don of Mirzapur. His son, Munna, is an unworthy, power hungry heir who will stop at nothing to inherit his father’s ...",
                            posterPath: "https://image.tmdb.org/t/p/w400/7ix8lfyJWL9H14NmRovMFoaN02u.jpg",
                            totalEpisode: 9,
                            year: "2018"
                        },
                        {
                            name: "Season 2",
                            desc: "In Mirzapur, revenge runs darker than blood. There is one title, the King of Mirzapur, but many takers. Munna feels invincible after escaping from the wedding massacre. Guddu and Golu are nowhere to b...",
                            posterPath: "https://image.tmdb.org/t/p/w400/p0qM8hhlMF5DuxHBzl2EZR6TehX.jpg",
                            totalEpisode: 10,
                            year: "2020"
                        },
                        {
                            name: "Season 3",
                            desc: "The reign of the Tripathis in Purvanchal is over. Guddu and Golu are pitted against a new contender as they stake their claim to the throne. Will they pass the baptism of fire to become the undisputed...",
                            posterPath: "https://image.tmdb.org/t/p/w400/7CFdq8M9ZuP1QRLaBG2ExdcrCBs.jpg",
                            totalEpisode: 10,
                            year: "2024"
                        }
                    ],
                    ageRating: "U/A 17+", type: "show", backdropNoLang: "https://image.tmdb.org/t/p/original/3dV7pWAdwIPKR2lMIACMfObXdgK.jpg"
                },
                {
                    title: "Panchayat",
                    desc: "Panchayat is a comedy-drama, which captures the journey of an engineering graduate Abhishek, who for lack of a better job option joins as secretary of a panchayat office in a remote village of Uttar P...",
                    genres: [
                        "Comedy",
                        "Drama"
                    ],
                    totalSeasons: 3,
                    totalEpisodes: 24,
                    year: "2020",
                    isMostLiked: false,
                    videos: {
                        trailer: "5khjF0-SqEc"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/nbUL7IsDoqFzer3hUfhFQWnxs1s.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/3iCEXbiUxs1ehoi8i0hIreGToF2.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "season",
                        "satire",
                        "rural india"
                    ],
                    cast: [
                        "Jitendra Kumar",
                        "Raghubir Yadav",
                        "Neena Gupta"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "Panchayat is a comedy-drama, which captures the journey of an engineering graduate Abhishek, who for lack of a better job option joins as secretary of a panchayat office in a remote village of Uttar P...",
                            posterPath: "https://image.tmdb.org/t/p/w400/sx3MJ4ATkSoCyqayqco0O6wUqQ2.jpg",
                            totalEpisode: 8,
                            year: "2020"
                        },
                        {
                            name: "Season 2",
                            desc: "With the rise of an opponent against Pradhan Ji, village politics of Phulera heats up. Unable to stay neutral, Abhishek sticks his neck out for Pradhan's family.",
                            posterPath: "https://image.tmdb.org/t/p/w400/7boJeO6mV4Q69Tjx14CylvqkXZP.jpg",
                            totalEpisode: 8,
                            year: "2022"
                        },
                        {
                            name: "Season 3",
                            desc: "As the Panchayat elections approach, both Pradhan and Bhushan gangs engage in a fierce battle to uplift their public image. Navigating the murky waters of Phulera politics, Abhishek does his best to m...",
                            posterPath: "https://image.tmdb.org/t/p/w400/eI9A6lRDgtl0Vs2aPrSvQ3fvF3z.jpg",
                            totalEpisode: 8,
                            year: "2024"
                        }
                    ],
                    ageRating: "U/A 13+", type: "show", backdropNoLang: "https://image.tmdb.org/t/p/original/lM9LGo4qnpOl0l94hE0DLXbcaXn.jpg"
                },
                {
                    title: "IC 814: The Kandahar Hijack",
                    desc: "When IC 814 gets hijacked on its way to Delhi, hundreds of lives are at stake as the country faces its longest and most alarming aviation crisis.",
                    genres: [
                        "Drama",
                        "War & Politics"
                    ],
                    totalSeasons: 1,
                    totalEpisodes: 6,
                    year: "2024",
                    isMostLiked: false,
                    videos: {
                        trailer: "Oi7hJgH0sKw",
                        teaser: "Th8bBJMa1Pg"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/5ZSwog5ZDVViamy5He16QlsDKRd.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/9AEcp4IDhLtaqDCeDcRo1q2sT7J.png",
                        isLogoIncluded: true
                    },
                    keywords: [],
                    cast: [
                        "Vijay Varma",
                        "Naseeruddin Shah",
                        "Pankaj Kapur"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "Based on real events, this gripping series directed by Anubhav Sinha (“Article 15”) chronicles the longest hijack in the history of Indian aviation.",
                            posterPath: "https://image.tmdb.org/t/p/w400/u8b8sdWzzvAIKjTBGh9aCio6hU6.jpg",
                            totalEpisode: 6,
                            year: "2024"
                        }
                    ],
                    ageRating: "U/A 17+", type: "show", backdropNoLang: "https://image.tmdb.org/t/p/original/fzq5QiEtx8MCtQ4yTZzWbJHnstr.jpg"
                },
                {
                    title: "Chacha Vidhayak Hain Humare",
                    desc: "Ronny Bhaiya leads a double life - To the world he is the nephew of the MLA - and likes to think of himself as a Jann Neta, and at home he is the jobless 26 year old with no sense of responsibility to...",
                    genres: [
                        "Comedy"
                    ],
                    totalSeasons: 3,
                    totalEpisodes: 24,
                    year: "2018",
                    isMostLiked: false,
                    videos: {},
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/luv5GymCHeblWQ3FPRHUdtyXPW.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: null,
                    keywords: [
                        "Not Available"
                    ],
                    cast: [
                        "Zakir Khan",
                        "Alka Amin",
                        "Zakir Hussain"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "Ronny's whole life is based on a lie. To the world he is the nephew of the local MLA and a youth leader who solves people's problems. But in reality, Ronny is a jobless 25-year-old with no relation to...",
                            posterPath: "https://image.tmdb.org/t/p/w400/thMrz42QAhKOvf7dZu64LVvSeS4.jpg",
                            totalEpisode: 8,
                            year: "2018"
                        },
                        {
                            name: "Season 2",
                            desc: "OML",
                            posterPath: "https://image.tmdb.org/t/p/w400/7OIi1uE0eIkt4QpzZVc63CNEDTA.jpg",
                            totalEpisode: 8,
                            year: "2021"
                        },
                        {
                            name: "Season 3",
                            desc: "Rohit Pathak aka Ronny started out a young lad whose life is not driven by ambitions. All he wanted was a comfortable life where he can boast about himself. He pretends to be the nephew of currently-s...",
                            posterPath: "https://image.tmdb.org/t/p/w400/iMzZy9tYFu2xARrJmTV8TUAzeV4.jpg",
                            totalEpisode: 8,
                            year: "2024"
                        }
                    ],
                    ageRating: "U/A 13+", type: "show", backdropNoLang: ""
                },
                {
                    title: "Heeramandi: The Diamond Bazaar",
                    desc: "In 1940s British India, archnemeses Mallikajaan and Fareedan are locked in a battle of succession of Heeramandi, an elite house of courtesans, while seeds of rebellion take root in the world around th...",
                    genres: [
                        "Drama",
                        "War & Politics"
                    ],
                    totalSeasons: 2,
                    totalEpisodes: 8,
                    year: "2024",
                    isMostLiked: false,
                    videos: {
                        clip: "EAbEv9_heeQ",
                        trailer: "WvzZYynDkwA",
                        teaser: "6U5rkjFqz6c"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/auhAYk9RbGLBvoIK8sTBqWpcxn5.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/ikHYe3duGby5luFKSdX1gjvSOBV.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "prostitute",
                        "sexual abuse",
                        "revolution"
                    ],
                    cast: [
                        "Manisha Koirala",
                        "Sonakshi Sinha",
                        "Aditi Rao Hydari"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "The scheming Mallikajaan rules over an elite house of courtesans — but a new rival threatens her reign as rebellion brews in British-ruled India.",
                            posterPath: "https://image.tmdb.org/t/p/w400/uSmnvWK3bCPz87jkE0GpZsMnYpT.jpg",
                            totalEpisode: 8,
                            year: "2024"
                        },
                        {
                            name: "Season 2",
                            desc: "TBA",
                            posterPath: "https://image.tmdb.org/t/p/w400/w2xTt5iSJNJaiDDhWsVE3ilBRBL.jpg",
                            totalEpisode: "Not Disclosed Yet",
                            year: "202- (Unannounced)"
                        }
                    ],
                    ageRating: "U/A 13+", type: "show", backdropNoLang: "https://image.tmdb.org/t/p/original/z0F11p7HBaIUizZHGzyZ32FLm7O.jpg"
                },
                {
                    title: "Tribhuvan Mishra CA Topper",
                    desc: "A banking crisis forces CA topper Tribhuvan Mishra to take up sex work. Will this dual existence alleviate his troubles — or create entirely new ones?",
                    genres: [
                        "Drama",
                        "Comedy",
                        "Crime"
                    ],
                    totalSeasons: 1,
                    totalEpisodes: 9,
                    year: "2024",
                    isMostLiked: false,
                    videos: {
                        trailer: "Jm109fPG4zI",
                        teaser: "No0ALP5LkUk"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/A4uHPqOTWtbFCO0SRgbTd4s2H6Y.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/z9HBVFflbmcKTLkyjCVDZctc4Ml.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "sex work"
                    ],
                    cast: [
                        "Manav Kaul",
                        "Tillotama Shome",
                        "Subhrajyoti Barat"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "A banking crisis forces CA topper Tribhuvan Mishra to take up sex work. Will this dual existence alleviate his troubles — or create entirely new ones?",
                            posterPath: "https://image.tmdb.org/t/p/w400/pAfwOC6Eh41ScTZCSKBtDcIXVaU.jpg",
                            totalEpisode: 9,
                            year: "2024"
                        }
                    ],
                    ageRating: "U/A 17+", type: "show", backdropNoLang: "https://image.tmdb.org/t/p/original/gtgE02vlDumpMBjJRlZlvf2spfY.jpg"
                },
                {
                    title: "The Boys",
                    desc: "A group of vigilantes known informally as “The Boys” set out to take down corrupt superheroes with no more than blue-collar grit and a willingness to fight dirty.",
                    genres: [
                        "Sci-Fi & Fantasy",
                        "Action & Adventure"
                    ],
                    totalSeasons: 5,
                    totalEpisodes: 32,
                    year: "2019",
                    isMostLiked: true,
                    videos: {
                        trailer: "EzFXDvC-EwM",
                        teaser: "NilteC-7jeM"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/AntNutVWAPJBL8XkrZZncQSGX3f.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/xawDgfkBQaocXR9CljBMjkYpXNK.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "superhero",
                        "based on comic",
                        "revenge"
                    ],
                    cast: [
                        "Karl Urban",
                        "Jack Quaid",
                        "Sydney Starr"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "The story takes place in a universe where most of the superpowered individuals are recognized as superheroes, but in reality abuse their powers for personal gain, information the public is kept unawar...",
                            posterPath: "https://image.tmdb.org/t/p/w400/iikrapejulhIvbNgUjj468mUE0I.jpg",
                            totalEpisode: 8,
                            year: "2019"
                        },
                        {
                            name: "Season 2",
                            desc: "The even more intense, more insane season two finds The Boys on the run from the law, hunted by the Supes, and desperately trying to regroup and fight back against Vought. In hiding, Hughie, Mother’s ...",
                            posterPath: "https://image.tmdb.org/t/p/w400/mY7SeH4HFFxW1hiI6cWuwCRKptN.jpg",
                            totalEpisode: 8,
                            year: "2020"
                        },
                        {
                            name: "Season 3",
                            desc: "It’s been a year of calm. Homelander’s subdued. Butcher works for the government, supervised by Hughie of all people. But both men itch to turn this peace and quiet into blood and bone. So when The Bo...",
                            posterPath: "https://image.tmdb.org/t/p/w400/7Ns6tO3aYjppI5bFhyYZurOYGBT.jpg",
                            totalEpisode: 8,
                            year: "2022"
                        },
                        {
                            name: "Season 4",
                            desc: "The world is on the brink. Victoria Neuman is closer than ever to the Oval Office and under Homelander's muscly thumb as he consolidates his power. Butcher, with only months to live, has lost Becca's ...",
                            posterPath: "https://image.tmdb.org/t/p/w400/nWwhdt7iOFJsWM8Lz1UtaUC6EUf.jpg",
                            totalEpisode: 8,
                            year: "2024"
                        },
                        {
                            name: "Season 5",
                            desc: "A group of vigilantes known informally as “The Boys” set out to take down corrupt superheroes with no more than blue-collar grit and a willingness to fight dirty.",
                            posterPath: "https://image.tmdb.org/t/p/w400/2zmTngn1tYC1AvfnrFLhxeD82hz.jpg",
                            totalEpisode: "Not Disclosed Yet",
                            year: "202- (Unannounced)"
                        }
                    ],
                    ageRating: "U/A 13+", type: "show", backdropNoLang: "https://image.tmdb.org/t/p/original/7cqKGQMnNabzOpi7qaIgZvQ7NGV.jpg"
                },
                {
                    title: "The Umbrella Academy",
                    desc: "A dysfunctional family of superheroes comes together to solve the mystery of their father's death, the threat of the apocalypse and more.",
                    genres: [
                        "Action & Adventure",
                        "Sci-Fi & Fantasy",
                        "Drama"
                    ],
                    totalSeasons: 4,
                    totalEpisodes: 36,
                    year: "2019",
                    isMostLiked: true,
                    videos: {
                        trailer: "oOFIxbotYCU"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/wlu91wzUh4WwTZPi9UEZmzozyd3.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/vLxjDvKL3SCFeiDBemuizLlmHEe.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "time travel",
                        "superhero",
                        "based on comic"
                    ],
                    cast: [
                        "Aidan Gallagher",
                        "Elliot Page",
                        "Tom Hopper"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "Reunited by their father's death, estranged siblings with extraordinary powers uncover shocking family secrets -- and a looming threat to humanity.",
                            posterPath: "https://image.tmdb.org/t/p/w400/3sD4yI5A2YRTvJJcxmV1byLriOe.jpg",
                            totalEpisode: 10,
                            year: "2019"
                        },
                        {
                            name: "Season 2",
                            desc: "Blasted back in time to 1960s Dallas, the scattered siblings build new lives for themselves — until a new doomsday threat pulls them back together.",
                            posterPath: "https://image.tmdb.org/t/p/w400/2aD0iZJelrJ6CguuzgZRKCvponZ.jpg",
                            totalEpisode: 10,
                            year: "2020"
                        },
                        {
                            name: "Season 3",
                            desc: "Back at the Academy, the Umbrellas clash with a new squad of Hargreeves siblings as a mysterious force begins to wreak havoc on the city.",
                            posterPath: "https://image.tmdb.org/t/p/w400/wkgq3MRUCC1vmJ6wX9xFIzGcu1a.jpg",
                            totalEpisode: 10,
                            year: "2022"
                        },
                        {
                            name: "Season 4",
                            desc: "Six years after the reset, the powerless Hargreeves clan faces a secret society and learns that the greatest threat to the universe... may be themselves.",
                            posterPath: "https://image.tmdb.org/t/p/w400/95JN2rqriB5sQmp92WFZUZsvaf8.jpg",
                            totalEpisode: 6,
                            year: "2024"
                        }
                    ],
                    ageRating: "U/A 17+", type: "show", backdropNoLang: "https://image.tmdb.org/t/p/original/7sqFEDDmK1hG5m92upolcfQxy7R.jpg"
                },
                {
                    title: "Cobra Kai",
                    desc: "This Karate Kid sequel series picks up 30 years after the events of the 1984 All Valley Karate Tournament and finds Johnny Lawrence on the hunt for redemption by reopening the infamous Cobra Kai karat...",
                    genres: [
                        "Action & Adventure",
                        "Drama",
                        "Comedy"
                    ],
                    totalSeasons: 6,
                    totalEpisodes: 65,
                    year: "2018",
                    isMostLiked: true,
                    videos: {
                        trailer: "xCwwxNbtK6Y",
                        teaser: "c1z7iLlFu9E"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/mZTieenHNFppEnFwVGDe7JHG90V.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/pkNOYbuOrm2CcyJcpqRLHN3ZW2m.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "california",
                        "martial arts",
                        "karate"
                    ],
                    cast: [
                        "Ralph Macchio",
                        "William Zabka",
                        "Courtney Henggeler"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "Decades after the tournament that changed their lives, the rivalry between Johnny and Daniel reignites.",
                            posterPath: "https://image.tmdb.org/t/p/w400/ydEqHwK83HH2W6rzqcN44ZIGwNh.jpg",
                            totalEpisode: 10,
                            year: "2018"
                        },
                        {
                            name: "Season 2",
                            desc: "Johnny continues building a new life, but a face from his past could disrupt his future. Meanwhile, Daniel opens a Miyagi-Do studio to rival Cobra Kai.",
                            posterPath: "https://image.tmdb.org/t/p/w400/6GlR2dFUa8g5Np04lpxBhm5a6hM.jpg",
                            totalEpisode: 10,
                            year: "2019"
                        },
                        {
                            name: "Season 3",
                            desc: "With a new sensei at the helm of the Cobra Kai dojo, a three-way feud takes center stage. Old grudges — like Cobra Kai — never die.",
                            posterPath: "https://image.tmdb.org/t/p/w400/f9ccj6MfeAsOk1qAqpifJwzxdfn.jpg",
                            totalEpisode: 10,
                            year: "2021"
                        },
                        {
                            name: "Season 4",
                            desc: "Faced with a common enemy, Daniel and Johnny decide to start working together while Kreese looks to the past for a new ally of his own.",
                            posterPath: "https://image.tmdb.org/t/p/w400/hETMqMZYTBtVrA4A8AcLw5w76Xa.jpg",
                            totalEpisode: 10,
                            year: "2021"
                        },
                        {
                            name: "Season 5",
                            desc: "As Terry leads Cobra Kai into a new regime, Daniel, Johnny and an old ally join forces in a battle that goes way beyond the mat.",
                            posterPath: "https://image.tmdb.org/t/p/w400/u2o6NDi5aNQ3SfyN1kZSXBaKoHK.jpg",
                            totalEpisode: 10,
                            year: "2022"
                        },
                        {
                            name: "Season 6",
                            desc: "With the global tournament approaching, Daniel and Johnny work to rebuild their team. But old enemies and new threats stand in the way of victory.",
                            posterPath: "https://image.tmdb.org/t/p/w400/6GDW4EsgsXlYrL1ASb5eCHQK4er.jpg",
                            totalEpisode: 15,
                            year: "2024"
                        }
                    ],
                    ageRating: "U/A 17+", type: "show", backdropNoLang: "https://image.tmdb.org/t/p/original/zymbuoBoL1i94xAOzVJF6IuWLfD.jpg"
                },
                {
                    title: "Arcane",
                    desc: "Amid the stark discord of twin cities Piltover and Zaun, two sisters fight on rival sides of a war between magic technologies and clashing convictions.",
                    genres: [
                        "Animation",
                        "Sci-Fi & Fantasy",
                        "Action & Adventure"
                    ],
                    totalSeasons: 2,
                    totalEpisodes: 18,
                    year: "2021",
                    isMostLiked: true,
                    videos: {
                        clip: "zP7AGWiw8Uw",
                        trailer: "3Svs_hl897c",
                        teaser: "_WtVfkTGFvo"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/tOwd1kLWFeQXwrtCnSQrIMmrX6V.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/jXLNOzeEA8AoJy92dJTUUZXTMxK.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "magic",
                        "female friendship",
                        "battle"
                    ],
                    cast: [
                        "Hailee Steinfeld",
                        "Ella Purnell"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "Two sisters. Two cities. One discovery that will change the world forever. In the cities of Piltover and Zaun, unrest stirs as inventors and thieves, politicians and crime lords chafe against the cons...",
                            posterPath: "https://image.tmdb.org/t/p/w400/6FMWx79iAtZx8WHtOrRj0VlM8Tp.jpg",
                            totalEpisode: 9,
                            year: "2021"
                        },
                        {
                            name: "Season 2",
                            desc: "Amid the stark discord of twin cities Piltover and Zaun, two sisters fight on rival sides of a war between magic technologies and clashing convictions.",
                            posterPath: "https://image.tmdb.org/t/p/w400/oTGEwkp1mPgWNMgVSM53TWfzgSc.jpg",
                            totalEpisode: 9,
                            year: "2024"
                        }
                    ],
                    ageRating: "U/A 13+", type: "show", backdropNoLang: "https://image.tmdb.org/t/p/original/wQEW3xLrQAThu1GvqpsKQyejrYS.jpg"
                },
                {
                    title: "The Lord of the Rings: The Rings of Power",
                    desc: "Beginning in a time of relative peace, we follow an ensemble cast of characters as they confront the re-emergence of evil to Middle-earth. From the darkest depths of the Misty Mountains, to the majest...",
                    genres: [
                        "Action & Adventure",
                        "Sci-Fi & Fantasy",
                        "Drama"
                    ],
                    totalSeasons: 2,
                    totalEpisodes: 16,
                    year: "2022",
                    isMostLiked: true,
                    videos: {
                        trailer: "x8UAUAuKNcU",
                        teaser: "ewgCqJDI_Nk"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/4pPzwFluOzZg9nOXvECZC4bSSlx.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/2uDS3VQIDlNnwq3Mp8BsC7igftU.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "elves",
                        "dwarf",
                        "prequel"
                    ],
                    cast: [
                        "Charlie Vickers",
                        "Morfydd Clark",
                        "Robert Aramayo"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "Beginning in a time of relative peace, we follow an ensemble cast of characters as they confront the re-emergence of evil to Middle-earth. From the darkest depths of the Misty Mountains, to the majest...",
                            posterPath: "https://image.tmdb.org/t/p/w400/umRaUV2ku9MMtEunMQt3uCO1OgE.jpg",
                            totalEpisode: 8,
                            year: "2022"
                        },
                        {
                            name: "Season 2",
                            desc: "Sauron has returned. Cast out by Galadriel, the Dark Lord must now rely on his own cunning to rebuild his strength and forge the legendary Rings of Power, threatening to bind all peoples of Middle-ear...",
                            posterPath: "https://image.tmdb.org/t/p/w400/yNcPTNvcWbWifW0XvQtbrThA0nt.jpg",
                            totalEpisode: 8,
                            year: "2024"
                        }
                    ],
                    ageRating: "U/A 17+", type: "show", backdropNoLang: "https://image.tmdb.org/t/p/original/NNC08YmJFFlLi1prBkK8quk3dp.jpg"
                },
                {
                    title: "Bridgerton",
                    desc: "Wealth, lust, and betrayal set in the backdrop of Regency era England, seen through the eyes of the powerful Bridgerton family.",
                    genres: [
                        "Drama"
                    ],
                    totalSeasons: 4,
                    totalEpisodes: 32,
                    year: "2020",
                    isMostLiked: true,
                    videos: {
                        trailer: "gpv7ayf_tyE",
                        teaser: "sIsKen3y-mU"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/rLUfeA7ThgSnAcUCvdrPnOuyMCX.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/4zM8euadmhbEYowq3sG69vPcQj.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "society",
                        "love",
                        "alternate history"
                    ],
                    cast: [
                        "Adjoa Andoh",
                        "Joanna Bobin",
                        "Harriet Cains"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "The eight close-knit siblings of the Bridgerton family look for love and happiness in London high society.",
                            posterPath: "https://image.tmdb.org/t/p/w400/5JaOXeKs1tHJBaXo9JHpO5XIiVN.jpg",
                            totalEpisode: 8,
                            year: "2020"
                        },
                        {
                            name: "Season 2",
                            desc: "Duty, desire and scandal collide when Viscount Anthony Bridgerton decides to marry, only to meet his match in his intended bride's headstrong big sister.",
                            posterPath: "https://image.tmdb.org/t/p/w400/luoKpgVwi1E5nQsi7W0UuKHu2Rq.jpg",
                            totalEpisode: 8,
                            year: "2022"
                        },
                        {
                            name: "Season 3",
                            desc: "As a new crop of debutantes yearns to become the brightest of the ball, a wallflower with a double life finds her light amid secrets and surprises.",
                            posterPath: "https://image.tmdb.org/t/p/w400/zCEm0xrRMa5fLCQ9d0nvcw6tvcr.jpg",
                            totalEpisode: 8,
                            year: "2024"
                        },
                        {
                            name: "Season 4",
                            desc: "Despite his elder and younger brothers both being happily married, Benedict is loath to settle down — until he meets a captivating Lady in Silver at his mother’s masquerade ball.",
                            posterPath: "https://image.tmdb.org/t/p/w400/luoKpgVwi1E5nQsi7W0UuKHu2Rq.jpg",
                            totalEpisode: 8,
                            year: "202- (Unannounced)"
                        }
                    ],
                    ageRating: "U/A 17+", type: "show", backdropNoLang: "https://image.tmdb.org/t/p/original/tdlHJ8KoOd9UgUygCWQ3fKRNkAR.jpg"
                }
            ]
        },
        popular: {
            tab: ['home', 'movie', 'show'],
            title: "Popular",
            movieTitle: "Popular: Movies",
            showTitle: "Popular: Shows",
            movies: [
                {
                    title: "Fighter",
                    desc: "As India faces a militant attack in Kashmir, the country’s best combat aviators join forces under a reckless yet brilliant squadron leader to form 'Air Dragons', faces mortal dangers and their inner d...",
                    genres: [
                        "Action",
                        "Drama"
                    ],
                    runtime: 167,
                    year: "2024",
                    isMostLiked: true,
                    videos: {},
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/laXlKt5LNQ02StIFzLTjRayFGmI.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/mK3jB3LqUeutMnYB2ZQ5dZ0H2cl.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "helicopter",
                        "airplane",
                        "fighter pilot"
                    ],
                    cast: [
                        "Hrithik Roshan",
                        "Deepika Padukone",
                        "Anil Kapoor"
                    ],
                    ageRating: "U/A 12+", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Animal",
                    desc: "The hardened son of a powerful industrialist returns home after years abroad and vows to take bloody revenge on those threatening his father's life.",
                    genres: [
                        "Action",
                        "Crime",
                        "Drama"
                    ],
                    runtime: 201,
                    year: "2023",
                    isMostLiked: true,
                    videos: {
                        trailer: "6DfaBq2rVoE"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/jZgd1Ryzfqaobb8O0IO428xEwsB.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/aM0QC0EmfPD84AtjGIv2UJ9yu6J.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "fistfight",
                        "shootout",
                        "held at gunpoint"
                    ],
                    cast: [
                        "Ranbir Kapoor",
                        "Rashmika Mandanna",
                        "Anil Kapoor"
                    ],
                    ageRating: "A-Rated", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Dunki",
                    desc: "Four friends from a sleepy little village in Punjab share a common dream: to go to England. Their problem is that they have neither the visa nor the ticket. A soldier alights from a train one day, and...",
                    genres: [
                        "Adventure",
                        "Comedy",
                        "Drama"
                    ],
                    runtime: 159,
                    year: "2023",
                    isMostLiked: false,
                    videos: {
                        trailer: "Zd69FfhBmSc"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/7kXd9k4UbrzdIZU5pQhP87hd5Bm.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/kxhnOWx0ikkwB2Y7oGzJjd2RIun.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "affectation",
                        "ambiguous"
                    ],
                    cast: [
                        "Shah Rukh Khan",
                        "Taapsee Pannu",
                        "Vikram Kochhar"
                    ],
                    ageRating: "U/A 13+", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Laapataa Ladies",
                    desc: "Set in 2001, somewhere in rural India, two young brides get accidentally swapped on a train. In the ensuing chaos, they each encounter a host of colourful characters, resulting in hilarious and unexpe...",
                    genres: [
                        "Comedy",
                        "Drama"
                    ],
                    runtime: 123,
                    year: "2024",
                    isMostLiked: true,
                    videos: {
                        trailer: "hGM87LCJxRc",
                        teaser: "Nd8O8JJiC3w"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/1289XbegHS0NLeK5VE7R6inZyw7.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/pHHumJlImNsQDTYggll5jeRo3CV.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "bride",
                        "rural india",
                        "adventure"
                    ],
                    cast: [
                        "Pratibha Ranta",
                        "Nitanshi Goel",
                        "Sparsh Shrivastav"
                    ],
                    ageRating: "U/A 12+", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Kho Gaye Hum Kahan",
                    desc: "Three best friends juggle life as 20-somethings in Mumbai, where romance, ambition and heartbreak collide with the addictive draw of social media.",
                    genres: [
                        "Drama",
                        "Comedy"
                    ],
                    runtime: 135,
                    year: "2023",
                    isMostLiked: false,
                    videos: {
                        clip: "8qq3n2TQ9kM",
                        trailer: "DgbruQFwYBk"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/gZXr7HQQY4snOcBxkAvfVLXiqgj.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/fplkJC6LB2zXY8UOR06BAdnfF4U.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "friendship",
                        "coming of age",
                        "social media"
                    ],
                    cast: [
                        "Siddhant Chaturvedi",
                        "Ananya Panday",
                        "Adarsh Gourav"
                    ],
                    ageRating: "U/A 13+", type: "movie", backdropNoLang: ""
                },
                {
                    title: "The Archies",
                    desc: "Set in 1960s India, Archie and the gang navigate romance, friendship and the future of Riverdale as developers threaten to destroy a beloved park.",
                    genres: [
                        "Comedy",
                        "Drama",
                        "Music"
                    ],
                    runtime: 144,
                    year: "2023",
                    isMostLiked: false,
                    videos: {
                        trailer: "07zwmOypaV8",
                        teaser: "NN71kSL7uEM"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/gZRjSnepIecqdWJDbVdubRSgZeu.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/cp6yv5XxWINdsGLUZVY6OnA0uYH.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "musical",
                        "based on comic",
                        "india"
                    ],
                    cast: [
                        "Agastya Nanda",
                        "Suhana Khan",
                        "Khushi Kapoor"
                    ],
                    ageRating: "U/A 13+", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Dune: Part Two",
                    desc: "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his ...",
                    genres: [
                        "Science Fiction",
                        "Adventure"
                    ],
                    runtime: 167,
                    year: "2024",
                    isMostLiked: true,
                    videos: {
                        clip: "SFQpQTrtSEc",
                        trailer: "U2Qp5pL3ovA",
                        teaser: "p-4Xgcuwb00"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/v2os8EpbfGHnljCTpoLWOUKYUv5.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/7j3nPn9CMYctl1KVcwBxVAu6vb1.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "epic",
                        "fight",
                        "politics"
                    ],
                    cast: [
                        "Timothée Chalamet",
                        "Zendaya",
                        "Rebecca Ferguson"
                    ],
                    ageRating: "U/A 13+", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Poor Things",
                    desc: "Brought back to life by an unorthodox scientist, a young woman runs off with a lawyer on a whirlwind adventure across the continents. Free from the prejudices of her times, she grows steadfast in her ...",
                    genres: [
                        "Science Fiction",
                        "Romance",
                        "Comedy"
                    ],
                    runtime: 142,
                    year: "2023",
                    isMostLiked: true,
                    videos: {
                        clip: "Ikm-v0pZGUc",
                        trailer: "-EfYJWRw2FM",
                        teaser: "fORsy_9Il_A"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/8LnjpwfZOSGOZUIE1uX54RXGlfR.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/6tpiiM1i862oS2tjSwqmjv4dKGD.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "ship",
                        "london, england",
                        "experiment"
                    ],
                    cast: [
                        "Emma Stone",
                        "Mark Ruffalo",
                        "Willem Dafoe"
                    ],
                    ageRating: "A-Rated", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Godzilla x Kong: The New Empire",
                    desc: "Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, challenging their very existence – and our own.",
                    genres: [
                        "Action",
                        "Adventure",
                        "Science Fiction"
                    ],
                    runtime: 115,
                    year: "2024",
                    isMostLiked: true,
                    videos: {
                        clip: "5fe404-dRY8",
                        trailer: "m2u6RfmTXt0",
                        teaser: "Teg4Ta0vWjE"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/nDCN5WubZtnrUy5B1q67xde4wQI.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/etL5WzGnHBwOA6Z6F2AIayT3Qdm.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "giant monster",
                        "sequel",
                        "dinosaur"
                    ],
                    cast: [
                        "Rebecca Hall",
                        "Brian Tyree Henry",
                        "Dan Stevens"
                    ],
                    ageRating: "U/A 13+", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Wonka",
                    desc: "Willy Wonka – chock-full of ideas and determined to change the world one delectable bite at a time – is proof that the best things in life begin with a dream, and if you’re lucky enough to meet Willy ...",
                    genres: [
                        "Comedy",
                        "Family",
                        "Fantasy"
                    ],
                    runtime: 117,
                    year: "2023",
                    isMostLiked: true,
                    videos: {
                        clip: "Ezcbdeng8-s",
                        trailer: "wYmtRhKvmVE",
                        teaser: "vCcGYxy6PNA"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/bmlkLCjrIWnnZzdAQ4uNPG9JFdj.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/pihHK60EsvDnaFEUbHjhYokOoH4.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "chocolate",
                        "musical",
                        "prequel"
                    ],
                    cast: [
                        "Timothée Chalamet",
                        "Calah Lane",
                        "Keegan-Michael Key"
                    ],
                    ageRating: "U/A 7+", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Furiosa: A Mad Max Saga",
                    desc: "As the world fell, young Furiosa is snatched from the Green Place of Many Mothers and falls into the hands of a great Biker Horde led by the Warlord Dementus. Sweeping through the Wasteland they come ...",
                    genres: [
                        "Action",
                        "Adventure",
                        "Science Fiction"
                    ],
                    runtime: 149,
                    year: "2024",
                    isMostLiked: true,
                    videos: {
                        clip: "aH542aRaAjY",
                        trailer: "LYV3001u574",
                        teaser: "pCXL2LTuwHE"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/mWIsjkQ2CRxDY2lwTfI3Fh6maCR.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/z1wMCU7yPf6YELf46S2ml8XFDdR.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "prequel",
                        "spin off",
                        "tyranny"
                    ],
                    cast: [
                        "Anya Taylor-Joy",
                        "Chris Hemsworth",
                        "Tom Burke"
                    ],
                    ageRating: "A-Rated", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Kingdom of the Planet of the Apes",
                    desc: "Several generations following Caesar's reign, apes – now the dominant species – live harmoniously while humans have been reduced to living in the shadows. As a new tyrannical ape leader builds his emp...",
                    genres: [
                        "Science Fiction",
                        "Adventure",
                        "Action"
                    ],
                    runtime: 145,
                    year: "2024",
                    isMostLiked: true,
                    videos: {
                        clip: "ZRCF8GP25sw",
                        trailer: "Tg1FesR8X90",
                        teaser: "Q45wW7AmgC0"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/erD0W8CyhhqnmivM2EGKinHOFNC.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/gLi5qaqxZbVj2PXQYrah0AFgqkB.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "empire",
                        "kingdom",
                        "gorilla"
                    ],
                    cast: [
                        "Owen Teague",
                        "Freya Allan",
                        "Kevin Durand"
                    ],
                    ageRating: "U/A 13+", type: "movie", backdropNoLang: ""
                }
            ],
            shows: [
                {
                    title: "Panchayat",
                    desc: "Panchayat is a comedy-drama, which captures the journey of an engineering graduate Abhishek, who for lack of a better job option joins as secretary of a panchayat office in a remote village of Uttar P...",
                    genres: [
                        "Comedy",
                        "Drama"
                    ],
                    totalSeasons: 3,
                    totalEpisodes: 24,
                    year: "2020",
                    isMostLiked: false,
                    videos: {
                        trailer: "5khjF0-SqEc"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/nbUL7IsDoqFzer3hUfhFQWnxs1s.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/3iCEXbiUxs1ehoi8i0hIreGToF2.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "season",
                        "satire",
                        "rural india"
                    ],
                    cast: [
                        "Jitendra Kumar",
                        "Raghubir Yadav",
                        "Neena Gupta"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "Panchayat is a comedy-drama, which captures the journey of an engineering graduate Abhishek, who for lack of a better job option joins as secretary of a panchayat office in a remote village of Uttar P...",
                            posterPath: "https://image.tmdb.org/t/p/w400/sx3MJ4ATkSoCyqayqco0O6wUqQ2.jpg",
                            totalEpisode: 8,
                            year: "2020"
                        },
                        {
                            name: "Season 2",
                            desc: "With the rise of an opponent against Pradhan Ji, village politics of Phulera heats up. Unable to stay neutral, Abhishek sticks his neck out for Pradhan's family.",
                            posterPath: "https://image.tmdb.org/t/p/w400/7boJeO6mV4Q69Tjx14CylvqkXZP.jpg",
                            totalEpisode: 8,
                            year: "2022"
                        },
                        {
                            name: "Season 3",
                            desc: "As the Panchayat elections approach, both Pradhan and Bhushan gangs engage in a fierce battle to uplift their public image. Navigating the murky waters of Phulera politics, Abhishek does his best to m...",
                            posterPath: "https://image.tmdb.org/t/p/w400/eI9A6lRDgtl0Vs2aPrSvQ3fvF3z.jpg",
                            totalEpisode: 8,
                            year: "2024"
                        }
                    ],
                    ageRating: "U/A 13+", type: "show", backdropNoLang: ""
                },
                {
                    title: "Indian Police Force",
                    desc: "Follows the harrowing journey of Delhi Police Officer Kabir Malik as he battles an insidious adversary, Zarar, who has chosen the path of terrorism.",
                    genres: [
                        "Action & Adventure",
                        "Crime"
                    ],
                    totalSeasons: 1,
                    totalEpisodes: 7,
                    year: "2024",
                    isMostLiked: false,
                    videos: {
                        trailer: "kvnWfKtEO-A"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/8l8hnF8Cxr3YxTP1C9EIFRb3aL4.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/sSFWtqZPHkwhxzLkbBfHissMXTJ.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "Not Available"
                    ],
                    cast: [
                        "Sidharth Malhotra",
                        "Shilpa Shetty Kundra",
                        "Vivek Oberoi"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "\"Indian Police Force” is an action-packed series that follows the harrowing journey of Delhi Police Officer Kabir Malik as he battles an insidious adversary, Zarar, who has chosen the path of terroris...",
                            posterPath: "https://image.tmdb.org/t/p/w400/adAHp6OZp632mOrKLWCETyly2g7.jpg",
                            totalEpisode: 7,
                            year: "2024"
                        }
                    ],
                    ageRating: "U/A 17+", type: "show", backdropNoLang: ""
                },
                {
                    title: "FLAMES",
                    desc: "The story of a young romance unfolding as a chemical reaction. There is no such love as 'First Love'.",
                    genres: [
                        "Comedy",
                        "Drama"
                    ],
                    totalSeasons: 4,
                    totalEpisodes: 20,
                    year: "2018",
                    isMostLiked: false,
                    videos: {
                        trailer: "NkdCgjqQq7s",
                        teaser: "SmcvDoEuSfM"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/dQ6ooqChfzm5koKDG6sUEWagToT.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/903GpkKsFF3nRCyJu6CoVk33MaA.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "new love",
                        "friendship",
                        "romance"
                    ],
                    cast: [
                        "Ritwik Sahore",
                        "Tanya Maniktala",
                        "Sunakshi Grover"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "A teenage romance that aims straight from the heart. This is the story of a young romance unfolding as a chemical reaction.",
                            posterPath: "https://image.tmdb.org/t/p/w400/wipq1m5iJJFjNta82h1d2yxMMhZ.jpg",
                            totalEpisode: 5,
                            year: "2018"
                        },
                        {
                            name: "Season 2",
                            desc: "Rajat and Ishita are in a happy relationship. Their relationship deepens, and we see them balance through deeper equations of trust. Anusha and Pandu struggle through the emotion of jealousy. Academic...",
                            posterPath: "https://image.tmdb.org/t/p/w400/bVvfSXxAno6ghMuHuWpxmhWcyqX.jpg",
                            totalEpisode: 5,
                            year: "2019"
                        },
                        {
                            name: "Season 3",
                            desc: "The gang in class 12th. Rajat and Ishita are now friends. While Rajat is desperately trying to win her back, Ishita wants to take it slow. Sunshine Tuition Center resumes at Kaushal Sir’s residence te...",
                            posterPath: "https://image.tmdb.org/t/p/w400/bb4EVHOKNOSQH1zXK8V8gPeEpvl.jpg",
                            totalEpisode: 5,
                            year: "2022"
                        },
                        {
                            name: "Season 4",
                            desc: "Centered around 12th-grade students facing impending board exams, Rajat-Ishita and Pandu-Anusha navigates the delicate balance between love and studies. As Kaushal sir teaches in a different institute...",
                            posterPath: "https://image.tmdb.org/t/p/w400/3zRZwd8Y5Gr06Gbdl9l65VzNBi.jpg",
                            totalEpisode: 5,
                            year: "2023"
                        }
                    ],
                    ageRating: "U/A 13+", type: "show", backdropNoLang: ""
                },
                {
                    title: "ImMATURE",
                    desc: "A coming-of-age story about the many first adventures in a young man's life. Dhruv is 16, and in a hurry to grow up. With a little help from his school friends, the wannabe bad-boy Kabir, and the colo...",
                    genres: [
                        "Comedy",
                        "Drama"
                    ],
                    totalSeasons: 3,
                    totalEpisodes: 15,
                    year: "2019",
                    isMostLiked: false,
                    videos: {},
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/1iW3KDTQPtQuXi6WabcdjRBL6IT.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/qFWpZpDB9Ql34G5QHFL6baWs88O.png",
                        isLogoIncluded: false
                    },
                    keywords: [
                        "Not Available"
                    ],
                    cast: [
                        "Omkar Kulkarni",
                        "Chinmay Chandraunshuh",
                        "Naman Jain"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "With a little help from his school friends, the wannabe bad-boy Kabir, and the color-blind but doesn't know it Susu, Dhruv sets out to woo the first crush of his life, the feisty, out-of-his-league cl...",
                            posterPath: "https://image.tmdb.org/t/p/w400/15hYTKzq3NZsT5wXwznTmlQJfFK.jpg",
                            totalEpisode: 5,
                            year: "2019"
                        },
                        {
                            name: "Season 2",
                            desc: "Immature 2 takes forward the story of Dhruv and his semi circle, Kabir and Susu, being stuck between childhood and adulthood. It’s a show about love, life, fun and friendship and all the emotions that...",
                            posterPath: "https://image.tmdb.org/t/p/w400/qfXdD6zfnHOKjvhDNxdxsL16gBT.jpg",
                            totalEpisode: 5,
                            year: "2022"
                        },
                        {
                            name: "Season 3",
                            desc: "The school gang is back to school after a vacation. Dhruv has sworn off love and romance from his life. But either you follow love, or it follows you with Chaaya developing feelings for Dhruv. On the ...",
                            posterPath: "https://image.tmdb.org/t/p/w400/8rJQ1klWXDybR83cSulM6Xzjhde.jpg",
                            totalEpisode: 5,
                            year: "2023"
                        }
                    ],
                    ageRating: "U/A 17+", type: "show", backdropNoLang: ""
                },
                {
                    title: "Killer Soup",
                    desc: "Swathi dreams of owning a restaurant. But when a murder derails her plan, she and her lover take an outrageous step — to replace him with her husband.",
                    genres: [
                        "Comedy",
                        "Crime",
                        "Drama"
                    ],
                    totalSeasons: 1,
                    totalEpisodes: 8,
                    year: "2024",
                    isMostLiked: false,
                    videos: {
                        trailer: "_jIpzMiV2UE",
                        teaser: "krqITgOY2CE"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/aEwx18dSkBH5XkLju38dnFe1ThN.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/2YCnBebfWexsLUHOnmDCHYxsF4w.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "dark comedy",
                        "offbeat",
                        "crime"
                    ],
                    cast: [
                        "Konkona Sen Sharma",
                        "Manoj Bajpayee",
                        "Nassar"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "Swathi dreams of owning a restaurant. But when murder derails her plan, she and her lover take an outrageous step — to replace him with her husband.",
                            posterPath: "https://image.tmdb.org/t/p/w400/1UEfrC1uRU7gI2s0ENNx05RcIsI.jpg",
                            totalEpisode: 8,
                            year: "2024"
                        }
                    ],
                    ageRating: "U/A 13+", type: "show", backdropNoLang: ""
                },
                {
                    title: "Maamla Legal Hai",
                    desc: "Chaos collides with the letter of the law at District Court Patparganj, where quirky employees work to uphold justice — but not without a few objections.",
                    genres: [
                        "Comedy",
                        "Drama"
                    ],
                    totalSeasons: 1,
                    totalEpisodes: 8,
                    year: "2024",
                    isMostLiked: false,
                    videos: {
                        trailer: "Az63PtQVErY"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/wWeFMqHbAVNudvf0rAoXY7pWnrW.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/tzWVdOnqDHcO7F6yqNnp7CfzXgB.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "courtroom",
                        "criminal lawyer",
                        "workplace comedy"
                    ],
                    cast: [
                        "Ravi Kishan",
                        "Naila Grrewal",
                        "Nidhi Bisht"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "Chaos collides with the letter of the law at District Court Patparganj, where quirky employees work to uphold justice — but not without a few objections.",
                            posterPath: "https://image.tmdb.org/t/p/w400/A9krYovvsiUXcQLOnQ2O53MHVwd.jpg",
                            totalEpisode: 8,
                            year: "2024"
                        }
                    ],
                    ageRating: "U/A 13+", type: "show", backdropNoLang: ""
                },
                {
                    title: "The Good Doctor",
                    desc: "Shaun Murphy, a young surgeon with autism and savant syndrome, relocates from a quiet country life to join a prestigious hospital's surgical unit. Unable to personally connect with those around him, S...",
                    genres: [
                        "Drama"
                    ],
                    totalSeasons: 7,
                    totalEpisodes: 126,
                    year: "2017",
                    isMostLiked: true,
                    videos: {
                        trailer: "lnY9FWUTY84"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/i3GAgdr3adKPMI8FVxdXZuqiAQl.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/hw9K4mRwNZH1ebp4UUawvJp1Bbn.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "nurse",
                        "medicine",
                        "autism"
                    ],
                    cast: [
                        "Freddie Highmore",
                        "Fiona Gubelmann",
                        "Will Yun Lee"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "Shaun Murphy, a young surgeon with autism and savant syndrome, relocates from a quiet country life to join a prestigious hospital's surgical unit. Unable to personally connect with those around him, S...",
                            posterPath: "https://image.tmdb.org/t/p/w400/hiNyjUSTFrbMv3Sc0CxNW2o39az.jpg",
                            totalEpisode: 18,
                            year: "2017"
                        },
                        {
                            name: "Season 2",
                            desc: "Dr. Shaun Murphy’s world has begun to expand as he continues to work harder than he ever has before, navigating his new environment and relationships to prove to his colleagues at the prestigious St. ...",
                            posterPath: "https://image.tmdb.org/t/p/w400/sIq4SFloM0JSeRNAQVqb5g5zAng.jpg",
                            totalEpisode: 18,
                            year: "2018"
                        },
                        {
                            name: "Season 3",
                            desc: "Dr. Shaun Murphy continues to use his extraordinary medical gifts at St. Bonaventure Hospital’s surgical unit. As his friendships deepen, Shaun tackles the world of dating for the first time and conti...",
                            posterPath: "https://image.tmdb.org/t/p/w400/8QFssOwaWZ3eB60cGwDpfrZBscv.jpg",
                            totalEpisode: 20,
                            year: "2019"
                        },
                        {
                            name: "Season 4",
                            desc: "Dr. Shaun Murphy continues to use his extraordinary medical gifts at St. Bonaventure Hospital’s surgical unit. As his romantic relationship with Lea deepens, he will also face new responsibilities as ...",
                            posterPath: "https://image.tmdb.org/t/p/w400/6tfT03sGp9k4c0J3dypjrI8TSAI.jpg",
                            totalEpisode: 20,
                            year: "2020"
                        },
                        {
                            name: "Season 5",
                            desc: "Shaun Murphy, a young surgeon with autism and savant syndrome, relocates from a quiet country life to join a prestigious hospital's surgical unit. Unable to personally connect with those around him, S...",
                            posterPath: "https://image.tmdb.org/t/p/w400/cXUqtadGsIcZDWUTrfnbDjAy8eN.jpg",
                            totalEpisode: 18,
                            year: "2021"
                        },
                        {
                            name: "Season 6",
                            desc: "Shaun Murphy, a young surgeon with autism and savant syndrome, relocates from a quiet country life to join a prestigious hospital's surgical unit. Unable to personally connect with those around him, S...",
                            posterPath: "https://image.tmdb.org/t/p/w400/luhKkdD80qe62fwop6sdrXK9jUT.jpg",
                            totalEpisode: 22,
                            year: "2022"
                        },
                        {
                            name: "Season 7",
                            desc: "Shaun and Lea get off to a bumpy start as new parents, while at work Shaun tries to navigate a problematic with one of the new residents he has to supervise: another doctor with Autism Spectrum DIsord...",
                            posterPath: "https://image.tmdb.org/t/p/w400/pFqzXacKsi9or1GVdxTLutXD9zM.jpg",
                            totalEpisode: 10,
                            year: "2024"
                        }
                    ],
                    ageRating: "U/A 13+", type: "show", backdropNoLang: ""
                },
                {
                    title: "The Boys",
                    desc: "A group of vigilantes known informally as “The Boys” set out to take down corrupt superheroes with no more than blue-collar grit and a willingness to fight dirty.",
                    genres: [
                        "Sci-Fi & Fantasy",
                        "Action & Adventure"
                    ],
                    totalSeasons: 5,
                    totalEpisodes: 32,
                    year: "2019",
                    isMostLiked: true,
                    videos: {
                        trailer: "EzFXDvC-EwM",
                        teaser: "NilteC-7jeM"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/AntNutVWAPJBL8XkrZZncQSGX3f.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/xawDgfkBQaocXR9CljBMjkYpXNK.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "superhero",
                        "based on comic",
                        "revenge"
                    ],
                    cast: [
                        "Karl Urban",
                        "Jack Quaid",
                        "Sydney Starr"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "The story takes place in a universe where most of the superpowered individuals are recognized as superheroes, but in reality abuse their powers for personal gain, information the public is kept unawar...",
                            posterPath: "https://image.tmdb.org/t/p/w400/iikrapejulhIvbNgUjj468mUE0I.jpg",
                            totalEpisode: 8,
                            year: "2019"
                        },
                        {
                            name: "Season 2",
                            desc: "The even more intense, more insane season two finds The Boys on the run from the law, hunted by the Supes, and desperately trying to regroup and fight back against Vought. In hiding, Hughie, Mother’s ...",
                            posterPath: "https://image.tmdb.org/t/p/w400/mY7SeH4HFFxW1hiI6cWuwCRKptN.jpg",
                            totalEpisode: 8,
                            year: "2020"
                        },
                        {
                            name: "Season 3",
                            desc: "It’s been a year of calm. Homelander’s subdued. Butcher works for the government, supervised by Hughie of all people. But both men itch to turn this peace and quiet into blood and bone. So when The Bo...",
                            posterPath: "https://image.tmdb.org/t/p/w400/7Ns6tO3aYjppI5bFhyYZurOYGBT.jpg",
                            totalEpisode: 8,
                            year: "2022"
                        },
                        {
                            name: "Season 4",
                            desc: "The world is on the brink. Victoria Neuman is closer than ever to the Oval Office and under Homelander's muscly thumb as he consolidates his power. Butcher, with only months to live, has lost Becca's ...",
                            posterPath: "https://image.tmdb.org/t/p/w400/nWwhdt7iOFJsWM8Lz1UtaUC6EUf.jpg",
                            totalEpisode: 8,
                            year: "2024"
                        },
                        {
                            name: "Season 5",
                            desc: "A group of vigilantes known informally as “The Boys” set out to take down corrupt superheroes with no more than blue-collar grit and a willingness to fight dirty.",
                            posterPath: "https://image.tmdb.org/t/p/w400/2zmTngn1tYC1AvfnrFLhxeD82hz.jpg",
                            totalEpisode: "Not Disclosed Yet",
                            year: "202- (Unannounced)"
                        }
                    ],
                    ageRating: "U/A 17+", type: "show", backdropNoLang: ""
                },
                {
                    title: "Grey's Anatomy",
                    desc: "Follows the personal and professional lives of a group of doctors at Seattle’s Grey Sloan Memorial Hospital.",
                    genres: [
                        "Drama"
                    ],
                    totalSeasons: 21,
                    totalEpisodes: 434,
                    year: "2005",
                    isMostLiked: true,
                    videos: {
                        clip: "qbkEtYz9acA"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/aCQEM33YWvZm0hYfQ4R1I6srV19.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/keAZqhg9lmOHEhmG5njqIsuxf0f.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "trauma",
                        "workplace",
                        "hospital"
                    ],
                    cast: [
                        "Ellen Pompeo",
                        "Chandra Wilson",
                        "James Pickens Jr."
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "Meredith Grey, the daughter of the once-renowned surgeon Ellis Grey, becomes an intern at the Seattle Grace Hospital. She meets fellow interns Cristina Yang, Isobel \"Izzie\" Stevens, George O'Malley an...",
                            posterPath: "https://image.tmdb.org/t/p/w400/ulGju8GyXE36wCgmvyFJL3sLiVm.jpg",
                            totalEpisode: 9,
                            year: "2005"
                        },
                        {
                            name: "Season 2",
                            desc: "The season continued to focus on the surgical residency of five young interns as they try to balance to the challenges of their competitive careers, with the difficulties that determine their personal...",
                            posterPath: "https://image.tmdb.org/t/p/w400/bO0S3fU8Tcqn0g5DCmDcX1oqA2t.jpg",
                            totalEpisode: 27,
                            year: "2005"
                        },
                        {
                            name: "Season 3",
                            desc: "The season followed the continuation of the surgical residency of five young interns, as they experience the demands of the competitive field of medicine, which becomes defining in their personal evol...",
                            posterPath: "https://image.tmdb.org/t/p/w400/aY7NuvFj5Uzliy0nrFxVWmlZFiK.jpg",
                            totalEpisode: 25,
                            year: "2006"
                        },
                        {
                            name: "Season 4",
                            desc: "Enter a world of change in the irresistible and unforgettable fourth season of Grey's Anatomy. Love, lies, and family ties are revealed as the surgeons of Seattle Grace discover that their choices hav...",
                            posterPath: "https://image.tmdb.org/t/p/w400/gDQR39nMdjAvGyWe4lOPCj4iMQx.jpg",
                            totalEpisode: 17,
                            year: "2007"
                        },
                        {
                            name: "Season 5",
                            desc: "Live for the moment. Dive deeper into the lives and loves of \"Grey's Anatomy\"! The doctors struggle and thrive as they enter uncharted territories of life. Discover what happens in the on-again, off-a...",
                            posterPath: "https://image.tmdb.org/t/p/w400/bnOS0AKjbfPY1xVqF80qk0iBQBX.jpg",
                            totalEpisode: 24,
                            year: "2008"
                        },
                        {
                            name: "Season 6",
                            desc: "The season follows the story of surgical interns, residents and their competent mentors, as they experience the difficulties of the competitive careers they have chosen. It is set in the surgical wing...",
                            posterPath: "https://image.tmdb.org/t/p/w400/8oclDsuHPZIVXh311u5SHlTNQzA.jpg",
                            totalEpisode: 24,
                            year: "2009"
                        },
                        {
                            name: "Season 7",
                            desc: "Let the healing begin. It's a year of new beginnings for the medical team of Seattle Grace Hospital as they slowly recover from the tragedy that hit too close to home. New relationships emerge and the...",
                            posterPath: "https://image.tmdb.org/t/p/w400/wmGUedMQJkmSZFYJA35AKPrHsGJ.jpg",
                            totalEpisode: 22,
                            year: "2010"
                        },
                        {
                            name: "Season 8",
                            desc: "No matter how hot it gets - in the operating room or in the bedroom - the doctors of Seattle Grace know they can always lean on one another. As fifth-year residents, it's do or die for the doctors, an...",
                            posterPath: "https://image.tmdb.org/t/p/w400/pvuMQwMPWDqunRiajmeGQmUF0zS.jpg",
                            totalEpisode: 24,
                            year: "2011"
                        },
                        {
                            name: "Season 9",
                            desc: "It's a year of bold new beginnings as your favorite doctors return to Seattle Grace for the biggest challenge of their lives. The plane crash that took the lives of Lexie Grey and Mark Sloan sent shoc...",
                            posterPath: "https://image.tmdb.org/t/p/w400/w8XqAVl8lvBqVHnJHPJgewYeEOd.jpg",
                            totalEpisode: 24,
                            year: "2012"
                        },
                        {
                            name: "Season 10",
                            desc: "The storm may have passed, but now the relationships and romance of Grey Sloan Memorial must survive in its wake. Bonds are tested, love is lost and the hospital bids farewell to Dr. Cristina Yang. Fo...",
                            posterPath: "https://image.tmdb.org/t/p/w400/h0z0USK1KerDJu02c218zFMIa52.jpg",
                            totalEpisode: 24,
                            year: "2013"
                        },
                        {
                            name: "Season 11",
                            desc: "During an interview, Shonda Rhimes stated that \"Season 11 is really a Meredith-centric season. She lost her ‘person’, her half-sister has shown up, her husband is chafing to go someplace else…” She we...",
                            posterPath: "https://image.tmdb.org/t/p/w400/AvMxKxyj6zIG5fR0fg7D6bWH4AY.jpg",
                            totalEpisode: 24,
                            year: "2014"
                        },
                        {
                            name: "Season 12",
                            desc: "The doctors find themselves simmering in a world of sexual politics. Bailey struggles with what it means to be a woman in charge of the hospital and her husband, while Maggie faces the challenges of d...",
                            posterPath: "https://image.tmdb.org/t/p/w400/b8pkzoNM5X0XSwppEA7jTID5Dcm.jpg",
                            totalEpisode: 24,
                            year: "2015"
                        },
                        {
                            name: "Season 13",
                            desc: "After being on her own for some time, Meredith is beginning to explore the idea of a romance with Riggs. Unfortunately, Maggie desires him as well, which threatens to drive a bitter wedge between the ...",
                            posterPath: "https://image.tmdb.org/t/p/w400/i4gNHaY1MzP50zcjgw3ew2hKCCW.jpg",
                            totalEpisode: 24,
                            year: "2016"
                        },
                        {
                            name: "Season 14",
                            desc: "After the fire, Miranda Bailey starts renovations at the hospital. She discovers she'll need more than new walls and paint to repair broken trust, tainted reputations and broken relationships. Against...",
                            posterPath: "https://image.tmdb.org/t/p/w400/2eSQFbeZZ7lCru40Q0UYGJ20itx.jpg",
                            totalEpisode: 24,
                            year: "2017"
                        },
                        {
                            name: "Season 15",
                            desc: "Romance is brewing in ways you did not see coming as doctor Teddy Altman is back in an explosive love triangle. And the drama continues as a windstorm blows through Seattle, causing the power to go ou...",
                            posterPath: "https://image.tmdb.org/t/p/w400/eqgIOObafPJitt8JNh1LuO2fvqu.jpg",
                            totalEpisode: 25,
                            year: "2018"
                        },
                        {
                            name: "Season 16",
                            desc: "Meredith, Richard and Alex face the future after the insurance fraud scandal. The hospital gains a new leadership.",
                            posterPath: "https://image.tmdb.org/t/p/w400/8YVZRNdPCKLDPSEaIR7A91fxa0Y.jpg",
                            totalEpisode: 21,
                            year: "2019"
                        },
                        {
                            name: "Season 17",
                            desc: "The COVID-19 crisis forces the doctors at Grey Sloan to face uncharted territory. The team struggles with the pandemic and personal turmoil.",
                            posterPath: "https://image.tmdb.org/t/p/w400/biwfXEpMxUYXprV7v1wETZGzfXd.jpg",
                            totalEpisode: 17,
                            year: "2020"
                        },
                        {
                            name: "Season 18",
                            desc: "In the aftermath of the COVID-19 pandemic, the doctors at Grey Sloan Memorial face a new set of problems — and Meredith considers a big life change.",
                            posterPath: "https://image.tmdb.org/t/p/w400/zPIug5giU8oug6Xes5K1sTfQJxY.jpg",
                            totalEpisode: 20,
                            year: "2021"
                        },
                        {
                            name: "Season 19",
                            desc: "Six months after Grey Sloan Memorial lost its residency program, the hospital sees a slew of changes — from new arrivals to major goodbyes.",
                            posterPath: "https://image.tmdb.org/t/p/w400/daSFbrt8QCXV2hSwB0hqYjbj681.jpg",
                            totalEpisode: 20,
                            year: "2022"
                        },
                        {
                            name: "Season 20",
                            desc: "Follows the personal and professional lives of a group of doctors at Seattle’s Grey Sloan Memorial Hospital.",
                            posterPath: "https://image.tmdb.org/t/p/w400/jcEl8SISNfGdlQFwLzeEtsjDvpw.jpg",
                            totalEpisode: 10,
                            year: "2024"
                        },
                        {
                            name: "Season 21",
                            desc: "Follows the personal and professional lives of a group of doctors at Seattle’s Grey Sloan Memorial Hospital.",
                            posterPath: "https://image.tmdb.org/t/p/w400/7jEVqXC14bhfAzSPgr896dMdDv6.jpg",
                            totalEpisode: 5,
                            year: "2024"
                        }
                    ],
                    ageRating: "U/A 17+", type: "show", backdropNoLang: ""
                },
                {
                    title: "The Mandalorian",
                    desc: "After the fall of the Galactic Empire, lawlessness has spread throughout the galaxy. A lone gunfighter makes his way through the outer reaches, earning his keep as a bounty hunter.",
                    genres: [
                        "Sci-Fi & Fantasy",
                        "Action & Adventure",
                        "Drama"
                    ],
                    totalSeasons: 3,
                    totalEpisodes: 24,
                    year: "2019",
                    isMostLiked: true,
                    videos: {
                        trailer: "2RVnrBLOBcI"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/biPTe4FGdy5eDTPFoiXO0JpFJEY.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/lPaux407iZ85GADTeFV2wc5yBxQ.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "bounty hunter",
                        "affectation",
                        "space western"
                    ],
                    cast: [
                        "Pedro Pascal",
                        "Katee Sackhoff"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "Set after the fall of the Empire and before the emergence of the First Order. We follow the travails of a lone gunfighter in the outer reaches of the galaxy far from the authority of the New Republic.",
                            posterPath: "https://image.tmdb.org/t/p/w400/K45A0qGcnGsxNKEvaOItvfVrZx.jpg",
                            totalEpisode: 8,
                            year: "2019"
                        },
                        {
                            name: "Season 2",
                            desc: "The Mandalorian and the Child continue their journey, facing enemies and rallying allies as they make their way through a dangerous galaxy in the tumultuous era after the collapse of the Galactic Empi...",
                            posterPath: "https://image.tmdb.org/t/p/w400/pQ33MqEUEQGChyknPtvWODUza1q.jpg",
                            totalEpisode: 8,
                            year: "2020"
                        },
                        {
                            name: "Season 3",
                            desc: "The journeys of the Mandalorian through the Star Wars galaxy continue. Once a lone bounty hunter, Din Djarin has reunited with Grogu. Meanwhile, the New Republic struggles to lead the galaxy away from...",
                            posterPath: "https://image.tmdb.org/t/p/w400/mYmFUlheJrXCLoZdS94kezG8Nuw.jpg",
                            totalEpisode: 8,
                            year: "2023"
                        }
                    ],
                    ageRating: "U/A 13+", type: "show", backdropNoLang: ""
                },
                {
                    title: "The Simpsons",
                    desc: "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands...",
                    genres: [
                        "Family",
                        "Animation",
                        "Comedy"
                    ],
                    totalSeasons: 36,
                    totalEpisodes: 773,
                    year: "1989",
                    isMostLiked: true,
                    videos: {
                        trailer: "_jgYEYERYFQ"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/zmVUsCk31tUuoemp029nNS8l6CV.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/kyE83l2648IXArRQOOQJlirQ76b.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "middle class",
                        "cartoon",
                        "satire"
                    ],
                    cast: [
                        "Dan Castellaneta",
                        "Julie Kavner",
                        "Nancy Cartwright"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands...",
                            posterPath: "https://image.tmdb.org/t/p/w400/t544zSFUNyvmyeP4sHotlcEX3zH.jpg",
                            totalEpisode: 13,
                            year: "1989"
                        },
                        {
                            name: "Season 2",
                            desc: "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands...",
                            posterPath: "https://image.tmdb.org/t/p/w400/bRyDlUQQafSoIT052jpjLBMe8TH.jpg",
                            totalEpisode: 22,
                            year: "1990"
                        },
                        {
                            name: "Season 3",
                            desc: "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands...",
                            posterPath: "https://image.tmdb.org/t/p/w400/9ghmIhWJJuTx3UHyfVVBXQoUGvI.jpg",
                            totalEpisode: 24,
                            year: "1991"
                        },
                        {
                            name: "Season 4",
                            desc: "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands...",
                            posterPath: "https://image.tmdb.org/t/p/w400/voqu5a4drV1CXMjjZ0Mkw35n26l.jpg",
                            totalEpisode: 22,
                            year: "1992"
                        },
                        {
                            name: "Season 5",
                            desc: "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands...",
                            posterPath: "https://image.tmdb.org/t/p/w400/9O7tIcS2KZk1ukMq3aOvoj8KIJZ.jpg",
                            totalEpisode: 22,
                            year: "1993"
                        },
                        {
                            name: "Season 6",
                            desc: "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands...",
                            posterPath: "https://image.tmdb.org/t/p/w400/qD20BnTxIdF1rcnX4BARmFshzKA.jpg",
                            totalEpisode: 25,
                            year: "1994"
                        },
                        {
                            name: "Season 7",
                            desc: "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands...",
                            posterPath: "https://image.tmdb.org/t/p/w400/blCeZS6BmN3wwmF40fuCZSeFwbB.jpg",
                            totalEpisode: 25,
                            year: "1995"
                        },
                        {
                            name: "Season 8",
                            desc: "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands...",
                            posterPath: "https://image.tmdb.org/t/p/w400/xLebCxRHSwXBW39a4OLmMSGChLs.jpg",
                            totalEpisode: 25,
                            year: "1996"
                        },
                        {
                            name: "Season 9",
                            desc: "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands...",
                            posterPath: "https://image.tmdb.org/t/p/w400/6PTYyLD8bSiNZf1PFdCQ9JyiIFW.jpg",
                            totalEpisode: 25,
                            year: "1997"
                        },
                        {
                            name: "Season 10",
                            desc: "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands...",
                            posterPath: "https://image.tmdb.org/t/p/w400/A77xKuxA13aXA1mQd6YLAaTIErK.jpg",
                            totalEpisode: 23,
                            year: "1998"
                        },
                        {
                            name: "Season 11",
                            desc: "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands...",
                            posterPath: "https://image.tmdb.org/t/p/w400/7lgnlOENoCdub15UijLKTHawyhm.jpg",
                            totalEpisode: 22,
                            year: "1999"
                        },
                        {
                            name: "Season 12",
                            desc: "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands...",
                            posterPath: "https://image.tmdb.org/t/p/w400/jfxiyjRLoQq9LavlFNRBgjuweg5.jpg",
                            totalEpisode: 21,
                            year: "2000"
                        },
                        {
                            name: "Season 13",
                            desc: "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands...",
                            posterPath: "https://image.tmdb.org/t/p/w400/xflc3aV1SbP2bGeZNuu4AG6cIqH.jpg",
                            totalEpisode: 22,
                            year: "2001"
                        },
                        {
                            name: "Season 14",
                            desc: "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands...",
                            posterPath: "https://image.tmdb.org/t/p/w400/9IowK57TpeO09D4B46jd4J3wjPO.jpg",
                            totalEpisode: 22,
                            year: "2002"
                        },
                        {
                            name: "Season 15",
                            desc: "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands...",
                            posterPath: "https://image.tmdb.org/t/p/w400/bmMwmEfwmziKzWP2jiU0GMw8yKd.jpg",
                            totalEpisode: 22,
                            year: "2003"
                        },
                        {
                            name: "Season 16",
                            desc: "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands...",
                            posterPath: "https://image.tmdb.org/t/p/w400/ifjiG1gHGRyYmNDWRb9Ul9VCfEn.jpg",
                            totalEpisode: 21,
                            year: "2004"
                        },
                        {
                            name: "Season 17",
                            desc: "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands...",
                            posterPath: "https://image.tmdb.org/t/p/w400/evIWfK3hKFIExETjv6L2YS9J8fw.jpg",
                            totalEpisode: 22,
                            year: "2005"
                        },
                        {
                            name: "Season 18",
                            desc: "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands...",
                            posterPath: "https://image.tmdb.org/t/p/w400/kwb8AZAHyhn96dzn17mtTV3l8dl.jpg",
                            totalEpisode: 22,
                            year: "2006"
                        },
                        {
                            name: "Season 19",
                            desc: "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands...",
                            posterPath: "https://image.tmdb.org/t/p/w400/nLKZJ1ozVvYFtaOynzkShE8wN4k.jpg",
                            totalEpisode: 20,
                            year: "2007"
                        },
                        {
                            name: "Season 20",
                            desc: "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands...",
                            posterPath: "https://image.tmdb.org/t/p/w400/2CUdLX4K8fMlcdVPHUbciTYt4ri.jpg",
                            totalEpisode: 21,
                            year: "2008"
                        },
                        {
                            name: "Season 21",
                            desc: "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands...",
                            posterPath: "https://image.tmdb.org/t/p/w400/fEykf9XN4Cn5tJ17pOD2PObdjoc.jpg",
                            totalEpisode: 23,
                            year: "2009"
                        },
                        {
                            name: "Season 22",
                            desc: "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands...",
                            posterPath: "https://image.tmdb.org/t/p/w400/xUZeYO9NPkmXCcuRrr8PgXzk2Qd.jpg",
                            totalEpisode: 22,
                            year: "2010"
                        },
                        {
                            name: "Season 23",
                            desc: "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands...",
                            posterPath: "https://image.tmdb.org/t/p/w400/wlQnKb3pHBxtMivCjcvM8TDpBbv.jpg",
                            totalEpisode: 22,
                            year: "2011"
                        },
                        {
                            name: "Season 24",
                            desc: "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands...",
                            posterPath: "https://image.tmdb.org/t/p/w400/qGPFl3X6ukZ6fBQRiLxueLWQh9y.jpg",
                            totalEpisode: 22,
                            year: "2012"
                        },
                        {
                            name: "Season 25",
                            desc: "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands...",
                            posterPath: "https://image.tmdb.org/t/p/w400/iwlh2yoia66MCaZEqybsLSt3OHa.jpg",
                            totalEpisode: 22,
                            year: "2013"
                        },
                        {
                            name: "Season 26",
                            desc: "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands...",
                            posterPath: "https://image.tmdb.org/t/p/w400/9bGpb3vWygBogXpQBnTodFWaQte.jpg",
                            totalEpisode: 22,
                            year: "2014"
                        },
                        {
                            name: "Season 27",
                            desc: "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands...",
                            posterPath: "https://image.tmdb.org/t/p/w400/aw26dkO0PnxD0EfYWXCMUQLFNbI.jpg",
                            totalEpisode: 22,
                            year: "2015"
                        },
                        {
                            name: "Season 28",
                            desc: "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands...",
                            posterPath: "https://image.tmdb.org/t/p/w400/j4GZ2oH5PEWEyZkwuZ41OYLb30W.jpg",
                            totalEpisode: 22,
                            year: "2016"
                        },
                        {
                            name: "Season 29",
                            desc: "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands...",
                            posterPath: "https://image.tmdb.org/t/p/w400/9LAihbWybQA2UCLjitES1K3xc3T.jpg",
                            totalEpisode: 21,
                            year: "2017"
                        },
                        {
                            name: "Season 30",
                            desc: "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands...",
                            posterPath: "https://image.tmdb.org/t/p/w400/2uCMfNKU5jQiWV2Js519Eg4lUqQ.jpg",
                            totalEpisode: 23,
                            year: "2018"
                        },
                        {
                            name: "Season 31",
                            desc: "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands...",
                            posterPath: "https://image.tmdb.org/t/p/w400/1y2zzQhnAuFpRNovNMHWlubOaxw.jpg",
                            totalEpisode: 22,
                            year: "2019"
                        },
                        {
                            name: "Season 32",
                            desc: "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands...",
                            posterPath: "https://image.tmdb.org/t/p/w400/ifvEta1mmPGLu3E6lFnPSJAyBhh.jpg",
                            totalEpisode: 22,
                            year: "2020"
                        },
                        {
                            name: "Season 33",
                            desc: "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands...",
                            posterPath: "https://image.tmdb.org/t/p/w400/sjg9DQMgZzUA0Uqfw7eL89gFXOr.jpg",
                            totalEpisode: 22,
                            year: "2021"
                        },
                        {
                            name: "Season 34",
                            desc: "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands...",
                            posterPath: "https://image.tmdb.org/t/p/w400/pnoT4SHafalZmf2XNtzjBppVrpj.jpg",
                            totalEpisode: 22,
                            year: "2022"
                        },
                        {
                            name: "Season 35",
                            desc: "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands...",
                            posterPath: "https://image.tmdb.org/t/p/w400/vHqeLzYl3dEAutojCO26g0LIkom.jpg",
                            totalEpisode: 18,
                            year: "2023"
                        },
                        {
                            name: "Season 36",
                            desc: "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands...",
                            posterPath: "https://image.tmdb.org/t/p/w400/jKPiHUaxjLExkGGj3RUdz6HrOkA.jpg",
                            totalEpisode: 7,
                            year: "2024"
                        }
                    ],
                    ageRating: "U/A 13+", type: "show", backdropNoLang: ""
                },
                {
                    title: "Rick and Morty",
                    desc: "Rick is a mentally-unbalanced but scientifically gifted old man who has recently reconnected with his family. He spends most of his time involving his young grandson Morty in dangerous, outlandish adv...",
                    genres: [
                        "Animation",
                        "Comedy",
                        "Sci-Fi & Fantasy"
                    ],
                    totalSeasons: 7,
                    totalEpisodes: 71,
                    year: "2013",
                    isMostLiked: true,
                    videos: {
                        clip: "p_bH42OiUo4",
                        trailer: "WNhH00OIPP0"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/v5An18JSiuBJiULS6x3EUIdOuvC.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/wq3wqFLwwqnhG6DxmSji9ehLcx6.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "time travel",
                        "grandfather",
                        "alcoholism"
                    ],
                    cast: [
                        "Chris Parnell",
                        "Spencer Grammer",
                        "Sarah Chalke"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "Rick and Morty visit a pawn shop in space, encounter various alternate and virtual realities, and meet the devil at his antique shop.",
                            posterPath: "https://image.tmdb.org/t/p/w400/5WexCcWEkcm7yVpOClOLICroGNO.jpg",
                            totalEpisode: 11,
                            year: "2013"
                        },
                        {
                            name: "Season 2",
                            desc: "After Rick and Morty decided to unfreeze time, they must deal with alien parasites, alternate Jerrys and a decaying, possibly non-existent dimension.",
                            posterPath: "https://image.tmdb.org/t/p/w400/zkhGdE29umuKwa6u6mm7e4cXvYY.jpg",
                            totalEpisode: 10,
                            year: "2015"
                        },
                        {
                            name: "Season 3",
                            desc: "Rick and Morty travel to Atlantis and take some time to relax, plus Rick turns himself into a pickle and faces off against the president.",
                            posterPath: "https://image.tmdb.org/t/p/w400/7kP0ykqRPyY5anbCOMlR1PtLj8Y.jpg",
                            totalEpisode: 10,
                            year: "2017"
                        },
                        {
                            name: "Season 4",
                            desc: "Everything and nothing makes sense when bizarre genius Rick and his grandson Morty take more interdimensional journeys that bend time and space.",
                            posterPath: "https://image.tmdb.org/t/p/w400/87abbwoOfm5MMCWoFewN8pNGZxW.jpg",
                            totalEpisode: 10,
                            year: "2019"
                        },
                        {
                            name: "Season 5",
                            desc: "Hold onto your butts — it’s season five, baby! Rick, Morty and the fam are back with ten all-new episodes that consume unheld butts. Sex, romance, testicle monsters… a guy named Mr. Nimbus… It’s every...",
                            posterPath: "https://image.tmdb.org/t/p/w400/8KdHdOAP8mM4TmykkXnpr6qkyUU.jpg",
                            totalEpisode: 10,
                            year: "2021"
                        },
                        {
                            name: "Season 6",
                            desc: "It’s season six and Rick and Morty are back! Pick up where we left them, worse for wear and down on their luck. Will they manage to bounce back for more adventures? Or will they get swept up in an oce...",
                            posterPath: "https://image.tmdb.org/t/p/w400/cvhNj9eoRBe5SxjCbQTkh05UP5K.jpg",
                            totalEpisode: 10,
                            year: "2022"
                        },
                        {
                            name: "Season 7",
                            desc: "Rick and Morty are back and sounding more like themselves than ever! It's season seven, and the possibilities are endless: what's up with Jerry? EVIL Summer?! And will they ever go back to the high sc...",
                            posterPath: "https://image.tmdb.org/t/p/w400/OXy96OFiLDZIz9jT4Byxk1Hk6b.jpg",
                            totalEpisode: 10,
                            year: "2023"
                        }
                    ],
                    ageRating: "U/A 17+", type: "show", backdropNoLang: ""
                }
            ]
        },
        critic: {
            tabs: ['home', 'movie', 'show'],
            title: "Critically Acclaimed",
            movieTitle: "Critically Renowned Films",
            showTitle: "Critically Acclaimed: Shows",
            movies: [
                {
                    title: "2001: A Space Odyssey",
                    desc: "Humanity finds a mysterious object buried beneath the lunar surface and sets off to find its origins with the help of HAL 9000, the world's most advanced super computer.",
                    genres: [
                        "Science Fiction",
                        "Mystery",
                        "Adventure"
                    ],
                    runtime: 149,
                    year: "1968",
                    isMostLiked: true,
                    videos: {
                        clip: "avjdKTqiVvQ",
                        trailer: "kR2r-A9H3Kg"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/9yTOU2SvTfAEHDPEG5qraLoe4MI.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/mccdFiDV1l5vVkw7ljMZSGLkSuz.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "man vs machine",
                        "moon",
                        "jupiter"
                    ],
                    cast: [
                        "Keir Dullea",
                        "Gary Lockwood",
                        "William Sylvester"
                    ],
                    ageRating: "U-Rated", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Raging Bull",
                    desc: "The life of boxer Jake LaMotta, whose violence and temper that led him to the top in the ring destroyed his life outside of it.",
                    genres: [
                        "Drama"
                    ],
                    runtime: 129,
                    year: "1980",
                    isMostLiked: false,
                    videos: {
                        clip: "MSspmsYAOq0",
                        trailer: "G5RHRg6zEhY"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/gWT4iXWExkbjWiViJpsixCfOMOU.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/x3nWKOKCIoZkuUz0T1SfcrZ7eb8.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "jealousy",
                        "transporter",
                        "sports"
                    ],
                    cast: [
                        "Robert De Niro",
                        "Cathy Moriarty",
                        "Joe Pesci"
                    ],
                    ageRating: "A-Rated", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Swades",
                    desc: "A successful Indian scientist returns home to his village to take his nanny back to America with him, and in the process rediscovers his roots.",
                    genres: [
                        "Drama"
                    ],
                    runtime: 195,
                    year: "2004",
                    isMostLiked: false,
                    videos: {
                        trailer: "vc7AZNWvs0M"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/nvFU0LK23OdBmMP6Pu5vO2VRGTJ.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/aJOpp2uvpnMszWrAzW5xVsvtQWY.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "nasa",
                        "social issues"
                    ],
                    cast: [
                        "Shah Rukh Khan",
                        "Gayatri Joshi",
                        "Kishori Balal"
                    ],
                    ageRating: "U-Rated", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Vertigo",
                    desc: "A retired San Francisco detective suffering from acrophobia investigates the strange activities of an old friend's wife, all the while becoming dangerously obsessed with her.",
                    genres: [
                        "Mystery",
                        "Romance",
                        "Thriller"
                    ],
                    runtime: 128,
                    year: "1958",
                    isMostLiked: true,
                    videos: {
                        clip: "SW9W7dkHEhs",
                        trailer: "95o-QM-lz8g",
                        teaser: "nA2ZcD_XAuY"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/jdusFrnKhbDBUIHNzFTK9uDsmwU.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/zb2r1Ir9EUOiUSXjntIPpRO7zFi.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "plan",
                        "sense of guilt",
                        "suicide attempt"
                    ],
                    cast: [
                        "James Stewart",
                        "Kim Novak",
                        "Barbara Bel Geddes"
                    ],
                    ageRating: "U/A 7+", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Memories of Murder",
                    desc: "During the late 1980s, two detectives in a South Korean province attempt to solve the nation's first series of rape-and-murder cases.",
                    genres: [
                        "Crime",
                        "Drama",
                        "Thriller"
                    ],
                    runtime: 131,
                    year: "2003",
                    isMostLiked: false,
                    videos: {
                        clip: "Qt08rUY15m4",
                        trailer: "0n_HQwQU8ls",
                        teaser: "e7-fyFpoLPQ"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/6mRTv9FgV8GEQrsWhcpbunJvYU4.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/uzVGePBZLsdzeMUJArknO5TsB78.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "assassin",
                        "rape",
                        "corruption"
                    ],
                    cast: [
                        "Song Kang-ho",
                        "Kim Sang-kyung",
                        "Kim Roi-ha"
                    ],
                    ageRating: "U/A 10+", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Memento",
                    desc: "Leonard Shelby is tracking down the man who raped and murdered his wife. The difficulty of locating his wife's killer, however, is compounded by the fact that he suffers from a rare, untreatable form ...",
                    genres: [
                        "Mystery",
                        "Thriller"
                    ],
                    runtime: 113,
                    year: "2000",
                    isMostLiked: false,
                    videos: {
                        trailer: "Rq9eM4ZXRgs"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/5wmhPm9UmAFsVAwYjk5ZDjuqoW0.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/hlh8G7r8iOqJmpRbN8j9IvtMgc9.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "drug dealer",
                        "amnesia",
                        "insulin"
                    ],
                    cast: [
                        "Guy Pearce",
                        "Carrie-Anne Moss",
                        "Joe Pantoliano"
                    ],
                    ageRating: "A-Rated", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Apocalypse Now",
                    desc: "At the height of the Vietnam war, Captain Benjamin Willard is sent on a dangerous mission that, officially, \"does not exist, nor will it ever exist.\" His goal is to locate - and eliminate - a mysterio...",
                    genres: [
                        "Drama",
                        "War"
                    ],
                    runtime: 147,
                    year: "1979",
                    isMostLiked: true,
                    videos: {
                        clip: "pN9DyoilZqE",
                        trailer: "9l-ViOOFH-s"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/AoB4LW78aIb9n5csp03MrYBe95T.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/aB1YuwI4EZqWQZCTpr3cdJG9oFX.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "guerrilla warfare",
                        "epic",
                        "vietnam war"
                    ],
                    cast: [
                        "Martin Sheen",
                        "Frederic Forrest",
                        "Albert Hall"
                    ],
                    ageRating: "A-Rated", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Saving Private Ryan",
                    desc: "As U.S. troops storm the beaches of Normandy, three brothers lie dead on the battlefield, with a fourth trapped behind enemy lines. Ranger captain John Miller and seven men are tasked with penetrating...",
                    genres: [
                        "Drama",
                        "History",
                        "War"
                    ],
                    runtime: 169,
                    year: "1998",
                    isMostLiked: true,
                    videos: {
                        trailer: "y4SA9yUDgW8",
                        teaser: "x3wsoR3UyKM"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/cfCzOzMPPBsPvp2gAVepsmV0vbA.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/jv2zZcZKcaCF1WgLWNqV5tIZhjv.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "epic",
                        "army",
                        "airplane"
                    ],
                    cast: [
                        "Tom Hanks",
                        "Tom Sizemore",
                        "Edward Burns"
                    ],
                    ageRating: "A-Rated", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Gulaal",
                    desc: "A law student witnesses the struggles of the Rajputs, deception, homicide and crime after being elected as General Secretary of his college.",
                    genres: [
                        "Crime",
                        "Drama"
                    ],
                    runtime: 147,
                    year: "2009",
                    isMostLiked: false,
                    videos: {
                        trailer: "IS7KLVs1Ib4"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/r9fwjoJOYT1xQGHwLkSJA6snhsR.jpg",
                        isLogoIncluded: false
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/92wnvRx1bvfiqblnKm32JMor04P.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "Not Available"
                    ],
                    cast: [
                        "Raj Singh Chaudhary",
                        "Kay Kay Menon",
                        "Abhimanyu Singh"
                    ],
                    ageRating: "U/A 10+", type: "movie", backdropNoLang: ""
                },
                {
                    title: "No Country for Old Men",
                    desc: "Llewelyn Moss stumbles upon dead bodies, $2 million and a hoard of heroin in a Texas desert, but methodical killer Anton Chigurh comes looking for it, with local sheriff Ed Tom Bell hot on his trail. ...",
                    genres: [
                        "Crime",
                        "Drama",
                        "Thriller"
                    ],
                    runtime: 122,
                    year: "2007",
                    isMostLiked: true,
                    videos: {
                        clip: "m8cwKEITxV8",
                        trailer: "A0oNrgumrlE"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/hvAAY1qNrIcTRGw7zsF37MzpvCL.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/6u3WGSBwqmsG3tooD2B5eMKkxKU.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "vietnam veteran",
                        "sheriff",
                        "trailer park"
                    ],
                    cast: [
                        "Javier Bardem",
                        "Tommy Lee Jones",
                        "Josh Brolin"
                    ],
                    ageRating: "A-Rated", type: "movie", backdropNoLang: ""
                }
            ],
            shows: [
                {
                    title: "The Sopranos",
                    desc: "The story of New Jersey-based Italian-American mobster Tony Soprano and the difficulties he faces as he tries to balance the conflicting requirements of his home life and the criminal organization he ...",
                    genres: [
                        "Drama"
                    ],
                    totalSeasons: 6,
                    totalEpisodes: 86,
                    year: "1999",
                    isMostLiked: true,
                    videos: {
                        trailer: "Q8cBFvpqmH0"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/aM2LjEHh6BD9NQ9cJxGsdoCMUZB.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/mfIihXrXUHmca7k7cYGupu6DGXQ.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "new jersey",
                        "italian american",
                        "drug dealer"
                    ],
                    cast: [
                        "James Gandolfini",
                        "Edie Falco",
                        "Jamie-Lynn Sigler"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "In Season 1, feeling his handle on his family and his business slipping away, mob boss Tony Soprano suffers a series of anxiety attacks that land him in the office of a psychiatrist. Opening up to his...",
                            posterPath: "https://image.tmdb.org/t/p/w400/3NsJzafk0Sp7yE9yShzQsybHw4x.jpg",
                            totalEpisode: 13,
                            year: "1999"
                        },
                        {
                            name: "Season 2",
                            desc: "His uncle's in jail. His mother's in the hospital. His best friend's still missing. His sister's moving home. His panic attacks are back. And his shrink refuses to see him. Tony Soprano has recently b...",
                            posterPath: "https://image.tmdb.org/t/p/w400/wvCOKWM1abB5CfuWKqDYeMRV3lN.jpg",
                            totalEpisode: 13,
                            year: "2000"
                        },
                        {
                            name: "Season 3",
                            desc: "In season three, the federal wiretap begins and Meadow goes to college. Tony faces challenges from some tough newcomers, such as hothead Ralph Cifaretto, New York crime boss Johnny Sack and a sexy car...",
                            posterPath: "https://image.tmdb.org/t/p/w400/zFuz2PgkHDr9Lx5YAEmiWbXKCio.jpg",
                            totalEpisode: 13,
                            year: "2001"
                        },
                        {
                            name: "Season 4",
                            desc: "With Paulie in jail, Christopher becomes acting capo in season four. Junior faces a RICO trial while Tony finds that the recession affects his businesses. Meanwhile, Furio catches Carmela's eye, and J...",
                            posterPath: "https://image.tmdb.org/t/p/w400/q01fVFY7rQEMMnexa9Urv7NOdKO.jpg",
                            totalEpisode: 13,
                            year: "2002"
                        },
                        {
                            name: "Season 5",
                            desc: "In season five, a separated Tony and Carmela negotiate family and money issues. Meanwhile, Tony's reunion with paroled cousin Tony Blundetto may endanger his alliance with Johnny Sack; and Adriana get...",
                            posterPath: "https://image.tmdb.org/t/p/w400/p651eYM0Vd0CWDvndbMyaS0lDeD.jpg",
                            totalEpisode: 13,
                            year: "2004"
                        },
                        {
                            name: "Season 6",
                            desc: "As the final episodes take shape, Tony faces a myriad of stress-inducing crises at home, at work, and from the law. While his wife and children each make choices that promise to change the face of the...",
                            posterPath: "https://image.tmdb.org/t/p/w400/b1P9PAUI18mb62N0DtHOd71L3CT.jpg",
                            totalEpisode: 21,
                            year: "2006"
                        }
                    ],
                    ageRating: "U/A 17+", type: "show", backdropNoLang: ""
                },
                {
                    title: "Succession",
                    desc: "Follow the lives of the Roy family as they contemplate their future once their aging father begins to step back from the media and entertainment conglomerate they control.",
                    genres: [
                        "Drama",
                        "Comedy"
                    ],
                    totalSeasons: 4,
                    totalEpisodes: 39,
                    year: "2018",
                    isMostLiked: true,
                    videos: {
                        trailer: "ZO-XX1UpsqY",
                        teaser: "6h9u5FCfAzk"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/3K96CXCtm7fAgpnBFqwVVhoIwns.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/5MAURYSb9Q98fRWuSTOGFlztKIZ.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "new york city",
                        "media tycoon",
                        "businessman"
                    ],
                    cast: [
                        "Jeremy Strong",
                        "Kieran Culkin",
                        "Sarah Snook"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "When aging, uber-wealthy patriarch Logan Roy—CEO of one of the world's largest media and entertainment conglomerates—decides to retire, each of his four grown children follows a personal agenda that d...",
                            posterPath: "https://image.tmdb.org/t/p/w400/hS62paPx7Ls3c6voXcXJzJNaTG4.jpg",
                            totalEpisode: 10,
                            year: "2018"
                        },
                        {
                            name: "Season 2",
                            desc: "Beginning where season one dramatically left off, season two follows the Roy family as they struggle to retain control of their empire, and while the future looks increasingly uncertain, it is the pas...",
                            posterPath: "https://image.tmdb.org/t/p/w400/hXuVhMxi3ZNzfBY8h7Hiiotmjiy.jpg",
                            totalEpisode: 10,
                            year: "2019"
                        },
                        {
                            name: "Season 3",
                            desc: "Ambushed by his rebellious son Kendall at the end of Season 2, Logan Roy begins Season 3 in a perilous position. Scrambling to secure familial, political, and financial alliances, tensions rise as a b...",
                            posterPath: "https://image.tmdb.org/t/p/w400/zOFosA3Ew4xW9jsoWYU2ou16a5F.jpg",
                            totalEpisode: 9,
                            year: "2021"
                        },
                        {
                            name: "Season 4",
                            desc: "In season four, the sale of media conglomerate Waystar Royco to tech visionary Lukas Matsson moves ever closer. The prospect of this seismic sale provokes existential angst and familial division among...",
                            posterPath: "https://image.tmdb.org/t/p/w400/rIGO15WSt2OcgSEYJEvJQJIY1Kj.jpg",
                            totalEpisode: 10,
                            year: "2023"
                        }
                    ],
                    ageRating: "U/A 17+", type: "show", backdropNoLang: ""
                },
                {
                    title: "MINDHUNTER",
                    desc: "An agent in the FBI's Elite Serial Crime Unit develops profiling techniques as he pursues notorious serial killers and rapists.",
                    genres: [
                        "Drama",
                        "Crime"
                    ],
                    totalSeasons: 2,
                    totalEpisodes: 19,
                    year: "2017",
                    isMostLiked: true,
                    videos: {
                        clip: "xn7vYEn0hF0",
                        trailer: "evdxH50J3rs",
                        teaser: "CYl14aLjkg0"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/hGLtNsDyut4uy0tnX9WmZyXDdNj.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/bUeXqAHghLNOALd5PUiYdXr5PW.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "prison",
                        "1970s",
                        "fbi"
                    ],
                    cast: [
                        "Jonathan Groff",
                        "Holt McCallany",
                        "Anna Torv"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "An agent in the FBI's Elite Serial Crime Unit develops profiling techniques as he pursues notorious serial killers and rapists.",
                            posterPath: "https://image.tmdb.org/t/p/w400/su62g54SH6nmDLimJ2EDptHf6m6.jpg",
                            totalEpisode: 10,
                            year: "2017"
                        },
                        {
                            name: "Season 2",
                            desc: "The Behavioral Science Unit's killer instincts move from theory into action when the FBI joins in a high-profile hunt for a serial child murderer.",
                            posterPath: "https://image.tmdb.org/t/p/w400/hOO7LBgN7AKJuV3LbLuIKrtHtnZ.jpg",
                            totalEpisode: 9,
                            year: "2019"
                        }
                    ],
                    ageRating: "U/A 17+", type: "show", backdropNoLang: ""
                },
                {
                    title: "Fargo",
                    desc: "A close-knit anthology series dealing with stories involving malice, violence and murder based in and around Minnesota.",
                    genres: [
                        "Crime",
                        "Drama"
                    ],
                    totalSeasons: 5,
                    totalEpisodes: 51,
                    year: "2014",
                    isMostLiked: true,
                    videos: {
                        trailer: "FXIeYKlMA_0"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/9ZwrH0vDooketKwEy0weUELIaBW.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/gdFFKKCDfubJVbj88JnaCHRJDGZ.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "detective",
                        "minnesota",
                        "winter"
                    ],
                    cast: [
                        "Juno Temple",
                        "Jennifer Jason Leigh",
                        "David Rysdahl"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "In January 2006, Lorne Malvo passes through Bemidji, Minnesota and influences put-upon insurance salesman Lester Nygaard with his malice and violence. Meanwhile, Deputy Molly Solverson and Duluth poli...",
                            posterPath: "https://image.tmdb.org/t/p/w400/matO9b040ibkviZV5mmDdKpQMEV.jpg",
                            totalEpisode: 10,
                            year: "2014"
                        },
                        {
                            name: "Season 2",
                            desc: "Season two's chapter takes you back to 1979 in Sioux Falls, South Dakota and Luverne, Minnesota. Lou Solverson, a young State Police Officer recently back from Vietnam, investigates a case involving a...",
                            posterPath: "https://image.tmdb.org/t/p/w400/xeKfy7m8rPl08mQ6ZfbkgOy6Hdj.jpg",
                            totalEpisode: 10,
                            year: "2015"
                        },
                        {
                            name: "Season 3",
                            desc: "December 2010, Minnesota. Emmit Stussy, the Parking Lot King of Minnesota, is a handsome, self-made, real estate mogul and family man - an American success story. His slightly younger brother, Ray Stu...",
                            posterPath: "https://image.tmdb.org/t/p/w400/dYHoNzcpQXzU2qBMZYbyOnrcuvi.jpg",
                            totalEpisode: 10,
                            year: "2017"
                        },
                        {
                            name: "Season 4",
                            desc: "In 1950s Kansas City, Missouri, two criminal syndicates have struck an uneasy peace. One Italian, one African-American. Together they control an alternate economy — that of exploitation, graft and dru...",
                            posterPath: "https://image.tmdb.org/t/p/w400/zLhsNgyby6jqlrSOcrU2TWXm7yB.jpg",
                            totalEpisode: 11,
                            year: "2020"
                        },
                        {
                            name: "Season 5",
                            desc: "After an unexpected series of events lands Dorothy \"Dot\" Lyon in hot water with the authorities, this seemingly typical Midwestern housewife is suddenly plunged back into a life she thought she had le...",
                            posterPath: "https://image.tmdb.org/t/p/w400/6U9CPeD8obHzweikFhiLhpc7YBT.jpg",
                            totalEpisode: 10,
                            year: "2023"
                        }
                    ],
                    ageRating: "U/A 17+", type: "show", backdropNoLang: ""
                },
                {
                    title: "The Wire",
                    desc: "Told from the points of view of both the Baltimore homicide and narcotics detectives and their targets, the series captures a universe in which the national war on drugs has become a permanent, self-s...",
                    genres: [
                        "Crime",
                        "Drama"
                    ],
                    totalSeasons: 5,
                    totalEpisodes: 60,
                    year: "2002",
                    isMostLiked: true,
                    videos: {
                        trailer: "uDcQbk78CSw"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/io4M9Maa72I8Ulfmd5qq0I65sYo.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/cP5IrOYxU7qtFl3Gyjtj9iPufCn.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "corruption",
                        "newspaper",
                        "drug trafficking"
                    ],
                    cast: [
                        "Dominic West",
                        "Lance Reddick",
                        "Sonja Sohn"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "On the drug-infested streets of West Baltimore, there are good guys and there are bad guys. Sometimes you need more than a badge to tell them apart. Season 1 follows a single sprawling drug and murder...",
                            posterPath: "https://image.tmdb.org/t/p/w400/cxCESSuNixOGaUl2hJ0QGTjV0bV.jpg",
                            totalEpisode: 13,
                            year: "2002"
                        },
                        {
                            name: "Season 2",
                            desc: "McNulty's on harbor patrol. Daniels is in the police-archives dungeon. Prez is chafing in the suburbs. Greggs has a desk job. The detail may be on ice, but corruption marches on . . . and a horrific d...",
                            posterPath: "https://image.tmdb.org/t/p/w400/scOZiOzUePpz7JnWRpjI8HcY1RU.jpg",
                            totalEpisode: 12,
                            year: "2003"
                        },
                        {
                            name: "Season 3",
                            desc: "The heat is on in Baltimore. The drug war is being lost, bodies are piling up, and a desperate mayor wants the tide turned before the election. But the police department hasn't got any answers. Wireta...",
                            posterPath: "https://image.tmdb.org/t/p/w400/mWo4dHE0XXsKgZOQQCtkHl3IHrf.jpg",
                            totalEpisode: 12,
                            year: "2004"
                        },
                        {
                            name: "Season 4",
                            desc: "In the projects. On the docks. In City Hall. And now, in the schools. The places and faces change, but the game remains the same. A new story begins. This year, while expanding on storylines introduce...",
                            posterPath: "https://image.tmdb.org/t/p/w400/jxSJdEX6jmODu3eglC8j4Kv2Gll.jpg",
                            totalEpisode: 13,
                            year: "2006"
                        },
                        {
                            name: "Season 5",
                            desc: "In the projects. On the docks. In City Hall. In the schools. And now, in the media. The places and faces change, but the game remains the same. In the fifth — and final — season, the series expands it...",
                            posterPath: "https://image.tmdb.org/t/p/w400/x5BreFKv3Tbxm8Z7s2d9LKQiHVh.jpg",
                            totalEpisode: 10,
                            year: "2008"
                        }
                    ],
                    ageRating: "U/A 13+", type: "show", backdropNoLang: ""
                },
                {
                    title: "Better Call Saul",
                    desc: "Six years before Saul Goodman meets Walter White. We meet him when the man who will become Saul Goodman is known as Jimmy McGill, a small-time lawyer searching for his destiny, and, more immediately, ...",
                    genres: [
                        "Crime",
                        "Drama"
                    ],
                    totalSeasons: 6,
                    totalEpisodes: 63,
                    year: "2015",
                    isMostLiked: true,
                    videos: {
                        trailer: "HN4oydykJFc",
                        teaser: "EujKha0HQGo"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/8Oe31sSVE8PTFUoeLn4qZ2otJzA.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/hwxBWyoeTefjafeqkIONxl0mXUV.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "new mexico",
                        "moral conflict",
                        "crooked lawyer"
                    ],
                    cast: [
                        "Bob Odenkirk",
                        "Jonathan Banks",
                        "Rhea Seehorn"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "Jimmy McGill was a small-time lawyer, hustling to make ends meet. This is how the search for his destiny and the story of Saul Goodman collide.",
                            posterPath: "https://image.tmdb.org/t/p/w400/bAbZBZmz25Lqk8A8mwMWzAkvlAj.jpg",
                            totalEpisode: 10,
                            year: "2015"
                        },
                        {
                            name: "Season 2",
                            desc: "Jimmy McGill returns with a new outlook on life and growing appetites that will push his career -- and his relationships -- into uncharted territory.",
                            posterPath: "https://image.tmdb.org/t/p/w400/4NDwAQjFD8bTOsMKxYdl8IK10R9.jpg",
                            totalEpisode: 10,
                            year: "2016"
                        },
                        {
                            name: "Season 3",
                            desc: "Jimmy resorts to ever more desperate measures to keep his law career afloat, while Mike is drawn into the orbit of a mysterious new figure.",
                            posterPath: "https://image.tmdb.org/t/p/w400/dHIMW3CkL21jYWtsHiAdwkCjAej.jpg",
                            totalEpisode: 10,
                            year: "2017"
                        },
                        {
                            name: "Season 4",
                            desc: "As Jimmy copes with a shocking loss, a series of shady schemes propel him deeper into the criminal world -- and closer to his life as Saul Goodman.",
                            posterPath: "https://image.tmdb.org/t/p/w400/8zvIqLFOrBymKKI3L2W1AH8YZQI.jpg",
                            totalEpisode: 10,
                            year: "2018"
                        },
                        {
                            name: "Season 5",
                            desc: "Changing his name to Saul Goodman, Jimmy recruits a new crop of clients. Kim wrestles with a moral dilemma at work. Lalo's feud with Gus heats up.",
                            posterPath: "https://image.tmdb.org/t/p/w400/dZHa2vUtYNQ81KV38eHGjn0P4JE.jpg",
                            totalEpisode: 10,
                            year: "2020"
                        },
                        {
                            name: "Season 6",
                            desc: "Showdowns, dirty deeds and a flood of new clients: Jimmy's transformation comes full circle.",
                            posterPath: "https://image.tmdb.org/t/p/w400/rbNc44otT6VRd7QpxqlUAMyByaQ.jpg",
                            totalEpisode: 13,
                            year: "2022"
                        }
                    ],
                    ageRating: "U/A 13+", type: "show", backdropNoLang: ""
                },
                {
                    title: "Mad Men",
                    desc: "Set in 1960-1970 New York, this sexy, stylized and provocative drama follows the lives of the ruthlessly competitive men and women of Madison Avenue advertising.",
                    genres: [
                        "Drama"
                    ],
                    totalSeasons: 7,
                    totalEpisodes: 92,
                    year: "2007",
                    isMostLiked: true,
                    videos: {
                        trailer: "m7NChV93LBw"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/A36SuVJ1en8yqZoUCyspGXaT8Xz.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/yHQLEQ9LHqilyEK65yFIiWLiATp.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "work",
                        "workplace",
                        "advertising"
                    ],
                    cast: [
                        "Jon Hamm",
                        "Elisabeth Moss",
                        "Vincent Kartheiser"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "Season one takes place between March and November 1960. It introduces the fictional advertising agency Sterling Cooper. The season begins with the new secretary, Peggy Olson, starting her first day wi...",
                            posterPath: "https://image.tmdb.org/t/p/w400/3yCFuEHPmCGo09Va6wwhMpqyxoG.jpg",
                            totalEpisode: 13,
                            year: "2007"
                        },
                        {
                            name: "Season 2",
                            desc: "Season two takes place between February and October 1962, culminating with the Cuban Missile Crisis. It expands on Peggy's rise in the workplace and the marital strife between Don and Betty Draper as ...",
                            posterPath: "https://image.tmdb.org/t/p/w400/6X9p5FwtpLe9FgENswrIV4RyOvW.jpg",
                            totalEpisode: 13,
                            year: "2008"
                        },
                        {
                            name: "Season 3",
                            desc: "Season three takes place six months after the conclusion of the second season and ends in December 1963. It chronicles the end of the \"Camelot era\" as the characters go through immense change in their...",
                            posterPath: "https://image.tmdb.org/t/p/w400/vLZMY8UUxx8w2tizezT3AFBzmIJ.jpg",
                            totalEpisode: 13,
                            year: "2009"
                        },
                        {
                            name: "Season 4",
                            desc: "Season four takes place between November 1964 and October 1965. It is set at the new and considerably more modern advertising agency, Sterling Cooper Draper Pryce. The main narrative of the fourth sea...",
                            posterPath: "https://image.tmdb.org/t/p/w400/2gy1LQrHlSZT8b1ifX5ypXArL0.jpg",
                            totalEpisode: 13,
                            year: "2010"
                        },
                        {
                            name: "Season 5",
                            desc: "Season 5 takes place between Memorial Day 1966 and spring 1967. The season explores Don Draper's new marriage to Megan, which leads him to ignore his work at the Sterling Cooper Draper Pryce advertisi...",
                            posterPath: "https://image.tmdb.org/t/p/w400/6geGVQMYsczv6n0F6Fjnig04OPp.jpg",
                            totalEpisode: 13,
                            year: "2012"
                        },
                        {
                            name: "Season 6",
                            desc: "Season 6 takes place between December 1967 and November 1968.",
                            posterPath: "https://image.tmdb.org/t/p/w400/Aq8IR2rdiDL1gNm9FNz0IPu8HDi.jpg",
                            totalEpisode: 13,
                            year: "2013"
                        },
                        {
                            name: "Season 7",
                            desc: "The first part of season 7 begins in January 1969, several weeks after the Thanksgiving 1968 ending of season 6, and ends in July 1969, with characters dealing with the dynamics of lives and offices b...",
                            posterPath: "https://image.tmdb.org/t/p/w400/uGYQJz3HcoU4Qcv0skxMGBNKZSh.jpg",
                            totalEpisode: 14,
                            year: "2014"
                        }
                    ],
                    ageRating: "U/A 13+", type: "show", backdropNoLang: ""
                },
                {
                    title: "Band of Brothers",
                    desc: "Drawn from interviews with survivors of Easy Company, as well as their journals and letters, Band of Brothers chronicles the experiences of these men from paratrooper training in Georgia through the e...",
                    genres: [
                        "Drama",
                        "War & Politics"
                    ],
                    totalSeasons: 1,
                    totalEpisodes: 10,
                    year: "2001",
                    isMostLiked: true,
                    videos: {
                        trailer: "KKRBAFlN5ww"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/mxezvS3YnlxSZUfoKZqKHWJdcBo.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/cRYVIUJo0d5JJgD7g37gsq7TDwM.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "world war ii",
                        "us army",
                        "paratroops"
                    ],
                    cast: [
                        "Damian Lewis",
                        "Donnie Wahlberg",
                        "David Schwimmer"
                    ],
                    seasons: [
                        {
                            name: "Miniseries",
                            desc: "Drawn from interviews with survivors of Easy Company, as well as their journals and letters, Band of Brothers chronicles the experiences of these men from paratrooper training in Georgia through the e...",
                            posterPath: "https://image.tmdb.org/t/p/w400/1dTx3cRcSpaOCe0mXOVEBjz25z3.jpg",
                            totalEpisode: 10,
                            year: "2001"
                        }
                    ],
                    ageRating: "U/A 17+", type: "show", backdropNoLang: ""
                },
                {
                    title: "Asur",
                    desc: "Set in the backdrop of the mystical city of Varanasi, Asur follows Nikhil Nair, a forensic-expert-turned-teacher, who returns to his roots at the Central Bureau of Investigation, and along with his fo...",
                    genres: [
                        "Crime",
                        "Drama",
                        "Mystery"
                    ],
                    totalSeasons: 2,
                    totalEpisodes: 16,
                    year: "2020",
                    isMostLiked: false,
                    videos: {
                        trailer: "LDirQBvwx7g"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/rP6y7UICuiGDvrrwzbQPLh6wu4m.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/y3QxRmgJqYlMXmHR8sKYfecF0FD.png",
                        isLogoIncluded: false
                    },
                    keywords: [
                        "Not Available"
                    ],
                    cast: [
                        "Arshad Warsi",
                        "Anupriya Goenka",
                        "Ridhi Dogra"
                    ],
                    seasons: [
                        {
                            name: "Welcome to Your Dark Side",
                            desc: "Set in the backdrop of the mystical city of Varanasi, Asur follows Nikhil Nair, a forensic-expert-turned-teacher, who returns to his roots at the Central Bureau of Investigation, and along with his fo...",
                            posterPath: "https://image.tmdb.org/t/p/w400/nGklFY0qeQ9KOzPlwrs0tSir7iF.jpg",
                            totalEpisode: 8,
                            year: "2020"
                        },
                        {
                            name: "Rise of the Dark Side",
                            desc: "Shubh returns for revenge and this season he takes the challenge to a whole new level. With the heroes fallen apart, will a desolate Dhananjay Rajpoot and a torn Nikhil Nair be able to stop him?",
                            posterPath: "https://image.tmdb.org/t/p/w400/j46aS5y81KEcKLhdBSWGc9mtaWy.jpg",
                            totalEpisode: 8,
                            year: "2023"
                        }
                    ],
                    ageRating: "U/A 17+", type: "show", backdropNoLang: ""
                },
                {
                    title: "Paatal Lok",
                    desc: "A down and out cop lands the case of a lifetime when four suspects are nabbed in the assassination attempt of a prime time journalist. The case turns out to be a devious maze where nothing is what it ...",
                    genres: [
                        "Crime",
                        "Drama"
                    ],
                    totalSeasons: 2,
                    totalEpisodes: 9,
                    year: "2020",
                    isMostLiked: false,
                    videos: {
                        trailer: "cNwWMW4mxO8"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/s9HBagoNkCGoXxykbR9rvUgS91d.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/cEwO2WmHVmYkl72h3DB4vNHTrcp.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "detective",
                        "police",
                        "organized crime"
                    ],
                    cast: [
                        "Jaideep Ahlawat",
                        "Gul Panag",
                        "Neeraj Kabi"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "A down and out cop lands the case of a lifetime when four suspects are nabbed in the assassination attempt of a prime time journalist. The case turns out to be a devious maze where nothing is what it ...",
                            posterPath: "https://image.tmdb.org/t/p/w400/w5wlQNIDnP3hlt79BVEr2yaFRum.jpg",
                            totalEpisode: 9,
                            year: "2020"
                        },
                        {
                            name: "Season 2",
                            desc: "A down and out cop lands the case of a lifetime when four suspects are nabbed in the assassination attempt of a prime time journalist. The case turns out to be a devious maze where nothing is what it ...",
                            posterPath: "https://image.tmdb.org/t/p/w400/duaaazbB49iKK4TMvekR3fQIVhU.jpg",
                            totalEpisode: "Not Disclosed Yet",
                            year: "202- (Unannounced)"
                        }
                    ],
                    ageRating: "U/A 13+", type: "show", backdropNoLang: ""
                }
            ]
        },
        netflix: {
            tabs: ['home', 'movie', 'show'],
            title: "Netflix Originals",
            movieTitle: "By Netflix",
            showTitle: "Only on Netflix",
            movies: [
                {
                    title: "Bird Box",
                    desc: "Five years after an ominous unseen presence drives most of society to suicide, a survivor and her two children make a desperate bid to reach safety.",
                    genres: [
                        "Horror",
                        "Thriller",
                        "Drama"
                    ],
                    runtime: 124,
                    year: "2018",
                    isMostLiked: false,
                    videos: {
                        clip: "IBLK5FAAp1Q",
                        trailer: "INJ2bPFy108"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/xB4KnftQPUiRl3f039YK0xTj93F.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/5geEjUx1MaGpJHDCskeoOHdqFYR.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "blindfold",
                        "doomsday",
                        "survival horror"
                    ],
                    cast: [
                        "Sandra Bullock",
                        "Trevante Rhodes",
                        "John Malkovich"
                    ],
                    ageRating: "A-Rated", type: "movie", backdropNoLang: "https://image.tmdb.org/t/p/original/pDKFL1zcHzEpmz4MJA5JJnRbJeD.jpg"
                },
                {
                    title: "Extraction",
                    desc: "A hardened gun-for-hire's latest mission becomes a soul-searching race to survive when he's sent into Bangladesh to rescue a drug lord's kidnapped son.",
                    genres: [
                        "Action",
                        "Thriller"
                    ],
                    runtime: 116,
                    year: "2020",
                    isMostLiked: true,
                    videos: {
                        trailer: "L6P3nI6VnlY"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/dkpbxcTDUHygJI3xpqrpS5OJJ8M.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/8kmF0Eig8czqXY8CHdM5H2rggNR.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "drug dealer",
                        "mercenary",
                        "crime boss"
                    ],
                    cast: [
                        "Chris Hemsworth",
                        "Rudhraksh Jaiswal",
                        "Randeep Hooda"
                    ],
                    ageRating: "A-Rated", type: "movie", backdropNoLang: "https://image.tmdb.org/t/p/original/1R6cvRtZgsYCkh8UFuWFN33xBP4.jpg"
                },
                {
                    title: "The Irishman",
                    desc: "Pennsylvania, 1956. Frank Sheeran, a war veteran of Irish origin who works as a truck driver, accidentally meets mobster Russell Bufalino. Once Frank becomes his trusted man, Bufalino sends him to Chi...",
                    genres: [
                        "Crime",
                        "Drama",
                        "History"
                    ],
                    runtime: 209,
                    year: "2019",
                    isMostLiked: false,
                    videos: {
                        clip: "Rn1Vtou_sU0",
                        trailer: "RS3aHkkfuEI",
                        teaser: "1Expe7hf6MU"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/4P6bqSY4goBnDleDLj7kLupyiW3.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/bCAhNbPTDCj6g2ukijoySf7vNQL.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "chicago, illinois",
                        "hitman",
                        "pennsylvania, usa"
                    ],
                    cast: [
                        "Robert De Niro",
                        "Al Pacino",
                        "Joe Pesci"
                    ],
                    ageRating: "A-Rated", type: "movie", backdropNoLang: "https://image.tmdb.org/t/p/original/1RDto0tLo8Fhq7OcwgDaM7nECb7.jpg"
                },
                {
                    title: "The Old Guard",
                    desc: "Four undying warriors who've secretly protected humanity for centuries become targeted for their mysterious powers just as they discover a new immortal.",
                    genres: [
                        "Action",
                        "Fantasy"
                    ],
                    runtime: 125,
                    year: "2020",
                    isMostLiked: true,
                    videos: {
                        clip: "ITeFJcFFEBQ",
                        trailer: "aK-X2d0lJ_s"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/hz9MhSaZTv6AjCVY4Ear5ZPXeoh.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/bvxzhwGqNQSMwsPvZjht2sjByGR.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "immortality",
                        "superhero",
                        "mercenary"
                    ],
                    cast: [
                        "Charlize Theron",
                        "KiKi Layne",
                        "Veronica Ngo"
                    ],
                    ageRating: "A-Rated", type: "movie", backdropNoLang: "https://image.tmdb.org/t/p/original/m0ObOaJBerZ3Unc74l471ar8Iiy.jpg"
                },
                {
                    title: "The Kissing Booth",
                    desc: "When teenager Elle's first kiss leads to a forbidden romance with the hottest boy in high school, she risks her relationship with her best friend.",
                    genres: [
                        "Romance",
                        "Comedy"
                    ],
                    runtime: 105,
                    year: "2018",
                    isMostLiked: true,
                    videos: {
                        trailer: "7bfS6seiLhk"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/wZLtIdehOlmhvkoNRXMkR1fmEXV.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/7YuhLQ9PLEgblToDnZSDPToyfFj.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "crush"
                    ],
                    cast: [
                        "Joey King",
                        "Joel Courtney",
                        "Jacob Elordi"
                    ],
                    ageRating: "U/A 13+", type: "movie", backdropNoLang: "https://image.tmdb.org/t/p/original/aqrDUkuzksLhOD8pbyBXLO0dz5t.jpg"
                },
                {
                    title: "Enola Holmes",
                    desc: "While searching for her missing mother, intrepid teen Enola Holmes uses her sleuthing skills to outsmart big brother Sherlock and help a runaway lord.",
                    genres: [
                        "Adventure",
                        "Mystery",
                        "Crime"
                    ],
                    runtime: 123,
                    year: "2020",
                    isMostLiked: false,
                    videos: {
                        trailer: "1d0Zf9sXlHk",
                        teaser: "DkLS_VwPGzQ"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/9Vs7ybqN2Ij2TzTjabWEFdKbm6G.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/9OvowZIxGe918FFv50NuopOAGLY.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "detective",
                        "child prodigy",
                        "victorian england"
                    ],
                    cast: [
                        "Millie Bobby Brown",
                        "Henry Cavill",
                        "Sam Claflin"
                    ],
                    ageRating: "U/A 13+", type: "movie", backdropNoLang: "https://image.tmdb.org/t/p/original/kMe4TKMDNXTKptQPAdOF0oZHq3V.jpg"
                },
                {
                    title: "Ludo",
                    desc: "Ludo is about the butterfly effect and how, despite all the chaos and crowd of the world, all our lives are inextricably connected. From a resurfaced sex tape to a rogue suitcase of money, four wildly...",
                    genres: [
                        "Crime",
                        "Comedy"
                    ],
                    runtime: 150,
                    year: "2020",
                    isMostLiked: false,
                    videos: {},
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/hZWhRbFzTSr5WlkCLw0nSBEoL8G.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/2MJ16SG7KMk4aSDw5e4vTEGi4yU.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "kidnapping",
                        "gangster",
                        "sex tape"
                    ],
                    cast: [
                        "Pankaj Tripathi",
                        "Abhishek Bachchan",
                        "Inayat Verma"
                    ],
                    ageRating: "U/A 13+", type: "movie", backdropNoLang: "https://image.tmdb.org/t/p/original/8C8EsEClcgBT1NGGTwiRBbsF5HV.jpg"
                },
                {
                    title: "Bulbbul",
                    desc: "A child bride grows up to be an enigmatic woman presiding over her household, harboring a painful past as supernatural murders of men plague her village.",
                    genres: [
                        "Horror",
                        "Fantasy"
                    ],
                    runtime: 94,
                    year: "2020",
                    isMostLiked: false,
                    videos: {
                        trailer: "4MGReT9-cAg"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/rfxj5AoOuvbqi0019TVZLy6gyCC.jpg",
                        isLogoIncluded: false
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/1NbaNqnw9WGRKGbqxnaqw66Almt.png",
                        isLogoIncluded: false
                    },
                    keywords: [
                        "witch",
                        "rape",
                        "village"
                    ],
                    cast: [
                        "Triptii Dimri",
                        "Rahul Bose",
                        "Avinash Tiwary"
                    ],
                    ageRating: "U/A 7+", type: "movie", backdropNoLang: "https://image.tmdb.org/t/p/original/rfxj5AoOuvbqi0019TVZLy6gyCC.jpg"
                },
                {
                    title: "Choked: Paisa Bolta Hai",
                    desc: "A bank employee weighed down by her jobless husband's debts - and her own broken dreams - finds a secret source of seemingly unlimited cash in her home.",
                    genres: [
                        "Drama",
                        "Crime",
                        "Thriller"
                    ],
                    runtime: 114,
                    year: "2020",
                    isMostLiked: false,
                    videos: {
                        trailer: "KY3D-htXKFE"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/eOk5n35SDCrkUCbhpM1Ez9b9SHZ.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: null,
                    keywords: [
                        "Not Available"
                    ],
                    cast: [
                        "Saiyami Kher",
                        "Rajshri Deshpande",
                        "Amruta Subhash"
                    ],
                    ageRating: "U/A 12+", type: "movie", backdropNoLang: "https://image.tmdb.org/t/p/original/6jCOU7gnjS1z8izCwRrdHn0CXwq.jpg"
                },
                {
                    title: "Guilty",
                    desc: "A young woman from a small town accuses the college heartthrob of sexual assault.",
                    genres: [
                        "Thriller",
                        "Drama"
                    ],
                    runtime: 119,
                    year: "2020",
                    isMostLiked: false,
                    videos: {
                        trailer: "6sQ85MrpOPI"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/t7yjtDJXAxc0p5awbRGoWCOewsm.jpg",
                        isLogoIncluded: false
                    },
                    poster: null,
                    logo: null,
                    keywords: [
                        "Not Available"
                    ],
                    cast: [
                        "Kiara Advani",
                        "Gurfateh Pirzada",
                        "Akansha Ranjan Kapoor"
                    ],
                    ageRating: "U/A 10+", type: "movie", backdropNoLang: "https://image.tmdb.org/t/p/original/t7yjtDJXAxc0p5awbRGoWCOewsm.jpg"
                },
                {
                    title: "Pagglait",
                    desc: "Widowed soon after marriage, a young woman grapples with an inability to grieve, quirky relatives and a startling discovery about her late husband.",
                    genres: [
                        "Drama",
                        "Comedy"
                    ],
                    runtime: 114,
                    year: "2021",
                    isMostLiked: false,
                    videos: {},
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/fbALWEldsKHueCvEjHqarf9rmiM.jpg",
                        isLogoIncluded: false
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/z9SOuYgoHR0SUt4LumuoydcqquI.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "Not Available"
                    ],
                    cast: [
                        "Sanya Malhotra",
                        "Shruti Sharma",
                        "Chetan Sharma"
                    ],
                    ageRating: "U/A 10+", type: "movie", backdropNoLang: "https://image.tmdb.org/t/p/original/fbALWEldsKHueCvEjHqarf9rmiM.jpg"
                },
                {
                    title: "Haseen Dillruba",
                    desc: "Under investigation as a suspect in her husband's murder, a wife reveals details of their thorny marriage that seem to only further blur the truth.",
                    genres: [
                        "Mystery",
                        "Thriller",
                        "Crime"
                    ],
                    runtime: 136,
                    year: "2021",
                    isMostLiked: false,
                    videos: {},
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/u6ysqJPjBujiDS44HGdFViJaF7X.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/nYtu2hz4jOinsUep638Jg1Ipmsc.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "Not Available"
                    ],
                    cast: [
                        "Taapsee Pannu",
                        "Vikrant Massey",
                        "Harshvardhan Rane"
                    ],
                    ageRating: "A-Rated", type: "movie", backdropNoLang: "https://image.tmdb.org/t/p/original/ohBudODLg90h2R8jQf4DvfGjY4A.jpg"
                }
            ],
            shows: [
                {
                    title: "Sacred Games",
                    desc: "A link in their pasts leads an honest cop to a fugitive gang boss, whose cryptic warning spurs the officer on a quest to save Mumbai from cataclysm.",
                    genres: [
                        "Drama",
                        "Crime",
                        "Action & Adventure"
                    ],
                    totalSeasons: 2,
                    totalEpisodes: 16,
                    year: "2018",
                    isMostLiked: false,
                    videos: {
                        teaser: "AkUgf2jIPyI"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/wTVb2m8Nsc8YE8IyLPZS2lcj5yB.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/timrJkMqs1huwJSNdtjkgh3O4MB.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "investigation",
                        "torture",
                        "drugs"
                    ],
                    cast: [
                        "Saif Ali Khan",
                        "Nawazuddin Siddiqui",
                        "Pankaj Tripathi"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "A link in their pasts leads an honest cop to a fugitive gang boss, whose cryptic warning spurs the officer on a quest to save Mumbai from cataclysm.",
                            posterPath: "https://image.tmdb.org/t/p/w400/mVQ6JFJCAMRLKvsMZdiEeYXC6cp.jpg",
                            totalEpisode: 8,
                            year: "2018"
                        },
                        {
                            name: "Season 2",
                            desc: "As Mumbai’s fate hangs in the balance, Sartaj Singh chases a connection to Ganesh Gaitonde’s third father, an enigmatic guru with a catastrophic plan.",
                            posterPath: "https://image.tmdb.org/t/p/w400/5Bs2SBg97gaqoYH2c9zRNOEctaz.jpg",
                            totalEpisode: 8,
                            year: "2019"
                        }
                    ],
                    ageRating: "U/A 13+", type: "show", backdropNoLang: "https://image.tmdb.org/t/p/original/qtac9X9lSLqZFbxS71347N8MiID.jpg"
                },
                {
                    title: "GHOUL",
                    desc: "A newly minted military interrogator arrives at a covert detention center to discover that some of the terrorists held there are not of this world.",
                    genres: [
                        "Mystery",
                        "Sci-Fi & Fantasy",
                        "Drama"
                    ],
                    totalSeasons: 1,
                    totalEpisodes: 3,
                    year: "2018",
                    isMostLiked: false,
                    videos: {
                        trailer: "zg0N4L4mwFk",
                        teaser: "Fzmlsb--0bk"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/4jydDb3X7pXRBJf7feucfFUqYu7.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/kEivSJV15xnhBlaPMpJXD1GbY53.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "military prison",
                        "interrogation",
                        "demonic"
                    ],
                    cast: [
                        "Rohit Pathak",
                        "Manav Kaul",
                        "Radhika Apte"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "When a new prisoner at a military detention center exhibits eerie behavior, a young interrogator’s search for the truth becomes a battle for survival.",
                            posterPath: "https://image.tmdb.org/t/p/w400/zhRnyv5forBOOcu9AVe8DOcy0FL.jpg",
                            totalEpisode: 3,
                            year: "2018"
                        }
                    ],
                    ageRating: "U/A 13+", type: "show", backdropNoLang: "https://image.tmdb.org/t/p/original/lnNj4ysMDiY9kcYpT5NN2QdBBBw.jpg"
                },
                {
                    title: "Betaal",
                    desc: "A remote village becomes the arena of a breathless battle when an undead East India Company officer and his battalion of zombie redcoats attack a squad of modern-day soldiers.",
                    genres: [
                        "Action & Adventure",
                        "Drama"
                    ],
                    totalSeasons: 1,
                    totalEpisodes: 4,
                    year: "2020",
                    isMostLiked: false,
                    videos: {
                        trailer: "YSEVaVc-nOo"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/60KYaFV8eXHa6Y85cy0zz9dvVnV.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/296OCWouBOiYqMrRE7E2up6HUFw.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "village",
                        "zombie",
                        "battle"
                    ],
                    cast: [
                        "Vineet Kumar Singh",
                        "Aahana Kumra",
                        "Suchitra Pillai"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "A remote village becomes the arena of a breathless battle when an undead East India Company officer and his battalion of zombie redcoats attack a squad of modern-day soldiers",
                            posterPath: "https://image.tmdb.org/t/p/w400/hcQGjNtfsf31KWvfLnTwuquScGQ.jpg",
                            totalEpisode: 4,
                            year: "2020"
                        }
                    ],
                    ageRating: "U/A 13+", type: "show", backdropNoLang: "https://image.tmdb.org/t/p/original/tPUEME9NpRo4l3lxdVJRwp5stx5.jpg"
                },
                {
                    title: "Delhi Crime",
                    desc: "Following the police force as they investigate high-profile crimes in Delhi, this series has seasons inspired by both real and fictional events.",
                    genres: [
                        "Crime"
                    ],
                    totalSeasons: 3,
                    totalEpisodes: 12,
                    year: "2019",
                    isMostLiked: false,
                    videos: {
                        trailer: "jNuKwlKJx2E",
                        teaser: "ydoqfYCwmxQ"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/8WXouptCWLBHkBpWZahIgkeUDiH.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/iQi9YBSoPc1H9MZm3SIbQHRRcxT.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "delhi, india",
                        "investigation",
                        "gang rape"
                    ],
                    cast: [
                        "Shefali Shah",
                        "Rasika Dugal",
                        "Avijit Dutt"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "As Delhi reels in the aftermath of a gang rape, DCP Vartika Chaturvedi leads a painstaking search for the culprits. Inspired by the 2012 Nirbhaya case.",
                            posterPath: "https://image.tmdb.org/t/p/w400/xkpkTj6KGsjSaet0VQaq0aTn31D.jpg",
                            totalEpisode: 7,
                            year: "2019"
                        },
                        {
                            name: "Season 2",
                            desc: "When a chain of distinctly grisly murders suggests the return of a feared criminal gang, DCP Vartika heads the case under media and public pressure.",
                            posterPath: "https://image.tmdb.org/t/p/w400/xwK3JdYQpEH7bYocbngvB9XQcEm.jpg",
                            totalEpisode: 5,
                            year: "2022"
                        },
                        {
                            name: "Season 3",
                            desc: "Following the police force as they investigate high-profile crimes in Delhi, this series has seasons inspired by both real and fictional events.",
                            posterPath: "https://image.tmdb.org/t/p/w400/xkpkTj6KGsjSaet0VQaq0aTn31D.jpg",
                            totalEpisode: "Not Disclosed Yet",
                            year: "202- (Unannounced)"
                        }
                    ],
                    ageRating: "U/A 13+", type: "show", backdropNoLang: "https://image.tmdb.org/t/p/original/j6djmR4hi8ULL0xUPQN4ZVyzgVN.jpg"
                },
                {
                    title: "House of Secrets: The Burari Deaths",
                    desc: "Suicide, murder... or something else? This docuseries examines chilling truths and theories around the deaths of 11 members of a Delhi family.",
                    genres: [
                        "Documentary",
                        "Crime"
                    ],
                    totalSeasons: 1,
                    totalEpisodes: 3,
                    year: "2021",
                    isMostLiked: false,
                    videos: {
                        clip: "Gp3OmiJMGjc",
                        trailer: "xN5J-Ld3G1s"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/e7YjhjWFp9gmYvET6oZZ9Auod5h.jpg",
                        isLogoIncluded: false
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/22NqWu9xeEEq28YX5jEclE19ZH1.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "delhi, india",
                        "investigation",
                        "murder"
                    ],
                    cast: [
                        "Not Available"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "Suicide, murder... or something else? This docuseries examines chilling truths and theories around the deaths of 11 members of a Delhi family.",
                            posterPath: "https://image.tmdb.org/t/p/w400/3tijKrQysQHm14Uce7rzBKNDwxD.jpg",
                            totalEpisode: 3,
                            year: "2021"
                        }
                    ],
                    ageRating: "U/A 17+", type: "show", backdropNoLang: "https://image.tmdb.org/t/p/original/e7YjhjWFp9gmYvET6oZZ9Auod5h.jpg"
                },
                {
                    title: "The Railway Men - The Untold Story of Bhopal 1984",
                    desc: "India, 1984. After a deadly gas leaks from a factory in Bhopal, brave railway workers risk their lives to save others in the face of an unspeakable disaster.",
                    genres: [
                        "Drama"
                    ],
                    totalSeasons: 1,
                    totalEpisodes: 4,
                    year: "2023",
                    isMostLiked: false,
                    videos: {
                        trailer: "htQsI-b9dgc",
                        teaser: "4T7TbU5jhxk"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/q0h8xeI2tIIRWSssCeyozD1fTAf.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/lLiQ1fSyhfywRNieZdE1Ymn3Qx6.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "Not Available"
                    ],
                    cast: [
                        "Kay Kay Menon",
                        "Divyendu Sharma",
                        "Babil Khan"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "After a deadly gas leaks from a factory in Bhopal, brave railway workers risk their lives to save others in the face of an unspeakable disaster.",
                            posterPath: "https://image.tmdb.org/t/p/w400/ejgoT5zhvltxfjFb9mS4ykjPFFG.jpg",
                            totalEpisode: 4,
                            year: "2023"
                        }
                    ],
                    ageRating: "U/A 13+", type: "show", backdropNoLang: "https://image.tmdb.org/t/p/original/s7dpEDsAan8mvC5cikvWidOupsO.jpg"
                },
                {
                    title: "Nobody Wants This",
                    desc: "An agnostic sex podcaster and a newly single rabbi fall in love, but can their relationship survive their wildly different lives and meddling families?",
                    genres: [
                        "Comedy"
                    ],
                    totalSeasons: 1,
                    totalEpisodes: 10,
                    year: "2024",
                    isMostLiked: true,
                    videos: {
                        trailer: "Xn2PsXD8m4A"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/xG5TbIDNjM6GKOcK7kFARNnf8KX.jpg",
                        isLogoIncluded: false
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/yoIDGAhWvPFxPknG3pgQSdvnVAr.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "rabbi",
                        "romantic comedy",
                        "romance"
                    ],
                    cast: [
                        "Kristen Bell",
                        "Adam Brody",
                        "Justine Lupe"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "An agnostic sex podcaster and a newly single rabbi fall in love, but can their relationship survive their wildly different lives and meddling families?",
                            posterPath: "https://image.tmdb.org/t/p/w400/o33TnXY9yMLCnTA63MapZvehd5A.jpg",
                            totalEpisode: 10,
                            year: "2024"
                        }
                    ],
                    ageRating: "U/A 13+", type: "show", backdropNoLang: "https://image.tmdb.org/t/p/original/xG5TbIDNjM6GKOcK7kFARNnf8KX.jpg"
                },
                {
                    title: "Monsters",
                    desc: "The story of the Menéndez brothers, who were convicted in 1996 of murdering their parents José and Mary Louise “Kitty” Menéndez.",
                    genres: [
                        "Drama",
                        "Crime"
                    ],
                    totalSeasons: 1,
                    totalEpisodes: 9,
                    year: "2024",
                    isMostLiked: true,
                    videos: {
                        trailer: "BcXg28iAiLM",
                        teaser: "fKfxZrPm3EI"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/u0d52C7vtLT21L7E1U8P9IptBSv.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/2BpTUGigafOVaYBMeCQGEBAk3Hg.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "miniseries",
                        "privileged life",
                        "parricide"
                    ],
                    cast: [
                        "Javier Bardem",
                        "Chloë Sevigny",
                        "Cooper Koch"
                    ],
                    seasons: [
                        {
                            name: "The Lyle and Erik Menendez Story",
                            desc: "The story of the Menéndez brothers, who were convicted in 1996 of murdering their parents José and Mary Louise “Kitty” Menéndez.",
                            posterPath: "https://image.tmdb.org/t/p/w400/x9YC2rpXHUFMqI1hCekKDm9UE4w.jpg",
                            totalEpisode: 9,
                            year: "2024"
                        }
                    ],
                    ageRating: "U/A 17+", type: "show", backdropNoLang: "https://image.tmdb.org/t/p/original/h324Kf6pjDzGQiUrc4W2r4YcD9L.jpg"
                },
                {
                    title: "Heartstopper",
                    desc: "Teens Charlie and Nick discover their unlikely friendship might be something more as they navigate school and young love in this coming-of-age series.",
                    genres: [
                        "Drama"
                    ],
                    totalSeasons: 3,
                    totalEpisodes: 24,
                    year: "2022",
                    isMostLiked: true,
                    videos: {
                        trailer: "FrK4xPy4ahg",
                        teaser: "gHALOizCpf0"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/47UdSj6KvEMWhn7wxImUFfja0qR.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/3HZB96aFO5D00vas6QxnFtHdlP4.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "coming out",
                        "friendship",
                        "high school"
                    ],
                    cast: [
                        "Joe Locke",
                        "Kit Connor",
                        "William Gao"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "Teens Charlie and Nick discover their unlikely friendship might be something more as they navigate school and young love in this coming-of-age series.",
                            posterPath: "https://image.tmdb.org/t/p/w400/6WULLvLZYQX3xNfs5S9H6BVFdgD.jpg",
                            totalEpisode: 8,
                            year: "2022"
                        },
                        {
                            name: "Season 2",
                            desc: "Teens Charlie and Nick discover their unlikely friendship might be something more as they navigate school and young love in this coming-of-age series.",
                            posterPath: "https://image.tmdb.org/t/p/w400/p0AtD0ivSlHq2MHY6JFgyhNqAQY.jpg",
                            totalEpisode: 8,
                            year: "2023"
                        },
                        {
                            name: "Season 3",
                            desc: "Teens Charlie and Nick discover their unlikely friendship might be something more as they navigate school and young love in this coming-of-age series.",
                            posterPath: "https://image.tmdb.org/t/p/w400/fBbhBvFEVgVxWrBbOJDzDjcVXM4.jpg",
                            totalEpisode: 8,
                            year: "2024"
                        }
                    ],
                    ageRating: "U/A 17+", type: "show", backdropNoLang: "https://image.tmdb.org/t/p/original/w1beuDq08J0zUmi5uJPMvpWK9rv.jpg"
                },
                {
                    title: "Lucifer",
                    desc: "Bored and unhappy as the Lord of Hell, Lucifer Morningstar abandoned his throne and retired to Los Angeles, where he has teamed up with LAPD detective Chloe Decker to take down criminals. But the long...",
                    genres: [
                        "Crime",
                        "Sci-Fi & Fantasy"
                    ],
                    totalSeasons: 6,
                    totalEpisodes: 93,
                    year: "2016",
                    isMostLiked: true,
                    videos: {
                        trailer: "X4bF_quwNtw"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/fDuyYalDwUDRVwii0kgLubqBc2H.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/vI2mH4P2qiaRD9cxPSBWyU7PawL.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "based on comic",
                        "devil",
                        "lapd"
                    ],
                    cast: [
                        "Tom Ellis",
                        "Lauren German",
                        "Kevin Alejandro"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "Bored with being the Lord of Hell, the devil relocates to Los Angeles, where he opens a nightclub and forms a connection with a homicide detective.",
                            posterPath: "https://image.tmdb.org/t/p/w400/e6FQvm5jycG9xx1ZWowIYBc3Shn.jpg",
                            totalEpisode: 13,
                            year: "2016"
                        },
                        {
                            name: "Season 2",
                            desc: "Lucifer returns for another season, but his devil-may-care attitude may soon need an adjustment: His mother is coming to town.",
                            posterPath: "https://image.tmdb.org/t/p/w400/NhVsRaNhfXknIseUb2hY02gqom.jpg",
                            totalEpisode: 18,
                            year: "2016"
                        },
                        {
                            name: "Season 3",
                            desc: "As Lucifer struggles with an identity crisis, a gruff new police lieutenant shakes up the status quo with Chloe and the rest of the LAPD.",
                            posterPath: "https://image.tmdb.org/t/p/w400/x4oi3N7JNF0QGtBzyLJjolivmWx.jpg",
                            totalEpisode: 26,
                            year: "2017"
                        },
                        {
                            name: "Season 4",
                            desc: "As Chloe struggles to come to terms with Lucifer's disturbing revelation, a rogue priest sets out to stop a long-rumored prophecy.",
                            posterPath: "https://image.tmdb.org/t/p/w400/4FoFVP6wpBNutIG2FyglQhySa7V.jpg",
                            totalEpisode: 10,
                            year: "2019"
                        },
                        {
                            name: "Season 5",
                            desc: "Lucifer makes a tumultuous return to the land of the living in hopes of making things right with Chloe. A devil’s work is never done.",
                            posterPath: "https://image.tmdb.org/t/p/w400/f7uHY54huql9oIwMonFQd6Vylvd.jpg",
                            totalEpisode: 16,
                            year: "2020"
                        },
                        {
                            name: "Season 6",
                            desc: "Lucifer scored the promotion, but does he really want the job? Plus, Chloe prepares to give up detective work, Amenadiel joins the LAPD, and more.",
                            posterPath: "https://image.tmdb.org/t/p/w400/uHpfjWUJI2gXQIIxjgAvOZWJORx.jpg",
                            totalEpisode: 10,
                            year: "2021"
                        }
                    ],
                    ageRating: "U/A 13+", type: "show", backdropNoLang: "https://image.tmdb.org/t/p/original/aDBRtunw49UF4XmqfyNuD9nlYIu.jpg"
                },
                {
                    title: "Stranger Things",
                    desc: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
                    genres: [
                        "Drama",
                        "Sci-Fi & Fantasy",
                        "Mystery"
                    ],
                    totalSeasons: 5,
                    totalEpisodes: 42,
                    year: "2016",
                    isMostLiked: true,
                    videos: {
                        clip: "CKtq-bZgS8I",
                        trailer: "sBEvEcpnG7k"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/nviyFKko4Uk1mqHxehvxGhnMHFV.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/uyVM5qGksUzCgwo6UU0UrHex8Oj.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "love triangle",
                        "skateboarding",
                        "sheriff"
                    ],
                    cast: [
                        "Millie Bobby Brown",
                        "Finn Wolfhard",
                        "Gaten Matarazzo"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "Strange things are afoot in Hawkins, Indiana, where a young boy's sudden disappearance unearths a young girl with otherworldly powers.",
                            posterPath: "https://image.tmdb.org/t/p/w400/jVQETVYFkUye1e02p5rH04FaHA4.jpg",
                            totalEpisode: 8,
                            year: "2016"
                        },
                        {
                            name: "Stranger Things 2",
                            desc: "It's been nearly a year since Will's strange disappearance. But life's hardly back to normal in Hawkins. Not even close.",
                            posterPath: "https://image.tmdb.org/t/p/w400/lXS60geme1LlEob5Wgvj3KilClA.jpg",
                            totalEpisode: 9,
                            year: "2017"
                        },
                        {
                            name: "Stranger Things 3",
                            desc: "Budding romance. A brand-new mall. And rabid rats running toward danger. It's the summer of 1985 in Hawkins ... and one summer can change everything.",
                            posterPath: "https://image.tmdb.org/t/p/w400/fcb8ZuOH88cNuDys9tkX1xssiOU.jpg",
                            totalEpisode: 8,
                            year: "2019"
                        },
                        {
                            name: "Stranger Things 4",
                            desc: "Darkness returns to Hawkins just in time for spring break, igniting fresh terror, disturbing memories — and an ominous new threat.",
                            posterPath: "https://image.tmdb.org/t/p/w400/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
                            totalEpisode: 9,
                            year: "2022"
                        },
                        {
                            name: "Stranger Things 5",
                            desc: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
                            posterPath: "https://image.tmdb.org/t/p/w400/fvNCsg5bYpGauZv1iTeBuFl8aWS.jpg",
                            totalEpisode: 8,
                            year: "202- (Unannounced)"
                        }
                    ],
                    ageRating: "U/A 13+", type: "show", backdropNoLang: "https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg"
                },
                {
                    title: "Cobra Kai",
                    desc: "This Karate Kid sequel series picks up 30 years after the events of the 1984 All Valley Karate Tournament and finds Johnny Lawrence on the hunt for redemption by reopening the infamous Cobra Kai karat...",
                    genres: [
                        "Action & Adventure",
                        "Drama",
                        "Comedy"
                    ],
                    totalSeasons: 6,
                    totalEpisodes: 65,
                    year: "2018",
                    isMostLiked: true,
                    videos: {
                        trailer: "xCwwxNbtK6Y",
                        teaser: "c1z7iLlFu9E"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/mZTieenHNFppEnFwVGDe7JHG90V.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/pkNOYbuOrm2CcyJcpqRLHN3ZW2m.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "california",
                        "martial arts",
                        "karate"
                    ],
                    cast: [
                        "Ralph Macchio",
                        "William Zabka",
                        "Courtney Henggeler"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "Decades after the tournament that changed their lives, the rivalry between Johnny and Daniel reignites.",
                            posterPath: "https://image.tmdb.org/t/p/w400/ydEqHwK83HH2W6rzqcN44ZIGwNh.jpg",
                            totalEpisode: 10,
                            year: "2018"
                        },
                        {
                            name: "Season 2",
                            desc: "Johnny continues building a new life, but a face from his past could disrupt his future. Meanwhile, Daniel opens a Miyagi-Do studio to rival Cobra Kai.",
                            posterPath: "https://image.tmdb.org/t/p/w400/6GlR2dFUa8g5Np04lpxBhm5a6hM.jpg",
                            totalEpisode: 10,
                            year: "2019"
                        },
                        {
                            name: "Season 3",
                            desc: "With a new sensei at the helm of the Cobra Kai dojo, a three-way feud takes center stage. Old grudges — like Cobra Kai — never die.",
                            posterPath: "https://image.tmdb.org/t/p/w400/f9ccj6MfeAsOk1qAqpifJwzxdfn.jpg",
                            totalEpisode: 10,
                            year: "2021"
                        },
                        {
                            name: "Season 4",
                            desc: "Faced with a common enemy, Daniel and Johnny decide to start working together while Kreese looks to the past for a new ally of his own.",
                            posterPath: "https://image.tmdb.org/t/p/w400/hETMqMZYTBtVrA4A8AcLw5w76Xa.jpg",
                            totalEpisode: 10,
                            year: "2021"
                        },
                        {
                            name: "Season 5",
                            desc: "As Terry leads Cobra Kai into a new regime, Daniel, Johnny and an old ally join forces in a battle that goes way beyond the mat.",
                            posterPath: "https://image.tmdb.org/t/p/w400/u2o6NDi5aNQ3SfyN1kZSXBaKoHK.jpg",
                            totalEpisode: 10,
                            year: "2022"
                        },
                        {
                            name: "Season 6",
                            desc: "With the global tournament approaching, Daniel and Johnny work to rebuild their team. But old enemies and new threats stand in the way of victory.",
                            posterPath: "https://image.tmdb.org/t/p/w400/6GDW4EsgsXlYrL1ASb5eCHQK4er.jpg",
                            totalEpisode: 15,
                            year: "2024"
                        }
                    ],
                    ageRating: "U/A 17+", type: "show", backdropNoLang: "https://image.tmdb.org/t/p/original/zymbuoBoL1i94xAOzVJF6IuWLfD.jpg"
                }
            ]
        },
        trendingIndia: {
            tabs: ['home', 'movie', 'show'],
            title: "Trending in India",
            movieTitle: "Trending in India",
            showTitle: "Trending in India",
            movies: [
                {
                    title: "Sector 36",
                    desc: "When several children disappear at the hands of a serial killer in Sector 36, a corrupt cop is forced to pursue the chilling case at all costs.",
                    genres: [
                        "Crime",
                        "Thriller",
                        "Drama"
                    ],
                    runtime: 124,
                    year: "2024",
                    isMostLiked: true,
                    videos: {},
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/c1AMvqX97LhsZa9i54Xuz2u0XbG.jpg",
                        isLogoIncluded: true
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/pbVcZmmcfqk35Q9hNxRoR7JPiVp.jpg",
                        isLogoIncluded: true
                    },
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/9MJ5v9Dw0xErXEF1W9lLC7yzif3.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "suspenseful",
                        "horrified"
                    ],
                    cast: [
                        "Deepak Dobriyal",
                        "Vikrant Massey",
                        "Akash Khurana"
                    ],
                    ageRating: "A-Rated", type: "movie", backdropNoLang: "https://image.tmdb.org/t/p/original/as8fZuf0c8V2iMO43kw13hc6a9V.jpg"
                },
                {
                    title: "Stree 2",
                    desc: "After the events of Stree, the town of Chanderi is being haunted again. This time, women are mysteriously abducted by a terrifying headless entity. Once again, it's up to Vicky and his friends to save...",
                    genres: [
                        "Horror",
                        "Comedy"
                    ],
                    runtime: 143,
                    year: "2024",
                    isMostLiked: true,
                    videos: {
                        trailer: "VlvOgk5BHS4",
                        teaser: "D1SFjYoXRB8"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/yNy9rc3N4BmTOBJGYZUksd30MwR.jpg",
                        isLogoIncluded: true
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/zgxpT5Q5pe3FtL99F0UOIglPGrQ.jpg",
                        isLogoIncluded: true
                    },
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/8jM7kk7AoSMLFCLPWSbO2zxldns.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "Not Available"
                    ],
                    cast: [
                        "Rajkummar Rao",
                        "Shraddha Kapoor",
                        "Aparshakti Khurana"
                    ],
                    ageRating: "U/A 12+", type: "movie", backdropNoLang: "https://image.tmdb.org/t/p/original/jDxqjLUBpOVeKhLPJFKSyneKwF7.jpg"
                },
                {
                    title: "Phir Aayi Hasseen Dillruba",
                    desc: "While evading the cops in Agra, Rani and Rishu scheme to run away together. But when their plans go awry, Rani asks a mild-mannered admirer for help.",
                    genres: [
                        "Mystery",
                        "Thriller",
                        "Romance"
                    ],
                    runtime: 133,
                    year: "2024",
                    isMostLiked: false,
                    videos: {
                        teaser: "UPRseRavhYQ"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/h7X8blm6YL3ivEtHtyf5DgAeoXt.jpg",
                        isLogoIncluded: true
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/lIBjLUAAw2bzeOHBJIKiZI4QDL0.jpg",
                        isLogoIncluded: true
                    },
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/e7s8FBILdYKdpmMXpebmXDfHpRL.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "sequel"
                    ],
                    cast: [
                        "Taapsee Pannu",
                        "Vikrant Massey",
                        "Sunny Kaushal"
                    ],
                    ageRating: "U-Rated", type: "movie", backdropNoLang: "https://image.tmdb.org/t/p/original/qWyNNd4uAr8tta2Hd5Toiz14fVl.jpg"
                },
                {
                    title: "CTRL",
                    desc: "Nella and Joe are the perfect influencer couple. But when he cheats on her, she turns to an AI app to erase him from her life — until it takes control.",
                    genres: [
                        "Thriller",
                        "Drama"
                    ],
                    runtime: 99,
                    year: "2024",
                    isMostLiked: true,
                    videos: {
                        teaser: "xqdWV_fhuV4"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/8iSF0u8wja910cYjo8vnK5O3CFE.jpg",
                        isLogoIncluded: true
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/eCaaJkJqRA6unsVe5hvtgJq301H.jpg",
                        isLogoIncluded: true
                    },
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/3s3BjUqLR77PdW8MgSmQD1OwOJ8.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "Not Available"
                    ],
                    cast: [
                        "Ananya Panday",
                        "Vihaan Samat",
                        "Devika Vatsa"
                    ],
                    ageRating: "U-Rated", type: "movie", backdropNoLang: "https://image.tmdb.org/t/p/original/cVTW8yQcIUPQ8lGnIgAa4Jx5dNw.jpg"
                },
                {
                    title: "Ulajh",
                    desc: "The journey of a young IFS officer, belonging to a prominent family of patriots, who gets embroiled in a dangerous personal conspiracy while far from her home turf, at a career-defining post.",
                    genres: [
                        "Drama",
                        "Thriller"
                    ],
                    runtime: 134,
                    year: "2024",
                    isMostLiked: true,
                    videos: {
                        trailer: "Tk1EQD7vGiY"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/cozbjSTRr6Dx8QuS804A4pKhERu.jpg",
                        isLogoIncluded: true
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/tRTaE89m8As6G6aqgYjCBmm6MKN.jpg",
                        isLogoIncluded: true
                    },
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/wTj4w9lNSR8niHXFw6Vyvy7I2z8.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "spy thriller"
                    ],
                    cast: [
                        "Janhvi Kapoor",
                        "Gulshan Devaiah",
                        "Roshan Mathew"
                    ],
                    ageRating: "U/A 12+", type: "movie", backdropNoLang: "https://image.tmdb.org/t/p/original/gOvb0MWKeg97AWr7Cpvi3aDnB0r.jpg"
                },
                {
                    title: "Wolfs",
                    desc: "Hired to cover up a high-profile crime, a fixer soon finds his night spiralling out of control when he's forced to work with an unexpected counterpart.",
                    genres: [
                        "Comedy",
                        "Thriller",
                        "Action"
                    ],
                    runtime: 108,
                    year: "2024",
                    isMostLiked: true,
                    videos: {
                        clip: "HOoafnrOmfw",
                        trailer: "5RSUcuGIiI0",
                        teaser: "LmI0rNQq7JA"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/b10FHEvKg92hOwy2ncqhQpVcPHV.jpg",
                        isLogoIncluded: true
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/vOX1Zng472PC2KnS0B9nRfM8aaZ.jpg",
                        isLogoIncluded: true
                    },
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/wYEIblb0A83oOaMR5Ih8pV72ilX.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "hotel room",
                        "lone wolf",
                        "drugs"
                    ],
                    cast: [
                        "George Clooney",
                        "Brad Pitt",
                        "Austin Abrams"
                    ],
                    ageRating: "A-Rated", type: "movie", backdropNoLang: "https://image.tmdb.org/t/p/original/c7K0gjcbUMQdW7DV8kRCi1mmv75.jpg"
                },
                {
                    title: "The Crow",
                    desc: "Soulmates Eric and Shelly are brutally murdered when the demons of her dark past catch up with them. Given the chance to save his true love by sacrificing himself, Eric sets out to seek merciless reve...",
                    genres: [
                        "Action",
                        "Fantasy",
                        "Horror"
                    ],
                    runtime: 111,
                    year: "2024",
                    isMostLiked: true,
                    videos: {
                        clip: "AOnjHigFVa8",
                        trailer: "4CLE3pWAAr8",
                        teaser: "cT4CCK3lxiI"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/rxX4hQWJPG1SjuKY3OQtP6cPmXm.jpg",
                        isLogoIncluded: true
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/58QT4cPJ2u2TqWZkterDq9q4yxQ.jpg",
                        isLogoIncluded: true
                    },
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/tGiG5ydaFO9fQDT2LBvLRC5saac.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "soulmates",
                        "superhero",
                        "crow"
                    ],
                    cast: [
                        "Bill Skarsgård",
                        "FKA twigs",
                        "Danny Huston"
                    ],
                    ageRating: "A-Rated", type: "movie", backdropNoLang: "https://image.tmdb.org/t/p/original/Asg2UUwipAdE87MxtJy7SQo08XI.jpg"
                },
                {
                    title: "Speak No Evil",
                    desc: "When an American family is invited to spend the weekend at the idyllic country estate of a charming British family they befriended on vacation, what begins as a dream holiday soon warps into a snarled...",
                    genres: [
                        "Horror",
                        "Thriller"
                    ],
                    runtime: 110,
                    year: "2024",
                    isMostLiked: true,
                    videos: {
                        clip: "JNFFz0wXZSw",
                        trailer: "iSIuxrjTMk0",
                        teaser: "BvE0xrLSfSc"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/4zKrH1zrNAiCE5EJexx0PrR5JDj.jpg",
                        isLogoIncluded: true
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/fDtkrO2OAF8LKQTdzYmu1Y7lCLB.jpg",
                        isLogoIncluded: true
                    },
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/zr3qHlfh6NwhaV1ZabPPlc2OShu.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "manipulation",
                        "remake",
                        "disturbed"
                    ],
                    cast: [
                        "Scoot McNairy",
                        "Mackenzie Davis",
                        "James McAvoy"
                    ],
                    ageRating: "A-Rated", type: "movie", backdropNoLang: "https://image.tmdb.org/t/p/original/1fL2S8LKxCVE9KoPRBXeagmBtex.jpg"
                },
                {
                    title: "The Substance",
                    desc: "A fading celebrity decides to use a black market drug, a cell-replicating substance that temporarily creates a younger, better version of herself.",
                    genres: [
                        "Science Fiction",
                        "Horror",
                        "Comedy"
                    ],
                    runtime: 141,
                    year: "2024",
                    isMostLiked: true,
                    videos: {
                        clip: "4DPFdsDVK4w",
                        trailer: "LNlrGhBpYjc",
                        teaser: "86wkRfWQWiY"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/seg7WCWcprQ4vABydxsA8W36TNp.jpg",
                        isLogoIncluded: true
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/lqoMzCcZYEFK729d6qzt349fB4o.jpg",
                        isLogoIncluded: true
                    },
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/yXMt7AkV2W5sZsq8DtFZaBUupZS.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "new year's eve",
                        "capitalism",
                        "black market"
                    ],
                    cast: [
                        "Demi Moore",
                        "Margaret Qualley",
                        "Dennis Quaid"
                    ],
                    ageRating: "A-Rated", type: "movie", backdropNoLang: "https://image.tmdb.org/t/p/original/jlWk4J1sV1EHgkjhvsN7EdzGvOx.jpg"
                },
                {
                    title: "Kill 'em All 2",
                    desc: "Phillip and Suzanne are retired from the spy game, living peacefully off the grid. That's until their whereabouts are discovered by Vlad, the vengeful brother of their target from the first film.",
                    genres: [
                        "Action",
                        "Crime",
                        "Thriller"
                    ],
                    runtime: 85,
                    year: "2024",
                    isMostLiked: true,
                    videos: {
                        clip: "YmR6qUslZms",
                        trailer: "LrZ9L2K23cw"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/otBaqYd8DXwbkVeySYurskmytGP.jpg",
                        isLogoIncluded: true
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/hgA5hN3NjNNSTXYOmAI6KNKOzbp.jpg",
                        isLogoIncluded: true
                    },
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/cu2jRbetirWeBlqFJkG8VOoIXvg.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "Not Available"
                    ],
                    cast: [
                        "Jean-Claude Van Damme",
                        "Jacqueline Fernandez",
                        "Andrei Lenart"
                    ],
                    ageRating: "A-Rated", type: "movie", backdropNoLang: "https://image.tmdb.org/t/p/original/wh1IhMWkW7u5c5bkzSGFylF9G8r.jpg"
                }
            ],
            shows: [
                {
                    title: "Mirzapur",
                    desc: "The iron-fisted Akhandanand Tripathi is a millionaire carpet exporter and the mafia don of Mirzapur. His son, Munna, is an unworthy, power-hungry heir who will stop at nothing to inherit his father's ...",
                    genres: [
                        "Crime",
                        "Action & Adventure",
                        "Drama"
                    ],
                    totalSeasons: 3,
                    totalEpisodes: 29,
                    year: "2018",
                    isMostLiked: true,
                    videos: {
                        trailer: "33o3s4Vs4Sw",
                        teaser: "gPLrIJgsJlw"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/qCtSF2xvjiEPszmjor8Mpsqip9p.jpg",
                        isLogoIncluded: true
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/p0qM8hhlMF5DuxHBzl2EZR6TehX.jpg",
                        isLogoIncluded: true
                    },
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/uQjaWfe6Wurfl6qQx8pKDvBDbmF.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "gun",
                        "gangster",
                        "lawlessness"
                    ],
                    cast: [
                        "Ali Fazal",
                        "Pankaj Tripathi",
                        "Shweta Tripathi Sharma"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "The iron-fisted Akhandanand Tripathi is a millionaire carpet exporter and the mafia don of Mirzapur. His son, Munna, is an unworthy, power hungry heir who will stop at nothing to inherit his father’s ...",
                            posterPath: "https://image.tmdb.org/t/p/w400/7ix8lfyJWL9H14NmRovMFoaN02u.jpg",
                            totalEpisode: 9,
                            year: "2018"
                        },
                        {
                            name: "Season 2",
                            desc: "In Mirzapur, revenge runs darker than blood. There is one title, the King of Mirzapur, but many takers. Munna feels invincible after escaping from the wedding massacre. Guddu and Golu are nowhere to b...",
                            posterPath: "https://image.tmdb.org/t/p/w400/p0qM8hhlMF5DuxHBzl2EZR6TehX.jpg",
                            totalEpisode: 10,
                            year: "2020"
                        },
                        {
                            name: "Season 3",
                            desc: "The reign of the Tripathis in Purvanchal is over. Guddu and Golu are pitted against a new contender as they stake their claim to the throne. Will they pass the baptism of fire to become the undisputed...",
                            posterPath: "https://image.tmdb.org/t/p/w400/7CFdq8M9ZuP1QRLaBG2ExdcrCBs.jpg",
                            totalEpisode: 10,
                            year: "2024"
                        }
                    ],
                    ageRating: "U/A 17+", type: "show", backdropNoLang: "https://image.tmdb.org/t/p/original/3dV7pWAdwIPKR2lMIACMfObXdgK.jpg"
                },
                {
                    title: "Panchayat",
                    desc: "Panchayat is a comedy-drama, which captures the journey of an engineering graduate Abhishek, who for lack of a better job option joins as secretary of a panchayat office in a remote village of Uttar P...",
                    genres: [
                        "Comedy",
                        "Drama"
                    ],
                    totalSeasons: 3,
                    totalEpisodes: 24,
                    year: "2020",
                    isMostLiked: false,
                    videos: {
                        trailer: "5khjF0-SqEc"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/nbUL7IsDoqFzer3hUfhFQWnxs1s.jpg",
                        isLogoIncluded: true
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/gRKDEpUPd2pp2msmwdgEW34V0SL.jpg",
                        isLogoIncluded: true
                    },
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/3iCEXbiUxs1ehoi8i0hIreGToF2.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "season",
                        "satire",
                        "rural india"
                    ],
                    cast: [
                        "Jitendra Kumar",
                        "Raghubir Yadav",
                        "Neena Gupta"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "Panchayat is a comedy-drama, which captures the journey of an engineering graduate Abhishek, who for lack of a better job option joins as secretary of a panchayat office in a remote village of Uttar P...",
                            posterPath: "https://image.tmdb.org/t/p/w400/sx3MJ4ATkSoCyqayqco0O6wUqQ2.jpg",
                            totalEpisode: 8,
                            year: "2020"
                        },
                        {
                            name: "Season 2",
                            desc: "With the rise of an opponent against Pradhan Ji, village politics of Phulera heats up. Unable to stay neutral, Abhishek sticks his neck out for Pradhan's family.",
                            posterPath: "https://image.tmdb.org/t/p/w400/7boJeO6mV4Q69Tjx14CylvqkXZP.jpg",
                            totalEpisode: 8,
                            year: "2022"
                        },
                        {
                            name: "Season 3",
                            desc: "As the Panchayat elections approach, both Pradhan and Bhushan gangs engage in a fierce battle to uplift their public image. Navigating the murky waters of Phulera politics, Abhishek does his best to m...",
                            posterPath: "https://image.tmdb.org/t/p/w400/eI9A6lRDgtl0Vs2aPrSvQ3fvF3z.jpg",
                            totalEpisode: 8,
                            year: "2024"
                        }
                    ],
                    ageRating: "U/A 17+", type: "show", backdropNoLang: "https://image.tmdb.org/t/p/original/lM9LGo4qnpOl0l94hE0DLXbcaXn.jpg"
                },
                {
                    title: "IC 814: The Kandahar Hijack",
                    desc: "When IC 814 gets hijacked on its way to Delhi, hundreds of lives are at stake as the country faces its longest and most alarming aviation crisis.",
                    genres: [
                        "Drama",
                        "War & Politics"
                    ],
                    totalSeasons: 1,
                    totalEpisodes: 6,
                    year: "2024",
                    isMostLiked: false,
                    videos: {
                        trailer: "Oi7hJgH0sKw",
                        teaser: "Th8bBJMa1Pg"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/5ZSwog5ZDVViamy5He16QlsDKRd.jpg",
                        isLogoIncluded: true
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/u8b8sdWzzvAIKjTBGh9aCio6hU6.jpg",
                        isLogoIncluded: true
                    },
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/9AEcp4IDhLtaqDCeDcRo1q2sT7J.png",
                        isLogoIncluded: true
                    },
                    keywords: [],
                    cast: [
                        "Vijay Varma",
                        "Naseeruddin Shah",
                        "Pankaj Kapur"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "Based on real events, this gripping series directed by Anubhav Sinha (“Article 15”) chronicles the longest hijack in the history of Indian aviation.",
                            posterPath: "https://image.tmdb.org/t/p/w400/u8b8sdWzzvAIKjTBGh9aCio6hU6.jpg",
                            totalEpisode: 6,
                            year: "2024"
                        }
                    ],
                    ageRating: "U/A 17+", type: "show", backdropNoLang: "https://image.tmdb.org/t/p/original/fzq5QiEtx8MCtQ4yTZzWbJHnstr.jpg"
                },
                {
                    title: "The Great Indian Kapil Show",
                    desc: "Comedian Kapil Sharma hosts this laugh-out-loud variety talk show with celebrity guests, hilarious antics and his signature supporting cast.",
                    genres: [
                        "Talk",
                        "Comedy"
                    ],
                    totalSeasons: 2,
                    totalEpisodes: 16,
                    year: "2024",
                    isMostLiked: false,
                    videos: {
                        trailer: "bftjfqS3v6k"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/lhHT7DZdLSq2tvTgu86PDlJ4bxv.jpg",
                        isLogoIncluded: true
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/6LWtSm2VHfenFBMvmjG9GYgfvSd.jpg",
                        isLogoIncluded: true
                    },
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/ulJpJulH2l9OKopOKZuWmZXKDhW.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "Not Available"
                    ],
                    cast: [
                        "Kapil Sharma",
                        "Sunil Grover",
                        "Krishna Abhishek"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "Comedian Kapil Sharma hosts this laugh-out-loud variety talk show with celebrity guests, hilarious antics and his signature supporting cast.",
                            posterPath: "https://image.tmdb.org/t/p/w400/6LWtSm2VHfenFBMvmjG9GYgfvSd.jpg",
                            totalEpisode: 13,
                            year: "2024"
                        },
                        {
                            name: "Season 2",
                            desc: "Comedian Kapil Sharma brings desi fun to an all-new season featuring celebrity guests, side-splitting gags and a dash of classic Indian charm.",
                            posterPath: "https://image.tmdb.org/t/p/w400/6LWtSm2VHfenFBMvmjG9GYgfvSd.jpg",
                            totalEpisode: 5,
                            year: "2024"
                        }
                    ],
                    ageRating: "U/A 13+", type: "show", backdropNoLang: "https://image.tmdb.org/t/p/original/lPVM7LR0ydKVj2qzdsVgi1akjom.jpg"
                },
                {
                    title: "Tribhuvan Mishra CA Topper",
                    desc: "A banking crisis forces CA topper Tribhuvan Mishra to take up sex work. Will this dual existence alleviate his troubles — or create entirely new ones?",
                    genres: [
                        "Drama",
                        "Comedy",
                        "Crime"
                    ],
                    totalSeasons: 1,
                    totalEpisodes: 9,
                    year: "2024",
                    isMostLiked: false,
                    videos: {
                        trailer: "Jm109fPG4zI",
                        teaser: "No0ALP5LkUk"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/A4uHPqOTWtbFCO0SRgbTd4s2H6Y.jpg",
                        isLogoIncluded: true
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/pAfwOC6Eh41ScTZCSKBtDcIXVaU.jpg",
                        isLogoIncluded: true
                    },
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/z9HBVFflbmcKTLkyjCVDZctc4Ml.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "sex work"
                    ],
                    cast: [
                        "Manav Kaul",
                        "Tillotama Shome",
                        "Subhrajyoti Barat"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "A banking crisis forces CA topper Tribhuvan Mishra to take up sex work. Will this dual existence alleviate his troubles — or create entirely new ones?",
                            posterPath: "https://image.tmdb.org/t/p/w400/pAfwOC6Eh41ScTZCSKBtDcIXVaU.jpg",
                            totalEpisode: 9,
                            year: "2024"
                        }
                    ],
                    ageRating: "U/A 13+", type: "show", backdropNoLang: "https://image.tmdb.org/t/p/original/gtgE02vlDumpMBjJRlZlvf2spfY.jpg"
                },
                {
                    title: "The Lord of the Rings: The Rings of Power",
                    desc: "Beginning in a time of relative peace, we follow an ensemble cast of characters as they confront the re-emergence of evil to Middle-earth. From the darkest depths of the Misty Mountains, to the majest...",
                    genres: [
                        "Action & Adventure",
                        "Sci-Fi & Fantasy",
                        "Drama"
                    ],
                    totalSeasons: 2,
                    totalEpisodes: 16,
                    year: "2022",
                    isMostLiked: true,
                    videos: {
                        trailer: "x8UAUAuKNcU",
                        teaser: "ewgCqJDI_Nk"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/4pPzwFluOzZg9nOXvECZC4bSSlx.jpg",
                        isLogoIncluded: true
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/mYLOqiStMxDK3fYZFirgrMt8z5d.jpg",
                        isLogoIncluded: true
                    },
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/2uDS3VQIDlNnwq3Mp8BsC7igftU.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "elves",
                        "dwarf",
                        "prequel"
                    ],
                    cast: [
                        "Charlie Vickers",
                        "Morfydd Clark",
                        "Robert Aramayo"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "Beginning in a time of relative peace, we follow an ensemble cast of characters as they confront the re-emergence of evil to Middle-earth. From the darkest depths of the Misty Mountains, to the majest...",
                            posterPath: "https://image.tmdb.org/t/p/w400/umRaUV2ku9MMtEunMQt3uCO1OgE.jpg",
                            totalEpisode: 8,
                            year: "2022"
                        },
                        {
                            name: "Season 2",
                            desc: "Sauron has returned. Cast out by Galadriel, the Dark Lord must now rely on his own cunning to rebuild his strength and forge the legendary Rings of Power, threatening to bind all peoples of Middle-ear...",
                            posterPath: "https://image.tmdb.org/t/p/w400/yNcPTNvcWbWifW0XvQtbrThA0nt.jpg",
                            totalEpisode: 8,
                            year: "2024"
                        }
                    ],
                    ageRating: "U/A 13+", type: "show", backdropNoLang: "https://image.tmdb.org/t/p/original/NNC08YmJFFlLi1prBkK8quk3dp.jpg"
                },
                {
                    title: "Nobody Wants This",
                    desc: "An agnostic sex podcaster and a newly single rabbi fall in love, but can their relationship survive their wildly different lives and meddling families?",
                    genres: [
                        "Comedy"
                    ],
                    totalSeasons: 1,
                    totalEpisodes: 10,
                    year: "2024",
                    isMostLiked: true,
                    videos: {
                        trailer: "Xn2PsXD8m4A"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/xG5TbIDNjM6GKOcK7kFARNnf8KX.jpg",
                        isLogoIncluded: false
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/NiSaD9rgckPucg0wwxftFdDmoj.jpg",
                        isLogoIncluded: true
                    },
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/yoIDGAhWvPFxPknG3pgQSdvnVAr.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "rabbi",
                        "romantic comedy",
                        "romance"
                    ],
                    cast: [
                        "Kristen Bell",
                        "Adam Brody",
                        "Justine Lupe"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "An agnostic sex podcaster and a newly single rabbi fall in love, but can their relationship survive their wildly different lives and meddling families?",
                            posterPath: "https://image.tmdb.org/t/p/w400/o33TnXY9yMLCnTA63MapZvehd5A.jpg",
                            totalEpisode: 10,
                            year: "2024"
                        }
                    ],
                    ageRating: "U/A 13+", type: "show", backdropNoLang: "https://image.tmdb.org/t/p/original/xG5TbIDNjM6GKOcK7kFARNnf8KX.jpg"
                },
                {
                    title: "Monsters",
                    desc: "The story of the Menéndez brothers, who were convicted in 1996 of murdering their parents José and Mary Louise “Kitty” Menéndez.",
                    genres: [
                        "Drama",
                        "Crime"
                    ],
                    totalSeasons: 1,
                    totalEpisodes: 9,
                    year: "2024",
                    isMostLiked: true,
                    videos: {
                        trailer: "BcXg28iAiLM",
                        teaser: "fKfxZrPm3EI"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/u0d52C7vtLT21L7E1U8P9IptBSv.jpg",
                        isLogoIncluded: true
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/x9YC2rpXHUFMqI1hCekKDm9UE4w.jpg",
                        isLogoIncluded: true
                    },
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/2BpTUGigafOVaYBMeCQGEBAk3Hg.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "miniseries",
                        "privileged life",
                        "parricide"
                    ],
                    cast: [
                        "Javier Bardem",
                        "Chloë Sevigny",
                        "Cooper Koch"
                    ],
                    seasons: [
                        {
                            name: "The Lyle and Erik Menendez Story",
                            desc: "The story of the Menéndez brothers, who were convicted in 1996 of murdering their parents José and Mary Louise “Kitty” Menéndez.",
                            posterPath: "https://image.tmdb.org/t/p/w400/x9YC2rpXHUFMqI1hCekKDm9UE4w.jpg",
                            totalEpisode: 9,
                            year: "2024"
                        }
                    ],
                    ageRating: "U/A 17+", type: "show", backdropNoLang: "https://image.tmdb.org/t/p/original/h324Kf6pjDzGQiUrc4W2r4YcD9L.jpg"
                },
                {
                    title: "Heartstopper",
                    desc: "Teens Charlie and Nick discover their unlikely friendship might be something more as they navigate school and young love in this coming-of-age series.",
                    genres: [
                        "Drama"
                    ],
                    totalSeasons: 3,
                    totalEpisodes: 24,
                    year: "2022",
                    isMostLiked: true,
                    videos: {
                        trailer: "FrK4xPy4ahg",
                        teaser: "gHALOizCpf0"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/47UdSj6KvEMWhn7wxImUFfja0qR.jpg",
                        isLogoIncluded: true
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/a4V3PwweYIWoxKn1DOmmTe7dbSS.jpg",
                        isLogoIncluded: true
                    },
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/3HZB96aFO5D00vas6QxnFtHdlP4.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "coming out",
                        "friendship",
                        "high school"
                    ],
                    cast: [
                        "Joe Locke",
                        "Kit Connor",
                        "William Gao"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "Teens Charlie and Nick discover their unlikely friendship might be something more as they navigate school and young love in this coming-of-age series.",
                            posterPath: "https://image.tmdb.org/t/p/w400/6WULLvLZYQX3xNfs5S9H6BVFdgD.jpg",
                            totalEpisode: 8,
                            year: "2022"
                        },
                        {
                            name: "Season 2",
                            desc: "Teens Charlie and Nick discover their unlikely friendship might be something more as they navigate school and young love in this coming-of-age series.",
                            posterPath: "https://image.tmdb.org/t/p/w400/p0AtD0ivSlHq2MHY6JFgyhNqAQY.jpg",
                            totalEpisode: 8,
                            year: "2023"
                        },
                        {
                            name: "Season 3",
                            desc: "Teens Charlie and Nick discover their unlikely friendship might be something more as they navigate school and young love in this coming-of-age series.",
                            posterPath: "https://image.tmdb.org/t/p/w400/fBbhBvFEVgVxWrBbOJDzDjcVXM4.jpg",
                            totalEpisode: 8,
                            year: "2024"
                        }
                    ],
                    ageRating: "U/A 13+", type: "show", backdropNoLang: "https://image.tmdb.org/t/p/original/w1beuDq08J0zUmi5uJPMvpWK9rv.jpg"
                },
                {
                    title: "The Boys",
                    desc: "A group of vigilantes known informally as “The Boys” set out to take down corrupt superheroes with no more than blue-collar grit and a willingness to fight dirty.",
                    genres: [
                        "Sci-Fi & Fantasy",
                        "Action & Adventure"
                    ],
                    totalSeasons: 5,
                    totalEpisodes: 32,
                    year: "2019",
                    isMostLiked: true,
                    videos: {
                        trailer: "EzFXDvC-EwM",
                        teaser: "NilteC-7jeM"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/AntNutVWAPJBL8XkrZZncQSGX3f.jpg",
                        isLogoIncluded: true
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/2zmTngn1tYC1AvfnrFLhxeD82hz.jpg",
                        isLogoIncluded: true
                    },
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/xawDgfkBQaocXR9CljBMjkYpXNK.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "superhero",
                        "based on comic",
                        "revenge"
                    ],
                    cast: [
                        "Karl Urban",
                        "Jack Quaid",
                        "Sydney Starr"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "The story takes place in a universe where most of the superpowered individuals are recognized as superheroes, but in reality abuse their powers for personal gain, information the public is kept unawar...",
                            posterPath: "https://image.tmdb.org/t/p/w400/iikrapejulhIvbNgUjj468mUE0I.jpg",
                            totalEpisode: 8,
                            year: "2019"
                        },
                        {
                            name: "Season 2",
                            desc: "The even more intense, more insane season two finds The Boys on the run from the law, hunted by the Supes, and desperately trying to regroup and fight back against Vought. In hiding, Hughie, Mother’s ...",
                            posterPath: "https://image.tmdb.org/t/p/w400/mY7SeH4HFFxW1hiI6cWuwCRKptN.jpg",
                            totalEpisode: 8,
                            year: "2020"
                        },
                        {
                            name: "Season 3",
                            desc: "It’s been a year of calm. Homelander’s subdued. Butcher works for the government, supervised by Hughie of all people. But both men itch to turn this peace and quiet into blood and bone. So when The Bo...",
                            posterPath: "https://image.tmdb.org/t/p/w400/7Ns6tO3aYjppI5bFhyYZurOYGBT.jpg",
                            totalEpisode: 8,
                            year: "2022"
                        },
                        {
                            name: "Season 4",
                            desc: "The world is on the brink. Victoria Neuman is closer than ever to the Oval Office and under Homelander's muscly thumb as he consolidates his power. Butcher, with only months to live, has lost Becca's ...",
                            posterPath: "https://image.tmdb.org/t/p/w400/nWwhdt7iOFJsWM8Lz1UtaUC6EUf.jpg",
                            totalEpisode: 8,
                            year: "2024"
                        },
                        {
                            name: "Season 5",
                            desc: "A group of vigilantes known informally as “The Boys” set out to take down corrupt superheroes with no more than blue-collar grit and a willingness to fight dirty.",
                            posterPath: "https://image.tmdb.org/t/p/w400/2zmTngn1tYC1AvfnrFLhxeD82hz.jpg",
                            totalEpisode: "Not Disclosed Yet",
                            year: "202- (Unannounced)"
                        }
                    ],
                    ageRating: "U/A 13+", type: "show", backdropNoLang: "https://image.tmdb.org/t/p/original/7cqKGQMnNabzOpi7qaIgZvQ7NGV.jpg"
                }
            ]
        },
        adventure: {
            tabs: ['home', 'movie'],
            title: "Adventure Ride",
            movieTitle: "Adventurous Movies",
            movies: [
                {
                    title: "Lagaan: Once Upon a Time in India",
                    desc: "In 1890s India, an arrogant British commander challenges the harshly taxed residents of Champaner to a high-stakes cricket match.",
                    genres: [
                        "Adventure",
                        "Romance",
                        "Drama"
                    ],
                    runtime: 224,
                    year: "2001",
                    isMostLiked: true,
                    videos: {
                        trailer: "AqVjWevMrAg"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/lr5NleIRRDrqCoMujQUTkYl24OV.jpg",
                        isLogoIncluded: true
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/yNX9lFRAFeNLNRIXdqZK9gYrYKa.jpg",
                        isLogoIncluded: true
                    },
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/oo2VJIIrz24HFaOpG8JTP1bgYPl.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "countryside",
                        "sports",
                        "patriotism"
                    ],
                    cast: [
                        "Aamir Khan",
                        "Gracy Singh",
                        "Rachel Shelley"
                    ],
                    ageRating: "U/A 7+", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Dunki",
                    desc: "Four friends from a sleepy little village in Punjab share a common dream: to go to England. Their problem is that they have neither the visa nor the ticket. A soldier alights from a train one day, and...",
                    genres: [
                        "Adventure",
                        "Comedy",
                        "Drama"
                    ],
                    runtime: 159,
                    year: "2023",
                    isMostLiked: false,
                    videos: {
                        trailer: "Zd69FfhBmSc"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/7kXd9k4UbrzdIZU5pQhP87hd5Bm.jpg",
                        isLogoIncluded: true
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/kPRb1mbVHGop0egQ7153y0lhzGL.jpg",
                        isLogoIncluded: true
                    },
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/kxhnOWx0ikkwB2Y7oGzJjd2RIun.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "affectation",
                        "ambiguous"
                    ],
                    cast: [
                        "Shah Rukh Khan",
                        "Taapsee Pannu",
                        "Vikram Kochhar"
                    ],
                    ageRating: "U/A 13+", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Aladin",
                    desc: "Based in the municipality of Khwaish, abused by his classmates, Aladin Chatterjee, who was orphaned when his parents, Arun and Riya, died in an accident in Siachen Valley, lived with his paternal gran...",
                    genres: [
                        "Fantasy",
                        "Drama",
                        "Romance"
                    ],
                    runtime: 132,
                    year: "2009",
                    isMostLiked: false,
                    videos: {
                        trailer: "JMQ9bNix4XM"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/mBCVzWQgqDFgRCty3wzHmWnMzIj.jpg",
                        isLogoIncluded: false
                    },
                    poster: {
                        image: "https://res.cloudinary.com/dianmmxft/image/upload/v1728210943/netflix-wallpaper-1600x900_rivdtg.jpg",
                        isLogoIncluded: false
                    },
                    logo: null,
                    keywords: [
                        "Not Available"
                    ],
                    cast: [
                        "Ritesh Deshmukh",
                        "Amitabh Bachchan",
                        "Jacqueline Fernandez"
                    ],
                    ageRating: "U/A 12+", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Dhamaal",
                    desc: "Four friends meet an underworld don who, on his deathbed, clues them in on hidden treasure buried in Goa. The group race towards Goa, not knowing that their plans will soon be foiled, albeit hilarious...",
                    genres: [
                        "Comedy",
                        "Adventure"
                    ],
                    runtime: 135,
                    year: "2007",
                    isMostLiked: false,
                    videos: {
                        trailer: "2VaA6wiu5P8"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/kUwdutAY5MveQMkhkmYcsERni4Y.jpg",
                        isLogoIncluded: false
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/pQgU9W1OyHDxBOZcJpVLc2E8gQa.jpg",
                        isLogoIncluded: false
                    },
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/MFPgnLhpzHb5yWWSZFUAvE6XIo.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "Not Available"
                    ],
                    cast: [
                        "Ritesh Deshmukh",
                        "Arshad Warsi",
                        "Javed Jaffrey"
                    ],
                    ageRating: "U/A 10+", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Table No. 21",
                    desc: "A couple live a mediocre life and are thrilled to have won an exotic vacation to Fiji & their excitement increases when they get a chance to play \"Tell all truth\" game for a mind boggling prize money....",
                    genres: [
                        "Adventure",
                        "Thriller"
                    ],
                    runtime: 108,
                    year: "2013",
                    isMostLiked: false,
                    videos: {
                        trailer: "SsC1MI9NvSs"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/uTL78zfiCVAm0jRWjaFvlveOmzw.jpg",
                        isLogoIncluded: false
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/nTchGUCfHrjvVYmps9a7hDQbHl2.jpg",
                        isLogoIncluded: true
                    },
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/1ruhNIaUgmqjczaArwD3dzLUnus.png",
                        isLogoIncluded: false
                    },
                    keywords: [
                        "death game"
                    ],
                    cast: [
                        "Paresh Rawal",
                        "Rajeev Khandelwal",
                        "Tina Desai"
                    ],
                    ageRating: "A-Rated", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Wild Wild Punjab",
                    desc: "Four friends road-trip across Punjab to help one of them get over an ex-girlfriend, but are quickly caught in a fiasco like no other.",
                    genres: [
                        "Comedy",
                        "Adventure"
                    ],
                    runtime: 111,
                    year: "2024",
                    isMostLiked: false,
                    videos: {
                        trailer: "CIrK-7VDkbU"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/92KMigabrm1po9mUQdCqkxearnA.jpg",
                        isLogoIncluded: true
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/5EpIjplAtUiFyjR6C2gYN6xPiCP.jpg",
                        isLogoIncluded: true
                    },
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/PTuVNToEMTnWdvHVvqRJCG1xXu.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "Not Available"
                    ],
                    cast: [
                        "Varun Sharma",
                        "Sunny Singh",
                        "Jassie Gill"
                    ],
                    ageRating: "A-Rated", type: "movie", backdropNoLang: ""
                },
                {
                    title: "The Garfield Movie",
                    desc: "Garfield, the world-famous, Monday-hating, lasagna-loving indoor cat, is about to have a wild outdoor adventure! After an unexpected reunion with his long-lost father – scruffy street cat Vic – Garfie...",
                    genres: [
                        "Animation",
                        "Comedy",
                        "Family"
                    ],
                    runtime: 101,
                    year: "2024",
                    isMostLiked: true,
                    videos: {
                        clip: "T5JIv8YgxKw",
                        trailer: "yk2Ej59DnrE",
                        teaser: "8R0jluRKzK0"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/fxXXXouLIrqcAP3eHAA3nlRaywJ.jpg",
                        isLogoIncluded: true
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/p6AbOJvMQhBmffd0PIv0u8ghWeY.jpg",
                        isLogoIncluded: true
                    },
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/prSRX17NuVYp3QdasekhYTLIPNP.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "friendship",
                        "cat",
                        "villain"
                    ],
                    cast: [
                        "Chris Pratt",
                        "Samuel L. Jackson",
                        "Hannah Waddingham"
                    ],
                    ageRating: "U/A 7+", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Transformers One",
                    desc: "The untold origin story of Optimus Prime and Megatron, better known as sworn enemies, but once were friends bonded like brothers who changed the fate of Cybertron forever.",
                    genres: [
                        "Animation",
                        "Science Fiction",
                        "Adventure"
                    ],
                    runtime: 104,
                    year: "2024",
                    isMostLiked: true,
                    videos: {
                        clip: "VUTi5RV8cqY",
                        trailer: "jaVcDaozGgc",
                        teaser: "0jhYbqeFlEE"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/3sIjxMhWj0TsR6ZhBD1hgqdsGhj.jpg",
                        isLogoIncluded: true
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/qbkAqmmEIZfrCO8ZQAuIuVMlWoV.jpg",
                        isLogoIncluded: true
                    },
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/yvAWvXkxoOHY2d27osPSV9WKgXO.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "based on toy",
                        "giant robot",
                        "buddy movie"
                    ],
                    cast: [
                        "Chris Hemsworth",
                        "Brian Tyree Henry",
                        "Scarlett Johansson"
                    ],
                    ageRating: "U/A 7+", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Twisters",
                    desc: "As storm season intensifies, the paths of former storm chaser Kate Carter and reckless social-media superstar Tyler Owens collide when terrifying phenomena never seen before are unleashed. The pair an...",
                    genres: [
                        "Action",
                        "Adventure",
                        "Thriller"
                    ],
                    runtime: 123,
                    year: "2024",
                    isMostLiked: true,
                    videos: {
                        clip: "4DMFewOInMI",
                        trailer: "AZbEi95SuMg",
                        teaser: "5fuQUrEW8oc"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/qmsDsg7uAIHppsMXAChKDRFZwKL.jpg",
                        isLogoIncluded: true
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/pjnD08FlMAIXsfOLKQbvmO0f0MD.jpg",
                        isLogoIncluded: true
                    },
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/ySUehfaAboyWvi4o7AhqehyPzgd.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "dying and death",
                        "rodeo",
                        "climate"
                    ],
                    cast: [
                        "Daisy Edgar-Jones",
                        "Glen Powell",
                        "Anthony Ramos"
                    ],
                    ageRating: "U/A 13+", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Kingdom of the Planet of the Apes",
                    desc: "Several generations following Caesar's reign, apes – now the dominant species – live harmoniously while humans have been reduced to living in the shadows. As a new tyrannical ape leader builds his emp...",
                    genres: [
                        "Science Fiction",
                        "Adventure",
                        "Action"
                    ],
                    runtime: 145,
                    year: "2024",
                    isMostLiked: true,
                    videos: {
                        clip: "ZRCF8GP25sw",
                        trailer: "Tg1FesR8X90",
                        teaser: "Q45wW7AmgC0"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/erD0W8CyhhqnmivM2EGKinHOFNC.jpg",
                        isLogoIncluded: true
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/gKkl37BQuKTanygYQG1pyYgLVgf.jpg",
                        isLogoIncluded: true
                    },
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/gLi5qaqxZbVj2PXQYrah0AFgqkB.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "empire",
                        "kingdom",
                        "gorilla"
                    ],
                    cast: [
                        "Owen Teague",
                        "Freya Allan",
                        "Kevin Durand"
                    ],
                    ageRating: "U/A 13+", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Furiosa: A Mad Max Saga",
                    desc: "As the world fell, young Furiosa is snatched from the Green Place of Many Mothers and falls into the hands of a great Biker Horde led by the Warlord Dementus. Sweeping through the Wasteland they come ...",
                    genres: [
                        "Action",
                        "Adventure",
                        "Science Fiction"
                    ],
                    runtime: 149,
                    year: "2024",
                    isMostLiked: true,
                    videos: {
                        clip: "aH542aRaAjY",
                        trailer: "LYV3001u574",
                        teaser: "pCXL2LTuwHE"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/mWIsjkQ2CRxDY2lwTfI3Fh6maCR.jpg",
                        isLogoIncluded: true
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/iADOJ8Zymht2JPMoy3R7xceZprc.jpg",
                        isLogoIncluded: true
                    },
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/z1wMCU7yPf6YELf46S2ml8XFDdR.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "prequel",
                        "spin off",
                        "tyranny"
                    ],
                    cast: [
                        "Anya Taylor-Joy",
                        "Chris Hemsworth",
                        "Tom Burke"
                    ],
                    ageRating: "A-Rated", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Godzilla x Kong: The New Empire",
                    desc: "Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, challenging their very existence – and our own.",
                    genres: [
                        "Action",
                        "Adventure",
                        "Science Fiction"
                    ],
                    runtime: 115,
                    year: "2024",
                    isMostLiked: true,
                    videos: {
                        clip: "5fe404-dRY8",
                        trailer: "m2u6RfmTXt0",
                        teaser: "Teg4Ta0vWjE"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/nDCN5WubZtnrUy5B1q67xde4wQI.jpg",
                        isLogoIncluded: true
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg",
                        isLogoIncluded: true
                    },
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/etL5WzGnHBwOA6Z6F2AIayT3Qdm.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "giant monster",
                        "sequel",
                        "dinosaur"
                    ],
                    cast: [
                        "Rebecca Hall",
                        "Brian Tyree Henry",
                        "Dan Stevens"
                    ],
                    ageRating: "U/A 13+", type: "movie", backdropNoLang: ""
                }
            ],
            shows: []
        },
        action: {
            tabs: ['home', 'movie'],
            title: "Action Packed Thrillers",
            movieTitle: "High Adrenaline Action Movies",
            movies: [
                {
                    title: "War",
                    desc: "Khalid, entrusted with the task of eliminating former soldier turned rogue Kabir, engages in an epic battle with his mentor who taught him everything.",
                    genres: [
                        "Action",
                        "Thriller",
                        "Adventure"
                    ],
                    runtime: 152,
                    year: "2019",
                    isMostLiked: false,
                    videos: {},
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/gLmZzAr2t3hW7LKIEgrKG7Y3ozJ.jpg",
                        isLogoIncluded: true
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/7JeHrXR1FU57Y6b90YDpFJMhmVO.jpg",
                        isLogoIncluded: true
                    },
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/z3W5MiCgfcdbHUip2KSIFe6XaJ0.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "friendship",
                        "chase",
                        "gun"
                    ],
                    cast: [
                        "Hrithik Roshan",
                        "Tiger Shroff",
                        "Ashutosh Rana"
                    ],
                    ageRating: "U/A 12+", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Jawan",
                    desc: "An emotional journey of a prison warden, driven by a personal vendetta while keeping up to a promise made years ago, recruits inmates to commit outrageous crimes that shed light on corruption and inju...",
                    genres: [
                        "Action",
                        "Crime",
                        "Thriller"
                    ],
                    runtime: 169,
                    year: "2023",
                    isMostLiked: true,
                    videos: {
                        trailer: "MWOlnZSnXJo"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/qGJhiG86pJUISlui6XKsnbHg43v.jpg",
                        isLogoIncluded: true
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/jFt1gS4BGHlK8xt76Y81Alp4dbt.jpg",
                        isLogoIncluded: true
                    },
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/7VQCCoFTVUt4rpsrgF9TE69L5lw.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "revenge",
                        "vigilantism",
                        "political"
                    ],
                    cast: [
                        "Shah Rukh Khan",
                        "Nayanthara",
                        "Vijay Sethupathi"
                    ],
                    ageRating: "U/A 13+", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Don 2",
                    desc: "Having conquered the Asian underworld, crime boss Don sets in motion a plan that will give him dominion over Europe.",
                    genres: [
                        "Action",
                        "Thriller"
                    ],
                    runtime: 139,
                    year: "2011",
                    isMostLiked: false,
                    videos: {
                        trailer: "_X5w-6PqoZ0"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/mUu01S5l2vJKcDKVk28jYqHJrvo.jpg",
                        isLogoIncluded: true
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/2gBM8c36HIwn4vc2UuMeliqiCKY.jpg",
                        isLogoIncluded: true
                    },
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/osHfCIyAIa1uLHczF0aJ6D83Epr.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "sequel"
                    ],
                    cast: [
                        "Shah Rukh Khan",
                        "Priyanka Chopra Jonas",
                        "Boman Irani"
                    ],
                    ageRating: "U/A 12+", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Raees",
                    desc: "Set in the early ’80s and ’90s in Gujarat, India, ‘Raees’ is a fictitious story of a crime lord named Raees, who builds an entire empire from scratch, and a police officer who is determined to bring h...",
                    genres: [
                        "Thriller",
                        "Action",
                        "Crime"
                    ],
                    runtime: 143,
                    year: "2017",
                    isMostLiked: false,
                    videos: {
                        clip: "cYOB941gyXI",
                        trailer: "J7_1MU3gDk0"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/yJItCbcrF1gls7EhyOYkEbHA0iC.jpg",
                        isLogoIncluded: true
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/zFYFUfnoXWxeA3n7v4acEqgk2iE.jpg",
                        isLogoIncluded: true
                    },
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/awe6WfgPrt7sB9GFTEqxkHKqnhr.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "bootlegger",
                        "bootlegging",
                        "period film"
                    ],
                    cast: [
                        "Shah Rukh Khan",
                        "Mahira Khan",
                        "Nawazuddin Siddiqui"
                    ],
                    ageRating: "A-Rated", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Bang Bang!",
                    desc: "A young bank receptionist gets mixed up with Rajveer Nanda, a man who has a mysterious background.",
                    genres: [
                        "Action",
                        "Adventure",
                        "Comedy"
                    ],
                    runtime: 153,
                    year: "2014",
                    isMostLiked: false,
                    videos: {},
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/60nxFqmgXwDSW3hkjwp6zQlz7g5.jpg",
                        isLogoIncluded: true
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/6ukTOJ3VNqrR0un8nolKoIlgn1V.jpg",
                        isLogoIncluded: true
                    },
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/91FzfwOcaHVx6SLNedaqqzlNUVp.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "rescue",
                        "dancing",
                        "london, england"
                    ],
                    cast: [
                        "Hrithik Roshan",
                        "Katrina Kaif",
                        "Danny Denzongpa"
                    ],
                    ageRating: "U/A 13+", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Attack",
                    desc: "With the Parliament under siege, India’s first super soldier Arjun Shergill is tasked to get hold of the terrorists in time, save the Prime Minister from their clutches and stop a dirty bomb from expl...",
                    genres: [
                        "Action",
                        "Science Fiction",
                        "Thriller"
                    ],
                    runtime: 123,
                    year: "2022",
                    isMostLiked: true,
                    videos: {
                        trailer: "KnC-XvFGflM"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/6DqNe4jKvWyQZjlRi9FaCzgMxyx.jpg",
                        isLogoIncluded: false
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/5jGKbYuZtdxSNOocI6ZziQeiY4n.jpg",
                        isLogoIncluded: true
                    },
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/gYBcr35h1RIFtp0rBFpFVReFJuO.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "delhi, india",
                        "prime minister",
                        "hostage-taking"
                    ],
                    cast: [
                        "John Abraham",
                        "Serena Walia",
                        "Rakul Preet Singh"
                    ],
                    ageRating: "U/A 12+", type: "movie", backdropNoLang: ""
                },
                {
                    title: "The Dark Knight",
                    desc: "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the stree...",
                    genres: [
                        "Drama",
                        "Action",
                        "Crime"
                    ],
                    runtime: 152,
                    year: "2008",
                    isMostLiked: true,
                    videos: {
                        clip: "QEBCT-Lsh-A",
                        trailer: "LDG9bisJEaI"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/A9YICp8lGP7Es5R8oD6qUbvDWhn.jpg",
                        isLogoIncluded: true
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
                        isLogoIncluded: true
                    },
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/nO5Uix3Qr4WjOyU1BMPv0okyNWm.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "joker",
                        "sadism",
                        "chaos"
                    ],
                    cast: [
                        "Christian Bale",
                        "Heath Ledger",
                        "Michael Caine"
                    ],
                    ageRating: "U/A 13+", type: "movie", backdropNoLang: ""
                },
                {
                    title: "The Dark Knight Rises",
                    desc: "Following the death of District Attorney Harvey Dent, Batman assumes responsibility for Dent's crimes to protect the late attorney's reputation and is subsequently hunted by the Gotham City Police Dep...",
                    genres: [
                        "Action",
                        "Crime",
                        "Drama"
                    ],
                    runtime: 165,
                    year: "2012",
                    isMostLiked: true,
                    videos: {
                        clip: "yiyUl1VMiDs",
                        trailer: "GAjBzu8ggi0"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/73lKeIl7MOQsFK74shmoSAhitg6.jpg",
                        isLogoIncluded: true
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/hr0L2aueqlP2BYUblTTjmtn0hw4.jpg",
                        isLogoIncluded: true
                    },
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/xdNHIYqo1VzxMCw4n51ARgem6ym.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "fight",
                        "burglar",
                        "hostage"
                    ],
                    cast: [
                        "Christian Bale",
                        "Michael Caine",
                        "Gary Oldman"
                    ],
                    ageRating: "U/A 13+", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Jurassic World",
                    desc: "Twenty-two years after the events of Jurassic Park, Isla Nublar now features a fully functioning dinosaur theme park, Jurassic World, as originally envisioned by John Hammond.",
                    genres: [
                        "Action",
                        "Adventure",
                        "Science Fiction"
                    ],
                    runtime: 124,
                    year: "2015",
                    isMostLiked: true,
                    videos: {
                        clip: "GlF4Lp4jb2s",
                        trailer: "aJJrkyHas78"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/9tjieFMEPnxqZ7jH6i1bFNwseKo.jpg",
                        isLogoIncluded: true
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/A0LZHXUzo5C60Oahvt7VxvwuzHw.jpg",
                        isLogoIncluded: true
                    },
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/fZPFhIwUMXSRptsYTccqY05A36w.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "island",
                        "primal fear",
                        "escape"
                    ],
                    cast: [
                        "Chris Pratt",
                        "Bryce Dallas Howard",
                        "Irrfan Khan"
                    ],
                    ageRating: "U/A 13+", type: "movie", backdropNoLang: ""
                },
                {
                    title: "John Wick",
                    desc: "Ex-hitman John Wick comes out of retirement to track down the gangsters that took everything from him.",
                    genres: [
                        "Action",
                        "Thriller"
                    ],
                    runtime: 101,
                    year: "2014",
                    isMostLiked: true,
                    videos: {
                        trailer: "6r0s41Ju5XA",
                        teaser: "-o5ZRrV90Hs"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/9berBuak0aID66n4MIZTxkxzqyO.jpg",
                        isLogoIncluded: true
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
                        isLogoIncluded: true
                    },
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/77YSn1XL3KFDcmIQGWE0Y0Tj7jB.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "hitman",
                        "gangster",
                        "revenge"
                    ],
                    cast: [
                        "Keanu Reeves",
                        "Michael Nyqvist",
                        "Alfie Allen"
                    ],
                    ageRating: "A-Rated", type: "movie", backdropNoLang: ""
                },
                {
                    title: "The Maze Runner",
                    desc: "Set in a post-apocalyptic world, young Thomas is deposited in a community of boys after his memory is erased, soon learning they're all trapped in a maze that will require him to join forces with fell...",
                    genres: [
                        "Action",
                        "Mystery",
                        "Science Fiction"
                    ],
                    runtime: 113,
                    year: "2014",
                    isMostLiked: true,
                    videos: {
                        trailer: "3b946aGm0zs"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/iPRIipGKdiVS8vViA2qcv0PerU.jpg",
                        isLogoIncluded: true
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/ode14q7WtDugFDp78fo9lCsmay9.jpg",
                        isLogoIncluded: true
                    },
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/aqKO27gJX5SaFka07MWBh54iLaW.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "escape",
                        "dystopia",
                        "maze"
                    ],
                    cast: [
                        "Dylan O'Brien",
                        "Kaya Scodelario",
                        "Aml Ameen"
                    ],
                    ageRating: "U/A 13+", type: "movie", backdropNoLang: ""
                },
                {
                    title: "World War Z",
                    desc: "Life for former United Nations investigator Gerry Lane and his family seems content. Suddenly, the world is plagued by a mysterious infection turning whole human populations into rampaging mindless zo...",
                    genres: [
                        "Action",
                        "Horror",
                        "Science Fiction"
                    ],
                    runtime: 116,
                    year: "2013",
                    isMostLiked: true,
                    videos: {
                        clip: "dfruFjZfIU4",
                        trailer: "TvRCQM2HrXs"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/kIKKwaw4TPcfRlBH5e0HueyybGo.jpg",
                        isLogoIncluded: true
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/kocvIT68A1NoqxmQVXUqlGLAG3Q.jpg",
                        isLogoIncluded: true
                    },
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/bZaWSYAURZg4VoYKoFLNSFr3n2I.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "new jersey",
                        "dystopia",
                        "jerusalem, israel"
                    ],
                    cast: [
                        "Brad Pitt",
                        "Mireille Enos",
                        "Daniella Kertesz"
                    ],
                    ageRating: "U/A 13+", type: "movie", backdropNoLang: ""
                }
            ],
            shows: []
        },
        bestOfYear: {
            tabs: ['home'],
            title: "2023's Best Picks",
            movies: [
                {
                    title: "Jawan",
                    desc: "An emotional journey of a prison warden, driven by a personal vendetta while keeping up to a promise made years ago, recruits inmates to commit outrageous crimes that shed light on corruption and inju...",
                    genres: [
                        "Action",
                        "Crime",
                        "Thriller"
                    ],
                    runtime: 169,
                    year: "2023",
                    isMostLiked: true,
                    videos: {
                        trailer: "MWOlnZSnXJo"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/qGJhiG86pJUISlui6XKsnbHg43v.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/7VQCCoFTVUt4rpsrgF9TE69L5lw.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "revenge",
                        "vigilantism",
                        "political"
                    ],
                    cast: [
                        "Shah Rukh Khan",
                        "Nayanthara",
                        "Vijay Sethupathi"
                    ],
                    ageRating: "U/A 13+", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Pathaan",
                    desc: "A soldier caught by enemies and presumed dead comes back to complete his mission, accompanied by old companions and foes.",
                    genres: [
                        "Action",
                        "Adventure",
                        "Thriller"
                    ],
                    runtime: 146,
                    year: "2023",
                    isMostLiked: true,
                    videos: {
                        trailer: "yswBxKPFSvA",
                        teaser: "9oYlBZ_qQng"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/2X18LT7jZb7M3GBJR6EUeu050Wo.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/5MOroJhG2jpVhQErpG3O4y6E2zZ.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "spy",
                        "fake death",
                        "spy thriller"
                    ],
                    cast: [
                        "Shah Rukh Khan",
                        "Deepika Padukone",
                        "John Abraham"
                    ],
                    ageRating: "U/A 13+", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Tu Jhoothi Main Makkaar",
                    desc: "To earn extra cash, Mickey helps couples break up — but life gets complicated when he falls for Tinni, a career woman with an independent streak.",
                    genres: [
                        "Comedy",
                        "Romance",
                        "Family"
                    ],
                    runtime: 159,
                    year: "2023",
                    isMostLiked: false,
                    videos: {
                        trailer: "JzGGF4JPFIQ"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/8xzXSjYRGzh54Id774GRVXIBJRh.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/gUsqrNSEpZBPPmnvFO5wvuQrqyj.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "romantic comedy"
                    ],
                    cast: [
                        "Ranbir Kapoor",
                        "Shraddha Kapoor",
                        "Anubhav Singh Bassi"
                    ],
                    ageRating: "U/A 12+", type: "movie", backdropNoLang: ""
                },
                {
                    title: "12th Fail",
                    desc: "Based on the true story of IPS officer Manoj Kumar Sharma, 12th Fail sheds limelight on fearlessly embracing the idea of restarting the academic journey despite the setbacks and challenges and reclaim...",
                    genres: [
                        "Drama"
                    ],
                    runtime: 146,
                    year: "2023",
                    isMostLiked: true,
                    videos: {
                        trailer: "WeMJo701mvQ",
                        teaser: "3fi39FWuXT8"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/mn6QCsrr9zABlOupwyS4zTWpI28.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/nhnKWMtAdD31Wklbq4JR4IDWbHa.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "awestruck"
                    ],
                    cast: [
                        "Vikrant Massey",
                        "Medha Shankr",
                        "Anant Joshi"
                    ],
                    ageRating: "U/A 10+", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Chor Nikal Ke Bhaga",
                    desc: "A flight attendant and her boyfriend must steal a cache of diamonds to clear an old debt — but the plan spins into a mayhem when the plane gets hijacked.",
                    genres: [
                        "Crime",
                        "Thriller"
                    ],
                    runtime: 110,
                    year: "2023",
                    isMostLiked: false,
                    videos: {},
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/vBmmJYv5asJpdJZsyPPc4MMpfBe.jpg",
                        isLogoIncluded: false
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/5RCYFZK0W0mUhQAAuJxCMkH8S4Q.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "heist"
                    ],
                    cast: [
                        "Yami Gautam",
                        "Sunny Kaushal",
                        "Sharad Kelkar"
                    ],
                    ageRating: "U/A 7+", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Animal",
                    desc: "The hardened son of a powerful industrialist returns home after years abroad and vows to take bloody revenge on those threatening his father's life.",
                    genres: [
                        "Action",
                        "Crime",
                        "Drama"
                    ],
                    runtime: 201,
                    year: "2023",
                    isMostLiked: true,
                    videos: {
                        trailer: "6DfaBq2rVoE"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/jZgd1Ryzfqaobb8O0IO428xEwsB.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/aM0QC0EmfPD84AtjGIv2UJ9yu6J.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "fistfight",
                        "shootout",
                        "held at gunpoint"
                    ],
                    cast: [
                        "Ranbir Kapoor",
                        "Rashmika Mandanna",
                        "Anil Kapoor"
                    ],
                    ageRating: "A-Rated", type: "movie", backdropNoLang: ""
                }
            ],
            shows: [
                {
                    title: "Farzi",
                    desc: "Sunny, a brilliant small-time artist is catapulted into the high-stakes world of counterfeiting when he creates the perfect fake currency note, even as Michael, a fiery, unorthodox task force officer ...",
                    genres: [
                        "Drama",
                        "Crime"
                    ],
                    totalSeasons: 1,
                    totalEpisodes: 8,
                    year: "2023",
                    isMostLiked: false,
                    videos: {
                        trailer: "KQdgKpNYho8"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/pbcusTSBfqZ9mfFAjyDkbu4JkeS.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/ifGD5GeRaBk9mNo73xFcGsqPEFP.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "Not Available"
                    ],
                    cast: [
                        "Shahid Kapoor",
                        "Vijay Sethupathi",
                        "Kay Kay Menon"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "Sunny, a brilliant small-time artist is catapulted into the high-stakes world of counterfeiting when he creates the perfect fake currency note, even as Michael, a fiery, unorthodox task force officer ...",
                            posterPath: "https://image.tmdb.org/t/p/w400/cTS86RwEBIDgCgUmjWQTSoPsK6p.jpg",
                            totalEpisode: 8,
                            year: "2023"
                        }
                    ],
                    ageRating: "U/A 17+", type: "show", backdropNoLang: ""
                },
                {
                    title: "The Railway Men - The Untold Story of Bhopal 1984",
                    desc: "India, 1984. After a deadly gas leaks from a factory in Bhopal, brave railway workers risk their lives to save others in the face of an unspeakable disaster.",
                    genres: [
                        "Drama"
                    ],
                    totalSeasons: 1,
                    totalEpisodes: 4,
                    year: "2023",
                    isMostLiked: false,
                    videos: {
                        trailer: "htQsI-b9dgc",
                        teaser: "4T7TbU5jhxk"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/q0h8xeI2tIIRWSssCeyozD1fTAf.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/lLiQ1fSyhfywRNieZdE1Ymn3Qx6.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "Not Available"
                    ],
                    cast: [
                        "Kay Kay Menon",
                        "Divyendu Sharma",
                        "Babil Khan"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "After a deadly gas leaks from a factory in Bhopal, brave railway workers risk their lives to save others in the face of an unspeakable disaster.",
                            posterPath: "https://image.tmdb.org/t/p/w400/ejgoT5zhvltxfjFb9mS4ykjPFFG.jpg",
                            totalEpisode: 4,
                            year: "2023"
                        }
                    ],
                    ageRating: "U/A 17+", type: "show", backdropNoLang: ""
                },
                {
                    title: "Aspirants",
                    desc: "Aspirants is a story of 3 friends - Abhilash, SK, and Guri. The story takes place in the past and the present where the past captures the struggle and the drama behind the making of UPSC CSE aspirants...",
                    genres: [
                        "Drama"
                    ],
                    totalSeasons: 2,
                    totalEpisodes: 10,
                    year: "2021",
                    isMostLiked: false,
                    videos: {},
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/suXX4sFFgUGMv47jCibP4hhsmN7.jpg",
                        isLogoIncluded: false
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/P1lD8vlCxVZ6LSSsXZMavSD4KN.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "Not Available"
                    ],
                    cast: [
                        "Naveen Kasturia",
                        "Shivankit Singh Parihar",
                        "Abhilash Thapliyal"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "Aspirants is a story of 3 friends - Abhilash, SK, and Guri. The story takes place in the past and the present where the past captures the struggle and the drama behind the making of UPSC aspirants in ...",
                            posterPath: "https://image.tmdb.org/t/p/w400/dHAxJpWuDyFzCRkbPJfWxfWdMBs.jpg",
                            totalEpisode: 5,
                            year: "2021"
                        },
                        {
                            name: "Season 2",
                            desc: "Abhilash has assumed the position of District Magistrate in Rampur. The emergence of ideological disparities between Abhilash and ALC Sandeep Ohlan has resulted in escalating tensions between them.",
                            posterPath: "https://image.tmdb.org/t/p/w400/lG8wK40jH4EX6dbVFI1fzw2E96N.jpg",
                            totalEpisode: 5,
                            year: "2023"
                        }
                    ],
                    ageRating: "U/A 17+", type: "show", backdropNoLang: ""
                },
                {
                    title: "Permanent Roommates",
                    desc: "A couple, who were in a long distance relationship for 3 years, face the prospect of getting married.",
                    genres: [
                        "Comedy"
                    ],
                    totalSeasons: 3,
                    totalEpisodes: 18,
                    year: "2014",
                    isMostLiked: false,
                    videos: {},
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/6k7g8ybn5uSDD1fZ9CboaK2HXeo.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/cIGQBW7rDx3pFhO5jbkHPWyjnYD.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "relationship",
                        "sitcom"
                    ],
                    cast: [
                        "Nidhi Singh",
                        "Sumeet Vyas",
                        "Deepak Kumar Mishra"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "A couple, who were in a long distance relationship for 3 years, face the prospect of getting married.",
                            posterPath: "https://image.tmdb.org/t/p/w400/lFkVzIOfW4FlbOWWzfBeluQkhvb.jpg",
                            totalEpisode: 5,
                            year: "2014"
                        },
                        {
                            name: "Season 2",
                            desc: "Mikesh's parents have arrived at the Permanent Roommates' residence, as the news of Tanya's pregnancy also arrives. Mikesh and Tanya's wedding is being planned now in full force, with both their famil...",
                            posterPath: "https://image.tmdb.org/t/p/w400/ghGbI4UlIiL8I1Uv2ilZNgEdAnc.jpg",
                            totalEpisode: 8,
                            year: "2016"
                        },
                        {
                            name: "Season 3",
                            desc: "Mikesh has the perfect life, whereas Tanya feels stuck. She reckons being stuck in her career is what stops her from being truly happy. Her fix for them to move abroad and Mikesh's resistance to the i...",
                            posterPath: "https://image.tmdb.org/t/p/w400/rH6pDUBJEBWbyjh39bovqRcKYrx.jpg",
                            totalEpisode: 5,
                            year: "2023"
                        }
                    ],
                    ageRating: "U/A 17+", type: "show", backdropNoLang: ""
                },
                {
                    title: "Hostel Daze",
                    desc: "Four naive and vulnerable wing-mates develop lasting bonds as they jostle hard to survive the first semester in a hostel. Peppered with absurdities, chutzpahs, clashes and debacles inherent to hostel ...",
                    genres: [
                        "Drama",
                        "Comedy"
                    ],
                    totalSeasons: 4,
                    totalEpisodes: 21,
                    year: "2019",
                    isMostLiked: false,
                    videos: {
                        trailer: "h1k6sGmHqoE"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/vtLO9GDTuMJNwkkUtWYQB7DmUlT.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/nHeIwoaat43UWYaSsGiQZdoBS3B.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "friendship",
                        "teenage crush",
                        "boys hostel"
                    ],
                    cast: [
                        "Luv Vispute",
                        "Shubham Gaur",
                        "Nikhil Vijay"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "Four wingmates, 1 Hostel, First Semester. 'Hostel Daze' tries to capture the hostel-culture (or its lack thereof) of an engineering college.",
                            posterPath: "https://image.tmdb.org/t/p/w400/jDt4wVvPzLtJoIMCCzHleVLlBbZ.jpg",
                            totalEpisode: 5,
                            year: "2019"
                        },
                        {
                            name: "Season 2",
                            desc: "6 friends enter their second year of college and dig deeper into the notorious universe of an Indian hostel. Hostel Daze Season 2 incorporates the second chapter of hostel-life in the lives of Ankit, ...",
                            posterPath: "https://image.tmdb.org/t/p/w400/rC14U6Q52O2vMD6CLczPpvG4ooJ.jpg",
                            totalEpisode: 4,
                            year: "2021"
                        },
                        {
                            name: "Season 3",
                            desc: "After experiencing the exhilarating freedom of the initial years and having had their fair share of fun in the past two years; Ankit, Akanksha, Jaat, Jhantoo, Nabomita and Chirag take on the third yea...",
                            posterPath: "https://image.tmdb.org/t/p/w400/5GZQ9BWhCifOe82PngY1xgqVEuG.jpg",
                            totalEpisode: 6,
                            year: "2022"
                        },
                        {
                            name: "Season 4",
                            desc: "The gang prepares themselves for the placement year and give it their all to seek a respectable job before bidding a final adieu to their hostel lives.",
                            posterPath: "https://image.tmdb.org/t/p/w400/x7BhAxMgWvgdlYyHuckY1ZiNhsE.jpg",
                            totalEpisode: 6,
                            year: "2023"
                        }
                    ],
                    ageRating: "U/A 17+", type: "show", backdropNoLang: ""
                },
                {
                    title: "Guns & Gulaabs",
                    desc: "In the cartel-run town of Gulaabgunj, an unprecedented opium deal pulls a big-city cop and a lovesick mechanic into its chaotic clutches.",
                    genres: [
                        "Comedy",
                        "Drama"
                    ],
                    totalSeasons: 1,
                    totalEpisodes: 7,
                    year: "2023",
                    isMostLiked: false,
                    videos: {
                        trailer: "0dIIChsjKBc",
                        teaser: "D365RUy_JRI"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/6jJmcfqBnb4Kua7N1cFwJQFR0k2.jpg",
                        isLogoIncluded: false
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/wdsHzBxr5y7HL9wpvEzZj0xjte.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "Not Available"
                    ],
                    cast: [
                        "Dulquer Salmaan",
                        "Rajkummar Rao",
                        "Adarsh Gourav"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "In the cartel-run town of Gulaabgunj, an unprecedented opium deal pulls a big-city cop and a lovesick mechanic into its chaotic clutches.",
                            posterPath: "https://image.tmdb.org/t/p/w400/tqnM3ER0HdBijf9YNrMMWCxydUp.jpg",
                            totalEpisode: 7,
                            year: "2023"
                        }
                    ],
                    ageRating: "U/A 17+", type: "show", backdropNoLang: ""
                }
            ]
        },
        trueStories: {
            tabs: ['home', 'movie'],
            title: "Based on True Stories",
            movieTitle: "Movies on True Incidents",
            movies: [
                {
                    title: "Uri: The Surgical Strike",
                    desc: "Following the roguish terrorist attacks at Uri Army Base camp in Kashmir, India takes the fight to the enemy, in its most successful covert operation till date with one and only one objective of aveng...",
                    genres: [
                        "Action",
                        "Drama",
                        "War"
                    ],
                    runtime: 138,
                    year: "2019",
                    isMostLiked: true,
                    videos: {
                        trailer: "Cg8sbRFS3zU",
                        teaser: "vsqugwESq4Q"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/pzcXrOcKLQjVo1B2wMx1HOpwudF.jpg",
                        isLogoIncluded: true
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/yNySAgpAnWmPpYinim9E0tUzJWG.jpg",
                        isLogoIncluded: true
                    },
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/sIKqWE7pENLFsJNirsAU2Nlc22R.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "army",
                        "terrorism",
                        "india"
                    ],
                    cast: [
                        "Vicky Kaushal",
                        "Paresh Rawal",
                        "Yami Gautam"
                    ],
                    ageRating: "U/A 12+", type: "movie", backdropNoLang: ""
                },
                {
                    title: "My Name Is Khan",
                    desc: "Rizwan Khan, a Muslim from the Borivali section of Mumbai, has Asperger's syndrome. He marries a Hindu single mother, Mandira, in San Francisco. After 9/11, Rizwan is detained by authorities at LAX wh...",
                    genres: [
                        "Drama",
                        "Romance"
                    ],
                    runtime: 165,
                    year: "2010",
                    isMostLiked: true,
                    videos: {
                        clip: "JJ5r5Z6G2Zo",
                        trailer: "nGH2mTu7AhU"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/pTJdgRV9MjHz3ATACwRXnLRfymR.jpg",
                        isLogoIncluded: true
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/5Y36lCiNyyV71mjq6LavgiggbhT.jpg",
                        isLogoIncluded: true
                    },
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/n8PoFrCJSUZS4gyGcsIzTCmwPaS.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "autism",
                        "prejudice",
                        "religion"
                    ],
                    cast: [
                        "Shah Rukh Khan",
                        "Kajol",
                        "Arjan Aujla"
                    ],
                    ageRating: "U/A 13+", type: "movie", backdropNoLang: ""
                },
                {
                    title: "State of Siege: Temple Attack",
                    desc: "Based on the true incident of the 2002 terrorist attack in Gujarat's Akshardham temple, the story revolves around the bravery of NSG commandos, who stood up for their country and their people in the w...",
                    genres: [
                        "Action",
                        "Drama"
                    ],
                    runtime: 106,
                    year: "2021",
                    isMostLiked: false,
                    videos: {},
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/dZzfAouqh1YOLhfF8QYbrqOhuK.jpg",
                        isLogoIncluded: true
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/ckghAN8FuYY2icUyJjVkKXiBrek.jpg",
                        isLogoIncluded: true
                    },
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/nvUxJIZzMdleAZdOiHjdGLkQCji.png",
                        isLogoIncluded: true
                    },
                    keywords: [],
                    cast: [
                        "Akshaye Khanna",
                        "Gautam Rode",
                        "Vivek Dahiya"
                    ],
                    ageRating: "U/A 10+", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Bhaag Milkha Bhaag",
                    desc: "The true story of the \"Flying Sikh\" world champion runner and Olympian Milkha Singh who overcame the massacre of his family, civil war during the India-Pakistan partition, and homelessness to become o...",
                    genres: [
                        "History",
                        "Drama"
                    ],
                    runtime: 186,
                    year: "2013",
                    isMostLiked: true,
                    videos: {
                        trailer: "WbblCMem1ME",
                        teaser: "0nR9JS2WsNg"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/4fhUeCvpIboQwc0Rz7aXxxD1w5l.jpg",
                        isLogoIncluded: true
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/bXywc0CEzS1fIshPWWi4V8A58U3.jpg",
                        isLogoIncluded: true
                    },
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/rxBTSb6H1xIUoPf22QK2BIjCD2j.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "fight",
                        "knife",
                        "biography"
                    ],
                    cast: [
                        "Farhan Akhtar",
                        "Sonam Kapoor Ahuja",
                        "Divya Dutta"
                    ],
                    ageRating: "U-Rated", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Lagaan: Once Upon a Time in India",
                    desc: "In 1890s India, an arrogant British commander challenges the harshly taxed residents of Champaner to a high-stakes cricket match.",
                    genres: [
                        "Adventure",
                        "Romance",
                        "Drama"
                    ],
                    runtime: 224,
                    year: "2001",
                    isMostLiked: true,
                    videos: {
                        trailer: "AqVjWevMrAg"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/lr5NleIRRDrqCoMujQUTkYl24OV.jpg",
                        isLogoIncluded: true
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/yNX9lFRAFeNLNRIXdqZK9gYrYKa.jpg",
                        isLogoIncluded: true
                    },
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/oo2VJIIrz24HFaOpG8JTP1bgYPl.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "countryside",
                        "sports",
                        "patriotism"
                    ],
                    cast: [
                        "Aamir Khan",
                        "Gracy Singh",
                        "Rachel Shelley"
                    ],
                    ageRating: "U/A 7+", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Shershaah",
                    desc: "Inspired by the life of Captain Vikram Batra (PVC), the film celebrates his bravery, valiant spirit and honors his invaluable sacrifice during the Kargil War of 1999, at the age of 24.",
                    genres: [
                        "Action",
                        "Drama",
                        "Thriller"
                    ],
                    runtime: 135,
                    year: "2021",
                    isMostLiked: false,
                    videos: {},
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/AguDwIJdqUFEUXlmXyixotE0WnT.jpg",
                        isLogoIncluded: false
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/zGvFnwoXJKrYnKhoVPytqkqCJ8V.jpg",
                        isLogoIncluded: true
                    },
                    logo: null,
                    keywords: [
                        "biography",
                        "kargil conflict"
                    ],
                    cast: [
                        "Sidharth Malhotra",
                        "Kiara Advani",
                        "Shataf Figar"
                    ],
                    ageRating: "U/A 12+", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Titanic",
                    desc: "101-year-old Rose DeWitt Bukater tells the story of her life aboard the Titanic, 84 years later. A young Rose boards the ship with her mother and fiancé. Meanwhile, Jack Dawson and Fabrizio De Rossi w...",
                    genres: [
                        "Drama",
                        "Romance"
                    ],
                    runtime: 194,
                    year: "1997",
                    isMostLiked: true,
                    videos: {
                        clip: "JYdCltjvrxg",
                        trailer: "UFQ2AZVQ9mg",
                        teaser: "cZUvJ37ao1k"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/tBEp5F0tUM105IdBTOmyJB5LZgG.jpg",
                        isLogoIncluded: true
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
                        isLogoIncluded: true
                    },
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/rLzHguwcdni9Jam8rMtMlg5XG2D.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "epic",
                        "ship",
                        "drowning"
                    ],
                    cast: [
                        "Leonardo DiCaprio",
                        "Kate Winslet",
                        "Billy Zane"
                    ],
                    ageRating: "U/A 13+", type: "movie", backdropNoLang: ""
                },
                {
                    title: "The Wolf of Wall Street",
                    desc: "A New York stockbroker refuses to cooperate in a large securities fraud case involving corruption on Wall Street, corporate banking world and mob infiltration. Based on Jordan Belfort's autobiography.",
                    genres: [
                        "Crime",
                        "Drama",
                        "Comedy"
                    ],
                    runtime: 180,
                    year: "2013",
                    isMostLiked: true,
                    videos: {
                        clip: "RPORRudmQv0",
                        trailer: "Slj4-Sv-YNA",
                        teaser: "ryp0oKu31nE"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/br7n8b3ELexcvs6l30IH2x9P2ux.jpg",
                        isLogoIncluded: true
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/34m2tygAYBGqA9MXKhRDtzYd4MR.jpg",
                        isLogoIncluded: true
                    },
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/mCn3JT0FHgUaDpud79djjfF9wnX.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "corruption",
                        "drug addiction",
                        "anti hero"
                    ],
                    cast: [
                        "Leonardo DiCaprio",
                        "Jonah Hill",
                        "Margot Robbie"
                    ],
                    ageRating: "A-Rated", type: "movie", backdropNoLang: ""
                },
                {
                    title: "The Revenant",
                    desc: "In the 1820s, a frontiersman, Hugh Glass, sets out on a path of vengeance against those who left him for dead after a bear mauling.",
                    genres: [
                        "Western",
                        "Drama",
                        "Adventure"
                    ],
                    runtime: 157,
                    year: "2015",
                    isMostLiked: true,
                    videos: {
                        clip: "XJ44ZRFFRUU",
                        trailer: "LoebZZ8K5N0"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/utbrAEM81AdnRmJ0qoqNiMo1iRt.jpg",
                        isLogoIncluded: true
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/tSaBkriE7TpbjFoQUFXuikoz0dF.jpg",
                        isLogoIncluded: true
                    },
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/mEX6DxONWq0WAk3VnQMKV5OYjo2.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "rape",
                        "winter",
                        "child murder"
                    ],
                    cast: [
                        "Leonardo DiCaprio",
                        "Tom Hardy",
                        "Domhnall Gleeson"
                    ],
                    ageRating: "A-Rated", type: "movie", backdropNoLang: ""
                },
                {
                    title: "The Intouchables",
                    desc: "A true story of two men who should never have met – a quadriplegic aristocrat who was injured in a paragliding accident and a young man from the projects.",
                    genres: [
                        "Drama",
                        "Comedy"
                    ],
                    runtime: 113,
                    year: "2011",
                    isMostLiked: true,
                    videos: {
                        trailer: "dvdJ--DV0Uo"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/pcmcumbyTkNNdQD8T67xZD3kWlx.jpg",
                        isLogoIncluded: true
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/1QU7HKgsQbGpzsJbJK4pAVQV9F5.jpg",
                        isLogoIncluded: true
                    },
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/tpbIcZ8s4B6YQxy28ZHZdsjmz4q.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "friendship",
                        "male friendship",
                        "masseuse"
                    ],
                    cast: [
                        "François Cluzet",
                        "Omar Sy",
                        "Dominique Henry"
                    ],
                    ageRating: "A-Rated", type: "movie", backdropNoLang: ""
                },
                {
                    title: "The Imitation Game",
                    desc: "Based on the real life story of legendary cryptanalyst Alan Turing, the film portrays the nail-biting race against time by Turing and his brilliant team of code-breakers at Britain's top-secret Govern...",
                    genres: [
                        "History",
                        "Drama",
                        "Thriller"
                    ],
                    runtime: 113,
                    year: "2014",
                    isMostLiked: true,
                    videos: {
                        clip: "SkETN-xENAM",
                        trailer: "j2jRs4EAvWM",
                        teaser: "INCp2P6UK5c"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/s2KjOFcjwDD6nd3O4vkaQsyW2Hy.jpg",
                        isLogoIncluded: true
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/zSqJ1qFq8NXFfi7JeIYMlzyR0dx.jpg",
                        isLogoIncluded: true
                    },
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/nA8ntmmUF1JXnNDMyP2TB4gTNyj.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "england",
                        "homophobia",
                        "world war ii"
                    ],
                    cast: [
                        "Benedict Cumberbatch",
                        "Keira Knightley",
                        "Matthew Goode"
                    ],
                    ageRating: "U/A 13+", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Bohemian Rhapsody",
                    desc: "Singer Freddie Mercury, guitarist Brian May, drummer Roger Taylor and bass guitarist John Deacon take the music world by storm when they form the rock 'n' roll band Queen in 1970. Hit songs become ins...",
                    genres: [
                        "Music",
                        "Drama"
                    ],
                    runtime: 135,
                    year: "2018",
                    isMostLiked: true,
                    videos: {
                        clip: "wfSt8Sxyyrg",
                        trailer: "27zlBpzdOZg",
                        teaser: "6S9c5nnDd_s"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/cdakNMS02KILElwW4j7IZPEVw7D.jpg",
                        isLogoIncluded: true
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/lHu1wtNaczFPGFDTrjCSzeLPTKN.jpg",
                        isLogoIncluded: true
                    },
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/lnbczMNB1ayvb4Wjd2UK3bNHwMM.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "london, england",
                        "aids",
                        "musician"
                    ],
                    cast: [
                        "Rami Malek",
                        "Gwilym Lee",
                        "Ben Hardy"
                    ],
                    ageRating: "U/A 13+", type: "movie", backdropNoLang: ""
                }
            ],
            shows: []
        },
        comedy: {
            tabs: ['home', 'movie'],
            title: "Laugh out Loud Comedies",
            movieTitle: "Laughter Dose Movies",
            movies: [
                {
                    title: "Garam Masala",
                    desc: "Photographer and serial womaniser, Mac devises a scheme to keep three airhostesses as  his fiancées. Everything works fine as long as they only come home every third day. But changing schedules, a jea...",
                    genres: [
                        "Comedy"
                    ],
                    runtime: 142,
                    year: "2005",
                    isMostLiked: false,
                    videos: {
                        trailer: "qc5yaw9zcS8"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/iFfvVovOY5hB6S8qM7xD8ue6cMt.jpg",
                        isLogoIncluded: true
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/puk8ca4bL9HG1R8BwORif8bHGqY.jpg",
                        isLogoIncluded: true
                    },
                    logo: null,
                    keywords: [
                        "remake"
                    ],
                    cast: [
                        "Akshay Kumar",
                        "John Abraham",
                        "Paresh Rawal"
                    ],
                    ageRating: "U/A 10+", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Bhool Bhulaiyaa",
                    desc: "An NRI couple return to India and decide to stay in their ancestral palace while disregarding warnings about a curse and paranormal forces. Soon inexplicable events start happening which forces him to...",
                    genres: [
                        "Comedy",
                        "Horror",
                        "Thriller"
                    ],
                    runtime: 151,
                    year: "2007",
                    isMostLiked: false,
                    videos: {
                        trailer: "FU9UZWGM1lA"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/yeAnnWYklEEXlkDIbP6gI0AQne5.jpg",
                        isLogoIncluded: false
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/soRW3p4GlPphHiFkwbqYGrodQ5S.jpg",
                        isLogoIncluded: true
                    },
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/b97bB1ph7t2kGt6pBMmiU7lwj07.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "remake"
                    ],
                    cast: [
                        "Akshay Kumar",
                        "Vidya Balan",
                        "Shiney Ahuja"
                    ],
                    ageRating: "U-Rated", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Bhagam Bhag",
                    desc: "After their lead actress quits their drama troupe; Bunty, Babla and their boss Champak search for a new heroine in London where they have just arrived, and get embroiled in a murder case involving a m...",
                    genres: [
                        "Comedy",
                        "Thriller",
                        "Romance"
                    ],
                    runtime: 157,
                    year: "2006",
                    isMostLiked: false,
                    videos: {
                        trailer: "ihCaohTJYCo"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/zGtwqquhZfq5aizPY5olcfw2w2v.jpg",
                        isLogoIncluded: true
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/wJqdwEgMiMzU0zIEnKBWEbTfeUS.jpg",
                        isLogoIncluded: true
                    },
                    logo: null,
                    keywords: [
                        "Not Available"
                    ],
                    cast: [
                        "Akshay Kumar",
                        "Govinda",
                        "Paresh Rawal"
                    ],
                    ageRating: "U-Rated", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Chup Chup Ke",
                    desc: "After surviving a suicide attempt in which his family and fellow villagers believe he drowned, a debt-ridden man decides to start his life afresh in another village. He pretends to be mute and starts ...",
                    genres: [
                        "Comedy"
                    ],
                    runtime: 165,
                    year: "2006",
                    isMostLiked: false,
                    videos: {},
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/kGBnSN97zR6fmqR82zHJRnpC5t1.jpg",
                        isLogoIncluded: true
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/daXoADAtEPis5bBvSrXVWfRa77X.jpg",
                        isLogoIncluded: false
                    },
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/7Bx7TC7LNc0j8TP5j8Hy3yNZBbD.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "Not Available"
                    ],
                    cast: [
                        "Shahid Kapoor",
                        "Paresh Rawal",
                        "Rajpal Yadav"
                    ],
                    ageRating: "U-Rated", type: "movie", backdropNoLang: ""
                },
                {
                    title: "De Dana Dan",
                    desc: "Two down on their luck men try to kidnap a wealthy businesswoman's dog to demand a hefty ransom from her.  But things go haywire when the dog goes missing.",
                    genres: [
                        "Comedy",
                        "Crime"
                    ],
                    runtime: 166,
                    year: "2009",
                    isMostLiked: false,
                    videos: {
                        trailer: "oBMW4EticlQ"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/oGqm34dOutHl1FlSqHjSUbEgKRY.jpg",
                        isLogoIncluded: false
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/htOpALyz5x1Ee7YuZpaRCPEwEuX.jpg",
                        isLogoIncluded: true
                    },
                    logo: null,
                    keywords: [
                        "romantic comedy"
                    ],
                    cast: [
                        "Akshay Kumar",
                        "Suniel Shetty",
                        "Katrina Kaif"
                    ],
                    ageRating: "U/A 12+", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Hera Pheri",
                    desc: "Three unemployed men find the answer to all their money problems when they receive a call from a kidnapper. However, things do not go as planned.",
                    genres: [
                        "Comedy",
                        "Crime"
                    ],
                    runtime: 156,
                    year: "2000",
                    isMostLiked: false,
                    videos: {},
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/uAqUozzKrNvDwqRHSVVxKvByAqK.jpg",
                        isLogoIncluded: true
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/xatkK8bwedM0rlYKEkWHNLIXRcV.jpg",
                        isLogoIncluded: true
                    },
                    logo: null,
                    keywords: [
                        "classic bollywood"
                    ],
                    cast: [
                        "Akshay Kumar",
                        "Suniel Shetty",
                        "Paresh Rawal"
                    ],
                    ageRating: "U-Rated", type: "movie", backdropNoLang: ""
                },
                {
                    title: "The Hangover",
                    desc: "When three friends finally come to after a raucous night of bachelor-party revelry, they find a baby in the closet and a tiger in the bathroom. But they can't seem to locate their best friend, Doug – ...",
                    genres: [
                        "Comedy"
                    ],
                    runtime: 100,
                    year: "2009",
                    isMostLiked: true,
                    videos: {
                        clip: "JJAaggL_WLk",
                        trailer: "tlize92ffnY"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/cyEAb9it7G9Atwc5ldUZ0F0iN7c.jpg",
                        isLogoIncluded: true
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/uluhlXubGu1VxU63X9VHCLWDAYP.jpg",
                        isLogoIncluded: true
                    },
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/zGE94lRWDqIB84MSnG8lPxHfSS.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "blackjack",
                        "stag night",
                        "lost weekend"
                    ],
                    cast: [
                        "Bradley Cooper",
                        "Ed Helms",
                        "Zach Galifianakis"
                    ],
                    ageRating: "A-Rated", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Zombieland",
                    desc: "Columbus has made a habit of running from what scares him. Tallahassee doesn't have fears. If he did, he'd kick their ever-living ass. In a world overrun by zombies, these two are perfectly evolved su...",
                    genres: [
                        "Comedy",
                        "Horror"
                    ],
                    runtime: 88,
                    year: "2009",
                    isMostLiked: true,
                    videos: {
                        trailer: "8m9EVP8X7N8",
                        teaser: "NwxrW2nhpSE"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/oejJhB9YMtXYZrV5ZKWoUOEboAi.jpg",
                        isLogoIncluded: true
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/dUkAmAyPVqubSBNRjRqCgHggZcK.jpg",
                        isLogoIncluded: true
                    },
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/8efBqrjLFjJhgNQGoupKQPEyqBU.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "circus",
                        "blood splatter",
                        "gore"
                    ],
                    cast: [
                        "Jesse Eisenberg",
                        "Woody Harrelson",
                        "Emma Stone"
                    ],
                    ageRating: "A-Rated", type: "movie", backdropNoLang: ""
                },
                {
                    title: "21 Jump Street",
                    desc: "When cops Schmidt and Jenko join the secret Jump Street unit, they use their youthful appearances to go under cover as high-school students. They trade in their guns and badges for backpacks, and set ...",
                    genres: [
                        "Action",
                        "Comedy",
                        "Crime"
                    ],
                    runtime: 109,
                    year: "2012",
                    isMostLiked: false,
                    videos: {
                        clip: "OkUByJC4JaU",
                        trailer: "BjRs18rV1FI",
                        teaser: "LG6w5_DXni4"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/q4Vx8nKJbxCXGiXK1NQeOuqUx44.jpg",
                        isLogoIncluded: true
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/8v3Sqv9UcIUC4ebmpKWROqPBINZ.jpg",
                        isLogoIncluded: true
                    },
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/yDmni0jAsYYx207ixtEhCLoHtRq.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "drug dealer",
                        "high school",
                        "investigation"
                    ],
                    cast: [
                        "Jonah Hill",
                        "Channing Tatum",
                        "Brie Larson"
                    ],
                    ageRating: "A-Rated", type: "movie", backdropNoLang: ""
                },
                {
                    title: "The Mask",
                    desc: "When timid bank clerk Stanley Ipkiss discovers a magical mask containing the spirit of the Norse god Loki, his entire life changes. While wearing the mask, Ipkiss becomes a supernatural playboy exudin...",
                    genres: [
                        "Romance",
                        "Comedy",
                        "Crime"
                    ],
                    runtime: 101,
                    year: "1994",
                    isMostLiked: true,
                    videos: {
                        clip: "zHF_LiQEOBg",
                        trailer: "lcjN7zkgELM"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/CwW8naagf9Ogo6MehHCe8z4B4.jpg",
                        isLogoIncluded: true
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/xbbXp9px4o8Oe7IbGd0yIbla8mZ.jpg",
                        isLogoIncluded: true
                    },
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/kq8OuvY9KVnyfwKrcmCnIkNvkPC.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "dual identity",
                        "bank",
                        "superhero"
                    ],
                    cast: [
                        "Jim Carrey",
                        "Peter Greene",
                        "Cameron Diaz"
                    ],
                    ageRating: "U/A 13+", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Ghostbusters",
                    desc: "After losing their academic posts at a prestigious university, a team of parapsychologists goes into business as proton-pack-toting \"ghostbusters\" who exterminate ghouls, hobgoblins and supernatural p...",
                    genres: [
                        "Comedy",
                        "Fantasy"
                    ],
                    runtime: 107,
                    year: "1984",
                    isMostLiked: true,
                    videos: {
                        clip: "arq2hfbWGcE",
                        trailer: "aQF9XnP3uKg"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/uUMiW6LbRyRWWPcglinQugBJWhF.jpg",
                        isLogoIncluded: true
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/7E8nLijS9AwwUEPu2oFYOVKhdFA.jpg",
                        isLogoIncluded: true
                    },
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/zZaNFDIURV51vMsNYGKc7Uguymj.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "new york city",
                        "library",
                        "supernatural"
                    ],
                    cast: [
                        "Bill Murray",
                        "Dan Aykroyd",
                        "Sigourney Weaver"
                    ],
                    ageRating: "U/A 7+", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Mean Girls",
                    desc: "Cady Heron is a hit with The Plastics, the A-list girl clique at her new school, until she makes the mistake of falling for Aaron Samuels, the ex-boyfriend of alpha Plastic Regina George.",
                    genres: [
                        "Drama",
                        "Comedy"
                    ],
                    runtime: 97,
                    year: "2004",
                    isMostLiked: true,
                    videos: {
                        clip: "PiQnJyBbx_I",
                        trailer: "EMzEmGfTuM4",
                        teaser: "Ar5u4T15e6U"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/whhfIvNBu2LFAYpXMqYIgHi3WVa.jpg",
                        isLogoIncluded: true
                    },
                    poster: {
                        image: "https://image.tmdb.org/t/p/w400/fXm3YKXAEjx7d2tIWDg9TfRZtsU.jpg",
                        isLogoIncluded: true
                    },
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/9DzkFuYgntKt53OnJB3dk0HKo7H.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "illinois",
                        "female friendship",
                        "bullying"
                    ],
                    cast: [
                        "Lindsay Lohan",
                        "Rachel McAdams",
                        "Lizzy Caplan"
                    ],
                    ageRating: "U/A 13+", type: "movie", backdropNoLang: ""
                }
            ],
            shows: []
        },
        family: {
            tabs: ['home', 'show'],
            title: "Family Favorites",
            showTitle: "Family TV Shows",
            movies: [
                {
                    title: "Dangal",
                    desc: "Dangal is an extraordinary true story based on the life of Mahavir Singh and his two daughters, Geeta and Babita Phogat. The film traces the inspirational journey of a father who trains his daughters ...",
                    genres: [
                        "Drama",
                        "Family",
                        "Comedy"
                    ],
                    runtime: 161,
                    year: "2016",
                    isMostLiked: false,
                    videos: {
                        trailer: "x_7YlGv9u1g"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/nUObVoksSWpBUlX80wN1PNq8iiK.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/w9Bxolh7pQY8SfNPPpuKahQhxkY.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "small town",
                        "strong woman",
                        "sports"
                    ],
                    cast: [
                        "Aamir Khan",
                        "Fatima Sana Shaikh",
                        "Sanya Malhotra"
                    ],
                    ageRating: "U/A 7+", type: "movie", backdropNoLang: ""
                },
                {
                    title: "English Vinglish",
                    desc: "In the United States for the first time, an Indian housewife with a limited command of English turns Manhattan into her personal language school.",
                    genres: [
                        "Comedy",
                        "Drama",
                        "Family"
                    ],
                    runtime: 134,
                    year: "2012",
                    isMostLiked: false,
                    videos: {
                        trailer: "8dWir9Q_Vek"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/xKlD7JpdfHRpLwGjztrCe9RPjlP.jpg",
                        isLogoIncluded: false
                    },
                    poster: null,
                    logo: null,
                    keywords: [
                        "classroom",
                        "housewife",
                        "speech"
                    ],
                    cast: [
                        "Sridevi",
                        "Adil Hussain",
                        "Mehdi Nebbou"
                    ],
                    ageRating: "U/A 7+", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Kapoor & Sons",
                    desc: "Returning home to visit their ill grandfather, two estranged brothers must confront their unresolved rivalry while their parents’ marriage frays.",
                    genres: [
                        "Drama",
                        "Romance",
                        "Comedy"
                    ],
                    runtime: 137,
                    year: "2016",
                    isMostLiked: false,
                    videos: {},
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/xuF6qhtc7Q79Fh2aJxRJAX3YgbE.jpg",
                        isLogoIncluded: false
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/agrUqFYl7tHDVe6sjCGUCJFjjVy.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "coming out",
                        "loneliness"
                    ],
                    cast: [
                        "Sidharth Malhotra",
                        "Fawad Khan",
                        "Alia Bhatt"
                    ],
                    ageRating: "U/A 12+", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Welcome",
                    desc: "Dubai-based criminal don Uday takes it upon himself to try and get his half-sister Sanjana married - in vain, as no one wants to be associated with a crime family. Uday's associate and best friend Maj...",
                    genres: [
                        "Comedy",
                        "Romance",
                        "Crime"
                    ],
                    runtime: 150,
                    year: "2007",
                    isMostLiked: false,
                    videos: {
                        trailer: "QJCMdzuLG0I"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/68Vk0LOkefFJc97n5PK1Ow280hZ.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/qUvcVZL0CRpYSyg8O33QtwJzaeh.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "Not Available"
                    ],
                    cast: [
                        "Akshay Kumar",
                        "Katrina Kaif",
                        "Anil Kapoor"
                    ],
                    ageRating: "U/A 12+", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Golmaal – Fun Unlimited",
                    desc: "Four runaway cons take shelter in a bungalow owned by an old blind couple.",
                    genres: [
                        "Comedy",
                        "Family"
                    ],
                    runtime: 150,
                    year: "2006",
                    isMostLiked: false,
                    videos: {
                        trailer: "A1-PEkuuWi8"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/kmOwJaGsvpSQLdu4PqNvDRQXHxx.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/wsQ4VjBGUe34lxEor382Xx2DHPC.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "stupidity",
                        "dream girl"
                    ],
                    cast: [
                        "Ajay Devgn",
                        "Arshad Warsi",
                        "Sharman Joshi"
                    ],
                    ageRating: "U/A 12+", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Bhoothnath",
                    desc: "Banku, his mother, Anjali Sharma and father move in to their new house -- the Nath villa, unaware of the fact that the house is inhabited by a ghost. It is learnt the ghost is not too happy with his n...",
                    genres: [
                        "Family",
                        "Comedy"
                    ],
                    runtime: 151,
                    year: "2008",
                    isMostLiked: false,
                    videos: {},
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/kozAnxdmJLgAux008LztplzhHy1.jpg",
                        isLogoIncluded: false
                    },
                    poster: null,
                    logo: null,
                    keywords: [
                        "flashback",
                        "ghost"
                    ],
                    cast: [
                        "Amitabh Bachchan",
                        "Aman Siddiqui",
                        "Juhi Chawla Mehta"
                    ],
                    ageRating: "U-Rated", type: "movie", backdropNoLang: ""
                }
            ],
            shows: [
                {
                    title: "Anne with an E",
                    desc: "A coming-of-age story about an outsider who, against all odds and numerous challenges, fights for love and acceptance and for her place in the world. The series centers on a young orphaned girl in the...",
                    genres: [
                        "Drama",
                        "Family"
                    ],
                    totalSeasons: 3,
                    totalEpisodes: 27,
                    year: "2017",
                    isMostLiked: true,
                    videos: {
                        trailer: "S5qJXYNNINo"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/qAdLBKwdd6U7CLJVzo1pk7BNIUu.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/gtqNjjM2wXmTnbTvMP3xYAXaLrU.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "canada",
                        "friendship",
                        "unrequited love"
                    ],
                    cast: [
                        "Amybeth McNulty",
                        "Geraldine James",
                        "R.H. Thomson"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "A young orphan's arrival in Avonlea affects the hearts and minds of everyone she meets, beginning with the pair of aging siblings who take her in.",
                            posterPath: "https://image.tmdb.org/t/p/w400/lqoGVD3FCahM9faB2SWdpae9Ejt.jpg",
                            totalEpisode: 7,
                            year: "2017"
                        },
                        {
                            name: "Season 2",
                            desc: "Anne's beloved world of Green Gables becomes a much bigger place, with new faces and heartfelt lessons about love, loss and growing up.",
                            posterPath: "https://image.tmdb.org/t/p/w400/7bjv63bF07F2SiN6PoJHYqmYRoR.jpg",
                            totalEpisode: 10,
                            year: "2018"
                        },
                        {
                            name: "Season 3",
                            desc: "A coming-of-age story about an outsider who, against all odds and numerous challenges, fights for love and acceptance and for her place in the world. The series centers on a young orphaned girl in the...",
                            posterPath: "https://image.tmdb.org/t/p/w400/hSjv6QkGknuJrB8LTjYFv5SPjrr.jpg",
                            totalEpisode: 10,
                            year: "2019"
                        }
                    ],
                    ageRating: "U-Rated", type: "show", backdropNoLang: ""
                },
                {
                    title: "Malcolm in the Middle",
                    desc: "A gifted young teen tries to survive life with his dimwitted, dysfunctional family.",
                    genres: [
                        "Family",
                        "Comedy",
                        "Drama"
                    ],
                    totalSeasons: 7,
                    totalEpisodes: 151,
                    year: "2000",
                    isMostLiked: true,
                    videos: {
                        clip: "nYof_60IJUc",
                        trailer: "o6gPg-P5FPg"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/yboiDe8YZ1c5FfjUEUBOq4aj9FJ.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/7aXcNVcQpKYkz07j6pmwyBBiRG3.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "middle class",
                        "social satire",
                        "family"
                    ],
                    cast: [
                        "Frankie Muniz",
                        "Jane Kaczmarek",
                        "Bryan Cranston"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "A gifted young teen tries to survive life with his dimwitted, dysfunctional family.",
                            posterPath: "https://image.tmdb.org/t/p/w400/uRiJcfOTpqMKxp6EHVCXCTRbh0d.jpg",
                            totalEpisode: 16,
                            year: "2000"
                        },
                        {
                            name: "Season 2",
                            desc: "A gifted young teen tries to survive life with his dimwitted, dysfunctional family.",
                            posterPath: "https://image.tmdb.org/t/p/w400/AtuQTd80P5SoaqT0BTh6yyM1XYZ.jpg",
                            totalEpisode: 25,
                            year: "2000"
                        },
                        {
                            name: "Season 3",
                            desc: "A gifted young teen tries to survive life with his dimwitted, dysfunctional family.",
                            posterPath: "https://image.tmdb.org/t/p/w400/tQGXeQZwQE3cP1TtTbDoYsDA8tJ.jpg",
                            totalEpisode: 22,
                            year: "2001"
                        },
                        {
                            name: "Season 4",
                            desc: "A gifted young teen tries to survive life with his dimwitted, dysfunctional family.",
                            posterPath: "https://image.tmdb.org/t/p/w400/ohRcqZ66lmmU8YEkAW5l3JhVPQZ.jpg",
                            totalEpisode: 22,
                            year: "2002"
                        },
                        {
                            name: "Season 5",
                            desc: "A gifted young teen tries to survive life with his dimwitted, dysfunctional family.",
                            posterPath: "https://image.tmdb.org/t/p/w400/dF9Q0J90Lfswj30OHPOySZPwAg0.jpg",
                            totalEpisode: 22,
                            year: "2003"
                        },
                        {
                            name: "Season 6",
                            desc: "A gifted young teen tries to survive life with his dimwitted, dysfunctional family.",
                            posterPath: "https://image.tmdb.org/t/p/w400/eJv11VBqzt2WJzK8xBVVD0YwjhC.jpg",
                            totalEpisode: 22,
                            year: "2004"
                        },
                        {
                            name: "Season 7",
                            desc: "A gifted young teen tries to survive life with his dimwitted, dysfunctional family.",
                            posterPath: "https://image.tmdb.org/t/p/w400/k1LxfboalBatsZwiTbEyuYNGU4f.jpg",
                            totalEpisode: 22,
                            year: "2005"
                        }
                    ],
                    ageRating: "U-Rated", type: "show", backdropNoLang: ""
                },
                {
                    title: "Young Sheldon",
                    desc: "The early life of child genius Sheldon Cooper, later seen in The Big Bang Theory.",
                    genres: [
                        "Comedy",
                        "Family",
                        "Drama"
                    ],
                    totalSeasons: 7,
                    totalEpisodes: 141,
                    year: "2017",
                    isMostLiked: true,
                    videos: {
                        trailer: "FStMMcj-RiA"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/4z7KWMWFcLWbYRteOLLKTwsT2vz.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/phbaDwOu5BKrWpN3FiKgFRxhkn4.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "prequel",
                        "school",
                        "sibling"
                    ],
                    cast: [
                        "Iain Armitage",
                        "Zoe Perry",
                        "Lance Barber"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "The early life of child genius Sheldon Cooper, later seen in The Big Bang Theory.",
                            posterPath: "https://image.tmdb.org/t/p/w400/grTqqLe63lMVx7SbQmRWf8RqvmO.jpg",
                            totalEpisode: 22,
                            year: "2017"
                        },
                        {
                            name: "Season 2",
                            desc: "The early life of child genius Sheldon Cooper, later seen in The Big Bang Theory.",
                            posterPath: "https://image.tmdb.org/t/p/w400/sUO1qOI9ciwDVQz3RGdApkgi2LK.jpg",
                            totalEpisode: 22,
                            year: "2018"
                        },
                        {
                            name: "Season 3",
                            desc: "The early life of child genius Sheldon Cooper, later seen in The Big Bang Theory.",
                            posterPath: "https://image.tmdb.org/t/p/w400/fx01LriOvbCFuHfK3mO9pJYBpH4.jpg",
                            totalEpisode: 21,
                            year: "2019"
                        },
                        {
                            name: "Season 4",
                            desc: "The early life of child genius Sheldon Cooper, later seen in The Big Bang Theory.",
                            posterPath: "https://image.tmdb.org/t/p/w400/bmoK6oFSws0dlzMCim4iz7e9pzP.jpg",
                            totalEpisode: 18,
                            year: "2020"
                        },
                        {
                            name: "Season 5",
                            desc: "The early life of child genius Sheldon Cooper, later seen in The Big Bang Theory.",
                            posterPath: "https://image.tmdb.org/t/p/w400/5Gf83qYgLY8Qivn7jpv5nxxZPu6.jpg",
                            totalEpisode: 22,
                            year: "2021"
                        },
                        {
                            name: "Season 6",
                            desc: "The early life of child genius Sheldon Cooper, later seen in The Big Bang Theory.",
                            posterPath: "https://image.tmdb.org/t/p/w400/MpdROQ5XxQqOMKhJlLUf7PTxIC.jpg",
                            totalEpisode: 22,
                            year: "2022"
                        },
                        {
                            name: "Season 7",
                            desc: "The early life of child genius Sheldon Cooper, later seen in The Big Bang Theory.",
                            posterPath: "https://image.tmdb.org/t/p/w400/teajZtLOzeKpbc7B4tOWFHF9MSa.jpg",
                            totalEpisode: 14,
                            year: "2024"
                        }
                    ],
                    ageRating: "U-Rated", type: "show", backdropNoLang: ""
                },
                {
                    title: "A Series of Unfortunate Events",
                    desc: "The orphaned Baudelaire children face trials, tribulations and the evil Count Olaf, all in their quest to uncover the secret of their parents' death.",
                    genres: [
                        "Action & Adventure",
                        "Family",
                        "Comedy"
                    ],
                    totalSeasons: 3,
                    totalEpisodes: 25,
                    year: "2017",
                    isMostLiked: false,
                    videos: {
                        trailer: "wHgq9BgJ9L4",
                        teaser: "5eXeMKPxZFo"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/GPS9OxlGXKm93sD7h1M9DOpazL.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/ewr9YgBxxrYA0jRRshUW44DrYfv.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "orphan",
                        "reboot",
                        "orphan siblings"
                    ],
                    cast: [
                        "Neil Patrick Harris",
                        "Patrick Warburton",
                        "Malina Weissman"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "The orphaned Baudelaire children face trials, tribulations and the evil Count Olaf, all in their quest to uncover the secret of their parents' death.",
                            posterPath: "https://image.tmdb.org/t/p/w400/sTtt875W3YbBnPooiPPmCvHienS.jpg",
                            totalEpisode: 8,
                            year: "2017"
                        },
                        {
                            name: "Season 2",
                            desc: "The orphaned Baudelaire children face trials, tribulations and the evil Count Olaf, all in their quest to uncover the secret of their parents' death.",
                            posterPath: "https://image.tmdb.org/t/p/w400/2CnwBCsgURi1Oa4hi24NcrzB321.jpg",
                            totalEpisode: 10,
                            year: "2018"
                        },
                        {
                            name: "Season 3",
                            desc: "The orphaned Baudelaire children face trials, tribulations and the evil Count Olaf, all in their quest to uncover the secret of their parents' death.",
                            posterPath: "https://image.tmdb.org/t/p/w400/o6fLLiSlGcD0GRuIgcMOUXRC3zP.jpg",
                            totalEpisode: 7,
                            year: "2019"
                        }
                    ],
                    ageRating: "U-Rated", type: "show", backdropNoLang: ""
                },
                {
                    title: "iCarly",
                    desc: "Ten years after signing off of one of TV's most iconic shows, Carly, Spencer, and Freddie are back, navigating the next chapter of their lives, facing the uncertainties of life in their twenties.",
                    genres: [
                        "Comedy",
                        "Family"
                    ],
                    totalSeasons: 3,
                    totalEpisodes: 33,
                    year: "2021",
                    isMostLiked: false,
                    videos: {
                        clip: "T0inFIw2qPM",
                        trailer: "7NKVThOGLXc"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/8BWRxasuvCPR5ButUIPlyIMqxYK.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/hqqZ3NgK9wOuaUsTFB1IFv9V90i.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "website",
                        "reboot"
                    ],
                    cast: [
                        "Miranda Cosgrove",
                        "Jerry Trainor",
                        "Nathan Kress"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "Ten years after signing off of one of TV's most iconic shows, Carly, Spencer, and Freddie are back, navigating the next chapter of their lives, facing the uncertainties of life in their twenties.",
                            posterPath: "https://image.tmdb.org/t/p/w400/2IActT7HwHKMyUlzcwYFKWXUiGR.jpg",
                            totalEpisode: 13,
                            year: "2021"
                        },
                        {
                            name: "Season 2",
                            desc: "Season two picks up right after the first season ended, with Carly refocusing her attention on her friends and family following her romantic complications, all while working to boost her revived web c...",
                            posterPath: "https://image.tmdb.org/t/p/w400/fb1xE9XHRwX9FK7UiVJDepQKo26.jpg",
                            totalEpisode: 10,
                            year: "2022"
                        },
                        {
                            name: "Season 3",
                            desc: "In season three, adulting continues to be complicated for Carly and her friends. Carly and Freddie struggle to redefine their relationship, aka #Creddie. Spencer seeks a return to his roots, and Harpe...",
                            posterPath: "https://image.tmdb.org/t/p/w400/erd0VwcjJWGI2UFkYmQCeTxBFn7.jpg",
                            totalEpisode: 10,
                            year: "2023"
                        }
                    ],
                    ageRating: "U-Rated", type: "show", backdropNoLang: ""
                },
                {
                    title: "Planet Earth II",
                    desc: "David Attenborough presents a documentary series exploring how animals meet the challenges of surviving in the most iconic habitats on earth.",
                    genres: [
                        "Documentary",
                        "Family"
                    ],
                    totalSeasons: 1,
                    totalEpisodes: 6,
                    year: "2016",
                    isMostLiked: false,
                    videos: {
                        clip: "C0D1cR5hPN8",
                        trailer: "kAphgHhlteM"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/9pcH62Pzrqh4excDCuXAs4RFJgV.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/6KdshSYx3Ml4V01nJwJerq93VnO.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "ocean",
                        "sea",
                        "mountain"
                    ],
                    cast: [
                        "David Attenborough"
                    ],
                    seasons: [
                        {
                            name: "Miniseries",
                            desc: "David Attenborough presents a documentary series exploring how animals meet the challenges of surviving in the most iconic habitats on earth.",
                            posterPath: "https://image.tmdb.org/t/p/w400/tUKomxy50suT4MyxjYfOJDkZUq3.jpg",
                            totalEpisode: 6,
                            year: "2016"
                        }
                    ],
                    ageRating: "U-Rated", type: "show", backdropNoLang: ""
                },
                {
                    title: "Girl Meets World",
                    desc: "The adventures of relatable and adventurous Riley Matthews, the tween daughter of Cory and Topanga Matthews, and her bold best friend Maya as they traverse the twists and turns of teenage years at Man...",
                    genres: [
                        "Comedy",
                        "Family"
                    ],
                    totalSeasons: 3,
                    totalEpisodes: 71,
                    year: "2014",
                    isMostLiked: false,
                    videos: {
                        trailer: "EYZhGgc63II"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/kPOTA3dQ0mc93ENdstLXBTJNf0l.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/fbUex5kWgwyX3cmwml5RrYfWMB5.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "new york city",
                        "female friendship",
                        "high school"
                    ],
                    cast: [
                        "Rowan Blanchard",
                        "Sabrina Carpenter",
                        "Peyton Meyer"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "The adventures of relatable and adventurous Riley Matthews, the tween daughter of Cory and Topanga Matthews, and her bold best friend Maya as they traverse the twists and turns of teenage years at Man...",
                            posterPath: "https://image.tmdb.org/t/p/w400/xhU1KkPtM9fpE1HKpdghX0VlyYF.jpg",
                            totalEpisode: 20,
                            year: "2014"
                        },
                        {
                            name: "Season 2",
                            desc: "The adventures of relatable and adventurous Riley Matthews, the tween daughter of Cory and Topanga Matthews, and her bold best friend Maya as they traverse the twists and turns of teenage years at Man...",
                            posterPath: "https://image.tmdb.org/t/p/w400/p6kQzqvzJj1e8Nlg4YT8nSk39Jg.jpg",
                            totalEpisode: 30,
                            year: "2015"
                        },
                        {
                            name: "Season 3",
                            desc: "The adventures of relatable and adventurous Riley Matthews, the tween daughter of Cory and Topanga Matthews, and her bold best friend Maya as they traverse the twists and turns of teenage years at Man...",
                            posterPath: "https://image.tmdb.org/t/p/w400/oU8SXLKORjuSWlszJTFe7GG8r9n.jpg",
                            totalEpisode: 21,
                            year: "2016"
                        }
                    ],
                    ageRating: "U-Rated", type: "show", backdropNoLang: ""
                },
                {
                    title: "The Thundermans",
                    desc: "Meet The Thundermans, a typical suburban family that happens to have astounding superpowers. At the center of the action are the 14-year-old Thunderman twins, who share the same bathroom, the same sch...",
                    genres: [
                        "Action & Adventure",
                        "Comedy",
                        "Family"
                    ],
                    totalSeasons: 4,
                    totalEpisodes: 98,
                    year: "2013",
                    isMostLiked: true,
                    videos: {
                        trailer: "-YgTXpQfJZI"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/jPJby7n4OMjtkVXVnrmRP3RK6Yq.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/Ecze1PWTT5CdpvMqlioLzcBky.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "superhero",
                        "supervillain",
                        "teen superhero"
                    ],
                    cast: [
                        "Kira Kosarin",
                        "Jack Griffo",
                        "Addison Riecke"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "Meet The Thundermans, a typical suburban family that happens to have astounding superpowers. At the center of the action are the 14-year-old Thunderman twins, who share the same bathroom, the same sch...",
                            posterPath: "https://image.tmdb.org/t/p/w400/ujWcVjzOjwJFMIBtRXoPhvkttUO.jpg",
                            totalEpisode: 20,
                            year: "2013"
                        },
                        {
                            name: "Season 2",
                            desc: "Meet The Thundermans, a typical suburban family that happens to have astounding superpowers. At the center of the action are the 14-year-old Thunderman twins, who share the same bathroom, the same sch...",
                            posterPath: "https://image.tmdb.org/t/p/w400/8OG9s7eys3KaDkF2D4oKvzcYeei.jpg",
                            totalEpisode: 24,
                            year: "2014"
                        },
                        {
                            name: "Season 3",
                            desc: "Meet The Thundermans, a typical suburban family that happens to have astounding superpowers. At the center of the action are the 14-year-old Thunderman twins, who share the same bathroom, the same sch...",
                            posterPath: "https://image.tmdb.org/t/p/w400/p5jDhSJbzSyURRlGDqpvk3gF3lb.jpg",
                            totalEpisode: 25,
                            year: "2015"
                        },
                        {
                            name: "Season 4",
                            desc: "Meet The Thundermans, a typical suburban family that happens to have astounding superpowers. At the center of the action are the 14-year-old Thunderman twins, who share the same bathroom, the same sch...",
                            posterPath: "https://image.tmdb.org/t/p/w400/1tIYEyjK1LLcX0jYK3ZouT7601o.jpg",
                            totalEpisode: 29,
                            year: "2016"
                        }
                    ],
                    ageRating: "U-Rated", type: "show", backdropNoLang: ""
                },
                {
                    title: "Fuller House",
                    desc: "D.J. Tanner-Fuller is a widow and mother of three. Things become too much to handle, so she asks for help from her sister Stephanie and her best-friend Kimmy.",
                    genres: [
                        "Family",
                        "Comedy"
                    ],
                    totalSeasons: 5,
                    totalEpisodes: 75,
                    year: "2016",
                    isMostLiked: false,
                    videos: {
                        clip: "_wBTSss644w",
                        trailer: "_n3MhMY7EgQ",
                        teaser: "N9y61eSRPM8"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/hlMZ8jxp6a1lRdrCGUg4omtrvMG.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/eShV4PTVGlfplO5wglSsCWf9oBR.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "friends",
                        "family",
                        "cliché"
                    ],
                    cast: [
                        "Jodie Sweetin",
                        "Candace Cameron Bure",
                        "Andrea Barber"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "D.J. Tanner-Fuller is a widow and mother of three. Things become too much to handle, so she asks for help from her sister Stephanie and her best-friend Kimmy.",
                            posterPath: "https://image.tmdb.org/t/p/w400/zruCf7X7i05nH0greNkcYouKYAW.jpg",
                            totalEpisode: 13,
                            year: "2016"
                        },
                        {
                            name: "Season 2",
                            desc: "D.J. Tanner-Fuller is a widow and mother of three. Things become too much to handle, so she asks for help from her sister Stephanie and her best-friend Kimmy.",
                            posterPath: "https://image.tmdb.org/t/p/w400/nuDZ2VgEaYTDCD0Q6x2QxR3HmLb.jpg",
                            totalEpisode: 13,
                            year: "2016"
                        },
                        {
                            name: "Season 3",
                            desc: "With teen romance, family barbecues, a wedding abroad and (just maybe?) a brand-new baby, it's shaping up to be the fullest summer yet.",
                            posterPath: "https://image.tmdb.org/t/p/w400/iGJXsMzJxnXzChlVgjOCFpfnDhd.jpg",
                            totalEpisode: 18,
                            year: "2017"
                        },
                        {
                            name: "Season 4",
                            desc: "The Tanner-Fuller-Gibblers are back with big laughs. DJ and Steve rekindle their flame -- and a new member of the family is on the way!",
                            posterPath: "https://image.tmdb.org/t/p/w400/8HocWv8tpTb0RRLlQo5Avno81P9.jpg",
                            totalEpisode: 13,
                            year: "2018"
                        },
                        {
                            name: "Season 5",
                            desc: "D.J. Tanner-Fuller is a widow and mother of three. Things become too much to handle, so she asks for help from her sister Stephanie and her best-friend Kimmy.",
                            posterPath: "https://image.tmdb.org/t/p/w400/kfKX76nsUfIbKOA4wSE9Uedv7qL.jpg",
                            totalEpisode: 18,
                            year: "2019"
                        }
                    ],
                    ageRating: "U-Rated", type: "show", backdropNoLang: ""
                },
                {
                    title: "Man Vs Bee",
                    desc: "A man finds himself at war with a bee while house-sitting a luxurious mansion. Who will win, and what irreparable damage will be done in the process?",
                    genres: [
                        "Comedy",
                        "Family"
                    ],
                    totalSeasons: 1,
                    totalEpisodes: 9,
                    year: "2022",
                    isMostLiked: false,
                    videos: {
                        trailer: "YQ1vN_91KO0"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/diMdrlQbx4TRBSJCx375Wp8jKED.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/eB1OHTzEIYNPGMfnNVQnCaQKEl2.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "slapstick comedy",
                        "house-sitting"
                    ],
                    cast: [
                        "Rowan Atkinson"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "A man finds himself at war with a bee while house-sitting a luxurious mansion. Who will win, and what irreparable damage will be done in the process?",
                            posterPath: "https://image.tmdb.org/t/p/w400/33DwaPZGAaBItjwFXT7Tp8ZTMo2.jpg",
                            totalEpisode: 9,
                            year: "2022"
                        }
                    ],
                    ageRating: "U-Rated", type: "show", backdropNoLang: ""
                },
                {
                    title: "Percy Jackson and the Olympians",
                    desc: "Percy Jackson is on a dangerous quest. Outrunning monsters and outwitting gods, he must journey across America to return Zeus' master bolt and stop an all-out war. With the help of his quest mates Ann...",
                    genres: [
                        "Action & Adventure",
                        "Sci-Fi & Fantasy",
                        "Drama"
                    ],
                    totalSeasons: 2,
                    totalEpisodes: 8,
                    year: "2023",
                    isMostLiked: true,
                    videos: {
                        trailer: "YbBAb0FxDbU",
                        teaser: "bzHMAXqFFvc"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/jQlKHcTTTmqnwmMS4VnkIyxdc6M.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/iYxjFCbqSJyDDmAytShRw2n5ZgF.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "greek mythology",
                        "camp",
                        "demigod"
                    ],
                    cast: [
                        "Walker Scobell",
                        "Leah Sava Jeffries",
                        "Aryan Simhadri"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "Percy Jackson is on a dangerous quest. Outrunning monsters and outwitting gods, he must journey across America to return Zeus' master bolt and stop an all-out war. With the help of his quest mates Ann...",
                            posterPath: "https://image.tmdb.org/t/p/w400/c9loCTYWZpzYBTJBvE3DtRw4DBb.jpg",
                            totalEpisode: 8,
                            year: "2023"
                        },
                        {
                            name: "Season 2",
                            desc: "Percy Jackson is on a dangerous quest. Outrunning monsters and outwitting gods, he must journey across America to return Zeus' master bolt and stop an all-out war. With the help of his quest mates Ann...",
                            posterPath: "https://image.tmdb.org/t/p/w400/g3GtEUmAfGWBE6Vt80ef0yptVKX.jpg",
                            totalEpisode: "Not Disclosed Yet",
                            year: "202- (Unannounced)"
                        }
                    ],
                    ageRating: "U-Rated", type: "show", backdropNoLang: ""
                },
                {
                    title: "My Wife and Kids",
                    desc: "Michael Kyle is a loving husband and modern-day patriarch who rules his household with a unique and distinct parenting style. As he teaches his three children some of life's lessons, he does so with h...",
                    genres: [
                        "Comedy",
                        "Family",
                        "Drama"
                    ],
                    totalSeasons: 5,
                    totalEpisodes: 123,
                    year: "2001",
                    isMostLiked: true,
                    videos: {
                        trailer: "IE42PRc_VxM"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/sFaoFkVjjn8TflzFY9FvXSFLk6r.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: null,
                    keywords: [
                        "connecticut",
                        "family",
                        "sitcom"
                    ],
                    cast: [
                        "Damon Wayans",
                        "Tisha Campbell",
                        "George O. Gore II"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "Michael Kyle is a loving husband and modern-day patriarch who rules his household with a unique and distinct parenting style. As he teaches his three children some of life's lessons, he does so with h...",
                            posterPath: "https://image.tmdb.org/t/p/w400/xRzah3gUFqjSymMS3atFVwRYgiw.jpg",
                            totalEpisode: 11,
                            year: "2001"
                        },
                        {
                            name: "Season 2",
                            desc: "Michael Kyle is a loving husband and modern-day patriarch who rules his household with a unique and distinct parenting style. As he teaches his three children some of life's lessons, he does so with h...",
                            posterPath: "https://image.tmdb.org/t/p/w400/AJqoeqFW8Mos8TyVKthayZSric.jpg",
                            totalEpisode: 29,
                            year: "2001"
                        },
                        {
                            name: "Season 3",
                            desc: "Michael Kyle is a loving husband and modern-day patriarch who rules his household with a unique and distinct parenting style. As he teaches his three children some of life's lessons, he does so with h...",
                            posterPath: "https://image.tmdb.org/t/p/w400/h8l6WEgLWEj3qBWoJyRl2B3LOCc.jpg",
                            totalEpisode: 27,
                            year: "2002"
                        },
                        {
                            name: "Season 4",
                            desc: "Michael Kyle is a loving husband and modern-day patriarch who rules his household with a unique and distinct parenting style. As he teaches his three children some of life's lessons, he does so with h...",
                            posterPath: "https://image.tmdb.org/t/p/w400/v6AC0dDwfDYpoTD2XMlDyVB8AIm.jpg",
                            totalEpisode: 30,
                            year: "2003"
                        },
                        {
                            name: "Season 5",
                            desc: "Michael Kyle is a loving husband and modern-day patriarch who rules his household with a unique and distinct parenting style. As he teaches his three children some of life's lessons, he does so with h...",
                            posterPath: "https://image.tmdb.org/t/p/w400/uO1ATnJuyEVL5wONjkMnuV0T9w9.jpg",
                            totalEpisode: 26,
                            year: "2004"
                        }
                    ],
                    ageRating: "U-Rated", type: "show", backdropNoLang: ""
                }
            ]
        },
        feelGood: {
            tabs: ['home', 'movie', 'show'],
            title: "Feel Good Flicks",
            movieTitle: "Lighthearted Movies",
            showTitle: "Shows that feel good",
            movies: [
                {
                    title: "Zindagi Na Milegi Dobara",
                    desc: "Three friends who were inseparable in childhood decide to go on a three-week-long bachelor road trip to Spain, in order to re-establish their bond and explore thrilling adventures, before one of them ...",
                    genres: [
                        "Drama",
                        "Comedy",
                        "Romance"
                    ],
                    runtime: 154,
                    year: "2011",
                    isMostLiked: false,
                    videos: {
                        clip: "OmJ0ZzMeabg",
                        trailer: "FJrpcDgC3zU",
                        teaser: "5GAm2Y_3Gck"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/k2kYBF3PnBYXsqmT0E0Trb2Nz5D.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/vXmIGm7IovUL4CuWRVr5s3gDiYg.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "school friend",
                        "friendship",
                        "cheating"
                    ],
                    cast: [
                        "Hrithik Roshan",
                        "Abhay Deol",
                        "Farhan Akhtar"
                    ],
                    ageRating: "U/A 12+", type: "movie", backdropNoLang: ""
                },
                {
                    title: "PK",
                    desc: "A stranger in the city asks questions no one has asked before. Known only by his initials, the man's innocent questions and childlike curiosity take him on a journey of love, laughter and letting go.",
                    genres: [
                        "Comedy",
                        "Drama",
                        "Science Fiction"
                    ],
                    runtime: 153,
                    year: "2014",
                    isMostLiked: false,
                    videos: {
                        teaser: "SOXWc32k4zA"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/q1guAERQtxW8cprKv4sAdpVOyGU.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/BnDydsaEeMhywD5Snv6jN77ifh.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "friendship",
                        "society",
                        "christianity"
                    ],
                    cast: [
                        "Aamir Khan",
                        "Anushka Sharma",
                        "Saurabh Shukla"
                    ],
                    ageRating: "U/A 13+", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Yeh Jawaani Hai Deewani",
                    desc: "On a trekking trip, an introverted Naina falls for a charming ex-classmate, whose thirst for adventure drives them apart. Years later, their paths cross again.",
                    genres: [
                        "Romance",
                        "Comedy"
                    ],
                    runtime: 160,
                    year: "2013",
                    isMostLiked: false,
                    videos: {
                        trailer: "9kFDQkNmA5Y"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/fFm02S9rVSkp6cwHHFtIAcdCImX.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/2NeOmDPauwvkt1pEvtD6jxor7eS.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "friendship",
                        "romantic comedy",
                        "relationship"
                    ],
                    cast: [
                        "Ranbir Kapoor",
                        "Deepika Padukone",
                        "Aditya Roy Kapur"
                    ],
                    ageRating: "U/A 12+", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Chhichhore",
                    desc: "Following a group of friends from university as they progress into middle-age life and go their own separate ways.",
                    genres: [
                        "Romance",
                        "Comedy",
                        "Drama"
                    ],
                    runtime: 146,
                    year: "2019",
                    isMostLiked: false,
                    videos: {},
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/ncmZCsRHGKUODjiy0EtBwotdcpE.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: null,
                    keywords: [
                        "friendship",
                        "college",
                        "hostel life"
                    ],
                    cast: [
                        "Sushant Singh Rajput",
                        "Shraddha Kapoor",
                        "Tahir Raj Bhasin"
                    ],
                    ageRating: "U-Rated", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Love Aaj Kal",
                    desc: "Two lovers break up after they realize that their career goals are pulling them in different directions.",
                    genres: [
                        "Comedy",
                        "Drama",
                        "Romance"
                    ],
                    runtime: 128,
                    year: "2009",
                    isMostLiked: false,
                    videos: {
                        trailer: "M8pWvwzbDQo"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/qtkvhXdQJgyT4PcpPe6ry57gSJP.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/hYAv8dAQsEhh8rtq9HTjQKaN9nS.png",
                        isLogoIncluded: false
                    },
                    keywords: [
                        "friendship",
                        "urban setting",
                        "passage of time"
                    ],
                    cast: [
                        "Saif Ali Khan",
                        "Deepika Padukone",
                        "Rishi Kapoor"
                    ],
                    ageRating: "U/A 13+", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Golmaal 3",
                    desc: "Golmaal 3 highlights the story of hatred between two bunch of siblings within a family. The family that eats together prays together, lives together, and can't stand each other.",
                    genres: [
                        "Comedy",
                        "Family"
                    ],
                    runtime: 140,
                    year: "2010",
                    isMostLiked: false,
                    videos: {
                        trailer: "_lHzuN2wOAw",
                        teaser: "jWCbQjPJR2w"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/8W8FnDTG6YToiahlivjahbBunMN.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: null,
                    keywords: [
                        "friendship",
                        "stupidity",
                        "shot"
                    ],
                    cast: [
                        "Ajay Devgn",
                        "Arshad Warsi",
                        "Shreyas Talpade"
                    ],
                    ageRating: "U/A 7+", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Forrest Gump",
                    desc: "A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do. But despite all he has a...",
                    genres: [
                        "Comedy",
                        "Drama",
                        "Romance"
                    ],
                    runtime: 142,
                    year: "1994",
                    isMostLiked: true,
                    videos: {
                        clip: "vdtqSaJO-iM",
                        trailer: "m-btyJIYLyI"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/vdqthGdYhH4WzvmkGOcg0Um2Up7.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/kjUupFukLAkxM40so0YfRGY5aHo.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "vietnam war",
                        "vietnam veteran",
                        "mentally disabled"
                    ],
                    cast: [
                        "Tom Hanks",
                        "Robin Wright",
                        "Gary Sinise"
                    ],
                    ageRating: "U/A 13+", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Finding Nemo",
                    desc: "Nemo, an adventurous young clownfish, is unexpectedly taken from his Great Barrier Reef home to a dentist's office aquarium. It's up to his worrisome father Marlin and a friendly but forgetful fish Do...",
                    genres: [
                        "Animation",
                        "Family"
                    ],
                    runtime: 100,
                    year: "2003",
                    isMostLiked: true,
                    videos: {
                        clip: "0rF7-EyCo1U",
                        trailer: "ZS_8btMjx2U",
                        teaser: "-aAHfOQ7Rbo"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/v57RTjjH8G3khdSo1zp5oH1xgpc.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/gRweHvOoM7hKg3q8iExsXzAhsBv.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "sydney, australia",
                        "anthropomorphism",
                        "harbor"
                    ],
                    cast: [
                        "Albert Brooks",
                        "Ellen DeGeneres",
                        "Alexander Gould"
                    ],
                    ageRating: "U-Rated", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Toy Story",
                    desc: "Led by Woody, Andy's toys live happily in his room until Andy's birthday brings Buzz Lightyear onto the scene. Afraid of losing his place in Andy's heart, Woody plots against Buzz. But when circumstan...",
                    genres: [
                        "Animation",
                        "Adventure",
                        "Family"
                    ],
                    runtime: 81,
                    year: "1995",
                    isMostLiked: true,
                    videos: {
                        clip: "eceq_lHyxBc",
                        trailer: "CxwTLktovTU"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/39QpDXKtzVP4gkGxZIkjJNkOTWr.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/eX8LcW1zdjxvWNB5ZsZuhPO7NtP.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "rescue",
                        "friendship",
                        "mission"
                    ],
                    cast: [
                        "Tom Hanks",
                        "Tim Allen",
                        "Don Rickles"
                    ],
                    ageRating: "U-Rated", type: "movie", backdropNoLang: ""
                },
                {
                    title: "Green Book",
                    desc: "Tony Lip, a bouncer in 1962, is hired to drive pianist Don Shirley on a tour through the Deep South in the days when African Americans, forced to find alternate accommodations and services due to segr...",
                    genres: [
                        "Drama",
                        "History"
                    ],
                    runtime: 130,
                    year: "2018",
                    isMostLiked: true,
                    videos: {
                        clip: "fMJlovvXJOg",
                        trailer: "QkZxoko_HC0",
                        teaser: "fZgyKVFMQP4"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/4h6a5rfzUcLvpaGzhK6KxfmKbF0.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/teZDEtsuxhmeyuEyv6Ww5TrdHJi.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "friendship",
                        "southern usa",
                        "road trip"
                    ],
                    cast: [
                        "Viggo Mortensen",
                        "Mahershala Ali",
                        "Linda Cardellini"
                    ],
                    ageRating: "U/A 13+", type: "movie", backdropNoLang: ""
                },
                {
                    title: "The Simpsons Movie",
                    desc: "After Homer accidentally pollutes the town's water supply, Springfield is encased in a gigantic dome by the EPA and the Simpsons are declared fugitives.",
                    genres: [
                        "Animation",
                        "Comedy",
                        "Family"
                    ],
                    runtime: 87,
                    year: "2007",
                    isMostLiked: true,
                    videos: {
                        trailer: "XPG0MqIcby8",
                        teaser: "AB7VF980cEA"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/aCo3QHHiRkTGYiF7xBfxHyZAdiG.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/4WokaO2kyocAEJxAXvt8Wx64Fz5.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "garbage",
                        "pollution",
                        "quarantine"
                    ],
                    cast: [
                        "Dan Castellaneta",
                        "Julie Kavner",
                        "Nancy Cartwright"
                    ],
                    ageRating: "U/A 13+", type: "movie", backdropNoLang: ""
                },
                {
                    title: "The Lego Movie",
                    desc: "An ordinary Lego mini-figure, mistakenly thought to be the extraordinary MasterBuilder, is recruited to join a quest to stop an evil Lego tyrant from conquering the universe.",
                    genres: [
                        "Animation",
                        "Family",
                        "Adventure"
                    ],
                    runtime: 100,
                    year: "2014",
                    isMostLiked: true,
                    videos: {
                        trailer: "fZ_JOBCLF-I"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/7fIxH6SRxSHQ0lcOuMpLUryVIh.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/2kTDt0uOb4xQzvw1h8ZRufoXNCX.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "friendship",
                        "prophecy",
                        "superhero"
                    ],
                    cast: [
                        "Chris Pratt",
                        "Elizabeth Banks",
                        "Will Ferrell"
                    ],
                    ageRating: "U/A 7+", type: "movie", backdropNoLang: ""
                }
            ],
            shows: [
                {
                    title: "Hostel Daze",
                    desc: "Four naive and vulnerable wing-mates develop lasting bonds as they jostle hard to survive the first semester in a hostel. Peppered with absurdities, chutzpahs, clashes and debacles inherent to hostel ...",
                    genres: [
                        "Drama",
                        "Comedy"
                    ],
                    totalSeasons: 4,
                    totalEpisodes: 21,
                    year: "2019",
                    isMostLiked: false,
                    videos: {
                        trailer: "h1k6sGmHqoE"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/vtLO9GDTuMJNwkkUtWYQB7DmUlT.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/nHeIwoaat43UWYaSsGiQZdoBS3B.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "friendship",
                        "teenage crush",
                        "boys hostel"
                    ],
                    cast: [
                        "Luv Vispute",
                        "Shubham Gaur",
                        "Nikhil Vijay"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "Four wingmates, 1 Hostel, First Semester. 'Hostel Daze' tries to capture the hostel-culture (or its lack thereof) of an engineering college.",
                            posterPath: "https://image.tmdb.org/t/p/w400/jDt4wVvPzLtJoIMCCzHleVLlBbZ.jpg",
                            totalEpisode: 5,
                            year: "2019"
                        },
                        {
                            name: "Season 2",
                            desc: "6 friends enter their second year of college and dig deeper into the notorious universe of an Indian hostel. Hostel Daze Season 2 incorporates the second chapter of hostel-life in the lives of Ankit, ...",
                            posterPath: "https://image.tmdb.org/t/p/w400/rC14U6Q52O2vMD6CLczPpvG4ooJ.jpg",
                            totalEpisode: 4,
                            year: "2021"
                        },
                        {
                            name: "Season 3",
                            desc: "After experiencing the exhilarating freedom of the initial years and having had their fair share of fun in the past two years; Ankit, Akanksha, Jaat, Jhantoo, Nabomita and Chirag take on the third yea...",
                            posterPath: "https://image.tmdb.org/t/p/w400/5GZQ9BWhCifOe82PngY1xgqVEuG.jpg",
                            totalEpisode: 6,
                            year: "2022"
                        },
                        {
                            name: "Season 4",
                            desc: "The gang prepares themselves for the placement year and give it their all to seek a respectable job before bidding a final adieu to their hostel lives.",
                            posterPath: "https://image.tmdb.org/t/p/w400/x7BhAxMgWvgdlYyHuckY1ZiNhsE.jpg",
                            totalEpisode: 6,
                            year: "2023"
                        }
                    ],
                    ageRating: "U/A 13+", type: "show", backdropNoLang: ""
                },
                {
                    title: "FLAMES",
                    desc: "The story of a young romance unfolding as a chemical reaction. There is no such love as 'First Love'.",
                    genres: [
                        "Comedy",
                        "Drama"
                    ],
                    totalSeasons: 4,
                    totalEpisodes: 20,
                    year: "2018",
                    isMostLiked: false,
                    videos: {
                        trailer: "NkdCgjqQq7s",
                        teaser: "SmcvDoEuSfM"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/dQ6ooqChfzm5koKDG6sUEWagToT.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/903GpkKsFF3nRCyJu6CoVk33MaA.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "new love",
                        "friendship",
                        "romance"
                    ],
                    cast: [
                        "Ritwik Sahore",
                        "Tanya Maniktala",
                        "Sunakshi Grover"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "A teenage romance that aims straight from the heart. This is the story of a young romance unfolding as a chemical reaction.",
                            posterPath: "https://image.tmdb.org/t/p/w400/wipq1m5iJJFjNta82h1d2yxMMhZ.jpg",
                            totalEpisode: 5,
                            year: "2018"
                        },
                        {
                            name: "Season 2",
                            desc: "Rajat and Ishita are in a happy relationship. Their relationship deepens, and we see them balance through deeper equations of trust. Anusha and Pandu struggle through the emotion of jealousy. Academic...",
                            posterPath: "https://image.tmdb.org/t/p/w400/bVvfSXxAno6ghMuHuWpxmhWcyqX.jpg",
                            totalEpisode: 5,
                            year: "2019"
                        },
                        {
                            name: "Season 3",
                            desc: "The gang in class 12th. Rajat and Ishita are now friends. While Rajat is desperately trying to win her back, Ishita wants to take it slow. Sunshine Tuition Center resumes at Kaushal Sir’s residence te...",
                            posterPath: "https://image.tmdb.org/t/p/w400/bb4EVHOKNOSQH1zXK8V8gPeEpvl.jpg",
                            totalEpisode: 5,
                            year: "2022"
                        },
                        {
                            name: "Season 4",
                            desc: "Centered around 12th-grade students facing impending board exams, Rajat-Ishita and Pandu-Anusha navigates the delicate balance between love and studies. As Kaushal sir teaches in a different institute...",
                            posterPath: "https://image.tmdb.org/t/p/w400/3zRZwd8Y5Gr06Gbdl9l65VzNBi.jpg",
                            totalEpisode: 5,
                            year: "2023"
                        }
                    ],
                    ageRating: "U/A 13+", type: "show", backdropNoLang: ""
                },
                {
                    title: "Mismatched",
                    desc: "After a disastrous set-up by their families, two teens strike up a tentative friendship at their summer program - but deeper feelings aren't far behind.",
                    genres: [
                        "Comedy",
                        "Drama"
                    ],
                    totalSeasons: 2,
                    totalEpisodes: 14,
                    year: "2020",
                    isMostLiked: false,
                    videos: {
                        trailer: "vIZWLvcMS9c"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/fIWUoyflWns3C6yjnOtWKLrujz.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/bYAxMmsbczE4cPvLuH2VwGhPO9l.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "love",
                        "romance"
                    ],
                    cast: [
                        "Not Available"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "After a disastrous set-up by their families, two teens strike up a tentative friendship at their summer program - but deeper feelings aren't far behind.",
                            posterPath: "https://image.tmdb.org/t/p/w400/kSAckGd9Lg1ikXA48OAIkoii4x3.jpg",
                            totalEpisode: 6,
                            year: "2020"
                        },
                        {
                            name: "Season 2",
                            desc: "With rocky romances and unforgiving deadlines, Dimple and Rishi navigate their summer program’s end and the ultimate question: Are they meant to be?",
                            posterPath: "https://image.tmdb.org/t/p/w400/9R5NtX7qf81vuFpsjD8ochLRn6v.jpg",
                            totalEpisode: 8,
                            year: "2022"
                        }
                    ],
                    ageRating: "U/A 13+", type: "show", backdropNoLang: ""
                },
                {
                    title: "Zindagi in Short",
                    desc: "Complicated marriages, digital romances, domestic dilemmas and schoolyard bullies get the spotlight in these seven, slice-of-life short films.",
                    genres: [
                        "Comedy",
                        "Drama"
                    ],
                    totalSeasons: 1,
                    totalEpisodes: 7,
                    year: "2020",
                    isMostLiked: false,
                    videos: {
                        clip: "OeQhJNbZw1o"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/zqtAzAjmK2Z1bqJsnOnVM3yVaaN.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/lroEioG8vrysjh9rNmJTxIdjrif.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "fight",
                        "marriage",
                        "friendship"
                    ],
                    cast: [
                        "Not Available"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "Complicated marriages, digital romances, domestic dilemmas and schoolyard bullies get the spotlight in these seven, slice-of-life short films.",
                            posterPath: "https://image.tmdb.org/t/p/w400/5OdF8Pu1yPeuhKCuoo7UAnPUApF.jpg",
                            totalEpisode: 7,
                            year: "2020"
                        }
                    ],
                    ageRating: "U/A 17+", type: "show", backdropNoLang: ""
                },
                {
                    title: "Taj Mahal 1989",
                    desc: "In and around Lucknow University in 1989, couples of varying ages explore the politics of love through marriage, budding romances and friendships.",
                    genres: [
                        "Drama"
                    ],
                    totalSeasons: 1,
                    totalEpisodes: 7,
                    year: "2020",
                    isMostLiked: false,
                    videos: {
                        trailer: "-q0RJBZKM6w"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/7JQ4d7p55wihDSF7rGYXadhbG4o.jpg",
                        isLogoIncluded: false
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/dX445VTukw94VC3smsflFZicSq8.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "love",
                        "romance",
                        "1980s"
                    ],
                    cast: [
                        "Neeraj Kabi",
                        "Geetanjali Kulkarni",
                        "Sheeba Chaddha"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "In and around Lucknow University in 1989, couples of varying ages explore the politics of love through marriage, budding romances and friendships.",
                            posterPath: "https://image.tmdb.org/t/p/w400/oNP3po3gwaI00M8BZO6erLkZrpR.jpg",
                            totalEpisode: 7,
                            year: "2020"
                        }
                    ],
                    ageRating: "U/A 13+", type: "show", backdropNoLang: ""
                },
                {
                    title: "Ladies Up",
                    desc: "Rising India-based comics Prashasti Singh, Kaneez Surka, Supriya Joshi, and Niveditha Prakasam bring no-holds-barred humor to this stand up series",
                    genres: [
                        "Reality",
                        "Comedy"
                    ],
                    totalSeasons: 1,
                    totalEpisodes: 4,
                    year: "2020",
                    isMostLiked: false,
                    videos: {},
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/tXzukF9eRnHE1HsdwZl3AKuaoux.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/vbqZqtNX9yTscoFaIuN7rLwOi2w.png",
                        isLogoIncluded: false
                    },
                    keywords: [
                        "friendship",
                        "stand-up"
                    ],
                    cast: [
                        "Supriya Joshi",
                        "Niveditha Prakasam",
                        "Prashasti Singh"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "Rising India-based comics Prashasti Singh, Kaneez Surka, Supriya Joshi, and Niveditha Prakasam bring no-holds-barred humor to this stand up series",
                            posterPath: "https://image.tmdb.org/t/p/w400/lkFs9IMi6zrQB0FszvwKMoydG2j.jpg",
                            totalEpisode: 4,
                            year: "2020"
                        }
                    ],
                    ageRating: "U/A 13+", type: "show", backdropNoLang: ""
                },
                {
                    title: "Nobody Wants This",
                    desc: "An agnostic sex podcaster and a newly single rabbi fall in love, but can their relationship survive their wildly different lives and meddling families?",
                    genres: [
                        "Comedy"
                    ],
                    totalSeasons: 1,
                    totalEpisodes: 10,
                    year: "2024",
                    isMostLiked: true,
                    videos: {
                        trailer: "Xn2PsXD8m4A"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/xG5TbIDNjM6GKOcK7kFARNnf8KX.jpg",
                        isLogoIncluded: false
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/yoIDGAhWvPFxPknG3pgQSdvnVAr.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "rabbi",
                        "romantic comedy",
                        "romance"
                    ],
                    cast: [
                        "Kristen Bell",
                        "Adam Brody",
                        "Justine Lupe"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "An agnostic sex podcaster and a newly single rabbi fall in love, but can their relationship survive their wildly different lives and meddling families?",
                            posterPath: "https://image.tmdb.org/t/p/w400/o33TnXY9yMLCnTA63MapZvehd5A.jpg",
                            totalEpisode: 10,
                            year: "2024"
                        }
                    ],
                    ageRating: "U/A 17+", type: "show", backdropNoLang: ""
                },
                {
                    title: "Heartstopper",
                    desc: "Teens Charlie and Nick discover their unlikely friendship might be something more as they navigate school and young love in this coming-of-age series.",
                    genres: [
                        "Drama"
                    ],
                    totalSeasons: 3,
                    totalEpisodes: 24,
                    year: "2022",
                    isMostLiked: true,
                    videos: {
                        trailer: "FrK4xPy4ahg",
                        teaser: "gHALOizCpf0"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/47UdSj6KvEMWhn7wxImUFfja0qR.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/3HZB96aFO5D00vas6QxnFtHdlP4.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "coming out",
                        "friendship",
                        "high school"
                    ],
                    cast: [
                        "Joe Locke",
                        "Kit Connor",
                        "William Gao"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "Teens Charlie and Nick discover their unlikely friendship might be something more as they navigate school and young love in this coming-of-age series.",
                            posterPath: "https://image.tmdb.org/t/p/w400/6WULLvLZYQX3xNfs5S9H6BVFdgD.jpg",
                            totalEpisode: 8,
                            year: "2022"
                        },
                        {
                            name: "Season 2",
                            desc: "Teens Charlie and Nick discover their unlikely friendship might be something more as they navigate school and young love in this coming-of-age series.",
                            posterPath: "https://image.tmdb.org/t/p/w400/p0AtD0ivSlHq2MHY6JFgyhNqAQY.jpg",
                            totalEpisode: 8,
                            year: "2023"
                        },
                        {
                            name: "Season 3",
                            desc: "Teens Charlie and Nick discover their unlikely friendship might be something more as they navigate school and young love in this coming-of-age series.",
                            posterPath: "https://image.tmdb.org/t/p/w400/fBbhBvFEVgVxWrBbOJDzDjcVXM4.jpg",
                            totalEpisode: 8,
                            year: "2024"
                        }
                    ],
                    ageRating: "U/A 13+", type: "show", backdropNoLang: ""
                },
                {
                    title: "Sex/Life",
                    desc: "A woman's daring sexual past collides with her married-with-kids present when the bad-boy ex she can't stop fantasizing about crashes back into her life.",
                    genres: [
                        "Drama"
                    ],
                    totalSeasons: 2,
                    totalEpisodes: 14,
                    year: "2021",
                    isMostLiked: true,
                    videos: {},
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/nG8JtLINdnZipsTWlzbVMdqF0fO.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/eS6jkIQJjIIW0EUOFyX2Q7ogyvB.png",
                        isLogoIncluded: false
                    },
                    keywords: [
                        "love triangle",
                        "sexual obsession",
                        "infidelity"
                    ],
                    cast: [
                        "Sarah Shahi",
                        "Mike Vogel",
                        "Adam Demos"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "A woman's daring sexual past collides with her married-with-kids present when the bad-boy ex she can't stop fantasizing about crashes back into her life.",
                            posterPath: "https://image.tmdb.org/t/p/w400/qSFny4g05HoOwiAvX7IAda98sgF.jpg",
                            totalEpisode: 8,
                            year: "2021"
                        },
                        {
                            name: "Season 2",
                            desc: "Billie navigates new challenges — and fresh desires — as she lusts after the life she wants. But will she be able to have it all?",
                            posterPath: "https://image.tmdb.org/t/p/w400/qyp4SqytEc8aGTf5vSFVrePnQ0R.jpg",
                            totalEpisode: 6,
                            year: "2023"
                        }
                    ],
                    ageRating: "U/A 13+", type: "show", backdropNoLang: ""
                },
                {
                    title: "Girls5eva",
                    desc: "When a one-hit-wonder girl group from the '90s gets sampled by a young rapper, its members reunite to give their pop star dreams one more shot. They may be grown women balancing spouses, kids, jobs, d...",
                    genres: [
                        "Comedy"
                    ],
                    totalSeasons: 3,
                    totalEpisodes: 22,
                    year: "2021",
                    isMostLiked: true,
                    videos: {
                        trailer: "WlUYv_EtEAg",
                        teaser: "aZ0Dp3mNL1Y"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/8Vz2OvB4HfUEat04gq0aaaUyLZU.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/eQwYqkxEMspPsKtm3ub05sjfbm7.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "pop star",
                        "reunion",
                        "candid"
                    ],
                    cast: [
                        "Sara Bareilles",
                        "Busy Philipps",
                        "Paula Pell"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "When a one-hit-wonder girl group from the '90s gets sampled by a young rapper, its members reunite to give their pop star dreams one more shot. They may be grown women balancing spouses, kids, jobs, d...",
                            posterPath: "https://image.tmdb.org/t/p/w400/xVFu4hVzFfnW1C16tmBS4v4g8fc.jpg",
                            totalEpisode: 8,
                            year: "2021"
                        },
                        {
                            name: "Season 2",
                            desc: "With a new record deal, the women need to come up with new Girls5eva songs for an album as their lives outside of music evolve.",
                            posterPath: "https://image.tmdb.org/t/p/w400/1RplQ2ooky3kONomTNhsptZxqAV.jpg",
                            totalEpisode: 8,
                            year: "2022"
                        },
                        {
                            name: "Season 3",
                            desc: "Girls5eva kick off their Returnity Tour and meet new friends, fans and foes on the road as they navigate their way back to the big time.",
                            posterPath: "https://image.tmdb.org/t/p/w400/cXqbCoxHFQ9OKzdeRHN4eJRA5tl.jpg",
                            totalEpisode: 6,
                            year: "2024"
                        }
                    ],
                    ageRating: "U/A 17+", type: "show", backdropNoLang: ""
                },
                {
                    title: "Never Have I Ever",
                    desc: "After a traumatic year, all an Indian-American teen wants is to go from pariah to popular -- but friends, family and feeling won't make it easy on her.",
                    genres: [
                        "Comedy",
                        "Drama"
                    ],
                    totalSeasons: 4,
                    totalEpisodes: 40,
                    year: "2020",
                    isMostLiked: true,
                    videos: {
                        trailer: "HyOCCCbxwMQ",
                        teaser: "6b0XhByYzv4"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/4yPfNmCbrokLuQsolaHs271p2Fj.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/wDT1IDj7YxEDHI5WggiheKt76xm.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "friendship",
                        "romance",
                        "coming of age"
                    ],
                    cast: [
                        "Maitreyi Ramakrishnan",
                        "Poorna Jagannathan",
                        "Jaren Lewison"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "The complicated life of a modern-day first-generation Indian American teenage girl, inspired by Kaling's own childhood.",
                            posterPath: "https://image.tmdb.org/t/p/w400/pi6g3gxesDuaLqF76NFb9M5HW9Y.jpg",
                            totalEpisode: 10,
                            year: "2020"
                        },
                        {
                            name: "Season 2",
                            desc: "A new love life, a new classmate and new reasons to bicker with mom give Devi plenty more ways to make courageous moves... and questionable decisions.",
                            posterPath: "https://image.tmdb.org/t/p/w400/u45smnq7rv7W61FTr3t3bNm1N5K.jpg",
                            totalEpisode: 10,
                            year: "2021"
                        },
                        {
                            name: "Season 3",
                            desc: "Devi and her friends may finally be single no more. But they're about to learn that relationships come with a lot of self-discovery — and all the drama.",
                            posterPath: "https://image.tmdb.org/t/p/w400/fFTZH3zGnzLvy42fDBBhHpSkshn.jpg",
                            totalEpisode: 10,
                            year: "2022"
                        },
                        {
                            name: "Season 4",
                            desc: "Senior year has finally arrived. Between college conundrums, identity crises and crushes that won't fade, are Devi and the gang ready to face the future?",
                            posterPath: "https://image.tmdb.org/t/p/w400/hd5fnBixab6IzfUwjC5wfdbX3eM.jpg",
                            totalEpisode: 10,
                            year: "2023"
                        }
                    ],
                    ageRating: "U/A 17+", type: "show", backdropNoLang: ""
                },
                {
                    title: "Virgin River",
                    desc: "After seeing an ad for a midwife, a recently divorced big-city nurse moves to the redwood forests of California, where she meets an intriguing man.",
                    genres: [
                        "Drama"
                    ],
                    totalSeasons: 5,
                    totalEpisodes: 54,
                    year: "2019",
                    isMostLiked: true,
                    videos: {
                        trailer: "DMNjH5MlQXc"
                    },
                    backdrop: {
                        image: "https://image.tmdb.org/t/p/w500/rmlAH8xz6NODT2fcP2DbMboGRIa.jpg",
                        isLogoIncluded: true
                    },
                    poster: null,
                    logo: {
                        image: "https://image.tmdb.org/t/p/w500/fAb4CovlvBcjENIW5mRzSlkjmk6.png",
                        isLogoIncluded: true
                    },
                    keywords: [
                        "california",
                        "small town",
                        "friendship"
                    ],
                    cast: [
                        "Alexandra Breckenridge",
                        "Martin Henderson",
                        "Colin Lawrence"
                    ],
                    seasons: [
                        {
                            name: "Season 1",
                            desc: "After seeing an ad for a midwife, a recently divorced big-city nurse moves to the redwood forests of California, where she meets an intriguing man.",
                            posterPath: "https://image.tmdb.org/t/p/w400/1Sm3C6Uuq9JGHelfifo9NedMe6s.jpg",
                            totalEpisode: 10,
                            year: "2019"
                        },
                        {
                            name: "Season 2",
                            desc: "Engagement. Babies. Heartbreak. Murder. For a small town, Virgin River has its fair share of drama — and Mel Monroe is often in the middle of it.",
                            posterPath: "https://image.tmdb.org/t/p/w400/218Kic4Ltgw4s7rWVOn8uXebH7e.jpg",
                            totalEpisode: 10,
                            year: "2020"
                        },
                        {
                            name: "Season 3",
                            desc: "Mel and her loved ones in Virgin River support each other while facing all sorts of troubles: death, a fire, custody arguments, breakups and more.",
                            posterPath: "https://image.tmdb.org/t/p/w400/sflCFGoUgGQJtB5qGClXM7jPyDF.jpg",
                            totalEpisode: 10,
                            year: "2021"
                        },
                        {
                            name: "Season 4",
                            desc: "Mel navigates her new reality, Jack's past threatens his future, and new faces arrive — and stir things up — in Virgin River.",
                            posterPath: "https://image.tmdb.org/t/p/w400/ghWad3tMltWVQPUqgHh6ALVxlmv.jpg",
                            totalEpisode: 12,
                            year: "2022"
                        },
                        {
                            name: "Season 5",
                            desc: "Mel adjusts to a different pace of life, Jack works to grow his business, and the town faces new threats as secrets begin to surface in Virgin River.",
                            posterPath: "https://image.tmdb.org/t/p/w400/5HYH1c0LgkAQM8NyVg2fYVwharb.jpg",
                            totalEpisode: 12,
                            year: "2023"
                        }
                    ],
                    ageRating: "U/A 17+", type: "show", backdropNoLang: ""
                }
            ]
        },
        crime: {
            tabs: ['movie', 'show'],
            movieTitle: "Crime and Gangster Films",
            showTitle: "True Crime Shows",
            movies: [

            ],
            shows: []
        },
        mcu: {
            tabs: ['movie'],
            movieTitle: 'Marvel Cinematic Universe',
            movies: [],
            shows: []
        },
        award: {
            tabs: ['movie'],
            movieTitle: 'Award Winning Films',
            movies: [],
            shows: []
        },
        cult: {
            tabs: ['movie'],
            movieTitle: 'Cult-Classic Films',
            movies: [],
            shows: []
        },
        violent: {
            tabs: ['movie'],
            movieTitle: 'Violent Films',
            movies: [],
            shows: []
        },
        binge: {
            tabs: ['show'],
            showTitle: 'Binge-Worthy Shows',
            movies: [],
            shows: []
        },
        sitcom: {
            tabs: ['show'],
            showTitle: 'Sitcoms to Binge',
            movied: [],
            shows: []
        },
        mystery: {
            tabs: ['show'],
            showTitle: 'Mystery and Suspenseful Shows',
            movies: [],
            shows: []
        },
        anime: {
            tabs: ['show'],
            showTitle: 'Japanese Anime',
            movies: [],
            shows: []
        },
        dark: {
            tabs: ['show'],
            showTitle: 'Dark and Gritty Shows',
            movies: [],
            shows: []
        },
        martin: {
            tabs: ['director'],
            title: "Masterpieces of Scorsese",
            movies: [
                {
                    type:"movie",
                    title:"GoodFellas",
                    desc:"The true story of Henry Hill, a half-Irish, half-Sicilian Brooklyn kid who is adopted by neighbourhood gangsters at an early age and climbs the ranks of a Mafia family under the guidance of Jimmy Conw...",
                    genres:[
                        "Drama",
                        "Crime"
                    ],
                    runtime:145,
                    year:"1990",
                    isMostLiked:true,
                    videos:{
                        clip:"Pfcy15ZUE2c",
                        trailer:"PTBRNXGQR9Q"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/ppF6t3eKHL0e6ggk3P8LhGav4fC.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/7TF4p86ZafnxFuNqWdhpHXFO244.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/inwc0dp4lg2YUirexKRYv6qlNU5.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "prison",
                        "florida",
                        "new york city"
                    ],
                    cast:[
                        "Robert De Niro",
                        "Ray Liotta",
                        "Joe Pesci"
                    ],
                    ageRating:"A-Rated"
                },
                {
                    type:"movie",
                    title:"Raging Bull",
                    desc:"The life of boxer Jake LaMotta, whose violence and temper that led him to the top in the ring destroyed his life outside of it.",
                    genres:[
                        "Drama"
                    ],
                    runtime:129,
                    year:"1980",
                    isMostLiked:false,
                    videos:{
                        clip:"MSspmsYAOq0",
                        trailer:"G5RHRg6zEhY"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/gWT4iXWExkbjWiViJpsixCfOMOU.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/aAStHDJgD97k4g4Zf0NLqbAmrvZ.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/x3nWKOKCIoZkuUz0T1SfcrZ7eb8.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "jealousy",
                        "transporter",
                        "sports"
                    ],
                    cast:[
                        "Robert De Niro",
                        "Cathy Moriarty",
                        "Joe Pesci"
                    ],
                    ageRating:"A-Rated"
                },
                {
                    type:"movie",
                    title:"Taxi Driver",
                    desc:"A mentally unstable Vietnam War veteran works as a night-time taxi driver in New York City where the perceived decadence and sleaze feed his urge for violent action.",
                    genres:[
                        "Crime",
                        "Drama"
                    ],
                    runtime:114,
                    year:"1976",
                    isMostLiked:true,
                    videos:{
                        clip:"dB_5XEMH3mc",
                        trailer:"zdqCqDSTVNI",
                        teaser:"lbSisPcYQFQ"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/eWdEXjM7oIVIBI91C1ki4eTiWSU.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/6aoyUbvu0419XLKLIMoH0TkEicH.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/5jdAstL71FuDsG10HVI5a8NXftJ.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "drug dealer",
                        "vietnam veteran",
                        "new york city"
                    ],
                    cast:[
                        "Robert De Niro",
                        "Jodie Foster",
                        "Cybill Shepherd"
                    ],
                    ageRating:"A-Rated"
                },
                {
                    type:"movie",
                    title:"The Departed",
                    desc:"To take down South Boston's Irish Mafia, the police send in one of their own to infiltrate the underworld, not realizing the syndicate has done likewise. While an undercover cop curries favor with the...",
                    genres:[
                        "Drama",
                        "Thriller",
                        "Crime"
                    ],
                    runtime:151,
                    year:"2006",
                    isMostLiked:true,
                    videos:{
                        clip:"lZdsIpDa7zQ",
                        trailer:"r-MiSNsCdQ4"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/bbT3xRFp0tX66e6X0eiQW3zRk1q.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/6WRrGYalXXveItfpnipYdayFkQB.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/hgwPIc6SntSABkOcVby7inDKRSw.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "police",
                        "undercover",
                        "gangster"
                    ],
                    cast:[
                        "Leonardo DiCaprio",
                        "Matt Damon",
                        "Jack Nicholson"
                    ],
                    ageRating:"A-Rated"
                },
                {
                    type:"movie",
                    title:"Shutter Island",
                    desc:"World War II soldier-turned-U.S. Marshal Teddy Daniels investigates the disappearance of a patient from a hospital for the criminally insane, but his efforts are compromised by troubling visions and a...",
                    genres:[
                        "Drama",
                        "Thriller",
                        "Mystery"
                    ],
                    runtime:138,
                    year:"2010",
                    isMostLiked:true,
                    videos:{
                        clip:"x9lGthLqe3E",
                        trailer:"qdPw9x9h5CY"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/A9lezV9kggHeRlIFkQZXnDFpUUA.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/rbZvGN1A1QyZuoKzhCw8QPmf2q0.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/hRtb8ju7S4xNP3s6RtDqyR1wn8j.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "island",
                        "hurricane",
                        "investigation"
                    ],
                    cast:[
                        "Leonardo DiCaprio",
                        "Mark Ruffalo",
                        "Ben Kingsley"
                    ],
                    ageRating:"A-Rated"
                },
                {
                    type:"movie",
                    title:"The Wolf of Wall Street",
                    desc:"A New York stockbroker refuses to cooperate in a large securities fraud case involving corruption on Wall Street, corporate banking world and mob infiltration. Based on Jordan Belfort's autobiography.",
                    genres:[
                        "Crime",
                        "Drama",
                        "Comedy"
                    ],
                    runtime:180,
                    year:"2013",
                    isMostLiked:true,
                    videos:{
                        clip:"RPORRudmQv0",
                        trailer:"Slj4-Sv-YNA",
                        teaser:"ryp0oKu31nE"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/br7n8b3ELexcvs6l30IH2x9P2ux.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/7Nwnmyzrtd0FkcRyPqmdzTPppQa.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/mCn3JT0FHgUaDpud79djjfF9wnX.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "corruption",
                        "drug addiction",
                        "anti hero"
                    ],
                    cast:[
                        "Leonardo DiCaprio",
                        "Jonah Hill",
                        "Margot Robbie"
                    ],
                    ageRating:"A-Rated"
                },
                {
                    type:"movie",
                    title:"The Irishman",
                    desc:"Pennsylvania, 1956. Frank Sheeran, a war veteran of Irish origin who works as a truck driver, accidentally meets mobster Russell Bufalino. Once Frank becomes his trusted man, Bufalino sends him to Chi...",
                    genres:[
                        "Crime",
                        "Drama",
                        "History"
                    ],
                    runtime:209,
                    year:"2019",
                    isMostLiked:true,
                    videos:{
                        clip:"Rn1Vtou_sU0",
                        trailer:"RS3aHkkfuEI",
                        teaser:"1Expe7hf6MU"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/4P6bqSY4goBnDleDLj7kLupyiW3.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/1RDto0tLo8Fhq7OcwgDaM7nECb7.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/bCAhNbPTDCj6g2ukijoySf7vNQL.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "chicago, illinois",
                        "hitman",
                        "pennsylvania, usa"
                    ],
                    cast:[
                        "Robert De Niro",
                        "Al Pacino",
                        "Joe Pesci"
                    ],
                    ageRating:"A-Rated"
                },
                {
                    type:"movie",
                    title:"Gangs of New York",
                    desc:"In 1863, Amsterdam Vallon returns to the Five Points of America to seek vengeance against the psychotic gangland kingpin, Bill the Butcher, who murdered his father years earlier. With an eager pickpoc...",
                    genres:[
                        "Drama",
                        "History",
                        "Crime"
                    ],
                    runtime:168,
                    year:"2002",
                    isMostLiked:true,
                    videos:{
                        clip:"4s1vB_oPfpE",
                        trailer:"1bjh979vVG0"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/rY3n4voBDv0Z62OTBgGGnCzjJDm.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/a2Aj5ksEo2HOUH3FbGyZCtaJM4C.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/gPduLazH0Tq61ZJxqX52rtTPamE.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "rescue",
                        "immigrant",
                        "ship"
                    ],
                    cast:[
                        "Leonardo DiCaprio",
                        "Daniel Day-Lewis",
                        "Cameron Diaz"
                    ],
                    ageRating:"A-Rated"
                },
                {
                    type:"movie",
                    title:"Casino",
                    desc:"In early-1970s Las Vegas, Sam \"Ace\" Rothstein gets tapped by his bosses to head the Tangiers Casino. At first, he's a great success in the job, but over the years, problems with his loose-cannon enfor...",
                    genres:[
                        "Crime",
                        "Drama"
                    ],
                    runtime:179,
                    year:"1995",
                    isMostLiked:true,
                    videos:{
                        clip:"5DazcjGF8L8",
                        trailer:"AIRRDirf4KY"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/aeEFgmSW4X88SMHNEEWGzXpeXJr.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/iZGiMD0p1M2AOmzKknFo5bkuz94.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/uMZHu14lCEx5bjV2Sak87yO0OhB.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "drug abuse",
                        "casino",
                        "poker"
                    ],
                    cast:[
                        "Robert De Niro",
                        "Sharon Stone",
                        "Joe Pesci"
                    ],
                    ageRating:"A-Rated"
                },
                {
                    type:"movie",
                    title:"The Aviator",
                    desc:"A biopic depicting the life of filmmaker and aviation pioneer Howard Hughes from 1927 to 1947, during which time he became a successful film producer and an aviation magnate, while simultaneously grow...",
                    genres:[
                        "Drama"
                    ],
                    runtime:170,
                    year:"2004",
                    isMostLiked:true,
                    videos:{
                        clip:"ewBaj0A0YLM",
                        trailer:"dkwypzOQf8o"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/smCxORGf5kKMeI2WI42PHJXrPWj.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/vVk0HV9HAqvvSfWiNGjpsOekLBS.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/bPLoV83JlLBGV7KgaQfynEtPKB4.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "ladykiller",
                        "pilot",
                        "biography"
                    ],
                    cast:[
                        "Leonardo DiCaprio",
                        "Cate Blanchett",
                        "Kate Beckinsale"
                    ],
                    ageRating:"U/A 13+"
                },
                {
                    type:"movie",
                    title:"Cape Fear",
                    desc:"Sam Bowden is a small-town corporate attorney. Max Cady is a tattooed, cigar-smoking, Bible-quoting, psychotic rapist. What do they have in common? 14 years ago, Sam was a public defender assigned to ...",
                    genres:[
                        "Thriller",
                        "Crime"
                    ],
                    runtime:128,
                    year:"1991",
                    isMostLiked:false,
                    videos:{
                        clip:"yR3WXcJN8aA",
                        trailer:"mPsOIhZJug4"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/8jUqeHjGGk7RI8HpJBWRu7q4xkA.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/ntgpger7OwFNlEldxuvvFHDKzjW.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/wYvgaVmUioMTrTowBDvnQeNJ6Wf.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "prison",
                        "daughter",
                        "small town"
                    ],
                    cast:[
                        "Robert De Niro",
                        "Nick Nolte",
                        "Jessica Lange"
                    ],
                    ageRating:"A-Rated"
                },
                {
                    type:"movie",
                    title:"Killers of the Flower Moon",
                    desc:"When oil is discovered in 1920s Oklahoma under Osage Nation land, the Osage people are murdered one by one—until the FBI steps in to unravel the mystery.",
                    genres:[
                        "Crime",
                        "History",
                        "Drama"
                    ],
                    runtime:206,
                    year:"2023",
                    isMostLiked:true,
                    videos:{
                        clip:"rt6rYhpKiX8",
                        trailer:"1oZUCkJEuvo",
                        teaser:"Lm73h0l1W2M"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/nQJ3RWiSMX5FB8wx4cIooR44B1s.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/acvE3RWjDLgvbL2RtcyzkrsAyNV.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/1byCcdBqQi9CI50xQTA4cjmVCxf.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "war veteran",
                        "fbi",
                        "greed"
                    ],
                    cast:[
                        "Leonardo DiCaprio",
                        "Robert De Niro",
                        "Lily Gladstone"
                    ],
                    ageRating:"A-Rated"
                }
            ],
            shows: [],
            info: {
                name: 'Martin Scorsese',
                desc: 'A legend of American cinema, Scorsese is known for his deep character studies and powerful explorations of crime, guilt, and morality. His Dynamic cinematography and intense, emotionally charged and layered stories have produced iconic films.',
                renowned: 'Globally',
                knownFor: ['Taxi Driver', 'Goodfellas', 'The Departed'],
                genres: ['Crime', 'Drama', 'Biographical'],
                preferences: "gritty, character-driven dramas with powerful performances."
            }
        },
        tarantino: {
            tabs: ['director'],
            title: "Tarantino's Finest",
            movies: [
                {
                    type:"movie",
                    title:"Pulp Fiction",
                    desc:"A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that i...",
                    genres:[
                        "Thriller",
                        "Crime"
                    ],
                    runtime:154,
                    year:"1994",
                    isMostLiked:true,
                    videos:{
                        clip:"r1bm09Xxr0Q",
                        trailer:"tGpTpVyI_OQ"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/jlVOS4D6ledQGxGdL0EIte3TXfL.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/kpuNKsIzVbK3LDVo4iOJDAY0y7d.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "drug dealer",
                        "boxer",
                        "massage"
                    ],
                    cast:[
                        "John Travolta",
                        "Samuel L. Jackson",
                        "Uma Thurman"
                    ],
                    ageRating:"A-Rated"
                },
                {
                    type:"movie",
                    title:"Inglourious Basterds",
                    desc:"In Nazi-occupied France during World War II, a group of Jewish-American soldiers known as \"The Basterds\" are chosen specifically to spread fear throughout the Third Reich by scalping and brutally kill...",
                    genres:[
                        "Drama",
                        "Thriller",
                        "War"
                    ],
                    runtime:153,
                    year:"2009",
                    isMostLiked:true,
                    videos:{
                        trailer:"QFIUD3aq_do"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/e9RBxEVDxpPVaLFEOn6FnURARmJ.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/1Jpkm9qZcsT0mSyVXgs4VlGjPNI.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/ckZoF4j35HL1USGG2iX8GeQ7058.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "guerrilla warfare",
                        "swastika",
                        "paris, france"
                    ],
                    cast:[
                        "Brad Pitt",
                        "Mélanie Laurent",
                        "Christoph Waltz"
                    ],
                    ageRating:"A-Rated"
                },
                {
                    type:"movie",
                    title:"Reservoir Dogs",
                    desc:"A botched robbery indicates a police informant, and the pressure mounts in the aftermath at a warehouse. Crime begets violence as the survivors -- veteran Mr. White, newcomer Mr. Orange, psychopathic ...",
                    genres:[
                        "Crime",
                        "Thriller"
                    ],
                    runtime:99,
                    year:"1992",
                    isMostLiked:true,
                    videos:{
                        clip:"azwAJYpnKzQ",
                        trailer:"2KLZ4fSXtgI"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/1lSflqaVdJA0rrlfiUzv4wIvYtc.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/jqFjgNnxpXIXWuPsyfqmcLXRo9p.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/gBtwDC7oE4R4TbkUJpEWlBsxwOm.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "escape",
                        "jewelry",
                        "psychopath"
                    ],
                    cast:[
                        "Harvey Keitel",
                        "Tim Roth",
                        "Michael Madsen"
                    ],
                    ageRating:"A-Rated"
                },
                {
                    type:"movie",
                    title:"Kill Bill: Vol. 1",
                    desc:"An assassin is shot by her ruthless employer, Bill, and other members of their assassination circle – but she lives to plot her vengeance.",
                    genres:[
                        "Action",
                        "Crime"
                    ],
                    runtime:111,
                    year:"2003",
                    isMostLiked:true,
                    videos:{
                        clip:"DiVKwaIr1Dw",
                        trailer:"7xhUyYQdCf8"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/byGvsjXuTXk0jAm7OxJiCqeRa91.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/lVy5Zqcty2NfemqKYbVJfdg44rK.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/mIiJMgtGAIbQVrIElG0s7lCBs50.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "martial arts",
                        "japan",
                        "kung fu"
                    ],
                    cast:[
                        "Uma Thurman",
                        "Lucy Liu",
                        "Vivica A. Fox"
                    ],
                    ageRating:"A-Rated"
                },
                {
                    type:"movie",
                    title:"Django Unchained",
                    desc:"With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
                    genres:[
                        "Drama",
                        "Western"
                    ],
                    runtime:165,
                    year:"2012",
                    isMostLiked:true,
                    videos:{
                        trailer:"_iH0UBYDI4g",
                        teaser:"wH1TSNIYj5E"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/gh3cS7fBeTLZFxoKRoGNsdFYDxY.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/5Lbm0gpFDRAPIV1Cth6ln9iL1ou.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/fWtlayXGkBQ0IFp3lbnONmVkifw.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "rescue",
                        "friendship",
                        "bounty hunter"
                    ],
                    cast:[
                        "Jamie Foxx",
                        "Christoph Waltz",
                        "Leonardo DiCaprio"
                    ],
                    ageRating:"A-Rated"
                },
                {
                    type:"movie",
                    title:"The Hateful Eight",
                    desc:"Bounty hunters seek shelter from a raging blizzard and get caught up in a plot of betrayal and deception.",
                    genres:[
                        "Drama",
                        "Mystery",
                        "Western"
                    ],
                    runtime:188,
                    year:"2015",
                    isMostLiked:true,
                    videos:{
                        trailer:"GRG7fAPksbg"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/sOvwWmxfIJBweSM6qD5FvVdmEAa.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/7gfDVfaw0VaIkUGiEH13o3TIC7A.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/dhkWUiFU6wvwkVhwKae5FO57AP6.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "bounty hunter",
                        "wyoming, usa",
                        "narration"
                    ],
                    cast:[
                        "Samuel L. Jackson",
                        "Kurt Russell",
                        "Jennifer Jason Leigh"
                    ],
                    ageRating:"A-Rated"
                },
                {
                    type:"movie",
                    title:"Kill Bill: Vol. 2",
                    desc:"The Bride unwaveringly continues on her roaring rampage of revenge against the band of assassins who had tried to kill her and her unborn child. She visits each of her former associates one-by-one, ch...",
                    genres:[
                        "Action",
                        "Crime",
                        "Thriller"
                    ],
                    runtime:136,
                    year:"2004",
                    isMostLiked:true,
                    videos:{
                        clip:"cOmJ-koXwIA",
                        trailer:"q2h6EFk36kI"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/7ldYM5HSpVEkowWr8WSEwYzEzKt.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/akXPz7zK6NZ8YxGqjcHunGK9bXL.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/oWnoYWltTGSfTcUZrXYHwJ3Fl9j.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "daughter",
                        "martial arts",
                        "kung fu"
                    ],
                    cast:[
                        "Uma Thurman",
                        "David Carradine",
                        "Daryl Hannah"
                    ],
                    ageRating:"A-Rated"
                },
                {
                    type:"movie",
                    title:"Once Upon a Time... in Hollywood",
                    desc:"Los Angeles, 1969. TV star Rick Dalton, a struggling actor specializing in westerns, and stuntman Cliff Booth, his best friend, try to survive in a constantly changing movie industry. Dalton is the ne...",
                    genres:[
                        "Comedy",
                        "Drama",
                        "Thriller"
                    ],
                    runtime:162,
                    year:"2019",
                    isMostLiked:true,
                    videos:{
                        clip:"5LiuSANqdWc",
                        trailer:"vKgITiP1UMg",
                        teaser:"kyi0JiaBiWA"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/hj59t2wo5sYdPW3OSONMHYmAz09.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/xwgBHC2FgoIrQitl8jZwXXdsR9u.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/5z6WuO1x5LgGfDYMZGj7rgD47Sq.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "movie business",
                        "male friendship",
                        "cult"
                    ],
                    cast:[
                        "Leonardo DiCaprio",
                        "Brad Pitt",
                        "Margot Robbie"
                    ],
                    ageRating:"A-Rated"
                },
                {
                    type:"movie",
                    title:"Jackie Brown",
                    desc:"Jackie Brown is a flight attendant who gets caught in the middle of smuggling cash into the country for her gunrunner boss. When the cops try to use Jackie to get to her boss, she hatches a plan — wit...",
                    genres:[
                        "Crime",
                        "Drama",
                        "Thriller"
                    ],
                    runtime:154,
                    year:"1997",
                    isMostLiked:false,
                    videos:{
                        trailer:"Mr5aO3Ltrdg"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/cZaVOcHJDAYAgHuhRPm3mVTCHtz.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/mXELcGjyU0osFfUCiz1YdAn470M.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/c0zD0EqXLhLApf7YJFRT38zdS8N.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "airport",
                        "police",
                        "arms deal"
                    ],
                    cast:[
                        "Pam Grier",
                        "Samuel L. Jackson",
                        "Robert De Niro"
                    ],
                    ageRating:"A-Rated"
                },
                {
                    type:"movie",
                    title:"Death Proof",
                    desc:"Austin's hottest DJ, Jungle Julia, sets out into the night to unwind with her two friends Shanna and Arlene. Covertly tracking their moves is Stuntman Mike, a scarred rebel leering from behind the whe...",
                    genres:[
                        "Action",
                        "Thriller"
                    ],
                    runtime:113,
                    year:"2007",
                    isMostLiked:false,
                    videos:{
                        clip:"qXRJsPV9UUY",
                        trailer:"7mICGcg5-pM"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/csQ2BUJMYLWkV5kCTO1vZ1zVSyE.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/xRpQkuQr4loiLiks2T15TanM2m2.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/cgvpApTCyGsms9EMUQzx6xGTRDq.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "sports car",
                        "sadism",
                        "psychopath"
                    ],
                    cast:[
                        "Kurt Russell",
                        "Zoë Bell",
                        "Rosario Dawson"
                    ],
                    ageRating:"A-Rated"
                },
                {
                    type:"movie",
                    title:"Natural Born Killers",
                    desc:"Two victims of traumatized childhoods become lovers and serial murderers irresponsibly glorified by the mass media.",
                    genres:[
                        "Crime",
                        "Thriller",
                        "Drama"
                    ],
                    runtime:118,
                    year:"1994",
                    isMostLiked:true,
                    videos:{
                        trailer:"Quh24cn7-E8"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/c4KlLFCYrwqmWCiTlO8j2JFwYbs.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/k3TOt50cHvTLXWYPnXP0szhiXB8.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/4p33iacgtBsC6On6c0XhFL59FSk.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "daughter",
                        "journalist",
                        "sadistic"
                    ],
                    cast:[
                        "Woody Harrelson",
                        "Juliette Lewis",
                        "Robert Downey Jr."
                    ],
                    ageRating:"A-Rated"
                },
                {
                    type:"movie",
                    title:"True Romance",
                    desc:"Clarence marries hooker Alabama, steals cocaine from her pimp, and tries to sell it in Hollywood, while the owners of the coke try to reclaim it.",
                    genres:[
                        "Action",
                        "Crime",
                        "Romance"
                    ],
                    runtime:118,
                    year:"1993",
                    isMostLiked:true,
                    videos:{
                        clip:"Adv9gYQWqb8",
                        trailer:"sDrNU_C-cJA",
                        teaser:"6uoPeUa7Gkc"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/5f0B7cRa0oWAWPgCsLmIZ7gAGpC.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/2o7rsRTBbgpxAfSSWoDZjmM40PH.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/dOzOEJneaIWoWpNS8AG2kTKTChk.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "hotel",
                        "movie business",
                        "detective"
                    ],
                    cast:[
                        "Christian Slater",
                        "Patricia Arquette",
                        "Dennis Hopper"
                    ],
                    ageRating:"A-Rated"
                }
            ],
            shows: [],
            info: {
                name: 'Quentin Tarantino',
                desc: 'Known for his signature style that blends hyper stylized violence, dark humor, and pop culture references, Tarantino is a master of non-linear storytelling and quirky, unforgettable sharp dialogues.',
                renowned: 'Globally',
                knownFor: ['Pulp Fiction', 'Kill Bill', 'Django Unchained'],
                genres: ['Crime', 'Action', 'Dark Comedy'],
                preferences: "fast-paced, edgy stories and memorable characters"
            }
        },
        steven: {
            tabs: ['director'],
            title: "Spielberg's Epic Adventures",
            movies: [
                {
                    type:"movie",
                    title:"Schindler's List",
                    desc:"The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
                    genres:[
                        "Drama",
                        "History",
                        "War"
                    ],
                    runtime:195,
                    year:"1993",
                    isMostLiked:true,
                    videos:{
                        clip:"lx9Ahsr4544",
                        trailer:"mxphAlJID9U"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/wH7ZxjF1yU3azuj3pgXVcgrCTUk.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/zb6fM1CX41D9rF9hdgclu0peUmy.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/krEC3MIxUbiZy2uM0TemRio2Z2E.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "factory",
                        "hero",
                        "nazi"
                    ],
                    cast:[
                        "Liam Neeson",
                        "Ben Kingsley",
                        "Ralph Fiennes"
                    ],
                    ageRating:"A-Rated"
                },
                {
                    type:"movie",
                    title:"Saving Private Ryan",
                    desc:"As U.S. troops storm the beaches of Normandy, three brothers lie dead on the battlefield, with a fourth trapped behind enemy lines. Ranger captain John Miller and seven men are tasked with penetrating...",
                    genres:[
                        "Drama",
                        "History",
                        "War"
                    ],
                    runtime:169,
                    year:"1998",
                    isMostLiked:true,
                    videos:{
                        trailer:"y4SA9yUDgW8",
                        teaser:"x3wsoR3UyKM"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/cfCzOzMPPBsPvp2gAVepsmV0vbA.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/rW2xRFlJRbTnBJlQTSjQmjevIwb.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/jv2zZcZKcaCF1WgLWNqV5tIZhjv.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "epic",
                        "army",
                        "airplane"
                    ],
                    cast:[
                        "Tom Hanks",
                        "Tom Sizemore",
                        "Edward Burns"
                    ],
                    ageRating:"A-Rated"
                },
                {
                    type:"movie",
                    title:"Jaws",
                    desc:"When the seaside community of Amity finds itself under attack by a dangerous great white shark, the town's chief of police, a young marine biologist, and a grizzled hunter embark on a desperate quest ...",
                    genres:[
                        "Horror",
                        "Thriller",
                        "Adventure"
                    ],
                    runtime:124,
                    year:"1975",
                    isMostLiked:true,
                    videos:{
                        clip:"AQ-cqPgSUJ0",
                        trailer:"WKuZJjPSLXQ",
                        teaser:"c5__Xki5cIg"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/8Oki3ZJ285le0LLe9XT6B2K1Q6E.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/3nYlM34QhzdtAvWRV5bN4nLtnTc.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/nik828RfbRgK44gYYyo1MmLT2qh.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "dying and death",
                        "beach",
                        "bathing"
                    ],
                    cast:[
                        "Roy Scheider",
                        "Robert Shaw",
                        "Richard Dreyfuss"
                    ],
                    ageRating:"U/A 7+"
                },
                {
                    type:"movie",
                    title:"Catch Me If You Can",
                    desc:"A true story about Frank Abagnale Jr. who, before his 19th birthday, successfully conned millions of dollars worth of checks as a Pan Am pilot, doctor, and legal prosecutor. An FBI agent makes it his ...",
                    genres:[
                        "Drama",
                        "Crime"
                    ],
                    runtime:141,
                    year:"2002",
                    isMostLiked:true,
                    videos:{
                        trailer:"71rDQ7z4eFg"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/uhOCsgXx5Q8pLJh2SUI1KNwk2hq.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/Ag6qhzsJd3k1NKuNrG9RmhZDMh7.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/7Cbekp4ijme78TICVYBsR211GL3.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "fbi",
                        "con man",
                        "biography"
                    ],
                    cast:[
                        "Leonardo DiCaprio",
                        "Tom Hanks",
                        "Christopher Walken"
                    ],
                    ageRating:"U/A 13+"
                },
                {
                    type:"movie",
                    title:"The Terminal",
                    desc:"Viktor Navorski is a man without a country; his plane took off just as a coup d'etat exploded in his homeland, leaving it in shambles, and now he's stranded at Kennedy Airport, where he's holding a pa...",
                    genres:[
                        "Comedy",
                        "Drama"
                    ],
                    runtime:128,
                    year:"2004",
                    isMostLiked:true,
                    videos:{
                        trailer:"GZjC9dAvWuU"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/zt3cmdZr3t0K64gzpwIc4LXiuDu.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/dfGJKPaxabWaXacJ2fw6zXgA9QX.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/q3RB5V8jW1z0kN9qDK7WpKQjhyh.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "new york city",
                        "friendship",
                        "marriage proposal"
                    ],
                    cast:[
                        "Tom Hanks",
                        "Catherine Zeta-Jones",
                        "Stanley Tucci"
                    ],
                    ageRating:"U/A 13+"
                },
                {
                    type:"movie",
                    title:"Jurassic Park",
                    desc:"A wealthy entrepreneur secretly creates a theme park featuring living dinosaurs drawn from prehistoric DNA. Before opening day, he invites a team of experts and his two eager grandchildren to experien...",
                    genres:[
                        "Adventure",
                        "Science Fiction"
                    ],
                    runtime:127,
                    year:"1993",
                    isMostLiked:true,
                    videos:{
                        clip:"B_ZHnUAXaBI",
                        trailer:"bx46tthKXmc"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/mlolzwV6VrKOZJ1SfYbPHXXDD4p.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/79bJL9ydAMYVltuNTt4VhxORqIz.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/wv4klz73UtLSwhAXqYJLi6GuI2H.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "exotic island",
                        "island",
                        "triceratops"
                    ],
                    cast:[
                        "Sam Neill",
                        "Laura Dern",
                        "Jeff Goldblum"
                    ],
                    ageRating:"U/A 13+"
                },
                {
                    type:"movie",
                    title:"Minority Report",
                    desc:"John Anderton is a top 'Precrime' cop in the late-21st century, when technology can predict crimes before they're committed. But Anderton becomes the quarry when another investigator targets him for a...",
                    genres:[
                        "Science Fiction",
                        "Action",
                        "Thriller"
                    ],
                    runtime:145,
                    year:"2002",
                    isMostLiked:true,
                    videos:{
                        trailer:"3JNsNp2DVSE"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/f1gIZWXXPKzdxiWTMf7ZO4p9U3o.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/r1gLQFbpkWWLrOEPmpqzzMIUxxj.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/xn3UbIliWqRXQH50RDSga47FvPs.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "police chief",
                        "precognition",
                        "hologram"
                    ],
                    cast:[
                        "Tom Cruise",
                        "Samantha Morton",
                        "Max von Sydow"
                    ],
                    ageRating:"U/A 13+"
                },
                {
                    type:"movie",
                    title:"Ready Player One",
                    desc:"When the creator of a popular video game system dies, a virtual contest is created to compete for his fortune.",
                    genres:[
                        "Adventure",
                        "Action",
                        "Science Fiction"
                    ],
                    runtime:140,
                    year:"2018",
                    isMostLiked:true,
                    videos:{
                        trailer:"1hrwbc5qCZ4",
                        teaser:"DlU4ZSU2xzg"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/7ngkC5XeGgtSEOVc5dXmQPd1lUh.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/5a7lMDn3nAj2ByO0X1fg6BhUphR.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/sKLqXYCvWdbMM91CVMXEVZqYE6Z.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "future",
                        "video game",
                        "virtual reality"
                    ],
                    cast:[
                        "Tye Sheridan",
                        "Olivia Cooke",
                        "Ben Mendelsohn"
                    ],
                    ageRating:"U/A 13+"
                },
                {
                    type:"movie",
                    title:"E.T. the Extra-Terrestrial",
                    desc:"An alien is left behind on Earth and saved by the 10-year-old Elliot who decides to keep him hidden in his home. While a task force hunts for the extra-terrestrial, Elliot, his brother, and his little...",
                    genres:[
                        "Science Fiction",
                        "Adventure",
                        "Family"
                    ],
                    runtime:115,
                    year:"1982",
                    isMostLiked:true,
                    videos:{
                        clip:"JqfGB0ofyN8",
                        trailer:"NsvdZ_z56c0"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/nxjkgFpYaT8PtySODYGxcOFa6pS.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/mXLVA0YL6tcXi6SJSuAh9ONXFj5.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/cj5vQJiJ9ByXNNeVy3mG5exM1BA.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "farewell",
                        "space marine",
                        "operation"
                    ],
                    cast:[
                        "Henry Thomas",
                        "Drew Barrymore",
                        "Robert MacNaughton"
                    ],
                    ageRating:"U/A 7+"
                },
                {
                    type:"movie",
                    title:"Raiders of the Lost Ark",
                    desc:"When Dr. Indiana Jones – the tweed-suited professor who just happens to be a celebrated archaeologist – is hired by the government to locate the legendary Ark of the Covenant, he finds himself up agai...",
                    genres:[
                        "Adventure",
                        "Action"
                    ],
                    runtime:115,
                    year:"1981",
                    isMostLiked:true,
                    videos:{
                        clip:"8bYvCSfd72A",
                        trailer:"0xQSIdSRlAk",
                        teaser:"w9YcGbOupgw"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/edtIzvWUuMDG8qsWsYzjMXoXTy2.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/c7Mjuip0jfHLY7x8ZSEriRj45cu.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/pQwAK7zj1tU8bYdVI47v7bUpv5B.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "egypt",
                        "treasure",
                        "medallion"
                    ],
                    cast:[
                        "Harrison Ford",
                        "Karen Allen",
                        "Paul Freeman"
                    ],
                    ageRating:"U/A 7+"
                },
                {
                    type:"movie",
                    title:"Indiana Jones and the Last Crusade",
                    desc:"In 1938, an art collector appeals to eminent archaeologist Dr. Indiana Jones to embark on a search for the Holy Grail. Indy learns that a medieval historian has vanished while searching for it, and th...",
                    genres:[
                        "Adventure",
                        "Action"
                    ],
                    runtime:127,
                    year:"1989",
                    isMostLiked:true,
                    videos:{
                        clip:"VA7J0KkanzM",
                        trailer:"GRfckj3ETh0"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/dA0IuruOfLhJUti48OOJdykxbkY.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/7KGdTzKux4fp5sW7hUM33NWqBU1.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/hDzmP4qDyJIr0QvfSEcAhRT6ydh.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "saving the world",
                        "nazi",
                        "holy grail"
                    ],
                    cast:[
                        "Harrison Ford",
                        "Sean Connery",
                        "Denholm Elliott"
                    ],
                    ageRating:"U/A 13+"
                },
                {
                    type:"movie",
                    title:"Bridge of Spies",
                    desc:"During the Cold War, the Soviet Union captures U.S. pilot Francis Gary Powers after shooting down his U-2 spy plane. Sentenced to 10 years in prison, Powers' only hope is New York lawyer James Donovan...",
                    genres:[
                        "Thriller",
                        "Drama"
                    ],
                    runtime:141,
                    year:"2015",
                    isMostLiked:true,
                    videos:{
                        trailer:"owhBnicLZt4"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/yq3RPPEbI1OQc2pRZzjMTgzRalQ.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/3vNg9pb2jPv2EFUZXrk7Xviqalm.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/y17aIeyX7bQdvaQq991q8FGoVbi.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "spy",
                        "cold war",
                        "soviet union"
                    ],
                    cast:[
                        "Tom Hanks",
                        "Mark Rylance",
                        "Amy Ryan"
                    ],
                    ageRating:"U/A 13+"
                }
            ],
            shows: [],
            info: {
                name: 'Steven Spielberg',
                desc: 'Master of blockbuster filmmaking, Spielberg combines emotional depth with large-scale visual spectacle. He excels in adventure, drama, and science fiction characterized by gripping plots with heartwarming and deep human core.',
                renowned: 'Globally',
                knownFor: ["Schindler's List", 'Jaws', 'Saving Private Ryan'],
                genres: ['Adventure', 'Drama'],
                preferences: "big, adventurous, visually striking and emotional cinema"
            }
        },
        nolan: {
            tabs: ['director'],
            title: "Nolan's Mind Benders",
            movies: [
                {
                    type:"movie",
                    title:"Inception",
                    desc:"Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: \"inc...",
                    genres:[
                        "Action",
                        "Science Fiction",
                        "Adventure"
                    ],
                    runtime:148,
                    year:"2010",
                    isMostLiked:true,
                    videos:{
                        clip:"mpj9dL7swwk",
                        trailer:"cdx31ak4KbQ",
                        teaser:"HO5v3RhO8ek"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/rWDkbJlIyqN8KcqXajh9sZMwGzo.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/iXYh7y0vI1DZR0taTuvrr8PSnOd.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "rescue",
                        "mission",
                        "dream"
                    ],
                    cast:[
                        "Leonardo DiCaprio",
                        "Joseph Gordon-Levitt",
                        "Ken Watanabe"
                    ],
                    ageRating:"U/A 13+"
                },
                {
                    type:"movie",
                    title:"Interstellar",
                    desc:"The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
                    genres:[
                        "Adventure",
                        "Drama",
                        "Science Fiction"
                    ],
                    runtime:169,
                    year:"2014",
                    isMostLiked:true,
                    videos:{
                        clip:"Rvns5DaW-ug",
                        trailer:"LY19rHKAaAg",
                        teaser:"PG5c2GgkA2w"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/yUa0iCocBPsGJ79BwrshHqz45Qc.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/xJHokMbljvjADYdit5fK5VQsXEG.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/v6PLrz2a4Fcr2X1h1OmdCfwWaRU.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "rescue",
                        "future",
                        "spacecraft"
                    ],
                    cast:[
                        "Matthew McConaughey",
                        "Anne Hathaway",
                        "Michael Caine"
                    ],
                    ageRating:"U/A 13+"
                },
                {
                    type:"movie",
                    title:"The Dark Knight",
                    desc:"Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the stree...",
                    genres:[
                        "Drama",
                        "Action",
                        "Crime"
                    ],
                    runtime:152,
                    year:"2008",
                    isMostLiked:true,
                    videos:{
                        clip:"QEBCT-Lsh-A",
                        trailer:"LDG9bisJEaI"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/A9YICp8lGP7Es5R8oD6qUbvDWhn.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/nMKdUUepR0i5zn0y1T4CsSB5chy.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/nO5Uix3Qr4WjOyU1BMPv0okyNWm.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "joker",
                        "sadism",
                        "chaos"
                    ],
                    cast:[
                        "Christian Bale",
                        "Heath Ledger",
                        "Michael Caine"
                    ],
                    ageRating:"U/A 13+"
                },
                {
                    type:"movie",
                    title:"The Dark Knight Rises",
                    desc:"Following the death of District Attorney Harvey Dent, Batman assumes responsibility for Dent's crimes to protect the late attorney's reputation and is subsequently hunted by the Gotham City Police Dep...",
                    genres:[
                        "Action",
                        "Crime",
                        "Drama"
                    ],
                    runtime:165,
                    year:"2012",
                    isMostLiked:true,
                    videos:{
                        clip:"yiyUl1VMiDs",
                        trailer:"GAjBzu8ggi0"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/73lKeIl7MOQsFK74shmoSAhitg6.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/c3OHQncTAnKFhdOTX7D3LTW6son.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/xdNHIYqo1VzxMCw4n51ARgem6ym.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "fight",
                        "burglar",
                        "hostage"
                    ],
                    cast:[
                        "Christian Bale",
                        "Michael Caine",
                        "Gary Oldman"
                    ],
                    ageRating:"U/A 13+"
                },
                {
                    type:"movie",
                    title:"Batman Begins",
                    desc:"Driven by tragedy, billionaire Bruce Wayne dedicates his life to uncovering and defeating the corruption that plagues his home, Gotham City.  Unable to work within the system, he instead creates a new...",
                    genres:[
                        "Action",
                        "Crime",
                        "Drama"
                    ],
                    runtime:140,
                    year:"2005",
                    isMostLiked:true,
                    videos:{
                        clip:"5oeyTU36lBw",
                        trailer:"lirBhHXvDSg"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/v5H01hnfZd9a3WPkKanW9hptP2.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/lh5lbisD4oDbEKgUxoRaZU8HVrk.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/kmqIeEVaVfbBCgV9WFPuLUl84uW.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "martial arts",
                        "undercover",
                        "loss of loved one"
                    ],
                    cast:[
                        "Christian Bale",
                        "Michael Caine",
                        "Liam Neeson"
                    ],
                    ageRating:"U/A 13+"
                },
                {
                    type:"movie",
                    title:"Dunkirk",
                    desc:"The story of the miraculous evacuation of Allied soldiers from Belgium, Britain, Canada and France, who were cut off and surrounded by the German army from the beaches and harbour of Dunkirk between M...",
                    genres:[
                        "War",
                        "Action",
                        "Drama"
                    ],
                    runtime:107,
                    year:"2017",
                    isMostLiked:true,
                    videos:{
                        trailer:"T7O7BtBnsG4",
                        teaser:"kvbiVcj4l0c"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/3GXCm3TDTESevM6GuFYxQ03sray.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/ddIkmH3TpR6XSc47jj0BrGK5Rbz.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/d23hHJ9S84b1vtXXOCE0VI17ckD.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "army",
                        "beach",
                        "france"
                    ],
                    cast:[
                        "Fionn Whitehead",
                        "Tom Hardy",
                        "Mark Rylance"
                    ],
                    ageRating:"U/A 13+"
                },
                {
                    type:"movie",
                    title:"The Prestige",
                    desc:"A mysterious story of two magicians whose intense rivalry leads them on a life-long battle for supremacy -- full of obsession, deceit and jealousy with dangerous and deadly consequences.",
                    genres:[
                        "Drama",
                        "Mystery",
                        "Science Fiction"
                    ],
                    runtime:130,
                    year:"2006",
                    isMostLiked:true,
                    videos:{
                        trailer:"ijXruSzfGEc"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/8qNI1E7jprDtCVoWKhXFagrP6ox.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/xBDE2d6HM1aBKQRu4IT7SfPD9fs.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/spOKEWc2HsfVJWCicr5CXCCVRil.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "dying and death",
                        "suicide",
                        "class society"
                    ],
                    cast:[
                        "Hugh Jackman",
                        "Christian Bale",
                        "Michael Caine"
                    ],
                    ageRating:"U/A 13+"
                },
                {
                    type:"movie",
                    title:"Memento",
                    desc:"Leonard Shelby is tracking down the man who raped and murdered his wife. The difficulty of locating his wife's killer, however, is compounded by the fact that he suffers from a rare, untreatable form ...",
                    genres:[
                        "Mystery",
                        "Thriller"
                    ],
                    runtime:113,
                    year:"2000",
                    isMostLiked:true,
                    videos:{
                        trailer:"Rq9eM4ZXRgs"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/5wmhPm9UmAFsVAwYjk5ZDjuqoW0.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/7Wev9JMo6R5XAfz2KDvXb7oPMmy.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/hlh8G7r8iOqJmpRbN8j9IvtMgc9.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "drug dealer",
                        "amnesia",
                        "insulin"
                    ],
                    cast:[
                        "Guy Pearce",
                        "Carrie-Anne Moss",
                        "Joe Pantoliano"
                    ],
                    ageRating:"A-Rated"
                },
                {
                    type:"movie",
                    title:"Tenet",
                    desc:"Armed with only one word - Tenet - and fighting for the survival of the entire world, the Protagonist journeys through a twilight world of international espionage on a mission that will unfold in some...",
                    genres:[
                        "Action",
                        "Thriller",
                        "Science Fiction"
                    ],
                    runtime:150,
                    year:"2020",
                    isMostLiked:true,
                    videos:{
                        trailer:"KJP5RunZUKk"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/bImDTzVitwcKZXCF1naWRGI5W0g.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/yY76zq9XSuJ4nWyPDuwkdV7Wt0c.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/klkGMBmx2NDjkjtWxtAjuF6BOy8.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "assassin",
                        "espionage",
                        "spy"
                    ],
                    cast:[
                        "John David Washington",
                        "Robert Pattinson",
                        "Elizabeth Debicki"
                    ],
                    ageRating:"U/A 13+"
                },
                {
                    type:"movie",
                    title:"Oppenheimer",
                    desc:"The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
                    genres:[
                        "Drama",
                        "History"
                    ],
                    runtime:181,
                    year:"2023",
                    isMostLiked:true,
                    videos:{
                        clip:"sOsIKu2VAkM",
                        trailer:"qiuSBWVdgLI",
                        teaser:"hlZO437mwXQ"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/cUIqZd6jJCbO94Txt1CkTs7MSeP.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/vsnVZCWKGnaVqln5erH0uHxHZeC.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "atomic bomb",
                        "patriotism",
                        "new mexico"
                    ],
                    cast:[
                        "Cillian Murphy",
                        "Emily Blunt",
                        "Matt Damon"
                    ],
                    ageRating:"A-Rated"
                },
                {
                    type:"movie",
                    title:"Insomnia",
                    desc:"Two Los Angeles homicide detectives are dispatched to a northern town where the sun doesn't set to investigate the methodical murder of a local teen.",
                    genres:[
                        "Crime",
                        "Thriller"
                    ],
                    runtime:118,
                    year:"2002",
                    isMostLiked:false,
                    videos:{
                        clip:"aVstepxNXNc",
                        trailer:"emIHzg4VH8A"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/hLJ1XZIUjvgYOE7Z7fx8pE2FZZA.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/2tsmTWJsR81cwwZHLE85vPxSCoR.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/pPN8TskktZtEOgQXfgu0Q8tbnfk.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "hotel",
                        "small town",
                        "homicide"
                    ],
                    cast:[
                        "Al Pacino",
                        "Robin Williams",
                        "Hilary Swank"
                    ],
                    ageRating:"A-Rated"
                },
                {
                    type:"movie",
                    title:"Following",
                    desc:"Bill, an idle, unemployed aspiring writer, walks the crowded streets of London following randomly chosen strangers, a seemingly innocent entertainment that becomes dangerous when he crosses paths with...",
                    genres:[
                        "Drama",
                        "Thriller"
                    ],
                    runtime:69,
                    year:"1999",
                    isMostLiked:false,
                    videos:{
                        clip:"yXOTD4y-SCc",
                        trailer:"Xc1cMA4UryY"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/eNHlI1Ei0cbB1UhUion2p1WsjuR.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/owgFkvnozNYdShynerDjot2hHK2.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/soA0pJOdcmrAgTfmSUj4qKXFbXp.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "london, england",
                        "robbery",
                        "stalker"
                    ],
                    cast:[
                        "Jeremy Theobald",
                        "Alex Haw",
                        "Lucy Russell"
                    ],
                    ageRating:"A-Rated"
                }
            ],
            shows: [],
            info: {
                name: 'Christopher Nolan',
                desc: 'The cerebral and high concept storytelling of Nolan often explores complex themes like time, memory, and identity, with intricate, puzzle-like narratives. Known for his mind-bending plots and stunning visuals.',
                renowned: 'Globally',
                knownFor: ['Interstellar', 'Oppenheimer', 'Inception'],
                genres: ['Sci-fi', 'Thriller', 'Psychological-Drama'],
                preferences: "visually rich and complex science fictional stories"
            }
        },
        kubrick: {
            tabs: ['director'],
            title: "Stanley Kubrick's Cinematic Art",
            movies: [
                {
                    type:"movie",
                    title:"Full Metal Jacket",
                    desc:"A pragmatic U.S. Marine observes the dehumanizing effects the U.S.-Vietnam War has on his fellow recruits from their brutal boot camp training to the bloody street fighting in Hue.",
                    genres:[
                        "Drama",
                        "War"
                    ],
                    runtime:117,
                    year:"1987",
                    isMostLiked:true,
                    videos:{
                        clip:"3Un-WBlVHPw",
                        trailer:"ZFlm7fFfEmU"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/lQvuJEeT8sA2jBNZCIOAI4ypYtQ.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/mKEmuB7diOa7Ef0tJSGQ3fYJnNe.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/qwdLJlmyWD1Laak24kskzXmSFh0.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "rescue",
                        "sniper",
                        "vietnam war"
                    ],
                    cast:[
                        "Matthew Modine",
                        "Adam Baldwin",
                        "Vincent D'Onofrio"
                    ],
                    ageRating:"A-Rated"
                },
                {
                    type:"movie",
                    title:"The Shining",
                    desc:"Jack Torrance accepts a caretaker job at the Overlook Hotel, where he, along with his wife Wendy and their son Danny, must live isolated from the rest of the world for the winter. But they aren't prep...",
                    genres:[
                        "Horror",
                        "Thriller"
                    ],
                    runtime:144,
                    year:"1980",
                    isMostLiked:true,
                    videos:{
                        clip:"AjUzPpuqzaE",
                        trailer:"FZQvIJxG9Xs"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/cAQI3ogdNDd3WqVwERuc55iHvph.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/mmd1HnuvAzFc4iuVJcnBrhDNEKr.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/7Qc7geNI4C4i9A1OFk0aPe5VYzn.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "hotel",
                        "child abuse",
                        "isolation"
                    ],
                    cast:[
                        "Jack Nicholson",
                        "Shelley Duvall",
                        "Danny Lloyd"
                    ],
                    ageRating:"A-Rated"
                },
                {
                    type:"movie",
                    title:"A Clockwork Orange",
                    desc:"In a near-future Britain, young Alexander DeLarge and his pals get their kicks beating and raping anyone they please. When not destroying the lives of others, Alex swoons to the music of Beethoven. Th...",
                    genres:[
                        "Science Fiction",
                        "Crime"
                    ],
                    runtime:137,
                    year:"1971",
                    isMostLiked:true,
                    videos:{
                        clip:"4uRwjqBV3gA",
                        trailer:"T54uZPI4Z8A"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/snidsjyk64ur9S58hb8NNqR6xQU.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/ysnVjBz5iRSRSl3xrNcQTUfa4L3.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/irRlKJHgl7BNn4HsCnWL0TeZviH.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "london, england",
                        "robbery",
                        "street gang"
                    ],
                    cast:[
                        "Malcolm McDowell",
                        "Patrick Magee",
                        "Carl Duering"
                    ],
                    ageRating:"A-Rated"
                },
                {
                    type:"movie",
                    title:"Eyes Wide Shut",
                    desc:"After Dr. Bill Harford's wife, Alice, admits to having sexual fantasies about a man she met, Bill becomes obsessed with having a sexual encounter. He discovers an underground sexual group and attends ...",
                    genres:[
                        "Drama",
                        "Thriller",
                        "Mystery"
                    ],
                    runtime:159,
                    year:"1999",
                    isMostLiked:true,
                    videos:{
                        trailer:"VSS47StLOhk"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/eAuS9UpWi44tyI7PdOLrcgLpZuV.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/oqxIs6674wwQ6V4omFTYRF0R6Bl.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/rwUXccna9yw4ajcZChvCOHYB3E0.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "new york city",
                        "prostitute",
                        "sexual obsession"
                    ],
                    cast:[
                        "Tom Cruise",
                        "Nicole Kidman",
                        "Sydney Pollack"
                    ],
                    ageRating:"A-Rated"
                },
                {
                    type:"movie",
                    title:"Spartacus",
                    desc:"The rebellious Thracian Spartacus, born and raised a slave, is sold to Gladiator trainer Batiatus. After weeks of being trained to kill for the arena, Spartacus turns on his owners and leads the other...",
                    genres:[
                        "History",
                        "War",
                        "Drama"
                    ],
                    runtime:197,
                    year:"1960",
                    isMostLiked:true,
                    videos:{
                        trailer:"HcIMY1Ah3aw"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/841ktc64H8aXIXqJvq3a8S5xrT1.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/aheSIG4h3JNxWeDvdb1NxKzgjaM.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/2LnOk1tYpDpciqkP6QSh7AD7vOd.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "epic",
                        "gladiator",
                        "roman empire"
                    ],
                    cast:[
                        "Kirk Douglas",
                        "Laurence Olivier",
                        "Jean Simmons"
                    ],
                    ageRating:"U/A 13+"
                },
                {
                    type:"movie",
                    title:"Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
                    desc:"After the insane General Jack D. Ripper initiates a nuclear strike on the Soviet Union, a war room full of politicians, generals and a Russian diplomat all frantically try to stop the nuclear strike.",
                    genres:[
                        "Comedy",
                        "War"
                    ],
                    runtime:95,
                    year:"1964",
                    isMostLiked:true,
                    videos:{
                        clip:"tyOLJ99ysdU",
                        trailer:"Ja3n2Mxf21s"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/iCzC57sZYfp87JMmghZaXScJ3wy.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/sTp8K0SfcC2RQef1Tu160z3niHO.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/oQFEghR50LL4QGNYOMPl6YkmfgO.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "usa president",
                        "general",
                        "cold war"
                    ],
                    cast:[
                        "Peter Sellers",
                        "George C. Scott",
                        "Sterling Hayden"
                    ],
                    ageRating:"U/A 7+"
                },
                {
                    type:"movie",
                    title:"Barry Lyndon",
                    desc:"An Irish rogue uses his cunning and wit to work his way up the social classes of 18th century England, transforming himself from the humble Redmond Barry into the noble Barry Lyndon.",
                    genres:[
                        "Drama",
                        "Romance",
                        "War"
                    ],
                    runtime:185,
                    year:"1975",
                    isMostLiked:false,
                    videos:{
                        clip:"woO1Cs6c-oo",
                        trailer:"XjPSGuJskxM"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/yRViKouQtLqfuMjqvAmx66cBnTg.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/7ZT8AdGAzK7hv8JhQ0tCtEZ72JP.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/3JCe5mAsPkj5l4UfPnXbhqdwrjF.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "gambling",
                        "desertion",
                        "fencing"
                    ],
                    cast:[
                        "Ryan O'Neal",
                        "Marisa Berenson",
                        "Patrick Magee"
                    ],
                    ageRating:"U/A 7+"
                },
                {
                    type:"movie",
                    title:"Lolita",
                    desc:"Humbert Humbert is a middle-aged British novelist who is both appalled by and attracted to the vulgarity of American culture. When he comes to stay at the boarding house run by Charlotte Haze, he soon...",
                    genres:[
                        "Drama",
                        "Comedy",
                        "Romance"
                    ],
                    runtime:154,
                    year:"1962",
                    isMostLiked:true,
                    videos:{
                        trailer:"ihZ-aIJj6-g"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/oQ5QkraJrOltwbaau93vN1t3XzR.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/40JNQ4FOekM1LDgUC5mDcM8bZyl.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/b9NhXfe4t3Ka7lK3OPYivbNWwSu.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "hotel",
                        "depression",
                        "lolita"
                    ],
                    cast:[
                        "James Mason",
                        "Shelley Winters",
                        "Sue Lyon"
                    ],
                    ageRating:"U-Rated"
                },
                {
                    type:"movie",
                    title:"Paths of Glory",
                    desc:"A commanding officer defends three scapegoats on trial for a failed offensive that occurred within the French Army in 1916.",
                    genres:[
                        "War",
                        "Drama",
                        "History"
                    ],
                    runtime:88,
                    year:"1957",
                    isMostLiked:false,
                    videos:{
                        clip:"Tibic2070mE",
                        trailer:"FESvZ0HG2p4"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/clzms0KmqM5xHIUiOR6ZwL6VVp0.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/354kfjVb96mtFALMhBE6jzHGiA2.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/4qFgkxNibQIJHCEB4nsXsca3RU2.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "army",
                        "france",
                        "general"
                    ],
                    cast:[
                        "Kirk Douglas",
                        "Ralph Meeker",
                        "Adolphe Menjou"
                    ],
                    ageRating:"U-Rated"
                },
                {
                    type:"movie",
                    title:"Killer's Kiss",
                    desc:"Davey Gordon, a New York City boxer at the end of his career, falls for dancer Gloria Price. However, their budding relationship is interrupted by Gloria's violent boss, Vincent Rapallo, who has eyes ...",
                    genres:[
                        "Thriller",
                        "Crime",
                        "Drama"
                    ],
                    runtime:68,
                    year:"1955",
                    isMostLiked:false,
                    videos:{
                        trailer:"W25UlE0C1-Y"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/mSPw5aImriARLl98xworCCUuCvf.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/7iFieVSvFizrGMRsxwXedBWqw4g.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/bmyeAs2hvgPgV5Lz07xnBeRdg9z.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "new york city",
                        "film noir",
                        "hoodlum"
                    ],
                    cast:[
                        "Frank Silvera",
                        "Jamie Smith",
                        "Irene Kane"
                    ],
                    ageRating:"U/A 10+"
                },
                {
                    type:"movie",
                    title:"The Killing",
                    desc:"Career criminal Johnny Clay recruits a sharpshooter, a crooked police officer, a bartender and a betting teller named George, among others, for one last job before he goes straight and gets married. B...",
                    genres:[
                        "Crime",
                        "Thriller"
                    ],
                    runtime:85,
                    year:"1956",
                    isMostLiked:false,
                    videos:{
                        clip:"6yHQlP-OwgQ",
                        trailer:"c0Odg-GY40w"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/ibmTN1f5nDwuTiGw9S6jSpzZFuY.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/dY0suaAdGpOqh7JkLeIN6lT7k9d.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/2AIkqhddn1Imzw2N2n6lPjvcZGT.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "sniper",
                        "adultery",
                        "robbery"
                    ],
                    cast:[
                        "Sterling Hayden",
                        "Coleen Gray",
                        "Vince Edwards"
                    ],
                    ageRating:"U/A 10+"
                },
                {
                    type:"movie",
                    title:"Fear and Desire",
                    desc:"After their airplane crashes behind enemy lines, four soldiers must survive and try to find a way back to their battalion. However, when they come across a local peasant girl the horrors of war quickl...",
                    genres:[
                        "Drama",
                        "War",
                        "Thriller"
                    ],
                    runtime:62,
                    year:"1953",
                    isMostLiked:false,
                    videos:{
                        trailer:"rDy7E6pNBSc",
                        teaser:"lTU4UIHw-x4"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/xUqVMa2Z3krtCWCdoSSvbUE8qsA.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/e3o0Dwlzzpd4kJpOOJgVyMstnII.jpg",
                    poster:null,
                    logo:null,
                    keywords:[
                        "airplane",
                        "soldier",
                        "war"
                    ],
                    cast:[
                        "Frank Silvera",
                        "Kenneth Harp",
                        "Paul Mazursky"
                    ],
                    ageRating:"U/A 10+"
                }
            ],
            shows: [],
            info: {
                name: 'Stanley Kubrick',
                desc: "A visionary director, Kubrick's films are known for their technical brilliance, bold visuals, and deep philosophical themes. His work is often unsettling, intellectually challenging, and meticulously crafted, with each frame rich in meaning",
                renowned: 'Globally',
                knownFor: ['The Shining', '2001: A Space Odyssey', 'Eyes Wide Shut'],
                genres: ['Psychological-Thriller', 'Drama'],
                preferences: "thought-provoking and visually distinctive artistic films"
            }
        },
        fincher: {
            tabs: ['director'],
            title: "David Fincher's Dark Psychological Blend",
            movies: [
                {
                    type:"movie",
                    title:"Fight Club",
                    desc:"A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every...",
                    genres:[
                        "Drama"
                    ],
                    runtime:139,
                    year:"1999",
                    isMostLiked:true,
                    videos:{
                        trailer:"dfeUzm6KF4g"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/fygeMr16EcxJiYhdiO1LEr7iHtI.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/7Uqhv24pGJs4Ns31NoOPWFJGWNG.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "dual identity",
                        "rage and hate",
                        "nihilism"
                    ],
                    cast:[
                        "Edward Norton",
                        "Brad Pitt",
                        "Helena Bonham Carter"
                    ],
                    ageRating:"A-Rated"
                },
                {
                    type:"movie",
                    title:"Se7en",
                    desc:"Two homicide detectives are on a desperate hunt for a serial killer whose crimes are based on the \"seven deadly sins\" in this dark and haunting film that takes viewers from the tortured remains of one...",
                    genres:[
                        "Crime",
                        "Mystery",
                        "Thriller"
                    ],
                    runtime:127,
                    year:"1995",
                    isMostLiked:true,
                    videos:{
                        clip:"BJKukbTDLto",
                        trailer:"vr3UZ-axauU"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/6jRk8m3Bd5i514cFzv95YKUjpw8.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/vxPrxPufDQc4e2zr492LkXoEjdl.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/4msVv6tLAykTlWO0i17DI15Trv.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "rage and hate",
                        "police",
                        "s.w.a.t."
                    ],
                    cast:[
                        "Morgan Freeman",
                        "Brad Pitt",
                        "Gwyneth Paltrow"
                    ],
                    ageRating:"A-Rated"
                },
                {
                    type:"movie",
                    title:"Zodiac",
                    desc:"The zodiac murders cause the lives of Paul Avery, David Toschi and Robert Graysmith to intersect.",
                    genres:[
                        "Crime",
                        "Drama",
                        "Mystery"
                    ],
                    runtime:157,
                    year:"2007",
                    isMostLiked:true,
                    videos:{
                        trailer:"yNncHPl1UXg"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/68q8BFxbZIRkux15PY4TONuujBq.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/elzsm8vIpYVh0s6ztFEKElqgXqe.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/cyapem0oKE2nySKpYaQvmAEMfCF.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "newspaper",
                        "journalist",
                        "california"
                    ],
                    cast:[
                        "Jake Gyllenhaal",
                        "Mark Ruffalo",
                        "Anthony Edwards"
                    ],
                    ageRating:"A-Rated"
                },
                {
                    type:"movie",
                    title:"Gone Girl",
                    desc:"With his wife's disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it's suspected that he may not be innocent.",
                    genres:[
                        "Mystery",
                        "Thriller",
                        "Drama"
                    ],
                    runtime:149,
                    year:"2014",
                    isMostLiked:true,
                    videos:{
                        clip:"GIdhXAc7atE",
                        trailer:"2-_-1nJf8Vg",
                        teaser:"e1AZgJg3OEA"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/5Tqdk3eezqu945KcBtz3SYQxidN.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/xISE4M4IhCFgd9oOEFKYfkknumg.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/9XppjJk4i9tk8q4NWIPcs4pVm0w.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "infidelity",
                        "wife",
                        "marriage crisis"
                    ],
                    cast:[
                        "Ben Affleck",
                        "Rosamund Pike",
                        "Neil Patrick Harris"
                    ],
                    ageRating:"A-Rated"
                },
                {
                    type:"movie",
                    title:"The Social Network",
                    desc:"The tale of a new breed of cultural insurgent: a punk genius who sparked a revolution and changed the face of human interaction for a generation, and perhaps forever. Chronicling the formation of Face...",
                    genres:[
                        "Drama"
                    ],
                    runtime:121,
                    year:"2010",
                    isMostLiked:true,
                    videos:{
                        clip:"orAWNu1cVXg",
                        trailer:"rBCNU0XT9GY",
                        teaser:"iJCSRxzPfXI"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/xxIc4OOQDNGmoN4cSyzNHfoSiGq.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/1PXwh3nJzgRkkYnqfWInJNypeL4.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/c4chOkNTnwNMFhxkzi6tCJ2UzsM.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "hacker",
                        "ex-girlfriend",
                        "narcissism"
                    ],
                    cast:[
                        "Jesse Eisenberg",
                        "Andrew Garfield",
                        "Armie Hammer"
                    ],
                    ageRating:"U/A 13+"
                },
                {
                    type:"movie",
                    title:"The Curious Case of Benjamin Button",
                    desc:"Born under unusual circumstances, Benjamin Button springs into being as an elderly man in a New Orleans nursing home and ages in reverse. Twelve years after his birth, he meets Daisy, a child who flit...",
                    genres:[
                        "Drama",
                        "Fantasy",
                        "Romance"
                    ],
                    runtime:166,
                    year:"2008",
                    isMostLiked:true,
                    videos:{
                        trailer:"ODjKVMHF9fM"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/6mnoD9Bzcbnm4jbVBgJUkdKFR0E.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/2fswjyrY3GEzeoVn6mF8pNeNcgf.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/bNzkKnHQhJ1NrK0u5Yyi884J57P.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "new york city",
                        "navy",
                        "funeral"
                    ],
                    cast:[
                        "Brad Pitt",
                        "Cate Blanchett",
                        "Taraji P. Henson"
                    ],
                    ageRating:"U/A 13+"
                },
                {
                    type:"movie",
                    title:"The Girl with the Dragon Tattoo",
                    desc:"Disgraced journalist Mikael Blomkvist investigates the disappearance of a weary patriarch's niece from 40 years ago. He is aided by the pierced, tattooed, punk computer hacker named Lisbeth Salander. ...",
                    genres:[
                        "Thriller",
                        "Crime",
                        "Mystery"
                    ],
                    runtime:158,
                    year:"2011",
                    isMostLiked:true,
                    videos:{
                        trailer:"svucpVzRBD4",
                        teaser:"YKWXEfXGWtA"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/17XtQC6vjqxUWtFAJmba2tpGCTx.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/heLjxyCa7WPGkzbhkiiIe09hYOi.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/8Ou4GjXqOLWplIMctkTWosQbGoy.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "journalist",
                        "island",
                        "rape"
                    ],
                    cast:[
                        "Daniel Craig",
                        "Rooney Mara",
                        "Christopher Plummer"
                    ],
                    ageRating:"A-Rated"
                },
                {
                    type:"movie",
                    title:"The Game",
                    desc:"In honor of his birthday, San Francisco banker Nicholas Van Orton, a financial genius and a cold-hearted loner, receives an unusual present from his younger brother, Conrad: a gift certificate to play...",
                    genres:[
                        "Drama",
                        "Thriller",
                        "Mystery"
                    ],
                    runtime:129,
                    year:"1997",
                    isMostLiked:true,
                    videos:{
                        clip:"cM8Vrbz92ew",
                        trailer:"9KXxG-KjfUc"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/dsjP98yfjEsYLKpXLKrfW11V8Xd.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/sjNXaMPWOH47VEtvE77BqUzHatB.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/hKSoSJg8BIScPfjMZhkbv9aE79l.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "suicide",
                        "birthday",
                        "gun"
                    ],
                    cast:[
                        "Michael Douglas",
                        "Sean Penn",
                        "Deborah Kara Unger"
                    ],
                    ageRating:"A-Rated"
                },
                {
                    type:"movie",
                    title:"Panic Room",
                    desc:"Trapped in their New York brownstone's panic room, a hidden chamber built as a sanctuary in the event of break-ins, newly divorced Meg Altman and her young daughter Sarah play a deadly game of cat-and...",
                    genres:[
                        "Crime",
                        "Drama",
                        "Thriller"
                    ],
                    runtime:111,
                    year:"2002",
                    isMostLiked:true,
                    videos:{
                        trailer:"8IAIJQpQuSM"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/nxgf9Cykin9wWEHMtHILDTiNXBE.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/9G5bteYI8FXaY9EomnUP0kdHm66.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/l7uy9GsBYl9Xax8yM6385CnAb9L.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "new york city",
                        "hostage",
                        "bravery"
                    ],
                    cast:[
                        "Jodie Foster",
                        "Kristen Stewart",
                        "Forest Whitaker"
                    ],
                    ageRating:"A-Rated"
                },
                {
                    type:"movie",
                    title:"The Killer",
                    desc:"After a fateful near-miss, an assassin battles his employers, and himself, on an international manhunt he insists isn't personal.",
                    genres:[
                        "Crime",
                        "Thriller"
                    ],
                    runtime:118,
                    year:"2023",
                    isMostLiked:true,
                    videos:{
                        trailer:"5S7FR_HCg9g"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/tJtPeE1fR6VQot8Fg1pg852ESJU.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/zEqfkiyWZILZKy2M1lgeGmIRzYR.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/4xaqtScTG7EWKkKjgELqOJjf6uS.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "sniper",
                        "new york city",
                        "assassin"
                    ],
                    cast:[
                        "Michael Fassbender",
                        "Tilda Swinton",
                        "Charles Parnell"
                    ],
                    ageRating:"A-Rated"
                },
                {
                    type:"movie",
                    title:"Mank",
                    desc:"1930s Hollywood is reevaluated through the eyes of scathing social critic and alcoholic screenwriter Herman J. Mankiewicz as he races to finish the screenplay of Citizen Kane.",
                    genres:[
                        "Drama",
                        "History"
                    ],
                    runtime:132,
                    year:"2020",
                    isMostLiked:false,
                    videos:{
                        trailer:"aSfX-nrg-lI",
                        teaser:"4Xwmo4mc_dQ"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/wztR46RlpFcTpYemIbrd1OcoeG7.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/hBOH4PNnhcGPgZbZjBwkx9gnNxI.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/91m0t2LzrTvheshJMcz4G8aVWgZ.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "movie business",
                        "screenwriter",
                        "biography"
                    ],
                    cast:[
                        "Gary Oldman",
                        "Amanda Seyfried",
                        "Lily Collins"
                    ],
                    ageRating:"A-Rated"
                }
            ],
            shows: [],
            info: {
                name: 'David Fincher',
                desc: "Fincher's films are dark, psychological, and mind exploration of disturbed characters. The meticulous detail and atmospheric tones of his films often explore crime, paranoia, and the darker side of human nature, with suspenseful, intricate plots",
                renowned: 'Globally',
                knownFor: ['Se7en', 'Fight Club', 'Zodiac'],
                genres: ['Thriller', 'Crime', 'Psychological-Drama'],
                preferences: "intense, psychological thrillers with dark tone"
            }
        },
        coen: {
            tabs: ['director'],
            title: "The Coen Brothers' Quirky Americana",
            movies: [
                {
                    type:"movie",
                    title:"No Country for Old Men",
                    desc:"Llewelyn Moss stumbles upon dead bodies, $2 million and a hoard of heroin in a Texas desert, but methodical killer Anton Chigurh comes looking for it, with local sheriff Ed Tom Bell hot on his trail. ...",
                    genres:[
                        "Crime",
                        "Drama",
                        "Thriller"
                    ],
                    runtime:122,
                    year:"2007",
                    isMostLiked:true,
                    videos:{
                        clip:"m8cwKEITxV8",
                        trailer:"A0oNrgumrlE"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/hvAAY1qNrIcTRGw7zsF37MzpvCL.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/kd9jFTTabg4xJpHDgxY0h8F9BzG.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/6u3WGSBwqmsG3tooD2B5eMKkxKU.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "vietnam veteran",
                        "sheriff",
                        "trailer park"
                    ],
                    cast:[
                        "Javier Bardem",
                        "Tommy Lee Jones",
                        "Josh Brolin"
                    ],
                    ageRating:"A-Rated"
                },
                {
                    type:"movie",
                    title:"The Big Lebowski",
                    desc:"Jeffrey 'The Dude' Lebowski, a Los Angeles slacker who only wants to bowl and drink White Russians, is mistaken for another Jeffrey Lebowski, a wheelchair-bound millionaire, and finds himself dragged ...",
                    genres:[
                        "Comedy",
                        "Crime"
                    ],
                    runtime:117,
                    year:"1998",
                    isMostLiked:true,
                    videos:{
                        clip:"8CU0dlLfBtg",
                        trailer:"GiwMMziJdqg",
                        teaser:"MjMcMeLXWxA"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/3jNcl3JmPbsqhn6Ro8gKYCDM89e.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/nevS6wjzCxZESvmjJZqdyZ3RNQ6.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/9y7SHMO5WvyEWBbfG0TibeWszYX.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "vietnam veteran",
                        "white russian",
                        "bowling"
                    ],
                    cast:[
                        "Jeff Bridges",
                        "John Goodman",
                        "Julianne Moore"
                    ],
                    ageRating:"A-Rated"
                },
                {
                    type:"movie",
                    title:"Fargo",
                    desc:"Jerry, a small-town Minnesota car salesman is bursting at the seams with debt... but he's got a plan. He's going to hire two thugs to kidnap his wife in a scheme to collect a hefty ransom from his wea...",
                    genres:[
                        "Crime",
                        "Drama",
                        "Thriller"
                    ],
                    runtime:98,
                    year:"1996",
                    isMostLiked:true,
                    videos:{
                        clip:"iJPgVnyEByE",
                        trailer:"aoOZDiswNaw"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/kHHfUmhkJUouqDPd27qcpBdSewC.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/yHiIDe3MDgkSTrePg2Xk8wN3b4U.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/33niNRK7JDLcaGy2pcJsYkVTeq7.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "salesclerk",
                        "unsociability",
                        "police"
                    ],
                    cast:[
                        "Frances McDormand",
                        "William H. Macy",
                        "Steve Buscemi"
                    ],
                    ageRating:"A-Rated"
                },
                {
                    type:"movie",
                    title:"Burn After Reading",
                    desc:"When a disc containing memoirs of a former CIA analyst falls into the hands of gym employees, Linda and Chad, they see a chance to make enough money for Linda to have life-changing cosmetic surgery. P...",
                    genres:[
                        "Comedy",
                        "Drama"
                    ],
                    runtime:96,
                    year:"2008",
                    isMostLiked:false,
                    videos:{
                        clip:"EhRfLPTWzBY",
                        trailer:"cnM-v3p1vvw"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/m3kVkc5FCpVLo7gwHKbJy0yNSj3.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/mLFJ6BooWWbKLM9hevV1ZpfWfl4.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/wIPJHChwRRfD4qTbsNxYagr6CuS.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "blackmail",
                        "paranoia",
                        "black humor"
                    ],
                    cast:[
                        "George Clooney",
                        "Frances McDormand",
                        "Brad Pitt"
                    ],
                    ageRating:"A-Rated"
                },
                {
                    type:"movie",
                    title:"Unbroken",
                    desc:"A chronicle of the life of Louis Zamperini, an Olympic runner who was taken prisoner by Japanese forces during World War II.",
                    genres:[
                        "Drama",
                        "War"
                    ],
                    runtime:137,
                    year:"2014",
                    isMostLiked:true,
                    videos:{
                        clip:"Zd9-zz3A7zQ",
                        trailer:"rGlsxVfCSyQ"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/i3t3eJyPsLnODc0Y7NuDoY1GOoS.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/sKtL6s049rsCc2sv2BQwDqyWYbb.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/csVuItTrhq97TfaxZFtvCQPUrUN.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "japan",
                        "berlin, germany",
                        "sports"
                    ],
                    cast:[
                        "Jack O'Connell",
                        "Alex Russell",
                        "Domhnall Gleeson"
                    ],
                    ageRating:"U/A 13+"
                },
                {
                    type:"movie",
                    title:"The Ballad of Buster Scruggs",
                    desc:"Vignettes weaving together the stories of six individuals in the old West at the end of the Civil War. Following the tales of a sharp-shooting songster, a wannabe bank robber, two weary traveling perf...",
                    genres:[
                        "Western",
                        "Comedy",
                        "Drama"
                    ],
                    runtime:132,
                    year:"2018",
                    isMostLiked:true,
                    videos:{
                        trailer:"_2PyxzSH1HM"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/7K8F49CamvU3R1KV5IF1dJtOTXe.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/f1QSRkTPLNilbrJlvadKPyUhesY.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/eXqoZGS0zV2KmQS8eARG13yqjyF.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "prostitute",
                        "native american",
                        "parody"
                    ],
                    cast:[
                        "Tim Blake Nelson",
                        "Willie Watson",
                        "Clancy Brown"
                    ],
                    ageRating:"A-Rated"
                },
                {
                    type:"movie",
                    title:"Hail, Caesar!",
                    desc:"When a Hollywood star mysteriously disappears in the middle of filming, the studio sends their fixer to get him back.",
                    genres:[
                        "Comedy",
                        "Crime",
                        "Mystery"
                    ],
                    runtime:106,
                    year:"2016",
                    isMostLiked:false,
                    videos:{
                        clip:"vN-R_E-XBPk",
                        trailer:"vMUUKtF_BF0",
                        teaser:"4F4Thdn0vlE"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/kSM2yeV1vnrn7Y0BeUwK0qYmltk.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/qsYma0KMuh2p57wRf3KFjRaFZ8Q.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/bOxcEJBeGfFewbrLicZQ6Ie8pmN.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "journalist",
                        "ransom",
                        "cat"
                    ],
                    cast:[
                        "Josh Brolin",
                        "George Clooney",
                        "Alden Ehrenreich"
                    ],
                    ageRating:"U/A 13+"
                },
                {
                    type:"movie",
                    title:"A Serious Man",
                    desc:"It is 1967, and Larry Gopnik, a physics professor at a quiet Midwestern university, has just been informed by his wife Judith that she is leaving him. She has fallen in love with one of his more pompo...",
                    genres:[
                        "Comedy",
                        "Drama"
                    ],
                    runtime:106,
                    year:"2009",
                    isMostLiked:false,
                    videos:{
                        clip:"8iIGBWH0gks",
                        trailer:"mDKHWRbK2_Q"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/hp8LWuknB5bTh5NQ9nqsYOTAFGG.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/ihwfod79qlBbFpjVQNeXxmX03ql.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/pCNUL4teSoK43BKVEqrOvlOQDL0.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "midlife crisis",
                        "professor",
                        "minnesota"
                    ],
                    cast:[
                        "Michael Stuhlbarg",
                        "Richard Kind",
                        "Fred Melamed"
                    ],
                    ageRating:"A-Rated"
                },
                {
                    type:"movie",
                    title:"Suburbicon",
                    desc:"In the quiet family town of Suburbicon during the 1950s, the best and worst of humanity is hilariously reflected through the deeds of seemingly ordinary people. When a home invasion turns deadly, a pi...",
                    genres:[
                        "Thriller",
                        "Crime",
                        "Drama"
                    ],
                    runtime:105,
                    year:"2017",
                    isMostLiked:false,
                    videos:{
                        trailer:"IYga2m0V2O0"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/sSEgU3XanLLCcxcmO14iVHXfzEp.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/dmgFJdivUmV4vGLkbPD49KVjlHx.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/qhlhZjgqaErzbH1WFKO9dRXl4PY.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "dark comedy"
                    ],
                    cast:[
                        "Matt Damon",
                        "Julianne Moore",
                        "Noah Jupe"
                    ],
                    ageRating:"A-Rated"
                },
                {
                    type:"movie",
                    title:"Barton Fink",
                    desc:"A renowned New York playwright is enticed to California to write for the movies and discovers the hellish truth of Hollywood.",
                    genres:[
                        "Comedy",
                        "Drama"
                    ],
                    runtime:117,
                    year:"1991",
                    isMostLiked:false,
                    videos:{
                        trailer:"UKLwS4odvyw"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/hyfQsAXtu1tahqzlKEmTxf4BFIL.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/5IbE8joIeUUowIVC2TNsyAd0nFv.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/rNyORqyxrBALy1TvY2NVib4Irrm.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "hotel",
                        "screenplay",
                        "mass murder"
                    ],
                    cast:[
                        "John Turturro",
                        "John Goodman",
                        "Judy Davis"
                    ],
                    ageRating:"A-Rated"
                },
                {
                    type:"movie",
                    title:"The Ladykillers",
                    desc:"An eccentric, if not charming Southern professor and his crew pose as a band in order to rob a casino, all under the nose of his unsuspecting landlord – a sharp old woman.",
                    genres:[
                        "Comedy",
                        "Crime",
                        "Thriller"
                    ],
                    runtime:104,
                    year:"2004",
                    isMostLiked:false,
                    videos:{
                        trailer:"BVL6AjybCZ0"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/yLJcszmw9O5zGI9iy4cXxqgtjp1.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/bJIAvpPOUV3NCU9TXBytTo3HaSd.jpg",
                    poster:null,
                    logo:null,
                    keywords:[
                        "garbage",
                        "church choir",
                        "remake"
                    ],
                    cast:[
                        "Tom Hanks",
                        "Irma P. Hall",
                        "Marlon Wayans"
                    ],
                    ageRating:"A-Rated"
                },
                {
                    type:"movie",
                    title:"Intolerable Cruelty",
                    desc:"A revenge-seeking gold digger marries a womanizing Beverly Hills lawyer with the intention of making a killing in the divorce.",
                    genres:[
                        "Comedy",
                        "Romance"
                    ],
                    runtime:100,
                    year:"2003",
                    isMostLiked:false,
                    videos:{
                        clip:"41jaWVfT5Ko",
                        trailer:"aeuAiVTB3fc"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/pUfKRx91YwigEzoTVTcbwOQR53G.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/4UTiuhJLtO1PGPbMD9Hq1iqFaHJ.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/7zABvuXpnmMBbWcetE5szh0Pi28.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "infidelity",
                        "california",
                        "assassin"
                    ],
                    cast:[
                        "George Clooney",
                        "Catherine Zeta-Jones",
                        "Geoffrey Rush"
                    ],
                    ageRating:"U/A 13+"
                }
            ],
            shows: [],
            info: {
                name: 'Ethan Coen, Joe Coen',
                desc: 'The Coen Brothers are masters of blending dark comedy with crime, eccentric characters, and unpredictable narratives. Their films are a blend of absurd and the profound, full of sharp dialogue and quirky, memorable characters',
                renowned: null,
                knownFor: ['The Big Lebowski', 'No Country for Old Men'],
                genres: ['Dark Comedy', 'Crime', 'Drama'],
                preferences: "offbeat, humorous films with mix of crime, irony and twist"
            }
        },
        ray: {
            tabs: ['director'],
            title: "Satyajit Ray's Poetic Realism",
            movies: [
                {
                    type:"movie",
                    title:"Pather Panchali",
                    desc:"Impoverished priest Harihar Ray, dreaming of a better life for himself and his family, leaves his rural Bengal village in search of work.  Preserved by the Academy Film Archive in partnership with The...",
                    genres:[
                        "Drama"
                    ],
                    runtime:125,
                    year:"1955",
                    isMostLiked:false,
                    videos:{
                        clip:"gcT3NBPMGgI",
                        trailer:"mgv68E_o6VM"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/ibJuTdFmYGOiiUzJ5HzHU4EAuf1.jpg",
                        isLogoIncluded:false
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/ibJuTdFmYGOiiUzJ5HzHU4EAuf1.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/5KTKviMAYco5Gk64KO8XisBlbea.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "robbery",
                        "misery",
                        "move"
                    ],
                    cast:[
                        "Subir Banerjee",
                        "Uma Das Gupta",
                        "Karuna Banerjee"
                    ],
                    ageRating:"U-Rated"
                },
                {
                    type:"movie",
                    title:"Apur Sansar",
                    desc:"Apu is a jobless ex-student dreaming vaguely of a future as a writer. An old college friend talks him into a visit up-country to a village wedding.  Preserved by the Academy Film Archive in 1996.",
                    genres:[
                        "Drama"
                    ],
                    runtime:105,
                    year:"1959",
                    isMostLiked:false,
                    videos:{
                        trailer:"mgv68E_o6VM"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/d3RW7jRsBCHfC9QZaUF9FpzJrh8.jpg",
                        isLogoIncluded:false
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/d3RW7jRsBCHfC9QZaUF9FpzJrh8.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/khrMLll0EXfi2onWd2LhlczOZsz.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "dying and death",
                        "broken engagement",
                        "arranged marriage"
                    ],
                    cast:[
                        "Soumitra Chatterjee",
                        "Sharmila Tagore",
                        "Alok Chakravarty"
                    ],
                    ageRating:"U/A 13+"
                },
                {
                    type:"movie",
                    title:"Charulata",
                    desc:"In 1870s India, Charulata is an isolated, artistically inclined woman who sees little of her busy journalist husband, Bhupati. Realizing that his wife is alienated and unhappy, he convinces his cousin...",
                    genres:[
                        "Drama",
                        "Romance"
                    ],
                    runtime:117,
                    year:"1964",
                    isMostLiked:false,
                    videos:{
                        trailer:"gFCuy_FUsdo"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/brR9IQgWt01b4Am3CyOckUU0m3u.jpg",
                        isLogoIncluded:false
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/brR9IQgWt01b4Am3CyOckUU0m3u.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/r43CkYnMnvBaL81BQlMgsfMX2Ul.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "swing",
                        "writer",
                        "india"
                    ],
                    cast:[
                        "Madhabi Mukherjee",
                        "Soumitra Chatterjee",
                        "Shailen Mukherjee"
                    ],
                    ageRating:"U-Rated"
                },
                {
                    type:"movie",
                    title:"The Big City",
                    desc:"Life at home changes when a housewife from a middle-class, conservative family in Calcutta gets a job as a salesperson.  Preserved by the Academy Film Archive in partnership with The Film Foundation i...",
                    genres:[
                        "Drama"
                    ],
                    runtime:136,
                    year:"1963",
                    isMostLiked:false,
                    videos:{
                        trailer:"HGA8WBTvQco"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/buaddeWUkt52VJFSujO5mKNx0ab.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/cDxkqKumuTe9q5MoC98tRXGW50o.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/vKOyAxpNSa8xiftBMBR0eY1Bn40.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "mother-in-law",
                        "money",
                        "calcutta"
                    ],
                    cast:[
                        "Madhabi Mukherjee",
                        "Anil Chatterjee",
                        "Haren Chatterjee"
                    ],
                    ageRating:"U-Rated"
                },
                {
                    type:"movie",
                    title:"The Adversary",
                    desc:"Siddhartho Chowdhury, a brilliant young medical student, is forced to leave his studies after his father's sudden demise. He is forced to navigate the high unemployment rate and the communist socio-po...",
                    genres:[
                        "Drama",
                        "Romance"
                    ],
                    runtime:110,
                    year:"1970",
                    isMostLiked:false,
                    videos:{
                        clip:"AOG1xowCEos"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/rVgW81YtIyMZFoRBwv4vOxaOMnA.jpg",
                        isLogoIncluded:false
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/rVgW81YtIyMZFoRBwv4vOxaOMnA.jpg",
                    poster:null,
                    logo:null,
                    keywords:[
                        "job interview",
                        "adversary",
                        "calcutta"
                    ],
                    cast:[
                        "Dhritiman Chatterjee",
                        "Krishna Bose",
                        "Indira Devi"
                    ],
                    ageRating:"U/A 7+"
                },
                {
                    type:"movie",
                    title:"Days and Nights in the Forest",
                    desc:"Four friends from Calcutta who have very different personalities make a holiday excursion into the country, to a tiny village in the state of Bihar where they set themselves up in a bungalow. A series...",
                    genres:[
                        "Drama"
                    ],
                    runtime:115,
                    year:"1970",
                    isMostLiked:false,
                    videos:{
                        clip:"nflPA_mTMFw"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/7d8nRbxKPfwIvj2raftrkAaEMdY.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/2TagGB8rcYEAbqWRxQAk19DlMaH.jpg",
                    poster:null,
                    logo:null,
                    keywords:[
                        "countryside",
                        "holiday",
                        "class"
                    ],
                    cast:[
                        "Soumitra Chatterjee",
                        "Samit Bhanja",
                        "Subhendu Chatterjee"
                    ],
                    ageRating:"U-Rated"
                },
                {
                    type:"movie",
                    title:"The Home and the World",
                    desc:"When the movie opens, a woman is recalling the events that molded her perspective on the world. Years ago, her husband, a wealthy Western-educated landowner, challenged tradition by providing her with...",
                    genres:[
                        "Drama"
                    ],
                    runtime:140,
                    year:"1985",
                    isMostLiked:false,
                    videos:{},
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/onJ2tY8Bja4JUjhiD81Ze0Uj7IX.jpg",
                        isLogoIncluded:false
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/onJ2tY8Bja4JUjhiD81Ze0Uj7IX.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/lYhEtGfr4DGjtJdYJYddb8X1e2H.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "love triangle",
                        "patriotism",
                        "family drama"
                    ],
                    cast:[
                        "Soumitra Chatterjee",
                        "Victor Banerjee",
                        "Swatilekha Sengupta"
                    ],
                    ageRating:"U/A 10+"
                },
                {
                    type:"movie",
                    title:"The Golden Fortress",
                    desc:"A young boy becomes a target for crooks, after he claims to remember his past life and mentions precious jewels in a golden fortress.",
                    genres:[
                        "Mystery"
                    ],
                    runtime:135,
                    year:"1974",
                    isMostLiked:false,
                    videos:{},
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/tkDruUs0xEXkRjl747kWuQLU9xk.jpg",
                        isLogoIncluded:false
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/tkDruUs0xEXkRjl747kWuQLU9xk.jpg",
                    poster:null,
                    logo:null,
                    keywords:[
                        "Not Available"
                    ],
                    cast:[
                        "Soumitra Chatterjee",
                        "Santosh Dutta",
                        "Siddhartha Chatterjee"
                    ],
                    ageRating:"U/A 10+"
                },
                {
                    type:"movie",
                    title:"The Adventures of Goopy and Bagha",
                    desc:"Goopy Gyne and Bagha Byne are banished from their respective villages for being bad musicians. However, with their skills, they succeed in pleasing the king of ghosts who grants them three boons. How ...",
                    genres:[
                        "Comedy",
                        "Music",
                        "Fantasy"
                    ],
                    runtime:132,
                    year:"1969",
                    isMostLiked:false,
                    videos:{
                        trailer:"xVgXiC2hOkg"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/6HLHtth6BBD2PLtITHoHhCHWGQS.jpg",
                        isLogoIncluded:false
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/6HLHtth6BBD2PLtITHoHhCHWGQS.jpg",
                    poster:null,
                    logo:null,
                    keywords:[
                        "horror spoof",
                        "preserved film"
                    ],
                    cast:[
                        "Tapan Chatterjee",
                        "Rabi Ghosh",
                        "Santosh Dutta"
                    ],
                    ageRating:"U-Rated"
                },
                {
                    type:"movie",
                    title:"An Enemy of the People",
                    desc:"Ashoke Gupta is an idealistic doctor working in a town near Calcutta. He discovers that the water at a popular temple is the source of an outbreak of typhoid and hepatitis. In order to save lives, he ...",
                    genres:[
                        "Drama"
                    ],
                    runtime:99,
                    year:"1990",
                    isMostLiked:false,
                    videos:{},
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/tmYQUgBsHjsnLVdkel8kHKLYdOG.jpg",
                        isLogoIncluded:false
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/tmYQUgBsHjsnLVdkel8kHKLYdOG.jpg",
                    poster:null,
                    logo:null,
                    keywords:[
                        "water supply"
                    ],
                    cast:[
                        "Soumitra Chatterjee",
                        "Dhritiman Chatterjee",
                        "Dipankar Dey"
                    ],
                    ageRating:"U/A 10+"
                },
                {
                    type:"movie",
                    title:"The Middleman",
                    desc:"A bright and idealistic young graduate steels himself for a dog-eat-dog world, only to flounder in a job market packed with thousands of other hopefuls. When he eventually decides to start his own bus...",
                    genres:[
                        "Drama"
                    ],
                    runtime:131,
                    year:"1976",
                    isMostLiked:false,
                    videos:{},
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/xH7DjZC53RT0N1a36r3DXWJSVJd.jpg",
                        isLogoIncluded:false
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/xH7DjZC53RT0N1a36r3DXWJSVJd.jpg",
                    poster:null,
                    logo:null,
                    keywords:[
                        "market",
                        "middleman",
                        "preserved film"
                    ],
                    cast:[
                        "Pradip Mukherjee",
                        "Satya Banerjee",
                        "Dipankar Dey"
                    ],
                    ageRating:"U/A 7+"
                },
                {
                    type:"movie",
                    title:"Three Daughters",
                    desc:"'Teen Kanya' is an anthology film based upon short stories by Rabindranath Tagore, as a tribute on the author's centenary. The title means \"Three Daughters\", and the film's original Indian release con...",
                    genres:[
                        "Comedy",
                        "Drama",
                        "Fantasy"
                    ],
                    runtime:173,
                    year:"1961",
                    isMostLiked:false,
                    videos:{},
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/l8yamy1OU7xRGqmuMxaXYPeeI5d.jpg",
                        isLogoIncluded:false
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/l8yamy1OU7xRGqmuMxaXYPeeI5d.jpg",
                    poster:null,
                    logo:null,
                    keywords:[
                        "preserved film"
                    ],
                    cast:[
                        "Chandana Banerjee",
                        "Nripati Chatterjee",
                        "Anil Chatterjee"
                    ],
                    ageRating:"U-Rated"
                }
            ],
            shows: [],
            info: {
                name: 'Satyajit Ray',
                desc: 'One of the greatest filmmakers of world cinema, Ray is known for his humanistic, observational filmmaking. His works, often slow-paced and deeply thoughtful, focus on social realism, portraying Indian Culture and human emotions',
                renowned: 'Globally',
                knownFor: ['Pather Pancheli', 'The World of Apu', 'Aparajito'],
                genres: ['Drama', 'Social Realism', 'Family'],
                preferences: "simple, character driven films focusing on social issues"
            }
        },
        hirani: {
            tabs: ['director'],
            title: "Rajkumar Hirani's Heartfelt Narratives",
            movies: [
                {
                    type:"movie",
                    title:"3 Idiots",
                    desc:"Rascal. Joker. Dreamer. Genius... You've never met a college student quite like \"Rancho.\" From the moment he arrives at India's most prestigious university, Rancho's outlandish schemes turn the campus...",
                    genres:[
                        "Drama",
                        "Comedy"
                    ],
                    runtime:171,
                    year:"2009",
                    isMostLiked:true,
                    videos:{
                        trailer:"K0eDlFX9GMc"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/7fqChpiaXELdOBGHVJaEoetS7dw.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/u7kuUaySqXBVAtqEl9vkTkAzHV9.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/v6Hihdrx8TajNEbWSDD8cxi5er1.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "suicide",
                        "suicide attempt",
                        "professor"
                    ],
                    cast:[
                        "Aamir Khan",
                        "R. Madhavan",
                        "Sharman Joshi"
                    ],
                    ageRating:"U/A 13+"
                },
                {
                    type:"movie",
                    title:"PK",
                    desc:"A stranger in the city asks questions no one has asked before. Known only by his initials, the man's innocent questions and childlike curiosity take him on a journey of love, laughter and letting go.",
                    genres:[
                        "Comedy",
                        "Drama",
                        "Science Fiction"
                    ],
                    runtime:153,
                    year:"2014",
                    isMostLiked:true,
                    videos:{
                        teaser:"SOXWc32k4zA"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/q1guAERQtxW8cprKv4sAdpVOyGU.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/gxfvtq5eYiClS2X7hxAAPBNrbWA.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/BnDydsaEeMhywD5Snv6jN77ifh.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "friendship",
                        "society",
                        "christianity"
                    ],
                    cast:[
                        "Aamir Khan",
                        "Anushka Sharma",
                        "Saurabh Shukla"
                    ],
                    ageRating:"U/A 13+"
                },
                {
                    type:"movie",
                    title:"Munna Bhai M.B.B.S.",
                    desc:"A gangster sets out to fulfill his father's dream of becoming a doctor.",
                    genres:[
                        "Comedy",
                        "Drama"
                    ],
                    runtime:156,
                    year:"2003",
                    isMostLiked:false,
                    videos:{
                        trailer:"6lCGvu-hwX4"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/r3bdOFgv8WE4MRjWdNZYkO4xijo.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/smaFFzbd1flJKUqDI2ylljQ8Pki.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/o7bGhABnizJx8jx5xj8xtgj4u3a.png",
                        isLogoIncluded:false
                    },
                    keywords:[
                        "medicine",
                        "hospital"
                    ],
                    cast:[
                        "Sanjay Dutt",
                        "Arshad Warsi",
                        "Boman Irani"
                    ],
                    ageRating:"U-Rated"
                },
                {
                    type:"movie",
                    title:"Lage Raho Munna Bhai",
                    desc:"Lovable goon Munna falls for a morning radio host by the name of Jahnvi, who also runs an elders' home which an unscrupulous builder seeks to attain. In order to gain Jahnvi’s attention, he cheats his...",
                    genres:[
                        "Comedy",
                        "Drama",
                        "Romance"
                    ],
                    runtime:144,
                    year:"2006",
                    isMostLiked:false,
                    videos:{
                        trailer:"OE6f1oHgeDg"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/urxONLFFBKFWzsxLcvUaRgo4v4M.jpg",
                        isLogoIncluded:false
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/urxONLFFBKFWzsxLcvUaRgo4v4M.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/bu20NZpnt3qHe3dUckI8ZpN4idX.png",
                        isLogoIncluded:false
                    },
                    keywords:[
                        "historical figure",
                        "india"
                    ],
                    cast:[
                        "Sanjay Dutt",
                        "Arshad Warsi",
                        "Dilip Prabhavalkar"
                    ],
                    ageRating:"U/A 13+"
                },
                {
                    type:"movie",
                    title:"Sanju",
                    desc:"Sanju explores some of the most crucial chapters from movie star Sanjay Dutt’s dramatic and controversial real life. It gives a lowdown on his tryst with drugs and his trials and tribulations in the A...",
                    genres:[
                        "Drama",
                        "Comedy"
                    ],
                    runtime:161,
                    year:"2018",
                    isMostLiked:false,
                    videos:{
                        trailer:"1J76wN0TPI4",
                        teaser:"rRr1qiJRsXk"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/nyD9dfebEwoeRJ4vlQju2bOH3Ee.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/XeJhxScCrZyoCVRLG3eUWbCyOz.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/k3Mskqew3cLqEbaEpnV7FEYIg6a.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "artists' life",
                        "biography",
                        "sanjay dutt"
                    ],
                    cast:[
                        "Ranbir Kapoor",
                        "Paresh Rawal",
                        "Vicky Kaushal"
                    ],
                    ageRating:"U/A 12+"
                },
                {
                    type:"movie",
                    title:"Dunki",
                    desc:"Four friends from a sleepy little village in Punjab share a common dream: to go to England. Their problem is that they have neither the visa nor the ticket. A soldier alights from a train one day, and...",
                    genres:[
                        "Adventure",
                        "Comedy",
                        "Drama"
                    ],
                    runtime:159,
                    year:"2023",
                    isMostLiked:false,
                    videos:{
                        trailer:"Zd69FfhBmSc"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/7kXd9k4UbrzdIZU5pQhP87hd5Bm.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/uuw0PRR4sgGi1IV4CYYpEYtez9y.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/kxhnOWx0ikkwB2Y7oGzJjd2RIun.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "affectation",
                        "ambiguous"
                    ],
                    cast:[
                        "Shah Rukh Khan",
                        "Taapsee Pannu",
                        "Vikram Kochhar"
                    ],
                    ageRating:"U/A 13+"
                }
            ],
            shows: [],
            info: {
                name: 'Rajkumar Hirani',
                desc: "Hirani's films are known for their perfect blend of humor, social commentary, and feel-good storytelling. His movies tackle significant societal issues in a lighthearted yet meaningful way with hope and positivity.",
                renowned: 'India',
                knownFor: ['3 Idiots', 'P.K.'],
                genres: ['Comedy', 'Drama', 'Social Commentry'],
                preferences: "Heartwarming, hillarious, emotional and uplifting films "
            }
        },
        guru: {
            tabs: ['director'],
            title: "Guru Dutt's Tragic Elegance",
            movies: [
                {
                    type:"movie",
                    title:"Pyaasa",
                    desc:"Vijay, a destitute poet, searches for true love while attempting to get his work published. With the assistance of two women in his life, his dream comes true - but at a cost that causes Vijay to reth...",
                    genres:[
                        "Drama",
                        "Romance"
                    ],
                    runtime:146,
                    year:"1957",
                    isMostLiked:false,
                    videos:{
                        clip:"3ta4BmumQKc",
                        trailer:"IjlQJjmTIcM"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/yMPM4ff8bAflecxr5vbagg4fsyD.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/hvtRa9AZ2mKnR32fRow356vsdSf.jpg",
                    poster:null,
                    logo:null,
                    keywords:[
                        "depression",
                        "prostitute",
                        "greed"
                    ],
                    cast:[
                        "Guru Dutt",
                        "Waheeda Rehman",
                        "Mala Sinha"
                    ],
                    ageRating:"U-Rated"
                },
                {
                    type:"movie",
                    title:"Kaagaz Ke Phool",
                    desc:"The film tells, in flashback, the story of Suresh Sinha, a famous film director and his relationship with an aspiring actress.",
                    genres:[
                        "Drama",
                        "Romance"
                    ],
                    runtime:142,
                    year:"1959",
                    isMostLiked:false,
                    videos:{
                        clip:"3TxjJCEKYvE"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/jKmX5N1jr36MCYbW9XOi93xymGM.jpg",
                        isLogoIncluded:false
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/jKmX5N1jr36MCYbW9XOi93xymGM.jpg",
                    poster:null,
                    logo:null,
                    keywords:[
                        "musical"
                    ],
                    cast:[
                        "Waheeda Rehman",
                        "Guru Dutt",
                        "Kumari Naaz"
                    ],
                    ageRating:"U-Rated"
                },
                {
                    type:"movie",
                    title:"C.I.D.",
                    desc:"A newspaper editor gets murdered when he was about to expose the underworld links of a rich person. So, a C.I.D inspector gets assigned to investigate the murder case.",
                    genres:[
                        "Action",
                        "Crime"
                    ],
                    runtime:146,
                    year:"1956",
                    isMostLiked:false,
                    videos:{
                        trailer:"g_rd9O8jVMw"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/75LrazHSauQwhGhJpvfbp5WW9Vo.jpg",
                        isLogoIncluded:false
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/75LrazHSauQwhGhJpvfbp5WW9Vo.jpg",
                    poster:null,
                    logo:null,
                    keywords:[
                        "Not Available"
                    ],
                    cast:[
                        "Dev Anand",
                        "Shakila",
                        "Waheeda Rehman"
                    ],
                    ageRating:"U/A 10+"
                },
                {
                    type:"movie",
                    title:"Sahib Bibi Aur Ghulam",
                    desc:"A debauchee Zamindar greatly neglects his wife. The decadence of the Bengali Zamindar milieu in the late 19th century, seen through the eyes of a young upward mobile rustic seeking fortune in Calcutta...",
                    genres:[
                        "Drama"
                    ],
                    runtime:152,
                    year:"1962",
                    isMostLiked:false,
                    videos:{},
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/vU4Fz6I9VAyjRiqPguPgdCEQoMq.jpg",
                        isLogoIncluded:false
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/vU4Fz6I9VAyjRiqPguPgdCEQoMq.jpg",
                    poster:null,
                    logo:null,
                    keywords:[
                        "neglect",
                        "tragedy",
                        "alcoholic"
                    ],
                    cast:[
                        "Guru Dutt",
                        "Meena Kumari",
                        "Waheeda Rehman"
                    ],
                    ageRating:"U-Rated"
                },
                {
                    type:"movie",
                    title:"Mr. & Mrs. '55",
                    desc:"A young, naive heiress is forced into a 'marriage of convenience' with an unemployed cartoonist in an attempt to save her millions - a move orchestrated by the scheming aunt.",
                    genres:[
                        "Comedy",
                        "Romance",
                        "Drama"
                    ],
                    runtime:157,
                    year:"1955",
                    isMostLiked:false,
                    videos:{},
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/8rWtbh6tmPhGqB2kmS0miyq2RW3.jpg",
                        isLogoIncluded:false
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/8rWtbh6tmPhGqB2kmS0miyq2RW3.jpg",
                    poster:null,
                    logo:null,
                    keywords:[
                        "newspaper",
                        "feminism",
                        "musical"
                    ],
                    cast:[
                        "Guru Dutt",
                        "Madhubala",
                        "Lalita Pawar"
                    ],
                    ageRating:"U-Rated"
                },
                {
                    type:"movie",
                    title:"Aar Paar",
                    desc:"Kalu is a taxi-driver in Bombay, India. He has two women who love him and would like to marry him. Kalu first wants to establish himself, and become rich, before he can even think of marriage. One of ...",
                    genres:[
                        "Drama",
                        "Romance",
                        "Crime"
                    ],
                    runtime:146,
                    year:"1954",
                    isMostLiked:false,
                    videos:{},
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/8EEpTV3qmpsKGkDIUNuL0rfCUA6.jpg",
                        isLogoIncluded:false
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/8EEpTV3qmpsKGkDIUNuL0rfCUA6.jpg",
                    poster:null,
                    logo:null,
                    keywords:[
                        "taxi driver",
                        "car mechanic",
                        "forbidden love"
                    ],
                    cast:[
                        "Guru Dutt",
                        "Shyama",
                        "Jagdish Sethi"
                    ],
                    ageRating:"U-Rated"
                },
                {
                    type:"movie",
                    title:"Baazi",
                    desc:"Madan comes from a poor family background. Unable to find employment, he takes to gambling in order to pay for his sister's medical expenses. Soon, he forms a bond with Leena, a dancer, and is falsely...",
                    genres:[
                        "Crime",
                        "Drama",
                        "Music"
                    ],
                    runtime:143,
                    year:"1951",
                    isMostLiked:false,
                    videos:{
                        trailer:"dyoamSouESo"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/yFQQLI3XEaLPXUWYsNH9ziZmlyZ.jpg",
                        isLogoIncluded:false
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/yFQQLI3XEaLPXUWYsNH9ziZmlyZ.jpg",
                    poster:null,
                    logo:null,
                    keywords:[
                        "casino",
                        "gambling",
                        "forbidden love"
                    ],
                    cast:[
                        "Dev Anand",
                        "Geeta Bali",
                        "Kalpana Kartik"
                    ],
                    ageRating:"U-Rated"
                },
                {
                    type:"movie",
                    title:"The Falcon",
                    desc:"The Crown Prince of Malabar dallies with Rosita whilst his people suffer at the hands of cruel Portuguese colonists. Whilst voyaging on a Portuguese ship, the Prince is captured by patriots who are re...",
                    genres:[
                        "Adventure",
                        "Drama",
                        "History"
                    ],
                    runtime:141,
                    year:"1953",
                    isMostLiked:false,
                    videos:{},
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/lp4Zr8rBjro9EqaIaWHffpRd3uU.jpg",
                        isLogoIncluded:false
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/lp4Zr8rBjro9EqaIaWHffpRd3uU.jpg",
                    poster:null,
                    logo:null,
                    keywords:[
                        "Not Available"
                    ],
                    cast:[
                        "Geeta Bali",
                        "Guru Dutt",
                        "K.N. Singh"
                    ],
                    ageRating:"U/A 10+"
                },
                {
                    type:"movie",
                    title:"Jaal",
                    desc:"Carlos and his sister Maria live along the Indian coast in a fishing village. Tony and Lisa are 2 newcomers and soon Maria and Tony fall in love. This does not go down well with Simon who loves Maria.",
                    genres:[
                        "Crime",
                        "Drama",
                        "Music"
                    ],
                    runtime:115,
                    year:"1952",
                    isMostLiked:false,
                    videos:{
                        trailer:"uOjeDbhbyfw"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/pmSwGA0vUxjh9e5bULFEI8meZWe.jpg",
                        isLogoIncluded:false
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/pmSwGA0vUxjh9e5bULFEI8meZWe.jpg",
                    poster:null,
                    logo:null,
                    keywords:[
                        "Not Available"
                    ],
                    cast:[
                        "Geeta Bali",
                        "Dev Anand",
                        "Purnima"
                    ],
                    ageRating:"U-Rated"
                }
            ],
            shows: [],
            info: {
                name: 'Guru Dutt',
                desc: "A master of poetic storytelling, Guru Dutt's films often explore themes of love, loss, and existential despair. His lyrical, visually stunning work is known for his melancholic stories with rich emotional depth.",
                renowned: 'India',
                knownFor: ['Pyaasa', 'Kaagaz Ke Phool'],
                genres: ['Romance', 'Drama', 'Musical'],
                preferences: "classic, emotional and philosophical themes"
            }
        },
        anurag: {
            tabs: ['director'],
            title: "Anurag Kashyap's raw grit",
            movies: [
                {
                    type:"movie",
                    title:"Gangs of Wasseypur - Part 1",
                    desc:"In 1970s India, Sardar Khan vows to take revenge on the man who killed his father decades earlier.",
                    genres:[
                        "Action",
                        "Thriller",
                        "Crime"
                    ],
                    runtime:160,
                    year:"2012",
                    isMostLiked:false,
                    videos:{
                        trailer:"cSfNfckoXPc"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/1CAyD1mFJvCgsbOKyYTP8hIBqGe.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/riwwiv2BMD9D6L3NM4sJjHCMVsm.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/tfL4cULbynBEIIYZcLk8YTzpKt1.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "mafia",
                        "gang",
                        "coal mining"
                    ],
                    cast:[
                        "Manoj Bajpayee",
                        "Richa Chadha",
                        "Tigmanshu Dhulia"
                    ],
                    ageRating:"A-Rated"
                },
                {
                    type:"movie",
                    title:"Black Friday",
                    desc:"Bombs tear through Bombay in 1993, wreaking havoc and polarising the citizens. With perpetrators at large, the state launches a massive man-hunt to unmask the perpetrators behind these events.",
                    genres:[
                        "Crime",
                        "Drama"
                    ],
                    runtime:162,
                    year:"2004",
                    isMostLiked:false,
                    videos:{
                        trailer:"SU_59-aC5L8"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/kBi1q1jXgOPjbtBIw56nAl15zjw.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/kBi1q1jXgOPjbtBIw56nAl15zjw.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/eqvdzNXSXViCKCWIp9ByMGkpx7C.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "terrorism",
                        "docudrama",
                        "bomb planting"
                    ],
                    cast:[
                        "Kay Kay Menon",
                        "Pavan Malhotra",
                        "Aditya Srivastava"
                    ],
                    ageRating:"A-Rated"
                },
                {
                    type:"movie",
                    title:"Gangs of Wasseypur - Part 2",
                    desc:"After the death of his father and brother Danish, Faizal Khan vows to take revenge by destroying Ramadhir Singh's gang.",
                    genres:[
                        "Crime",
                        "Thriller",
                        "Action"
                    ],
                    runtime:160,
                    year:"2012",
                    isMostLiked:false,
                    videos:{
                        trailer:"XuK5TAEIqfg"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/usAGICQAbm0W2dkwp2Fyqk7Vtmx.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/nXkNbKFx8YLorku25MMLO5OV6aW.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/b4iMJVzV4FyxlfEDT4UHGJA0p6r.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "gun",
                        "revenge",
                        "mafia"
                    ],
                    cast:[
                        "Nawazuddin Siddiqui",
                        "Huma Qureshi",
                        "Richa Chadha"
                    ],
                    ageRating:"A-Rated"
                },
                {
                    type:"movie",
                    title:"Gulaal",
                    desc:"A law student witnesses the struggles of the Rajputs, deception, homicide and crime after being elected as General Secretary of his college.",
                    genres:[
                        "Crime",
                        "Drama"
                    ],
                    runtime:147,
                    year:"2009",
                    isMostLiked:false,
                    videos:{
                        trailer:"IS7KLVs1Ib4"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/r9fwjoJOYT1xQGHwLkSJA6snhsR.jpg",
                        isLogoIncluded:false
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/r9fwjoJOYT1xQGHwLkSJA6snhsR.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/92wnvRx1bvfiqblnKm32JMor04P.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "Not Available"
                    ],
                    cast:[
                        "Raj Singh Chaudhary",
                        "Kay Kay Menon",
                        "Abhimanyu Singh"
                    ],
                    ageRating:"U-Rated"
                },
                {
                    type:"movie",
                    title:"Dev.D",
                    desc:"After breaking up with his childhood love Paro, Dev finds solace in drugs and alcohol. He soon bumps into Leni, a prostitute, and falls for her.",
                    genres:[
                        "Comedy",
                        "Drama",
                        "Romance"
                    ],
                    runtime:144,
                    year:"2009",
                    isMostLiked:false,
                    videos:{
                        clip:"DAmGvia0Le4",
                        trailer:"ATZB8mwU3M0"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/rACXg4zadOTEQKceu0zViohXwCb.jpg",
                        isLogoIncluded:false
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/rACXg4zadOTEQKceu0zViohXwCb.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/kwzx7WGa2CL1uHo8HlbbbQE6QzI.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "drug addiction",
                        "tragic love"
                    ],
                    cast:[
                        "Abhay Deol",
                        "Mahie Gill",
                        "Kalki Koechlin"
                    ],
                    ageRating:"A-Rated"
                },
                {
                    type:"movie",
                    title:"Ugly",
                    desc:"A team of the best cops in Mumbai is dispatched to find a girl who has gone missing from her father's car. As the hunt for the kidnapper begins, fingers suspiciously point to closer home.",
                    genres:[
                        "Thriller",
                        "Drama",
                        "Mystery"
                    ],
                    runtime:128,
                    year:"2013",
                    isMostLiked:false,
                    videos:{
                        trailer:"4ougQY2-zpk"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/viPf6kTYU0LyryNPhGfQExxGbcd.jpg",
                        isLogoIncluded:false
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/viPf6kTYU0LyryNPhGfQExxGbcd.jpg",
                    poster:null,
                    logo:null,
                    keywords:[
                        "police",
                        "investigation",
                        "missing child"
                    ],
                    cast:[
                        "Ronit Roy",
                        "Rahul Bhat",
                        "Vineet Kumar Singh"
                    ],
                    ageRating:"A-Rated"
                },
                {
                    type:"movie",
                    title:"Mukkabaaz",
                    desc:"A low caste boxer, Shravan, trains at a gym controlled by a local Don, Mishra. Shravan falls for Mishra's niece, Sunaina. Mishra does not approve of this match. Shravan strives to win Sunaina's hand i...",
                    genres:[
                        "Drama"
                    ],
                    runtime:145,
                    year:"2018",
                    isMostLiked:false,
                    videos:{
                        trailer:"fl3gun0J8XM"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/A6qDUM0KJPcQKh7wf14xseGBphy.jpg",
                        isLogoIncluded:false
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/A6qDUM0KJPcQKh7wf14xseGBphy.jpg",
                    poster:null,
                    logo:null,
                    keywords:[
                        "boxing",
                        "caste politics"
                    ],
                    cast:[
                        "Vineet Kumar Singh",
                        "Zoya Hussain",
                        "Ravi Kishan"
                    ],
                    ageRating:"U/A 12+"
                },
                {
                    type:"movie",
                    title:"That Girl in Yellow Boots",
                    desc:"An Anglo-Indian woman works in a seedy Mumbai massage parlor while trying to find her long-lost father.",
                    genres:[
                        "Crime",
                        "Drama",
                        "Mystery"
                    ],
                    runtime:103,
                    year:"2011",
                    isMostLiked:false,
                    videos:{
                        trailer:"FRDRfQ_mZnA"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/xZSN3URBvdutvfoVrNXExDRPdIm.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/xZSN3URBvdutvfoVrNXExDRPdIm.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/of0R4kW7iTld0BawcUHNSkzVuSx.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "gangster"
                    ],
                    cast:[
                        "Kalki Koechlin",
                        "Naseeruddin Shah",
                        "Gulshan Devaiah"
                    ],
                    ageRating:"U/A 12+"
                },
                {
                    type:"movie",
                    title:"Raman Raghav 2.0",
                    desc:"A corrupt cop and a serial killer obsessed with a psychopath from the '60s get caught up in a ruthless cat-and-mouse game.",
                    genres:[
                        "Thriller",
                        "Crime"
                    ],
                    runtime:134,
                    year:"2016",
                    isMostLiked:false,
                    videos:{
                        clip:"0nDNKf2h2cg",
                        trailer:"xq1cEmhVa68"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/e0ENbso69pi1GoMgj4jTXdOL47I.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/wlbWvdbn3B3EvWIaQ8hiKPnv2qH.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/zNSxE4gTAc9sY8mHz99cWa97ju7.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "drug addiction",
                        "serial killer",
                        "life in the slums"
                    ],
                    cast:[
                        "Nawazuddin Siddiqui",
                        "Vicky Kaushal",
                        "Sobhita Dhulipala"
                    ],
                    ageRating:"A-Rated"
                },
                {
                    type:"movie",
                    title:"No Smoking",
                    desc:"A heavily addicted smoker is unprepared for the true price he must pay when he asks a guru's help to kick the habit.",
                    genres:[
                        "Thriller",
                        "Drama"
                    ],
                    runtime:126,
                    year:"2007",
                    isMostLiked:false,
                    videos:{
                        clip:"53D_Qs1C6k4"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/q64vjfQkPPVGj5OvosJvswMhpqM.jpg",
                        isLogoIncluded:false
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/q64vjfQkPPVGj5OvosJvswMhpqM.jpg",
                    poster:null,
                    logo:null,
                    keywords:[
                        "smoking",
                        "cigarette",
                        "chain smoking"
                    ],
                    cast:[
                        "John Abraham",
                        "Paresh Rawal",
                        "Ayesha Takia"
                    ],
                    ageRating:"A-Rated"
                },
                {
                    type:"movie",
                    title:"Bombay Velvet",
                    desc:"An ordinary man, who goes against all odds to forge his own destiny and become a star in the glittering sky of 'Bombay,' thriving on jazz and violence.",
                    genres:[
                        "Crime",
                        "Thriller"
                    ],
                    runtime:151,
                    year:"2015",
                    isMostLiked:false,
                    videos:{},
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/GdV6lVfuDdCdbq1h8HtAdk5zDk.jpg",
                        isLogoIncluded:false
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/GdV6lVfuDdCdbq1h8HtAdk5zDk.jpg",
                    poster:null,
                    logo:null,
                    keywords:[
                        "jazz",
                        "gangster",
                        "boxer"
                    ],
                    cast:[
                        "Ranbir Kapoor",
                        "Anushka Sharma",
                        "Karan Johar"
                    ],
                    ageRating:"U/A 12+"
                },
                {
                    type:"movie",
                    title:"Dobaaraa",
                    desc:"In the 1990s, during a wild thunderstorm night, 12-year-old Anay dies in a road accident shortly after he sees his next-door neighbor committing a crime. Twenty-five years later, in a strange turn of ...",
                    genres:[
                        "Science Fiction",
                        "Mystery",
                        "Thriller"
                    ],
                    runtime:135,
                    year:"2022",
                    isMostLiked:false,
                    videos:{
                        trailer:"AeTsMFbmK14"
                    },
                    backdrop:{
                        image:"https://image.tmdb.org/t/p/w500/dhN8q2eM7n0VL10RSAH2EeFxstQ.jpg",
                        isLogoIncluded:true
                    },
                    backdropNoLang:"https://image.tmdb.org/t/p/original/vA9N4eI19uBGE5HOhHxl9kJr5Ph.jpg",
                    poster:null,
                    logo:{
                        image:"https://image.tmdb.org/t/p/w500/dVaz4a5Ay7wUqABRwntWO11YwVt.png",
                        isLogoIncluded:true
                    },
                    keywords:[
                        "based on movie"
                    ],
                    cast:[
                        "Taapsee Pannu",
                        "Pavail Gulati",
                        "Aarrian Sawant"
                    ],
                    ageRating:"U-Rated"
                }
            ],
            shows: [],
            info: {
                name: 'Anurag Kashyap',
                desc: "A pioneer of modern Indian cinema, Kashyap is known for his raw, unflinching, dark and gritty storytelling. His films dive deep into themes of corruption and Crime. His films are experimental, intense, with extreme portrayal of violence and emotion",
                renowned: 'India',
                knownFor: ['Gangs of Wasseypur', 'Dev D'],
                genres: ['Crime', 'Thriller', 'Drama'],
                preferences: "hard-hitting, realistic and gritty films"
            }
        },
    },
    reducers: {
        addContent: (state, action) => {
            const { key, movies = [], shows = [] } = action.payload
            state[key].movies = movies
            state[key].shows = shows
        },
        setAreHomeSectionsLoaded: (state, action) => {
            state.homeContent = action.payload
        }
    }
})

export const { addContent, setAreHomeSectionsLoaded } = sectionSlice.actions
export default sectionSlice.reducer