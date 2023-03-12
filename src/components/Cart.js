import React, { useEffect, useState } from 'react'
import '../assets/css/Cart.css'
import ItemCart from './ItemCart'
import axios from 'axios'
import { useDataLayerValue } from './DataLayer'
import Commerce from '@chec/commerce.js'; 
import { json } from 'react-router-dom'

const fakeData = {
  discount: [],
  subtotal: {
    formatted_with_code:""
  }
}
function Cart() {
    const [itemInCart, setItemInCart] = useState([])
    const [cart, setCart] = useState(fakeData)
    const commerce = new Commerce('pk_test_46647c7cc96afa71e31bd1cecb6e48a69a1b749bfdbde');
    const config = {
      url: '/carts/',
      method: 'get',
      baseURL: 'https://api.chec.io/v1',
      headers: {
          "X-Authorization": 'pk_test_46647c7cc96afa71e31bd1cecb6e48a69a1b749bfdbde', 
      },
    }
    async function getProduct(){
      const res = await commerce.cart.retrieve()
      setCart(res)
      setItemInCart(res.line_items)
    }
    async function handleDeleteFromCart(id){
      const res = await commerce.cart.remove(id)
      setItemInCart(res.line_items);
    }
    async function handleUpdateCart(id, quantity){
      const res = await commerce.cart.update(id, {quantity: quantity} )
      setItemInCart(res.line_items)
    }
    async function handleEmptyCart(){
      const res = await commerce.cart.empty()
      setItemInCart(res.line_items)
    }
  useEffect(() => {
    getProduct()

  }, [])
  // console.log('item', itemInCart);
  // console.log('data', data);
  return (
    <section className="mt-24 h-full w-full flex justify-center items-center flex-col">
      <div className=' w-full flex justify-center items-center flex-col'>
          {itemInCart.map((item, index) => {
            return (
              <ItemCart 
                props={item}
                key={index}
                handleDeleteFromCart={handleDeleteFromCart}
                handleUpdateCart={handleUpdateCart}/>
            )
          })}
      </div>
      <hr className='w-[80%] mt-8 border-t-2 border-black'/>
      <div className='w-[80%]'>
        <div className='flex items-center justify-between'>
          <p>Discount:</p>
          <p>{cart.discount.length > 0 ? cart.discount : 0}</p>
        </div>
        <div className='flex items-center justify-between'>
          <p>Total:</p>
          <p>{cart.subtotal.formatted_with_code}</p>
        </div>

      </div>
      <hr className='w-[80%] mt-8 border-t-2 border-black'/>
      <div className='w-full h-auto mt-4 '>
        <div className='w-[80%] m-auto'>
          <button className='w-full bg-slate-900 text-white py-2 rounded-xl'>Check out</button>
          <button onClick={handleEmptyCart} className='w-full mt-2 text-red-500 border-2 border-red-500 py-2 rounded-xl'>Empty</button>
        </div>
      </div>

    </section>
  )
}

export default Cart