import React, { Fragment } from 'react';
import { ListItemText, ListItemIcon, Button, Menu, MenuItem } from '@material-ui/core';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Web, Mail } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import { useTranslation } from 'react-i18next';

const DropDownMenu = () => {
   const { t } = useTranslation();
   const menuIcons = [
      { id: 0, name: t('tryDemo'), icon: <Web /> },
      { id: 1, name: t('dropdown-contact'), icon: <Mail /> }
   ];
   return (
      <PopupState variant="popover" popupId="demo-popup-menu">
         {(popupState) => (
            <Fragment>
               <Button variant="outlined" {...bindTrigger(popupState)}>
                  <MenuIcon />
               </Button>
               <Menu {...bindMenu(popupState)}>
                  {menuIcons.map((item) => (
                     <MenuItem onClick={popupState.close} key={item.id}>
                        <ListItemIcon>
                           {item.icon}
                        </ListItemIcon>
                        <ListItemText>
                           {item.name}
                        </ListItemText>
                     </MenuItem>
                  ))}
               </Menu>
            </Fragment>
         )}
      </PopupState>
   );
};

export default DropDownMenu;
