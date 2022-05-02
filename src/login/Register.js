import React,{Component, Fragment} from "react";
import {Link} from "react-router-dom";
import Header from "../Header";
const registerUrl="https://brewauth.herokuapp.com/api/auth/register";
class Register extends Component{
constructor(props){
    super(props);
    this.state={
        name:"",
        phone:"",
        email:"",
        password:""
    }

}
registerEvent=(event)=>{
    
    // sessionStorage.setItem('Phone',this.state.phone)
    console.log(event.target.value)
this.setState({[event.target.name]:event.target.value})
}
handleSubmit=()=>{
    fetch(registerUrl,{
        method:'POST',
        headers:{
            'accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(this.state)
        

    })
    .then(this.props.history.push('/'));
}
render(){
    console.log("name>>",this.state.name);
    console.log("Inside brewprops>>>",this.props)
    return(
        <Fragment>
            <Header/>
            <div className="container">
                <br/>
                <div className="card ">
                    <div className="card-heading " style={{height:'50px',fontSize:'20px',backgroundColor:'#006341',color:'white',textAlign:"center"}}>
                        Register Form
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label form="form-control" for="name">Name</label>
                                    <input className="form-control" id="name" name="name" type="text" onChange={this.registerEvent} required/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label form="form-control" for="phone">Phone</label>
                                    <input className="form-control" id="phone" name="phone" type="number" onChange={this.registerEvent}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label form="form-control" for="email">Email</label>
                                    <input className="form-control" id="email" type="email"
                                    name="email" onChange={this.registerEvent} />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label form="form-control" for="password">Password</label>
                                    <input class="form-control" id="password" type="password"
                                    name="password"  onChange={this.registerEvent}/>
                                </div>
                            </div>
                        </div>
                        <center><button className="btn btn-success" style={{marginTop:'1%',marginLeft:"43%",width:"10%"}} onClick={this.handleSubmit} >Register</button></center><br/>
                        
                    </div>
                    <center><Link style={{textDecoration:"none"}}><h5 style={{color:"#006341",marginTop:"2%"}}>Allready Have An Account? LogIn</h5></Link></center>
                </div>  
            </div>
        </Fragment>
    )
}
}
export default Register;