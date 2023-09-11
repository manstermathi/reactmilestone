import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Milestone } from './component/milestone';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Product } from './component/product';
import { Menu } from './component/menu';

function App() {
  return (
    <>
    {/* <Milestone/> */}
    {/* <menu/> */}
    {/* <Product/> */}

    <BrowserRouter>
    <Routes>

      <Route path='/' element={[<Menu/>,<Milestone/>]}/>
      <Route path='/product/:id' element={[<Menu/>,<Product/>]}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
