import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../../Header";
import GiftCategory from "./giftCategoryDisplay"
import "./giftCard.css";
import GiftCardDisplay from "./giftCardDisplay";
const GiftCategoryUrl = "https://brewmusepk.herokuapp.com/giftCategory"
const giftDataurl = "https://brewmusepk.herokuapp.com/cards";
class Gift extends Component {
    constructor(props) {
        super(props)
        this.state = {
            giftCategory: "",
            giftData: "",
            giftItem: ""

        }
    }
    // giftOrders=[]
    addOrders = (id) => {
        console.log("Inside Addorders", id)
        this.setState({ giftItem: id })
    }

    proceed=()=>{
        sessionStorage.setItem('giftItem',this.state.giftItem)
        this.props.history.push(`/placeGift`)
    }

    renderCards = () => {
        let gift_Category = this.props.match.params.giftID;
        sessionStorage.setItem("giftId", gift_Category)
        fetch(`${giftDataurl}/${gift_Category}`, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ giftData: data })
            })
    }
 
    render() {
        console.log("render gift ID", this.state.giftItem);
        console.log("Props guiftcard>>>",this.props)

        if (sessionStorage.getItem('token') !== null) {

            return (

                <Fragment>
                    <Header />
                    <h5 id="giftHeading1">STARBUCKS E-GIFT</h5>
                    <h1 id="giftHeading2">The fastest, easiest way to gift a friend</h1>
                    <ul id="giftContainer">
                        <li>
                            <a>

                                <span><center><img class="img-responsive" src="https://i.ibb.co/fCPGTrP/zero-one.png" className="eGift" /></center>Select a Card</span>
                            </a>
                        </li>
                        <li>
                            <a>

                                <span><center><img class="img-responsive" src="https://i.ibb.co/bgc7ftM/zero-two.png"  className="eGift"/></center>Message &amp; Details</span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <span><center><img class="img-responsive" src="https://i.ibb.co/XWcjZQz/zero-three.png" className="eGift"/></center>Confirm &amp; Pay</span>


                            </a>
                        </li>
                    </ul>
                    <div id="giftContainer1">
                        <GiftCategory giftCategory={this.state.giftCategory} />
                    </div>
                    <div id="giftContainer2">
                        {this.renderCards()}
                        <GiftCardDisplay giftCard={this.state.giftData} finalGift={(data) => { this.addOrders(data) }} />
                        <Link className="btn btn-primary" style={{ marginTop: "1%" }} onClick={this.proceed}>
                            Proceed
                        </Link>
                    </div>
                </Fragment>
            )
        } else {
            return (
                <Fragment>
                    <Header />
                    <center><h1>Login First To view this Page</h1></center>
                </Fragment>
            )
        }


    }
    componentDidMount() {

        fetch(GiftCategoryUrl, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                // console.log("Inside giftcar",data[0].gift_id)
                sessionStorage.setItem('defaultgiftID', data[0].gift_id)
                this.setState({ giftCategory: data })
            })



    }
}
export default Gift;