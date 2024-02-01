import styled from "styled-components";




export const StyledAboutListItem = styled.li`
background-color:${(props) => (props.isstatus ? "rgba(225, 237, 206, 1)" : "rgba(248, 221, 215, 1)")}; 
display:block;
padding:20px;
text-align:start;
@media(max-width:625px){
    padding:10px;
}
@media(max-width:510px){
    text-align:center;
}
`

export const StyledStatusListItem = styled.p`
background-color:${(props) => (props.isstatus ? "rgba(136, 170, 77, 1)" : "rgba(247, 85, 49, 1)")}; 
color:rgba(255, 255, 255, 1);
display:inline;
padding:2px 10px;
`
export const StyledTitleListItem = styled.h3`
margin-top:4px;
margin-bottom:16px;
`

export const StyledWrapperTitleInfo = styled.div`
padding-left:76px;
position:relative;
@media(max-width:510px){
    padding-left:0;
}
&::after{
    content:"";
    position:absolute;
    background-image:url(${(props) => (props.imgurl)});
    background-repeat: no-repeat;
    top:0;
    bottom:0;
    left:0;
    width:56px;
    @media(max-width:510px){
        display:none;}
}
`