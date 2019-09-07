import {InjectionToken} from '@angular/core';

export let ROUTES_CONFIG = new InjectionToken('routes.config');

const basePaths = {
  heroes: 'heroes',
};

const routesNames = {
  home: '',
  blog: 'blog',
  error404: '404',
  heroes: {
    basePath: basePaths.heroes
  }
};

export const RoutesConfig: any = {
  routesNames,
  routes: {
    home: `/${routesNames.home}`,
    blog: `/${routesNames.blog}`,
    error404: `/${routesNames.error404}`,
    heroes: {
      detail: getHeroDetail
    }
  }
};

export function getHeroDetail(id) {
  return `/${basePaths.heroes}/${id}`;
}
