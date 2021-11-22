import styled from 'styled-components';

import { 
  Container,
  Col 
} from 'react-bootstrap';

export const StyledContainer = styled(Container)`
height: 100px;
position: relative;
bottom: 0;
color: white;
background: linear-gradient(to top, #808080 49%, #ffffff 94%);
padding-top: 50px;

@media screen and (max-width: 800px) {
  height: 120px;
  padding-top: 30px;
}
`;

export const StyledCol = styled(Col)`
  display: flex;
  justify-content: center;
  
`;