import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./delivers.css";
import Deliverdisplay from "./deliverDisplay";
import Search from "./search";
import Header from "../Header";
const menuUrl = "https://brewmusepk.herokuapp.com/Menu";
// const url="https://brewmuse.herokuapp.com/category"
class delivers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: "",
            filtered: ""


        }
    }

    filtered = (userText) => {
        let output = this.state.items.filter((item) => {
            return item.name.toLowerCase().indexOf(userText.toLowerCase()) > -1
        })
        this.setState({ filtered: output })

    }

    render() {
        console.log("Inside render menu>>>", this.state.items)
        return (
            <>
            <Header />
            <div className='row'>
                <div id="header">




                   
                    <form id="form">
                        <img src="./images/starbucks delivers/search.svg" alt="" />
                        <i className="fas fa-search"></i>
                        <Search userInput={(data) => { this.filtered(data); } } />
                        {/* <button>Search</button>  */}
                    </form>
                    <span id="budgt">Cost For Two: <i className="fa-solid fa-indian-rupee-sign"></i>1200</span>
                    <span id="delTime">Delivery Time <i className="fa-duotone fa-moped"></i> : 30 mins</span>
                </div>
                <Deliverdisplay Menu={this.state.filtered} />
                

            </div></>



        )
    }
    componentDidMount() {
        fetch(menuUrl, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ items: data, filtered: data })

            })
    }
    // componentDidMount(){
    //     fetch(url,{method:'GET'})
    //     .then((res)=>res.json())
    //     .then((data)=>{
    //         this.setState({items:data})
    //         console.log('Type data>>>>', data)
    //     })
    // }


}
export default delivers;