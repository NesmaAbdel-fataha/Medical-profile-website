import React from 'react';
import Banner from '../components/banner/Banner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGlobe, faLandmark, faMap, faSoap } from '@fortawesome/free-solid-svg-icons';
import "./Contact.css";
import { faDeaf } from '@fortawesome/free-solid-svg-icons/faDeaf';
import FormContact from './FormContact';


const Contact = ()=>{
return(
<>

<Banner title="Contact" smtitle="contact"/>
<section className='contact-us'>
    
    <div className='container'>
        <div className='row'>
            <div className='col-lg-6 col-md-6'>
             <FormContact/>

            </div>

            <div className='col-lg-6 col-md-6'>
           <div className='side'>
            <div className='overlay'>
                <h3>Contact Us For Any Informations</h3>
                <li><FontAwesomeIcon icon={faMap}/>Location</li>
                <hr/>
                <p>2005 Stokes Isle Apt. Venaville 10010, USA</p>
                <li><FontAwesomeIcon icon={faEnvelope}/>Email & Phone</li>
                <hr/>
                  <p>ewaoselaran412@gmail.com</p>
                  <p>010991578939</p>

                  <li className='follow' ><FontAwesomeIcon  icon={faGlobe}/>Follow Us</li>
                  <ul>
                    <li><FontAwesomeIcon icon={faSoap}/></li>
                    <li><FontAwesomeIcon icon={faLandmark}/></li>
                     <li><FontAwesomeIcon icon={faDeaf}/></li>
                  </ul>

                <hr/>
            </div>
           </div>


             </div>


        </div>
    </div>
</section>

</>

)

}
export default Contact;