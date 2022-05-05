import React, { Fragment, Component } from "react";
// import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
import Modal from "./modalDisplay";
const modalUrl = "https://brewmusepk.herokuapp.com/menuItem";
class DeliverView extends Component {
    constructor() {
        super()
        this.state = {
            modalData: "",

            itemID: ""
        }
    }
    handelButton = (event) => {
        if (event) {
            this.setState({
                [event.target.name]: event.target.value
            })

        }

    }

    handleModal = (data) => {

        // let uniqueID=Number(this.state.itemID);
        // console.log("Inside Unique>>>",Number(uniqueID))
        // console.log("Inside Unique params>>>",uniqueID)
        // console.log("Inside Unique>>>",typeof(Number(uniqueID)))
        fetch(`${modalUrl}/${Number(data)}`, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                // console.log("Inside .then>>>",data)
                this.setState({ modalData: data })
            })











    }


    // bothFunction=()=>{
    //     this.handelEvent&&this.handleModal(this.state.itemID);

    // }
    // addItem = () => {
    //     sessionStorage.setItem('size', [this.state.size.split(',')[0], this.state.size.split(',')[1]]);
    //     sessionStorage.setItem('espresso', [this.state.espresso.split(',')[0], this.state.espresso.split(',')[1]]);
    //     sessionStorage.setItem('dairy', [this.state.dairy.split(',')[0], this.state.dairy.split(',')[1]]);
    //     sessionStorage.setItem('whippedCream', [this.state.whippedCream.split(',')[0], this.state.whippedCream.split(',')[1]]);

    //     sessionStorage.setItem('syrupsSauces', [this.state.syrupsSauces.split(',')[0], this.state.syrupsSauces.split(',')[1]]);
    //     sessionStorage.setItem('sugarStirrer', [this.state.sugarStirrer.split(',')[0], this.state.sugarStirrer.split(',')[1]]);
    //     sessionStorage.setItem('custom', [this.state.custom.split(',')[0], this.state.custom.split(',')[1]]);
    //     sessionStorage.setItem('iceCream', [this.state.iceCream.split(',')[0], this.state.iceCream.split(',')[1]]);
    // }
    display = ({ Menu }) => {


        // console.log("menu>>>>", Menu)

        if (Menu) {
            if (Menu.length > 0) {
                // let custSize = Object.keys(Menu).length;
                // console.log("Inside Custsize", custSize)

                return Menu.map((item) => {
                    let custSize = Object.keys(item).length;
                    // console.log("Inside Custsize", custSize)
                    if (custSize <= 18 && custSize > 11) {


                        return (

                            <div className="menuDiv" key={item._id}>
                                <div className="menuCard">
                                    <div className="component1">
                                        <h4 className="name">{item.name}</h4>
                                        <p className="description">{item.description}</p>
                                        <p className="price">Cost : {item.Price}</p>
                                        <p className="ratings">Ratings : {item.Ratings}</p>
                                        <p className="type">Type:{item.type}</p>
                                    </div>
                                    <div className="component2">
                                        <img src={item.image_url} alt="Coffee" className="foodImg" />

                                        {/* <Link to={`/starbucksdelivers/${item._id}`}> */}
                                        {/* <button type="button" className="btn btn-success" id="deliverAdd">
                                                    ADD
                                                </button> */}
                                        {/* </Link> */}
                                        {/* <!-- Button trigger modal --> */}
                                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" name="itemID" value={[item._id, item.Price]} data-bs-target="#exampleModal" id="deliverAdd" onClick={this.handelButton}>
                                            Add
                                        </button>

                                        {/* <!-- Modal --> */}
                                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        {/* {this.addOn(this.state.modalData)} */}
                                                        <Modal addOn={this.state.modalData} defaultPrice={this.state.itemID.split(',')[1]} />


                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

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

                            <div className="menuDiv" key={item._id}>
                                <div className="menuCard">
                                    <div className="component1">
                                        <h4 className="name">{item.name}</h4>
                                        <p className="description">{item.description}</p>
                                        <p className="price">Cost : {item.Price}</p>
                                        <p className="ratings">Ratings : {item.Ratings}</p>
                                        <p className="type">Type:{item.type}</p>
                                    </div>
                                    <div className="component2">
                                        <img src={item.image_url} alt="Coffee" className="foodImg" />


                                        <button type="button" className="btn btn-success" id="deliverAdd">
                                            Add
                                        </button>


                                    </div>


                                </div>
                                <hr />
                            </div>
                        )
                    }




                })






            } else {
                return (
                    <h2>No data found</h2>
                )
            }
        }
        else {
            return (
                <div>
                    <img className="Loading" src='/images/Loader.gif' alt="Loader..." />
                    <h1 className="Loading">Loading.....</h1>
                </div>)

        }
    }

    render() {
        this.handleModal(this.state.itemID.split(',')[0])
        // console.log("Inside render for modal",this.state.modalData)
        return (
            <>
                {this.display(this.props)};




            </>
        )
    }


}



export default DeliverView;