import styled from "styled-components";


export const StyledButtonProductInfo = styled.button`
padding:8px 12px;
background-color:${(props) => props.active ? "rgba(136, 170, 77, 1)" : "rgba(246, 246, 246, 1)"};
font-size:14px;
font-weight:400;
box-sizing:border-box;
display:inline-block;
cursor: pointer;
margin-right:8px;
border:none;
@media(max-width:480px){
    margin:0;
}
`

export const Content = styled.div`
`
export const StyledProductAccardeon = styled.div`
:last-child{
    margin-right:0;
}
@media(max-width:480px){
    text-align:center;
    display:flex;
    flex-direction:column;
    gap:5px;
}
`