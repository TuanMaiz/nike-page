import React, { useState } from 'react'
import { SearchOutlined} from '@ant-design/icons'
import {useDataLayerValue} from './DataLayer.js'
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [, dispatch] = useDataLayerValue()
  const [searchTerm, setSearchTerm] = useState('')

  function handleSearch(event){
    if(event.key === 'Enter' || event.code ==='13')
    {
      console.log('entered')

      dispatch({
        type: "SET_SEARCH",
        searchTerm: searchTerm,
      })
    }
  }
  return (
    <div className="header__search-bar z-1 w-1/3 bg-white flex items-center rounded-md ">
        <SearchOutlined className="p-2 text-black" />
        <input className='header__search-input w-full px-4 text-black' onKeyPress={handleSearch} onChange={(e) => setSearchTerm(e.target.value)} type="text" placeholder='Search for product'/>
    </div>
  )
}

export default SearchBar