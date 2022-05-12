import React, { Component, Fragment } from "react";
import "./store.css";
class StoreSearch extends Component {
    constructor() {
        super();
        this.state = {
            keywords: ""
        }
    }
    storeChange = (event) => {
        console.log("Inside Store handleChange>>", event.target.value);
        this.setState({ keywords: event.target.value ? event.target.value : 'Search Stores' });
        this.props.storeInput(event.target.value)

    }
    render() {
        return (
            <Fragment>
                <input onChange={this.storeChange} id='searchStore' type="search" name="q" placeholder="Search store..." value={'Delhi'} />
                <br />
            </Fragment>

        )
    }
}
export default StoreSearch;


