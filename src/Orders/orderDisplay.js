import React, { Fragment } from 'react';

const OrderDisplay = (props) => {

    const renderTable = ({ orderData }) => {
        console.log("ORDER DATA>>>", orderData)
        if (orderData) {
            return orderData.map((item) => {
                if (item.itemCustomization === "No Customization for this item") {
                    return (
                        <div key={item._id} style={{"backgroundColor":"#fff"}}>
                            <span><h5>OrderId : {item.id}</h5></span>
                            <span><h5>Name : {item.name} </h5></span>
                            <span><h5>Phone : {item.phone}</h5></span>
                            <span><h5>Email : {item.email}</h5></span>
                            <span><h5>Cost : Rs.{item.cost}</h5></span>
                            <span><h5>Date : {item.date}</h5></span>
                            <span><h5>Status : {item.status}</h5></span>
                            <span><h5>Bank Name : {item.bank_name} Bank</h5></span>
                            <span><h5>Ordered Items : {item.menuItem}</h5></span>
                            <span><h5>Customization Items : No Customization for ordered item(s).</h5></span>
                            <hr />
                        </div>
                    )
                }
                else {
                    return (
                        <div key={item._id} style={{"backgroundColor":"#fff"}}>
                            <span><h5>OrderId : {item.id}</h5></span>
                            <span><h5>Name : {item.name} </h5></span>
                            <span><h5>Phone : {item.phone}</h5></span>
                            <span><h5>Email : {item.email}</h5></span>
                            <span><h5>Cost : Rs.{item.cost}</h5></span>
                            <span><h5>Date : {item.date}</h5></span>
                            <span><h5>Status : {item.status}</h5></span>
                            <span><h5>Bank Name : {item.bank_name} Bank</h5></span>
                            <span><h5>Ordered Items : {item.menuItem}</h5></span>
                            <span><h5>Customization :
                                {
                                    item.itemCustomization.map((itemCust,index) => {
                                        return (
                                            <Fragment key={index}>
                                                <br/>
                                                <div>
                                                    <span><h6>{index+1}. Coffee Customization Details:<img src={itemCust.coffeeImg} alt='coffeeImg' /></h6> </span>
                                                    <span><h6>Item ID : {itemCust.coffeeID} </h6></span>
                                                    <span><h6>Item Name : {itemCust.coffeeName}</h6></span>
                                                    <span><h6>Coffee Size : {itemCust.size} (Rs.{itemCust.sizePrice})</h6></span>
                                                    <span><h6>Choice of Espresso : {itemCust.espresso} (Rs.{itemCust.espressoPrice})</h6></span>
                                                    <span><h6>Choice of Dairy : {itemCust.dairy} (Rs.{itemCust.dairyPrice})</h6></span>
                                                    <span><h6>Whipped Cream : {itemCust.whippedCream} (Rs.{itemCust.whippedPrice})</h6></span>
                                                    <span><h6>Syrups & Sauces : {itemCust.syrupsSauces} (Rs.{itemCust.syrupsPrices})</h6></span>
                                                    <span><h6>Sugar & Stirrer : {itemCust.sugarStir} (Rs.{itemCust.sugarPrice})</h6></span>
                                                    <span><h6>Customs : {itemCust.custom} (Rs.{itemCust.customPrice})</h6></span>
                                                    <span><h6>Ice Cream : {itemCust.iceCream} (Rs.{itemCust.iceCreamPrice})</h6></span>
                                                </div>

                                            </Fragment>
                                        )
                                    })

                                }
                            </h5></span>
                            <hr/>
                        </div>
                        
                    )
                }
            })
        }
    }

    return (
        <div className="container-fluid">
            <center><h3>Order History:</h3></center>
            {renderTable(props)}
        </div>
    )
}

export default OrderDisplay