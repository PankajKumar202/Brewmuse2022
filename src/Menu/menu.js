import React,{Component,Fragment} from "react";
import {Link} from 'react-router-dom';
import './menu.css'
import Header from '../Header'

const url = "https://brewmuse.herokuapp.com/category"

class Menu extends Component{

    constructor(){
        super();

        this.state={
            categoryType:""
        }
    }


    render(){
        return(
            <Fragment>
                <Header/>
                <div className="container" id="mainMenu">
                    <h4>Menu</h4>
                    <h4>Delicious, handcrafted beverages and great-tasting food. The secret to making life better.
                    </h4>
                    <img src="https://i.ibb.co/VjDVMHp/menu-page.jpg" alt="Image"/>
                    <p className="content">It’s true. The perfect cup of coffee and a wholesome, delicious snack can make your day. So we make sure everything you choose is of the finest quality. Because really, isn’t that how life should be?</p>

                    <div id="drinks">
                        <Link to={"/Drinks"} menudata={this.state.categoryType}><h2 className="menuHeading">Drinks</h2></Link>
                        <p className="content">Amazing coffees from around the world. Handcrafted beverages to discover and enjoy. We love bringing you these things.</p>
                        <Link to="Drinks"><h6 className="menuSubHeading">Starbucks Drinks</h6></Link>
                    </div>

                    <div id="food">
                        <Link to={"/food"}><h2 className="menuHeading" id="foodHeading">Food</h2></Link>
                        <p className="content">Our pastries and sandwiches are made with high-quality, simple ingredients. So all the goodness you taste is real food, simply delicious.</p>
                        <Link to="Food"><h6 className="menuSubHeading" id="foodSubHeading">Starbucks Food</h6></Link>
                    </div>
                    <div id="menu">Menu</div>
                </div>
            </Fragment>
        )
    }

    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({categoryType:data})
            console.log('Type data>>>>', data)
        })
    }
}

export default Menu