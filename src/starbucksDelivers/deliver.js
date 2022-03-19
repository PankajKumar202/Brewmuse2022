import React,{Component} from "react";
import {Link} from 'react-router-dom';
import "./delivers.css";
import Deliverdisplay from "./deliverDisplay";
const menuUrl="https://brewmusepk.herokuapp.com/Menu";
class delivers extends Component{
    constructor(props){
        super(props)
        this.state={
            items:"",
            filtered:"",
            keywords:""
        }
    }
    handleChange=(event)=>{
        console.log(event.target.value)
        this.setState({keywords:event.target.value?event.target.value:'User Text'})
        this.props.userInput(event.target.value);
    }
    filterProduct = (userText) => {
        let output = this.state.items.filter((item) => {
            return item.name.toLowerCase().indexOf(userText.toLowerCase()) > -1
        })
        this.setState({ filtered: output })
    }
   
    render(){
        return(

<div className='row'>
<div id="header">
    
      
        
    
    <div id="buttons">
        <Link to={"#"}><button className="btn btn-secondary"><img src="./images/starbucks delivers/user-plus.svg" alt="" id="signImage"/> Sign in</button></Link>
        <Link to={"#"}><button className="btn btn-primary"><img src="./images/starbucks delivers/log-in.svg" alt="" id="loginImage"/><span id="loginText">Login</span></button></Link>
        <Link to={"#"}><button id="cart"  className="btn btn-success"><img src="./images/starbucks delivers/shopping-bag (1).svg" alt="" id="cartImg"/><span id="cartText">Cart</span><span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"></span>1</button></Link>
    </div>
    <form id="form"> 
     <img src="./images/starbucks delivers/search.svg" alt=""/> 
    <i className="fas fa-search"></i>
        <input userinput={(data) => { this.filterProduct(data) }} onChange={this.handleChange} type="search" id="query" name="q" placeholder="Search..."/>
        {/* <button>Search</button>  */}
      </form>
      <span id="budgt">Cost For Two : <i className="fa-solid fa-indian-rupee-sign"></i>1200</span>
      <span id="delTime">Delivery Time <i className="fa-duotone fa-moped"></i> : 30 mins</span>
</div>
<Deliverdisplay Menu={this.state.filtered}/> 
</div>

            

        )
    }
    componentDidMount(){
        fetch(menuUrl,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({filtered:data})
        })
    }
    
}
export default delivers;