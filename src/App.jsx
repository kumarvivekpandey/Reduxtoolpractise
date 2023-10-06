import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'
import { Routes, Route } from "react-router-dom";
import Product from './components/Product';
import Cart from './components/Cart';
import Dashboard from './components/Dashboard';

import Menu from './components/Menu';

function App() {
  

  return (
   <div className="app">
    <Menu />
   
     <Routes>
    
    <Route path="/" element={ <Product/> } />
    <Route path="/dashboard" elemen={<Dashboard />}/>
   
    <Route path="/cart" element={<Cart />}/> 
   
    </Routes>
  
   
   </div>
  )
}

export default App
