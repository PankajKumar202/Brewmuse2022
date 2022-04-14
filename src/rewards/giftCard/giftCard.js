import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../../Header";
import GiftCategory from "./giftCategoryDisplay"
import "./giftCard.css";
import GiftCardDisplay from "./giftCardDisplay";
const GiftCategoryUrl="https://brewmusepk.herokuapp.com/giftCategory"
const giftDataurl="https://brewmusepk.herokuapp.com/cards";
class Gift extends Component {
    constructor(props) {
        super(props)
        this.state = {
            giftCategory:"",
            giftData: ""

        }
    }
    render() {
        // console.log("render gift", this.state.giftData)
        console.log("render gift.js category ", this.props)
        return (
        
            <Fragment>
                <Header />
                <h5 id="giftHeading1">STARBUCKS E-GIFT</h5>
                <h1 id="giftHeading2">The fastest, easiest way to gift a friend</h1>
                <ul id="giftContainer">
                    <li>
                        <a>

                            <span><center><img class="img-responsive" src="https://i.ibb.co/fCPGTrP/zero-one.png" /></center>Select a Card</span>
                        </a>
                    </li>
                    <li>
                        <a>

                            <span><center><img class="img-responsive" src="https://i.ibb.co/bgc7ftM/zero-two.png" /></center>Message &amp; Details</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span><center><img class="img-responsive" src="https://i.ibb.co/XWcjZQz/zero-three.png" /></center>Confirm &amp; Pay</span>


                        </a>
                    </li>
                </ul>
                <div id="giftContainer1">
                    <GiftCategory giftCategory={this.state.giftCategory} />
                </div>
                <div id="giftContainer2">
                    <GiftCardDisplay giftCard={this.state.giftData}/>
                </div>
            </Fragment>
        )
    }
    componentDidMount() {
        
        fetch(GiftCategoryUrl, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                console.log("Inside giftcar",data)
                this.setState({ giftCategory: data })
            })
           let gift_Category=this.props.match.params.giftID; 

        //    console.log("gift_Category >>>>",gift_Category)
           sessionStorage.setItem("giftId>>>",gift_Category)
        fetch(`${giftDataurl}/${gift_Category}`,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({giftData:data})
        })

    }
}
export default Gift;