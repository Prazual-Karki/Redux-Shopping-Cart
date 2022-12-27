import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { remove } from '../Store/CartSlice'
import { Button } from '@mui/material'
import { useState } from 'react'

const Cart = () => {
  const [Quantity, setQuantity] = useState(1);
  const products = useSelector(state=>state.cart)
  const totalItem = useSelector((state)=> state.cart)
  const dispatch = useDispatch();
  const handleRemove = (productId) =>{
    dispatch(remove(productId));

  

  }
  return (
    <div >
    <h3 id='cartHead'>{totalItem.length===0?"Your carts is empty!!":"Your Shopping Carts:"}</h3>
    <div className='cartWrapper'>
    {
      products.map(product=>(
        <div className='cartCard' key={product.id} >
          <img src={product.image} alt="" height={60} width={80}/>
          <h4>{product.title}</h4>
          <h5>${product.price}</h5>
          <span>
            <button className='IncDec' onClick={()=>(setQuantity(Quantity -1))}>-</button>{Quantity}
            <button className='IncDec' onClick={()=>(setQuantity(Quantity + 1))}>+</button>
          </span>
          <Button variant='contained' onClick={()=>handleRemove(product.id)} color="error">
            Remove
          </Button>

        </div>
      
      ))
    }
    </div>
    <div className='orderSummary' style={{display: totalItem.length===0?"none":"block"}}>
      <h3>Order Summary </h3>
      <hr/>
      <h5>Total Items :<span className='total'>{totalItem.length}</span></h5>
      <h5>Total Costs :<span className='total'>${products.reduce((total, products)=>total+products.price,0)}</span></h5>
      
      <Button variant='contained' color="primary">
            PROCEED TO CHECKOUT
          </Button>
    </div>
      
    </div>
  )
}

export default Cart
