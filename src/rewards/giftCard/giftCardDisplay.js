import React from "react";
import { Link } from "react-router-dom";

const GiftCardDisplay=(props)=>{
    const renderCards=({giftCard})=>{
        if(giftCard.length>0){
            return giftCard.map((item)=>{
                return(
                    <div key={item._id} className="CardImages">
                        <Link>
                            <img src={item.img_url} />
                        </Link>
                    </div>
                )
            })
        }
    }
    return(
        <div>
 {renderCards(props)}
        </div>
       
    )
}
export default GiftCardDisplay;