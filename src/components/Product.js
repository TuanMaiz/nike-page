import React, {useState, useEffect} from 'react'
import '../assets/css/Product.css'
import axios from 'axios'
import RenderItem from './RenderItem'
// import { useNavigate, Link, Outlet } from "react-router-dom";

function Product() {
    const [products, setProducts] = useState([]);
    const config = {
        url: '/products',
        method: 'get',
        baseURL: 'https://api.chec.io/v1',
        headers: {
            "X-Authorization": 'pk_test_46647c7cc96afa71e31bd1cecb6e48a69a1b749bfdbde', 
        },
    }
    async function getProduct(){
        try{
            const res = await axios(config)
            setProducts(res.data.data)
        }
        catch(error){
            console.error(error);
        }

    }
    useEffect(() => {
        getProduct()
    },[])

    return (
        <section id='product' className='m-auto w-[90%]'>
            <h3 className="font-bold text-2xl mt-8">STORE</h3>
            <div className='product__list mb-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    products.map((item, index) => 
                        <RenderItem key={index}  props={item}/>)
                }
            </div>
        </section>
    )
}

export default Product