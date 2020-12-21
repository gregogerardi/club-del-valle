import { CovidComponent } from './covid/covid.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

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
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { SedeSocialComponent } from './sede-social/sede-social.component';
import { SociosComponent } from './socios/socios.component';

@NgModule({
  declarations: [
    PagesComponent,
    HistoriaComponent,
    SedeSocialComponent,
    SociosComponent,
    BarrancasComponent,
    BoteraComponent,
    ColoniaComponent,
    FogonesComponent,
    FutbolComponent,
    HockeyComponent,
    PiletaComponent,
    SalonComponent,
    TenisComponent,
    TerrazaComponent,
    CovidComponent
  ],
  imports: [CommonModule, PagesRoutingModule],
})
export class PagesModule {}
