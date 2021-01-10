import React from 'react';
import SearchBar from './SearchBar';
import DisplayNominations from'./DisplayNominations';
import { connect } from 'react-redux';
//import DisplayMovies from './DisplayMovies';

function Movies() {
    return (
        <div className="Movies">
            <SearchBar />
            {this.props.nominations.length === 5 ?
                <DisplayNominations /> :
                ""
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        nominations: state.nominations
    }
}

export default connect(mapStateToProps)(Movies)