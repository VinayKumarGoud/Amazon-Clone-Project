import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';

import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';


function Subtotal() {

    const getBasketTotal = (basket) =>
    basket?.reduce((amount,item) =>item.price+ amount,0);

    const [{basket}, dispatch] = useStateValue();


    return( <div className="subtotal">

        <CurrencyFormat 
        renderText={(value) => (
           <p>
            Subtotal({basket.length} items) : <strong>{`${value}`}</strong>
           </p>
        )}

        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        />


            <button>Proceed to Buy</button>
        </div>
    )
}

export default Subtotal;
