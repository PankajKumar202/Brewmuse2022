import React from "react";
import {Link} from 'react-router-dom'

const url="https://brewmuse.herokuapp.com/item/"


const menuDisplay = (props) =>{

    const renderData = ({categoryData}) =>{
        if(categoryData){
            if(categoryData.length>0){
                return categoryData.map((item)=>{
                    return(
                        <div className="links">
                            <div className="row">
                                <div className="col-md-6">
                                    <Link to={item.category} key={item.id}>

                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        }
    }


    return(
        <div id="linksDiv">
            {renderData(props)}
        </div>
    )
}

export default menuDisplay