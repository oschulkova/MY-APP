import React from 'react';
import StyledButton from './styled.js';




function Button({children, marginTop, marginBottom, paddingWidth, onClick}){
  return (
    <StyledButton margintop={marginTop} marginbottom={marginBottom} paddingWidth={paddingWidth} onClick={onClick}>{children}</StyledButton>
  )
}

export default Button;