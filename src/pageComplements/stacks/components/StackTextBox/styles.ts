import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.86);
  border-radius: 1.8rem;
  margin: 0.75rem;
  padding: 1.4rem;
  white-space: normal;
  box-shadow: 0 22px 52px rgba(42, 42, 94, 0.08);
  border: 1px solid rgba(42, 42, 94, 0.08);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  min-height: 24rem;

  &:hover {
    box-shadow: 0 30px 70px rgba(42, 42, 94, 0.12);
    transform: translateY(-6px);
  }

  width: 20rem;

  @media (max-width: 460px) {
    width: calc(100vw - 4rem);
  }
`;

export const ContentImage = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1.35rem;
  background: rgba(77, 77, 171, 0.12);
  color: ${({ theme }) => theme.templateColor3};
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;

  img {
    height: 2.4rem;
    width: 2.4rem;
  }
`;

export const ContentInfo = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;

  h3 {
    font-size: 1.45rem;
    line-height: 1.15;
    font-weight: 700;
    color: ${({ theme }) => theme.templateColor5};
  }
`;

export const ExperienceBadge = styled.span`
  display: inline-flex;
  align-self: flex-start;
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  background: rgba(42, 42, 94, 0.08);
  color: ${({ theme }) => theme.templateColor5};
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.gray3};
`;

export const MyXPContent = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.templateColor5};
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: auto;

  span {
    padding: 0.45rem 0.7rem;
    border-radius: 999px;
    background: ${({ theme }) => theme.gray1};
    color: ${({ theme }) => theme.templateColor5};
    font-size: 0.8rem;
    font-weight: 600;
  }
`;
