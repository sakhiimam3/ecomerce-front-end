import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Routes,Route}  from  "react-router-dom"
import Home from './pages/Home';
import Shop from './pages/Shop';
import Account from './pages/Account';
import Login from "../src/pages/Login"
import SignUp from "../src/pages/SignUp"
import WhiteList from './pages/whitelist'
import Cart from "./pages/cart"
import Blog from './pages/Blog';
import BlogDeatail from './pages/BlogDeatail';
import ProductDetail from './compoents/productDetail';
const  App=()=> {
  return (
    <>  
        <BrowserRouter>
        <Routes>
          <Route  path='/'    element={<Home />} />
          <Route  path='/shop'   element={<Shop />} />
          <Route  path='/account'   element={<Account />} />
          <Route  path='/blog'   element={<Blog />} />
          <Route  path='/blog/:id'   element={<BlogDeatail />} />
          <Route  path='/login'   element={<Login />} />
          <Route  path='/signup'   element={<SignUp />} />
          <Route  path='/whitelist'   element={<WhiteList />} />
          <Route  path='/cart'   element={<Cart />} />
          <Route  path='/account'   element={<Account />} />
          <Route  path='/shop/:id'   element={<ProductDetail />} />


        </Routes>
        </BrowserRouter>
       
    </>
  );
}

export default App;
