import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { CreedaventusComponent } from './creedaventus/creedaventus.component';
import { LemaleleparfumeComponent } from './lemaleleparfume/lemaleleparfume.component';
import { StrongerwithyouintenslyComponent } from './strongerwithyouintensly/strongerwithyouintensly.component';
import { LemaleelixirobsoluComponent } from './lemaleelixirobsolu/lemaleelixirobsolu.component';
import { PaypageComponent } from './paypage/paypage.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    title: 'Login',
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((m) => LoginComponent),
  },
  {
    title: 'Register',
    path: 'register',
    loadComponent: () =>
      import('./register/register.component').then((m) => RegisterComponent),
  },
  {
    title: 'MainPage',
    path: 'mainpage',
    loadComponent: () =>
      import('./mainpage/mainpage.component').then((m) => MainpageComponent),
  },
  {
    title: 'creedAventus',
    path: 'creed',
    loadComponent: () =>
      import('./creedaventus/creedaventus.component').then(
        (m) => CreedaventusComponent
      ),
  },
  {
    title: 'leparfume',
    path: 'leparfume',
    loadComponent: () =>
      import('./lemaleleparfume/lemaleleparfume.component').then(
        (m) => LemaleleparfumeComponent
      ),
  },
  {
    title: 'strongerwithyouintensly',
    path: 'intensly',
    loadComponent: () =>
      import(
        './strongerwithyouintensly/strongerwithyouintensly.component'
      ).then((m) => StrongerwithyouintenslyComponent),
  },
  {
    title: 'elixirobsolu',
    path: 'elixirobsolu',
    loadComponent: () =>
      import('./lemaleelixirobsolu/lemaleelixirobsolu.component').then(
        (m) => LemaleelixirobsoluComponent
      ),
  },
  {
    title: 'paypage',
    path: 'pay',
    loadComponent: () =>
      import('./paypage/paypage.component').then((m) => PaypageComponent),
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
