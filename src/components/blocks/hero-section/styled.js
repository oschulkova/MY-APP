import styled from "styled-components";
import HeroImage from "@components/asets/Frame.svg";



export const StyledHero = styled.section`
display:block;
background-color:rgba(216, 236, 254, 1);
padding: 183px 90px;
position:relative;
@media(max-width:1200px){
    padding: 160px 60px;
}
@media(max-width:880px){
    padding: 20px 20px;
    padding-top:250px;
}


&::after{
    content:"";
    position:absolute;
    background-image:url(${HeroImage});
    background-repeat: no-repeat;
    top:77px;
    bottom:0;
    right:177px;
    width:273px;
    @media(max-width:1200px){
        right:60px;
    }
    @media(max-width:880px){
        top:0;
        right:40px;
        height:250px;
    }
}

&::before{
    content:"";
    position:absolute;
    background: rgba(196, 226, 255, 1);
    clip-path: circle(50%);
    height: 446px;
    width: 446px;
    top:50px;
    right:100px;
    @media(max-width:1200px){
        clip-path: circle(40%);
        right:0;
    }
    @media(max-width:880px){
        clip-path: circle(30%);
        top:-80px;
        right:-30px;
    }
}
`
export const StyledHeroInfo = styled.div`
width:525px;
@media(max-width:1200px){
    width:400px;
}
@media(max-width:880px){
    padding: 40px 40px;
    width:auto;
}
@media(max-width:795px){
    padding: 20px 10px;
    text-align:center;
}
`
export const StyledHeriTitle = styled.h1`
font-size:36px;
@media(max-width:1200px){
    font-size:28px;
    line-height:27px;
}
`

