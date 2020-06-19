import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GallerySectionsComponent } from './gallery-sections/gallery-sections.component';
import { MarkupsPageComponent } from './markups-page/markups-page.component';

@NgModule({
  declarations: [
    AppComponent,
    GallerySectionsComponent,
    MarkupsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
