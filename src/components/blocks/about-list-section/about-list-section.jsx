import React from 'react';
import AboutListItem from '@components/ui/about-list-item/about-list-item.jsx';
import AboutCardFacts from '@src/facts/about-card.js';
import {StyledAboutList, StyledAboutListSection, StyledLink} from './styled.js';
import Button from '@components/ui/button/button.jsx';






function AboutListSection(){
  return (
  <StyledAboutListSection>
    <h2>Почему фермерские продукты лучше?</h2>
    <StyledAboutList>
    {AboutCardFacts.map((AboutCardFacts) => (
          <AboutListItem key={AboutCardFacts.id} {...AboutCardFacts} />
        ))}
    </StyledAboutList>
    <StyledLink to="/products"> 
    <Button marginTop={64}>Купить</Button>
    </StyledLink>
  </StyledAboutListSection>
  )
}

export default AboutListSection;