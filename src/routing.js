import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import Footer from './Footer';
import Home from './Home/home';
import Menu from './Menu/menu';
import Drinks from './Menu/Drinks/Drinks';
import Food from './Menu/Food/Food';
import delivers from './starbucksDelivers/deliver';
import menuDisplay from './Menu/menuDisplay';
import coffeeHouse from './coffeeHouse/coffeeHouse';
import Responsibility from './Responsibility/Responsibility';
import Store from './store/store';
import Rewards from './rewards/rewards';
import seasonGifting from './SeasonGifting/seasonGifting';


const Router = () =>{
    return(
        <BrowserRouter>
          
            <Route exact path="/" component={Home}/>
            
            <Route path="/menu" component={Menu}/>
            <Route exact path="/drinks" component={Drinks}/>
            <Route path="/food" component={Food}/>
            <Route path="/coffeehouse" component={coffeeHouse}/>
            <Route path="/responsibility" component={Responsibility}/>
            <Route  path="/starbucksdelivers" component={delivers}/>
            <Route  path="/drinksMenu/:categoryID" component={menuDisplay}/>
            <Route  path="/FoodMenu/:categoryID" component={menuDisplay}/>
            
            <Route path="/store" component={Store}/>
            <Route path="/rewards" component={Rewards}/>
            <Route path="/seasonGifting" component={seasonGifting}/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Router