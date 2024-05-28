import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.page.html',
  styleUrls: ['./pokemon-detail.page.scss'],
})
export class PokemonDetailPage implements OnInit {
  pokemon: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonService: PokemonService,
    private router: Router

  ) {}

  ngOnInit() {
    const pokemonName = this.activatedRoute.snapshot.paramMap.get('name');
    if (pokemonName !== null) {
      this.pokemonService.getPokemonDetails(pokemonName).subscribe((data) => {
        this.pokemon = data;
      });
    } else {
      console.error('O nome do Pokémon não foi encontrado.');
    }
  }
  goToHome() {
    this.router.navigateByUrl('/');
  }
}
