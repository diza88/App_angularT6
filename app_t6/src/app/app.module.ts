import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarnetComponent } from './carnet/carnet.component';
import { ImgPersonaComponent } from './img-persona/img-persona.component';
import { PersonaComponent } from './persona/persona.component';
import { ListPersonaComponent } from './list-persona/list-persona.component';

@NgModule({
  declarations: [
    AppComponent,
    CarnetComponent,
    ImgPersonaComponent,
    PersonaComponent,
    ListPersonaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
