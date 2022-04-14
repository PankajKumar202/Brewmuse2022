import React, { Fragment, Component } from "react";
import { Link,withRouter } from "react-router-dom";
import Header from "../../Header";
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
                    
                        <Link to={`/coffeedata/${item.opt_id}`} key={item.opt_id}>
                        <img src={item.img_url} alt="items" style={{display:"inline-block"}}/>
                        <span>{item.name}</span>
                    </Link>
                    
                 
                    
                )
            })
        }

    }
    render() {
        return (
            <Fragment>
                <Header />
                <h1>3. How intense do you like your coffee?</h1>
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