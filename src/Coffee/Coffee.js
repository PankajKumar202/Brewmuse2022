import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./coffee.css";
import Header from '../Header';
function Pour(){
    document.getElementById("changeHead").innerText="Pour-Over";
    document.getElementById("changePara").innerText="Pour-over is a beautifully simple and accessible way to brew a single cup of coffee with clean, fully developed flavour and body.";
}

function Press(){
    document.getElementById("changeHead").innerText="Coffee Press";
    document.getElementById("changePara").innerText="Brewing with a coffee press retains the precious natural oils that paper filters absorb, and extracts the coffee’s full flavour while giving it a consistency that’s thick and rich.";
}

function Iced(){
    document.getElementById("changeHead").innerText="Iced Pour-Over";
    document.getElementById("changePara").innerText="Iced pour-over is a simple and approachable way to make rich, full-flavoured iced coffee one pitcher at a time.";
}

function Brew(){
    document.getElementById("changeHead").innerText="Coffee Brewer";
    document.getElementById("changePara").innerText="Drip coffee is a convenient way to make great coffee. With the right grind and pure water, you can brew a fantastic cup of coffee in a coffee brewer.";
}

const Coffee = () => {


    return (
        <Fragment>
            <Header />
            <div id="coffeeSection1">
                <h1>Our Coffee</h1>
                <p>
                    Since 1971, it always has been and will always be about quality. We’re passionate about ethically sourcing only the finest Arabica coffee beans and roasting them with great care. Our passion for coffee is rivaled only by our love of sharing it.
                </p>
                <Link to="#" title="LEARN MORE">
                    <h5>LEARN MORE</h5>
                </Link>
            </div>

            <div id="coffeeSection2">
                <h2>COFFEE FINDER</h2>
                <p>
                    Our coffee masters have distilled their years of tasting knowledge down to three simple questions to
                    help you find a coffee you’re sure to love.
                </p>
                <Link to="#" id="finder1">
                    <li>Get Started--</li>
                </Link>
                <Link to="#" >
                    <h5>Browse All Coffees--</h5>
                </Link>
                <Link to="/coffeeCat/1">
                    <div class="coffeeImage"></div>
                </Link>
            </div>

            <div id="coffeeSection3">
                {/* <video id="background-video" autoplay loop muted poster="https://i.ibb.co/zQHZJQJ/thumb.png">
                    <source src="../../images/vid.mp4" type="video/mp4"/>
                </video> */}
                <video loop autoPlay id="background-video" poster="https://i.ibb.co/zQHZJQJ/thumb.png">
                    <source
                        src="../../images/vid.mp4"
                        type="video/mp4"
                    />
                 
                </video>
                <h5>HOW TO BREW</h5>
                <h2 id="changeHead">Coffee Press</h2>
                <p id="changePara">Brewing with a coffee press retains the precious natural oils that paper filters absorb, and extracts the
                    coffee’s full flavour while giving it a consistency that’s thick and rich.</p>
                <div class="coffeeBox">
                    <ul class="coffeeItems">
                        <li class="coffeeLinks Press svg" title="Coffee Press" >&nbsp; Press </li>
                        <li class="coffeeLinks Pour-Over" title="Pour-Over" >Pour-Over</li>
                        <li class="coffeeLinks Iced" title="Iced Pour-Over">Iced Pour-Over</li>
                        <li class="coffeeLinks Brew" title="Coffee Brewer">Brewer</li>
                        {/* <li class="coffeeLinks Press svg" title="Coffee Press" onmouseover={Press()}>&nbsp; Press </li>
                        <li class="coffeeLinks Pour-Over" title="Pour-Over" onmouseover={Pour()} onmouseout={Press()}>Pour-Over</li>
                        <li class="coffeeLinks Iced" title="Iced Pour-Over"onmouseover={Iced()}onmouseout={Press()}>Iced Pour-Over</li>
                        <li class="coffeeLinks Brew" title="Coffee Brewer"onmouseover={Brew()}onmouseout={Press()}>Brewer</li> */}
                    </ul>
                </div>
            </div>
            <script>
                window.onload
            </script>
        </Fragment>

    )
}

export default Coffee;