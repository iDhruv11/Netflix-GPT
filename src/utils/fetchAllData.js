    import Bottleneck from "bottleneck"
    import { fetchTopRated, fetchMovieSectionWithFourUrl, fetchCritic, fetchNetflix, fetchMovieSectionWithTwoUrl, fetchBestOfYear, fetchFamily, fetchMcu, fetchAward, fetchCult, fetchViolent, fetchShowSectionWithTwoUrl, fetchShowSectionWithOneUrl, fetchDirectorSection } from "./fetchSections"

    export const fetchAllData = () => {

        const limiter = new Bottleneck({
            maxConcurrent: 49,
            minTime: 20,
        })

        const url = {
            newRelease: [
                "https://api.themoviedb.org/3/discover/movie?api_key=99821f5d8417dc69c3ffd66d204f12cc&language=en-US&page=1&primary_release_year=2024&primary_release_date.gte=2024-06-01&region=IN&sort_by=vote_count.desc&with_origin_country=IN&with_original_language=hi&year=2024",

                "https://api.themoviedb.org/3/discover/movie?api_key=99821f5d8417dc69c3ffd66d204f12cc&language=en-US&page=1&primary_release_year=2024&primary_release_date.gte=2024-06-01&sort_by=vote_count.desc&with_original_language=en&year=2024&without_genres=16",

                "https://api.themoviedb.org/3/discover/tv?api_key=99821f5d8417dc69c3ffd66d204f12cc&sort_by=vote_count.desc&with_origin_country=IN&with_original_language=hi&region=IN&page=1with_keywords=281372,283680&with_networks=213%7C1024%7C3373&air_date.gte=2024-04-01&without_genres=10767",

                "https://api.themoviedb.org/3/discover/tv?api_key=99821f5d8417dc69c3ffd66d204f12cc&sort_by=vote_count.desc&page=1with_keywords=281372,283680&with_networks=213%7C1024%7C3373&air_date.gte=2024-06-01&language=en-US&with_original_language=en"
            ],

            popular: [
                "https://api.themoviedb.org/3/discover/movie?api_key=99821f5d8417dc69c3ffd66d204f12cc&language=en-US&page=1&primary_release_date.gte=2023-12-01&primary_release_date.lte=2024-06-01&region=IN&sort_by=vote_count.desc&with_origin_country=IN&with_original_language=hi",

                "https://api.themoviedb.org/3/discover/movie?api_key=99821f5d8417dc69c3ffd66d204f12cc&include_adult=false&include_video=false&language=en-US&page=1&primary_release_date.gte=2023-12-01&primary_release_date.lte=2024-06-01&sort_by=vote_count.desc&with_original_language=en",

                "https://api.themoviedb.org/3/discover/tv?api_key=99821f5d8417dc69c3ffd66d204f12cc&air_date.gte=2023-12-01&air_date.lte=2024-06-01&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=vote_count.desc&with_original_language=hi&with_original_country=IN&with_networks=213%7C1024%7C3373",

                "https://api.themoviedb.org/3/discover/tv?api_key=99821f5d8417dc69c3ffd66d204f12cc&air_date.gte=2023-12-01&air_date.lte=2024-06-01&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=vote_count.desc&with_original_language=en",
            ],

            trending: [
                "https://api.themoviedb.org/3/discover/movie?api_key=99821f5d8417dc69c3ffd66d204f12cc&include_adult=false&include_video=false&language=hi&page=1&primary_release_year=2024&primary_release_date.gte=2024-07-20&region=IN&with_original_language=hi&sort_by=vote_count.desc&with_original_language=hi&year=2024&without_keywords=1852",

                "https://api.themoviedb.org/3/discover/movie?api_key=99821f5d8417dc69c3ffd66d204f12cc&include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=2024&primary_release_date.gte=2024-07-20&sort_by=popularity.desc&with_original_language=en&year=2024&without_keywords=1852",

                "https://api.themoviedb.org/3/discover/tv?api_key=99821f5d8417dc69c3ffd66d204f12cc&air_date.gte=2024-05-20&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=vote_count.desc&with_origin_country=IN&with_original_language=hi&with_networks=213%7C1024%7C3373",

                "https://api.themoviedb.org/3/discover/tv?api_key=99821f5d8417dc69c3ffd66d204f12cc&air_date.gte=2024-05-20&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_original_language=en&with_networks=213%7C1024%7C3373"
            ],

            adventure: [
                "https://api.themoviedb.org/3/discover/movie?&api_key=99821f5d8417dc69c3ffd66d204f12cc&include_adult=false&include_video=false&language=en-US&page=1&region=IN&sort_by=popualrity.desc&with_genres=12&with_origin_country=IN&with_original_language=hi&without_genres=28&primary_release_date.gte=2005-01-00&without_keywords=9914%7C290707%7C210024",
                
                "https://api.themoviedb.org/3/discover/movie?&api_key=99821f5d8417dc69c3ffd66d204f12cc&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=12%2C28&primary_release_date.gte=2005-01-01&with_original_language=en",
            ],

            action: [
                "https://api.themoviedb.org/3/discover/movie?api_key=99821f5d8417dc69c3ffd66d204f12cc&include_adult=false&include_video=false&language=en-US&page=1&primary_release_date.gte=2010-01-01&region=IN&sort_by=vote_count.desc&with_genres=28%2C53&with_origin_country=IN&with_original_language=hi&without_keywords=164742%7C9818",

                "https://api.themoviedb.org/3/discover/movie?api_key=99821f5d8417dc69c3ffd66d204f12cc&include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_count.desc&with_genres=28%2C53",

            ],

            trueStories: [
                "https://api.themoviedb.org/3/discover/movie?api_key=99821f5d8417dc69c3ffd66d204f12cc&include_adult=false&include_video=false&language=en-US&page=1&region=IN&sort_by=popularity.desc&with_keywords=9672%7C332623%7C5565&with_origin_country=IN&with_original_language=hi&without_keywords=286995%7C281358%7C293198%7C170362",

                "https://api.themoviedb.org/3/discover/movie?api_key=99821f5d8417dc69c3ffd66d204f12cc&include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_count.desc&with_keywords=9672%7C332623%7C5565&without_keywords=286995%7C281358%7C293198%7C170362",

            ],

            comedy: [
                "https://api.themoviedb.org/3/discover/movie?api_key=99821f5d8417dc69c3ffd66d204f12cc&include_adult=false&include_video=false&language=en-US&page=1&primary_release_date.lte=2020-01-01&primary_release_date.gte=1995-01-01&region=IN&sort_by=popularity.desc&with_genres=35&with_origin_country=IN&with_original_language=hi&with_crew=80387&with_cast=35070%7C85033",
            
                "https://api.themoviedb.org/3/discover/movie?api_key=99821f5d8417dc69c3ffd66d204f12cc&include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_count.desc&with_genres=35&with_keywords=290159%7C322268%7C332045%7C9253%7C9755%7C320420%7C167541%7C336694%7C155722%7C&with_original_language=en&without_genres=16&without_keywords=10123%7C334378%7C203322%7C290159%7C316362%7C10614%7C273967%7C316332%7C272553%7C228538%7C169826",
            
            ],

            feelGood: [
                "https://api.themoviedb.org/3/discover/movie?api_key=99821f5d8417dc69c3ffd66d204f12cc&include_adult=false&include_video=false&language=en-US&page=1&region=IN&sort_by=revenue.desc&with_origin_country=IN&with_original_language=hi&without_genres=9648%2C53%2C28%2C80%2C36%2C37%2C10752&without_keywords=215292%2C10160&with_keywords=6054",
                
                "https://api.themoviedb.org/3/discover/movie?api_key=99821f5d8417dc69c3ffd66d204f12cc&include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_count.desc&with_keywords=304995%7C329716%7C279521%7C288816%7C199630%7C324723&with_original_language=en&without_genres=28%2C80%2C27%2C53%2C10752&without_keywords=286758%2C316090",

                "https://api.themoviedb.org/3/discover/tv?api_key=99821f5d8417dc69c3ffd66d204f12cc&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_keywords=6054%7C304995%7C329716%7C279521%7C288816%7C199630%7C324723%7C9840&with_original_language=hi&with_origin_country=IN&without_genres=10762%7C28%2C80%2C27%2C53%2C10752&with_networks=213%7C1024%7C3733&without_keywords=330920",

                "https://api.themoviedb.org/3/discover/tv?api_key=99821f5d8417dc69c3ffd66d204f12cc&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_keywords=304995%7C329716%7C279521%7C288816%7C199630%7C324723%7C9840&with_original_language=en&without_genres=28%2C80%2C27%2C53%2C10752&without_keywords=286758%2C316090&with_networks=213%7C1024%7C3733",

            ],

            crime: [
                "https://api.themoviedb.org/3/discover/movie?api_key=99821f5d8417dc69c3ffd66d204f12cc&include_adult=false&include_video=false&language=en-US&page=1&primary_release_date.gte=1998-01-01&region=IN&sort_by=popularity.desc&with_genres=80&with_keywords=3149%7C298636%7C10391%7C9748%7C165725%7C164186%7C7002%7C15011&with_origin_country=IN&with_original_language=hi&without_genres=35%7C10749&without_keywords=6149%7C5340%7C8015%7C243959%7C10235%7C185011&vote_count.gte=70",
                
                "https://api.themoviedb.org/3/discover/movie?api_key=99821f5d8417dc69c3ffd66d204f12cc&include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_count.desc&with_genres=80&with_keywords=3149%7C298636%7C15011%7C10391%7C9748%7C165725%7C18026%7C7002%7C164186&with_original_language=en&without_keywords=6149%7C5340%7C8015%7C9715%7C290940",

                "https://api.themoviedb.org/3/discover/tv?api_key=99821f5d8417dc69c3ffd66d204f12cc&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=vote_count.desc&with_genres=80&with_keywords=180547%7C9826%7C1539%7C20490%7C10907&with_original_language=en&without_keywords=6149%7C3306%7C1701%7C806%7C878",

                "https://api.themoviedb.org/3/discover/tv?api_key=99821f5d8417dc69c3ffd66d204f12cc&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=vote_count.desc&with_genres=80&with_origin_country=IN&with_original_language=hi&with_networks=213%7C1024%7C3373&without_keywords=240119&without_genres=99"
            ],

            binge: [
                "https://api.themoviedb.org/3/discover/tv?api_key=99821f5d8417dc69c3ffd66d204f12cc&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_networks=213%7C1024%7C3373&with_origin_country=IN&with_original_language=hi&without_genres=16%7C99&vote_count.gte=32&without_keywords=240119%7C208289%7C333045%7C208799%7C230234%7C12377",
                
                "https://api.themoviedb.org/3/discover/tv?api_key=99821f5d8417dc69c3ffd66d204f12cc&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=vote_count.desc&vote_count.lte=10000&with_original_language=en&without_genres=16%2C99&without_genres=16%2C99&without_keywords=207876%7C210590%7C5895%7C191132%7C180547%7C161261",
            ],

            sitcom: "https://api.themoviedb.org/3/discover/tv?api_key=99821f5d8417dc69c3ffd66d204f12cc&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=vote_count.desc&with_genres=35&with_keywords=322268%7C210605%7C232956%7C280227%7C193171%7C336095&with_original_language=en&without_keywords=8102",

            mystery: [
                "https://api.themoviedb.org/3/discover/tv?api_key=99821f5d8417dc69c3ffd66d204f12cc&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=vote_count.desc&with_genres=9648&with_keywords=316332%7C231172%7C263443%7C229137%7C259984%7C207046%7C288394%7C316790%7C314730%7C319190%7C313317&with_original_language=en",

                "https://api.themoviedb.org/3/discover/tv?api_key=99821f5d8417dc69c3ffd66d204f12cc&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=vote_average.desc&with_genres=9648&with_networks=213%7C1024%7C3373&with_origin_country=IN&with_original_language=hi"
            ],

            anime: "https://api.themoviedb.org/3/discover/tv?api_key=99821f5d8417dc69c3ffd66d204f12cc&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=vote_count.desc&with_genres=16&with_keywords=210024%7C248841&with_original_language=ja&without_genres=10762",

            dark: [
                "https://api.themoviedb.org/3/discover/tv?api_key=99821f5d8417dc69c3ffd66d204f12cc&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=vote_count.desc&with_genres=80%7C9648%7C286125&with_keywords=259094%7C286125%7C332685%7C207268%7C285809%7C312898%7C9748%7C12565%7C323114&with_original_language=en&without_keywords=1299",

                "https://api.themoviedb.org/3/discover/tv?api_key=99821f5d8417dc69c3ffd66d204f12cc&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_keywords=208289%7C210608%7C208799%7C12365%7C15009&without_keywords=9840%7C217282&with_networks=213%7C1024%7C3373&with_origin_country=IN&with_original_language=hi"
            ],

            martin: [769, 1578, 103, 1422, 11324, 106646, 398978, 3131, 524, 2567, 1598, 466420],
            tarantino: [680, 16869, 500, 24, 68718, 273248, 393, 466272, 184, 1991, 241, 319],
            steven: [424, 857, 578, 640, 594, 329, 180, 333339, 601, 85, 89, 296098],
            nolan: [27205, 157336, 155, 49026, 272, 374720, 1124, 77, 577922, 872585, 320, 11660],
            kubrick: [600, 694, 185, 345, 967, 935, 3175, 802, 975, 10056, 247, 10165],
            fincher: [550, 807, 1949, 210577, 37799, 4922, 65754, 2649, 4547, 800158, 614560],
            coen: [6977, 115, 275, 4944, 227306, 537996, 270487, 12573, 395458, 290, 5516, 11775],
            ray: [5801, 896, 35790, 60567, 42498, 35867, 42092, 164990, 135092, 197562, 122445, 43027],
            hirani: [20453, 297222, 19625, 21461, 496328, 960876],
            guru: [41053, 53767, 71284, 70366, 66564, 71283, 154857, 185555, 185552],
            anurag: [117691, 28740, 126400, 21625, 15977, 191726, 470641, 77864, 393562, 36204, 316654, 796207]
        }

        
        Promise.all([

            limiter.wrap(fetchTopRated)(),
            limiter.wrap(fetchMovieSectionWithFourUrl)(url.newRelease[0], url.newRelease[1], url.newRelease[2], url.newRelease[3], 12, 'newRelease', false),
            limiter.wrap(fetchMovieSectionWithFourUrl)(url.popular[0], url.popular[1], url.popular[2], url.popular[3], 12, 'popular', false),
            limiter.wrap(fetchCritic)(),
            limiter.wrap(fetchNetflix)(),
            limiter.wrap(fetchMovieSectionWithFourUrl)(url.trending[0], url.trending[1], url.trending[2], url.trending[3], 10, 'trendingIndia', true),
            limiter.wrap(fetchMovieSectionWithTwoUrl)(url.adventure[0], url.adventure[1], 'adventure'),
            limiter.wrap(fetchMovieSectionWithTwoUrl)(url.action[0], url.action[1], 'action'),
            limiter.wrap(fetchBestOfYear)(),
            limiter.wrap(fetchMovieSectionWithTwoUrl)(url.trueStories[0], url.trueStories[1], 'trueStories'),
            limiter.wrap(fetchMovieSectionWithTwoUrl)(url.comedy[0], url.comedy[1], 'comedy'),
            limiter.wrap(fetchFamily)(),
            limiter.wrap(fetchMovieSectionWithFourUrl)(url.feelGood[0], url.feelGood[1], url.feelGood[2], url.feelGood[3], 12, 'feelGood', false),
            limiter.wrap(fetchMovieSectionWithFourUrl)(url.crime[0], url.crime[1], url.crime[2], url.crime[3], 12, 'crime', false),
            limiter.wrap(fetchMcu)(),
            limiter.wrap(fetchAward)(),
            limiter.wrap(fetchCult)(),
            limiter.wrap(fetchViolent)(),
            limiter.wrap(fetchShowSectionWithTwoUrl)(url.binge[0], url.binge[1], 'binge'),
            limiter.wrap(fetchShowSectionWithOneUrl)(url.sitcom, 'sitcom'),
            limiter.wrap(fetchShowSectionWithTwoUrl)(url.mystery[0], url.mystery[1], 'mystery'),
            limiter.wrap(fetchShowSectionWithOneUrl)(url.anime, 'anime'),
            limiter.wrap(fetchShowSectionWithTwoUrl)(url.dark[0], url.dark[1], 'dark'),
            limiter.wrap(fetchDirectorSection)(url.martin, 'martin'),
            limiter.wrap(fetchDirectorSection)(url.tarantino, 'tarantino'),
            limiter.wrap(fetchDirectorSection)(url.steven, 'steven'),
            limiter.wrap(fetchDirectorSection)(url.nolan, 'nolan'),
            limiter.wrap(fetchDirectorSection)(url.kubrick, 'kubrick'),
            limiter.wrap(fetchDirectorSection)(url.fincher, 'fincher'),
            limiter.wrap(fetchDirectorSection)(url.coen, 'coen'),
            limiter.wrap(fetchDirectorSection)(url.ray, 'ray'),
            limiter.wrap(fetchDirectorSection)(url.hirani, 'hirani'),
            limiter.wrap(fetchDirectorSection)(url.guru, 'guru'),
            limiter.wrap(fetchDirectorSection)(url.anurag, 'anurag'),

        ])
    }