import React, { Fragment } from 'react';
// import { useState } from 'react';

const OrderDisplay = (props) => {
    


    const renderTable = ({ orderData }) => {
        console.log("ORDER DATA>>>", orderData)
        if (orderData) {
            return orderData.map((item) => {
      
             
                console.log("item new", item.itemCustomization)
                if ("No Customization for this item" === item.itemCustomization) {
                    return (
                        <div key={item._id} >
                            <span><h4>OrderId : {item.id}</h4></span>
                            <span><h4>Name : {item.name} </h4></span>
                            <span><h4>Phone : {item.phone}</h4></span>
                            <span><h4>Email : {item.email}</h4></span>
                            <span><h4 >Cost : Rs.{item.cost}</h4></span>
                            <span><h4>Date : {item.date}</h4></span>
                            <span><h4>Status : {item.status}</h4></span>
                            <span><h4>Bank Name : {item.bank_name} Bank</h4></span>
                            <span><h4>Ordered Items : {item.menuItem}</h4></span>
                            <span><h4>Customization Items : {item.itemCustomization}</h4></span>
                            <hr />
                        </div>
                    )

                } else {
                    return (
                        <div key={item._id}>
                            <span><h4>OrderId : {item.id}</h4></span>
                            <span><h4>Name : {item.name} </h4></span>
                            <span><h4>Phone : {item.phone}</h4></span>
                            <span><h4>Email : {item.email}</h4></span>
                            <span><h4>Cost : Rs.{item.cost}</h4></span>
                            <span><h4>Date : {item.date}</h4></span>
                            <span><h4>Status : {item.status}</h4></span>
                            <span><h4>Bank Name : {item.bank_name} Bank</h4></span>
                            <span><h4>Ordered Items : {item.menuItem}</h4></span>
                            <span><h4>Customization Items : {
                                item.itemCustomization.map((item, index) => {
                                    if (item) {
                                        return (
                                            <Fragment key={item.id}>
                                                <div style={{ "border": "2px solid" }}>
                                                    <span><h4>Coffee Customization Details:<img src={item.coffeeImg} alt='coffeeImg' /></h4> </span>
                                                    <span><h4>Item ID : {item.coffeeID}</h4></span>
                                                    <span><h4>Item Name : {item.coffeeName}</h4></span>
                                                    <span><h4>Coffee Size : {item.size}</h4></span>
                                                    <span><h4>Choice of Espresso : {item.espresso}</h4></span>
                                                    <span><h4>Choice of Dairy : {item.dairy}</h4></span>
                                                    <span><h4>Whipped Cream : {item.whippedCream}</h4></span>
                                                    <span><h4>Syrups & Sauces : {item.syrupsSauces}</h4></span>
                                                    <span><h4>Sugar & Stirrer : {item.sugarStir}</h4></span>
                                                    <span><h4>Customs : {item.custom}</h4></span>
                                                    <span><h4>Ice Cream : {item.iceCream}</h4></span>
                                                    <hr />
                                                </div>

                                            </Fragment>
                                        )
                                    }

                                })


                            }</h4></span>
                            <hr />
                        </div>
                    )


                }
            })
        }
    }



    return (
        <div className="container">
            <center><h3>Orders:</h3></center>
            {renderTable(props)}
            {/* {renderCustomization(props)} */}
        </div>
    )
}

export default OrderDisplay