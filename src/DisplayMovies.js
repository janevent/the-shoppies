import React from 'react';
import DisplayMovie from './DisplayMovie';

class DisplayMovies extends React.Component{

        
        componentDidMount(){
            console.log(this.props)
            this.props.movies.forEach((m) => {
               console.log("m", m)
            })
        }
        // renderMovies = () => {    
        //     console.log(this.props)        
        //     let displayMovies = this.props.movies.forEach((m) => {
        //         let ob = {title: m.Title, year: m.Year}
        //         console.log(ob)
        //         return <DisplayMovie movie={ob} />
        //     })
        //     return displayMovies
        // }

        render(){
            let movs = this.props.movies.map((m) => <DisplayMovie title={m.Title} year={m.Year} />)   
            //let mm = this.props.movies.forEach((m) => m.Title)
            //console.log(mm)
            console.log(movs)
            console.log(this.props)
            return(
                <div>
                    <p>Display Movies</p>
                    
                    <div>{this.props.movies !== [] ?
                        movs
                        : ""
                        }
                    </div>          
                    
                               
                </div>
            )
        }
    
}

export default DisplayMovies
// {this.props.movies === [] ? ""
//                     : 
//                     this.props.movies.forEach((m) => <DisplayMovie title={m.Title} year={m.Year} />)              
                    
//                     }            