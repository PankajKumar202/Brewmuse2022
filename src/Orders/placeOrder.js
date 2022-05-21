import React, { Component, Fragment } from 'react';
import './placeOrder.css'
import Header from '../Header'

const url = "https://brewmusepk.herokuapp.com/menuItem";
const postData = "https://brewmusepk.herokuapp.com/placeOrder";

class PlaceOrder extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: Math.floor(Math.random()*100000),
            name: sessionStorage.getItem('userName'),
            email: sessionStorage.getItem('email'),
            cost: 0,
            phone: '',
            address: '',
            menuItem: '',
            itemCustomization:''
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    renderMenu = (data) => {
        if (data) {
            return data.map((item) => {
                console.log("place order data>>>", data)
                return (
                    <center>
                        <div className="orderItemsCard" key={item._id}>
                            <img src={item.image_url} alt={item.name} />
                            <p style={{ fontSize: '18px' }}>{item.name}</p>
                            <p style={{ fontSize: '16px' }}>Rs. {item.Price}</p>
                        </div>
                    </center>
                )
            })
        }
    }

    checkout = () => {
        let obj = this.state;
        obj.menuItem = sessionStorage.getItem('finalOrder');
        fetch(postData,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(obj)
        })
        .then(console.log('Order placed.'))
    }

    render() {
        if (sessionStorage.getItem('loginStatus') === 'logIn' ) {
            if(sessionStorage.getItem('finalOrder') === '""'){
                return(
                    <Fragment>
                       <Header/>
                       <center>
                        <h2 style={{color:'#8e97a7'}}>Please place order of atleast one item to view this page</h2>
                    </center>
                    </Fragment>
                )
            }else{
               
                     return (
                        <Fragment>
                            <Header/>
                      
                        <div className="container" id="formContainer">
                            &nbsp; &nbsp;
                           
                            <div className="panel panel-info">
                                <div className="panel-heading">
                                    <h3>Your Order:</h3>
                                </div>
                                <div className="panel-body">
                                    {/* <form action="https://brewmusefspk.netlify.app/paynow" method="POST"> */}
                                    <form action="https://brewdeliver.herokuapp.com/paynow" method="POST">
                                        <input type="hidden" name="cost" value={this.state.cost} />
                                        <input type="hidden" name="id" value={this.state.id} />
                                        <div className="row" style={{ paddingBottom: '2%' }}>
                                            <div className="form-group col-md-6">
                                                <label for="fname">Name</label>
                                                <input id="fname" name="name" className="form-control"
                                                    value={this.state.name.toLowerCase().trim().split(' ')[0]} onChange={this.handleChange} />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label for="email">Email</label>
                                                <input id="email" name="email" className="form-control"
                                                    value={this.state.email} onChange={this.handleChange} />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label for="phone">Phone</label>
                                                <input id="phone" name="phone" className="form-control"
                                                    value={this.state.phone} onChange={this.handleChange} />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label for="address">Address</label>
                                                <input id="address" name="address" className="form-control"
                                                    value={this.state.address} onChange={this.handleChange} />
                                            </div>
                                        </div>
                                        <div id="menuItems">{this.renderMenu(this.state.menuItem)}</div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <center>
                                                    <h2>Total Amount Payable is Rs.{this.state.cost}</h2>
                                                </center>
                                                <br/>
                                                <br/>
                                        <center>
                                            <button className="btn btn-success" id="finalSubmit" onClick={this.checkout} type="submit">Submit</button>
                                        </center>
                                            </div>
                                        </div>
                                        
                                    </form>
                                </div>
                            </div>
                        </div>
                        </Fragment>
                    )
                
            }
            
            
        }
        else{
            return(
                <>
                    <Header/>
                    <center>
                        <h2 style={{color:'#8e97a7'}}>Login First To Place Order!</h2>
                    </center>
                </>
            )
        }
    }

    componentDidMount() {
        let custObj=localStorage.getItem('Customizeddata');
        console.log("custObj",JSON.parse(custObj))
        let quantity = {}
        let menuItem = sessionStorage.getItem('finalOrder')
        if(menuItem=='""'){
          return "ok"
        }else{
            let menuOrder = JSON.parse(menuItem)
           
            menuOrder.reduce((item, curr) => {
                console.log("Current",curr)
                console.log(item)
               if (item[curr]) {
                   item[curr] = ++item[curr]
               } else {
                   item[curr] = 1
               }
    
               return item
           },quantity)
        }
       
    
       console.log("Inside order Quant>>>",quantity)
        let orderId = [];
        menuItem.split(`[`)[1].split(`]`)[0].split(',').map((item) => {
            orderId.push(parseInt(item));
            return 'ok'
        })
        fetch(url, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderId)
        })
            .then((res) => res.json())
            .then((data) => {
                let totalPrice = 0;
                let custItem = Object.keys(data[0]).length;
                console.log("Inside Data",custItem)
                if(custItem<11){
                    this.setState({itemCustomization:"No Customization for this item"})
                    localStorage.removeItem('Customizeddata')
                }else{
                    this.setState({itemCustomization:JSON.parse(localStorage.getItem('Customizeddata'))})
                }

                data.map((item) => {
                    for(const key in quantity){
                        if(quantity.hasOwnProperty(key)){
                            if(item._id==key){
                                totalPrice += parseFloat(item.Price)*quantity[key]
                            }
                        }
                    }
                    
                    // return 'ok'
                })
                this.setState({ cost: totalPrice, menuItem: data })
            })
    }
}

export default PlaceOrder;