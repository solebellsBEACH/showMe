import React from 'react';
import { Container, StyledMenuIcon } from './styles';

export interface IDrawerButtonProps {
  onClick: () => void;
}

export const DrawerButton = ({ onClick }: IDrawerButtonProps) => {
  return (
    <Container onClick={onClick}>
      <StyledMenuIcon />
    </Container>
  );
};
