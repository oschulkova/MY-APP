import React from 'react';
import { GlobalStyle } from "./styled.js";
import Normalize from 'react-normalize';
import BuyPage from '@components/pages/buy-page/buy-page.jsx';
import MainPage from '@components/pages/main-page/main-page.jsx';
import MainLayout from '@components/layout/layout.jsx';
import ScrollTop  from '@components/ui/scroll-top.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";





function App(){
  return (
    <>
    <Normalize />
    <GlobalStyle />
    <BrowserRouter>
    <ScrollTop />
      <Routes>
      <Route 
      path="/"
      element={<MainLayout />}
      >
        <Route
          index
          element={<MainPage />}
        />
        <Route
          path="/products"
          element={<BuyPage />}
        />
        <Route
          path="/*"
          element={<h1>Такой страницы нет ;-6</h1>}
        />
        </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

