import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './pages/Products';
import Pricing from './pages/Pricing';
import HomePage from './pages/HomePage';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <h1>
      Helloo router
      <BrowserRouter>
        <Routes>
          <Route path='product' element={<Products />} />
          <Route path='pricing' element={<Pricing />} />
          <Route path='/' element={<HomePage />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </h1>
  );
}

export default App;
