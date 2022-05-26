import React from 'react';
import './Tax_home.css'
import {Link} from 'react-router-dom'

export default function Text_update_home() {
    return <div>

        <div className="tax_updatebg">
            <div className="container">
                <div className="btntextupdatefaq">
                  <Link to="/update"  onClick={()=>    window.scrollTo(0,0)}> 
                  <button className=' btn btntexfaq'>Tax Updates</button>
                  </Link>  
                </div>

                <div className="row ">
                    <div className="col-lg-4 mt-5">
                        <div className="carddivcol1tax">
                            <div className="card maindivcardtax">

                                <div className="innercardtextheading">
                                    <h3>FBR Extends Date for Filing Tax Returns by 15 days </h3>
                                    <p>The Federal Board of Revenue (FBR) has finally extended the date for filing income tax returns for tax year 2021 by 15 days upto 14th</p>


                                </div>
                                <a href="#" className='text-leftaaa' >Read More » </a>

                                <div className="card-footer">
                                    <p>October 1, 2021</p>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 mt-5">
                        <div className="carddivcol1tax">
                            <div className="card maindivcardtax">

                                <div className="innercardtextheading">
                                    <h3>List of documents needs to file Income Tax Return for tax year 2021 </h3>
                                    <p>Following list of documents is needed for salaried person to accurately file Income Tax Return for FY 21. Last date is 30th September 2021. Salary</p>


                                </div>
                                <a href="#" className='text-leftaaa' >Read More » </a>

                                <div className="card-footer">
                                    <p>September 28, 2021</p>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 mt-5">
                        <div className="carddivcol1tax">
                            <div className="card maindivcardtax">

                                <div className="innercardtextheading">
                                    <h3>ICCI announces special discounts for members</h3>
                                    <p>ICCI Members Discounts Islamabad Chamber of Commerce & Industry (ICCI) has taken discounts for its members from hospitals, laboratories, airlines, business outlets, hotels, schools and</p>


                                </div>
                                <a href="#" className='text-leftaaa' >Read More » </a>

                                <div className="card-footer">
                                    <p>June 15, 2021</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>



    </div>;
}
