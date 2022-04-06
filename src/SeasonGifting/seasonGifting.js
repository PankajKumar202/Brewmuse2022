import React from 'react';
import {Link} from 'react-router-dom';
import "./seasonGifting.css"

import Header from '../Header';

const seasonGifting = () =>{
    return(
        <React.Fragment>
            <Header/>
            <div id="mainDiv">
                <Link to="https://www.starbucks.in/media/MERCH_CATALOGUE_tcm87-73230.pdf" target="__blank">
                    <div className="container-fluid" id="seasonImg1"></div>
                </Link>
                <Link to="#">
                    <div className="container-fluid" id="seasonImg2"></div>
                </Link>
            </div>
        </React.Fragment>
    )
}

export default seasonGifting;