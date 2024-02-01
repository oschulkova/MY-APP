import React from 'react';
import {StyledAboutListItem, StyledStatusListItem, StyledTitleListItem, StyledWrapperTitleInfo} from './styled.js';






function AboutListItem({text,title,status, isStatus, imgUrl}){
  return (
    <StyledAboutListItem isstatus={isStatus}>
      <StyledWrapperTitleInfo imgurl={imgUrl}>
        <StyledStatusListItem isstatus={isStatus}>{status}</StyledStatusListItem>
        <StyledTitleListItem>{title}</StyledTitleListItem>
      </StyledWrapperTitleInfo>
      <p>{text}</p>
    </StyledAboutListItem>
  )
}

export default AboutListItem;
