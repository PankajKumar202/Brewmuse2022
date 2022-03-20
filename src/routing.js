import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home/Home';
import Menu from './Menu/menu';
import Drinks from './Menu/Drinks/Drinks';
import Food from './Menu/Food/Food';
import delivers from './starbucksDelivers/deliver';
import menuDisplay from './Menu/menuDisplay';
import coffeeHouse from './coffeeHouse/coffeeHouse';
import Responsibility from './Responsibility/Responsibility';


const Router = () =>{
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path="/" component={Home}/>
            
            <Route path="/menu" component={Menu}/>
            <Route exact path="/drinks" component={Drinks}/>
            <Route path="/coffeehouse" component={coffeeHouse}/>
            <Route path="/responsibility" component={Responsibility}/>
            <Route  path="/starbucksdelivers" component={delivers}/>
            <Route  path="/drink/:category_id" component={menuDisplay}/>
            <Route path="/food" component={Food}/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Router