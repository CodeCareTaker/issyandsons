import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router';

import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalStyle } from './global.styles';

import Spinner from './components/spinner/spinner.component';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const AboutPage = lazy(() => import('./pages/about/about.component'));
const ContactPage = lazy(() => import('./pages/contact/contact.component'));
const PricingPage = lazy(() => import('./pages/pricing/pricing.component'));

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Suspense fallback={<Spinner />}>
          <Route exact path='/' component={ HomePage } />
          <Route path='/about' component={ AboutPage } />
          <Route exact path='/contact' component={ ContactPage } />
          <Route exact path='/pricing' component={ PricingPage } /> 
        </Suspense>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
