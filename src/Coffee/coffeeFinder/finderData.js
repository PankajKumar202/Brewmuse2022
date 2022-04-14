import React, { Fragment, Component } from "react";
import Header from "../../Header";

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
                        <img src={item.img_url} alt="data" />
                        <span>Name : {item.name}</span>
                        <span>Roast : {item.roast}</span>
                        <span>Format : {item.format}</span>
                        <span>Flavoured : {item.flavoured}</span>
                        <span>Caffeine : {item.caffeine}</span>
                        <span>Taste : {item.taste}</span>
                        <div class="btn-group dropstart">
                            <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropstart
                            </button>
                            <span class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                {item.desc}
                            </span>
                        </div>

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