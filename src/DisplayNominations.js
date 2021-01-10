import React from 'react';
import { connect } from 'react-redux';
import DisplayNomination from './DisplayNomination';


class DisplayNominations extends React.Component {

    render(){
        let displayNoms = this.props.nominations.map( (nom, index) => {
            return <DisplayNomination nomination={nom} id={index} />
        })
        return (
            <div className="DisplayNominations" >
                {displayNoms}
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        nominations: state.nominations
    }
}

export default connect(mapStateToProps)(DisplayNominations)