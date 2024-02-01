import React from 'react';
import {StyledProductLabel, StyledProductListItem} from './styled.js';




function ProductBascketItem({name}){
  return (
    <StyledProductLabel>
      <StyledProductListItem>
        {name}
        <input type="checkbox"/>
      </StyledProductListItem>
    </StyledProductLabel>
  )
}

export default ProductBascketItem;