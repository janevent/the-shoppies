import React from 'react';

function DisplayNomination(props){

    return(
        <div className="DisplayNomination">
            <h1>{props.nomination.title}</h1>
            <h2>{props.nomination.year}</h2>
        </div>
    )
}

export default DisplayNomination;