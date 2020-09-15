import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BarrancasComponent } from './complejo/barrancas/barrancas.component';
import { BoteraComponent } from './complejo/botera/botera.component';
import { ColoniaComponent } from './complejo/colonia/colonia.component';
import { FogonesComponent } from './complejo/fogones/fogones.component';
import { FutbolComponent } from './complejo/futbol/futbol.component';
import { HockeyComponent } from './complejo/hockey/hockey.component';
import { PiletaComponent } from './complejo/pileta/pileta.component';
import { SalonComponent } from './complejo/salon/salon.component';
import { TenisComponent } from './complejo/tenis/tenis.component';
import { TerrazaComponent } from './complejo/terraza/terraza.component';
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
        path: 'barrancas',
        component: BarrancasComponent,
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
        path: 'terraza',
        component: TerrazaComponent,
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
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
