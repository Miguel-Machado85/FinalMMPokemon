import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { PokemonService } from '../../../service/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent {
  listaPokemon: any[]= [];

  constructor(private pokemonService: PokemonService, private router: Router){}

  ngOnInit(){
    this.getPokemon();
  }

  getPokemon(){
    this.pokemonService.getPokemon().subscribe({
      next: (res: any)=>{
        this.listaPokemon = res.results;
      },
      error: (err)=>{
        console.log(err);
      }
    })
  }

  verPokemon(url: string){
    this.router.navigate(['pokemon/ver', url]);
  }
}
