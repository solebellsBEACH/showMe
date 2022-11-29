import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';

export const Container = styled.div`
width:100% ;
min-height: 3.5rem;
background:${({ theme }) => theme.templateColor5};
padding:1rem 2rem;

color:${({ theme }) => theme.white};
display:flex;
justify-content: space-between;
align-items: center;
`


export const StyledMenuIcon = styled(MenuIcon)`
      height: 3rem;
      width: 3rem;
      @media (max-width: 768px){
        height: 2.5rem;
      width: 2.5rem;
      }

`