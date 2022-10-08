import React from 'react'
import Logo from '../assets/img/Logo-black.png'
import '../assets/css/Account.css'
function Account() {
  return (
    <section id='account' className='mt-14'>
      <div className="mt-40  flex items-center justify-center flex-col">
        <div className='flex items-center justify-center flex-col font-bold text-2xl' >
            <img className='w-24 h-24 ' src={Logo} alt="" />
            <h3>YOUR ACCOUNT FOR EVERYTHING NIKE</h3>
        </div>
        <div className='w-[80%] sm:w-80'> 
          <form className='w-full flex items-center justify-center flex-col mt-4 sm:w-80'>
              <div className="w-full flex items-start justify-center flex-col mt-4">
                  <label className='font-semibold' for="email">Enter your email:</label>
                  <input className='w-full border-slate-400 sm:w-80' type="email" placeholder='Your email address' name="email"/>
              </div>
              <div className="w-full flex items-start justify-center flex-col mt-2">
                  <label className='font-semibold' for="password">Enter your password:</label>
                  <input className='w-full border-slate-400 sm:w-80' type="password" placeholder='Your password' name='password'/>
              </div>
              <div className="w-full mt-2">
                <input type="checkbox" />
                <p className="ml-2 inline-block">Remember me</p>
              </div>
                <button className="account__button w-full p-4 mt-4 rounded-xl bg-slate-800 text-white sm:w-80">Login</button>
                <br/>
                <a className="account__signup" href="">Don't have an account? Sign up</a>
          </form>
        </div>
      </div>

    </section>
  )
}

export default Account