import logo from './logo.svg';
import './App.css';


import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Components/Home/Header/Header';

import Homemain from './Components/Homemain';
import Services from './Components/Services';
import Footerhere from './Components/Home/Footer_Home/Footerhere';
import Upadate from './Components/Upadate';
import About from './Components/About';
import Contact from './Components/Contact';
import NTN from './Components/Home/Services_Pages_here/NTN_Page/NTN';
import C_Registration from './Components/Home/Services_Pages_here/Company_Registration/C_Registration';
import Sale_Tax_Return from './Components/Home/Services_Pages_here/Sale_Tax_Return/Sale_Tax_Return';
import Active_Tax from './Components/Home/Services_Pages_here/Active_Tax/Active_Tax';
import Camber_of_Commerce from './Components/Home/Services_Pages_here/Camber_of_Commerce/Camber_of_Commerce';
import Trademark_Registeaion from './Components/Home/Services_Pages_here/Trademark_Registeaion/Trademark_Registeaion';
import WebcoRegistration from './Components/Home/Services_Pages_here/WebcoRegistration/WebcoRegistration';
import SalaryTaxCalculator from './Components/Home/SalaryTaxCalculator/SalaryTaxCalculator';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />


        <Route exact path="/" component={Homemain}></Route>
        <Route exact path="/services" component={Services}></Route>
        <Route exact path="/update" component={Upadate}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/salarytaxcalculator" component={SalaryTaxCalculator}></Route>
        {/* <Route exact path="/contact" component={Contact}></Route> */}





        <Route exact path="/NTN" component={NTN}></Route>
        <Route exact path="/C_Registration" component={C_Registration}></Route>
        <Route exact path="/Sale_Tax_Return" component={Sale_Tax_Return}></Route>
        <Route exact path="/Active_Tax" component={Active_Tax}></Route>
        <Route exact path="/Camber_of_Commerce" component={Camber_of_Commerce}></Route>
        <Route exact path="/Trademark_Registeaion" component={Trademark_Registeaion}></Route>
        <Route exact path="/WebcoRegistration" component={WebcoRegistration}></Route>










        <Footerhere />



      </Router>

    </div>
  );
}

export default App;
