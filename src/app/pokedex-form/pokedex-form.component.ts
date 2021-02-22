import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pokedex-form',
  templateUrl: './pokedex-form.component.html',
  styleUrls: ['./pokedex-form.component.scss']
})
export class PokedexFormComponent implements OnInit {
  @Output() stringPokemon = new EventEmitter<string>();
  pokemonId: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  handleSubmit(e: any) {
    e.preventDefault();
    this.stringPokemon.emit(this.pokemonId);
    this.pokemonId = '';
  }

}
