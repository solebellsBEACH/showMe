import styled from 'styled-components';

export const Container = styled.div`
  width: auto;
  margin: 1rem 0;
  padding: 2rem;
  text-decoration: none;
  color:black;    

  h2 {
    font-size: 24px;
    font-weight: 500;
    line-height: 1.25;
    margin-bottom: 12px;
  }
  p {
    font-weight: 300;
  }
  &:hover {
    box-shadow: 0px 0px 40px rgb(0 0 0 / 16%);
  }

  @media (max-width: 768px) {
    width: 80vw;
    box-shadow: 0px 0px 40px rgb(0 0 0 / 10%);
  }
`;
