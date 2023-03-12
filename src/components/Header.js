import React, {useState} from 'react'
import '../assets/css/Header.css'
import Logo from '../assets/img/logo.png'
import { useNavigate } from "react-router-dom";
import {UserOutlined, ShoppingCartOutlined, SearchOutlined, MenuOutlined} from '@ant-design/icons'
import SearchBar from './SearchBar';
function Header() {
  const [display, setDisplay] = useState('hidden')
  let navigate = useNavigate();
  function handleToggleMobileMenu(){
    if(display === 'hidden')
      setDisplay('')
    else
      setDisplay('hidden')
  }
  
  const handleNavigateHomePage = (event) => {
    event.preventDefault();
    navigate("/product", { replace: true });
  }
  const handleNavigateManager = (event) => {
    event.preventDefault();
    navigate("/manager", { replace: true });
  }
  const handleNavigateCart = (event) => {
    event.preventDefault();
    navigate("/cart", { replace: true });
  }  
  const handleNavigateAccount = (event) => {
    event.preventDefault();
    navigate("/account", { replace: true });
  }
  return (
    <header id='header' className=' z-10 fixed top-0 right-0 left-0  text-white bg-slate-800 h-24'>
      <div className='flex items-center justify-between mt-2'>
        <button className='flex items-center w-1/3 ml-4 font-bold' onClick={handleNavigateHomePage}><img className=' h-10 ' src={Logo} alt="" />Nike</button>
        <SearchBar/>
        <ul className={`header__navBar fixed flex flex-col ${display} h-full top-14 right-0 bottom-0 whitespace-nowrap bg-slate-800 w-3/4  items-center sm:mr-4 sm:justify-end sm:flex-row sm:static sm:w-1/3 sm:flex`}>
          <li><button onClick={handleNavigateManager} className=' text-2xl w-full mt-4 font-semibold sm:px-2 sm:text-lg sm:mt-0 sm:w-auto'>For owner</button></li>
          <li><button onClick={handleNavigateCart} className='text-2xl w-full mt-4 font-semibold sm:px-2 sm:text-lg sm:mt-0 sm:w-12'><ShoppingCartOutlined className='icon-svg'/></button></li>
          <li><button onClick={handleNavigateAccount} className='text-2xl w-full mt-4 font-semibold sm:px-2 sm:text-lg sm:mt-0 sm:w-12'><UserOutlined className='icon-svg'/></button></li>
        </ul>
        <button id='mobile-button' className='z-10 ml-16 p-4 sm:hidden'>
          <MenuOutlined  className='icon-svg' onClick={handleToggleMobileMenu}/>
        </button>
      </div>
      {/* <div className='h-full w-full flex justify-between mt-2'>
        <Menu/>
      </div> */}

        
    </header>
  )
}

export default Header