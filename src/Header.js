
import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import './main.css'

const headerUrl = "https://brewauth.herokuapp.com/api/auth/userInfo"
// Geolocation and Weather



class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userData: "",
            userName: ""

        }
    }
    signOut = () => {
        sessionStorage.removeItem('userName');
        sessionStorage.removeItem('token');
        sessionStorage.setItem('loginStatus', 'logOut');
        this.setState({ userData: '' })
        this.props.history.push("/")

    }
    conditionalHeaderxl = () => {
        
        if ( sessionStorage.getItem('userName') !== null) {
            sessionStorage.setItem('loginStatus', 'logIn');
                return (
                    <Fragment>

                        
                            <Link className="nav-link active" to={"#"} id="signinMsgXl" ><b style={{"color":"black"}}>Let's have coffee &#x2615;{sessionStorage.getItem('userName')}</b></Link>
                            <Link onClick={this.signOut} className="signOutXl" style={{textDecoration:"none"}}><b style={{"color":"black"}}>SignOut</b></Link>
                        
                    </Fragment>   
                )
            
        } else {
          
                return (
                    <Link to={"/login"} className="find" style={{textDecoration:"none"}}><b style={{"color":"black"}}>SignIn</b></Link>
                )
            
           
        }
    }
    navbar=()=>{
        let navSpace=document.getElementsByClassName('navbar')[0];
        navSpace.classList.toggle('navbar1')
    }
    conditionalHeadersm = () => {
        
        if ( sessionStorage.getItem('userName') !== null) {
            sessionStorage.setItem('loginStatus', 'logIn');
                return (
                    <Fragment>

                        
                            <Link className="nav-link active" to={"#"} id="signinMsgSm">Let's have coffee &#x2615;{sessionStorage.getItem('userName')}</Link>
                            <Link onClick={this.signOut} className="signOutSm" style={{textDecoration:"none"}}>SignOut</Link>
                        
                    </Fragment>   
                )
            
        } else {
          
                return (
                   <li className="nav-item" id="signIn">
                                    <Link className="nav-link active" to={'/login'} style={{textDecoration:"none"}}>SignIn</Link>
                                </li> 
                )
            
           
        }
    }

    render() {
        
        
        console.log("userData>>>>", this.state.userData);
        console.log("Insdie rensder ",this.props)

        return (
            <Fragment>

                <div id="header1"></div>
                <div id="nav1">
                    <div className="logo">
                        <Link className="navbar-brand" to={"/"}><img src="https://i.ibb.co/zbXs3MY/logo.png" alt="Logo" /></Link>
                    </div>
                   
  <b><p id="weather"></p></b>
                    <div id="icons"></div>
                    
                  

                    <div id="findStore">
                    <Link to={"/store"}>
                        <i className="fas fa-map-marker-alt"></i>
                        
                            <p className="find"><b style={{"color":"black"}}>Find a Store</b></p>
                        </Link>&nbsp;&nbsp;&nbsp;
                        <div id="conditionalHeaderxl">
                        {this.conditionalHeaderxl()}
                        </div>
                       
                    </div>
                </div>
              
                <nav className="navbar navbar-expand-lg navbar-light">
                <button id="navIcon" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={this.navbar} >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    <div className="container-fluid">
                     

                        <div className="collapse navbar-collapse w-50" id="navbarNav">
                            <ul className="navbar-nav">

                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to={"/coffee"} >COFFEE</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="Menu" >MENU</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to={"/coffeeHouse"} >COFFEEHOUSE</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to={"/Responsibility"} >RESPONSIBILITY</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to={"/rewards"}>REWARDS</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to={"/careers"}>CAREERS</Link>
                                </li>
                                <li className="nav-item" id="gift">
                                    <Link className="nav-link active" to={"/seasonGifting"}>BREWMUSE SEASON'S GIFTING</Link>
                                </li>
                                <li className="nav-item" id="del">
                                    <Link className="nav-link active" aria-current="page" to={"/starbucksdelivers"}>BREWMUSE DELIVERS</Link>
                                </li>
                                <li className="nav-item" id="about">
                                    <Link className="nav-link active" to={"/aboutUs"} >ABOUT US</Link>
                                </li>
                              
                                <li className="nav-item" id="conditionalHeadersm">
                                    {this.conditionalHeadersm()}
                                </li>



                            </ul>
                            {/* <br /> */}
                        </div>

                    </div>

                </nav>
                 {/* <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navbar">
                    <div className="container-fluid">

                        <Link className="navbar-brand" to="/">Zomato</Link>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" ></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        {this.conditionalHeadersm()}
                        </div>
                    </div>


                </nav> */}


            </Fragment>
        )
    }
    componentDidMount() {
        let Geolocation = () => {

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            } else {
                console.log("GeoLocation not supported.")
            }
        }

        let showPosition = (data) => {
            let y = document.getElementById("weather");
            let z = document.getElementById('icons')
            let lon = data.coords.longitude;
            let lat = data.coords.latitude;
            console.log(data);
            let url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&mode=json&units=metric&cnt=1&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`

            fetch(url)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    // sessionStorage.setItem('city', data.city.name)
                    return data.list.map((item) => {
                        console.log(item.temp.day)
                        y.innerText = `${item.temp.day}°C`;
                        z.innerHTML = `<img class='card-img-top1' src='https://openweathermap.org/img/w/${item.weather[0].icon}.png' alt='weather'/>`
                    })

                })
        }
        Geolocation();
        fetch(headerUrl, {
            method: 'GET',
            headers: {
                "x-access-token": sessionStorage.getItem('token'),
            }

        })
            .then((res) => res.json())
            .then((data) => {
               if(sessionStorage.getItem('token') !==null){
                sessionStorage.setItem('userName',data.name.toLowerCase().trim().split(' ')[0])
            }
            else{
                sessionStorage.removeItem('userName')  
            }
            
                 
           
                this.setState({ userData: data })
            })
    }
}


export default Header;