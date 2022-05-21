import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";

import Header from "../../Header";
const finderUrl = "https://brewmusepk.herokuapp.com/coffeefinder"
class Finder1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            finderData: ""
        }
    }
    display1=(data)=>{
        if(data){
            return data.map((item)=>{
                return(
                    <div id="coffeeBox">
                        <Link to={'/coffeeCat/3'} className="coffeeLink">
                            <img src={item.img_url} alt="items" style={{display:"inline-block"}}/>
                            <span className="coffeeSpan">{item.name}</span>
                        </Link>
                    </div>
                )
            })
        }

    }
    render() {
        return (
            <Fragment>
                <Header />
                <h1>2. What sensation do you like on your palate?</h1>
                <div >
                {this.display1(this.state.finderData)}
                </div>
            </Fragment>
        )
    }
    componentDidMount() {
        let finderID = 2;
        console.log("finderID", finderID)
        fetch(`${finderUrl}/${finderID}`, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ finderData: data })
            })

    }
}
export default Finder1;