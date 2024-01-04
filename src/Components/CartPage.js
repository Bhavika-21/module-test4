import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { removeFromCart } from "../redux/actions/homeActions";
import { checkout } from "../redux/actions/homeActions";
import './CartPage.css'

const CartPage = ()=>{

  const {loading,post,error,cart} = useSelector(state => state)
  console.log('cartPage insideCart > ', cart);

  const dispatch = useDispatch();


  const handleRemoveItem = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  function checkO(){
    dispatch(checkout());
    alert("Checkout successful! Cart will be empty.");
  }

  return(
    <div className="CartPage">
      <h1>My Cart</h1>
      <div className="cardNcheckOut">
        <div className="cartCards">
          {
            cart.map((element)=>(
              <div className="Card" key={element.id}>
                  <img src={element.images[1]} alt={element.title} />
                  <div className="ptag">
                    <p>Title: {element.title}</p>
                    <p>Price: ${element.price}</p>
                  </div>
                  <button onClick={() => handleRemoveItem(element.id)}>Remove item</button>
              </div>
            ))
          }
        </div>

        <div className="checkout">
          <p>Checkout</p>
            {
              cart.length > 0 && cart.map((cartItem)=>(
                <div className="price">
                  <p>{cartItem.title}</p>
                  <p>${cartItem.price}</p>
                </div>
                ))
            }
              <hr></hr>
            <div className="total">
              <p>Total Price</p>
              <p>${calculateTotalPrice()}</p>
            </div>
              <hr></hr>

            <button className="checkBtn" onClick={checkO}>Click To Checkout</button>
        </div>
      </div>

    </div>
  )
}

export default CartPage
