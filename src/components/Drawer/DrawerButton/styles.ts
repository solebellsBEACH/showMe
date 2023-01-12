import MenuIcon from '@mui/icons-material/Menu';
import styled from 'styled-components';

export const Container = styled.button`
  background: none repeat scroll 0 0 ${({ theme }) => theme.templateColor5};
  border: medium none;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 2%;
  position: fixed;
  top: 2%;
  border-radius: 100vw;
  height: 4rem;
  width: 4rem;

  @media (max-width: 768px) {
    height: 3rem;
    width: 3rem;
  }
`;

export const StyledMenuIcon = styled(MenuIcon)`
  height: 3rem;
  width: 3rem;
  @media (max-width: 768px) {
    height: 2.8rem;
    width: 2.8rem;
  }
`;
