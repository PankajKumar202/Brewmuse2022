import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Modal from './modalDisplay'
const modalUrl = "https://brewmusepk.herokuapp.com/menuItem";

class Deliverdisplay extends Component {

    constructor() {
        super()
        this.state = {
            modalData: "",
            itemID: "",
           
          
        }
    }

    orderId = [];

    addItem = (id) => {
        if (id) {
            this.orderId.push(id)
            this.props.final(this.orderId)
            console.log("add id>>", id)
            sessionStorage.setItem('orderArray', this.orderId)
            console.log('final order id', this.orderId)
        }
    }

    handleButton = (event) => {
        if (event) {
            this.setState({
                [event.target.name]: event.target.value
            })
            this.handleModal((event.target.value).split(',')[0])
            sessionStorage.setItem('tempId',(event.target.value).split(',')[0])
            sessionStorage.setItem('tempName',(event.target.value).split(',')[2])
            sessionStorage.setItem('tempImg',(event.target.value).split(',')[3])
        }
    }

    handleModal = (data) => {
        fetch(`${modalUrl}/${Number(data)}`, { method: 'GET' })
        .then((res) => res.json())
        .then((data) => {
            console.log("modal Data>>>>",data)
            this.setState({ modalData: data })
            // sessionStorage.setItem({})
        })
    }
    
    removeItem = (id) => {
        let orderVal = sessionStorage.getItem('orders');
        if (this.orderId.indexOf(id) > -1 || this.orderId.indexOf(orderVal) > -1) {
            this.orderId.splice(this.orderId.indexOf(id), 1)
            this.orderId.splice(this.orderId.indexOf(orderVal), 1)
            sessionStorage.removeItem('orders');
            sessionStorage.removeItem('orderArray');
        }
        this.props.final(this.orderId)
        console.log("remove id>>", id)
        console.log("removeCust id>>", orderVal)
    }

    renderCart = (orders) => {
        if (orders) {
            return orders.map((item, index) => {
                return (
                    <b key={index}>{item} &nbsp;</b>
                )
            })
        }
    }

    display = ({ Menu}) => {
        // console.log(Menu)
      
        
        

        if (Menu) {
            if (Menu.length>0) {
                return Menu.map((item) => {
                    let custSize = Object.keys(item).length;
                    if (custSize <= 18 && custSize > 11) {
                        return (
                            <div class="menuDiv" key={item._id}>
                                <div class="menuCard">
                                    <div class="component1">
                                        <h4 class="name">{item.name}</h4>
                                        <p class="description">{item.description}</p>
                                        <p class="price">Cost : {item.Price}</p>
                                        <p class="ratings">Ratings : {item.Ratings}</p>
                                        <p class="type">Type:{item.type}</p>
                                    </div>
                                    <div class="component2">
                                        <img src={item.image_url} alt="Coffee" class="foodImg" />
                                        <div id="orderAdd">
                                        <button type="button" class="btn btn-success" id="deliverAdd" data-bs-toggle="modal" name="itemID" value={[item._id, item.Price,item.name,item.image_url]} data-bs-target="#exampleModal" onClick={this.handleButton}>
                                                +
                                        </button>

                                        &nbsp;

                                        <button type="button" class="btn btn-danger" id="deliverSub" onClick={() => { this.removeItem(item._id) }}>
                                            -
                                        </button>

                                        </div>
                                     

                                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-scrollable">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="exampleModalLabel">Customization Available</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => sessionStorage.removeItem('tempId')}></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <Modal addOn={this.state.modalData} defaultPrice={this.state.itemID.split(',')[1]} tempId={(itemId) => { this.addItem(itemId) }}/>
                                                    </div>
                                                   
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <hr />
                            </div>
                        )
                    }
                    else {
                        return (
                            <div class="menuDiv" key={item._id}>
                                <div class="menuCard">
                                    <div class="component1">
                                        <h4 class="name">{item.name}</h4>
                                        <p class="description">{item.description}</p>
                                        <p class="price">Cost : {item.Price}</p>
                                        <p class="ratings">Ratings : {item.Ratings}</p>
                                        <p class="type">Type:{item.type}</p>
                                    </div>
                                    <div class="component2">
                                        <img src={item.image_url} alt="Coffee" class="foodImg" />
                                        <div id="orderAdd">
                                        <button type="button" class="btn btn-success" id="deliverAdd" onClick={() => { this.addItem(item._id) }}>
                                            +
                                        </button>
                                        &nbsp;
                                        <button type="button" class="btn btn-danger" id="deliverSub" onClick={() => { this.removeItem(item._id) }}>
                                            -
                                        </button>
                                        </div>
                                      
                                    </div>
                                </div>
                                <hr />
                            </div>
                        )
                    }
                })
            }  else {
                return (
                    <div>
                        <img className="Loading" src="https://i.ibb.co/Kz406Z6/Loader.gif" alt="Loader" border="0"></img>
                        
                        <h1 className="Loading">Loading.....</h1>
                    </div>
                )
            }
        }
      
    }

    render() {
        // console.log("Insiude customized data",this.props)
        return (
            <>
              
                <div id="cartDisplayDiv" style={{"display":"inline-block"}}>
                    <h1>Added Items:</h1>
                    Item Number: {this.renderCart(this.orderId)} Added.
                </div>

                <div>
                    {this.display(this.props)}
                </div>
               
                
            </>
        )
    }
   
    
       
    
    
}




export default withRouter(Deliverdisplay);