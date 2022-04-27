import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
const modalUrl = "https://brewmusepk.herokuapp.com/menuItem";
class ModalDisplay extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalData: "",
            size: "",
            espresso: "",
            dairy: "",
            whippedCream: "",
            syrupsSauces: "",
            sugarStirrer:"",
            optional:"",
            custom:"",
            iceCream:"",
            itemID:""
        }
    }
    handelevent = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    conditionalPrice = (size1, espresso1, dairy1, whippedCream1, syrupsSauces1,sugarStirrer1,optional1,custom1,iceCream1) => {
      

      
      let totalPrice = Number(sessionStorage.getItem('Defaultprice')) + Number(size1) + Number(espresso1) + Number(dairy1) + Number(whippedCream1) + Number(syrupsSauces1)+Number(sugarStirrer1)+Number(optional1)+Number(custom1)+Number(iceCream1);
      sessionStorage.setItem('totalCust',totalPrice)
        return totalPrice;

    }
    customizedOrders=[]
    addItem=()=>{
        // sessionStorage.setItem('size',this.state.size);
        // sessionStorage.setItem('espresso',this.state.espresso);
        // sessionStorage.setItem('dairy',this.state.dairy);
        // sessionStorage.setItem('whippedCream',this.state.);
       
        // sessionStorage.setItem('',this.state.);
        // sessionStorage.setItem('',this.state.);
        // sessionStorage.setItem('',this.state.);
        // sessionStorage.setItem('',this.state.);
        this.customizedOrders.push(this.state.itemID);
        sessionStorage.setItem('orders',this.customizedOrders);
        // this.props.finalOrder(this.customizedOrders);
        this.props.history.push('/starbucksdelivers');
    }
    addOn = (data) => {
        if (data) {
            return data.map((item) => {
                let size = Object.keys(item).length;
                sessionStorage.setItem('Defaultprice', item.Price)


                if (size > 11) {

                    return (
                        <Fragment>
                            <h1>Customize : <b>{item.name}</b></h1>


                            <h1>Price : <b>	&#8377; {item.Price}</b></h1>
                            <h1>Size : </h1>
                            {
                                item.size.map((sizeData, index) => {
                                  
                                    console.log("Inside sizeData", sizeData)

                                    return (
                                        <div class="form-check" key={index}>
                                            
                                            <input class="form-check-input" type="radio" name="size" value={sizeData.Additional_Price } id="flexRadioDefault1" onClick={this.handelevent} />
                                         
                                            <label class="form-check-label" for="flexRadioDefault1">
                                          
                                                <span>{sizeData.inStock}</span>
                                                <span >{sizeData.name}</span>
                                                <span>{sizeData.Additional_Price}</span>
                                            </label>
                                            
                                        </div>



                                    )
                                })
                            }
                            <h1>Espresso:</h1>
                            {
                                item.Espresso.map((espressoData, index) => {
                                    return (
                                        <Fragment>
                                            <div class="form-check" key={index}>
                                                <input class="form-check-input" type="radio" name="espresso" value={espressoData.Additional_Price} id="flexRadioDefault2" onClick={this.handelevent} />
                                                <label class="form-check-label" for="flexRadioDefault2">

                                                    <span>{espressoData.name}</span>
                                                    <span>{espressoData.Additional_Price}</span>
                                                </label>
                                            </div>
                                        </Fragment>
                                    )
                                })
                            }
                            <h1>Dairy/Non-Dairy :</h1>
                            {
                                item.Dairy.map((dairyData, index) => {
                                    return (
                                        <Fragment>
                                            <div class="form-check" key={index}>
                                                <input class="form-check-input" type="radio" name="dairy" value={dairyData.Additional_Price} onClick={this.handelevent} id="flexRadioDefault3" />
                                                <label class="form-check-label" for="flexRadioDefault3">

                                                    <span>{dairyData.name}</span>
                                                    <span>{dairyData.Additional_Price}</span>
                                                </label>
                                            </div>
                                        </Fragment>
                                    )
                                })
                            }
                            <h1>Whipped Cream :</h1>

                            {


                                item.whippedCream.map((whippedData, index) => {

                                    return (
                                        <Fragment>

                                            <div class="form-check" key={index}>
                                                <input class="form-check-input" type="radio" name="whippedCream" value={whippedData.Additional_Price} onClick={this.handelevent} id="flexRadioDefault4" />
                                                <label class="form-check-label" for="flexRadioDefault4">

                                                    <span>{whippedData.name}</span>
                                                    <span>{whippedData.Additional_Price}</span>
                                                </label>
                                            </div>
                                        </Fragment>
                                    )
                                })





                            }
                            <h1>Syrups and Sauces :</h1>

                            {


                                item.syrupsSauces.map((syrupsSauces, index) => {

                                    return (
                                        <Fragment>

                                            <div class="form-check" key={index}>
                                                <input class="form-check-input" type="radio" name="syrupsSauces" value={syrupsSauces.Additional_Price} onClick={this.handelevent} id="flexRadioDefault5" />
                                                <label class="form-check-label" for="flexRadioDefault5">

                                                    <span>{syrupsSauces.name}</span>
                                                    <span>{syrupsSauces.Additional_Price}</span>
                                                </label>
                                            </div>
                                        </Fragment>
                                    )
                                })





                            }

                            <h1>Sugar and sugarStirrer [Complimentory] :</h1>

                            {


                                item.sugarStirrer.map((sugarStirrer, index) => {

                                    return (
                                        <Fragment>

                                            <div class="form-check" key={index}>
                                                <input class="form-check-input" type="checkbox"  id="flexCheckDefault"/>
                                                    <label class="form-check-label" for="flexCheckDefault" name="sugarStirrer" value={sugarStirrer.Additional_Price} onClick={this.handelevent}>

                                                        <span>{sugarStirrer.name}</span>
                                                        <span>{sugarStirrer.Additional_Price}</span>
                                                    </label>
                                            </div>
                                        </Fragment>
                                    )
                                })





                            }

                            <h1>Optional :</h1>

                            {


                                item.optional.map((optional, index) => {

                                    return (
                                        <Fragment>

                                            <div class="form-check" key={index}>
                                                 <input class="form-check-input" type="radio" name="optional" value={optional.Additional_Price} onClick={this.handelevent} id="flexRadioDefault6" />
                                                <label class="form-check-label" for="flexRadioDefault6">

                                                        <span>{optional.name}</span>
                                                        <span>{optional.Additional_Price}</span>
                                                    </label>
                                            </div>
                                        </Fragment>
                                    )
                                })





                            }
                            <h1>Customs :</h1>

                            {


                                item.Customs.map((custom, index) => {

                                    return (
                                        <Fragment>

                                            <div class="form-check" key={index}>
                                                 <input class="form-check-input" type="radio" name="custom" value={custom.Additional_Price} onClick={this.handelevent} id="flexRadioDefault7" />
                                                <label class="form-check-label" for="flexRadioDefault7">

                                                        <span>{custom.name}</span>
                                                        <span>{custom.Additional_Price}</span>
                                                    </label>
                                            </div>
                                        </Fragment>
                                    )
                                })





                            }
                            <h1>Ice-Cream :</h1>

                            {


                                item.iceCream.map((IceCream, index) => {

                                    return (
                                        <Fragment>

                                            <div class="form-check" key={index}>
                                                 <input class="form-check-input" type="radio" name="iceCream" value={IceCream.Additional_Price} onClick={this.handelevent} id="flexRadioDefault8" />
                                                <label class="form-check-label" for="flexRadioDefault8">

                                                        <span>{IceCream.name}</span>
                                                        <span>{IceCream.Additional_Price}</span>
                                                    </label>
                                            </div>
                                        </Fragment>
                                    )
                                })





                            }
                        </Fragment>
                    )

                } else {
                    this.props.history.push(`/starbucksdelivers`)
                }
            })
        }
    }

    render() {
        console.log("Inside Size", this.state.size);
        
        return (
            <Fragment>
                <Header />

                {this.addOn(this.state.modalData)}
                <center><h3>Total Price For This Item is : {this.conditionalPrice(this.state.size, this.state.espresso, this.state.dairy, this.state.whippedCream, this.state.syrupsSauces,this.state.sugarStirrer,this.state.optional,this.state.custom,this.state.iceCream)} </h3></center>
                <center><button className="btn btn-success" onClick={this.addItem} style={{    marginTop: "-2.6%",marginLeft: "62%"}}>ADD</button></center>
            </Fragment>
        )
    }
    componentDidMount() {
        let uniqueID = this.props.match.params.itemID;
        console.log(uniqueID);
        fetch(`${modalUrl}/${uniqueID}`, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                console.log("defaulter", data[0].Price);
                console.log("defaulter now", data);
                console.log("defaulter now id", data[0]._id);
                this.setState({ modalData: data, defaultPrice: data[0].Price,itemID:data[0]._id })
            })

    }

}
export default ModalDisplay;