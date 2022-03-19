import React from "react";
import { Link } from "react-router-dom";
const Deliverdisplay = (props) => {
    const display = ({ Menu }) => {
        if (Menu) {
            if (Menu.length > 0) {
                return Menu.map((item) => {
                    return (

                        <div class="menuDiv" key={item._id}>
                            <div class="menuCard">
                                <div class="component1">
                                    <h4 class="name">{item.name}</h4>
                                    <p class="description">{item.description}</p>
                                    <p class="price">Cost : {item.Price}</p>
                                    <p class="type">Type:{item.type}</p>
                                </div>
                                <div class="component2">
                                    <img src={item.image_url} alt="Coffee" class="foodImg" />
                                    <button class="btn btn-success">ADD</button>
                                </div>
                            </div>
                            <hr />
                        </div>
                    )
                })
            } else {
                return (
                    <h2>No data found</h2>
                )
            }
        }
        else {
            return (
                <>
                    <img className="Loading" src='/images/Loader.gif' alt="Loader..." />
                    <h1 className="Loading">Loading.....</h1>
                </>)

        }
    }
    return (
        <div id="content">
            {display(props)}
        </div>
    )
}


export default Deliverdisplay;