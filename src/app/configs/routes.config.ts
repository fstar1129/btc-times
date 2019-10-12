import {InjectionToken} from '@angular/core';

export let ROUTES_CONFIG = new InjectionToken('routes.config');

const routesNames = {
  home: '',
  news: 'news',
  advertise: 'advertise',
  press_release_submission: 'press-release-submission',
  faucet: 'faucet',
  error404: '404',
};

export const RoutesConfig: any = {
  routesNames,
  routes: {
    home: `/${routesNames.home}`,
    news: `/${routesNames.news}`,
    advertise: `/${routesNames.advertise}`,
    press_release_submission: `/${routesNames.press_release_submission}`,
    faucet: `/${routesNames.faucet}`,
    error404: `/${routesNames.error404}`,
  }
};

