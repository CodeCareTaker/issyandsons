import React from 'react';

import {  
  Row
} from 'react-bootstrap';

import {
  StyledContainer,
  StyledCol
} from './footer.styles';

const Footer = () => {

  return(
    <StyledContainer fluid>
      <Row class="justify-content-md-center">
        <StyledCol sm={12} md={4}>
          Issy and Sons 2021 
        </StyledCol>
        <StyledCol sm={12} md={4}>
          Tel: (905)-902-6989
        </StyledCol> 
        <StyledCol sm={12} md={4}>
          Email: issyandsons@yahoo.ca
        </StyledCol>
      </Row>
    </StyledContainer>
  );
}

export default Footer;
