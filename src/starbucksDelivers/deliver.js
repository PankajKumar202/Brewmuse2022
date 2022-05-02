import React, { Component, Fragment } from "react";
import { withRouter } from 'react-router-dom';
import "./delivers.css";
import Header from '../Header'
import Deliverdisplay from "./deliverDisplay";
import Search from './search';
import CategoryFilter from '../filters/categoryFilter';
import CostFilter from '../filters/costFilter';
import TypeFilter from "../filters/typeFilter";
import RatingsFilter from "../filters/ratingsFilter";

const menuUrl = "https://brewmusepk.herokuapp.com/Menu";
// const paginationUrl="https://brewmusepk.herokuapp.com/filter?&sort=-1&skip=0&limit=20";

class delivers extends Component {
    constructor(props) {

        super(props);
        this.state = {
            items: "",
            filtered: "",
           

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
    // pagination=()=>{
    //     fetch(paginationUrl,{method:'GET'})
    //     .then((res)=>res.json())
    //     .then((data)=>{
    //         this.setState({pagination:data})
    //     })
    // }
  
      
    
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
                        <span id="budgt">Cost For Two : &#8377; 1200</span>
                        <span id="delTime">Delivery Time <i className="fa-duotone fa-moped"></i> : 30 mins</span>
                        <div id="FilterBox">
                            <CategoryFilter dataPerCategory={(data) => { this.setDataPerFilter(data) }} />
                            <CostFilter dataPerCost={(data) => { this.setDataPerFilter(data) }} />
                            <TypeFilter dataPerType={(data) => { this.setDataPerFilter(data) }} />
                            <RatingsFilter dataPerRatings={(data) => { this.setDataPerFilter(data) }} />

                        </div>


                    </div>


                    <Deliverdisplay Menu={this.state.filtered} />
                    {/* <nav aria-label="...">
                        <ul class="pagination">
                            <li class="page-item disabled">
                                <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                            </li>
                            <li class="page-item"><a class="page-link" href="#" onClick={this.pagination}>1</a></li>
                            <li class="page-item active" aria-current="page">
                                <a class="page-link" href="#" onClick={this.pagination}>2</a>
                            </li>
                            <li class="page-item"><a class="page-link" href="#" onClick={this.pagination}>3</a></li>
                            <li class="page-item">
                                <a class="page-link" href="#">Next</a>
                            </li>
                        </ul>
                    </nav> */}







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
export default withRouter(delivers);