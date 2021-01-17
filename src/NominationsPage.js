import React from 'react';
import DisplayNomination from './DisplayNomination';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
 
class NominationsPage extends React.Component {
    

    render(){
        const allNominations = this.props.nominations.map((nom) => {
            return (
                <DisplayNomination nomination={nom} />
            )

        })
        return (
            <div className="NominationsPage">
                <div className="links"><Link to="/">Search Movies</Link>  <Link to="/reviews">Reviews</Link></div>
                <p>Nominations</p>
                {this.props.nominations.length > 0 ?
                <div>{allNominations}</div> :
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