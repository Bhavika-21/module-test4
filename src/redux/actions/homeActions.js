import { CHECKOUT, FETCH_POST_FAILURE,FETCH_POST_STARTED,FETCH_POST_SUCCESS } from "./actionTypes";
import { ADD_TO_CART } from "./actionTypes";
import { REMOVE_FROM_CART } from "./actionTypes";

export const fetchPostStarted =()=>{
    return{
    type : FETCH_POST_STARTED
}}

export const fetchPostSuccess =(data)=>({
    type : FETCH_POST_SUCCESS,
    payload : data
})


export const fetchPostFailure =(error)=>({
    type : FETCH_POST_FAILURE,
    payload : error 
    
})

// Cart Action creators
export const addToCart = (product) => {
    return {
      type: ADD_TO_CART,
      payload: product,
    };
};

// Remove Action creater
export const removeFromCart = (productId) => {
    return {
      type: REMOVE_FROM_CART,
      payload: productId,
    };
};

  
// Checkout Action Creater
export const checkout = () => {
    return {
      type: CHECKOUT,
    };
};


