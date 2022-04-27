import React from "react";
import { Link } from "react-router-dom";

const GiftCardDisplay = (props) => {
    
    const giftID = (id) => {
        let giftCards = []
        giftCards.push(id);
        this.props.finalGift(giftCards)
        console.log("Inside giftCard>>>>",giftCards)

    }
    const renderCards = ({ giftCard }) => {
        
        // console.log("Inside giftCard",props.giftCard._id)
        if (giftCard.length > 0) {
            return giftCard.map((item) => {
                return (
                    <div key={item._id} className="CardImages">
                        <Link>
                            <button onClick={()=>{giftID(item._id)}}><img src={item.img_url} /></button>
                        </Link>
                    </div>
                )
            })
        }
    }
    return (
        <div>
            {renderCards(props)}
        </div>

    )
}
export default GiftCardDisplay;