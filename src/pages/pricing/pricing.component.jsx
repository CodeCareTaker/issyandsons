import React from 'react';
import imageUrl from '../../assets/pricingphoto.jpg';

import { 
  PricingPageContainer, 
  HeroContainer,
  PricingPageTitle, 
  PricingPageSubtitle, 
  PricingPageText
} from './pricing.styles';

const PricingPage = () => {
  return (
    <PricingPageContainer>
      <HeroContainer>
        <img src={imageUrl} alt='hero'/>
      </HeroContainer>
      <PricingPageTitle>Pricing:</PricingPageTitle>
        <PricingPageSubtitle>Pricing Notes</PricingPageSubtitle>
        <PricingPageText>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, quaerat tenetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, quaerat tenetur.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, quaerat tenetur.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, quaerat tenetur.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, quaerat tenetur.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, quaerat tenetur.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, quaerat tenetur.
        </PricingPageText>
    </PricingPageContainer>
  );
}

export default PricingPage;