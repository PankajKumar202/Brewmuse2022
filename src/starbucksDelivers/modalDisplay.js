import React,{Fragment,Component} from "react";
class Modal extends Component{
    constructor(props){
        super(props)
        this.state={
            size: "",
            espresso: "",
            dairy: "",
            whippedCream: "",
            syrupsSauces: "",
            sugarStirrer: "",
            optional: "",
            custom: "",
            iceCream: ""
        }
    }
    handelEvent = (event) => {
        if(event){
            this.setState({
                [event.target.name]: event.target.value
            })

        }
       
    }

    conditionalPrice = (defaultPrice,size1, espresso1, dairy1, whippedCream1, syrupsSauces1, sugarStirrer1, optional1, custom1, iceCream1) => {


        //   let totalPrice=0;

        // console.log("Inside Confitionm", size1)

        let totalPrice = Number(defaultPrice) + size1 + espresso1 + dairy1 + whippedCream1 + syrupsSauces1 + sugarStirrer1 + optional1 + custom1 + iceCream1;
        // let totalPrice =  parseFloat(sessionStorage.getItem('Defaultprice'))+parseFloat(size1) + parseFloat(espresso1) + parseFloat(dairy1) + parseFloat(whippedCream1) + parseFloat(syrupsSauces1) + parseFloat(sugarStirrer1) + parseFloat(optional1) + parseFloat(custom1) + parseFloat(iceCream1);
        // console.log("totalprice", totalPrice)
        sessionStorage.setItem('totalCust', totalPrice);
        return totalPrice;





    }
    addItem = () => {
        sessionStorage.setItem('size', [this.state.size.split(',')[0], this.state.size.split(',')[1]]);
        sessionStorage.setItem('espresso', [this.state.espresso.split(',')[0], this.state.espresso.split(',')[1]]);
        sessionStorage.setItem('dairy', [this.state.dairy.split(',')[0], this.state.dairy.split(',')[1]]);
        sessionStorage.setItem('whippedCream', [this.state.whippedCream.split(',')[0], this.state.whippedCream.split(',')[1]]);

        sessionStorage.setItem('syrupsSauces', [this.state.syrupsSauces.split(',')[0], this.state.syrupsSauces.split(',')[1]]);
        sessionStorage.setItem('sugarStirrer', [this.state.sugarStirrer.split(',')[0], this.state.sugarStirrer.split(',')[1]]);
        sessionStorage.setItem('custom', [this.state.custom.split(',')[0], this.state.custom.split(',')[1]]);
        sessionStorage.setItem('iceCream', [this.state.iceCream.split(',')[0], this.state.iceCream.split(',')[1]]);
    }
    addOn = ({addOn}) => {

        
        if (addOn) {
            if(addOn.length>0){
                return addOn.map((item) => {
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
            else{ return (
                <div>
                    <img className="Loading" src='/images/Loader.gif' alt="Loader..." />
                    <h1 className="Loading">Loading.....</h1>
                </div>)}
           
        }
}
    render(){
        // console.log("Inside modal>>>",Number(this.state.size.split(',')[1]))
        // console.log("Inside modal>>>",typeof(this.state.size.split(',')[1]))
      
        
        return(
            <Fragment>
                {this.addOn(this.props)}
                
                <center><h3>Total Price For This Item is : {this.conditionalPrice(this.props.defaultPrice,Number(this.state.size.split(',')[1]), Number(this.state.espresso.split(',')[1]), Number(this.state.dairy.split(',')[1]), Number(this.state.whippedCream.split(',')[1]), Number(this.state.syrupsSauces.split(',')[1]), Number(this.state.sugarStirrer.split(',')[1]), Number(this.state.optional.split(',')[1]), Number(this.state.custom.split(',')[1]), Number(this.state.iceCream.split(',')[1]))} </h3></center>
                <hr/>
                <center><button type="button" onClick={this.addItem} className="btn" style={{backgroundColor:"#006341",color:"#fff"}}>ADD Your Customized Coffee</button></center>
            </Fragment>
        )
    }
}
export default Modal;