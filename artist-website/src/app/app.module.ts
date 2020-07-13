import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DeviceDetectorModule } from 'ngx-device-detector';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LiveComponent } from './components/live/live.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContactComponent } from './components/contact/contact.component';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { MusicComponent } from './components/music/music.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LiveComponent,
    MenuComponent,
    ContactComponent,
    CopyrightComponent,
    MusicComponent
  ],
  imports: [
    BrowserModule,
    DeviceDetectorModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
