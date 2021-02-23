import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../core/services/pokeapi.service';

@Component({
  selector: 'pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {
  public error: boolean = false;
  public loading: boolean = true;
  public booleanShiny: boolean = false;
  public verifyShiny: boolean = false;
  public pokemon: any = null;
  public pokemonID: string = Math.floor(Math.random() * 897 + 1).toString();

  constructor( private pokeapi: PokeapiService ) { }

  ngOnInit(): void {
    this.searchPokemon();
  }

  searchPokemon(): void {
    this.pokeapi.getPokemon(this.pokemonID)
      .subscribe(
        data => {
          this.pokemon = data;
          this.validationShiny();
          this.loading = false;
          this.error = false;
        },
        error => {
          this.pokemon = null;
          this.loading = false;
          this.error = true;
        }
      )
  }

  changeShiny(boolean: boolean) {
    this.booleanShiny = boolean;
    this.searchPokemon();
  }

  validationShiny() {
    if (this.pokemon) {
      if((this.pokemon.sprites.front_shiny === null && this.booleanShiny) || (this.pokemon.sprites.front_shiny === null)) {
        this.booleanShiny = false;
        this.verifyShiny = true;
      } else if (this.pokemon.sprites.front_shiny) {
        this.verifyShiny = false;
      }
    }
  }

  handleSubmit(pokemonID: string) {
    if(pokemonID !== '') {
      this.error = false;
      this.loading = true;
      this.pokemonID = window.isNaN(parseInt(pokemonID)) ? pokemonID.toLowerCase() : pokemonID;
      this.validationShiny();
      this.searchPokemon();
      return
    }
    this.error = true;
  }

}