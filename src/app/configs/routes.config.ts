import {InjectionToken} from '@angular/core';

export let ROUTES_CONFIG = new InjectionToken('routes.config');

const routesNames = {
  home: '',
  news: 'news',
  advertise: 'advertise',
  press_release_submission: 'press-release-submission',
  contact_us: 'contact-us',
  careers: 'careers',
  faucet: 'faucet',
  about_us: 'about-us',
  error404: '404',
};

export const RoutesConfig: any = {
  routesNames,
  routes: {
    home: `/${routesNames.home}`,
    news: `/${routesNames.news}`,
    advertise: `/${routesNames.advertise}`,
    press_release_submission: `/${routesNames.press_release_submission}`,
    contact_us: `/${routesNames.contact_us}`,
    about_us: `/${routesNames.about_us}`,
    careers: `/${routesNames.careers}`,
    faucet: `/${routesNames.faucet}`,
    error404: `/${routesNames.error404}`,
  }
};

