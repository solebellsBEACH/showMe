import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 30rem;
  background: ${({ theme }) => theme.white};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 5vh 5vw;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  width: 100%;
  min-height: 30rem;
  margin-left: 1vw;
  @media (max-width: 1200px) {
    margin-top: 4vh;
  }

  h1 {
    font-weight: 400;
  }

  h2 {
    margin-left: 2vw;
    text-align: left;
    font-size: 21px;
    margin-bottom: 2vh;
    margin-top: 2vh;
    font-weight: 300;
  }
`;

export const PerfilContainer = styled(Image)`
  width: 100vw;
  height: 30vw;
  border-radius: 0.2vw;
  object-fit: cover;
  filter: grayscale(100%);
  margin-right: 1vw;

  @media (max-width: 1200px) {
    margin-right: none;
    margin-bottom: 0.8vh;
    border-radius: 1vw;
    width: 100%;
    height: 40vw;
  }
`;
