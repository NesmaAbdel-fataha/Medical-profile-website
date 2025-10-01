import React from "react";
import footerlogo from '../../assets/images/health.png';
import '../../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import facebook from '../../assets/images/facebook.png';
import insta from '../../assets/images/insta.png';
import watsapp from '../../assets/images/watsap.png';
import twiter from '../../assets/images/twitr.png';

const Footer = ()=>{

    return (

<footer>

<div className="container">
<div className="row">
    <div className="col-md-3 col-sm-6">
<img src={footerlogo} className="logo"/>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
sed minima similique excepturi quae in quia.
Doloremque ipsa cumque mollitia sequi accusantium non quis delectus culpa illo?</p>
<div className="footer-contact">
    <div className="footer-icon">
    <FontAwesomeIcon icon={faPhone}/>
    </div>
    <div className="footer-text">
        <h6>Contact Us</h6>
        <h4>+01 123 456 7890</h4>
    </div>
</div>

    </div>
    <div className="col-md-3 col-sm-6">
<h2>Quick Links</h2>
        <ul>
          
           <li><a href="#">About us</a></li> 
           <li><a href="#">Blog</a></li> 
           <li><a href="#">Booking</a></li> 
           <li><a href="#">Faq's</a></li> 
           <li><a href="#">Our team</a></li> 
           <li><a href="#">Services</a></li> 
          
          

        </ul>
    </div>
    <div className="col-md-3 col-sm-6">
    <h2>Our Services</h2>
        <ul>
           <li><a href="#">Dental care</a></li>
           <li><a href="#">Cardiac Clinic</a></li> 
           <li><a href="#">Massege Therapy</a></li> 
           <li><a href="#">Cardiology</a></li> 
           <li><a href="#">Precise Diagnosis</a></li> 
           <li><a href="#">Abmbulance Services</a></li> 
       
        </ul>
        
    </div>
    <div className="col-md-3 col-sm-6">
<h2>Subcribe</h2>
        <form>
            <input type="email" placeholder="Enter your email"/>
            <button>subcribe now</button>
        </form>
        <ul className="social">
            <li ><a href="#"><img className="social-icon"  src={facebook}/></a></li>
            <li><a href="#"><img className="social-icon" src={insta}/></a></li>
            <li><a href="#"><img className="social-icon" src={twiter}/></a></li>
            <li><a href="#"><img className="social-icon" src={watsapp}/></a></li>


        </ul>
    </div>
</div>

</div>
<hr/>
<div className="footer-copyright">

    <div className="container">
<div className="row">
    <div className="col-lg-12 col-md-12">
<span>Copyright © 2024 Design. All rights reserved.Devolped by konitiv & foStra
</span>
    </div>
</div>
    </div>
</div>

</footer>


    )
}
export default Footer;