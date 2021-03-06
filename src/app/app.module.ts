import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokedexScreenComponent } from './pokedex-screen/pokedex-screen.component';
import { PokedexFormComponent } from './pokedex-form/pokedex-form.component';
import { StatComponent } from './stat/stat.component';

@NgModule({
  declarations: [
    AppComponent,
    PokedexComponent,
    PokedexScreenComponent,
    PokedexFormComponent,
    StatComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
