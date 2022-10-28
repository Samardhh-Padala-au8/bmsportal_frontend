/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

/* tslint:disable */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import * as Eff from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';
import { GlobalStyle } from 'styles/global-styles';
import { useTranslation } from 'react-i18next';
import { Faqs } from './pages';
import { ScrollToTop } from './components/molecules';
const BrowserRouter: any = Eff.BrowserRouter;
export function App() {
  const { i18n } = useTranslation();
  return (
    <>
      <BrowserRouter>
        <Helmet
          titleTemplate="%s - BMSPORTAL"
          defaultTitle="BMSPORTAL"
          htmlAttributes={{ lang: i18n.language }}
        >
          <meta name="description" content="BMSPORTAL" />
        </Helmet>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route exact path="/home" component={Faqs} />
          <Route exact path="/" component={Faqs} />
        </Switch>
        <GlobalStyle />
      </BrowserRouter>
    </>
  );
}
