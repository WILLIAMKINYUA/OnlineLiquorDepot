import{BrowserRouter as Router,Route,Switch}from 'react-router-dom'
import Home from './Pages/Home/Home';
import Product from './Pages/Product/Product';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';
import Cart from './Pages/Cart/Cart';
import Navbar from './Component/Navbar';
import { useState } from 'react';
import { ProductContext } from './Context/ProductContext';
function App() {
  const[cart,setCart]=useState([])
  const[close,setClose]=useState(false)
    const[detail,setDetail]=useState([])
    const merge=(product)=>{
        setDetail([{...product}])
        setClose(true)
    }
  const exsits=cart.find((x)=>{return x.id === Product.id})
  const addToCart=(product)=>{if (exsits) {
    alert("This product is already added")
  }else{
    setCart([...cart,{...product,qty:1}])
    alert("product is added  cart")
  }}
  return (
    <div className="App">
      <ProductContext.Provider value={{cart,setCart,addToCart,setClose,close}}>
        <Router>
        <Navbar/>
        <Switch>
          <Route exact path='/'><Home/></Route>
          <Route path='/Product'><Product/></Route>
          <Route path='/Blog'><Blog/></Route>
          <Route path='/Contact'><Contact/></Route>
          <Route path='/Cart'><Cart/></Route>
        </Switch>
      </Router></ProductContext.Provider>
    </div>
  );
}

export default App;

