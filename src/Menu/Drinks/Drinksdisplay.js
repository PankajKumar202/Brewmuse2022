import React from "react";
import { Link } from "react-router-dom";
const Drinksdisplay= (props) => {
    console.log("inside Quickdisplay>>>",props)
    const drinks = ({drinksMenu  }) => {
        if (drinksMenu) {
            return drinksMenu.map((item)=> {
                <Link to={`/listing/${item.category_id}`} key={item.category_id}>
                    <div>
                        <h2 >{item.category}</h2>
                </div>
                </Link>
            })
        }
    }
    return (
        <>
            {drinks(props)}
        </>
    )
}
export default Drinksdisplay ;
