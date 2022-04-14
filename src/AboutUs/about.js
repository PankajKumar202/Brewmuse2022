import React,{Fragment} from "react";
import {Link} from 'react-router-dom';
import './about.css';
import Header from '../Header';

const AboutUs = () =>{
    return(
        <Fragment>
            <Header/>
            <div className="container" id="mainAboutDiv">
                
                <div id="aboutDiv1">
                    <h4>About Us</h4>
                    <h4>It happens millions of times each week – a customer receives a drink from a Starbucks barista – but each interaction is unique.</h4>
                    <img src="https://i.ibb.co/TWpnbn0/about-us.jpg" alt="Image"/>
                    <p className="aboutContent">It’s just a moment in time – just one hand reaching over the counter to present a cup to another outstretched hand.</p>
                    <p className="aboutContent">But it’s a connection....</p>
                    <p className="aboutContent">We make sure everything we do honors that connection – from our commitment to the highest quality coffee in the world, to the way we engage with our customers and communities to do business responsibly.</p>
                    <p className="aboutContent">From our beginnings as a single store over forty years ago, in every place that we’ve been, and every place that we touch, we've tried to make it a little better than we found it.</p>
                </div>

                <div id="aboutDiv2">
                    <h4>Our Company</h4>
                    <h4>To say Starbucks purchases and roasts high-quality whole bean coffees is very true. That’s the essence of what we do – but it hardly tells the whole story.</h4>
                    <img src="https://i.ibb.co/0yNBbCc/about-us-company.jpg" alt="Image"/>
                    <p className="aboutContent">Our coffeehouses have become a beacon for coffee lovers everywhere. Why do they insist on Starbucks? Because they know they can count on genuine service, an inviting atmosphere and a superb cup of expertly roasted and richly brewed coffee every time.</p>
                    <h6>Expect More Than Coffee</h6>
                    <p className="aboutContent">We are passionate purveyors of coffee and everything else that goes with a rewarding coffeehouse experience. We also offer a selection of premium Tazo® teas, fine pastries and other delectable treats to please the taste buds. And the music you hear in store is chosen for its artistry and appeal. People come to Starbucks to chat, meet up or work.</p>
                    <p className="aboutContent">We’re a neighborhood gathering place, a part of the daily routine – and we couldn’t be happier about it. Get to know us and you’ll see: we are so much more than what we brew.</p>
                    <p className="aboutContent">We are passionate purveyors of coffee and everything else that goes with a rewarding coffeehouse experience.</p>
                    <p>Tata Starbucks Private Limited <strong>(formerly known as "Tata Starbucks Limited")</strong></p>
                </div>

                <div id="aboutDiv3">
                    <h4>Our Heritage</h4>
                    <h4>Every day, we go to work hoping to do two things: share great coffee with our friends and help make the world a little better. It was true when the first Starbucks opened in 1971, and it’s just as true today.</h4>
                    <img src="https://i.ibb.co/ZzhCBsg/about-us-heritage.jpg" alt="Image"/>
                    <p className="aboutContent">Back then, the company was a single store in Seattle’s historic Pike Place Market. From just a narrow storefront, Starbucks offered some of the world’s finest fresh-roasted whole bean coffees. The name, inspired by Moby Dick, evoked the romance of the high seas and the seafaring tradition of the early coffee traders.</p>
                    <p className="aboutContent">In 1981, Howard Schultz (Starbucks chairman, president and chief executive officer) first walked into a Starbucks store. From his first cup of Sumatra, Howard was drawn into Starbucks and joined a year later. A year later, in 1983, Howard travelled to Italy and became captivated by Italian coffee bars and the romance of the coffee experience. He had a vision to bring the Italian coffeehouse tradition back to the United States. A place for conversation and a sense of community. A third place between work and home. He left Starbucks for a short period of time to start his own Il Giornale coffeehouses and returned in August 1987 to purchase Starbucks with the help of local investors..</p>
                    <p className="aboutContent">Our mission to inspire and nurture the human spirit – one person, one cup and one neighbourhood at a time.</p>
                </div>

                <div id="aboutDiv4">
                    <span><a href="#aboutDiv1">About Us .</a></span>
                    <span><a href="#aboutDiv2">Our Company .</a></span>
                    <span><a href="#aboutDiv3">Our Heritage</a></span>
                </div>
            </div>
        </Fragment>
    )
}

export default AboutUs;