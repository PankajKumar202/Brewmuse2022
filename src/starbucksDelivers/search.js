import React,{Component, Fragment} from "react";
import Deliverdisplay from "./deliverDisplay";
class Search extends Component{
    constructor(){
        super()
        this.state={
            keywords:""
        }
    }

    handleChange=(event)=>{
        console.log("inside handle chnage",event.target.value)
        this.setState({keywords:event.target.value?event.target.value:'Search....'})
        this.props.userInput(event.target.value);
    }

    render(){
        return(
            <Fragment>
            <input onChange={this.handleChange} type="search" id="query" name="q" placeholder="Search..."/>
            
            </Fragment>
        )
    }
}
export default Search;