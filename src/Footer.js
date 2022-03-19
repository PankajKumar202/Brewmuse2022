import React,{Fragment} from "react";
import {Link} from "react-router-dom";
import './main.css'


const Footer=()=>{
    return(
        <Fragment>
            <div className="accordion accordion-flush" id="accordionFooter">
                <div className="accordion-item" id="accItem1">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <Link className="accordionLinks" to={"#"}>ABOUT US</Link>
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionFooter">
                    <div className="accordion-body">
                        <Link to={"#"} className="accordionSubLinks">
                            <p>Our Heritage</p>
                            <p>Our Company</p>
                        </Link>
                    </div>
                    </div>
                </div>

                <div className="accordion-item" id="accItem1">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                        <Link className="accordionLinks" to={"#"}>CUSTOMER SERVICE</Link>
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionFooter">
                        <div className="accordion-body">
                            <Link to={"#"} className="accordionSubLinks">
                                <p className="subHeadings">Frequently Asked Questions</p>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="accordion-item" id="accItem1">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                        <Link className="accordionLinks" to={"#"}>QUICK LINKS</Link>
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionFooter">
                        <div className="accordion-body">
                            <Link to={"#"} className="accordionSubLinks">
                                <p className="subHeadings">Store Locator</p>
                            </Link>
                        </div>
                    </div> 
                </div>    

            </div>

            {/* <!-- Footer Links --> */}
            <div id="ResponsiveFooterLinks">
                <Link to={"#"}><p>Web Accessibility</p></Link>
                <Link to={"#"}><p>Privacy Statement</p></Link>
                <Link to={"#"}><p>Terms of Use</p></Link>
                <Link to={"#"}><p>Site Map</p></Link>
                <Link to={"#"}><p>Contact Us</p></Link>
                <Link to={"#"}><p>Cookie Preferences</p></Link>
            </div>

            {/* <!--Social icons--> */}
            <div id="section12">
                <Link to={"https://www.facebook.com/starbucksindia"} target="__blank"><i className="fab fa-facebook-f"></i></Link>
                <Link to={"https://twitter.com/starbucksindia"}target="__blank"><i className="fab fa-twitter"></i></Link>
                <Link to={"https://www.instagram.com/starbucksindia/"} target="__blank"><i className="fab fa-instagram"></i></Link>
            </div>

            <footer>
                <div id="footer1">
                    <div id="category1">
                        <Link to={"#"} className="footerLinks">
                            <h5 className="heading">ABOUT US</h5>
                            <p className="subHeadings">Our Heritage</p>
                            <p className="subHeadings" id="subHeading2">Our Company</p>
                        </Link>
                    </div>
        
                    <div id="category2">
                        <Link to={"#"} className="footerLinks">
                            <h5  className="heading">CUSTOMER SERVICE</h5>
                            <p className="subHeadings">Frequently Asked Questions</p>
                        </Link>
                    </div>
        
                    <div id="category3" >
                        <Link to={"#"} className="footerLinks">
                            <h5 className="heading">QUICK LINKS</h5>
                            <p className="subHeadings">Store Locator</p>
                        </Link>
                    </div>
        
                    <div id="category4">
                        <Link className="footerLinks2" to={"#"}>Web Accessibility |</Link>
                        <Link className="footerLinks2" to={"#"}>Privacy Statement |</Link>
                        <Link className="footerLinks2" to={"#"}>Terms of Use |</Link>
                        <Link className="footerLinks2" to={"#"}>Site Map |</Link>
                        <Link className="footerLinks2" to={"#"}>Contact Us |</Link>
                        <Link className="footerLinks2" to={"#"}>Cookie Preferences</Link>
                    </div>
        
                    <div id="category5">
                        <p>&copy; 2019 Starbucks Coffee Company. All rights reserved</p>
                    </div>
                </div>

                <div id="footer2">
                    <img src="https://i.ibb.co/8K5Bk3G/wordmark-footer-tcm87-397.png" alt="wordmark" id="starbucksWordMark"/>

                </div>
            </footer>

        </Fragment>
    )
}
export default Footer;