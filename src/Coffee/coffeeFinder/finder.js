import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";

import Header from "../../Header";
import "./finder.css"
const finderUrl = "https://brewmusepk.herokuapp.com/coffeefinder"
class Finder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            finderData: ""
        }
    }
    display=(data)=>{
        if(data){
            return data.map((item)=>{
                return(
                    
                        <Link to={'/coffeeCat/2'} className="finderLink">
                        <img src={item.img_url} alt="items" style={{display:"inline-block"}} className="finder1"/>&nbsp;&nbsp;&nbsp;
                        <span className="finderSpan">{item.name}</span>
                         </Link>
                )
            })
        }

    }
    render() {
        return (
            <Fragment>
                <Header />
                <h1 className="finderSpan">1. What flavor are you most drawn to?</h1>
                <div >
                {this.display(this.state.finderData)}
                </div>
            </Fragment>
        )
    }
    componentDidMount() {
        let finderID = 1;
        console.log("finderID", finderID)
        fetch(`${finderUrl}/${finderID}`, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ finderData: data })
            })

    }
}
export default Finder;