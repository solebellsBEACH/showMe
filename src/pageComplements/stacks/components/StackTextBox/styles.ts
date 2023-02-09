import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    background-color: #fff;
    border-radius: 18px;
    margin: 1rem;

    white-space: normal;
    box-shadow: 2px 4px 12px rgb(0 0 0 / 8%);
    transition: all .3s cubic-bezier(0,0,.5,1);

    &:hover{
        box-shadow: 2px 4px 16px rgb(0 0 0 / 16%);
      transform: scale3d(1.01,1.01,1.01);
    }

    width: 22rem;
    min-height: 26rem;

    @media (max-width: 460px) {
        width: 85vw;
  }

  h2{
    font-size: 16px;
    line-height: 1.23536;
    font-weight: 400;
    letter-spacing: -.022em;
    padding-top: 10px;

  }
  h1{
    font-size: 26px;
    line-height: 1.14286;
    font-weight: 600;
    letter-spacing: .007em;
    margin-bottom: 1rem;
  }
  h3{
    font-size: 16px;
    line-height: 1.33337;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
`

export const ContentInfo = styled.section`
  padding: 30px;
  width: 20rem;

`

export const ContentImage = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;

img{
 height: 7rem;
 width: 7rem;
}
`