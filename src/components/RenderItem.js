import React from 'react'

function RenderItem(props) {
  return (
    <div id={props.id}>
            <img src={props.image.url} alt="" />
            <p className='font-semibold text-xl'>{props.name}</p>
            <p>{props.price.formatted_with_code}</p>
    </div>
  )
}

export default RenderItem