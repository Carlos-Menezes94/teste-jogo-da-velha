import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpcaoComponent } from './jogo-da-velha/opcao/opcao.component';
import { ContainerComponent } from './jogo-da-velha/container/container.component';

@NgModule({
  declarations: [
    AppComponent,
    OpcaoComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
