import React from 'react';
import Logo from '@components/ui/logo/logo.jsx';
import {StyledHeader, StyledLink} from './styled.js';
import Button from "@components/ui/button/button.jsx";





function Header(){
  return (
    <StyledHeader>
    <StyledLink to="/"> 
      <Logo />
    </StyledLink>
    <StyledLink to="/products"> 
      <Button>Купить</Button>
    </StyledLink>
    </StyledHeader>
  )
}

export default Header;
