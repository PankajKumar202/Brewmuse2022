import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
const modalUrl = "https://brewmusepk.herokuapp.com/menuItem";
class ModalDisplay extends Component {
    constructor() {
        super()
        this.state = {
            modalData: ""
        }
    }
    size = () => {
        if (this.state.modalData.size) {
            const numbers = this.state.modalData.size;
            return (

                this.state.modalData.size.map((item, numbers) => {
                    // console.log("This is ",item[index])
                    return (
                        // <h1>HELLO</h1>
                        <Fragment>
                            < div class="form-check" key={numbers.toString()}>
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label class="form-check-label" for="flexRadioDefault1">

                                    <span>{item[numbers].name}</span>
                                    <span>{item[numbers].Additional_Price}</span>
                                </label>
                            </div>
                        </Fragment>
                    )

                })
            )



        }
    }
    addOn = (data) => {
        if (data) {
            return data.map((item) => {
                console.log("length>>>", item.length)
                let size = Object.keys(item).length;
                console.log("Size>>>", size)
                if (size > 11) {
                    return (
                        <Fragment key={item._id}>


                            <h1>Customize : <b>{item.name}</b></h1>
                            <h1>Size</h1>
                            <div class="form-check" key={numbers.toString()}>
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label class="form-check-label" for="flexRadioDefault1">

                                    <span>{item.size[0].name}</span>
                                    <span>{item.size[0].Additional_Price}</span>
                                </label>
                            </div>


                            {/* <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Default checked radio
                                </label>
                            </div> */}


                        </Fragment>

                    )
                } else {

                    this.props.history.push(`/starbucksdelivers`)
                }

            })
        }

    }
    render() {
        console.log("Menu data modal>>>>", this.state.modalData)
        return (
            <Fragment>
                <Header />
                {this.addOn(this.state.modalData)}
            </Fragment>
        )
    }
    componentDidMount() {
        let uniqueID = this.props.match.params.itemID;
        console.log(uniqueID);
        fetch(`${modalUrl}/${uniqueID}`, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ modalData: data })
            })

    }

}
export default ModalDisplay;