import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';

export const Container = styled.div`
  width: 100%;
  min-height: 3.5rem;
  background: ${({ theme }) => theme.templateColor5};
  padding: 2vh 4vw;

  color: ${({ theme }) => theme.white};
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 3rem;
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;

export const StyledMenuIcon = styled(MenuIcon)`
  height: 3rem;
  width: 3rem;
  @media (max-width: 768px) {
    height: 2.5rem;
    width: 2.5rem;
  }
`;
