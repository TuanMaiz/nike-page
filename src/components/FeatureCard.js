import React from 'react'
import '../assets/css/FeatureCard.css'
import {EditOutlined} from '@ant-design/icons'

function FeatureCard(props) {
  return (
    <a id='feature-card' href="" className="m-4">
        <div className="z-1 flex justify-center items-center h-28 border-2 rounded-xl sm:flex-col sm:h-60 ">
            <div className="bg-slate-800 w-1/3 h-full flex justify-center items-center  sm:w-full sm:h-2/3 ">
                {/* icon goes here */}
                <EditOutlined className="manager__icons  text-white text-3xl"/>
            </div>
            <div className=" w-2/3 h-full p-4 flex justify-center items-start flex-col sm:w-full sm:h-1/3 ">
                {/* text goes here */}
                <h3 className="manager__title font-bold">{props.title}</h3>
                <p className="manager__description">{props.description}</p>
            </div>
        </div>
    </a>
  )
}

export default FeatureCard