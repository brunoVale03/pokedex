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
  favorites: string[] = [];

  constructor(
    private pokemonService: PokemonService,
    private router: Router
  ) {}

  ngOnInit() {
    this.pokemonService.getPokemonList().subscribe(response => {
      this.pokemonList = response;
      this.loadPokemonDetails();
    });
  }

  loadPokemonDetails() {
    this.pokemonList.results.forEach((pokemon: any) => {
      this.pokemonService.getPokemonDetailsHome(pokemon.url).subscribe(details => {
        pokemon.height = details.height;
        pokemon.weight = details.weight;
        pokemon.base_experience = details.base_experience;
      });
    });
  }

  goToDetails(name: string) {
    this.router.navigateByUrl(`/pokemon-detail/${name}`);
  }

  getPokemonImage(url: string): string {
    const id = url.split('/').filter(x => x).pop();
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }

  expandCard(pokemonName: string) {
    this.hoveredPokemon = pokemonName;
  }

  shrinkCard() {
    this.hoveredPokemon = null;
  }

  reorderPokemonList() {
    this.pokemonList.results.sort((a: any, b: any) => {
      const aIsFavorite = this.isFavorite(a);
      const bIsFavorite = this.isFavorite(b);
      if (aIsFavorite && !bIsFavorite) {
        return -1;
      } else if (!aIsFavorite && bIsFavorite) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  toggleFavorite(pokemon: any, event: Event) {
    event.stopPropagation();  // Impede o evento de clicar no ícone de favorito de abrir a página de detalhes
    pokemon.isFavorite = !pokemon.isFavorite;
    this.reorderPokemonList();
  }

  isFavorite(pokemon: any): boolean {
    return pokemon.isFavorite === true;
  }
  
}
