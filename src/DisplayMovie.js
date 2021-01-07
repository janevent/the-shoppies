import React from 'react';
import DenominateButton from 'DenominateButton';
import NominateButton from 'NominateButton';

export default class DisplayMovie extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            title: props.title,
            year: props.year,
            nominated: false
        }
    }

    clickNominate = (event) => {
        this.setState({
            nominated: true
        })
        //add to nominated list
    }

    clickDenominate = () => {
        this.setState({
            nominated: false
        })
        //take away from nominated list
    }

    componentDidMount(){
        console.log("DisplayMovie did mount");
        console.log(this.props)
    }

    render(){ 
        
        return(
            <div className="DisplayMovie">
                
                <h2>{this.state.title}</h2>
                <h3>{this.state.year}</h3>
                {!!this.state.nominated ?
                <DenominateButton denominateFun={this.clickDenominate}/>
                :
                <NominateButton nominateFun={this.clickNominate}/>}
            </div>
        )
    }
}