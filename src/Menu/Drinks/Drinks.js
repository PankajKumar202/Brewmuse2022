import React,{Component,Fragment} from "react";
import { Link } from "react-router-dom";
import './drinks.css';
import Header from '../../Header'
import LinksDisplay from "../linksDisplay";

const url="https://brewmuse.herokuapp.com/category?type=Drinks"


class Drinks extends Component{
    constructor(props){
        console.log(props);
        super(props);

        this.state={
            drinks:''
        };

    }

    render(){
        return(
            <Fragment>
                <Header/>

                <div className="container" id="mainMenu">
                    <h2>Drinks</h2>
                    <img src="https://i.ibb.co/XypF2Dn/Drinks.jpg" alt="Drinks"/>
                    <p className="content">That’s why our coffee buyers travel the world, carefully selecting the finest beans. That’s why our master roasters stand watch over each batch, bringing each bean to its peak of flavour. And that’s why our friendly baristas handcraft each beverage to your order. We want you to discover your perfect, personal drink. Hey, when you feel as passionately about coffee as we do (and you do), it’s what the bean deserves.</p>

                    <LinksDisplay typeData={this.state.drinks}/>
                    

                    <div id="drinksDiv3">
                        <span><Link to="/Menu" id="menu10">Menu .</Link></span>
                        <span>Drinks</span>
                    </div>
                </div>
            </Fragment>
        )
    }

    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({drinks:data})
            console.log("Drinks Data>>", data)
        })
    }
    
}

export default Drinks