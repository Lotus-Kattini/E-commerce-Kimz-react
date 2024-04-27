import { Mainlayout } from "@layouts/index"
import Aboutus from "@pages/Aboutus"
import Categories from "@pages/Categories"
import Home from "@pages/Home"
import Login from "@pages/Login"
import Products from "@pages/Products"
import Register from "@pages/Register"
import Errorpage from "@pages/Errorpage"
import { Route,createBrowserRouter,createRoutesFromElements,RouterProvider } from "react-router-dom"

const Approuter = () => {
  const root=createBrowserRouter(createRoutesFromElements(
    <>
    
    {/* <Route path="/*" element={<Errorpage/>}/> */}
      <Route path="/" element={<Mainlayout/>} errorElement={<Errorpage/>}>
        <Route path="/home" element={<Home/>}/>
        <Route path="/categories" element={<Categories/>}/>
        <Route path="products/:prefix" element={<Products/>} loader={({params})=>{
          if(typeof params.prefix !== 'string' || !/^[a-z]+$/i.test(params.prefix)){
            throw new Response('Bad request',{
              status:400,
              statusText:'Category not found'
            })
          }
          return true
        }}/>
        <Route path="/about-us" element={<Aboutus/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Route>
    </>
  ))
  return (
    <RouterProvider router={root}/>
  )
}

export default Approuter