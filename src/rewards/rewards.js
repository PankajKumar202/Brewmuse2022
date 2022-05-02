
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import './rewards.css';
const Rewards = () => {
if(sessionStorage.getItem('token') !== null){
    return (
        <Fragment>
            <Header />
            <div id="wrapper" className="col-md-12">
                <div id="rewardsContainer" className="col-md-12">
                    <h2 id="rewardheading1">My Starbucks Rewards<sup>TM</sup> </h2>
                    <h1 id="rewardheading2">A loyalty program <br />that's all about you.</h1>
                    {/* <Link to={"/register"}><button type="button" class="btn btn-outline-dark" id="rewardsButton1">JOIN NOW</button></Link> */}
                    <Link to={"/giftCards/1"}><button type="button" class="btn btn-outline-dark" id="rewardsButton" style={{marginTop:"29.5%",marginLeft:"12.3%"}}>GIFT CARDS</button></Link>
                </div>
                {/* margin-top: 29.5%;
    margin-left: 12.3%; */}

                <div id="rewardsContainer1" className="col-md-12">
                    <center><h1 id="rewardheading3">The First Sip Feeling</h1></center>
                    <div id="rewardComponent" className="col-md-8">
                        <center>
                            <div className="rewardTile" >
                                <img src="https://i.ibb.co/h9SqZB1/reward-Tile1.png" alt="rewardTile1" />

                            </div>
                            <div className="rewardTile">
                                <img src="https://i.ibb.co/6y79sb5/reward-Tile2.png" alt="rewardTile2" />

                            </div>
                            <div className="rewardTile" >
                                <img src="https://i.ibb.co/0QRmKqp/reward-Tile3.png" alt="rewardTile3" />

                            </div>
                            <div className="rewardTile">
                                <img src="https://i.ibb.co/cDTygXt/reward-Tile4.png" alt="rewardTile4" />

                            </div>
                        </center>

                    </div>
                    <center><h4 id="rewardheading4">How to collect stars</h4></center>
                    <center> <h1 id="rewardheading5">Collect Stars, Get Rewards</h1></center>
                        <center><img src="https://i.ibb.co/k4M1hDH/complete-line.jpg" alt="starsRewards" id="rewardsImg2" /></center>

                </div>
                <div id="rewardContainer2" className="col-md-12">
                    <h1 id="rewardheading6">

                        Download the app <br />for best experience
                    </h1>
                    <p id="rewardpara">Maximise your rewards membership with the accompanying<br />Starbucks India App.</p>
                    <button id="rewardButton2" className="btn">GET THE APP</button>




                </div>
                <div id="rewardContainer3" className="col-md-12">
                    <div id="rewardTile6">
                        <img src="https://i.ibb.co/DK8SWgc/1009x729.jpg" alt="rewardTile6" id="rewardTile6Img" />
                        <h1 id="rewardheading8">
                            How to join My<br />Starbucks Rewards<sup style={{ fontSize: '18px' }}>TM</sup>
                        </h1>
                        <span id="rewardpara8">Already have a card?<br />

                            Signing up is easy and fast</span>
                        {/* <button type="button" class="btn btn-outline-dark" id="rewardsButton11">JOIN NOW</button>
                        <span id="rewardpara5">Already a member? <Link to={'#'}><span id="insiderewardpara">Sign in</span></Link></span> */}



                    </div>
                    

                    <h1 id="rewardheading7">
                        How to join My<br />Starbucks Rewards<sup style={{ fontSize: '18px' }}>TM</sup>
                    </h1>
                    <span id="rewardpara2">Already have a card?<br />

                        Signing up is easy and fast</span>
                    {/* <Link to={"/register"}><button type="button" class="btn btn-outline-dark" id="rewardsButton3">JOIN NOW</button></Link>
                    <span id="rewardpara3">Already a member? <Link to={'/login'}><span id="insiderewardpara3">Sign in</span></Link></span> */}


                </div>
            </div>
        </Fragment>
    )
}else{
    return(
        <Fragment>
            <Header />
            <div id="wrapper" className="col-md-12">
                <div id="rewardsContainer" className="col-md-12">
                    <h2 id="rewardheading1">My Starbucks Rewards<sup>TM</sup> </h2>
                    <h1 id="rewardheading2">A loyalty program <br />that's all about you.</h1>
                    <Link to={"/register"}><button type="button" class="btn btn-outline-dark" id="rewardsButton1">JOIN NOW</button></Link>
                    <Link to={"/giftCards/1"}><button type="button" class="btn btn-outline-dark" id="rewardsButton">GIFT CARDS</button></Link>
                </div>
                <div id="rewardsContainer1" className="col-md-12">
                    <center><h1 id="rewardheading3">The First Sip Feeling</h1></center>
                    <div id="rewardComponent" className="col-md-8">
                        <center>
                            <div className="rewardTile" >
                                <img src="https://i.ibb.co/h9SqZB1/reward-Tile1.png" alt="rewardTile1" />

                            </div>
                            <div className="rewardTile">
                                <img src="https://i.ibb.co/6y79sb5/reward-Tile2.png" alt="rewardTile2" />

                            </div>
                            <div className="rewardTile" >
                                <img src="https://i.ibb.co/0QRmKqp/reward-Tile3.png" alt="rewardTile3" />

                            </div>
                            <div className="rewardTile">
                                <img src="https://i.ibb.co/cDTygXt/reward-Tile4.png" alt="rewardTile4" />

                            </div>
                        </center>

                    </div>
                    <center><h4 id="rewardheading4">How to collect stars</h4></center>
                    <center> <h1 id="rewardheading5">Collect Stars, Get Rewards</h1></center>
                        <center><img src="https://i.ibb.co/k4M1hDH/complete-line.jpg" alt="starsRewards" id="rewardsImg2" /></center>

                </div>
                <div id="rewardContainer2" className="col-md-12">
                    <h1 id="rewardheading6">

                        Download the app <br />for best experience
                    </h1>
                    <p id="rewardpara">Maximise your rewards membership with the accompanying<br />Starbucks India App.</p>
                    <button id="rewardButton2" className="btn">GET THE APP</button>




                </div>
                <div id="rewardContainer3" className="col-md-12">
                    <div id="rewardTile6">
                        <img src="https://i.ibb.co/DK8SWgc/1009x729.jpg" alt="rewardTile6" id="rewardTile6Img" />
                        <h1 id="rewardheading8">
                            How to join My<br />Starbucks Rewards<sup style={{ fontSize: '18px' }}>TM</sup>
                        </h1>
                        <span id="rewardpara8">Already have a card?<br />

                            Signing up is easy and fast</span>
                        <button type="button" class="btn btn-outline-dark" id="rewardsButton11">JOIN NOW</button>
                        <span id="rewardpara5">Already a member? <Link to={'#'}><span id="insiderewardpara">Sign in</span></Link></span>



                    </div>
                    

                    <h1 id="rewardheading7">
                        How to join My<br />Starbucks Rewards<sup style={{ fontSize: '18px' }}>TM</sup>
                    </h1>
                    <span id="rewardpara2">Already have a card?<br />

                        Signing up is easy and fast</span>
                    <Link to={"/register"}><button type="button" class="btn btn-outline-dark" id="rewardsButton3">JOIN NOW</button></Link>
                    <span id="rewardpara3">Already a member? <Link to={'/login'}><span id="insiderewardpara3">Sign in</span></Link></span>


                </div>
            </div>
        </Fragment>
    )
}
  

}
export default Rewards;