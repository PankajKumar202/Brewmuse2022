import React, { Fragment, Component } from "react";
// import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
const modalUrl = "https://brewmusepk.herokuapp.com/menuItem";
class DeliverView extends Component {
    constructor() {
        super()
        this.state = {
            modalData: "",
            size: "",
            espresso: "",
            dairy: "",
            whippedCream: "",
            syrupsSauces: "",
            sugarStirrer: "",
            optional: "",
            custom: "",
            iceCream: "",
            itemID: ""
        }
    }
    handelEvent = (event) => {
        if(event){
            this.setState({
                [event.target.name]: event.target.value
            })

        }
       
    }
    conditionalPrice = (size1, espresso1, dairy1, whippedCream1, syrupsSauces1, sugarStirrer1, optional1, custom1, iceCream1) => {


        //   let totalPrice=0;

        // console.log("Inside Confitionm", size1)

        let totalPrice = Number(this.state.itemID.split(',')[1]) + size1 + espresso1 + dairy1 + whippedCream1 + syrupsSauces1 + sugarStirrer1 + optional1 + custom1 + iceCream1;
        // let totalPrice =  parseFloat(sessionStorage.getItem('Defaultprice'))+parseFloat(size1) + parseFloat(espresso1) + parseFloat(dairy1) + parseFloat(whippedCream1) + parseFloat(syrupsSauces1) + parseFloat(sugarStirrer1) + parseFloat(optional1) + parseFloat(custom1) + parseFloat(iceCream1);
        // console.log("totalprice", totalPrice)
        sessionStorage.setItem('totalCust', totalPrice);
        return totalPrice;





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
    addOn = (data) => {
        
        if (data) {
            return data.map((item) => {
                // console.log("data>>>", item)


                return (
                  

                    <Fragment key={item._id}>
                    <h1>Customize : <b>{item.name}</b></h1>


                    <h1>Price : <b>	&#8377; {item.Price}</b></h1>
                    <h1>Size : </h1>
                    {
                        item.size.map((sizeData, index) => {

                            // console.log("Inside sizeData", sizeData.name)

                            return (
                                <div className="form-check" key={index}>
                                    <form>
                                        <input className="form-check-input" type="radio" name="size" value={[sizeData.name, sizeData.Additional_Price]} id="flexRadioDefault1" onClick={this.handelEvent} defaultChecked={item.size[0].name === sizeData.name} disabled={false === sizeData.inStock} />

                                        <label className="form-check-label" for="flexRadioDefault1">

                                            <span>{sizeData.inStock}</span>
                                            <span >{sizeData.name}</span>
                                            <span>{sizeData.Additional_Price}</span>
                                        </label>

                                    </form>


                                </div>



                            )
                        })
                    }
                    <h1>Espresso:</h1>
                    {
                        item.Espresso.map((espressoData, index) => {
                            return (
                                <Fragment>
                                    <div className="form-check" key={index}>
                                    <form>
                                        <input className="form-check-input" type="radio" name="espresso" value={[espressoData.name, espressoData.Additional_Price]} id="flexRadioDefault2" onClick={this.handelEvent} defaultChecked={item.Espresso[0].name === espressoData.name} disabled={false === espressoData.inStock} />
                                        <label className="form-check-label" for="flexRadioDefault2">

                                            <span>{espressoData.name}</span>
                                            <span>{espressoData.Additional_Price}</span>
                                        </label>
                                        </form>
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
                                    <div className="form-check" key={index}>
                                        <form>
                                        <input className="form-check-input" type="radio" name="dairy" value={[dairyData.name, dairyData.Additional_Price]} onClick={this.handelEvent} id="flexRadioDefault3" defaultChecked={item.Dairy[0].name === dairyData.name} disabled={false === dairyData.inStock} />
                                        <label className="form-check-label" for="flexRadioDefault3">

                                            <span>{dairyData.name}</span>
                                            <span>{dairyData.Additional_Price}</span>
                                        </label>
                                        </form>
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

                                    <div className="form-check" key={index}>
                                        <form>
                                        <input className="form-check-input" type="radio" name="whippedCream" value={[whippedData.name, whippedData.Additional_Price]} onClick={this.handelEvent} id="flexRadioDefault4" defaultChecked={item.whippedCream[0].name === whippedData.name} disabled={false === whippedData.inStock} />
                                        <label className="form-check-label" for="flexRadioDefault4">

                                            <span>{whippedData.name}</span>
                                            <span>{whippedData.Additional_Price}</span>
                                        </label>
                                        </form>
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

                                    <div className="form-check" key={index}>
                                        <form>

                                        
                                        <input className="form-check-input" type="radio" name="syrupsSauces" value={[syrupsSauces.name, syrupsSauces.Additional_Price]} onClick={this.handelEvent} id="flexRadioDefault5" defaultChecked={item.syrupsSauces[0].name === syrupsSauces.name} disabled={false === syrupsSauces.inStock} />
                                        <label className="form-check-label" for="flexRadioDefault5">

                                            <span>{syrupsSauces.name}</span>
                                            <span>{syrupsSauces.Additional_Price}</span>
                                        </label>
                                        </form>
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

                                    <div className="form-check" key={index}>
                                    <form>
                                        <input className="form-check-input" type="radio" name="sugarStirrer" value={[sugarStirrer.name, sugarStirrer.Additional_Price]} onClick={this.handelEvent} id="flexRadioDefault6" defaultChecked={item.sugarStirrer[0].name === sugarStirrer.name} disabled={false === sugarStirrer.inStock} />
                                        <label className="form-check-label" for="flexRadioDefault6" >

                                            <span>{sugarStirrer.name}</span>
                                            <span>{sugarStirrer.Additional_Price}</span>
                                        </label>
                                        </form>
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

                                    <div className="form-check" key={index}>
                                        <form>
                                        <input className="form-check-input" type="radio" name="optional" value={[optional.name, optional.Additional_Price]} onClick={this.handelEvent} id="flexRadioDefault7" defaultChecked={item.optional[0].name === optional.name} disabled={false === optional.inStock} />
                                        <label className="form-check-label" for="flexRadioDefault7">

                                            <span>{optional.name}</span>
                                            <span>{optional.Additional_Price}</span>
                                        </label>
                                        </form>
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

                                    <div className="form-check" key={index}>
                                        <form>
                                        <input className="form-check-input" type="radio" name="custom" value={[custom.name, custom.Additional_Price]} onClick={this.handelEvent} id="flexRadioDefault8" defaultChecked={item.Customs[0].name === custom.name} disabled={false === custom.inStock} />
                                        <label className="form-check-label" for="flexRadioDefault8">

                                            <span>{custom.name}</span>
                                            <span>{custom.Additional_Price}</span>
                                        </label>
                                        </form>
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

                                    <div className="form-check" key={index}>
                                        <form>
                                        <input className="form-check-input" type="radio" name="iceCream" value={[IceCream.name, IceCream.Additional_Price]} onClick={this.handelEvent} id="flexRadioDefault9" defaultChecked=
                                        {item.iceCream[0].name === IceCream.name} disabled={false === IceCream.inStock} />
                                        <label className="form-check-label" for="flexRadioDefault9">

                                            <span>{IceCream.name}</span>
                                            <span>{IceCream.Additional_Price}</span>
                                        </label>
                                        </form>
                                    </div>
                                </Fragment>
                            )
                        })





                    }
                </Fragment>
                )


            })
        }
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
                    if (custSize > 11) {
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
                                        <button type="button" className="btn btn-success" data-bs-toggle="modal" name="itemID" value={[item._id,item.Price]} data-bs-target="#exampleModal" id="deliverAdd" onClick={this.handelEvent}>
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
                                                        {this.addOn(this.state.modalData)}
                                                        <center><h3>Total Price For This Item is : {this.conditionalPrice(Number(this.state.size.split(',')[1]), Number(this.state.espresso.split(',')[1]), Number(this.state.dairy.split(',')[1]), Number(this.state.whippedCream.split(',')[1]), Number(this.state.syrupsSauces.split(',')[1]), Number(this.state.sugarStirrer.split(',')[1]), Number(this.state.optional.split(',')[1]), Number(this.state.custom.split(',')[1]), Number(this.state.iceCream.split(',')[1]))} </h3></center>

                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                        <button type="button" onClick={this.addItem} className="btn btn-primary">Save changes</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>


                                </div>
                                <hr />
                            </div>
                        )
                    } else {
                        return Menu.map((item) => {
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
                        })

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