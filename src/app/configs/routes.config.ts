import {InjectionToken} from '@angular/core';

export let ROUTES_CONFIG = new InjectionToken('routes.config');

const routesNames = {
  home: '',
  blog: 'blog',
  advertise: 'advertise',
  press_release_submission: 'press-release-submission',
  error404: '404',
};

export const RoutesConfig: any = {
  routesNames,
  routes: {
    home: `/${routesNames.home}`,
    blog: `/${routesNames.blog}`,
    advertise: `/${routesNames.advertise}`,
    press_release_submission: `/${routesNames.press_release_submission}`,
    error404: `/${routesNames.error404}`,
  }
};

