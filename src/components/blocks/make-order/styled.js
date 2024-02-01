import styled from "styled-components";
import ChecboksOff from "@components/asets/checkboks-off.svg";
import ChecboksOn from "@components/asets/checkboks-on.svg";
import Button from "@components/ui/button/button.jsx";



export const StyledFinalPriseWrapper = styled.div`
background-color:rgba(255, 255, 255, 1);
padding:20px;
padding-top:0;
box-sizing: border-box;
@media(max-width:1200px){
    padding:20px;
}
`

export const StyledBacketWrapper = styled.div`
background-color:rgba(255, 255, 255, 1);
padding:20px;
box-sizing: border-box;
@media(max-width:1300px){
    padding:10px;
}
@media(max-width:795px){
    margin-bottom:10px;
}
`

export const StyledProductsBacketList = styled.ul`
list-style-type:none;
padding:0;
margin:0;
`
export const StyledProductsBacketForm = styled.form`
grid-area: order;
margin-bottom:20px;
@media(max-width:1200px){
    display:flex;
    justify-content: center;
    gap:20px;
}
@media(max-width:795px){
    display:block;
}
`

export const StyledTitle = styled.h2`
line-height:27px;
font-size:18px;
font-weight:bold;
margin-top:0;
`

export const StyledLabel = styled.label`
color:rgba(51, 51, 51, 1);
position:relative;
display:block;
margin-top:15px;
padding-right:24px;
`

export const StyledInput = styled.input`
-webkit-appearance:none;
-moz-appearance:none;
&::before{
    content:"";
    position:absolute;
    width:24px;
    height:24px;
    top:0;
    right:0;
    background-image:url(${ChecboksOff});
    margin-left:auto;
}
&:checked{
    &::before{
        background-image:url(${ChecboksOn});
    }}
`
export const StyledButton = styled(Button)`
padding-left:127px;

`