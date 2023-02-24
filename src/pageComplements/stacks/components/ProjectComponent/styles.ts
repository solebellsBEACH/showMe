import styled from 'styled-components';

export const Container = styled.div<{ aling: 'left' | 'rigth' }>`
  width: 100%;
  min-height: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${props => (props.aling === 'left' ? 'row' : 'row-reverse')};
  padding: 5vh 5vw;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  width: 100%;
  min-height: 25rem;
  margin-left: 1vw;
  @media (max-width: 1200px) {
    margin-top: 4vh;
  }

  h1 {
    font-weight: 400;
  }

  h2 {
    margin-left: 1rem;
    text-align: left;
    font-size: 21px;
    margin-bottom: 2vh;
    margin-top: 2vh;
    font-weight: 300;
  }

  ul{
    margin-left: 2rem;
  }
  li{
  font-size: larger;
  transition: color 0.3s;

  &:hover{
    color:#4D4DAB;
  }
  }
`;

export const PerfilContainer = styled.img`
  width: 100vw;
  height: 30vw;
  border-radius: 0.2vw;
  object-fit: cover;
  /* filter: grayscale(100%); */
  margin: 0 1vw;

  @media (max-width: 1200px) {
    margin: 0;
    margin-bottom: 0.8vh;
    border-radius: 1vw;
    width: 100%;
    height: 40vw;
  }
`;
