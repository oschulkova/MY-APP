import React from 'react';
import BuyWrapper from './styled.js';
import ProductList from '@components/blocks/products-list/products-list.jsx';
import MakeOrderSection from '@components/blocks/make-order/make-order.jsx';




function BuyPage(){
  return (
    <BuyWrapper>
      <MakeOrderSection />
      <ProductList/>
    </BuyWrapper>
  )
}

export default BuyPage;

