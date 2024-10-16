import { createSlice } from "@reduxjs/toolkit";

const sectionSlice = createSlice({
    name: 'sections', 
    initialState: {
        homeContent: true,
        keys: ['topRated', 'newRelease', 'popular', 'critic', 'netflix', 'trendingIndia', 'adventure', 'action', 'bestOfYear', 'trueStories', 'comedy', 'family', 'feelGood'],
        topRated: {
            tabs: ['home', 'movie', 'show' ],
            title: "Top Rated",
            movieTitle: "Highest Rated Movies",
            showTitle: "9+/10 Rated Shows",
            movies: [],
            shows: []
        },
        newRelease: {
            tabs: ['home', 'movie', 'show'],
            title: "New Releases",
            movieTitle: "Fresh Releases",
            showTitle: "New Releases: Shows",
            movies: [],
            shows: []
        }, 
        popular: {
            tab: ['home', 'movie', 'show'],
            title: "Popular",
            movieTitle: "Popular: Movies",
            showTitle: "Popular: Shows",
            movies: [],
            shows: []
        },
        critic: {
            tabs: ['home', 'movie', 'show'],
            title: "Critically Acclaimed",
            movieTitle: "Critically Renowned Films",
            showTitle: "Critically Acclaimed: Shows",
            movies: [],
            shows: []
        },
        netflix: {
            tabs: ['home', 'movie', 'show'],
            title: "Netflix Originals",
            movieTitle: "By Netflix",
            showTitle: "Only on Netflix",
            movies: [],
            shows: []
        },
        trendingIndia: {
            tabs: ['home', 'movie', 'show'],
            title: "Trending in India",
            movieTitle: "Trending in India",
            showTitle: "Trending in India",
            movies: [],
            shows: []
        },
        adventure: {
            tabs: ['home', 'movie'],
            title: "Adventure Ride",
            movieTitle: "Adventurous Movies",
            movies: [],
            shows: []
        },
        action: {
            tabs: ['home', 'movie'],
            title: "Action Packed Thrillers",
            movieTitle: "High Adrenaline Action Movies",
            movies: [],
            shows: []
        },
        bestOfYear: {
            tabs: ['home'],
            title: "2023's Best Picks",
            movies: [],
            shows: []
        },
        trueStories: {
            tabs: ['home', 'movie'],
            title: "Based on True Stories",
            movieTitle: "Movies on True Incidents",
            movies: [],
            shows: []
        },
        comedy: {
            tabs: ['home', 'movie'],
            title: "Laugh out Loud Comedies",
            movieTitle: "Laughter Dose Movies",
            movies: [],
            shows: []
        },
        family: {
            tabs: ['home', 'show'],
            title: "Family Favorites",
            showTitle: "Family TV Shows",
            movies: [],
            shows: []
        },
        feelGood: {
            tabs: ['home', 'movie', 'show'],
            title: "Feel Good Flicks",
            movieTitle: "Lighthearted Movies",
            showTitle: "Shows that feel good",
            movies: [],
            shows: []
        },
        crime: {
            tabs: ['movie', 'show'],
            movieTitle: "Crime and Gangster Films",
            showTitle: "True Crime Shows",
            movies: [],
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
            movies: [],
            shows: [],
            info:{
                name: 'Martin Scorsese',
                desc: 'A legend of American cinema, Scorsese is known for his deep character studies and powerful explorations of crime, guilt, and morality. His Dynamic cinematography and intense, emotionally charged and layered stories have produces iconic films.',
                renowned: 'Globally',
                knownFor: ['Taxi Driver', 'Goodfellas', 'The Departed'],
                genres: ['Crime', 'Drama', 'Biographical'],
                preferences: "gritty, character-driven dramas with powerful performances."
            }
        },
        tarantino: {
            tabs: ['director'],
            title: "Tarantino's Finest",
            movies: [],
            shows: [],
            info:{
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
            movies: [],
            shows: [],
            info:{
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
            movies: [],
            shows: [],
            info:{
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
            movies: [],
            shows: [],
            info:{
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
            movies: [],
            shows: [],
            info:{
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
            movies: [],
            shows: [],
            info:{
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
            movies: [],
            shows: [],
            info:{
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
            movies: [],
            shows: [],
            info:{
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
            movies: [],
            shows: [],
            info:{
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
            movies: [],
            shows: [],
            info:{
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
            const { key, movies=[], shows=[] } = action.payload
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