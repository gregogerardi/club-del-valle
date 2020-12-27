import { CovidComponent } from './covid/covid.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BoteraComponent } from './complejo/botera/botera.component';
import { ColoniaComponent } from './complejo/colonia/colonia.component';
import { FogonesComponent } from './complejo/fogones/fogones.component';
import { FutbolComponent } from './complejo/futbol/futbol.component';
import { HockeyComponent } from './complejo/hockey/hockey.component';
import { PiletaComponent } from './complejo/pileta/pileta.component';
import { SalonComponent } from './complejo/salon/salon.component';
import { TenisComponent } from './complejo/tenis/tenis.component';
import { HistoriaComponent } from './historia/historia.component';
import { SedeSocialComponent } from './sede-social/sede-social.component';
import { SociosComponent } from './socios/socios.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'sede-social',
        pathMatch: 'full'
      },
      {
        path: 'sede-social',
        component: SedeSocialComponent,
      },
      {
        path: 'colonia',
        component: ColoniaComponent,
      },
      {
        path: 'fogones',
        component: FogonesComponent,
      },
      {
        path: 'futbol',
        component: FutbolComponent,
      },
      {
        path: 'hockey',
        component: HockeyComponent,
      },
      {
        path: 'botera',
        component: BoteraComponent,
      },
      {
        path: 'pileta',
        component: PiletaComponent,
      },
      {
        path: 'salon',
        component: SalonComponent,
      },
      {
        path: 'tenis',
        component: TenisComponent,
      },
      {
        path: 'historia',
        component: HistoriaComponent,
      },
      {
        path: 'socios',
        component: SociosComponent,
      },
      {
        path: 'covid',
        component: CovidComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
