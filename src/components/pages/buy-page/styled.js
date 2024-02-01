import styled from "styled-components";


const BuyWrapper = styled.div`
background-color:rgba(246, 246, 246, 1);
padding:40px 90px;
display:grid;
grid-template-areas:
"order products products"
". products products";
gap:20px;

@media(max-width:1300px){
    padding:40px 60px;
};
@media(max-width:1200px){
    display:block;
}
@media(max-width:795px){
    padding: 30px 20px;
}
`

export default BuyWrapper;