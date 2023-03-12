import React, { useState } from 'react'
import '../assets/css/Dropdown.css'
function Dropdown({props, dropdown}) {
  const [dropdown2, setDropdown2] = useState(false)
  return (
    <ul className={`${dropdown||dropdown2===true? '' : 'hide-dropdown'} bg-white text-black`} onMouseEnter={() => setDropdown2(true)} onMouseLeave={() => setDropdown2(false)}>
        {
            props.map((item, index) => {
                return (
                    <li key={index} className='px-4 py-2'><a href={item.url}>{item.title}</a></li>
                )
            })
        }
    </ul>
  )
}

export default Dropdown