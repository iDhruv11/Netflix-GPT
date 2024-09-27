import MovieSlider from "./MovieSlider";

const SuggestedMovies = () => {

    const section = {
        title: 'Top Rated',
        movies: [
            {
                src: 'https://image.tmdb.org/t/p/w500/8xzXSjYRGzh54Id774GRVXIBJRh.jpg'
            },
            {
                src: 'https://image.tmdb.org/t/p/w500/8xzXSjYRGzh54Id774GRVXIBJRh.jpg'
            },
            {
                src: 'https://image.tmdb.org/t/p/w500/8xzXSjYRGzh54Id774GRVXIBJRh.jpg'
            },
            {
                src: 'https://image.tmdb.org/t/p/w500/8xzXSjYRGzh54Id774GRVXIBJRh.jpg'
            },
            {
                src: 'https://image.tmdb.org/t/p/w500/8xzXSjYRGzh54Id774GRVXIBJRh.jpg'
            },
            {
                src: 'https://image.tmdb.org/t/p/w500/8xzXSjYRGzh54Id774GRVXIBJRh.jpg'
            },
            {
                src: 'https://image.tmdb.org/t/p/w500/8xzXSjYRGzh54Id774GRVXIBJRh.jpg'
            },
            {
                src: 'https://image.tmdb.org/t/p/w500/8xzXSjYRGzh54Id774GRVXIBJRh.jpg'
            },
            {
                src: 'https://image.tmdb.org/t/p/w500/8xzXSjYRGzh54Id774GRVXIBJRh.jpg'
            },
            {
                src: 'https://image.tmdb.org/t/p/w500/8xzXSjYRGzh54Id774GRVXIBJRh.jpg'
            },
            {
                src: 'https://image.tmdb.org/t/p/w500/8xzXSjYRGzh54Id774GRVXIBJRh.jpg'
            },
            {
                src: 'https://image.tmdb.org/t/p/w500/8xzXSjYRGzh54Id774GRVXIBJRh.jpg'
            },
        ]
    }

    return (
        <div className="bg-[#141414]">
            <div className="pl-10 flex flex-col gap-10">
                <MovieSlider title={section.title} movies={section.movies} />
                <MovieSlider title={section.title} movies={section.movies} />
                <MovieSlider title={section.title} movies={section.movies} />
                <MovieSlider title={section.title} movies={section.movies} />
                <MovieSlider title={section.title} movies={section.movies} />
                <MovieSlider title={section.title} movies={section.movies} />
                <MovieSlider title={section.title} movies={section.movies} />
            </div>
        </div>
    )
}
export default SuggestedMovies;