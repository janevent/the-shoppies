import React from 'react';
import ReviewForm from './ReviewForm';

const AddReviewButton = (props) => {

    return(
        <button id={props.title+props.year} onClick={props.onClickAddReview}>Add A Review</button>
    )
}

export default AddReviewButton