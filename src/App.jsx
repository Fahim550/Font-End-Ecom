import './App.css'
import Home from './Component/home/Home'
import { createContext, useState } from "react";
export const ProductArray = createContext();
function App() {
  const [selectedProduct, setSelectedProduct] = useState([]);
  return (
    <ProductArray.Provider value={[selectedProduct,setSelectedProduct]}>
   <Home/>
    </ProductArray.Provider>
  )
}

export default App
