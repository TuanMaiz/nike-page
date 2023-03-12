import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import '../assets/css/Detail.css'
import { useDataLayerValue } from './DataLayer'
import Commerce from '@chec/commerce.js';

const fakeData = {
    name: "",
    image: {
        url: ""
    },
    price: {
        formatted_with_code: ""
    },
    inventory: {
        available: 1
    },
    description: "",
    variant_groups: [
        {
            options: []
        }
    ],
}
function Detail() {
    const params = useParams() //get the id
    const [quantity, setQuantity] = useState(0)
    const [size, setSize] = useState(null) // default size is 38
    const [productData, setProductData] = useState(fakeData)
    const [{cartID}] = useDataLayerValue()
    const commerce = new Commerce('pk_test_46647c7cc96afa71e31bd1cecb6e48a69a1b749bfdbde');
    function addToCart(){
        const option = {
            [productData.variant_groups[0].id]: size
        }
        commerce.cart.add(params.id, quantity, option)
            .then((response) => console.log(response));
        
    }
    async function getProductById(){
        const config = {
            url: `/${params.id}`,
            method: 'get',
            baseURL: 'https://api.chec.io/v1/products',
            headers: {
                "X-Authorization": 'pk_test_46647c7cc96afa71e31bd1cecb6e48a69a1b749bfdbde', 
            },
        }
        try{
            const res = await axios(config);
            setProductData(res.data);
        }
        catch(error){
            console.error(error);
        }
    }
    useEffect(() => {
        getProductById();
    }, [])
    // console.log('data', productData);
    // console.log('cart receive:', cartID)
    // async function handleAddtoCard(){
    //     const body = {
    //         id: params.id,
    //         quantity: quantity,
    //         // variant_id: productData.variant_groups[0].id,
    //         // option_id: size

    //         // options: {
    //         //     variant_id:  productData.variant_groups[0].id,
    //         //     option_id: size,
    //         // },
    //     }
    //     console.log('body:', body)
    //     const config = {
    //         url: `https://api.chec.io/v1/carts/${cartID}`,
    //         method: 'POST',
    //         headers: {
    //             Accept: "application/json",
    //             "Content-Type": "application/json; charset=utf-8",
    //             "X-Authorization": 'pk_test_46647c7cc96afa71e31bd1cecb6e48a69a1b749bfdbde', 
    //         },
    //         body: JSON.stringify(body)
    //             // line_items: [
    //             //     {
    //             //         id: productData.id,
    //             //         quantity: quantity,
    //             //         variant_id: productData.variant_groups[0].id,
    //             //         option_id: productData.variant_groups[0].options[size].id,
    //             //     }               
    //             // ]
    //         }
    //     console.log('config:', config);
    //     try{
    //         const res = await axios(config)
    //         console.log(res);
    //     }
    //     catch(error){
    //         console.log(error);
    //     }
    // }
  return (
    <section id='detail' className='mt-14 '>
        <div className='w-[90%] m-auto md:flex md:justify-between md:items-center'>
            <React.Suspense fallback={<p>Loading...</p>}>
                <img className='md:w-1/2 md:h-1/2' src={productData.image.url} alt="" />
                <div className='md:mt-28 md:ml-14 lg:ml-14'>
                    <div>
                        <p className='font-semibold text-xl'>{productData.name}</p>
                        <p className='mt-6'>{productData.price.formatted_with_code}</p>
                        <p className="">{'Available: ' + productData.inventory.available || "Sold out"}</p>
                        <p className="mt-4">{productData.description}</p>
                    </div>
                    <div className="mt-4">
                        <form className='flex mx-2 detail__size'>
                            {
                                productData.variant_groups[0].options.map((item, index) => {
                                    return (
                                        <input key={index} class="w-10 h-8 caret-transparent rounded-md ml-4 border-black border-[1px] focus:border-[3px] outline-none cursor-pointer text-center" value={item.name} onClick={function() {setSize(item.id)}}/>
                                    )
                                })
                            }
                        </form>
                    </div>
                    <div className='w-14 h-8 mt-4 border-black border-2 flex rounded-md'>
                        <button className='w-1/3' onClick={function(){if(quantity>0)return setQuantity(prevQuantity => prevQuantity - 1)}}>-</button>
                        <p className='w-1/3'>{quantity}</p>
                        <button className='w-1/3' onClick={function(){if(quantity<productData.inventory.available)return setQuantity(prevQuantity => prevQuantity + 1)}}>+</button>
                    </div>
                    <button onClick={quantity>0?addToCart: null} className="w-full my-14 bg-slate-900 rounded-xl text-white py-4">Add to cart</button>
                </div>

            </React.Suspense>
        </div>
    </section>
  )
}

export default Detail