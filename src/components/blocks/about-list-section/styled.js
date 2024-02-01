import styled from "styled-components";
import { Link } from "react-router-dom";



export const StyledAboutListSection = styled.section`
margin:100px 90px;
text-align:center;
@media(max-width:1300px){
    margin:80px 60px;
};
@media(max-width:795px){
    margin: 60px 20px;
}
`

export const StyledAboutList= styled.ul`
list-style:none;
margin:0;
padding:0;
margin-top:64px;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-column-gap: 20px;
grid-row-gap: 20px;
@media(max-width:1200px){
    grid-template-columns: repeat(1, 1fr);
}
`

export const StyledLink = styled(Link)`
text-decoration:none;
color: rgba(51, 51, 51, 1);
`
