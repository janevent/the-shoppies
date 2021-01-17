import React from 'react';

export default class ReviewForm extends React.Component{

    render(){
        //this.props.title, this.props.year
        return (
            <div class="ReviewForm" >
                
                <form class="review-form">
                    <label className="review-item">Write a Review  </label>
                    <input className="review-item" type="text"/>
                    <input className="review-item" type="submit" value="Submit Review"/>
                </form>
            </div>
        )
    }
}