import React from 'react';
import Header from '@components/blocks/header/header.jsx';
import Footer from '@components/blocks/footer/footer.jsx';
import { Outlet } from "react-router-dom";




function MainLayout({children}){
  return (
    <>
        <Header />
        <main>
          <Outlet  />
        </main>
        <Footer />
    </>
  )
}

export default MainLayout;