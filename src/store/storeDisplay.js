import React, { Fragment } from 'react';

import 'mapbox-gl/dist/mapbox-gl.css';
import './store.css';



const StoreDisplay = (props) => {
    console.log("storeprops", props)
    const renderStore = ({ storeloc }) => {
        console.log("Inside render Store>>>>", storeloc)
        if (storeloc) {
            if (storeloc.length > 0) {
                return storeloc.map((item) => {
                    return (
                        <Fragment>
                            <div id='storeContainer' key={item._id}>

                                <div id='storeComponent'>
                                    <h4>{item.name}</h4>
                                    <h5>{item.address}</h5>

                                </div>
                                

                            </div>
                         
                        </Fragment>
                    )
                })
            } else {
                return (
                    <h2>No Data Found</h2>
                )
            }
        } else {
            return (
                <h1> Loading...</h1>
            )
        }
    }

    return (
        <Fragment>

            {renderStore(props)}


        </Fragment>
    )

}
export default StoreDisplay;
