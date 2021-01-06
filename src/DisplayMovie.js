import React from 'react';

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

    clickDenominated = () => {
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
                <h1>Display Movie</h1>
                <h2>{this.state.title}</h2>
                <p>{this.state.year}</p>
            </div>
        )
    }
}