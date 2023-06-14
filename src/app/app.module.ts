import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { SmcComponent } from './components/smc/smc.component';

import { RouterModule } from '@angular/router';
import { BuildingComponent } from './components/building/building.component';
import { LinkComponent } from './components/link/link.component';
import { LayoutComponent } from './components/layout/layout.component';
import { PclcComponent } from './components/pclc/pclc.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    SmcComponent,
    BuildingComponent,
    LinkComponent,
    LayoutComponent,
    PclcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'smc', component: SmcComponent},
      {path: 'building', component: BuildingComponent},
      {path: 'link', component: LinkComponent},
      {path: 'pclc', component: PclcComponent},
      {path:'**', component: HomeComponent}
      
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
