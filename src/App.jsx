import './App.css';
import 'react-toastify/dist/ReactToastify.css'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/Index';
import Navbar from './components/NavBar/NavBar';
import CartWidget from './components/CartWidget/Index';
import ItemDetailContainer from './components/ItemDetailContainer/Index';
import Cart from './components/Cart/index';
import CartProvider from './Context/CartContext';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <>
    <BrowserRouter>
    <CartProvider>
    <Navbar/>
    <Routes>
    <Route path='/' element= { <ItemListContainer />} />
    <Route path='/categoria/:categoriaId' element= { <ItemListContainer />} />
    <Route path='/CartWidget' element= { <CartWidget />} />
    <Route path='/detalle/:detalleId' element= { <ItemDetailContainer />} />
    <Route path='/Cart' element={<Cart/>} />
    </Routes>
    </CartProvider>
    <ToastContainer/>
    </BrowserRouter>
    </>
  );
}

export default App;
