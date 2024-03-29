import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Divider, useMediaQuery } from '@mui/material';

import { IReduxState } from '../../interface';
import { ImageModal } from '../ImageModal';
import { Container, ImageContainer, Content, ContentImage } from './styles';

export interface ITextBoxProps {
  align?: 'left' | 'right';
  title: string;
  subject?: string;
  description: string;
  myXP: string;
  image: string;
  hobbieTemplate?: boolean;
}

export const TextBox = ({
  align = 'left',
  description,
  title,
  myXP,
  image,
  hobbieTemplate = false,
  subject,
}: ITextBoxProps) => {
  const matches = useMediaQuery('(max-width:1250px)');
  const [imageHover, setImageHover] = useState(false);
  const [openImageModal, setOpenImageModal] = useState(false);
  const { languageInformation } = useSelector(
    (state: IReduxState) => state.application,
  );

  const Image = () => {
    const onMouseOver = () => {
      if (!hobbieTemplate) return;
      setImageHover(true);
    };
    const onMouseLeave = () => {
      if (!hobbieTemplate) return;
      setImageHover(false);
    };
    return (
      <ContentImage
        onClick={() => {
          setOpenImageModal(true);
        }}
      >
        <ImageContainer
          onHover={imageHover}
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
          alt={`imageContainer${title}`}
          src={image}
        />
        {imageHover && hobbieTemplate && (
          <h1 onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
            {languageInformation.textbox[0]}
          </h1>
        )}
      </ContentImage>
    );
  };

  return (
    <>
      <ImageModal
        image={image}
        open={openImageModal}
        onClose={() => {
          setOpenImageModal(false);
          setImageHover(false);
        }}
      />
      <Container>
        {align === 'right' && matches && <Image />}
        {align === 'left' && <Image />}
        <Content>
          <h1>{title}</h1>
          {hobbieTemplate && subject && <h3>{subject}</h3>}
          <h2>{description}</h2>
          <h2>{myXP}</h2>
        </Content>
        {align === 'right' && !matches && <Image />}
      </Container>
      <Divider />
    </>
  );
};
