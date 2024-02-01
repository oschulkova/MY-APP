import styled from "styled-components";



export const StyledFooter = styled.footer`
display:flex;
padding:10px 90px;
justify-content:space-between;
align-items: center;
border-top: 1px solid rgba(0, 0, 0, 0.1);
margin-top: auto;
@media(max-width:510px){
    flex-direction:column;  
    text-align:center; 
    padding:10px 40px; 
}
`

export const StyledCreaterInfo = styled.p`
color:rgba(51, 51, 51, 1);
`

