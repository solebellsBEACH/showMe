import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Divider, useMediaQuery } from '@mui/material';

import { Document, IReduxState } from '../../interface';
import { ImageModal } from '../ImageModal';
import { Container, ImageContainer, Content, ContentImage } from './styles';

export interface ITextBoxProps extends Document {
  align?: 'left' | 'right';
  hobbieTemplate?: boolean;
}

export const TextBox = ({
  align = 'left',
  hobbieTemplate = false,
  header,
  image_url,
  secondary_text,
  primary_text,
  subtitle,
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
          alt={`imageContainer${header}`}
          src={image_url}
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
        image={image_url}
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
          <h1>{header}</h1>
          {hobbieTemplate && subtitle && <h3>{subtitle}</h3>}
          <h2>{primary_text}</h2>
          <h2>{secondary_text}</h2>
        </Content>
        {align === 'right' && !matches && <Image />}
      </Container>
      <Divider />
    </>
  );
};
