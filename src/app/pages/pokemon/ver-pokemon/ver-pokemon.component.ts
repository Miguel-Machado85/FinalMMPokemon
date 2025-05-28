import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { PokemonService } from '../../../service/pokemon.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ver-pokemon',
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './ver-pokemon.component.html',
  styleUrl: './ver-pokemon.component.scss'
})
export class VerPokemonComponent {
  pokeUrl!: string;
  pokemon: any;

  constructor(private pokemonService: PokemonService, private router: Router, private fb: FormBuilder, private route: ActivatedRoute){}

  ngOnInit(){
    this.route.paramMap.subscribe(params=>{
      const url = params.get('url');
      if(url){
        this.pokeUrl = url;
        this.getPokemonByUrl(url);
      }
    })
  }

  getPokemonByUrl(url: string){
    this.pokemonService.getPokemonById(url).subscribe({
      next: (res: any)=>{
        this.pokemon = res;
      },
      error: (err)=>{
        console.log(err);
      }
    })
  }

}
