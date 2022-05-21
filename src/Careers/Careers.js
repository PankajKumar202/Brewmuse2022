import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './careers.css';
import JobsDisplay from './JobsDisplay'


class Careers extends Component {
    constructor() {
        super()

        this.state = {
            cupName: '',
        }
    }

    handleChange = (event) => {
        sessionStorage.setItem('cupName', event.target.value)
    }

    handleClick = () => {
        let cupVal = sessionStorage.getItem('cupName')+" :)";
        this.setState({ cupName: cupVal ? cupVal : '' })
    }

    render() {
        if (sessionStorage.getItem('loginStatus') === 'logIn') {
            return (
                <Fragment>
                    <div id="headerCareers">
                        <Link to="/"><img src="https://i.ibb.co/wgjDMqD/logo.png" alt="logo" id="careersLogo"/></Link>
                       
                    </div>
    
                    <div id="careersDiv">
                        <div id="careersDiv1">
                            <div id="nameDiv">
                                <h1 id="nameTag">Hi there!<br />What's your name?</h1>
                                <input onChange={this.handleChange} id="nameInput" name="name" type="text" maxLength="15" />
                                <button className="btn btn-success" id="enterBtn" type="submit" onClick={this.handleClick}>Go</button>
                            </div>
                            <div id="nameVisible">{this.state.cupName}</div>
                        </div>
                    </div>
    
                    <JobsDisplay />
    
                    <div id="component3Job">
                        <div id="jobContent">
                            <h2 style={{fontStyle:'italic',fontFamily:'cursive',color:'white', marginTop:'3%'}}>Expect More Than Coffee</h2>
                            <p id="CareersPara">
                            From the beginning, Starbucks set out to be a different kind of company. One that not only celebrated coffee but also connection. Get to know us and you’ll see: we are so much more than what we brew. We call our employees partners because we are all partners in shared success. We make sure everything we do is through the lens of humanity—from our commitment to the highest-quality coffee in the world, to the way we engage with our customers and communities to do business responsibly. 
                            </p>
                        </div>
                        <img src="https://rmkcdn.successfactors.com/98fec2eb/d04f886c-17d4-436b-890d-3.jpg" alt="career1" id="img1Job"/>
                        <img src="https://rmkcdn.successfactors.com/98fec2eb/f9b34b19-3ce5-44fd-87dc-b.jpg" alt="career2" id="img2Job"/>
                    </div>
    
                    <div id="component4Job">
    
                        <br/>
                        <h2 id="comp4heading">Working at Starbucks</h2>
    
    
                        <div id="cardsCareer">
    
                            <div className="card">
                                <img src="https://rmkcdn.successfactors.com/98fec2eb/de29dbad-2147-45af-9ed5-a.jpg" className="card-img-top" alt="Coffee"/>
                                <div className="card-body">
                                    <h5 className="card-title">Our Coffee</h5>
                                    <p className="card-text">Since 1971, it always has been and will always be about quality. Our passion for coffee is rivaled only by our love of sharing it.</p>
                                </div>
                            </div>
                            &nbsp; &nbsp; &nbsp;
    
                            <div className="card">
                                <img src="https://rmkcdn.successfactors.com/98fec2eb/217de237-18a4-443a-8ccc-9.jpg" className="card-img-top" alt="Culture"/>
                                <div className="card-body">
                                    <h5 className="card-title">Our Culture</h5>
                                    <p className="card-text">We are committed to upholding a culture where diversity is valued, respected and celebrated.</p>
                                </div>
                            </div>
                            &nbsp; &nbsp; &nbsp;
    
                            <div className="card">
                                <img src="https://rmkcdn.successfactors.com/98fec2eb/5550d259-f25b-4e21-bb04-2.jpg" className="card-img-top" alt="Partners"/>
                                <div className="card-body">
                                    <h5 className="card-title">Our Partners</h5>
                                    <p className="card-text">We love Starbucks and we're pretty sure you will too! See what our partners have to say….</p>
                                </div>
                            </div>
                            
                        </div>
    
                    </div>
                </Fragment>
            )

        }else{
            return (
                <Fragment>
                    <div id="headerCareers">
                        <Link to="/"><img src="https://i.ibb.co/wgjDMqD/logo.png" alt="logo" id="careersLogo"/></Link>
                        <div id="headerCareersBtn">
                            <Link to={"/login"} className="btn btn-outline-success">Login</Link>
                            &nbsp;
                            <Link to={"/register"} className="btn btn-outline-success">Register</Link>
                        </div>
                    </div>
    
                    <div id="careersDiv">
                        <div id="careersDiv1">
                            <div id="nameDiv">
                                <h1 id="nameTag">Hi there!<br />What's your name?</h1>
                                <input onChange={this.handleChange} id="nameInput" name="name" type="text" maxLength="15" />
                                <button className="btn btn-success" id="enterBtn" type="submit" onClick={this.handleClick}>Go</button>
                            </div>
                            <div id="nameVisible">{this.state.cupName}</div>
                        </div>
                    </div>
    
                    <JobsDisplay />
    
                    <div id="component3Job">
                        <div id="jobContent">
                            <h2 style={{fontStyle:'italic',fontFamily:'cursive',color:'white', marginTop:'3%'}}>Expect More Than Coffee</h2>
                            <p id="CareersPara">
                            From the beginning, Starbucks set out to be a different kind of company. One that not only celebrated coffee but also connection. Get to know us and you’ll see: we are so much more than what we brew. We call our employees partners because we are all partners in shared success. We make sure everything we do is through the lens of humanity—from our commitment to the highest-quality coffee in the world, to the way we engage with our customers and communities to do business responsibly. 
                            </p>
                        </div>
                        <img src="https://rmkcdn.successfactors.com/98fec2eb/d04f886c-17d4-436b-890d-3.jpg" alt="career1" id="img1Job"/>
                        <img src="https://rmkcdn.successfactors.com/98fec2eb/f9b34b19-3ce5-44fd-87dc-b.jpg" alt="career2" id="img2Job"/>
                    </div>
    
                    <div id="component4Job">
    
                        <br/>
                        <h2 id="comp4heading">Working at Starbucks</h2>
    
    
                        <div id="cardsCareer">
    
                            <div className="card">
                                <img src="https://rmkcdn.successfactors.com/98fec2eb/de29dbad-2147-45af-9ed5-a.jpg" className="card-img-top" alt="Coffee"/>
                                <div className="card-body">
                                    <h5 className="card-title">Our Coffee</h5>
                                    <p className="card-text">Since 1971, it always has been and will always be about quality. Our passion for coffee is rivaled only by our love of sharing it.</p>
                                </div>
                            </div>
                            &nbsp; &nbsp; &nbsp;
    
                            <div className="card">
                                <img src="https://rmkcdn.successfactors.com/98fec2eb/217de237-18a4-443a-8ccc-9.jpg" className="card-img-top" alt="Culture"/>
                                <div className="card-body">
                                    <h5 className="card-title">Our Culture</h5>
                                    <p className="card-text">We are committed to upholding a culture where diversity is valued, respected and celebrated.</p>
                                </div>
                            </div>
                            &nbsp; &nbsp; &nbsp;
    
                            <div className="card">
                                <img src="https://rmkcdn.successfactors.com/98fec2eb/5550d259-f25b-4e21-bb04-2.jpg" className="card-img-top" alt="Partners"/>
                                <div className="card-body">
                                    <h5 className="card-title">Our Partners</h5>
                                    <p className="card-text">We love Starbucks and we're pretty sure you will too! See what our partners have to say….</p>
                                </div>
                            </div>
                            
                        </div>
    
                    </div>
                </Fragment>
            )

        }
  
    }
}

export default Careers