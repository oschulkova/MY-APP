import {React, useState} from 'react';
import {StyledProductsBacketForm, StyledBacketWrapper, StyledProductsBacketList, StyledFinalPriseWrapper, StyledLabel, StyledInput, StyledTitle, StyledButton} from './styled.js';
import ProductsInfo from '@src/facts/products-info.js';


function MakeOrder(){
  const [value, setValue] = useState(0);
  const [address, setAddress] = useState("");
  const clickOnButton = () => {
    alert(`Заказ на сумму: ${value}, отправится по адресу: ${address}`);
  };
  return (
  <StyledProductsBacketForm>
    <StyledBacketWrapper>
      <StyledTitle>Выберите продукты</StyledTitle>
        <StyledProductsBacketList>
          {ProductsInfo.map((ProductsInfo) => (
            <li key={ProductsInfo.id}>
                <StyledLabel>
                  {ProductsInfo.name}
                  <StyledInput type="checkbox" id={ProductsInfo.id} onChange={(event) => (event.target.checked ? (setValue(value+(+ProductsInfo.price))) : (setValue(value-(+ProductsInfo.price))))}/>  
                </StyledLabel>
            </li>
          ))}
        </StyledProductsBacketList>
    </StyledBacketWrapper>
    <StyledFinalPriseWrapper>
        <StyledTitle>Сделать заказ</StyledTitle>
          <label>
              <input type='addres' value={address} placeholder="Введите адрес доставки" onChange={(e)=>(setAddress(e.target.value))}/>
          </label>
          <p>Цена {value}</p>
          <StyledButton  onClick={clickOnButton}>Купить</StyledButton>
    </StyledFinalPriseWrapper>
  </StyledProductsBacketForm>
  )
}

export default MakeOrder;