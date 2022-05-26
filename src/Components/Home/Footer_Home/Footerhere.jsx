import React, { useEffect } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import ReactWhatsapp from 'react-whatsapp';


export default function Footerhere() {
    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return <div>

        <div className="footerbg">
            <div className=''></div>
            <div className="container">
                <div className="innerdivfooter">
                    <div className="row">
                        <div className="col-lg-3 col-md-6"  >
                            <div className="col1divfooter">

                                <h3>Reach Us</h3>

                                <div className="textandicon">
                                    <ul className="textandicon-icon-list-items">
                                        <li className="icon-list-item" style={{ marginTop: '1rem' }}>
                                            <div className="iconandtexthere">
                                                <i aria-hidden="true" className="fas fa-map-marker-alt list-icon"></i>
                                                <p className="list-text ">Office No 02, 3rd Floor, Link Arcade Building, Model Town Link Road Lahore.</p>
                                            </div>

                                        </li>
                                        <li className="icon-list-item">


                                            <i aria-hidden="true" className="fas fa-phone list-icon"></i>
                                            <p className="list-text">+92 3143081490</p>

                                        </li>
                                        <li className="icon-list-item">

                                            <i aria-hidden="true" className="far fa-envelope-open list-icon"></i>
                                            <a className='linkatag' target="_blank" href="mailto:info@arbitechsolution.pk">
                                                <p className="list-text">info@saadtax.com</p>
                                            </a>
                                        </li></ul></div>
                            </div>

                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-3 col-7" >
                            <div className="col1divfooter">

                                <h3>FOLLOW TAX UPDATES ON SOCIAL MEDIA</h3>

                                <div className="textandicon">
                                    <ul className="textandicon-icon-list-items">
                                        <li className="icon-list-item" style={{ marginTop: '1rem' }}>
                                            <div className="iconandtexthere">
                                                <i aria-hidden="true" class="fab fa-facebook-f list-icon"></i>
                                                <a target="_blank" href="https://www.facebook.com/Taxreturninfo/" className='linkatag'>

                                                    <p className="list-text texthover linkfronnavbar "> Facebook Updates</p>
                                                </a>
                                            </div>

                                        </li>
                                        <li className="icon-list-item">


                                            <i aria-hidden="true" class="fab fa-twitter list-icon"></i>
                                            <a target="_blank" href="#" className='linkatag'><p className="list-text texthover linkfronnavbar">@abhconsultants</p></a>

                                        </li>
                                        <li className="icon-list-item">
                                            <i aria-hidden="true" class="fab fa-linkedin-in list-icon"></i>
                                            <a target="_blank" className='linkatag' target="_blank" href="mailto:info@arbitechsolution.pk">
                                                <p className="list-text texthover linkfronnavbar">STA on LinkedIn</p>
                                            </a>
                                        </li></ul></div>
                            </div>

                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-3 col-5" >
                            <div className="col1divfooter">

                                <h3>LINKS LIST</h3>

                                <div className="textandicon">
                                    <ul className="LinkofPages" >
                                        <div className="ulinnerdivfooter">
                                            {/*<li className="icon-list-item mt-3" style={{ marginTop: '1rem' }}>
                                                <Link to='/' onClick={() => window.scrollTo(0, 0)} className='footerlinkherea' >
                                                    <h6 className='linkfronnavbar'>Home</h6>
                                                </Link>

                                            </li>
                                            <li className="icon-list-item mt-3">

                                                <Link to='/about' onClick={() => window.scrollTo(0, 0)} className='footerlinkherea' > <h6 className='linkfronnavbar'>About</h6></Link>


                                            </li>
                                            <li className="icon-list-item mt-3">
                                                <Link to="/update" onClick={() => window.scrollTo(0, 0)} className='footerlinkherea' >  <h6 className='linkfronnavbar'>Updates</h6></Link>

</li>*/}
                                            <li className="icon-list-item mt-3">

                                                <a className='footerlinkherea linkfronnavbar' target="_blank" href="https://iris.fbr.gov.pk/infosys/public/txplogin.xhtml"> IRIS (FBR)</a>

                                            </li>
                                            <li className="icon-list-item mt-3">

                                                <a className='footerlinkherea linkfronnavbar' target="_blank" href="https://e.fbr.gov.pk/esbn/Service.aspx?PID=yakVPtRNQyEVk0Lo/tsvAg=="> Active Tax Payer (Income Tax)</a>

                                            </li>
                                            <li className="icon-list-item mt-3">
                                                <a className='footerlinkherea linkfronnavbar' target="_blank" href="https://e.fbr.gov.pk/ATLSearchUtility.aspx">Active Tax Payer (Sales Tax)</a>

                                            </li>
                                            <li className="icon-list-item mt-3">
                                                <a className='footerlinkherea linkfronnavbar' target="_blank" href="https://e.fbr.gov.pk/DocumentVerification.aspx">Online Document Verification (Fbr)</a>

                                            </li>
                                            <li className="icon-list-item mt-3">
                                                <a className='footerlinkherea linkfronnavbar' target="_blank" href="https://e.fbr.gov.pk/TAMSNoticeVerification.aspx">Online Notice Verification (Fbr)</a>

                                            </li>

                                            <li className="icon-list-item mt-3">
                                                <a className='footerlinkherea linkfronnavbar' target="_blank" href="https://e.fbr.gov.pk/Registration/onlinesearchTaxpayer.aspx?rand=2">Taxpayer Online Ntn And Sales Tax  </a>

                                            </li>
                                            <li className="icon-list-item mt-3">
                                                <a className='footerlinkherea linkfronnavbar' target="_blank" href="https://iris.fbr.gov.pk/public/txpAILogin.xhtml">Assets Inquiry Of Taxpayer</a>

                                            </li>
                                            <li className="icon-list-item mt-3">
                                                <a className='footerlinkherea linkfronnavbar' target="_blank" href="https://e.fbr.gov.pk/ATLSearchUtility.aspx?ID=2">Blacklisted For Sales Tax</a>

                                            </li>
                                            <li className="icon-list-item mt-3">
                                                <a className='footerlinkherea linkfronnavbar' target="_blank" href="https://www.fbr.gov.pk/pos-retailers-integrated-with-fbr/51148/132194">POS Retailers – Procedure For Fbr Integration</a>

                                            </li>


                                            {/* <li className="icon-list-item mt-3">
                                                <h6 className='linkfronnavbar'>SECP</h6>

                                                </li>
                                                <li className="icon-list-item mt-3">
                                                    <h6 className='linkfronnavbar'>FBR</h6>

                                                </li>
                                                <li className="icon-list-item mt-3">
                                                    <h6 className='linkfronnavbar'>اردو </h6>

                                                </li>
                                                <li className="icon-list-item mt-3">
                                                    <h6 className='linkfronnavbar'>中文服务 </h6>

                                                </li> */}
                                        </div>

                                    </ul></div>
                            </div>

                        </div>

                        <div className="col-lg-3 col-md-6 ">
                            <div className="lastcolfooter">
                                <h3>Saad Tax Associates Online</h3>
                                <p>We Provide Online Tax Consultancy Service in Pakistan.</p>
                                <p>We are Top Rated Tax Advisor in Lahore. Client satisfaction is always our priority.</p>
                                <ReactWhatsapp number="+92 3143081490" className="Reactwhatshere" message="I want to book an appointment" >
                                    <button className=" btn button-md dark-button js-scroll-trigger footerbtnt" > <i class="fab fa-whatsapp "></i> Send a Whatsapp Message</button>
                                </ReactWhatsapp>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>;
}
