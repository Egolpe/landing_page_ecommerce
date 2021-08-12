import React from 'react';
import { Link } from 'react-router-dom';
import formImg from '../../assets/img/forms.png';
import { useTranslation } from 'react-i18next';
import FormApplication from '../../components/form-application/form-application';
import './home-page.css';

const HomePage = () => {
   const { t } = useTranslation();
   return (
      <div className="home">
         <div id="description">
            <div className="description__container">
               <h2>{t('paragraph')}{t('paragraph2')}</h2>
               <img src={formImg} alt="shopping people" />
            </div>
            <nav className="description__nav">
               <Link to="/demo" className="description__nav-btn btn btn-outline-primary">{t("tryDemo")}</Link>
            </nav>
         </div>
         <FormApplication />
      </div>
   );
};

export default HomePage;
