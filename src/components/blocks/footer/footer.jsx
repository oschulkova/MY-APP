import React from 'react';
import Logo from '@components/ui/logo/logo.jsx';
import {StyledFooter, StyledCreaterInfo} from './styled.js';





function Footer(){
  return (
    <StyledFooter>
    <Logo />
    <StyledCreaterInfo>Создано 13.12.23 Чулковой О.С.</StyledCreaterInfo>
    </StyledFooter>
  )
}

export default Footer;
