import React from 'react';

export default class DenButton extends React.Component {


    render(){
        return(
            <button onClick={this.props.denFun}>Denominate</button>
        )
    }
}