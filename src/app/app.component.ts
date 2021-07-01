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
  pokemon: Pokemon = new Pokemon('', '', 0, [''], [{}], [{}], [{}]);

  ngOnInit() {
    /* this.findNamePokemon("Charmander");
    this.findIdPokemon(2); */
  }

  async findNamePokemon(namePokemon:string) {
    const name = namePokemon.toLowerCase();
    await fetch(`${keys.api}pokemon/${name}`)
      .then(response => response.json())
      .then(data => this.fillPokemon(data))
      .catch(error => alert("No Pkm"));
  }

  async findIdPokemon(idPokekmon:number) {
    await fetch(`${keys.api}pokemon/${idPokekmon}`)
      .then(response => response.json())
      .then(data => this.fillPokemon(data))
      .catch(error => alert("No Pkm"));
  }

  fillPokemon(pokemon) {
    for (const key in this.pokemon) {
      this.pokemon[key]=pokemon[key];
    }
    console.log(this.pokemon);
  }
}
