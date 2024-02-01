import styled from "styled-components";
import { Link } from "react-router-dom";



export const StyledHeader = styled.header`
display:flex;
margin:0;
padding:10px 90px;
justify-content:space-between;
@media(max-width:485px){
    padding:10px 10px;
}
`

export const StyledLink = styled(Link)`
text-decoration:none;
color: rgba(51, 51, 51, 1);
`
