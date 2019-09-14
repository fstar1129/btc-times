import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Error404PageComponent} from './pages/error404-page/error404-page.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {BlogPageComponent} from './pages/blog-page/blog-page.component';
import {AdvertisePageComponent} from './pages/advertise-page/advertise-page.component';
import {RoutesConfig} from './configs/routes.config';

const routesNames = RoutesConfig.routesNames;

const routes: Routes = [
  {path: routesNames.home, component: HomePageComponent, pathMatch: 'full'},
  {path: routesNames.blog, component: BlogPageComponent, pathMatch: 'full'},
  {path: routesNames.advertise, component: AdvertisePageComponent, pathMatch: 'full'},
  {path: routesNames.error404, component: Error404PageComponent},
  {path: 'en', redirectTo: ''}, // because english language is the default one

  // otherwise redirect to 404
  {path: '**', redirectTo: RoutesConfig.routes.error404}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
    })
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
