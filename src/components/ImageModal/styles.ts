import { Modal } from '@mui/material';
import styled from 'styled-components';

export const Container = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Content = styled.div``;
export const ContentImage = styled.img`
  width: 60vw;
  height: auto;
  @media (max-width: 900px) {
    width: 90vw;
  }
`;
