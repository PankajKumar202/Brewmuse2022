import React from "react";
import Header from "../Header";
import './home.css';



const Home = () =>{
    // function closeDiv(){
    //     let coupenbox=document.getElementById('couponBtn')[0].style.visibility="hidden";
    //     return coupenbox;
    // }
    
   
    return(
        
        <React.Fragment>
            <div className="togglediv">
            <Header/>
            </div>
          
            
            {/* <div id="coupon">
              
                <img src="https://i.ibb.co/g7X9bKS/offer3.jpg" alt="offer" id="offer1"/>
                <img src="https://i.ibb.co/BqhGhdW/offer4.jpg" alt="offer" id="offer2"/>  
                <img src="https://i.ibb.co/tH5DDnz/offer.jpg" alt="offer" id="offer3"/>    
                <button id="couponBtn" onclick={closeDiv}>&times;</button>   
            </div> */}

            <div className="homies" id="section" ></div>
            <div className="homies" id="section1"></div>
            <div className="homies" id="section2"></div>
            <div className="homies" id="section3"></div>
            <div className="homies" id="section4"></div>
            <div className="homies" id="section5"></div>
            <div className="homies" id="section6"></div>
            <div className="homies" id="section7"></div>
            <div className="homies" id="section8"></div>
            <div className="homies" id="section9"></div>
            <div className="homies" id="section10">
                <div id="component1">
                    <img src="https://i.ibb.co/0B94Vnp/latte-starbucks-tcm87-16216-w1024-n.png" alt="Latte Starbucks"/>
                </div>
                <div id="component2">
                    <h4>Let us Delight you.</h4>
                    <p>
                        <em>
                            Delicious, handcrafted beverages and great-tasting food. The secret to making life better.
                        </em>
                    </p>
                </div>
            </div>
            <div className="homies w-100" id="section11">
                <div id="component4">
                    <img src="https://i.ibb.co/YyLm7Xs/oportunity-tcm87-16218-w1024-n.png" alt="image"/>
                </div>
                
                <div id="component3">
                    <h4>Opportunity</h4>
                    <p>
                        <em>
                            To be more than an employee, to be a partner.
                        </em>
                    </p>
                </div>
            </div>
            
           
        </React.Fragment>
    )
}





export default Home