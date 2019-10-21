import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FlixComponent } from './flix/flix.component';
import { FlixThumbnailComponent } from './flix/flix-thumbnail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FlixComponent,
    FlixThumbnailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
