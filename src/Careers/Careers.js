import React,{Component, Fragment} from 'react';
import Header from '../Header';
import './careers.css';

const nameUrl = "https://brewmuse.herokuapp.com/name";
const jobUrl = " https://brewmuse.herokuapp.com/jobs?city_name=Pune&profile=Barista"
 
class Careers extends Component{
    constructor(){
        super()

        this.state={
            cupName:''
        }
    }

    handleChange = (event) => {
        this.setState=({cupName:event.target.value?event.target.value:''})
        console.log(event.target.value)
    }

    render(){
        return(
            <Fragment>
                <Header/>
                <div id="careersDiv">
                    <div id="careersDiv1">
                        <div id="nameDiv">
                            <h1 id="nameTag">Hi there!<br/>What's your name?</h1>
                            <input onChange={this.handleChange} id="nameInput" name="name" type="text"/>
                            <button className="btn btn-success" id="enterBtn"type="submit">Go</button> 
                        </div>
                        <div id="nameVisible">{this.state.cupName}</div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Careers;
