import React from 'react';
import {StyledSpan, TabsWrapper} from './styled.js';


function TabsTwo({placeOfOrigin, time}){
  return (
    <TabsWrapper>
        <p><StyledSpan>Срок годности: </StyledSpan>{time}</p>
        <p><StyledSpan>Место происхождения: </StyledSpan>{placeOfOrigin}</p>
    </TabsWrapper>
  )
}

export default TabsTwo;