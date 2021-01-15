import React from 'react';
import DenButton from './DenButton';
import NominateButton from './NominateButton';
import addNomination from './actions/addNomination';
import deleteNomination from './actions/deleteNomination';
import { connect } from 'react-redux';

class DisplayMovie extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            title: props.title,
            year: props.year,
            nominated: false
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

    componentDidMount(){
        console.log("DisplayMovie did mount");
        console.log(this.props)
    }

    componentDidUpdate(prevprops){
        if(this.props.title !== prevprops.title){
            this.setState({
                title: this.props.title,
                year: this.props.year,
                nominated: false
            })
        }
    }

    render(){ 
        console.log(this.props, this.state)
        return(
            <div className="DisplayMovie">
                
                <h2>{this.state.title}</h2>
                <h3>{this.state.year}</h3>
                {!!this.state.nominated ?
                <DenButton denFun={this.clickDen}/>
                :
                (this.props.nominations.length < 5) ? <NominateButton nominateFun={this.clickNominate}/> 
                : "" }
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
        deleteNomination: (title) => dispatch(deleteNomination(title))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayMovie)