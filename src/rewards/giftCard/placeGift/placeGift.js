import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import Header from "../../../Header";
import './place.css'
const giftItems = "https://brewmusepk.herokuapp.com/giftcard";
// const placeGift = "https://brewmusepk.herokuapp.com/placegiftOrder";
class PlaceGift extends Component {
    constructor() {
        super()
        this.state = {

            orderItem: '',
            imgUrl:sessionStorage.getItem('giftImg'),
            recipientName: '',
            message: '',
            recipientEmail: '',
            Amount: '',
            Phone:'',
            senderName: sessionStorage.getItem('userName'),
            senderEmail: sessionStorage.getItem('email'),
            setGiftID:sessionStorage.getItem('giftId')
        }
    }
    handelgift = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    renderGiftMenu = (data) => {
        if (data) {
            return data.map((item) => {
                return (
                    <div className="orderImage">
                        <img src={item.img_url} alt="Order-Image" />
                    </div>
                )
            })
        }

    }
    proceedGift=()=>{
        // let giftItems=Object.values(this.state.orderItem._id)
        console.log("Iside proceedeGift",giftItems)
        sessionStorage.setItem('recipientName',this.state.recipientName)
        sessionStorage.setItem('recipientEmail',this.state.recipientEmail)
        sessionStorage.setItem('Amount',this.state.Amount)
        sessionStorage.setItem('message',this.state.message)
        sessionStorage.setItem('Phone',this.state.Phone)
        // sessionStorage.setItem('orderItem',this.state.orderItem)
        // let finalOrder=this.state;
        // finalOrder.orderItem=sessionStorage.getItem('giftItem');
        // fetch(placeGift,{
        //     method:'POST',
        //     headers:{
        //         'accept':'application/json',
        //         'Content-Type':'application/json'
        //     },
        //     body:JSON.stringify(finalOrder)
        // })
        // .then(console.log('Order Processed Make Payment'))

    }
    render() {
        return (
            <Fragment>
                {/* style={{display:"inline-block"}} */}
                <Header />
              
                 <div className="mb-3" >
                     <Link to={`/giftCards/${this.state.setGiftID}`}>
                     <button className="btn" onClick={this.checkOut} type="submit" style={{display:'block',backgroundColor:"#006341",color:"#fff"}}>Back</button>
                     </Link>
               
                </div>

                <h3>Gift Card Message</h3>
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
                {this.renderGiftMenu(this.state.orderItem)}

                <div className="mb-3" >
                    <label for="exampleFormControlInput1" className="form-label" ><b>Recipient Name<sup>*</sup></b></label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Receiver Name" name="recipientName" value={this.state.recipientName} onChange={this.handelgift} style={{marginTop:"-3%"}} required/>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label"><b>Type a Message</b></label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" style={{marginTop:"-3%"}} name="message" value={this.state.message} onChange={this.handelgift}></textarea>
                </div>
                <h3>Gift Card Details</h3>
                <div className="mb-3" >
                    <label for="exampleFormControlInput1" className="form-label" ><b>Gift Card Amount<sup>*</sup></b></label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Input Amount (max of INR 10,000 can be gifted)" name="Amount" value={this.state.Amount} onChange={this.handelgift} style={{marginTop:"-3%"}} required/>
                </div> <div className="mb-3" >
                    <label for="exampleFormControlInput1" className="form-label" ><b>Recipients Details<sup>*</sup></b></label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Receiver Email" name="recipientEmail" value={this.state.recipientEmail} onChange={this.handelgift} style={{marginTop:"-3%"}} required/>
                </div> <div className="mb-3" >
                    <label for="exampleFormControlInput1" className="form-label" ><b>Senders Details<sup>*</sup></b></label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Sender Name" name="senderName" value={this.state.senderName} onChange={this.handelgift} style={{marginTop:"-3%"}} required/>
                </div> 
                <div className="mb-3" >
                    <label for="exampleFormControlInput1" className="form-label" ><b>Senders Email ID<sup>*</sup></b></label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Sender Email" name="senderEmail" value={this.state.senderEmail} onChange={this.handelgift} style={{marginTop:"-3%"}} required/>
                   
                </div>
                <div className="mb-3" >
                    <label for="exampleFormControlInput1" className="form-label" ><b>Senders Phone<sup>*</sup></b></label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Sender Phoneno" name="Phone" value={this.state.Phone} onChange={this.handelgift} style={{marginTop:"-3%"}} required/>
                   
                </div>
                <div className="mb-3" >
                <Link to={'/proceed'}><center><button className="btn" onClick={this.proceedGift} type="submit" style={{display:'block',backgroundColor:"#006341",color:"#fff"}}>Proceed</button></center></Link>
                </div>
                
                

            </Fragment>
        )
    }
    componentDidMount() {
        let giftItem = sessionStorage.getItem('giftItem');
        // this.setState({orderID:giftItem});
        let orderID = [];
        orderID.push(parseInt(giftItem))
        fetch(giftItems, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderID)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                sessionStorage.setItem('giftImg',data[0].img_url)
                sessionStorage.setItem('orderItems',data[0]._id)
                this.setState({ orderItem: data })
            })


    }

}
export default PlaceGift;