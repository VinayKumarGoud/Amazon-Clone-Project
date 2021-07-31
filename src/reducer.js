export const initialState = {
    basket: [{id:"111",
    title:"Samsung Galaxy Note 20 (Mystic Bronze, 8GB RAM, 256GB Storage) with No Cost EMI/Additional Exchange Offers",
    price: 512.88,
     rating:4,
    image:"https://images-na.ssl-images-amazon.com/images/I/81v6FUkT5CL._SX569_.jpg" },
],


    user: null,
};

export const getBasketTotal = (basket) =>
basket?.reduce((amount,item) => item.price + amount, 0);

const  reducer = (state,action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return { 
                ...state,
                basket: [...state.basket, action.item],
            };
            
            case "REMOVE_FROM_BASKET":
            
            let newBasket =[...state.basket]

            const index = state.basket.findIndex((basketItem) =>basketItem.id === action.id);
             if (index >= 0 ) {
              newBasket.splice(index, 1);
             } else {
                console.warn (
                    'cant remove'
                );
             }
          
                return { 
                    ...state, 
                    basket: newBasket,
                };
                
                default:
                    return state;
     }
};

export default reducer;
