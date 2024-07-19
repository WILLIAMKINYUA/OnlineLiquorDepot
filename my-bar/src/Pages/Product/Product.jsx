import ProductItem from "../../Component/ProductItem";
import PRODUCT from "../../PRODUCT";

const Product = () => {
    return (
    <div><h1>This is where you make an order</h1>
    {PRODUCT.map((product)=>(<ProductItem product={product}/>))}
</div>)
}
export default Product;
