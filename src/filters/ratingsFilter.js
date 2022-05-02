import React,{Component,Fragment} from "react";
import axios from 'axios';

const url = "https://brewmuse.herokuapp.com/filter";

class RatingsFilter extends Component{

    filterRatings = (event) => {
        let Ratings = (event.target.value);
        let RatingsUrl = "";
        if(Ratings < 4){
            RatingsUrl = `${url}?brate=${Ratings}`;
        }
        else{
            RatingsUrl = `${url}?arate=${Ratings}`;
        }
        axios.get(RatingsUrl)
        .then((res)=>{
            this.props.dataPerRatings(res.data)
        })
    }

    render(){
        return(
            <Fragment>
                <div id="RatingsFilter" onChange={this.filterRatings}>
                    <h2 className="filterheading">Ratings</h2>
                    <label className="radio">
                        <input type="radio" id="ratings" name="ratings" value="3"/> Below 4 Ratings
                    </label>
                    <br/>
                    <label className="radio">
                        <input type="radio" id="ratings" name="ratings" value="4"/> Above 4 Ratings
                    </label>
                    <br/>
 
                </div>

            </Fragment>
        )
    }

}
export default RatingsFilter