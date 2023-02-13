import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  background-color: #fff;
  border-radius: 18px;
  margin: 1rem;
  padding-bottom: 1rem;
  white-space: normal;
  box-shadow: 2px 4px 12px rgb(0 0 0 / 8%);
  transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);

  &:hover {
    box-shadow: 2px 4px 16px rgb(0 0 0 / 16%);
    transform: scale3d(1.01, 1.01, 1.01);
  }

  width: 20rem;
  min-height: 20rem;

  @media (max-width: 460px) {
    width: 85vw;
  }

  h3 {
    font-size: 12px;
    line-height: 1.33337;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 1rem;
    margin-right: 1rem;
  }
`;
export const Description = styled.div<{ seeMore: boolean }>`
  font-size: 18px;
  line-height: 1.1;
  font-weight: 300;
  letter-spacing: 0.007em;
  margin-bottom: 0.5rem;
  color: black;
  height: ${props => (props.seeMore ? 'auto' : '7em')};
`;

export const MyXPContent = styled.div<{ seeMore: boolean }>`
  font-size: 14px;
  line-height: 1.23536;
  font-weight: 400;
  letter-spacing: -0.022em;
  margin: 0.5rem 0;
  margin-right: 1rem;
  height: ${props => (props.seeMore ? 'auto' : '3m')};
`;

export const ContentInfo = styled.section`
  padding: 30px;
  padding-bottom: 0px;
  width: 20rem;
`;

export const ContentImage = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 7rem;
    width: 7rem;
  }
`;

export const ReduceContent = styled.h3``;
