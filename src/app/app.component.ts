import { Component } from '@angular/core';
import { keys } from './keys';
import { Pokemon } from './modelo/Pokemon';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Pokedex-PKM';
  pokemon: Pokemon=new Pokemon('','',0,[''],[{}],[{}],[{}]);

  ngOnInit() {
    this.randomPokemon();
  }

  async randomPokemon(){
    if (!localStorage.getItem("pkm")) {
      const randomNumber = Math.floor(Math.random() * 897) + 1;
      await fetch(`${keys.api}pokemon/${randomNumber}`)
        .then(response => response.json())
        .then(data => this.fillPokemon(data))
        .catch(error=> this.randomPokemon());
    }else{
      console.log(this.pokemon);
    }
  }

  fillPokemon(pokemon){
    this.pokemon._id=pokemon.id; 
    this.pokemon.name=pokemon.name;
    this.pokemon.weight=pokemon.weight;
    this.pokemon.types=pokemon.types;
    this.pokemon.stats=pokemon.stats;
    this.pokemon.abilities=pokemon.abilities;
    this.pokemon.sprites=pokemon.sprites;
    console.log(this.pokemon);
  }
}
