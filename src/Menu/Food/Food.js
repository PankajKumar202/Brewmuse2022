import React,{Fragment,Component} from "react";
import { Link } from "react-router-dom";
import './food.css';
import Header from '../../Header'
import LinksDisplay from "../linksDisplay";

const url="https://brewmuse.herokuapp.com/category?type=Food"

class Food extends Component{
    constructor(props){
        console.log(props);
        super(props);

        this.state={
            food:''
        };
    }


    render(){
        return(
            <Fragment>
                <Header/>
                <div className="container" id="mainMenu">
                    <h2>Food</h2>
                    <h3>We're passionate about coffee and great food to enjoy it with.</h3>
                    <img src="https://i.ibb.co/hd3kk7r/Food.jpg" alt="Food"/>
                    <p className="content">That's why we are constantly developing a unique, delicious selection of freshly prepared options exclusively for you. All of our foods are handcrafted from the highest quality. For India, we have created a delightful mix of premium coffeehouse favourites-muffins, cookies and croissants–along with custom menu items with Unique Indian flavours.</p>
                    <LinksDisplay typeData={this.state.food}/>
                    <div id="foodDiv3">
                        <span><Link to="/Menu" id="menu7">Menu .</Link></span>
                        <span>Foods</span>
                    </div>
                </div>
            </Fragment>
        )
    }

    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({food:data})
            console.log("food Data>>>", data)
        })
    }
}

export default Food