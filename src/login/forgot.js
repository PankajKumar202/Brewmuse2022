import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
// import './login.css'
const forgotUrl = "https://brewauth.herokuapp.com/api/auth/forgot"
class ForgotPassword extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
            msg:""


        }
    }
    forgotEvent = (event) => {
        if (event) {
            this.setState({
                [event.target.name]: event.target.value
            })
            console.log(`${[event.target.name]}:${event.target.value}`)
            console.log(`${[typeof (event.target.name)]}:${typeof (event.target.value)}`)
        }


    }
    handleForgot = () => {
        console.log("Pasword", this.state.password)
        fetch(forgotUrl, {
            method: "PUT",
            headers: {
                "accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        })
        .then((res)=>res.json())
        .then((data)=>{
           try {
               this.setState({
                   msg:data.token
               })
               console.log("Token",data)
               
           } catch (error) {
               console.log("error",error)
           }
        })
    }
    render() {

        return (
            <Fragment>
                <Header />
                {/* <center><h1>Don't Worry Not EveryOne Have Eidetic memory </h1> */}
                {/* <form>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label form="form-control" for="email">Email</label>
                            <input className="form-control" id="email" type="email"
                                name="email" onChange={this.forgotEvent} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label form="form-control" for="password" >New Password</label>
                            <input className="form-control" id="password" type="password"
                                name="newPassword" onChange={this.forgotEvent} />
                        </div>
                    </div>
                    {/* <h3 style={{ color: 'red' }}>{this.state.msg}</h3> */}

                {/* </form> */}
                <div className="container" style={{ paddingBottom: '2%' }}>
                    <br />
                    <div className="card" id="registerCard">
                        <div className="card-heading " style={{ height: '69px', fontSize: '20px', backgroundColor: '#006341', color: 'white', textAlign: "center" }}>
                            Don't Worry Not EveryOne Have Eidetic memory<br/>Forgot Password
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label form="form-control" for="email">Email</label>
                                        <input className="form-control" id="email" type="email"
                                            name="email" onChange={this.forgotEvent} />
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label form="form-control" for="password" >New Password</label>
                                        <input className="form-control" id="password" type="password"
                                            name="password" onChange={this.forgotEvent} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <center><h5 style={{color:"#006341"}}>{this.state.msg}</h5></center>
                        <center><button className="btn" id="loginBtn" onClick={this.handleForgot} style={{"backgroundColor":"#006341","color":"#fff"}}>Submit</button></center>
                    </div>
                </div>


            </Fragment>
        )
    }
}
export default ForgotPassword;