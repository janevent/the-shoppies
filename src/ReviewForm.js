import React from 'react';

export default class ReviewForm {

    render(){
        //this.props.title, this.props.year
        return (
            <div class="ReviewForm" >
                <p>Review For Movie</p>
                <form>
                    <label>Write a Review</label>
                    <input type="text"/>
                    <input type="submit" value="Submit Review"/>
                </form>
            </div>
        )
    }
}