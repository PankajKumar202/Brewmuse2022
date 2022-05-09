import React, { Fragment, Component } from "react";
import { Link,withRouter } from "react-router-dom";
import Header from "../../Header";
import "./finder.css"
const finderUrl = "https://brewmusepk.herokuapp.com/coffeefinder"

class Finder2 extends Component {
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
                    
                        <Link to={`/coffeedata/${item.opt_id}`} key={item.opt_id} className="finderLink">
                        <img src={item.img_url} alt="items" style={{display:"inline-block"}} className="finder1"/>
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
                <h1 className="finderSpan">3. How intense do you like your coffee?</h1>
                <div >
                {this.display(this.state.finderData)}
                </div>
            </Fragment>
        )
    }
    componentDidMount() {
        let finderID = 3;
      
        console.log("finderID", finderID)
        fetch(`${finderUrl}/${finderID}`, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ finderData: data})
            })

    }
}
export default withRouter(Finder2);