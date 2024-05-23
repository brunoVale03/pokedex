import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.page.html',
  styleUrls: ['./pokemon-list.page.scss'],
})
export class PokemonListPage implements OnInit {
  pokemonList: any = {};
  hoveredPokemon: string | null = null;

  constructor(
    private pokemonService: PokemonService,
    private router: Router
  ) {}

  ngOnInit() {
    this.pokemonService.getPokemonList().subscribe(response => {
      this.pokemonList = response;
    });
  }

  goToDetails(name: string) {
    this.router.navigateByUrl(`/pokemon-detail/${name}`);
  }

  getPokemonImage(url: string): string {
    const id = url.split('/').filter(x => x).pop();
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }

  expandCard(event: MouseEvent) {
    const card = (event.target as HTMLElement).closest('.pokemon-card');
    if (card) {
      const pokemonName = card.getAttribute('data-pokemon-name');
      this.hoveredPokemon = pokemonName;
    }
  }

  shrinkCard() {
    this.hoveredPokemon = null;
  }
}
