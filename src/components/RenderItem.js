import React from 'react'
import { useNavigate, Link, Outlet } from "react-router-dom";

function RenderItem({props}) {
  let navigate = useNavigate()
  function handleNavigateProduct(event){
    event.preventDefault();
    navigate(`/product/${props.id}`, { replace: true });
}
  return (
    <Link
    to={`/product/${props.id}`}
    >
      <button onClick={handleNavigateProduct}>
        <div id={props.id} className="mt-4">
            <img className='w-80 h-80' src={props.image.url} alt="" />
            <p className='font-semibold text-xl'>{props.name}</p>
            <p>{props.price.formatted_with_code}</p>
        </div>
      </button>
    </Link>)


}

export default RenderItem