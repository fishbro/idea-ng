import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GallerySectionsComponent } from './gallery-sections/gallery-sections.component';
import { MarkupsPageComponent } from './markups-page/markups-page.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ToTopBtnComponent } from './to-top-btn/to-top-btn.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    GallerySectionsComponent,
    MarkupsPageComponent,
    ToTopBtnComponent,
    MobileMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
