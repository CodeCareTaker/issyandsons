import React from 'react';
import imageUrl from '../../assets/about.jpg';

import { 
  AboutPageContainer,
  HeroContainer, 
  AboutPageTitle, 
  AboutPageSubtitle, 
  AboutPageText
} from './about.styles';

const AboutPage = () => {
  return (
    <AboutPageContainer>
      <HeroContainer>
        <img src={imageUrl} alt='hero'/>
      </HeroContainer>
      <AboutPageTitle>About Us:</AboutPageTitle>
      <br />
      <br />
      <AboutPageSubtitle>Hours:</AboutPageSubtitle>
      <AboutPageText>
        Monday  9 a.m. to 7 p.m.
        <br />
        Tuesday  9 a.m. to 7 p.m.
        <br />
        Wednesday  9 p.m. to 7 p.m.
        <br />
        Thursday  9 a.m. to 7 p.m.
        <br />
        Friday  9 a.m. to 7 p.m.
        <br />
        <br />
        <br />
        <AboutPageSubtitle>Location:</AboutPageSubtitle>
        <br />
        Issy and Sons
        <br />
        123 Nowhere Dr.
        <br />
        Filler, ON
        <br />
        R6M 0M1
        <br />
        Phone (905) 902-6989
      </AboutPageText>
    </AboutPageContainer>
  );
}

export default AboutPage;