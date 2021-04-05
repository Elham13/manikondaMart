const getMovies = async () => {
    const API_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=7d1bd8499c3ce9d2126ef2b2a7e4ee94';
    const {results} = await fetch(API_URL).then(d => d.json());
    const getImagePath = (path) =>  `https://image.tmdb.org/t/p/w440_and_h660_face${path}`;
    const getBackdropPath = (path) => `https://image.tmdb.org/t/p/w370_and_h556_multi_faces${path}`;
    const movies = results.map(
        ({
        id,
        original_title,
        poster_path,
        backdrop_path,
        vote_average,
        overview,
        release_date,
        }) => ({
        key: String(id),
        title: original_title,
        poster: getImagePath(poster_path),
        backdrop: getBackdropPath(backdrop_path),
        rating: vote_average,
        description: overview,
        releaseDate: release_date,
    }))
    return movies;
}


export {getMovies};

