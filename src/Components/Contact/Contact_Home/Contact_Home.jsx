import React from 'react';
import './Contact_Home.css';
import ReactWhatsapp from 'react-whatsapp';


export default function Contact_Home() {
  return <div>
    <div className="contact_bghere">
      <div class="background_overlayContact"></div>

      <div class="Contact_MainheadingHome">
        <h1 class="">
          <span >Contact Us</span>
        </h1>
      </div>

      <a className="" target="_blank" href="https://api.whatsapp.com/send?phone=+92 3143081490" target="_blank" rel="noopener">
        <div className="Phonerininghere">
          <div className="phonering-alo-phone phonering-alo-green phonering-alo-show " >
            <div className="phonering-alo-ph-circle"></div>
            <div className="phonering-alo-ph-circle-fill"></div>
            <ReactWhatsapp number="+92 3143081490" className="Reactwhatshere" message="I want to book an appointment" > <a target="_blank" href="#" className="pps-btn-img" title="Liên hệ">
              <div className="phonering-alo-ph-img-circle"></div>
            </a>
            </ReactWhatsapp>
          </div>

        </div>

      </a>

    </div>
  </div>;
}
