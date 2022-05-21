import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import "./delivers.css";
import Header from '../Header'
import Deliverdisplay from "./deliverDisplay";
import Search from './search';
import CategoryFilter from '../filters/categoryFilter';
import CostFilter from '../filters/costFilter';
import TypeFilter from '../filters/typeFilter';
import RatingsFilter from '../filters/ratingsFilter';
import ReactPaginate from 'react-paginate';


const menuUrl = "https://brewmusepk.herokuapp.com/Menu?limit=7";

class delivers extends Component {
    constructor(props) {

        super(props);
        this.state = {
            items: "",
            filtered: "",
            userItems: ""
        }
    }

    addToCart = (data) => {
        console.log("Add to Cart>>>>", data)
        this.setState({ userItems: data })
    }

    proceed = () => {
        sessionStorage.setItem('finalOrder', JSON.stringify(this.state.userItems))

        this.props.history.push(`/placeOrder`)
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
    pagination=(current)=>{
        fetch(`https://brewmusepk.herokuapp.com/filter?skip=${current}&limit=7`,{method:'GET'})
        .then((res)=>res.json())
        .then((data=>{
            console.log("Page data",data)
            this.setState({filtered:data})
        }))
    }
    PageClick=(data)=>{
        console.log(data.selected+6)
        this.pagination(data.selected+6);
    }
    render() {
        // let arr=localStorage.getItem('Customizeddata');
        // var result = Object.entries(arr)
        // console.log("Arr arrr",result)

        return (
            <React.Fragment>
                <Header />
                {/* <div className="row"> */}
              
                    <div id="header2">
                   
                        <form id="form">
                            <i className="fas fa-search"></i>
                            <Search userInput={(data) => { this.filtered(data) }} />
                        </form>

                        <button className="btn" id="proceedBtn" onClick={this.proceed}>Proceed To Place Order</button>
                        <span id="budgt">Cost For Two : <i className="fa-solid fa-indian-rupee-sign"></i>₹1200</span>
                        <span id="delTime">Delivery Time <i className="fa-duotone fa-moped"></i> : 30 mins</span>

                    </div>
                  


                    <button className="btn btn-dark" id="filterModalBtn" type="submit" data-bs-toggle="modal" data-bs-target="#filter_modal">Filter</button>


                    <div id="filterModal">
                        <div class="modal fade" id="filter_modal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-scrollable" >
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <CategoryFilter dataPerCategory={(data) => { this.setDataPerFilter(data) }} />
                                        <CostFilter dataPerCost={(data) => { this.setDataPerFilter(data) }} />
                                        <TypeFilter dataPerType={(data) => { this.setDataPerFilter(data) }} />
                                        <RatingsFilter dataPerRatings={(data) => { this.setDataPerFilter(data) }} />
                                    </div>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                    <div className="FilterBox">
                            <CategoryFilter dataPerCategory={(data) => { this.setDataPerFilter(data) }} />
                            <CostFilter dataPerCost={(data) => { this.setDataPerFilter(data) }} />
                            <TypeFilter dataPerType={(data) => { this.setDataPerFilter(data) }} />
                            <RatingsFilter dataPerRatings={(data) => { this.setDataPerFilter(data) }} />
                          
                        </div>

                        <Deliverdisplay Menu={this.state.filtered} final={(itemId) => { this.addToCart(itemId) }} />
                        <ReactPaginate previousLabel={'previous'} nextLabel={'next'} breakLabel={'...'} pageCount={11} marginPagesDisplayed={1} pageRangeDisplayed={1}
            onPageChange={this.PageClick} containerClassName={'pagination justify-content-center w-85 '} pageClassName={'page-item'} pageLinkClassName={'page-link'}
            previousClassName={'page-item'} previousLinkClassName={'page-link'} nextClassName={'page-item'} nextLinkClassName={'page-link'}
            breakClassName={'page-item'} breakLinkClassName={'page-link'} activeClassName={'active '}/>
            
                        </div>
                   

                {/* </div> */}

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