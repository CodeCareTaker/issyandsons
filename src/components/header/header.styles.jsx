import styled from 'styled-components';
import { 
  Navbar,
  Container 
} from 'react-bootstrap';

export const StyledNavbar = styled(Navbar)`
  background: linear-gradient(to top, #808080 39%, #ffffff 94%);
  img {
    max-width: 100%;
    height: auto;
  }
`;

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between
  
`;