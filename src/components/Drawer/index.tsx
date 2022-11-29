import {
    Avatar,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    ListSubheader
} from '@mui/material'
import React,
{ ReactElement } from 'react'
import CabinIcon from '@mui/icons-material/Cabin';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CodeIcon from '@mui/icons-material/Code';
import EmailIcon from '@mui/icons-material/Email';

export interface ITemplateDrawerProps {
    openDrawer: boolean;
    onClose: () => void;
}

export const TemplateDrawer = ({ openDrawer, onClose }: ITemplateDrawerProps) => {

    const pages: {
        name: string, path: string, icon: ReactElement<any, any>
    }[] = [
            { name: 'Home', path: '/', icon: <CabinIcon /> },
            { name: 'Hobbies', path: '/hobbies', icon: <FavoriteIcon /> },
            { name: 'Stacks', path: '/stacks', icon: <CodeIcon /> },
            { name: 'Fale Comigo ', path: '/sendMeAMessage', icon: <EmailIcon /> },
        ]

    return (
        <Drawer
            open={openDrawer}
            anchor="left"
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
                {pages.map(e => <>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                {e.icon}
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={e.name} secondary="" />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </>)}


            </List>
        </Drawer>
    )
}