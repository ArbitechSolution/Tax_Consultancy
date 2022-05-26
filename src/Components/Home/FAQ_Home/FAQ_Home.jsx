import React, { useEffect } from 'react';
import './Faq_home.css'
import $ from 'jquery'
export default function FAQ_Home() {

    useEffect(() => {
        $(".expand-icon").click(function (e) {
            $(this).toggleClass("expanded");
        });

    }, [$]);





    return <div>

        <div className="FAQHere">
            <div className="container">

                <div className="maindivhereFaq">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="headingcol1faq">
                                <h2>FAQs</h2>
                            </div>
                            {/* <div class="expand-icon">
                            </div> */}

                            <div className="card maincardfaq">
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header  " id="headingOne">
                                            <h4 class="accordion-button active" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                What business structures can be registered in Pakistan?
                                            </h4>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">



                                                Following types of business structures that you can adopt in Pakistan: <strong>Sole Proprietorships, Partnerships, Limited Liability Partnerships</strong>  (LLP) and <strong>Limited Companies </strong> (also known as Corporations or sometimes as LLC in other countries). Each type is best for a specific purpose or situation, and differs in characteristics
                                                when considering taxes, liability, and the ability to control the profits and losses of the business.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingTwo">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                How long will it take to register a Company?
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                The time depends on the companies registrar office (known as SECP in Pakistan) and on how fast the client can provide us the required documentation. Under normal circumstances, for small companies the time required to register a company is about <strong>6 – 8 working days</strong> .
                                            </div>
                                        </div>
                                    </div>


                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingThree">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                How can I search for company names in Pakistan?
                                            </button>
                                        </h2>
                                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                Before incorporating a company, we must first ensure that the <strong>name you want to register is not already being used by another company.</strong>  You can check name availability by <a href="#">sending us a message here.</a>  We will apply name availability on your behalf.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingFoure">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFoure" aria-expanded="false" aria-controls="collapseThree">
                                                Which cities do you provide tax services in?
                                            </button>
                                        </h2>
                                        <div id="collapseFoure" class="accordion-collapse collapse" aria-labelledby="headingFoure" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                Our Clients come from all major cities of Pakistan.
                                                <ul>
                                                    <li><a href="#">Karachi</a></li>
                                                    <li><a href="#">Lahore</a></li>
                                                    <li><a href="#">Karachi</a></li>
                                                    <li><a href="#">Islamabad</a></li>
                                                    <li><a href="#">Sialkot</a></li>
                                                    <li><a href="#">Gujranwala</a></li>
                                                    <li><a href="#">Faisalabad</a></li>






                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>


                        </div>


                        <div className="col-lg-6">
                            <div className="innercol2faq mt-5">

                                <div className="card maincardfaq">
                                    <div className="headingfaqcol2here">
                                        <h2>We are <span className='spantextcolor'> <strong className='topstrong'>top</strong>-rated </span> tax advisor in Lahore.</h2>
                                    </div>

                                    <div className="row mt-4">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="imgcolinner1">
                                                <img src="abhconsultants-pk-secp-logo.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="imgcolinner1">
                                                <img src="abhconsultants-pk-fbr-logo.png" alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bootpmdivinimgcard mt-4">
                                        <p>You can provide us data from any City of Pakistan and we can file your Tax Returns. We are registered practitioners with
                                         FBR and SECP and can guide our clients in right direction.</p>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                <div className="maindivbootomdivtext">
                    <h2>Client <span className='headingspancolor'>satisfaction</span>  is always a priority at Saad Tax Associate0s...</h2>
                    <p>Saad Tax Associate0s can help you with Tax Advisory and Compliance so you can get started sooner. Get in touch today to get a personalized solution for your business.</p>
                </div>

               







            </div>
        </div>




    </div>;
}
