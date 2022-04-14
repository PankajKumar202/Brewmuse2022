import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';
import './seasonGifting.css'
import Header from '../Header';

const seasonGifting = () =>{
    return(
        <Fragment>
            <Header/>
            <div id="mainSeasonDiv">
                <Link to="https://www.starbucks.in/media/MERCH_CATALOGUE_tcm87-73230.pdf" target="__blank">
                    <div className="container-fluid" id="seasonimg1"></div>
                </Link>
                <Link to="#">
                    <div className="container-fluid" id="seasonimg2"></div>
                </Link>
            </div>
        </Fragment>
    )
}

export default seasonGifting;