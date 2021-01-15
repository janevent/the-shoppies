import React from 'react';
import SearchBar from './SearchBar';
import DisplayNominations from'./DisplayNominations';
import { connect } from 'react-redux';
import DisplayMovies from './DisplayMovies';

function Movies(props) {
    console.log(props)
    let toDisplay = (props.nominations.length === 5) ? <DisplayNominations /> : ""
    let searchedMovs = (props.searchedMovies.length > 0) ?
    <DisplayMovies /> : ""
    return (
        <div className="Movies">
            {toDisplay}
            <SearchBar />
            {searchedMovs}
            
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        nominations: state.nominations,
        searchedMovies: state.searchedMovies
    }
}

export default connect(mapStateToProps)(Movies)