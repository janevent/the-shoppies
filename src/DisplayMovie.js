import React from 'react';
import DenButton from './DenButton';
import NominateButton from './NominateButton';
import AddReviewButton from './AddReviewButton';
import addNomination from './actions/addNomination';
import deleteNomination from './actions/deleteNomination';
import addReview from './actions/addReview';
import ReviewForm from './ReviewForm';
import { connect } from 'react-redux';

class DisplayMovie extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            title: props.title,
            year: props.year,
            nominated: false,
            addReviewClicked: false
        }
    }
    //update state when props are updated

    clickNominate = (event) => {
        this.setState({
            nominated: true
        })
        this.props.addNomination(this.state)
        //add to nominated list
    }

    clickDen = () => {
        this.setState({
            nominated: false
        })
        //take away from nominated list
        this.props.deleteNomination(this.state.title);
    }

    onClickAddReview = (event) => {
        console.log("onAddClickReview")
        event.preventDefault();
        //display review form under movie title 
        //upon submit change state
        //or dispatch a change to reviews globally
        this.setState({addReviewClicked: true})
    }

    onSubmitReview = (event) => {
        //dispatch add review
        event.preventDefault();
        console.log(r)
        let r = event.target.value;
        let review = {
            title: this.state.title,
            year: this.state.year,
            review: r
        }
        this.props.addReview(review)
    }

    componentDidMount(){
        console.log("DisplayMovie did mount");
        console.log(this.props)
    }

    componentDidUpdate(prevprops){
        if(this.props.title !== prevprops.title){
            this.setState({
                title: this.props.title,
                year: this.props.year,
                nominated: false,
                addReviewClicked: false
            })
        }
    }

    render(){ 
        console.log(this.props, this.state)
        return(
            <div className="DisplayMovie">
                
                <h2>{this.state.title}</h2>
                <h3>{this.state.year}</h3>
                <div>
                {!!this.state.nominated ?
                <DenButton denFun={this.clickDen}/>
                :
                (this.props.nominations.length < 5) ? <NominateButton nominateFun={this.clickNominate}/> 
                : "" }
                </div>
                <div><AddReviewButton title={this.state.title} year={this.state.year} onClickAddReview={this.onClickAddReview} /></div>
                {this.state.addReviewClicked === true ?
                    <ReviewForm onSubmitReview={this.onSubmitReview} title={this.state.title} year={this.state.year}/>  :
                    ""  
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        nominations: state.nominations
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNomination: (nomination) => dispatch(addNomination(nomination)),
        deleteNomination: (title) => dispatch(deleteNomination(title)),
        addReview: (review) => dispatch(addReview(review))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayMovie)