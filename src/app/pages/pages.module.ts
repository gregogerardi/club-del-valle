import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutModule } from '@angular/cdk/layout';
import { SimplebarAngularModule } from 'simplebar-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselComponent } from './../carousel/carousel.component';
import { NavigationComponent } from './../navigation/navigation.component';
import { CovidComponent } from './covid/covid.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BoteraComponent } from './complejo/botera/botera.component';
import { ColoniaComponent } from './complejo/colonia/colonia.component';
import { FogonesComponent } from './complejo/fogones/fogones.component';
import { FutbolComponent } from './complejo/futbol/futbol.component';
import { HockeyComponent } from './complejo/hockey/hockey.component';
import { PiletaComponent } from './complejo/pileta/pileta.component';
import { SalonComponent } from './complejo/salon/salon.component';
import { TenisComponent } from './complejo/tenis/tenis.component';
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
    BoteraComponent,
    ColoniaComponent,
    FogonesComponent,
    FutbolComponent,
    HockeyComponent,
    PiletaComponent,
    SalonComponent,
    TenisComponent,
    CovidComponent,
    NavigationComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
     PagesRoutingModule,
     SimplebarAngularModule,
     LayoutModule,
     MatToolbarModule,
     MatButtonModule,
     MatSidenavModule,
     MatIconModule,
     MatListModule,
     MatExpansionModule
    ],
})
export class PagesModule {}
