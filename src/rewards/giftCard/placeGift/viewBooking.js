import React,{Fragment,Component} from "react";
import { Link } from "react-router-dom";
import GiftTabel from "./giftTabel";
import Header from "../../../Header";

const getGift="https://brewmusepk.herokuapp.com/giftOrder";
const patchGiftOrder="https://brewmusepk.herokuapp.com/updategiftOrder";
class viewBooking extends Component{
    constructor(){
        super();
        this.state={
            finalGift:''
        }
    }
    render(){
        return(
            <Fragment>
                <Header/>
                <h1>View Gift Order</h1>
                <GiftTabel orderTabel={this.state.finalGift} />
                
            </Fragment>
        )
    }
    componentDidMount(){
        let giftEmail=sessionStorage.getItem('email');
        fetch(`${getGift}?email=${giftEmail}`,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({finalGift:data})
        })
    }
}
export default viewBooking;