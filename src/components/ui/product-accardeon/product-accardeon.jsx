import {React, useState}from 'react';
import {StyledButtonProductInfo, Content, StyledProductAccardeon} from './styled.js'
import TabsOne from '@components/ui/tabs/tabs-one.jsx';
import TabsTwo from '@components/ui/tabs/tabs-two.jsx';
import TabsThree from '@components/ui/tabs/tabs-three.jsx';


function ProductAccardeon({description, price, placeOfOrigin, time, nutritionalValue, energyValue}){
  const tabsProduct = [
    {
        id:1,
        title:"Описание",
        content:<TabsOne description={description} price={price}/>
    },
    {
        id:2,
        title:"Характеристики",
        content:<TabsTwo placeOfOrigin={placeOfOrigin} time={time}/>
    },
    {
        id:3,
        title:"Свойства",
        content:<TabsThree nutritionalValue={nutritionalValue} energyValue={energyValue}/>
    }
]
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <StyledProductAccardeon>
        {tabsProduct.map((tabsProduct, index)=>(
        activeIndex === index ?(
          <StyledButtonProductInfo key={tabsProduct.id} active='true'>{tabsProduct.title}</StyledButtonProductInfo>
        )
        :
        (            
          <StyledButtonProductInfo  key={tabsProduct.id} onClick={() => setActiveIndex(index)}>{tabsProduct.title}</StyledButtonProductInfo>
        )
        ))}
    </StyledProductAccardeon>
    <div>
      {tabsProduct.map((tabsProduct, index)=>(
        activeIndex === index ?(
          <Content key={tabsProduct.id}>{tabsProduct.content}</Content>
        )
        :
        (null)
        ))}
    </div>
    </>
    
  )
}

export default ProductAccardeon;