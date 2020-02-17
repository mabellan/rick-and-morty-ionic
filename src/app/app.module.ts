import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CharacterServiceService} from '../services/character-service.service';
import {HttpClientModule} from '@angular/common/http';
import {CharacterComponent} from './character/character/character.component';
import {EpisodeService} from '../services/episode.service';

@NgModule({
  declarations: [AppComponent, CharacterComponent],
  entryComponents: [],
  imports: [
      BrowserModule,
      HttpClientModule,
      IonicModule.forRoot(),
      AppRoutingModule],
  providers: [
    StatusBar,
    CharacterServiceService,
      EpisodeService,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
