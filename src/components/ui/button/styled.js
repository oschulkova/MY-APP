import styled from "styled-components";



const StyledButton = styled.a`
padding:16px 97px;
background-color:rgba(252, 155, 39, 1);
color:rgba(255, 255, 255, 1);
font-weight:700;
box-sizing:border-box;
display:inline-block;
margin-top:${(props) => props.margintop || 0}px;
margin-bottom:${(props) => props.marginbottom || 0}px;
padding-left:${(props) => props.paddingWidth || 97}px;
padding-right:${(props) => props.paddingWidth || 97}px;
cursor: pointer;
`

export default StyledButton;