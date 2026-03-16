import MenuIcon from '@mui/icons-material/Menu';
import styled from 'styled-components';

export const Container = styled.button`
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(42, 42, 94, 0.12);
  color: ${({ theme }) => theme.templateColor5};
  display: flex;
  justify-content: center;
  align-items: center;
  right: 2rem;
  position: fixed;
  top: 2rem;
  border-radius: 999px;
  height: 4rem;
  width: 4rem;
  backdrop-filter: blur(14px);
  box-shadow: 0 18px 40px rgba(42, 42, 94, 0.14);
  z-index: 20;
  transition: transform 0.25s ease, background-color 0.25s ease;

  &:hover {
    transform: translateY(-3px);
    background: ${({ theme }) => theme.white};
  }

  @media (max-width: 768px) {
    right: 1rem;
    top: 1rem;
    height: 3.25rem;
    width: 3.25rem;
  }
`;

export const StyledMenuIcon = styled(MenuIcon)`
  height: 2rem;
  width: 2rem;

  @media (max-width: 768px) {
    height: 1.8rem;
    width: 1.8rem;
  }
`;
