import { ILanguageJSON } from '../interface';
import { englishJson } from './en';
import { portugueseJson } from './pt';

export const getLanguageInformation = (
  language: 'pt' | 'en',
): ILanguageJSON => {
  const info = {
    pt: portugueseJson,
    en: englishJson,
  };

  return info[language];
};
