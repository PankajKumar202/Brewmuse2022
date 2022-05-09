import React,{Component, Fragment} from "react";

class Search extends Component{
    constructor(){
        super()
        this.state={
            keywords:""
        }
    }

    handleChange=(event)=>{
        console.log("inside handle change",event.target.value)
        this.setState({keywords:event.target.value?event.target.value:'Search....'})
        this.props.userInput(event.target.value);
        sessionStorage.setItem('keyVal',event.target.value)
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