import React from 'react';

export default class DisplayMovie extends React.Component{
    
    clickNominate = (event) => {
        this.setState({
            nominated: true
        })
    }

    

    componentDidMount(){
        console.log("DisplayMovie did mount");
        console.log(this.props)
    }

    render(){
        const {title, year} = this.props 
        console.log(title, year)
        return(
            <div className="DisplayMovie">
                <h1>Display Movie</h1>
                <h2>{title}</h2>
                <p>{year}</p>
            </div>
        )
    }
}