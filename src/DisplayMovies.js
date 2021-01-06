import React from 'react';
import DisplayMovie from './DisplayMovie';

class DisplayMovies extends React.Component{

        

        renderMovies = () => {    
            console.log(this.props)        
            let displayMovies = this.props.movies.forEach((m) => {
                let ob = {title: m.Title, date: m.Date}
                return <DisplayMovie movie={ob} />
            })
            return displayMovies
        }

        render(){
            return(
                <div>
                    {this.props.movies === [] ? ""
                    :               
                    this.renderMovies()
                    }            
                </div>
            )
        }
    
}

export default DisplayMovies