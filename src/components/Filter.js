import React, {useState, useEffect} from 'react'
import Commerce from '@chec/commerce.js';
import { useDataLayerValue } from './DataLayer';
import Select from 'react-select';
function Filter() {
    const [category, setCategory] = useState([])
    const commerce = new Commerce('pk_test_46647c7cc96afa71e31bd1cecb6e48a69a1b749bfdbde');
    const [,dispatch] = useDataLayerValue()
    async function getCategory(){
        const res = await commerce.categories.list()
        setCategory(res.data);   
    }
    function sendCategorySlug(slug){
        dispatch({
            type: "SET_CATEGORY_SLUG",
            categorySlug: slug,
        })
    }
    const options = [
        {
            value: 'asc', label: 'Lowest to Highest'
        }
        ,
        {
            value: 'desc', label: 'Highest to Lowest'
        } 
    ]
    function sendSortOrder(event){
        dispatch({
            type: "SET_SORT_ORDER",
            sortOrder: event.value
        })
    }
    useEffect(() => {
        getCategory()
    }, [])
  return (
    <div className='w-1/5'>
        <h3 className='mt-8 font-semibold text-xl'>Category</h3>
        <form className='flex flex-col items-start justify-center'>
            {
                category.map((item, index) => {
                    return (
                        <div key={index} className='mt-2'>
                            <input type="radio" name='category' value={item.id} onClick={() => sendCategorySlug(item.slug)}  /><label> {item.name}</label>
                        </div>
                    )
                })
            }
        </form>
        <hr className='w-3/4 mt-4'/>
        {/* Sort by range */}
        {/* <div className='w-full h-32 mt-4'>
            <div className='flex'>
                <input className='w-[40%] border-2 border-black rounded-md placeholder:text-xs' type="text" placeholder='₫FROM'/>
                -
                <input className='w-[40%] border-2 border-black rounded-md placeholder:text-xs' type="text" placeholder='₫TO'/>
            </div>
            <button className='bg-slate-900 py-2 px-4 rounded-md text-white mt-4'>APPLY</button>
        </div>
        <hr className='w-3/4 mt-4'/> */}
        {/*Sort by price  */}
        <div className=''>
            <Select className='border-[1px] border-black rounded-md' onChange={event => sendSortOrder(event)} options={options} placeholder="Sort by"/>
        </div>
    </div>
  )
}

export default Filter