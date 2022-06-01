import React, { useRef, useState } from 'react'
import './SalaryTaxCalculator.css'
export default function SalaryTaxCalculator() {
    let inputRef = useRef(null);
    let tax = '';
    let [num, setNum] = useState('0');
    let [MonthlyTax, setMonthlyTax] = useState('0');
    let [SalaryAfterTax, setSalaryAfterTax] = useState('0');
    // let [YearlyIncome, setYearlyIncome] = useState('0');
    // let [YearlyTax, setYearlyTax] = useState('0');


    // let total = num + inputRef;
    // let inputVal = inputRef.current.value;
    let handleChange = (e) => {
        setNum(e.target.value);
        console.log(inputRef.current.value);
        setMonthlyTax(e.target.value / 2);
        setSalaryAfterTax(e.target.value - (e.target.value / 2))


    }
    return (
        <div className='container-fluid'>
            <div className=" main">
                <div className="row d-flex justify-content-center">
                    <h1>Salary Tax Calculator</h1>

                    <div className="col-lg-12">
                        <input type="number" ref={inputRef} onChange={handleChange} placeholder='Your Monthly Salary' />
                        <div>Monthly Income</div>
                        <div>{num}</div>
                        <div className='mt-4'>Monthly Tax</div>
                        <div>{MonthlyTax}</div>
                        <div className='mt-4'>Salary After Tax</div>
                        <div>{SalaryAfterTax}</div>
                        {/* <div className='mt-4'>Yearly Income</div>
                        <div>0</div>
                        <div className='mt-4'>Yearly Tax</div>
                        <div className='mb-4'>0</div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
