import React,{Component} from "react";
import Header from "../Header";

const url="https://brewmusepk.herokuapp.com/menu"

class MenuDisplay extends Component{
    constructor(props){
        super(props);

        this.state={
            categoryData:''
        }
    }

    renderData = () =>{
        console.log("Inside renderData>>>>",this.props)
        if(this.state.categoryData){
            if(this.state.categoryData.length>0){
                return this.state.categoryData.map((item)=>{
                     // sessionStorage.setItem('categoryId', item.id)
                    return(
                        
                        <div className="row" >
                            <div className="col-md-6" >
                                <img src={item.image_url} alt={item.name}/>
                                <h4>{item.name}</h4>
                            </div>
                        </div>
                    )
                })
            }
        }
        else{
            <h2>No Data Found</h2>
        }
    }

    render(){
        return(
            <div id="display">
                <Header/>
               {this.renderData()}
            </div>
        )
    }


    componentDidMount(){
        let category_id=this.props.match.params.categoryID;
        sessionStorage.setItem('categoryID',category_id)
        fetch(`${url}/${category_id}`,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({categoryData:data})
            console.log(data)
        })
    }
}

export default MenuDisplay