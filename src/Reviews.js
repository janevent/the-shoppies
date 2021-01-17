import React from 'react';
import { connect } from 'react-redux';

class Reviews extends React.Component{

   
    render(){
        // const reviews = this.props.reviews.map((r, i) => {
        //     return(
        //     <div id={i+r.title}>
        //         <h2>{r.title}</h2>
        //         <h3>{r.year}</h3>
        //         <p>{r.review}</p>
        //     </div>
        //     )
        // })
        console.log("rendering Reviews", this.props.reviews)
        
        return (
            <div className="Reviews" >
                <h3>Reviews</h3>
            { this.props.reviews.length === 0 ?
               <p>There are no reviews yet</p> :
               <div><p>reviews</p></div>
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