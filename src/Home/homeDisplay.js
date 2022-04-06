import React, { Fragment } from "react";
import Header from "../Header";
import './home.css';


const HomeDisplay = (props) => {
    console.log("Inside Home Display", props)
    const renderImg = ({ imgData }) => {
        if (imgData) {
            if (imgData.length > 0) {
                return imgData.map((item) => {
                    return (

                        <div className="container-fluid" id="section" key={item._id}>
                            <img src={item.img_thumb} alt="Images" />
                        </div>



                    )
                })
            } else {
                return (
                    <h2>No Data Found</h2>
                )
            }
        } else {
            return (
                <h2>Loading...</h2>
            )
        }
    }
    return (

        <React.Fragment>
            <Header />

            {renderImg(props)}


        </React.Fragment>
    )
}





export default HomeDisplay;