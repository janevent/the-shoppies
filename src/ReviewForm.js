import React from 'react';

export default class ReviewForm extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            review: ""
        }
    }
    
    onChangeReview = (event) =>{
        
        let rev = event.target.value
        this.setState({
            review: rev
        })
    }

    onSubRev = (event) => {
        event.preventDefault()
        this.props.onSubmitReview(this.state.review)
    }

    render(){
        //this.props.title, this.props.year
        return (
            <div className="ReviewForm" >
                
                <form className="review-form" onSubmit={this.onSubRev}>
                    <label className="review-item">Write a Review  </label>
                    <input className="review-item" onChange={this.onChangeReview} value={this.state.review}type="text"/>
                    <input className="review-item" type="submit" value="Submit Review"/>
                </form>
            </div>
        )
    }
}