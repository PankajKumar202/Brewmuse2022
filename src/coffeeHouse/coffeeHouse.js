import react,{Fragment} from "react";
import {Link} from "react-router-dom";
import "./coffeeHouse.css";
const coffeeHouse=()=>{
    return(
        <Fragment>
            <div className="container" id="mainDiv">
        <h2>Coffeehouse</h2>
        <img src="https://i.ibb.co/zQjrZ96/Coffeehouse.jpg" alt="Coffeehouse"/>
        <div id="div1">
            <Link to={"#"}><h2 className="divHeading" id="heading1">Store Design</h2></Link>
            <p className="content">What makes a Starbucks coffeehouse such a vibrant and inviting space? A philosophy of community and environmental responsibility.</p>
            <Link to={"#"}><h6 className="divSubHeading" id="divSubHeading1">Learn More</h6></Link>
        </div>

        <div id="div2">
            <Link to={"#"}><h2 className="divHeading" id="heading2">Wireless Internet</h2></Link>
            <p className="content">While our coffee brings people together, our free Wi-Fi service means you can stay connected. Learn how to surf while you sip at Starbucks.</p>
            <Link to={"#"}><h6 className="divSubHeading" id="divSubHeading">Get Online</h6></Link>
        </div>

        <div id="div3">
            <Link to={"#"}><h2 className="divHeading" id="heading3">Store Locations</h2></Link>
            <p className="content">Looking for a Starbucks store near you? See the complete list of Starbucks stores in India here.</p>
            <Link to={"#"}><h6 className="divSubHeading" id="divSubHeading3">India Store Locations</h6></Link>
        </div>
        
        <div id="div4">Coffeehouse</div>
    </div>
        </Fragment>
    )
}
export default coffeeHouse;