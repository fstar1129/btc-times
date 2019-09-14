import {InjectionToken} from '@angular/core';

export let ROUTES_CONFIG = new InjectionToken('routes.config');

const routesNames = {
  home: '',
  blog: 'blog',
  advertise: 'advertise',
  error404: '404',
};

export const RoutesConfig: any = {
  routesNames,
  routes: {
    home: `/${routesNames.home}`,
    blog: `/${routesNames.blog}`,
    advertise: `/${routesNames.advertise}`,
    error404: `/${routesNames.error404}`,
  }
};

