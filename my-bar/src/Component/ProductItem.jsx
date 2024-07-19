import { useContext, useState } from 'react';
import './ProductItem.css'
import { ProductContext } from '../Context/ProductContext';
const ProductItem = ({product}) => {
  const{addToCart}=useContext(ProductContext)
    return (

        <div className="preview" key={product.id}>
    <img src={product.image} alt="Image is not found" className="image"/>
    <div className='display'>
    <p className="nickName">{product.nickName}</p>
    <p className="productName">{product.productName}</p>
    <p className="price"> ${product.price}</p>
    <button className='btns'onClick={()=>addToCart(product)}> Add To Cart</button>

    </div>
</div>


      );
}
 
export default ProductItem;