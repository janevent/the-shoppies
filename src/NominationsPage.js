import React from 'react';
import { connect } from 'react-redux';

class NominationsPage extends React.Component {
    constructor(){

    }

    render(){
        return (
            
        )

    }
}

const mapStateToProps = (state) => {
    return {
        nominations: state.nominations
    }
}

export default connect(mapStateToProps)(NominationsPage)