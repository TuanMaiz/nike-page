import React from 'react'
import { useNavigate } from "react-router-dom";
import '../assets/css/Cart.css'
function Cart() {
    let navigate = useNavigate();
    function handleNavigateProduct(event, id){
        event.preventDefault();
        navigate(`/cart`, { replace: true });
    }
  return (
    <section className="mt-14">
        
    </section>
  )
}

export default Cart