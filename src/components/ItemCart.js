import React, { useState } from 'react'
import {DeleteOutlined} from '@ant-design/icons'
import axios from 'axios'
function ItemCart({props}) {
    const [quantity, setQuantity] = useState(props.quantity)
    async function handleDeleteFromCart(){
        const config = {
            url: `https://api.chec.io/v1/carts/cart_ZM8X5n9Ka7opv4`,
            method: 'delete',
            headers: {
                "X-Authorization": 'pk_test_46647c7cc96afa71e31bd1cecb6e48a69a1b749bfdbde', 
            },
            body: {
                id: 'cart_ZM8X5n9Ka7opv4',
                line_items: [
                    {
                        id: props.id,
                    }               
                ] 
            }
        }
        try{
            const res = await axios(config)
            console.log(res);
        }
        catch(error){
            console.log(error);
        }
    }
  return (
    <div className='flex justify-between w-[80%] h-24 border-l-2 border-y-2 border-black mt-4 lg:w-[40%]'>
        <div className='w-1/3 h-full sm:w-24'>
            <img className='w-full h-full' src={props.image.url} alt="" />
        </div>
        <div className='flex flex-col justify-center w-auto p-4'>
            <p>{props.name}</p>
            <p>{props.line_total.formatted_with_code}</p>
        </div>
        <div className='w-auto flex flex-col items-end justify-center'>
            <div className='w-14 h-8 mt-4 border-black border-2 flex rounded-md'>
                <button className='w-1/3' onClick={function(){if(quantity>0)return setQuantity(prevQuantity => prevQuantity - 1)}}>-</button>
                <p className='w-1/3'>{quantity}</p>
                <button className='w-1/3' onClick={function(){return setQuantity(prevQuantity => prevQuantity + 1)}}>+</button>
            </div>
            <div>
                <button onClick={handleDeleteFromCart} className='p-4'><DeleteOutlined /></button>
            </div>
        </div>
    </div>
  )
}

export default ItemCart