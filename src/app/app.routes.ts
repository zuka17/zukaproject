import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { CreedaventusComponent } from './creedaventus/creedaventus.component';
import { LemaleleparfumeComponent } from './lemaleleparfume/lemaleleparfume.component';
import { StrongerwithyouintenslyComponent } from './strongerwithyouintensly/strongerwithyouintensly.component';
import { LemaleelixirobsoluComponent } from './lemaleelixirobsolu/lemaleelixirobsolu.component';
import { PaypageComponent } from './paypage/paypage.component';
import { ParadiseGardenComponent } from './paradise-garden/paradise-garden.component';
import { WinterFragranceComponent } from './winter-fragrance/winter-fragrance.component';
import { SummerFragranceComponent } from './summer-fragrance/summer-fragrance.component';
import { StryparfumeComponent } from './stryparfume/stryparfume.component';
import { FlowerComponent } from './flower/flower.component';
import { ObsoluComponent } from './obsolu/obsolu.component';
import { ValentinooComponent } from './valentinoo/valentinoo.component';
import { ObsolutlyComponent } from './obsolutly/obsolutly.component';
import { AlthhairComponent } from './althhair/althhair.component';
import { ImaginationComponent } from './imagination/imagination.component';
import { CoralComponent } from './coral/coral.component';
import { MountainComponent } from './mountain/mountain.component';
import { GreenlyComponent } from './greenly/greenly.component';
import { StryComponent } from './stry/stry.component';
import { VikingComponent } from './viking/viking.component';
import { OmbreNomadComponent } from './ombre-nomad/ombre-nomad.component';
import { LaytonComponent } from './layton/layton.component';
import { ValentinoComponent } from './valentino/valentino.component';
import { GrrenValentinoComponent } from './grren-valentino/grren-valentino.component';
import { AfternoonSwimComponent } from './afternoon-swim/afternoon-swim.component';
import { GrayPerfumesDeMarlyComponent } from './gray-perfumes-de-marly/gray-perfumes-de-marly.component';
import { PacificChillComponent } from './pacific-chill/pacific-chill.component';

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
    title: 'creed',
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
    title: 'paradiseGarden',
    path: 'paradiseGarden',
    loadComponent: () =>
      import('./paradise-garden/paradise-garden.component').then(
        (m) => ParadiseGardenComponent
      ),
  },
  {
    title: 'winterFragrance',
    path: 'winterFragrance',
    loadComponent: () =>
      import('./winter-fragrance/winter-fragrance.component').then(
        (m) => WinterFragranceComponent
      ),
  },
  {
    title: 'summerFragrance',
    path: 'summerFragrance',
    loadComponent: () =>
      import('./summer-fragrance/summer-fragrance.component').then(
        (m) => SummerFragranceComponent
      ),
  },
  {
    title: 'stryparfume',
    path: 'stryparfume',
    loadComponent: () =>
      import('./stryparfume/stryparfume.component').then(
        (m) => StryparfumeComponent
      ),
  },
  {
    title: 'flower',
    path: 'flower',
    loadComponent: () =>
      import('./flower/flower.component').then((m) => FlowerComponent),
  },
  {
    title: 'obsolu',
    path: 'obsolu',
    loadComponent: () =>
      import('./obsolu/obsolu.component').then((m) => ObsoluComponent),
  },
  {
    title: 'valentino-uemo',
    path: 'uemo',
    loadComponent: () =>
      import('./valentinoo/valentinoo.component').then(
        (m) => ValentinooComponent
      ),
  },
  {
    title: 'obsolute',
    path: 'obsolute',
    loadComponent: () =>
      import('./obsolutly/obsolutly.component').then((m) => ObsolutlyComponent),
  },
  {
    title: 'althair',
    path: 'althair',
    loadComponent: () =>
      import('./althhair/althhair.component').then((m) => AlthhairComponent),
  },
  {
    title: 'imagination',
    path: 'imagination',
    loadComponent: () =>
      import('./imagination/imagination.component').then(
        (m) => ImaginationComponent
      ),
  },
  {
    title: 'coral-fantasy',
    path: 'coral-fantasy',
    loadComponent: () =>
      import('./coral/coral.component').then((m) => CoralComponent),
  },
  {
    title: 'mountain-water',
    path: 'mountain-water',
    loadComponent: () =>
      import('./mountain/mountain.component').then((m) => MountainComponent),
  },
  {
    title: 'greenly',
    path: 'greenly',
    loadComponent: () =>
      import('./greenly/greenly.component').then((m) => GreenlyComponent),
  },
  {
    title: 'stry',
    path: 'stry',
    loadComponent: () =>
      import('./stry/stry.component').then((m) => StryComponent),
  },
  {
    title: 'viking',
    path: 'viking',
    loadComponent: () =>
      import('./viking/viking.component').then((m) => VikingComponent),
  },
  {
    title: 'ombreNomad',
    path: 'ombreNomad',
    loadComponent: () =>
      import('./ombre-nomad/ombre-nomad.component').then(
        (m) => OmbreNomadComponent
      ),
  },
  {
    title: 'layton',
    path: 'layton',
    loadComponent: () =>
      import('./layton/layton.component').then((m) => LaytonComponent),
  },
  {
    title: 'valentino',
    path: 'valentino',
    loadComponent: () =>
      import('./valentino/valentino.component').then((m) => ValentinoComponent),
  },
  {
    title: 'greenValentino',
    path: 'greenValentino',
    loadComponent: () =>
      import('./grren-valentino/grren-valentino.component').then(
        (m) => GrrenValentinoComponent
      ),
  },
  {
    title: 'afternoon-swim',
    path: 'afternoon-swim',
    loadComponent: () =>
      import('./afternoon-swim/afternoon-swim.component').then(
        (m) => AfternoonSwimComponent
      ),
  },
  {
    title: 'graypdf',
    path: 'graypdf',
    loadComponent: () =>
      import('./gray-perfumes-de-marly/gray-perfumes-de-marly.component').then(
        (m) => GrayPerfumesDeMarlyComponent
      ),
  },
  {
    title: 'pacificChill',
    path: 'pacificChill',
    loadComponent:()=>import('./pacific-chill/pacific-chill.component').then((m)=>PacificChillComponent)
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
