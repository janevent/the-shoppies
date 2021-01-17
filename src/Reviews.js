import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Reviews extends React.Component{

   
    render(){
        const reviews = this.props.reviews.map((r, i) => {
             return(
             <div id={i+r.title}>
                 <h1>{r.title}</h1>
                 <h3>{r.year}</h3>
                 <p>{r.review}</p>
             </div>
             )
         })
        console.log("rendering Reviews", this.props.reviews)
        
        return (
            <div className="Reviews" >
                <div className="links"><Link to="/">Search Movies</Link>  <Link to="/nominations" >Nominations</Link></div>
                <p>Reviews</p>
            { this.props.reviews.length === 0 ?
               <p>There are no reviews yet</p> :
               <div>{reviews}</div>
            }

            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        reviews: state.reviews
    }
}

export default connect(mapStateToProps)(Reviews)