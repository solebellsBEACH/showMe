import styled from 'styled-components';

export const Container = styled.div`
  width: auto;
  margin: 1rem 0;
  padding: 2rem;
  text-decoration: none;
  color:black;    
  transition: color 0.5s ease;
  transition: background-color 0.5s ease;
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
  .icon{
    margin-bottom: 1rem;
    color:${props => props.theme.gray4};
    transition: color 0.5s ease;

    &:hover{
      color:${props => props.theme.white};
    }    
  }

  &:hover{
    background-color:${props => props.theme.templateColor3};
    color:${props => props.theme.white};
    .icon{
      color:${props => props.theme.white};
  }
  }
`;
