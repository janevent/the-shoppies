import React from 'react';
import DisplayMovie from './DisplayMovie';

function DisplayMovies({movies}){

    
        return(
            <div>
                {movies === [] ? ""
                :
                
                    <DisplayMovie />
                }
            
                
            </div>
        )
    
}

export default DisplayMovies