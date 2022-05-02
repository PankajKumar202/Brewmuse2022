import React, { Component, Fragment } from "react";

import Header from "../Header";
import { Link } from "react-router-dom";
const loginUrl="https://brewauth.herokuapp.com/api/auth/login";
class login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            message: ""
        }
    }
  loginEvent=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    handleLogin=()=>{
        fetch(loginUrl,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log("Inside login Data>>>>",data);
            if(data.auth===false){
                this.setState({message:data.token})
            }else{
                sessionStorage.setItem('token',data.token)
                sessionStorage.setItem('email',this.state.email)
                this.props.history.push('/')
            }
        })
    }
    render() {
        return (
            <Fragment>
                <Header />
                <div className="loginContainer">
                    <br />
                    <div class="card-body">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label form="form-control" for="email" >Email</label>
                                    <input className="form-control" id="email" type="email"
                                        name="email" onChange={this.loginEvent}/>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label form="form-control" for="password" >Password</label>
                                    <input class="form-control" id="password" type="password"
                                        name="password"  onChange={this.loginEvent}/>
                                </div>
                            </div>
                        </div>
                        <h3 style={{ color: 'red' }}>{this.state.message}</h3>
                        <center><button className="btn btn-danger" style={{ marginTop: '2%' }} onClick={this.handleLogin}>Login</button></center>
                        <center><Link to={"/register"} style={{textDecoration:"none"}}><h5 style={{color:"#006341"}}>Don't have account? SignUp</h5></Link></center>
                    </div>
                </div>
           
            </Fragment >
        )
    }
}
export default login;