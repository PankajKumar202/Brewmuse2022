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
                <input onChange={this.storeChange} id='searchStore' type="search" name="keywords" placeholder="Search store..." value={sessionStorage.getItem('city')} />
                <br />
            </Fragment>

        )
    }
}
export default StoreSearch;


