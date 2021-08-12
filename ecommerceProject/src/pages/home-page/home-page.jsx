import React from 'react';
import './home-page.css';
import formImg from '../../assets/img/forms.png';
import { useTranslation } from 'react-i18next';
import FormApplication from '../../components/form-application/form-application';

const HomePage = () => {
   const { t } = useTranslation();
   return (
      <div className="home">
         <div id="description">
            <h1>{t('services')}</h1>
            <div className="description__container">
               <h2>{t('paragraph')}</h2>
               <img src={formImg} alt="shopping people" />
            </div>
            <nav className="description__nav">
               <a href="#quote" className="description__nav-btn btn btn-outline-primary">{t('quote')}</a>
            </nav>
         </div>
         <FormApplication />
      </div>
   );
};

export default HomePage;
