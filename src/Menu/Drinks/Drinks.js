import React,{Component} from "react";
import { Link } from "react-router-dom";
// import axios from 'axios';
import './drinks.css';
import Drinksdisplay from "./Drinksdisplay";

const MenuUrl="https://brewmusepk.herokuapp.com/category/";


class Drinks extends Component{
    constructor(){
        // console.log(props);
        super();

        this.state={
            category_id:''
        };

    }

    render(){
        console.log(">>>>>Inside render drinks js",this.state.category_id)
        return(

            <div className="container" id="mainMenu">
                <h2>Drinks</h2>
                <img src="https://i.ibb.co/XypF2Dn/Drinks.jpg" alt="Drinks"/>
                <p className="content">That’s why our coffee buyers travel the world, carefully selecting the finest beans. That’s why our master roasters stand watch over each batch, bringing each bean to its peak of flavour. And that’s why our friendly baristas handcraft each beverage to your order. We want you to discover your perfect, personal drink. Hey, when you feel as passionately about coffee as we do (and you do), it’s what the bean deserves.</p>



            {/* //     <div id="links2">
            //         <Link to="/espresso" category_id={this.setState.category_id=7}><h2 id="menu6">Espresso</h2></Link>

            //         <Link to="/coffee_frappuccino" category_id={this.setState.category_id=8}><h2 id="menu7">Coffee Frappuccino®</h2></Link>

            //         <Link to="/other_beverages" category_id={this.setState.category_id=9}><h2 id="menu8">Other Beverages</h2></Link>
                    
            //         <Link to="/teavana_tea" category_id={this.setState.category_id=10}><h2 id="menu9">Teavana® Tea</h2></Link>
            //     </div> */} 
            <Drinksdisplay drinksMenu={this.state.category_id}/>  
               <div id="div3">
                    <span><Link to="/Menu" id="menu10">Menu .</Link></span>
                    <span>Drinks</span>
                </div>
         </div>
        )
    }

    componentDidMount(){
        let categoryid= this.props.match.params.categoryid;
        fetch(`${MenuUrl}/${categoryid}`,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({category_id:data})
        })
    }
    
}

export default Drinks