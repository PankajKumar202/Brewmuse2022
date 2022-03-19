import React from "react";
import { Link } from "react-router-dom";
import './food.css';

const Food = () =>{
    return(
        <div className="container" id="mainMenu">
            <h2>Food</h2>
            <h3>We're passionate about coffee and great food to enjoy it with.</h3>
            <img src="https://i.ibb.co/hd3kk7r/Food.jpg" alt="Food"/>
            <p className="content">That's why we are constantly developing a unique, delicious selection of freshly prepared options exclusively for you. All of our foods are handcrafted from the highest quality. For India, we have created a delightful mix of premium coffeehouse favourites-muffins, cookies and croissants–along with custom menu items with Unique Indian flavours.</p>
            <div id="links1">
                <Link to="#"><h2 id="menu1">Featured Food</h2></Link>
                <Link to="#"><h2 id="menu2">Savory Bakery</h2></Link>
                <Link to="#"><h2 id="menu3">Salads & Muesli</h2></Link>
            </div>
            <div id="links2">
                <Link to="#"><h2 id="menu4">Sweet Bakery</h2></Link>
                <Link to="#"><h2 id="menu5">Sandwiches & Wraps</h2></Link>
                <Link to="#"><h2 id="menu6">Desserts</h2></Link>
            </div>
            <div id="div3">
                <span><Link to="/Menu" id="menu7">Menu .</Link></span>
                <span>Foods</span>
            </div>
        </div>
    )
}

export default Food