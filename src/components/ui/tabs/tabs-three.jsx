import React from 'react';
import {StyledSpan, TabsWrapper} from './styled.js';




function TabsThree({energyValue, nutritionalValue}){
  return (
    <TabsWrapper>
        <p><StyledSpan>Энергетическая ценность: </StyledSpan>{energyValue}</p>
        <p><StyledSpan>Пищевая ценность: </StyledSpan>{nutritionalValue}</p>
    </TabsWrapper>
  )
}

export default TabsThree;