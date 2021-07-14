import { Component, OnInit } from '@angular/core';
import { keys } from '../../keys';
import { Pokemon } from '../../modelo/Pokemon';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pokemon: Pokemon = new Pokemon('', '', 0, [''], [{}], [{}], [{}]);
  arrayPokemon: any = [];

  ngOnInit() {
    this.randomPokemon();
  }

  async randomPokemon() {
    if (!localStorage.getItem("pkm")) {
      const randomNumber = Math.floor(Math.random() * 897) + 1;
      await fetch(`${keys.api}pokemon/${randomNumber}`)
        .then(response => response.json())
        .then(data => this.fillPokemon(data))
        .catch(error => this.randomPokemon());
    } else {
      this.pokemon = JSON.parse(localStorage.getItem('pkm'));
    }
  }

  fillPokemon(pokemon) {
    for (const key in this.pokemon) {
      this.pokemon[key] = pokemon[key];
    }
    console.log(this.pokemon.name);

    this.arrayPokemon.push(this.pokemon);
    console.log(this.arrayPokemon[0].name);
    console.log(this.arrayPokemon[1].name);
    console.log(this.arrayPokemon[2].name);

    console.log(this.arrayPokemon.length);
    if (this.arrayPokemon.length < 3) {
      console.log("------");
      this.randomPokemon();
    } else {
      console.log("1");
      this.printPokemon();
    }
  }

  printPokemon() {
    console.log(this.arrayPokemon);
    /* console.log(this.arrayPokemon); */
  }

  newRandomPokemon() {
    this.arrayPokemon = [];
    this.randomPokemon();
  }
}
