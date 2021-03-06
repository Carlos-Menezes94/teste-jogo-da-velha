import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpcaoComponent } from './jogo-da-velha/opcao/opcao.component';
import { ContainerComponent } from './jogo-da-velha/container/container.component';
import { PlayerComponent } from './jogo-da-velha/player/player.component';
import { PlacarComponent } from './jogo-da-velha/placar/placar.component';
import { PesquisaComponent } from './jogo-da-velha/pesquisa/pesquisa.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    OpcaoComponent,
    ContainerComponent,
    PlayerComponent,
    PlacarComponent,
    PesquisaComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
