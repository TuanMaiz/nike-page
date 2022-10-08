import React from 'react'
import '../assets/css/Manager.css'
import FeatureCard from './FeatureCard'
function Manager() {
  return (
    <section id='manager' className="mt-14 h-full w-full flex flex-col justify-center items-center ">
        <h2 className="font-bold text-3xl mt-16">Owner feature</h2>
        <div className="relative flex justify-center items-center flex-col sm:flex-row">
            <FeatureCard title='Manage Product' description='View, create, update and remove products' />
            <FeatureCard title='Manage Asset' description='View, create, update and remove image, title,,,' />
        </div>
    </section>
  )
}

export default Manager