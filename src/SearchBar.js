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
        //"http://www.omdbapi.com/?s=Guardians+of+the+Galaxy+Vol.+2&apikey=3fe99504"
        event.preventDefault();
        console.log("in submitTerm function")
        let term = this.state.term
        let arrayTerm = term.split(" ")
        let joinedTerm = arrayTerm.join("+")
        fetch(`http://www.omdbapi.com/?s=${joinedTerm}&apikey=3fe99504`)
        .then(response => response.json())
        .then(thisjson => {
            //use redux and thunk
            console.log("response", thisjson)
            if(thisjson.Response === "true"){
            this.setState({
                moviesData: thisjson.Search
            })
            }
        })
    }

    render(){
        return(
            <div className="SearchBar">
                <form className="SearchForm" onSubmit={this.submitTerm}>
                    <label className="SearchItem" className="label">Search For Movies: </label>
                    <input className="SearchItem" type="text" value={this.state.term} onChange={this.changeInput}/>  
                    <input className="SearchItem" type="submit" value="Search" />
                    
                </form>
                <DisplayMovies movies={this.state.moviesData}/>
            </div>
        )
    }
}

