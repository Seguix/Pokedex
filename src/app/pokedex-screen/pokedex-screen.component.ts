import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokedex-screen',
  templateUrl: './pokedex-screen.component.html',
  styleUrls: ['./pokedex-screen.component.scss']
})
export class PokedexScreenComponent implements OnInit {
  @Input() public loading: boolean;
  @Input() public error: boolean;
  @Input() public pokemon: any = null;

  constructor() { }

  ngOnInit(): void {
  }

}
