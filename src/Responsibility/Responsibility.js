import React, { Fragment } from "react";
import './Responsibility.css';
const Responsibility = () => {
    return (
        <Fragment>
            <article className="articleBlock">
                <h1 className="articleHeading">
                    Being a Responsible Company
                </h1>
                <h2 className="summaryHead">
                    We’ve always believed that businesses can – and should – have a positive impact<br /> on the communities they
                    serve.
                </h2>
                <div className="image">
                    <img src="https://i.ibb.co/X7xqyV2/Responsible.jpg" alt="Responsibility"/>
                </div>
                <div className="paraText">
                    So ever since we opened our first store in 1971, we’ve dedicated ourselves to earning the trust and respect
                    of our customers, partners<br /> (employees) and neighbours. How? By being responsible and doing things that
                    are
                    good for the planet and each other.
                </div>
            </article>


            <article className="community">
                <h1 className="comHeadline">
                    Community
                </h1>
                <div className="comImage">

                    <img src="https://i.ibb.co/dgs9cm3/Community.jpg" alt="Community" />

                </div>
                <div className="comPara">
                    <p>Starbucks is committed to helping communities thrive everywhere we do business. We strive to
                        support
                        connections in communities around the world so that we can make a positive, relevant and
                        enduring
                        impact. Using Our Scale for Good, Local Relevance/Global Reach, Working with Others, Innovation.
                    </p>
                    <p>
                        Community Service
                        <br />
                        CHAI Project
                        <br />
                        Starbucks and Swastha
                    </p>
                </div>
            </article>

            <article className="Environment">
                <h1 className="envHeadline">
                    Environment
                </h1>
                <div className="envPara">
                    <p>We’re finding ways to minimise our environmental footprint, tackle climate change and inspire
                        others
                        to do the same.</p>
                    <p>
                        Recycling
                        <br />
                        Energy
                        <br />
                        Water
                        <br />
                        Green Building
                        <br />
                        Climate Change
                    </p>
                </div>
            </article>



            <article className="ethicalSource">
                <h1 className="ethHeadline">
                    Ethical Sourcing
                </h1>
                <div className="ethPara">
                    <p>We’re committed to buying and serving the highest-quality, responsibly grown, ethically traded
                        coffee to help create a better future for farmers.</p>
                    <p>
                        Coffee
                        <br />
                        Farmer Support
                        <br />
                        Tea
                        <br />
                        Cocoa
                    </p>
                </div>
            </article>


            <article className="Diversity">
                <h1 className="divHeadline">
                    Diversity
                </h1>
                <div className="divPara">
                    <p>
                        By welcoming a diversity of people and ideas to our business, we create more opportunities for
                        learning and success that benefit customers, partners (employees) and suppliers.
                    </p>
                </div>
            </article>

            <span className="spanHead">Responsibility</span>


            {/* <!-- Responsibility Page Ends--> */}
        
    </Fragment >
     )
}
export default Responsibility