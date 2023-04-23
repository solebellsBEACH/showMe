import React, { ReactElement, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CabinIcon from '@mui/icons-material/Cabin';
import CodeIcon from '@mui/icons-material/Code';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Drawer, List, ListSubheader, Switch } from '@mui/material';

import { IReduxState } from '../../interface';
import { Creators as ApplicationActions } from '../../store/ducks/application';
import RouterItem from './RouterItem';
import { BrasilIcon, SwitchContainer, USAIcon } from './styles';
import { assets } from '../../assets';
import { LanguageCodeEnum } from '../../interface/enums';

export interface ITemplateDrawerProps {
  openDrawer: boolean;
  onClose: () => void;
  actualPage: 'Home' | 'Hobbies' | 'Stacks';
  anchor?: 'left' | 'right';
}

export const TemplateDrawer = ({
  openDrawer,
  onClose,
  actualPage,
  anchor = 'left',
}: ITemplateDrawerProps) => {
  const pages: {
    name: string;
    path: string;
    icon: ReactElement<any, any>;
  }[] = [
    { name: 'Home', path: '/', icon: <CabinIcon /> },
    { name: 'Hobbies', path: '/hobbies', icon: <FavoriteIcon /> },
    { name: 'Stacks', path: '/stacks', icon: <CodeIcon /> },
  ];
  const [loading, setLoading] = useState<string | null>(null);
  const dispatch = useDispatch();

  const { languageInformation, language } = useSelector(
    (state: IReduxState) => state.application,
  );
  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      ApplicationActions.setLanguage({
        language: e.target.checked
          ? LanguageCodeEnum.english
          : LanguageCodeEnum.portuguese,
      }),
    );
  };
  const isEnglish = language === LanguageCodeEnum.english;
  return (
    <Drawer open={openDrawer} anchor={anchor} onClose={onClose}>
      <List
        sx={{
          width: '100%',
          paddingRight: '30px',
          bgcolor: 'background.paper',
        }}
        subheader={
          <ListSubheader
            sx={{
              fontWeight: 'bold',
              fontFamily: 'roboto mono',
            }}
            component="div"
            id="nested-list-subheader"
          >
            {languageInformation.drawer[0]}
          </ListSubheader>
        }
      >
        {pages.map((e, i) => (
          <RouterItem
            key={`RouterItem${i}`}
            loading={loading}
            setLoading={setLoading}
            e={e}
            actualPage={actualPage}
            index={i}
          />
        ))}
        <ListSubheader
          sx={{
            fontWeight: 'bold',
            fontFamily: 'roboto mono',
          }}
          component="div"
          id="nested-list-subheader"
        >
          {languageInformation.drawer[1]}
        </ListSubheader>
        <SwitchContainer>
          <BrasilIcon
            alt="BrasilICON"
            src={assets.brasilIcon}
            className={isEnglish ? '' : 'selected'}
          />
          <Switch onChange={e => handleChecked(e)} checked={isEnglish} />
          <USAIcon
            className={!isEnglish ? '' : 'selected'}
            alt="USAICON"
            src={assets.usaIcon}
          />
        </SwitchContainer>
      </List>
    </Drawer>
  );
};
