import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoHeaderComponent } from './demo-header/demo-header.component';
import { DemoSidebarComponent } from './demo-sidebar/demo-sidebar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { DeliveriesPageComponent } from './deliveries-page/deliveries-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoHeaderComponent,
    DemoSidebarComponent,
    MainContentComponent,
    LandingPageComponent,
    CartPageComponent,
    DeliveriesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
