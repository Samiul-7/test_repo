import React from 'react'
import './PlaceOrder.css'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
const PlaceOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text"placeholder='First name' />
          <input type="text" placeholder='Last name' />
        </div>
        <input type="email"placeholder='Email address' />
          <input type="text" placeholder='street' />
          <div className="multi-fields">
          <input type="text"placeholder='City' />
          <input type="text" placeholder='District' />
        </div>
        <div className="multi-fields">
          <input type="text"placeholder='Zip code' />
          <input type="text" placeholder='country' />
        </div>
          
          
        <input type="text" placeholder='Phone' />
      </div>
      <div className="place-order-right">
      <div className='cart-total'>
          <h2>Cart Total</h2>
          <div>
          <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()} TK</p>
            </div>
            <div className="cart-total-details">
              <p>Delivery</p>
              <p>{getTotalCartAmount()===0?0:2} Tk</p>
            </div>
            <div className="cart-total-details">
              <b>Total</b>
              <b>{getTotalCartAmount()===0?0:getTotalCartAmount()+2} Tk</b>
            </div>
          </div>
          <button >PROCEED TO Payment</button>
        </div>
      </div>

      
    </form>
  )
}

export default PlaceOrder
