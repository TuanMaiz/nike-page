import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams, defer, useLoaderData} from 'react-router-dom'
import '../assets/css/Detail.css'



function Detail() {
    const params = useParams() //get the id
    const [quantity, setQuantity] = useState(0)
    const [size, setSize] = useState(38) // default size is 38
    const config = {
        url: `${params.id}`,
        method: 'get',
        baseURL: 'https://api.chec.io/v1/products',
        headers: {
            "X-Authorization": 'pk_test_46647c7cc96afa71e31bd1cecb6e48a69a1b749bfdbde', 
        },
    }
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
        description: ""
    }
    const [productData, setProductData] = useState(fakeData)

    async function getProductById(){
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
    console.log('data', productData);
    async function handleAddtoCard(){
        const config = {
            url: `https://api.chec.io/v1/carts/cart_ZM8X5n9Ka7opv4`,
            method: 'post',
            headers: {
                "X-Authorization": 'pk_test_46647c7cc96afa71e31bd1cecb6e48a69a1b749bfdbde', 
            },
            body: {
                id: productData.id,
                quantity:quantity,
                options: size,
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
                        <form className='flex mx-2'>
                            <input type="radio" id='38' name='size' value={38} onChange={e => setSize(e.target.value)} /><label>38</label>
                            <input type="radio" id='39' name='size' value={39} onChange={e => setSize(e.target.value)} /><label>39</label>
                            <input type="radio" id='40' name='size' value={40} onChange={e => setSize(e.target.value)} /><label>40</label>
                            <input type="radio" id='41' name='size' value={41} onChange={e => setSize(e.target.value)} /><label>41</label>
                            <input type="radio" id='42' name='size' value={42} onChange={e => setSize(e.target.value)} /><label>42</label>
                            <input type="radio" id='43' name='size' value={43} onChange={e => setSize(e.target.value)} /><label>43</label>
                        </form>
                        <p>Size seclected: {size}</p>
                    </div>
                    <div className='w-14 h-8 mt-4 border-black border-2 flex rounded-md'>
                        <button className='w-1/3' onClick={function(){if(quantity>0)return setQuantity(prevQuantity => prevQuantity - 1)}}>-</button>
                        <p className='w-1/3'>{quantity}</p>
                        <button className='w-1/3' onClick={function(){return setQuantity(prevQuantity => prevQuantity + 1)}}>+</button>
                    </div>
                    <button onClick={handleAddtoCard} className="w-full my-14 bg-slate-900 rounded-xl text-white py-4">Add to cart</button>
                </div>

            </React.Suspense>
        </div>
    </section>
  )
}

export default Detail