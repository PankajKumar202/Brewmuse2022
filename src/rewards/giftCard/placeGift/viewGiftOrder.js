import React,{Fragment,Component} from "react";
import { Link } from "react-router-dom";
import Header from "../../../Header";
import "./place.css";
const placeGift = "https://brewmusepk.herokuapp.com/placegiftOrder";
// const patchGiftOrder="https://brewmusepk.herokuapp.com/updategiftOrder"
class ViewGift extends Component{
    constructor(){
        super();
        this.state={
            id:Math.floor(Math.random()*100000),
            orderItem: sessionStorage.getItem('orderItems'),
            imgUrl:sessionStorage.getItem('giftImg'),
            recipientName: sessionStorage.getItem('recipientName'),
            message: sessionStorage.getItem('message'),
            recipientEmail: sessionStorage.getItem('recipientEmail'),
            Amount: sessionStorage.getItem('Amount'),
            senderName: sessionStorage.getItem('userName'),
            senderEmail: sessionStorage.getItem('email'),
            setGiftID:sessionStorage.getItem('giftId'),
            senderPhone:sessionStorage.getItem('Phone')
        }
    }
    // giftDetails=(data)=>{
    //     if(data){
    //         return data.map((item)=>{
    //             return(
    //             <Fragment>

             
    //                 <div className="orderImage" >
    //                     <img src={item.imgUrl} alt="Final Order Image" />
                        
    //                 </div>
    //                 <div className="orderDetails">
    //                 <b><h1>Congrats</h1></b>
    //                     <h2>INR {item.Amount}</h2>
    //                     <h5>To : {item.recipientName} ({item.recipientEmail}) </h5>
    //                     <h1><b>Summary</b></h1>
    //                     <hr/>
    //                     <center><Link><button className="btn" style={{color:'#fff',backgroundColor:'#006341'}} type='submit'>CheckOut</button></Link></center>
    //                 </div>
                    
    //                 </Fragment>
                    
                    
    //             )
    //         })
    //     }

    // }
    giftCheckOut=()=>{
        let giftObj=this.state;
        // giftObj.orderItem=sessionStorage.getItem('giftItem');
        fetch(placeGift,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(giftObj)
        })
        .then(console.log('Order Taken'))
    }
    render(){
        return(
            <Fragment>
                <Header/>
                <h1>Your Cart</h1>
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
                
                <Fragment>

           
                 <div className="orderImage" >
                     <img src={sessionStorage.getItem('giftImg')} alt="Final Order Image" />
                    
                 </div>
                 <div className="orderDetails">
                 <b><h1>Congrats</h1></b>
                     <h2>INR {sessionStorage.getItem('Amount')}</h2>
                     <h5>To : {sessionStorage.getItem('recipientName')} ({sessionStorage.getItem('recipientEmail') }) </h5>
                    <h1><b>Summary</b></h1>
                     <hr/>
                     {/* <form action="https://localhost:4500/paynow" method="POST"> */}
                     <form action="https://brewgiftpk.herokuapp.com/paynow" method="POST">
                     <input type="hidden" name="id" value={this.state.id} />
                     <input type="hidden" name="Amount" value={this.state.Amount} />
                     <input type="hidden" name="senderName" value={this.state.senderName} />
                     <input type="hidden" name="senderEmail" value={this.state.senderEmail} />
                     <input type="hidden" name="senderPhone" value={this.state.senderPhone} />


                     <center><button className="btn" style={{color:'#fff',backgroundColor:'#006341'}} type='submit' onClick={this.giftCheckOut}>CheckOut</button></center>
                     </form>
                     
                 </div>
                
                 </Fragment>
                
                
             )
                
            </Fragment>
        )
    }
    componentDidMount(){

       
    }
    
}
export default ViewGift;