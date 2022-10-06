import React, {useState, useEffect} from 'react'
import '../assets/css/Header.css'
import Logo from '../assets/img/logo.png'
import { useNavigate } from "react-router-dom";
import {UserOutlined, ShoppingCartOutlined, SearchOutlined, MenuOutlined} from '@ant-design/icons'
function Header() {
  const [display, setDisplay] = useState('hidden')
  let navigate = useNavigate();
  // async function handleSubmit(event) {
  //   event.preventDefault();
  //   navigate("../success", { replace: true });
  // }
  function handleToggleMobileMenu(){
    if(display === 'hidden')
      setDisplay('')
    else
      setDisplay('hidden')
  }
  return (
    <header id='header' className=' z-10 fixed top-0 right-0 left-0 flex items-center justify-between text-white bg-slate-800 h-14'>
      <a className='flex items-center ml-4 font-bold' href=""><img className='w-12 h-10 ' src={Logo} alt="" />Nike</a>
      <div className="header__search-bar bg-white flex items-center rounded-md ">
        <SearchOutlined className="p-2 text-black" />
        <input className='header__search-input px-4 text-black' type="text" placeholder='Search for product'/>
      </div>
      <ul className={`header__navBar fixed flex flex-col ${display} h-full top-14 right-0 bottom-0 whitespace-nowrap bg-slate-800 w-3/4  items-center sm:justify-end sm:flex-row sm:static sm:w-1/5 sm:flex  `}>
        <li><a className='px-24 text-2xl w-40 mt-4 font-semibold sm:px-4 sm:text-lg'>For owner</a></li>
        <li><a className='px-24 text-2xl w-40 mt-4 font-semibold sm:px-4 sm:text-lg'><ShoppingCartOutlined className='icon-svg'/></a></li>
        <li><a className='px-24 text-2xl w-40 mt-4 font-semibold sm:px-4 sm:text-lg'><UserOutlined className='icon-svg'/></a></li>
      </ul>
      <button id='mobile-button' className='z-10 p-4 sm:hidden'>
        <MenuOutlined  className='icon-svg' onClick={handleToggleMobileMenu}/>
      </button>

        
    </header>
  )
}

export default Header