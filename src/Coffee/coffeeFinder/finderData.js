import React, { Fragment, Component } from "react";
import Header from "../../Header";
import "./finder.css"
const finderData = "https://brewmusepk.herokuapp.com/ourcoffee";
class FinderData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            finderData: ""
        }
    }
    Data(data) {
        if (data) {
            return data.map((item) => {
                return (
                    <div id="dataBox" key={item._id}>
                        <br/><img src={item.img_url} alt="data" />
                        <h3 id="finderName"><b>Name :</b> {item.name}</h3><br/>
                        <h3><b>Roast :</b> {item.roast}</h3><br/>
                        <h3><b>Format :</b> {item.format}</h3><br/>
                        <h3><b>Flavoured :</b> {item.flavoured}</h3><br/>
                        <h3><b>Caffeine :</b> {item.caffeine}</h3><br/>
                        <h3><b>Taste :</b> {item.taste}</h3><br/>
                       
                            <p>
                                <b>description :</b>{item.desc}
                            </p>
                    

                    </div>
                )
            })
        }
    }
    render() {
        console.log("findeRdAta", this.state.finderData)
        return (
            <Fragment>
                <Header />
                <h1> Your data</h1>
                {this.Data(this.state.finderData)}
            </Fragment>
        )
    }
    componentDidMount() {
        let optID = this.props.match.params.optID;
        console.log("OptionId>>>", optID)
        fetch(`${finderData}/${optID}`, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ finderData: data })
            })
    }
}
export default FinderData;