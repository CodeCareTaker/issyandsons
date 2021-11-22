import styled from 'styled-components';

export const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
	
	img {
		position: relative;
		width: 100%;
		max-height: 500px;
		object-fit: cover;
	}
`

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

export const HomePageTitle = styled.h3` 
	text-transform: capitalize;
	font-size: 32px
	margin-bottom: 30px;
	text-align: center;
	color: #33ccff;
`

export const HomePageSubtitle = styled.h4` 
	text-transform: capitalize;
	font-size: 32px
	margin-bottom: 30px;
	text-align: center;
	color: #33ccff;
`

export const HomePageText = styled.p`
	max-width: 775px;
	line-height: 2;
	padding: 0 20px;
	margin-bottom: 30px;
	text-align: center;
`