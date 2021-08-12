import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Twitter, LinkedIn, Instagram, Email } from '@material-ui/icons';
import './footer.css';

const Mailto =({ email, subject, body, ...props }) => {
   return (
      <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`} 
         style={{ color: '#151d29' }} 
         className="mb-2">
         {props.children}
      </a>
   );
};

const Footer = () => {
   const { t } = useTranslation();
   return (
      <footer id="footer">
         <div className="footer__navigation">
            <h3>{t("navigation")}</h3>
            <Link to="/" title="Home">{t("services")}</Link>
            <Link to="/demo" title="Demo">{t("tryDemo")}</Link>
         </div>
         <div className="footer__aboutUs">
            <h3>{t("aboutUs")}</h3>
            <Link to="/faq">FAQ</Link>
            <a href="#" title="Blog">Blog</a>
         </div>
         <div className="footer__contact">
            <h3>{t("dropdown-contact")}</h3>
            <div className="footer__contact-icons">
               <Mailto
                  email="enriquegolpe@gmail.com"
                  subject="Info"
                  body="Escribenos lo que quieras"
               >
                  <Email fontSize="large" round />
               </Mailto>
               <Twitter fontSize="large" className="mb-2"/>
               <Instagram fontSize="large" className="mb-2" />
               <LinkedIn fontSize="large" className="mb-2" />
            </div>
         </div>
      </footer>
   );
};

export default Footer;