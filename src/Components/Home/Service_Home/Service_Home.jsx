import React from 'react';
import './Service_home.css'
import ReactWhatsapp from 'react-whatsapp';
import NTN from '../../Home/Services_Pages_here/NTN_Page/NTN'
import { Link } from 'react-router-dom';



export default function Service_Home() {
    return <div>

        <div className="section-block">
            <div className="container">
                <div className="section-heading center-holder">


                    <h2>Our Services </h2>

                    <p className='text-center'>We’re a tax preparation company in Lahore specialize in providing tax planning/tax filing, firm registration, and financial services. We are working with Individuals, Businesses, Charities in Pakistan and offering them professional tax services with their unique tax filing requirements. We’re year-round full-service tax consultants located in Lahore to help you with your tax planning needs. </p>
                    {/* <h4>Our Process To Successful Blockchain Solutions</h4> */}
                    <div className="row mt-5">
                        <div className="col-lg-4  col-lg-4 col-md-4  col-sm-4">
                            <div className="work-inner-box ">
                                <img src="ntn2.png" alt="" width="100%" />

                                <h4>NTN/GST REGISTRATION</h4>
                                <p>National Tax Number (NTN)
                                    National Tax Number, commonly known as NTN is a unique ID issued by Federal Board of Revenue (FBR) –
                                    the apex tax regulatory authority in Pakistan, to verify the registration of business.
                                    Individuals and organisations that are liable to pay income tax must have a National Tax Number (NTN)</p>

                                <div className="card-footer mt-1">
                                    <Link to="/NTN">

                                        <button className='btn bt-lg btnlearn2'>Learn More</button>
                                    </Link>

                                </div>





                            </div>
                        </div>
                        <div className="col-lg-4  col-lg-4 col-md-4  col-sm-4">
                            <div className="card work-inner-box ">
                                <img src="Business Reg.jpg" alt="" width="100%" />
                                <h4>Company REGISTRATION
                                </h4>
                                <p>Are you the One who is looking to incorporate your Company in Pakistan? We at Tax Care provides our prestige clients with precise knowledge, how to incorporate and operate a business in Pakistan.

                                </p>

                                <div className="card-footer mt-5">
                                    <Link to="/C_Registration">

                                        <button className='btn bt-lg btnlearn2'>Learn More</button>
                                    </Link>
                                </div>


                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4    col-sm-4">
                            <div className="card work-inner-box ">
                                <img src="tax Return.jpg" alt="" width="100%" />
                                <h4 className='mt-5'>Income / SALES TAX Return  </h4>
                                <p>This is essential for all Persons to file Income Tax Return that comes under the category defined by Income Tax Ordinance, 2001.  There are penalties for Non Filling of Income Tax Return in Pakistan.</p>
                                <div className="card-footer mt-5">
                                    <br />
                                    <Link to="/Sale_Tax_Return">
                                        <button className='btn bt-lg btnlearn2 '>Learn More</button>
                                    </Link>
                                </div>
                            </div>
                        </div>



                    </div>
                    <div className="row">

                        <div className="col-lg-4 col-md-4    col-sm-4">
                            <div className="card work-inner-box ">
                                <img src="active tax.jpg" alt="" width="100%" />
                                <h4 className='mt-5'>Active TAX Filer  </h4>
                                <p>Appeals are normally filed on the basis of differences between Taxpayer and Tax Departments which arise because of mismatch of taxable Income and Tax liability thereon as well as implication of default surcharge and penalties.</p>

                                <div className="card-footer mt-2">
                                    <Link to="Active_Tax">
                                        <button className='btn bt-lg btnlearn2'>Learn More</button>
                                    </Link>
                                </div>


                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4    col-sm-4">
                            <div className="card work-inner-box ">
                                <img src="lcci.jpg" alt="" width="100%" />
                                <h4 className='mt-5'>Camber of Commerce  </h4>
                                <p>You can hire us on retainer basis so we can help you file sales tax and conform to other obligations on monthly basis. Our Retainer services start at Rs. 20,000/Month</p>

                                <div className="card-footer">
                                    <Link to="/Camber_of_Commerce">
                                        <button className='btn bt-lg btnlearn2'>Learn More</button>
                                    </Link>
                                </div>


                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4    col-sm-4">
                            <div className="card work-inner-box ">
                                <img src="tm Regis.jpg" alt="" width="100%" />
                                <h4 className='mt-5'>Trademark Registeaion  </h4>
                                <p>For every Company in Pakistan, it is necessary to ensure the intellectual rights by registering the trademark. We offer the best trademark registration services to its customers.</p>

                                <div className="card-footer">
                                    <Link to="/Trademark_Registeaion">
                                        <button className='btn bt-lg btnlearn2'>Learn More</button>
                                    </Link>
                                </div>


                            </div>
                        </div>

                    </div>


                    <div className="row">

                        <div className="col-lg-4 col-md-4    col-sm-4">
                            <div className="card work-inner-box ">
                                <img src="weboc.jpg" alt="" width="100%" />
                                <h4 className='mt-5'>Weboc Registration </h4>
                                <p>These are lawful authority to manage the Sales Tax on Services in Pakistan. Service Tax is indirect taxes which apply to services specified in schedule II on “taxable service. The person who offers the taxable service is responsible for paying the service tax to these Authorities.</p>

                                {/* <button className='btn bt-lg btnlearn'>Learn More</button> */}
                                {/* <div className="card-footer">

                                    <button className='btn bt-lg btnlearn2'>Learn More</button>
                                </div> */}
                                <Link to="WebcoRegistration">
                                    <button className='btn bt-lg btnlearn2'>Learn More</button>
                                </Link>


                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4    col-sm-4">
                            <div className=" card work-inner-box ">
                                <img src="accounting.jpg" alt="" width="100%" />
                                <h4 className='mt-5'>Accounting and Bookkeeping </h4>
                                <p>Drafting of Legal contracts and agreements is significant for anyone wishes to start the new engagements and enter into a new contract with another party. All contracts go through a negotiation phase whereby the parties meet and discuss the terms.</p>

                                {/* <button className='btn bt-lg btnlearn'>Learn More</button> */}

                                <div className="card-footer">

                                    <button className='btn bt-lg btnlearn2'>Learn More</button>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4    col-sm-4">
                            <div className="card work-inner-box ">
                                <img src="pra.jpg" alt="" width="100%" />
                                <h4 className='mt-5'>PRA,SBR BRB, KPRA </h4>
                                <p>Drafting of Legal contracts and agreements is significant for anyone wishes to start the new engagements and enter into a new contract with another party. All contracts go through a negotiation phase whereby the parties meet and discuss the terms. </p>


                                <div className="card-footer">

                                    <button className='btn bt-lg btnlearn2'>Learn More</button>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>;
}