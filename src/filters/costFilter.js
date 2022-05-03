import React,{Component,Fragment} from "react";
import axios from 'axios';

const url = "https://brewmusepk.herokuapp.com/filter";

class CostFilter extends Component{

    filterCost = (event) => {
        let cost = (event.target.value).split('-');
        let bprice= cost[0];
        let aprice = cost[1];
        let costUrl = "";
        if(cost){
            costUrl = `${url}?brpice=${bprice}&aprice=${aprice}`;
        }
        axios.get(costUrl)
        .then((res)=>{
            this.props.dataPerCost(res.data)
        })
    }

    render(){
        return(
            <Fragment>
                <div className="cost" onChange={this.filterCost}>
                    <h2 className="filterheading">Cost</h2>
                    <label className="radio">
                        <input type="radio" id="price" name="price" value="99-499"/> Below Rs. 500
                    </label>
                    <br/>
                    <label className="radio">
                        <input type="radio" id="price" name="price" value="500-999"/> ₹500 - ₹999
                    </label>
                    <br/>
                    <label className="radio">
                        <input type="radio" id="price" name="price" value="1000-1499"/> ₹1000 - ₹1499
                    </label>
                    <br/>
 
                </div>

            </Fragment>
        )
    }

}
export default CostFilter