import React, { Fragment } from "react";
const GiftTabel=(props)=>{
    const ItemTabel=({orderTabel})=>{
        if(orderTabel){
            return orderTabel.map((item)=>{
                return(
                    <Fragment>
                          <div id="orderBox" key={item.id} style={{border:"3px solid black"}}>
                          <span><b>Order Id :</b> {item._id}</span><br />
                            <span><b>Gift Id :</b> {item.orderItem}</span><br />
                            <img src={item.imgUrl} alt="orderImg"/>
                            <span><b>Sender Name :</b> {item.senderName}</span><br />
                            <span><b>Sender Email :</b> {item.senderEmail}</span><br />
                            <span><b>Cost :</b> {item.Amount}</span><br/>
                            <span><b>Date :</b> {item.date}</span><br />
                            <span><b>Status :</b> {item.status}</span><br />
                            <span><b>Bank Name :</b> {item.bank_name} Bank</span><br />
                            <hr/>

                        </div>
                    </Fragment>
                    
                )
            })
        }
    }
    return(
        <div className="Container">
        <center><h3>Orders</h3></center>
       
    
      
            
                {ItemTabel(props)}
            

    
    </div>
    )
}
export default GiftTabel;