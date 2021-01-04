import React from 'react';

export default class SearchBar extends React.Component {

    state = {
        term: ""
    }

    changeInput = (event) => {
        this.setState({
            term: event.target.input
        })
    }

    render(){
        return(
            <div>
                <form>
                    <label value="Search Movies">Search For Movies  </label>
                    <input type="text" value={this.state.term} onChange={this.changeInput}></input> 
                    <button type="submit" value="Search">Search</button>
                </form>
            </div>
        )
    }
}