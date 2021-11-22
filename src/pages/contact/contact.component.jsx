import React from 'react';
import imageUrl from '../../assets/issycontact.jpg';

import { 
  ContactPageContainer,
  HeroContainer, 
  ContactPageTitle, 
  ContactPageText 
} from './contact.styles';

const ContactPage = () => {
  return (
    <ContactPageContainer>
      <HeroContainer>
        <img src={imageUrl} alt='hero'/>
      </HeroContainer>
      <ContactPageTitle>Contact Us:</ContactPageTitle>
      <ContactPageText>
        We want your Scrap experience to be a pleasant, hassle free one. Please give us a call at (905) 902 6989, friendly representatives will be happy to assist you.
        <br />
        <br />
        Tel: (905) 902 6989
        <br />
        <br />
        Email: issyandsons@yahoo.ca
      </ContactPageText>
    </ContactPageContainer>
  );
}

export default ContactPage;