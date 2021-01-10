import React from 'react';
import SearchBar from './SearchBar';
import DisplayNominations from'./DisplayNominations';
import { connect } from 'react-redux';
//import DisplayMovies from './DisplayMovies';

function Movies(props) {
    console.log(props)
    let toDisplay = (props.nominations.length === 5) ? <DisplayNominations /> : ""
    return (
        <div className="Movies">
            {toDisplay}
            <SearchBar />
            
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        nominations: state.nominations
    }
}

export default connect(mapStateToProps)(Movies)