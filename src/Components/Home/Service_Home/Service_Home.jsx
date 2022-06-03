import React from 'react';
import './Service_home.css'
import ReactWhatsapp from 'react-whatsapp';
import NTN from '../../Home/Services_Pages_here/NTN_Page/NTN'
import { Link } from 'react-router-dom';



export default function Service_Home() {
    return <div>

        <div className="section-bloc">
            <div className="container mt-5">
                <div className="section-heading center-holder">


                    <h2>Our Services </h2>

                    <p className='text-center'>We’re a tax preparation company in Lahore specialize in providing tax planning/tax filing, firm registration, and financial services. We are working with Individuals, Businesses, Charities in Pakistan and offering them professional tax services with their unique tax filing requirements. We’re year-round full-service tax consultants located in Lahore to help you with your tax planning needs. </p>
                    {/* <h4>Our Process To Successful Blockchain Solutions</h4> */}
                    <div className="row mt-5">
                        <div className="col-lg-4  col-lg-4 col-md-4  col-sm-4">
                            <div className="work-inner-box ">
                                <img src="ntn2.png" alt="" width="100%" />

                                <h4 className='ntnregistration'>NTN/GST REGISTRATION</h4>
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
                                <p id='CompanysetSize'>Are you the One who is looking to incorporate your Company in Pakistan? We at Tax Care provides our prestige clients with precise knowledge, how to incorporate and operate a business in Pakistan.

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
                                <p id='setSize'>This is essential for all Persons to file Income Tax Return that comes under the category defined by Income Tax Ordinance, 2001.  There are penalties for Non Filling of Income Tax Return in Pakistan.</p>
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
                                <p>
                                    The Active Taxpayer List (ATL) is the online record of persons who are regular income tax filler in previous years. Active Taxpayer List is published every financial year on the 1st March and is valid up to the last day of February of the next financial year.
                                </p>
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
                                <p>
                                    A chamber of commerce is an association or network of businesspeople designed to promote and protect the interests of its members. A chamber of commerce is often made up of a group of business owners that share a locale
                                </p>
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
                                <p id='TrademarksetSize'>For every Company in Pakistan, it is necessary to ensure the intellectual rights by registering the trademark. We offer the best trademark registration services to its customers.</p>

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
                                <p>
                                    WeBOC registration is compulsory to start import and export business in Pakistan. Since 2011, has been playing a huge role in facilitating the traders, custom officers, and agents. For the last 8 years WeBOC has contributed to making the filing processes simpler, GD clearance system faster, and container tracking easier.
                                </p>
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
                                <h4 className='mt-5'>Accounting & Bookkeeping Services in Pakistan</h4>
                                <p>Bookkeeping is a very vast project in the overall accounting services in any business. The implementation of a fully Computerized Accounting System can take months that can further be extended on the basis of degree  </p>

                                {/* <button className='btn bt-lg btnlearn'>Learn More</button> */}

                                <div className="card-footer">
                                    <Link to='/Accounting_Book_Keeping'>
                                        <button className='btn bt-lg btnlearn2'>Learn More</button>
                                    </Link>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4    col-sm-4">
                            <div className="card work-inner-box ">
                                <img src="pra.jpg" alt="" width="100%" />
                                <h4 className='mt-5'>Punjab Revenue Authority (PRA)</h4>
                                <p>Punjab Revenue Authority also referred to as PRA is a provincial authority of Punjab established by virtue of Punjab Revenue Authority Act, 2012. Purpose of PRA is to collect sales tax on services or service tax in Punjab region.   </p>


                                <div className="card-footer">
                                    <Link to='/Punjab_Revenue'>
                                        <button className='btn bt-lg btnlearn2'>Learn More</button>
                                    </Link>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>;
}
