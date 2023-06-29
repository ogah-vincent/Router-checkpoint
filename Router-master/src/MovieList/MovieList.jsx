

    import React from 'react';
    import MovieCard from '../moviecard/MovieCard';

    const MovieList = ({ movies }) => {
    return (
    <div className="movie-list">
        {movies && movies.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
        ))}
    </div>
    );
    };

    export default MovieList;