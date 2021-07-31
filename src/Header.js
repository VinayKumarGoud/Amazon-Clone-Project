import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import './Header.css'
import { useStateValue } from './StateProvider';

function Header() {
  const [{ basket }] = useStateValue();
    return (
       <nav className="header">
           <Link to="/">
           <img className="header__logo" alt="" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
           </Link>

           
           <div className="header__search">
           <input type="text" className="header__searchInput" />
           <SearchIcon className="header__searchIcon" />
           </div>


               


           <div className="header__nav">
               <Link to="/login" className="header__link">
               <div className="header__option">
                 <span className="header__optionLineOne">Hello,Sign in</span>
                 <span className="header__optionLineTwo">Account&Lists</span>
               </div>
               </Link>




               <Link to="/" className="header__link">
               <div className="header__option">
                 <span className="header__optionLineOne">Returns</span>
                 <span className="header__optionLineTwo">& Orders</span>
               </div>
               </Link>


               <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                <AddShoppingCartIcon />
                    <span className="header__optionLineThree header__basketCount" >{basket?.length}</span>

                </div>
               </Link>




           </div>
       </nav>

        
    )
}

export default Header
