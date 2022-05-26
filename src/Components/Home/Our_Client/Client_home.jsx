import React from 'react';
import './Clientsstyle.css'

export default function Client_home() {
    return <div>

        <div className="OurClientsbg">
            <div className="container">
                <div className="Heading_sectionhere">

                    <div className="innermaindiv">

                        <div className="innerheadinding">
                            <h2>What our Clients Say?</h2>
                        </div>
                    </div>
                    <p>Our 5 Star Rating Speaks for Itself <i class="fas fa-star staricon"></i> <i class="fas fa-star staricon"></i> <i class="fas fa-star staricon"></i> <i class="fas fa-star staricon"></i> <i class="fas fa-star staricon"></i></p>
                </div>



                {/* ------------------------------------Slider--------------------------- */}


                <div className="mainsliderhere">
                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div className="innerboxher">
                                    <div class="arrow_box">
                                        <h4 class="logo">Super impressed by how knowledgeable their team is, Excellent service. Very prompt,
                                            convenient and super efficient. Strongly recommended</h4>
                                    </div>

                                    <h2>Abdul Rehman</h2>
                                    <p>Lahore</p>

                                </div>


                            </div>
                            <div class="carousel-item">
                                <div className="innerboxher">
                                    <div class="arrow_box">
                                        <h4 class="logo">Super impressed by how knowledgeable their team is, Excellent service. Very prompt,
                                            convenient and super efficient. Strongly recommended</h4>
                                    </div>

                                    <h2>Umer Farooq</h2>
                                    <p>Lahore</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className="innerboxher">
                                    <div class="arrow_box">
                                        <h4 class="logo">Super impressed by how knowledgeable their team is, Excellent service. Very prompt,
                                            convenient and super efficient. Strongly recommended</h4>
                                    </div>

                                    <h2>Muzammil </h2>
                                    <p>Lahore</p>

                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev controlherearrow" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next controlherearrow" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>






                {/* -----------------------Why ABH Tax Consultants?------------------------------ */}

                <div className="HeadingtextABH">
                    <h2>Why Saad Tax  <span className='headingspancolor'>Associates?</span> </h2>

                    <div className="pagraP">
                        <p>We believe professional advice should be accessible and affordable for everyone. Our team consists of experienced Tax and Management Professionals with more than 15 years of experience dealing all kinds of enterprises and government authorities including SECP and FBR. If you are a business owner or an employed individual, We can help you plan your taxes BETTER.</p>
                        <p>Filing your Tax Returns with inexperienced consultants can end up costing much more in the long term.</p>

                    </div>

                </div>











            </div>
        </div>
    </div>;
}
