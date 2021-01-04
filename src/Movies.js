import React from 'react';
import SearchBar from './SearchBar';
import DisplayMovies from './DisplayMovies';

function Movies() {
    return (
        <div className="Movies">
            <SearchBar />
            <DisplayMovies />
        </div>
    )
}

export default Movies