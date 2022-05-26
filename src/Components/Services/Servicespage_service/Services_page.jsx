import React from 'react';
import './Servicestyle.css';
import ReactWhatsapp from 'react-whatsapp';


export default function Services_page() {
    return <div>
        <div className="section-block">
            <div className="container">
                <div className="section-heading center-holder">


                    <h2>Our Services </h2>

                    <p>Our team is very experienced with Federal Board of Revenue Pakistan (FBR), Securities and Exchange Commission of Pakistan (SECP) related matters and we have helped our clients
                        streamline their businesses so they can focus on things that really matter. </p>
                    {/* <h4>Our Process To Successful Blockchain Solutions</h4> */}
                    <div className="row mt-5">
                        <div className="col-lg-4  col-lg-4 col-md-4  col-sm-4">
                            <div className="work-inner-box">
                                <div className="work-icon icon-box">
                                    <i aria-hidden="true" class="far fa-list-alt"></i>
                                </div>
                                <h4>FBR Income Tax/Sales Tax </h4>
                                <p>Our team will gather all your requirements and start creating the perfect strategy to meet those needs.</p>

                                <button className='btn bt-lg btnlearn1'>Learn More</button>


                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4    col-sm-4">
                            <div className=" secondcard">
                                {/* <div className="work-icon icon-box">
                                    <i aria-hidden="true" class="far fa-list-alt"></i>
                                </div>
                                <h4>FBR Income Tax/Sales Tax </h4>
                                <p>Our team will gather all your requirements and start creating the perfect strategy to meet those needs.</p> */}


                                <div className="section-heading">
                                    <ul className='ulinserciv'>
                                        <li>Tax Solutions</li>
                                        <li>Company Registration</li>
                                        <li>WEBOC Registration</li>
                                        <li>Corporate (SECP) Services</li>
                                        <li>Monthly Tax Preparation (FBR)</li>
                                        <li>Internal Audits</li>
                                        <li>Compliance Check</li>
                                    </ul>
                                </div>

                                <div className="btndivmaindiv">
                                    <ReactWhatsapp number="+92 3143081490" className="Reactwhatshere" message="I want to book an appointment" >
                                        <button className=" btn btnlearn dark-button js-scroll-trigger footerbtnt" > <i class="fab fa-whatsapp "></i> Learn More</button>
                                    </ReactWhatsapp>

                                    {/* <button className='btn bt-lg btnlearn'>Learn More</button> */}
                                </div>



                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4    col-sm-4">
                            <div className="work-inner-box">
                                <div className="work-icon icon-box">
                                    <i aria-hidden="true" class="far fa-chart-bar"></i>
                                </div>
                                <h4>SECP Company Registration  </h4>
                                <p>We make sure your new Business Ventures are registered as soon as possible so you can start at your earliest.</p>

                                <button className='btn bt-lg btnlearn2'>Learn More</button>


                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-4    col-sm-4">
                            <div className="work-inner-box">
                                <div className="work-icon icon-box mt-2">
                                    <i aria-hidden="true" class="fas fa-business-time"></i>
                                </div>
                                <h4 className='mt-5'>Monthly Retainer Service  </h4>
                                <p>You can hire us on retainer basis so we can help you file sales tax and conform to other obligations on monthly basis. Our Retainer services start at Rs. 20,000/Month</p>

                                {/* <button className='btn bt-lg btnlearn'>Learn More</button> */}


                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4    col-sm-4">
                            <div className="work-inner-box opicityhere">
                                <div className="work-icon icon-box mt-2">
                                    <i aria-hidden="true" class="far fa-comment-alt"></i>
                                </div>
                                <h4 className='mt-5'>Accounting and Book-Keeping   </h4>
                                <p>We offer affordable book keeping services to our clients in Islamabad and Rawalpindi</p>

                                {/* <button className='btn bt-lg btnlearn'>Learn More</button> */}


                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4    col-sm-4">
                            <div className="work-inner-box">
                                <div className="work-icon icon-box mt-2">
                                    <i aria-hidden="true" class="fas fa-globe"></i>
                                </div>
                                <h4 className='mt-5'>Foreign Company Registration  </h4>
                                <p>We can help foreign enterprises wanting to Invest in Pakistan by registering a Branch office or Liaison Office.</p>

                                {/* <button className='btn bt-lg btnlearn'>Learn More</button> */}


                            </div>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-lg-4 col-md-4    col-sm-4">
                            <div className="work-inner-box">
                                <div className="work-icon icon-box mt-2">
                                    <i aria-hidden="true" class="fas fa-braille"></i>
                                </div>
                                <h4 className='mt-5'>WEBOC Registration  </h4>
                                <p>We offer affordable WEBOC registration services for Importers</p>

                                {/* <button className='btn bt-lg btnlearn'>Learn More</button> */}


                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4    col-sm-4">
                            <div className="work-inner-box opicityhere">
                                <div className="work-icon icon-box mt-2 ">
                                    <i aria-hidden="true" class="fas fa-book-open"></i>
                                </div>
                                <h4 className='mt-5'>Company Audit   </h4>
                                <p>We offer Internal Audit, Statutory Audits, Compilation of financial statements, International accounting standards, Governance and Risk Management Services.</p>

                                {/* <button className='btn bt-lg btnlearn'>Learn More</button> */}


                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4    col-sm-4">
                            <div className="work-inner-box">
                                <div className="work-icon icon-box mt-2">
                                    <i aria-hidden="true" class="far fa-building"></i>
                                </div>
                                <h4 className='mt-5'>Islamabad Chamber of Commerce Membership   </h4>
                                <p>We can help you become a member of Islamabad Chamber of Commerce and Industry.</p>

                                {/* <button className='btn bt-lg btnlearn'>Learn More</button> */}


                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>;
}
