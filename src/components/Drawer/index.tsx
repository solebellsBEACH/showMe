import React, { ReactElement, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CabinIcon from '@mui/icons-material/Cabin';
import CodeIcon from '@mui/icons-material/Code';
import EmailIcon from '@mui/icons-material/Email';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Drawer, List, ListSubheader, Switch } from '@mui/material';

import BrasilPNG from '../../assets/brasilLogo.png';
import USAPNG from '../../assets/usaLogo.png';
import { IReduxState } from '../../interface';
import { Creators as ApplicationActions } from '../../store/ducks/application';
import RouterItem from './RouterItem';
import { BrasilIcon, SwitchContainer, USAIcon } from './styles';

export interface ITemplateDrawerProps {
  openDrawer: boolean;
  onClose: () => void;
  actualPage: 'Home' | 'Hobbies' | 'Stacks' | 'Fale Comigo';
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
    { name: 'Fale Comigo', path: '/sendMeAMessage', icon: <EmailIcon /> },
  ];
  const [loading, setLoading] = useState<string | null>(null);
  const dispatch = useDispatch();
  const [isEnglish, setIsEnglish] = useState(false);
  const { languageInformation } = useSelector(
    (state: IReduxState) => state.application,
  );
  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      ApplicationActions.setLanguage({
        language: e.target.checked ? 'en' : 'pt',
      }),
    );
    setIsEnglish(e.target.checked);
  };

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
            src={BrasilPNG}
            className={isEnglish ? '' : 'selected'}
          />
          <Switch onChange={e => handleChecked(e)} checked={isEnglish} />
          <USAIcon
            className={!isEnglish ? '' : 'selected'}
            alt="USAICON"
            src={USAPNG}
          />
        </SwitchContainer>
      </List>
    </Drawer>
  );
};
