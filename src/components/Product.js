import React, {useState, useEffect} from 'react'
import '../assets/css/Product.css'
import axios from 'axios'
import RenderItem from './RenderItem'
function Product() {
    const [data, setData] = useState(null)
    const config = {
        url: '/products',
        method: 'get',
        baseURL: 'https://api.chec.io/v1',
        headers: {
            "X-Authorization": 'pk_test_46647c7cc96afa71e31bd1cecb6e48a69a1b749bfdbde', 
        },
    }

    useEffect(() => {
        async function getProduct(){
            try{
                const res = await axios(config)
                console.log(res.data)
                setData(res.data)
            }
            catch(error){
                console.error(error);
            }
    
        }
        getProduct()
    },[])
    console.log('data', data);
    return (
        <section id='product' className='m-auto w-[90%]'>
            <h3 className="font-bold text-2xl">STORE</h3>
            <div className='product__list'>
                {
                        data.map((product, index) => (
                            <RenderItem props={product}/>
                        ))
                }
            </div>

        </section>
    )
}

export default Product