import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'pokemon',
        loadChildren: () =>
            import('./pages/pokemon/pokemon.routes').then((m)=>m.PokemonRoutes),
    }
];
