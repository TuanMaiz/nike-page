import React, {useState, useEffect} from 'react'
import '../assets/css/Product.css'
import RenderItem from './RenderItem'
import Filter from './Filter'
import { useDataLayerValue } from './DataLayer';
import Commerce from '@chec/commerce.js';

// import { useNavigate, Link, Outlet } from "react-router-dom";

function Product() {
    const [products, setProducts] = useState([]);
    const [{searchTerm}] = useDataLayerValue(); 
    const [{categorySlug}] = useDataLayerValue()
    const [{sortOrder}] = useDataLayerValue()
    const commerce = new Commerce('pk_test_46647c7cc96afa71e31bd1cecb6e48a69a1b749bfdbde');
    // async function getProductz(){
    //     const res = await commerce.products.list({
    //         price.abov
    //     })
    // }
    async function getProduct(categorySlug, sortOrder){
        if(categorySlug && sortOrder)
        {
            const res  = await commerce.products.list({
                category_slug: [categorySlug],
                sortBy: 'price',
                sortDirection: sortOrder,
              })
            setProducts(res.data)

        }
        else if(categorySlug ) {
            const res  = await commerce.products.list({
                category_slug: [categorySlug],
              })
            setProducts(res.data)
        }
        else if(sortOrder){
            const res  = await commerce.products.list({
                sortBy: 'price',
                sortDirection: sortOrder,
              })
            setProducts(res.data)
        }
        else
        {
            const res = await commerce.products.list()
            setProducts(res.data)
        }

    }
    useEffect(() => {
            getProduct(categorySlug, sortOrder)
    },[categorySlug, sortOrder])
    return (
        <section id='product' className='m-auto w-[90%] flex'>
            <Filter />
            <div className='w-4/5'>
                <h3 className=" font-bold text-2xl mt-8">STORE</h3>
                <div className=' product__list mb-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {
                        products
                        .filter(function(item) {
                            if(searchTerm === "")
                                return item;
                            else if (item.name.toLowerCase().includes(searchTerm.toLowerCase()))
                                return item
                        })
                        .map((item, index) => 
                        <RenderItem key={index}  props={item} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default Product