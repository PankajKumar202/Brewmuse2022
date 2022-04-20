import React from "react";
import { Link, withRouter } from "react-router-dom";

const Deliverdisplay = (props) => {
    const display = ({ Menu }) => {

        console.log("menu>>>>", Menu)
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
                                  
                                    <Link to={`/starbucksdelivers/${item._id}`}>
                                        <button type="button" class="btn btn-success" id="deliverAdd" >
                                            ADD
                                        </button>
                                    </Link>
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
                <div>
                    <img className="Loading" src='/images/Loader.gif' alt="Loader..." />
                    <h1 className="Loading">Loading.....</h1>
                </div>)

        }
    }
    return (
        <>
            {display(props)}
        </>
    )
}


export default withRouter(Deliverdisplay);