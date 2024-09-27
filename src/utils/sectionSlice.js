import { createSlice } from "@reduxjs/toolkit";

const sectionSlice = createSlice({
    name: 'sections', 
    initialState: {
        homeContent: false,
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
            tabs: ['home'],
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
            movies: []
        },
        tarantino: {
            tabs: ['director'],
            title: "Tarantino's Finest",
            movies: []
        },
        steven: {
            tabs: ['director'],
            title: "Spielberg's Epic Adventures",
            movies: []
        },
        nolan: {
            tabs: ['director'],
            title: "Nolan's Mind Benders",
            movies: []
        },
        kubrick: {
            tabs: ['director'],
            title: "Stanley Kubrick's Cinematic Art",
            movies: []
        },
        fincher: {
            tabs: ['director'],
            title: "David Fincher's Dark Psychological Blend",
            movies: []
        },
        coen: {
            tabs: ['director'],
            title: "The Coen Brothers' Quirky Americana",
            movies: []
        },
        ray: {
            tabs: ['director'],
            title: "Satyajit Ray's Poetic Realism",
            movies: []
        },
        hirani: {
            tabs: ['director'],
            title: "Rajkumar Hirani's Heartfelt Narratives",
            movies: []
        },
        guru: {
            tabs: ['director'],
            title: "Guru Dutt's Tragic Elegance",
            movies: []
        },
        anurag: {
            tabs: ['director'],
            title: "'Anurag Kashyap's raw grit",
            movies: []
        },
    },
    reducers: {
        addContent: (state, action) => {
            const { key, movies, shows } = action.payload
            state[key].movies = movies
            state[key].showss = shows
        },
        setAreHomeSectionsLoaded: (state, action) => {
            state.homeContent = action.payload
        }
    }
})

export const { addContent, setAreHomeSectionsLoaded } = sectionSlice.actions
export default sectionSlice.reducer