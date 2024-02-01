import React from 'react';
import {StyledProductsListItem, StyledTitleProduct} from './styled.js';
import ProductAccardeon from '@components/ui/product-accardeon/product-accardeon.jsx';






function ProductsItem({...ProductsInfo}){
  return (
    <StyledProductsListItem id={ProductsInfo.id}>
        <img src={ProductsInfo.img} alt={ProductsInfo.name} height="248" width="248"/>
        <div>
            <StyledTitleProduct>{ProductsInfo.name}</StyledTitleProduct>
            <ProductAccardeon {...ProductsInfo} />
        </div>
    </StyledProductsListItem>
  )
}

export default ProductsItem;