import React from 'react';
import imageUrl from '../../assets/homepagephoto.jpg'

import { 
  HomePageContainer,
  HeroContainer,
  HomePageTitle, 
  HomePageSubtitle, 
  HomePageText 
} from './homepage.styles';

const HomePage = () => (
  <HomePageContainer>
    <HeroContainer>
      <img src={imageUrl} alt='hero'/>
    </HeroContainer>
    <HomePageTitle>Welcome to Issy and Sons!</HomePageTitle>
    <HomePageText>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam fugit saepe doloribus molestiae quas reiciendis voluptatibus eveniet quidem, beatae ea eligendi velit accusantium ullam vitae, odit rem itaque ipsa voluptate.
    </HomePageText>
	   <HomePageSubtitle>Why choose us?</HomePageSubtitle>
	   <HomePageText>
     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure eveniet dignissimos ut nihil possimus, ex molestiae reiciendis perferendis aut assumenda ullam, quaerat deleniti voluptatum. Mollitia voluptates accusamus nobis hic corporis!.
       <br />
       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure eveniet dignissimos ut nihil possimus, ex molestiae reiciendis perferendis aut assumenda ullam, quaerat deleniti voluptatum. Mollitia voluptates accusamus nobis hic corporis!
       <br />
       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure eveniet dignissimos ut nihil possimus, ex molestiae reiciendis perferendis aut assumenda ullam, quaerat deleniti voluptatum. Mollitia voluptates accusamus nobis hic corporis!
       <br />
       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure eveniet dignissimos ut nihil possimus, ex molestiae reiciendis perferendis aut assumenda ullam, quaerat deleniti voluptatum. Mollitia voluptates accusamus nobis hic corporis!
     </HomePageText>
  </HomePageContainer>
);

export default HomePage;
