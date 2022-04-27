import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./giftCard.css"
const GiftCategory = (props) => {
    // console.log("Gift ki category",props)
    const categoryGift = ({ giftCategory }) => {
      
        // console.log("gift category", giftCategory)
        if (giftCategory) {

            return giftCategory.map((item) => {
               
                return(
                    // <div style={{width:'100%',height:'800px'}} >

                    <Link to={`/giftCards/${item.gift_id}`} key={item.gift_id} style={{textDecoration:"none"}}>
                        <h1 id="giftCategorylist" renderItems>{item.name}</h1>
                        <hr/>
                    </Link>
                // </div>
                )
                
              

            })
           
        }
    }
    return (
        <div>
            {categoryGift(props)}
           

        </div>

    )
}
export default withRouter(GiftCategory);