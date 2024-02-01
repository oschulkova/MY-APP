import React from 'react';
import {StyledProductsWrapper, StyledProductsUl} from './styled.js';
import ProductsInfo from '@src/facts/products-info.js';
import ProductsItem from '@components/ui/products-list-item/products-list-item.jsx';


function ProductList(){
  return (
  <StyledProductsWrapper>
    <StyledProductsUl>
      {ProductsInfo.map((ProductsInfo) => (
        <ProductsItem  id={ProductsInfo.id} key={ProductsInfo.id} {...ProductsInfo}/>
      ))}
    </StyledProductsUl>
  </StyledProductsWrapper>
  )
}

export default ProductList;