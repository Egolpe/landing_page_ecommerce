import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FormControlLabel, FormGroup, Button, Switch } from '@material-ui/core';

const ChangeLanguage = () => {
   const { t, i18n } = useTranslation();
   const [languages, setLanguages] = useState('en');
   const [checked, setChecked] = useState(false);
   const handleLanguages = () => {
      setChecked(!checked);
      checked ? setLanguages('es') : setLanguages('en');
      checked ? i18n.changeLanguage('en-US') : i18n.changeLanguage('es-ES');
   };
   return (
      <div className="d-flex">
         <FormGroup>
            <FormControlLabel
               control={<Switch checked={checked} onChange={handleLanguages} />}
               label={checked ? 'ES' : 'EN'}
            />
         </FormGroup>
         <nav>
            <a href="#description" style={{textDecoration: 'none'}}>
               <Button variant="outlined">{t('dropdown-services')}</Button>
            </a>
            <a href="#form-application" style={{textDecoration: 'none', marginLeft: '10px'}}>
               <Button variant="outlined" >{t('dropdown-quote')}</Button>
            </a>
         </nav>
      </div>);
};

export default ChangeLanguage;
