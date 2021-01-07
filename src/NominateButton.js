import React from 'react';

export default class NominateButton extends React.Component {


    render(){
        return (
            <div>
            <button onClick={this.props.nominateFun}>Nominate</button>
            </div>
        )
    }
}