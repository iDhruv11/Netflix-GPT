import Bottleneck from "bottleneck"

export const fetchAllData = async () => {

    const limiter = new Bottleneck({
        maxConcurrent: 49,
        minTime: 20,
    })
    await Promise.all([

        limiter.wrap(fetchTopRated)(),
        limiter.wrap(fetchNewRelease)(),
        limiter.wrap(fetchPopular)(),
        limiter.wrap(fetchCritic)(),
        limiter.wrap(fetchNetflix)(),
        limiter.wrap(fetchTrendingIndia)(),
        limiter.wrap(fetchTrendingIndia)(),
        limiter.wrap(fetchAction)(),
        limiter.wrap(fetchBestOfYear)(),
        limiter.wrap(fetchTrueStories)(),
        limiter.wrap(fetchComedy)(),
        limiter.wrap(fetchFamily)(),
        limiter.wrap(fetchFeelGood)(),
        limiter.wrap(fetchCrime)(),
        limiter.wrap(fetchMcu)(),
        limiter.wrap(fetchAward)(),
        limiter.wrap(fetchCult)(),
        limiter.wrap(fetchViolent)(),
        limiter.wrap(fetchBinge)(),
        limiter.wrap(fetchSitcom)(),
        limiter.wrap(fetchMystery)(),
        limiter.wrap(fetchAnime)(),
        limiter.wrap(fetchDark)(),
        limiter.wrap(fetchMartin)(),
        limiter.wrap(fetchTarantino)(),
        limiter.wrap(fetchSteven)(),
        limiter.wrap(fetchNolan)(),
        limiter.wrap(fetchKubrick)(),
        limiter.wrap(fetchFincher)(),
        limiter.wrap(fetchCoen)(),
        limiter.wrap(fetchRay)(),
        limiter.wrap(fetchHirani)(),
        limiter.wrap(fetchGuru)(),
        limiter.wrap(fetchAnurag)(),

    ])
}