import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';
import Footer from './components/footer/footer';
import Header from './components/header';
import HomePage from './pages/home-page/home-page';
import FaqPage from './pages/faq-page/faq-page';
import DemoPage from './pages/demo-page/demo-page';

function App() {
   return (
      <I18nextProvider i18n={i18n}>
         <Router>
            <Header />
            <Switch>
               <Route exact path="/" component={HomePage} />
               <Route exact path="/faq" component={FaqPage} />
               <Route exact path="/demo" component={DemoPage} />
            </Switch>
            <Footer />
         </Router>
      </I18nextProvider>
   );
}

export default App;
