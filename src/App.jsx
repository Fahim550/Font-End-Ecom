import { Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import './App.css'
import Home from './Component/home/Home'
import { createContext, useState } from "react";
import { allRouters } from './Component/routes/AllRouter';
import Login from './Component/Login';
import SignIn from './Component/SignIn';
export const ProductArray = createContext();
function App() {
  // const router=createBrowserRouter(allRouters)
  const [selectedProduct, setSelectedProduct] = useState([]);
  return (
    <>
    {/* <RouterProvider router={router}/> */}
  
    <ProductArray.Provider value={[selectedProduct,setSelectedProduct]}>
   {/* <Home/> */}
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
  </ProductArray.Provider>
    </>
   
  )
}

export default App
