import React from 'react';
import {StyledSpanPrice, StyledDescription, TabsWrapper} from './styled.js';




function TabsOne({price, description}){
  return (
    <TabsWrapper>
        <StyledDescription>{description}</StyledDescription>
        <StyledSpanPrice>{price} руб / 500 гр</StyledSpanPrice>
    </TabsWrapper>
  )
}

export default TabsOne;