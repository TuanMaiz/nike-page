import React, { useEffect, useState } from 'react'
import '../assets/css/Cart.css'
import ItemCart from './ItemCart'
import axios from 'axios'
const fakeData = {
  discount: "",
  subtotal: {
    formatted_with_code:""
  }
}
function Cart() {
    const [itemInCart, setItemInCart] = useState([])
    const [data, setData] = useState(fakeData)
    const config = {
      url: '/carts/cart_ZM8X5n9Ka7opv4',
      method: 'get',
      baseURL: 'https://api.chec.io/v1',
      headers: {
          "X-Authorization": 'pk_test_46647c7cc96afa71e31bd1cecb6e48a69a1b749bfdbde', 
      },
  }
    async function getProduct(){
      try{
          const res = await axios(config)
          setData(res.data)
          setItemInCart(res.data.line_items)
      }
      catch(error){
          console.error(error);
      }
  }
  useEffect(() => {
    getProduct();
  }, [])
  console.log('item', itemInCart);
  console.log('data', data);
  return (
    <section className="mt-14 h-full w-full flex justify-center items-center flex-col">
      <div className=' w-full flex justify-center items-center flex-col'>
          {itemInCart.map((item, index) => {
            return (
              <ItemCart props={item} key={index}/>
            )
          })}
      </div>
      <hr className='w-[80%] mt-8 border-t-2 border-black'/>
      <div className='w-[80%]'>
        <div className='flex items-center justify-between'>
          <p>Discount:</p>
          <p>{data.discount.length > 0 ? data.discount : 0}</p>
        </div>
        <div className='flex items-center justify-between'>
          <p>Total:</p>
          <p>{data.subtotal.formatted_with_code}</p>
        </div>

      </div>
      <hr className='w-[80%] mt-8 border-t-2 border-black'/>
      <div className='w-full h-auto mt-4 '>
        <div className='w-[80%] m-auto'>
          <button className='w-full bg-slate-900 text-white py-2 rounded-xl'>Check out</button>
        </div>
      </div>

    </section>
  )
}

export default Cart