import React,{Component,Fragment} from "react";
import axios from 'axios';

const url = "https://brewmusepk.herokuapp.com/filter";

class TypeFilter extends Component{

    filterType = (event) => {
        let Type = (event.target.value);
        let TypeUrl = "";
        if(Type){
            TypeUrl = `${url}?type=${Type}`;
        }
        axios.get(TypeUrl)
        .then((res)=>{
            this.props.dataPerType(res.data)
        })
    }

    render(){
        return(
            <Fragment>
                <div id="TypeFilter" onChange={this.filterType}>
                    <h2 className="filterheading">Type</h2>
                    <label className="radio">
                        <input type="radio" id="type" name="type" value="Vegetarian"/> Vegetarian
                    </label>
                    <br/>
                    <label className="radio">
                        <input type="radio" id="type" name="type" value="Non-Vegetarian"/> Non-Vegetarian
                    </label>
                    <br/>
                </div>

            </Fragment>
        )
    }

}
export default TypeFilter