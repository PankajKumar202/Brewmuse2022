import React, { Component } from "react";
const paginationUrl="https://brewmusepk.herokuapp.com/filter"
// ?&sort=-1&skip=2&limit=2
class Pagination extends Component{
    constructor(){
        super();
        this.state={
            skip:0
        }
    }
    paginationEvent=(event)=>{
        let sort=-1;
        let limit=10;
        let skip=event.target.value;
        fetch(`${paginationUrl}?sort=${sort}&`)

    }
    skipState=()=>{
        let value=this.state.skip;
        let limit=10;


    }
    render(){
        return(
            <nav aria-label="...">
                        <ul class="pagination">
                            <li class="page-item disabled">
                                <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                            </li>
                            <li class="page-item"><a class="page-link" href="#" name="skip"  value="0" onClick={this.pagination}>1</a></li>
                            <li class="page-item active" aria-current="page">
                                <a class="page-link" href="#" name="skip"  value="10" onClick={this.pagination}>2</a>
                            </li>
                            <li class="page-item"><a class="page-link" href="#" name="skip"  value="20" onClick={this.pagination}>3</a></li>
                            <li class="page-item">
                                <a class="page-link" href="#">Next</a>
                            </li>
                        </ul>
                    </nav>
        )
    }
}