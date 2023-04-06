import { useRouter } from 'next/router';
import React from 'react';

import { Container } from './styles';

interface IInformationProps {
  header: string;
  text: string;
}
export const Information = ({ header, text }: IInformationProps) => {

  const router = useRouter()
  return (
    <Container
      onClick={() => router.push('/stacks')}
    >
      <section>
        <div>
          <h2>{header}</h2>
        </div>
        <p>{text}</p>
      </section>
    </Container>
  );
};