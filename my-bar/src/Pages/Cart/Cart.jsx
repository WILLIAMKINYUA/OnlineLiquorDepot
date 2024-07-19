import { useContext, useState } from "react";
import"./Cart.css"

import { Link } from "react-router-dom";
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { ProductContext } from "../../Context/ProductContext";
const Cart = () => {
    const{cart,setCart,setClose,close}=useContext(ProductContext)
    const incqty = (product) => {
        const exist = cart.find((x) => x.id === product.id);
        setCart((prevCart) =>
          prevCart.map((item) =>
            item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item
          )
        );
      };
      
      const decqty = (product) => {
        const exist = cart.find((x) => x.id === product.id);
        setCart((prevCart) =>
          prevCart.map((item) =>
            item.id === product.id ? { ...exist, qty: exist.qty - 1 } : item
          )
        );
      };
      
      const removeCart=(product)=>{
        const exsit= cart.find((x)=>{
            return x.id === product.id
        })
    if(exsit.qty>0){
        setCart(cart.filter((x)=>{return x.id !== product.id}))
    }
      }
      const totalPrice=cart.reduce((price,item)=>price + item.qty*item.price,0)
    return (   <div>
   {cart.length===0 && <div className="empty">
    <h2 className="emptyBox">Cart is Empty</h2>
    <Link to="/product" className="shop">Shop Now</Link></div>}
    
    <div className="cover">
        {cart.map((product)=>(<div className="display"key={product.id}>
            <button className="close"onClick={()=>removeCart(product)}><AiOutlineCloseSquare size={20}/></button>
            <img src={product.image} alt={product.nickName} className="beer"/>
            <div className="describes">
                <p className="para">{product.productName}</p>
            <p className="pric">${product.price}</p>
            <div className="button">
            <button className="add"onClick={()=>incqty(product)}>+</button>
            <input type="text"value={product.qty} className="bwn" />
            <button className="sub"onClick={()=>decqty(product)}>-</button></div>
            <p className="subtitle">sub-title:${product.price*product.qty}</p>
    
            
            </div>
        </div>))}
        
        <div className="mass">
        <h3>${totalPrice}</h3>
          <button>CheckOut</button>  
        </div>
    
    </div>
    </div>);
}
 
export default Cart;