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
import Gift from './rewards/giftCard/giftCard';
import ModalDisplay from './starbucksDelivers/modalDisplay';
import Coffee from './Coffee/Coffee';
import seasonGifting from './SeasonGifting/seasonGifting';
import AboutUs from './AboutUs/about';
import Careers from './Careers/Careers';
import Finder from './Coffee/coffeeFinder/finder';
import Finder1 from './Coffee/coffeeFinder/finder1';
import Finder2 from './Coffee/coffeeFinder/finder2';
import FinderData from './Coffee/coffeeFinder/finderData';

const Router = () =>{
    return(
        <BrowserRouter>
       
            <Route exact path="/" component={Home}/>
            
            <Route path="/menu" component={Menu}/>
            <Route exact path="/drinks" component={Drinks}/>
            <Route path="/food" component={Food}/>
            <Route path="/coffeehouse" component={coffeeHouse}/>
            <Route path="/responsibility" component={Responsibility}/>
            <Route exact path="/starbucksdelivers" component={delivers}/>
            <Route  path="/starbucksdelivers/:itemID" component={ModalDisplay}/>
            {/* <Route  path="/starbucksdelivers/:itemID" component={delivers}/> */}
            <Route  path="/drinksMenu/:categoryID" component={menuDisplay}/>
            <Route  path="/FoodMenu/:categoryID" component={menuDisplay}/>
            <Route path="/store" component={Store}/>
            <Route path="/rewards" component={Rewards}/>
            <Route exact path="/giftCards" component={Gift}/>
            <Route exact path="/giftCards/:giftID" component={Gift}/>
            <Route exact path="/coffee" component={Coffee}/>
            <Route path="/coffeeCat/1" component={Finder}/>
            <Route path="/coffeeCat/2" component={Finder1}/>
            <Route path="/coffeeCat/3" component={Finder2}/>
            <Route path="/coffeeData/:optID" component={FinderData}/>
            <Route path="/seasonGifting" component={seasonGifting}/>
            <Route path="/aboutUs" component={AboutUs}/>
            <Route path="/careers" component={Careers}/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Router