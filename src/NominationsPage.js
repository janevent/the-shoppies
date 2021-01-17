import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
 
class NominationsPage extends React.Component {
    constructor(){

    }

    render(){
        return (
            <div className="NominationsPage">
                <div className="links"><Link to="/">Search Movies</Link>  <Link to="/reviews">Reviews</Link></div>
                {this.props.nominations.length > 0 ?
                <p>nominations</p> :
                <p>There are no nominations yet</p>
                }
            </div>

        )

    }
}

const mapStateToProps = (state) => {
    return {
        nominations: state.nominations
    }
}

export default connect(mapStateToProps)(NominationsPage)