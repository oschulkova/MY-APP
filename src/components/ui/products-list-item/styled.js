import styled from "styled-components";


export const StyledProductsListItem = styled.li`
background-color:rgba(255, 255, 255, 1);
padding:20px;
display:flex;
gap:20px;
margin-bottom:12px;
&:last-child{
    margin-bottom:0;
}
@media(max-width:760px){
    flex-direction:column;
    align-items:center;
}
@media(max-width:480px){
    padding:5px;
}
`
export const StyledTitleProduct = styled.h3`
margin:0;
`