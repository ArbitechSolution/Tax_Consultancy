import React from 'react'
import './Active_Tax.css'
import { Link } from 'react-router-dom';


export default function Active_Tax() {
    return (
        <div>

            <div className="Aboutbghere5">
                <div className="sec-overlayabouthere"></div>
                <div className="container overlayabout">

                </div>





            </div>

            <div className="maindiv_NTN">
                <div className="container"><div className="left-holder slider-contentaboutpage ">


                    <h1 className="text-center Aboutpageheadinghere mt-5"><span className='headingspancolor'>Active Tax Filer</span></h1>
                    <div className="aboutdescription2">

                        <p className=''>The Active Taxpayer List (ATL) is the online record of persons who are regular income tax filler in previous years.	Active Taxpayer List is published every financial year on the 1st March and is valid up to the last day of February of the next financial year. For example, Active Taxpayer List for Tax year 2020 was published on 1st March 2021 and will be valid till 28th February 2022. Similarly, Active Taxpayer List for Tax year 2021 will be published on 1st March 2022 and will be valid till 28th February 2023.
                            The ATL is updated on every Monday on the Federal Board of Revenue (FBR) website.
                        </p>

                    </div>





                </div>

                    <div className="Text_More_here mt-5">
                        <h2>How to Check Active Status? </h2>

                        <p className='aboutdescription25'>
                            The status of Active Taxpayer can be checked in three different ways: <br />
                            – Through online verification by clicking the following Link:
                            <a target="_blank" href="https://e.fbr.gov.pk/esbn/Service.aspx?PID=vOTZ2Vns4+Nc01ENJMCbAQ==">https://e.fbr.gov.pk/esbn/Service.aspx?PID=vOTZ2Vns4+Nc01ENJMCbAQ==</a> <br />
                            – Through SMS by sending 13 digit CNIC (7 digit NTN in case of a company) number to 9966<br />
                            – You can also download the list of Active Taxpayer List from the below Link: <a target="_blank" href="https://www.fbr.gov.pk/Downloads/?id=3901&Type=Docs">https://www.fbr.gov.pk/Downloads/?id=3901&Type=Docs</a> <br />
                            You can always use our services for inclusion in ATL by <Link to="/contact"> <span>Contact Us.</span> </Link>

                        </p>

                    </div>



                    <div className="Text_More_here mt-5">
                        <h2>Benefits</h2>
                        <ol className=' aboutdescription25'>
                            <li>Persons appearing on Active Taxpayer List (ATL) have to bear almost half of the withholding tax as compare to inactive taxpayers</li>
                            <li>5.5% tax on import of Raw Material have to pay by Persons appearing on ATL as compare to 11% payable by an inactive taxpayer</li>
                            <li>6% tax on Commercial imports have to pay by persons appearing on ATL as compare to 12% payable by an inactive taxpayer</li>
                            <li>Persons appearing on ATL have to pay 15% tax on Dividend as compare to 30% payable by an inactive taxpayer</li>
                            <li>Persons appearing on ATL have to pay a 10% tax on profit from a bank and saving schemes up to Rs. 500,000/- and 15% above Rs. 500,000/- whereas inactive taxpayer has to pay double.</li>
                            <li>4.5% tax shall be withheld on sale of goods by the person appearing on Active Taxpayer List (ATL) except companies whereas 9% shall be withheld from inactive taxpayers.</li>
                            <li>10% tax shall be withheld on the provision of services by the person appearing on Active Taxpayer List except for companies whereas 20% shall be withheld from inactive taxpayers.</li>
                            <li>7.5% tax shall be withheld on the execution of contracts by the person appearing on Active Taxpayer List except for companies whereas 15% shall be withheld from inactive taxpayers.</li>
                            <li>15% tax on prize money of prize bonds need to pay by persons in ATL as compare to 30% payable by an inactive taxpayer </li>
                            <li>12% tax on commission payable by persons in ATL as compare to 24% payable by an inactive taxpayer </li>
                            <li>Persons appearing on the Active Taxpayer List have to pay the Annual token fee for a vehicle from Rs. 800/- to Rs. 10,000/- as compared to an inactive taxpayer who has to pay from Rs. 1600/- to Rs. 20,000/- </li>

                            <li>Rs. 7,500/- to Rs. 250,000/- tax shall be withheld on vehicle registration from the person appearing on Active Taxpayer List whereas Rs. 15,000/- to Rs. 500,000/- shall be withheld from inactive taxpayers. </li>

                            <li>No tax payable on cash withdrawal by the person appearing on ATL whereas 0.6% tax payable on cash withdrawal of more than Rs. 50,000/- from banks by inactive taxpayers. </li>
                            <li>No tax payable on bank transactions (cross cheque, Pay Order, demand draft, etc.) by the person appearing on ATL whereas 0.6% tax payable on bank transactions by inactive taxpayers. </li>
                            <li>1% tax payable on the purchase of property by the person appearing on ATL whereas 2% tax payable on the purchase of property by inactive taxpayers. </li>
                            <li>10% tax payable on sale by auction by the person appearing on ATL whereas 20% tax payable on by inactive taxpayers. </li>
                            <li>10% tax deduction for payment against advertisement to non-resident persons by the person appearing on ATL whereas 20% tax deduction from inactive taxpayers. </li>
                        </ol>

                    </div>








                </div>
            </div>


        </div>
    )
}
