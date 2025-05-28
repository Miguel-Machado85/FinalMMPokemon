import { Routes } from "@angular/router";
import { PokemonListComponent } from "./pokemon-list/pokemon-list.component";
import { VerPokemonComponent } from "./ver-pokemon/ver-pokemon.component";

export const PokemonRoutes: Routes =[{
    path: '',
    children: [
        {
            path: 'list',
            component: PokemonListComponent,
        },
        {
            path: 'ver/:url',
            component: VerPokemonComponent,
        }
    ]
}]