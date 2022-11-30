import {
    Avatar,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    ListSubheader,
    Switch
} from '@mui/material'
import React,
{ ReactElement, useState } from 'react'
import CabinIcon from '@mui/icons-material/Cabin';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CodeIcon from '@mui/icons-material/Code';
import EmailIcon from '@mui/icons-material/Email';
import { BrasilIcon, SwitchContainer, USAIcon } from './styles';
import USAPNG from '../../assets/usaLogo.png'
import BrasilPNG from '../../assets/brasilLogo.png'
import { useDispatch } from 'react-redux'
import { Creators as ApplicationActions } from '../../store/ducks/application'
import { blue } from '@mui/material/colors';
import { useRouter } from 'next/router';
export interface ITemplateDrawerProps {
    openDrawer: boolean;
    onClose: () => void;
    actualPage: 'Home' | 'Hobbies' | 'Stacks' | 'Fale Comigo'
    anchor?: 'left' | 'right'
}

export const TemplateDrawer = ({ openDrawer, onClose, actualPage, anchor = 'left' }: ITemplateDrawerProps) => {

    const pages: {
        name: string, path: string, icon: ReactElement<any, any>
    }[] = [
            { name: 'Home', path: '/', icon: <CabinIcon /> },
            { name: 'Hobbies', path: '/hobbies', icon: <FavoriteIcon /> },
            { name: 'Stacks', path: '/stacks', icon: <CodeIcon /> },
            { name: 'Fale Comigo', path: '/sendMeAMessage', icon: <EmailIcon /> },
        ]
    const router = useRouter()
    const dispatch = useDispatch()
    const [isEnglish, setIsEnglish] = useState(false)

    const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(ApplicationActions.setLanguage({ language: e.target.checked ? 'en' : 'pt' }))
        setIsEnglish(e.target.checked)
    }

    return (
        <Drawer
            open={openDrawer}
            anchor={anchor}
            onClose={onClose}
        >
            <List
                sx={{
                    width: '100%',
                    paddingRight: '30px',
                    bgcolor: 'background.paper',
                }}
                subheader={
                    <ListSubheader
                        sx={{
                            fontWeight: 'bold'
                        }}
                        component="div" id="nested-list-subheader">
                        Navegue pelas páginas
                    </ListSubheader>
                }
            >
                {pages.map((e, i) => <>
                    <ListItem
                        onClick={() => {
                            router.push(e.path)
                        }}
                        key={`listItem => ${i}`}
                    >
                        <ListItemAvatar>
                            <Avatar
                                sx={e.name === actualPage ? { bgcolor: blue[500] } : {}}
                            >
                                {e.icon}
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={e.name} secondary="" />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </>)}
                <ListSubheader
                    sx={{
                        fontWeight: 'bold'
                    }}
                    component="div" id="nested-list-subheader">
                    Escolha o idioma
                </ListSubheader>
                <SwitchContainer>
                    <BrasilIcon
                        alt='BrasilICON'
                        src={BrasilPNG}
                        className={isEnglish ? '' : 'selected'}
                    />
                    <Switch
                        onChange={e => handleChecked(e)}
                        checked={isEnglish} />
                    <USAIcon
                        className={!isEnglish ? '' : 'selected'}
                        alt='USAICON'
                        src={USAPNG}
                    />
                </SwitchContainer>

            </List>
        </Drawer>
    )
}