import React from "react";
import { Link,withRouter } from 'react-router-dom';


const LinksDisplay = (props) => {
    // console.log("id",props.match.params.categoryID)
   

    const links = ({ typeData }) => {
        console.log("Inside LinksDisplay",props)
        if (typeData) {
            return typeData.map((item) => {
                // sessionStorage.setItem('id',item.id)
                // if (item.id < 10) {
                    return(
                       
                        <div id="typeLinks" key={item.id}>
                            <Link to={`/drinksMenu/${item.id}`}>
                                <h2 id="menu1">{item.category}</h2>
                            </Link>
                        </div>
                    )
                // }
                // else{
                //     return(
                //         <div id="typeLinks" key={item.id}>
                //             <Link to={`/FoodMenu/${item.id}`}>
                //                 <h2 id="menu1">{item.category}</h2>
                //             </Link>
                //         </div>
                //     )
                // }

            })
        }
    }

    return (
        
        <div>
            {links(props)}
        </div>
    )
}




export default withRouter(LinksDisplay);