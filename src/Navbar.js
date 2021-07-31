import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
<nav className="navbar">
           <Link to="/">
           <img className="header__logo1" alt="" src="data:image/png;base64,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"/>
           </Link>
       
           <div className="header__nav">
               <Link to="/" className="header__link1">
               <div className="header__option1">
                 <span className="header__optionLineOne1">Deliver to</span>
                 <span className="header__optionLineTwo22">Ramagundam,505209</span>
               </div>
               </Link>

               <Link to="/" className="header__link1">
               <div className="header__option">
                 <span className="header__optionLineTwo2">Bestoffers</span>
               </div>
               </Link>

               <Link to="/" className="header__link1">
               <div className="header__option">
                 <span className="header__optionLineTwo2">Mobiles</span>
               </div>
               </Link>

               <Link to="/" className="header__link1">
               <div className="header__option">
                 <span className="header__optionLineTwo2">Amazon Pay</span>
               </div>
               </Link>

               <Link to="/" className="header__link1">
               <div className="header__option">
                 <span className="header__optionLineTwo2">Fashion</span>
               </div>
               </Link>

               <Link to="/" className="header__link1">
               <div className="header__option">
                 <span className="header__optionLineTwo2">Electronics</span>
               </div>
               </Link>

               <Link to="/" className="header__link1">
               <div className="header__option">
                 <span className="header__optionLineTwo2">Prime</span>
               </div>
               </Link>
               
               <Link to="/" className="header__link1">
               <div className="header__option">
                 <span className="header__optionLineTwo2">New Releases</span>
               </div>
               </Link>

               <Link to="/" className="header__link1">
               <div className="header__option">
                 <span className="header__optionLineTwo2">Customer Service</span>
               </div>
               </Link>

               <Link to="/" className="header__link1">
               <div className="header__option">
                 <span className="header__optionLineTwo2">Computers</span>
               </div>
               </Link>

               <Link to="/" className="header__link1">
               <div className="header__option">
                 <span className="header__optionLineTwo2">Home & Kichen</span>
               </div>
               </Link>

               <Link to="/" className="header__link1">
               <div className="header__option">
                 <span className="header__optionLineTwo2">Toys & Games</span>
               </div>
               </Link>

               <Link to="/">
           <img className="header__logo2" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScIsjMJlI5Kam1Nh3lG1af2V0uO4uipAV-rw&usqp=CAU"/>
           </Link>

           <Link to="/" className="header__link1">
               <div className="header__option">
                 <span className="header__optionLineTwo2">Download App</span>
               </div>
               </Link>

              



           </div>
       </nav>
    )
}

export default Navbar

