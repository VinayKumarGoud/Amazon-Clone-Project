import React from 'react'
import './Checkout.css'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal'
import CurrencyFormat from 'react-currency-format';


function Checkout() {
    const [{basket}] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
        <img className="checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Flip/JuneEOSS/SBI-PC.jpg" alt="" />
          {basket?.length ===0 ? (
              <div className="checkout__title"  style={{fontSize:'1.5rem'}}>
                  <h2>Your Shopping Cart is Empty</h2>
                  <div style={{fontSize:'.9rem'}}>
                  <p>Add Something to Cart to  Shop with Special Deals</p>
                  </div>
              </div>
          ) : (
              <div>
              <h2 className="checkout__title"  style={{fontSize:'1.5rem'}}>Your Shopping Cart</h2>
              
              {basket.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  />
                  
              ))}
              </div>
          )}
          </div>
        {basket.length > 0 && (
            <div className="Checkout__right">

                <Subtotal />
            </div>
        )}

        </div>
    );
}

export default Checkout
