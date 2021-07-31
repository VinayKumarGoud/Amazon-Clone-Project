import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className="footer">
            <div className="footer__top">
                <p>Back to top</p>
            </div>
            <div className="footer__links">
               <div className="footer__linkarea">
                   <span>Get to Know Us</span>
                   <p>About Us</p>
                   <p>Careers</p>
                   <p>Press Releases</p>
                   <p>Amazon Cares</p>
                   <p>gift a Smile</p>
               </div>
               <div className="footer__linkarea">
                   <span>Connect with us</span>
                   <p>Facebook</p>
                   <p>Instagram</p>
                   <p>Twitter</p>
               </div>
               <div className="footer__linkarea">
                   <span>Make Money With us</span>
                   <p>Sell on Amazon</p>
                   <p>Sell under Amazon Accelerator</p>
                   <p>Amazon Global Selling</p>
                   <p>Become An Affiliate</p>
                   <p>Advertise your Project</p>
                   <p>Amazon pay on Merchants</p>
               </div>
               <div className="footer__linkarea">
                   <span>Let Us help You</span>
                   <p>COVID_19 and Amazon</p>
                   <p>Your Account</p>
                   <p>Returns Centre</p>
                   <p>100% Purchare Protection</p>
                   <p>Amazon App Download</p>
                   <p>Help!!!</p>
               </div>
            </div>
            <div className="footer__bottom">
            <Link to="/">
           <img className="header__logo" alt="" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
           </Link>
            </div>
        </div>
    )
}

export default Footer
