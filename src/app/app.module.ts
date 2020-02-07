import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouteReuseStrategy } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { CustomRouteReuseStrategy } from './router-strategy';
import { CustomRouterLink } from './custom-router-link';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTreeModule } from '@angular/material/tree';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FeComponent } from './fe/fe.component';
import { BeComponent } from './be/be.component';
@NgModule({
  declarations: [
    AppComponent,
    FeComponent,
    BeComponent,
    CustomRouterLink
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTreeModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [{
    provide: RouteReuseStrategy,
    useClass: CustomRouteReuseStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
