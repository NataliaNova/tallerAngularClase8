import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraComponent } from './componente/barra/barra.component';
import { InicioComponent } from './componente/inicio/inicio.component';
import { FooterComponent } from './componente/footer/footer.component';
import { VideoFrontComponent } from './componente/video-front/video-front.component';

import {YouTubePlayerModule} from '@angular/youtube-player';
import { BackendComponent } from './componente/backend/backend.component';
import { FullStackComponent } from './componente/full-stack/full-stack.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraComponent,
    InicioComponent,
    FooterComponent,
    VideoFrontComponent,
    BackendComponent,
    FullStackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
