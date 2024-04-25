import { Mainlayout } from "@layouts/index"
import Aboutus from "@pages/Aboutus"
import Categories from "@pages/Categories"
import Home from "@pages/Home"
import Login from "@pages/Login"
import Products from "@pages/Products"
import Register from "@pages/Register"
import Errorpage from "@pages/error/Errorpage"
import { Routes,Route } from "react-router-dom"

const Approuter = () => {
  return (
    <Routes>
      <Route path="/*" element={<Errorpage/>}/>
      <Route path="/" element={<Mainlayout/>}>
        <Route path="/home" element={<Home/>}/>
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/products/:prefix" element={<Products/>}/>
        <Route path="/about-us" element={<Aboutus/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Route>
    </Routes> 
  )
}

export default Approuter