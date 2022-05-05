import React, { Component, Fragment } from "react";
import axios from 'axios';

const url = "https://brewmuse.herokuapp.com/item";

class CategoryFilter extends Component {

    filterCategory = (event) => {
        let categoryId = event.target.value;
        let categoryUrl = "";
        if (categoryId) {
            categoryUrl = `${url}/${categoryId}`
        }
        axios.get(categoryUrl)
            .then((res) => {
                this.props.dataPerCategory(res.data)
            })
    }

    render() {
        return (
            <Fragment>
              
                    <center style={{ color: '#006341', }}>Cuisine Filter</center>
                    <div className="coffee" onChange={this.filterCategory}>
                        <h2 className="filterheading">Coffee</h2>
                        <label className="radio">
                            <input type="radio" value="" name="cuisine" /> All
                        </label>
                        <br />
                        <label className="radio">
                            <input type="radio" value="1" name="cuisine" /> Featured Beverages
                        </label>
                        <br />
                        <label className="radio">
                            <input type="radio" value="2" name="cuisine" /> Freshly Brewed Coffee
                        </label>
                        <br />
                        <label className="radio">
                            <input type="radio" value="3" name="cuisine" /> Crème Frappuccino®
                        </label>
                        <br />
                        <label className="radio">
                            <input type="radio" value="4" name="cuisine" /> Cold Brew
                        </label>
                        <br />
                        <label className="radio">
                            <input type="radio" value="5" name="cuisine" /> Iced Shaken
                        </label>
                        <br />
                        <label className="radio">
                            <input type="radio" value="6" name="cuisine" /> Espresso
                        </label>
                        <br />
                        <label className="radio">
                            <input type="radio" value="7" name="cuisine" /> Coffee Frappuccino®
                        </label>
                        <br />
                        <label className="radio">
                            <input type="radio" value="8" name="cuisine" /> Other Beverages
                        </label>
                        <br />
                        <label className="radio">
                            <input type="radio" value="9" name="cuisine" /> Teavana® Tea
                        </label>

                    </div>

                    <div className="food" onChange={this.filterCategory}>
                        <h2 className="filterheading">Food</h2>
                        <label className="radio">
                            <input className="filterInput" type="radio" value="10" name="cuisine" /> Featured Food
                        </label>
                        <br />
                        <label className="radio">
                            <input className="filterInput" type="radio" value="11" name="cuisine" /> Savory Bakery
                        </label>
                        <br />
                        <label className="radio">
                            <input className="filterInput" type="radio" value="12" name="cuisine" /> Salads & Muesli
                        </label>
                        <br />
                        <label className="radio">
                            <input className="filterInput" type="radio" value="13" name="cuisine" /> Sweet Bakery
                        </label>
                        <br />
                        <label className="radio">
                            <input className="filterInput" type="radio" value="14" name="cuisine" /> Sandwiches & Wraps
                        </label>
                        <br />
                        <label className="radio">
                            <input className="filterInput" type="radio" value="15" name="cuisine" /> Desserts
                        </label>
                        <br />

                    </div>
               
            </Fragment>
        )
    }

}
export default CategoryFilter;