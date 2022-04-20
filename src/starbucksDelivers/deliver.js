import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./delivers.css";
import Header from '../Header'
import Deliverdisplay from "./deliverDisplay";
import Search from './search';
import CategoryFilter from '../filters/categoryFilter';
import CostFilter from '../filters/costFilter';


const menuUrl = "https://brewmusepk.herokuapp.com/Menu";

class delivers extends Component {
    constructor(props) {

        super(props);
        this.state = {
            items: "",
            filtered: ""
        }
    }

    setDataPerFilter = (data) => {
        this.setState({ filtered: data })
    }


    filtered = (userText) => {
        let output = this.state.items.filter((item) => {
            return item.name.toLowerCase().indexOf(userText.toLowerCase()) > -1
        })
        this.setState({ filtered: output })
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="row">

                <div id="header">
                    <form id="form">
                        <i className="fas fa-search"></i>
                        <Search userInput={(data) => { this.filtered(data) }} />
                    </form>
                    <span id="budgt">Cost For Two : <i className="fa-solid fa-indian-rupee-sign"></i>1200</span>
                    <span id="delTime">Delivery Time <i className="fa-duotone fa-moped"></i> : 30 mins</span>
                    <div id="FilterBox">
                        <CategoryFilter dataPerCategory={(data) => { this.setDataPerFilter(data) }} />
                        <CostFilter dataPerCost={(data) => {this.setDataPerFilter(data)}}/>
                       
                    </div>
                 
                 
                </div>
               
                   
                    <Deliverdisplay Menu={this.state.filtered} />
                    
                    

                


                </div>

            </React.Fragment>
        )
    }

    componentDidMount() {
        fetch(menuUrl, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ items: data, filtered: data })

            })
    }
}
export default delivers