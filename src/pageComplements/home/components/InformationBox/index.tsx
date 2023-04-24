import { useRouter } from 'next/router';
import React from 'react';

import { Container } from './styles';
import { HowICanHelpYouIconsEnum } from '../../../../interface/enums';
import { HowICanHelpYouIcons } from '../../../../mocks/HowICanHelpYouIcons';

interface IInformationProps {
  header: string;
  text: string;
  icon: HowICanHelpYouIconsEnum;
}
export const Information = ({ header, text, icon }: IInformationProps) => {
  const router = useRouter();
  return (
    <Container onClick={() => router.push('/stacks')}>
      <div className="icon">{HowICanHelpYouIcons(icon)}</div>
      <section>
        <div>
          <h2>{header}</h2>
        </div>
        <p>{text}</p>
      </section>
    </Container>
  );
};
