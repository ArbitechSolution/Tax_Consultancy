import React from 'react';
import LatestUpdate from '../LatestTaxUpdates/LatestUpdate';
import './Overviewstyle.css';
import { useGoogleMaps } from "react-hook-google-maps";
import WhatsAppWidget from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'
import { render } from 'react-dom';
import ReactWhatsapp from 'react-whatsapp';

export default function Overview_About() {
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


  
    <div className="aboutbgoverview">
      <div className="container">


        <div className="row ">
        <div className="left-holder slider-contentaboutpage ">


                    <h1 className="text-center Aboutpageheadinghere"><span className='headingspancolor'>About Us</span></h1>
                    <div className="aboutdescription2">

                        <p className="Text_here_p">
                        With utmost emphasis on the ethics of the profession and code of conduct, Saad Tax Associates is a firm engaged in offering a comprehensive range of management services to its clients. Established in 2009, we are a team of professionals & competent staff members. We provide on-time and effective business management services to our clients.
                        </p>
                    
                    </div>





                </div>
          <div className="col-lg-6">




          <div className="colimgdiv3">
              <div class="boxtexthere2">
                <h1 className='text-white'>Our Mission</h1>
                <p class="Seconddiv_text2">We always try to maintain our commitment towards professionalism which makes our relationship strong with our prestigious clients. Our Legal Attorneys attempt to aware and understand our client’s business condition and continuously provide the highest quality information, services, and products to help them in reaching their goals.</p>

              </div>
            </div>





            {/*<div className="innerdivcol1overview">

              <div class="Heading_About_overview">
                <h3 class="">Growing Businesses Thrive with Us.</h3>
              </div>
              <div class="Seconddivheadinghere">
                <h1 class=""><span className='colorheadinghere'>Services Overview</span> </h1>
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

              <div className="linaboutpager">

              </div>
  </div>*/}
          </div>

          <div className="col-lg-6">
            
            <div className="colimgdiv3">
              <div class="Seconddivtext2">
                <h1 className='text-white'>Our Strengths</h1>

                <p class="box_texthere2">Tax Care Lawyers or Attorneys are our strength due to belief in the quality of work. Our wisdom of strength and specialty in a particular field is united with a scope of experience and acute focus. We are thankful to God for providing expertise in diversified service lines. Our Lawyers in Lahore works perfectly with international lawyers or consulting Legal firms to permit a single point of contact with their client to provide justice and reliability in our service.</p>

              </div>
            </div>
            {/* <div class="Workheadinghere">
              <h1 class="">We work alongside you!</h1>
            </div>

            <div class="WorkTexthereabout">
              <strong>
                <a href="#" className='colornameabout' >Saad Tax Associates</a> was established over a decade ago. Today, we are Lahore leading full service Tax Advisor and advisory firm for startups and existing businesses. We provide Business Advisory, Business Registration and Start up services, Company Formation/Incorporation, Company Registration in Pakistan, NGO/NPO establishment, Audit and Taxation services to NGOs and individuals—all under one roof.</strong><strong>We are Located</strong> <b>at </b>
              <a href="https://www.google.com/maps/place/Jamia+Masjid+Hajveri/@31.5075753,74.2513584,15z/data=!4m5!3m4!1s0x0:0x770ab816f83d7bad!8m2!3d31.507553!4d74.2513592" target="_blank" rel="noopener"> D Block, Mear Hajveri Mosque Main Maraghzar Road Lahore</a>
            </div>

            <div className="btndivhereabout">
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

  </div> */}

          </div>





        </div>



        {/*<div className="row mt-5">
          <div className="col-lg-8">
            <div className="innerdiv_about">
              <div class="Seconddivheadinghere text-left">
                <span className='colorheadinghere fs-1 '>
                  <b><strong> Ahsan Ul Haq</strong> </b></span>
              </div>
              <div class="WorkTexthereabout">

                <a href="#" className='colornameabout fs-4' ><strong>Ahsan</strong>  </a> is the Co-Founder & CEO of Saad Tax Associates. He started his professional career with Rehman Mirza & Company and excelled with diversified experience in advisory, risk management and assurance services. He later joined Akbari Groups in 2013. He has proven record as a lead & has worked with Arbitech Solutions, BWM, Daewoo Motors, and Spectrum Systems.  Ahsan holds a Master's degree in Business Administration from University of Punjab.

              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="img_div_ahsan">
              <img src="Ahsan.jpg" alt="" width="60%" className='img_her_Ahsan' />
            </div>
          </div>
        </div>
  */}


        <div className="row mt-5">
          <div className="col-lg-6">
            <div className="img_div_ahsan2">
              {/*    <img src="Awais.png" alt="" width="60%" className='img_her_Ahsan' />*/}

              <div className="work-inner-box2 ">
                <img src="  Ahsan.jpg" alt="" width="180px" className='img_her_Ahsan' />

                <div class="Seconddivheadinghere text-left">
                  <span className='colorheadinghere fs-2 '>
                    <b><strong> Ahsan Ul Haq</strong> </b></span>
                </div>
                <a href="#" className='colornameabout fs-4' ><strong>Ahsan</strong>  </a> is the Co-Founder & CEO of Saad Tax Associates. He started his professional career with Rehman Mirza & Company and excelled with diversified experience in advisory, risk management and assurance services. He later joined Akbari Groups in 2013. He has proven record as a lead & has worked with Arbitech Solutions, BWM, Daewoo Motors, and Spectrum Systems.  Ahsan holds a Master's degree in Business Administration from University of Punjab.


              </div>

            </div>
          </div>
          <div className="col-lg-6">
            <div className="img_div_ahsan2">
              {/*    <img src="Awais.png" alt="" width="60%" className='img_her_Ahsan' />*/}

              <div className="work-inner-box2 ">
                <img src="Awais.png" alt="" width="180px" className='img_her_Ahsan' />

                <div class="Seconddivheadinghere text-left">
                  <span className='colorheadinghere fs-2'>
                    <b><strong> Muhammad awais aslam</strong> </b></span>
                </div>
                <a href="#" className='colornameabout fs-4' ><strong>Awais </strong>  </a> is also the Co-Founder of Saad Tax Associates. A Tax      consultant by profession, having more than 15 years of experience around the globe. Mr. Awais has been advising most of the top companies of Pakistan, both private & public sector, and continues to serve most distinguished clients.


              </div>

            </div>
          </div>








        </div>

        <div className="MapdivAbouthere">
          <div className="Firstbtnhere">
            <button className='btn btn-lg Firstmapbtnhere' >STA</button>
          </div>

          <div class="TextUpereMapabout mt-4">
            <h2 class="elementor-heading-title elementor-size-default">
              <span >Our Office Address</span>
            </h2>
          </div>

          <div ref={ref} style={{ width: "100%", height: 400 }} />
        </div>

      </div>
    </div >

  </div >;
}
