import React from 'react';
import {StyledHero, StyledHeroInfo, StyledHeriTitle} from './styled.js';


function HeroSection(){
  return (
    <StyledHero>
        <StyledHeroInfo>
        <StyledHeriTitle marginBottom={24}>Магазин фермерских продуктов с доставкой</StyledHeriTitle>
        <p>Все продукты изготавливаются под заказ. 
            Фермеры начинают готовить продукты за день до отправки заказа клиентам. 
            Именно поэтому мы принимаем заказы заранее и доставляем продукты максимально свежими.
        </p>
        </StyledHeroInfo>
    </StyledHero>
  )
}

export default HeroSection;