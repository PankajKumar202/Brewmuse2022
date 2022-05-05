import React,{Fragment,Component} from "react";
import { Link } from "react-router-dom";
import GiftTabel from "./giftTabel";
import Header from "../../../Header";
import "./place.css";
// const getGift="http://localhost:4879/giftOrder";
const getGift="https://brewmusepk.herokuapp.com/giftOrder";
// const patchGiftOrder="http://localhost:4879/updategiftOrder";
const patchGiftOrder="https://brewmusepk.herokuapp.com/updategiftOrder";


   

class viewBooking extends Component{
    constructor(props){
        super(props);
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
        if(this.props.location.search){
            console.log("query query",this.props.location.search)
            console.log("query query status",this.props.location.search.split('&ORDERID=')[1].split('&')[0].split('_')[1])
            let query=this.props.location.search;
            if(query){
                let data={
                    "status":query.split('?status=')[1].split('&')[0],
                    "date":query.split('&date=')[1].split('%')[0],
                    "bank_name":query.split('&')[3].split('=')[1].split('%20')[0]
                }
                let id=query.split('&ORDERID=')[1].split('&')[0].split('_')[1];
            
            fetch(`${patchGiftOrder}/${id}`,{
                method:'PATCH',
                headers:{
                    "accept":"application/json",
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(data)
            })
        }
           
        }

        let giftEmail=sessionStorage.getItem('email');
        fetch(`${getGift}?email=${giftEmail}`,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({finalGift:data})
        })
    }
}
export default viewBooking;