import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Box, AppBar, Toolbar, Typography } from '@material-ui/core';
import DropDownMenu from './dropdown-menu';
import { createTheme, ThemeProvider, styled } from '@material-ui/core/styles';
import ChangeLanguage from './change-language';
import HomeIcon from '@material-ui/icons/Home';

const theme = createTheme({
   palette: {
      primary: {
         main: '#fff'
      },
      secondary: {
         main: '#45b29a'
      }
   }
});

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
   justifyContent: 'space-between',
   paddingTop: theme.spacing(1),
   paddingBottom: theme.spacing(1)
}));

const Header = () => {
   const location = useLocation();
   return (
      <ThemeProvider theme={theme}>
         <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" color="secondary">
               <StyledToolbar>
                  <Typography variant="h6" noWrap>
                     <DropDownMenu />
                  </Typography>
                  {location.pathname === "/" ? <ChangeLanguage /> : 
                     <Link to="/" style={{ color: '#FFF' }}><HomeIcon/></Link>}
               </StyledToolbar>
            </AppBar>
         </Box>
      </ThemeProvider>
   );
};

export default Header;
