import { ProfilePkmComponent } from './components/profilePkm/profilePkm.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { FindPkmComponent } from './components/findPkm/findPkm.component';
import { HomeComponent } from './components/home/home.component';

import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'findPokemon', component: FindPkmComponent},
  {path: 'pokedex', component: PokedexComponent},
  {path: 'profilePkm/:id', component: ProfilePkmComponent},
  {path:'**', component: HomeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(appRoutes);