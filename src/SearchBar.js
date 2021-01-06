import React from 'react';
import DisplayMovies from './DisplayMovies'

export default class SearchBar extends React.Component {

    state = {
        term: "",
        moviesData: []
    }

    changeInput = (event) => {
        let t = event.target.value
        this.setState({
            term: t
        })
    }

    submitTerm = (event) => {
        event.preventDefault();
        console.log("in submitTerm function")
        fetch("http://www.omdbapi.com/?s=Guardians+of+the+Galaxy+Vol.+2&apikey=3fe99504")
        .then(response => response.json())
        .then(thisjson => {
            console.log("response", thisjson)
            this.setState({
                moviesData: thisjson.Search
            })
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.submitTerm}>
                    <label>Search For Movies: <input type="text" value={this.state.term} onChange={this.changeInput}/>  </label> 
                    <input type="submit" value="Search" />
                    
                </form>
                <DisplayMovies movies={this.state.moviesData}/>
            </div>
        )
    }
}

