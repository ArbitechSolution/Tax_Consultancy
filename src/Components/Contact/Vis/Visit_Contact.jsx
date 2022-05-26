import React from 'react';
import './VisitStyle.css'
import ReactWhatsapp from 'react-whatsapp';
import { useGoogleMaps } from "react-hook-google-maps";

export default function Visit_Contact() {
    const { ref, map, google } = useGoogleMaps(
        // Use your own API key, you can get one from Google (https://console.cloud.google.com/google/maps-apis/overview)
        "AIzaSyC4Z5Qz97EWcoCczNn2IcYvaYG0L9pe6Rk",
        // NOTE: even if you change options later
        {
            center: { lat: 0, lng: 0 },
            zoom: 3
        }
    );
    console.log(map); // instance of created Map object (https://developers.google.com/maps/documentation/javascript/reference/map)
    console.log(google); // google API object (easily get google.maps.LatLng or google.maps.Marker or any other Google Maps class)


    return <div>
        <div className="visitbgherecontact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div class="VisitsConatctHeading">
                            <h2 class="elementor-heading-title elementor-size-default">Visit our office or speak to a
                                <span > consultant.</span>
                            </h2>
                        </div>

                        <div className="linedownvisti">

                        </div>

                        <div className="btndivhereabout btninvisitshere">
                            <div class=" mt-5">
                                <a target="_blank" href="https://www.facebook.com/Taxreturninfo/" class="fbbtnhereabout" role="button">
                                    <span class="elementor-button-content-wrapper">
                                        <span class="elementor-button-icon elementor-align-icon-left">
                                            <i aria-hidden="true" class="fab fa-facebook-messenger"></i> </span>
                                        <span class="elementor-button-text">Facebook Message</span>
                                    </span>
                                </a>
                            </div>


                            <ReactWhatsapp number="+92 3143081490" className="Reactwhatshere" message="I want to book an appointment" ><div class=" mt-5">
                                <a target="_blank" href="#" class="Whatsappbtnabout" role="button">
                                    <span class="elementor-button-content-wrapper">
                                        <span class="elementor-button-icon elementor-align-icon-left">
                                            <i aria-hidden="true" class="fab fa-whatsapp"></i> </span>
                                        <span class="elementor-button-text">Send WhatsApp</span>
                                    </span>
                                </a></div></ReactWhatsapp>

                        </div>

                        <div class="Seconddivheadinghere">
                            <h1 class="ServicesOvere"><span className='colorheadinghere '>Services Overview</span> </h1>
                        </div>
                        <div className="innerdivcardbodyhome">
                            <ul class="uldivseconcolhere">

                                <li class="homecardli">
                                    <span class="iconhereAbout">
                                        <i aria-hidden="true" class="fas fa-check iconhoverhome"></i>
                                    </span>
                                    <span class="texthereAbout">Income/Sales Tax Solutions</span></li>
                                <li class="homecardli">
                                    <span class="iconhereAbout">
                                        <i aria-hidden="true" class="fas fa-check"></i> </span>
                                    <span class="texthereAbout">Company Registration</span></li>
                                <li class="homecardli">
                                    <span class="iconhereAbout">
                                        <i aria-hidden="true" class="fas fa-check"></i> </span>
                                    <span class="texthereAbout">WEBOC Registration</span></li>
                                <li class="homecardli">
                                    <span class="iconhereAbout">
                                        <i aria-hidden="true" class="fas fa-check"></i> </span>
                                    <span class="texthereAbout">Corporate (SECP) Services</span></li>
                                <li class="homecardli">
                                    <span class="iconhereAbout">
                                        <i aria-hidden="true" class="fas fa-check"></i> </span>
                                    <span class="texthereAbout">Monthly Tax Preparation (FBR)</span></li>
                                <li class="homecardli">
                                    <span class="iconhereAbout">
                                        <i aria-hidden="true" class="fas fa-check"></i> </span>
                                    <span class="texthereAbout">Internal Audits</span></li>
                                <li class="homecardli">
                                    <span class="iconhereAbout">
                                        <i aria-hidden="true" class="fas fa-check"></i> </span>
                                    <span class="texthereAbout">Compliance Check</span></li></ul>
                        </div>

                    </div>

                    <div className="col-lg-3">
                        <div className="Seconcoldivvisithere">

                            <a class="IconhereEmailandtelegram" href="#">
                                <i aria-hidden="true" class="fab fa-telegram-plane icontelegramhere"></i>
                            </a>

                            <div class="SeconcolinnerdivtextVisit">
                                <h3 class="elementor-icon-box-title">
                                    <a target="_blank" href="mailto:info@saadtax.com">
                                        Email Us at <span >info@saadtax.com</span><br />
                                    </a>
                                </h3>
                                <p class="elementor-icon-box-description">
                                    We get back to our clients within 24 hours.</p></div>
                        </div>


                        <div className="Socailmediaiconhereand">
                            <div class="elementor-icon-box-icon">
                                <span class="Diagramiconhere">
                                    <i aria-hidden="true" class="fas fa-project-diagram icontelegramhere"></i>
                                </span>
                            </div>


                            <h3 class="Diagramh3here">
                                <span>
                                    Follow Latest Tax Updates on our Social Media.
                                </span>
                            </h3>

                            <div class="Socialiconhereallicon">
                                <span class="elementor-grid-item">
                                    <a class="Firsticonfbhere" href="https://www.facebook.com/Taxreturninfo/" target="_blank">

                                        <i class="fab fa-facebook"></i> </a>
                                </span>
                                <span class="elementor-grid-item ms-3">
                                    <a class="TWIconhere" href="#" target="_blank" rel="noopener">

                                        <i class="fab fa-twitter"></i> </a>
                                </span>
                                <span class="elementor-grid-item ms-3">
                                    <ReactWhatsapp number="+92 3143081490" className="Reactwhatshere" message="I want to book an appointment" >
                                        <a class="WAIconhere" href="https://wa.me/923008061414?text=I%20want%20to%20book%20an%20appointment" target="_blank" rel="noopener">

                                            <i class="fab fa-whatsapp"></i>
                                        </a>
                                    </ReactWhatsapp>
                                </span></div>

                        </div>
                    </div>

                    <div className="col-lg-3" >
                        <div className="Thirdcolofficeaddresshere">
                            <div className="CallOfficehere">

                                <a class="Whatsappoffices" href="https://api.whatsapp.com/send?phone=+923008061414" target="_blank" rel="noopener">
                                    <i aria-hidden="true" class="fas fa-mobile-alt icontelegramhere"></i>
                                </a>


                                <h3 class="Callofficehereh3">
                                    <a href="https://api.whatsapp.com/send?phone=+923008061414" target="_blank" rel="noopener">
                                        Call Our Office </a>
                                </h3>
                                <p class="elementor-icon-box-description">
                                    Whatsapp or Mobile: +92 3143081490</p>


                            </div>

                        </div>



                        <div className="Thirdcolofficeaddresshere">
                            <div className="CallOfficehere">

                                <a class="Whatsappoffices" href="https://api.whatsapp.com/send?phone=+923008061414" target="_blank" rel="noopener">
                                    <i aria-hidden="true" class="fas fa-map-marker-alt icontelegramhere"></i>
                                </a>


                                <h3 class="Callofficehereh3">
                                    <a href="https://api.whatsapp.com/send?phone=+923008061414" target="_blank" rel="noopener">Stop By  </a>
                                </h3>
                                <p class="elementor-icon-box-description">D Block, Mear Hajveri Mosque Main Maraghzar Road Lahore, Pakistan.</p>


                            </div>

                        </div>



                    </div>
                </div>

                <div className="mapVitishere">

                    <div ref={ref} style={{ width: "100%", height: 400 }} />
                </div>
            </div>
        </div>

    </div>;
}
