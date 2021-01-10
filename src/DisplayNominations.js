import React from 'react';
import { connect } from 'react-redux';


class DisplayNominations extends React.Component {

    render(){
        return (
            <p>{this.props.nominations[0].title}</p>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        nominations: state.nominations
    }
}

export default connect(mapStateToProps)(DisplayNominations)