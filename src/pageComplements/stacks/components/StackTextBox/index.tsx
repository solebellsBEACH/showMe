import React from 'react';
import { IListItems } from '../../../../interface';
import {
  Container,
  ContentImage,
  ContentInfo,
  Description,
  ExperienceBadge,
  MyXPContent,
  Tags,
} from './styles';

export const StackTextBox: React.FC<IListItems> = ({
  myXP,
  description,
  image,
  title,
  tags,
  experienceTime,
}) => {
  const fallbackInitials = title
    .split(' ')
    .map(word => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <Container>
      <ContentImage>
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <span>{fallbackInitials}</span>
        )}
      </ContentImage>
      <ContentInfo>
        {experienceTime && <ExperienceBadge>{experienceTime}</ExperienceBadge>}
        <h3>{title}</h3>
        <Description>{description}</Description>
        <MyXPContent>{myXP}</MyXPContent>
        {tags && tags.length > 0 && (
          <Tags>
            {tags.map(tag => (
              <span key={`${title}-${tag}`}>{tag}</span>
            ))}
          </Tags>
        )}
      </ContentInfo>
    </Container>
  );
};
