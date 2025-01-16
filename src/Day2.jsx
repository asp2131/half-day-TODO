import React from "react";
import PokemonCard from "./components/PokemonCard";
import axios from "axios";

/*
1. Setup UI
  - CSS copied over [x]
  - Existing HTML that's not created by jQuery [x]
  - DOM nodes created jQuery [x]
2. Import API and other functionality
  - Create model (state) [x]
  - Pokemon API [x]
  - Setup controllers to change model state [x]
*/

// Original:  https://jsbin.com/pevukiq/1/edit?html,output
class Day2 extends React.Component {
  constructor() {
    super();
    // Model: State of this component
    this.state = {
      pokemon: null,
      loading: false,
      text: "",
      evolutionText: "",
      isShiny: false
    };

    this.searchPokemon = this.searchPokemon.bind(this);
    this.getEvolutionChain = this.getEvolutionChain.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleShiny = this.toggleShiny.bind(this)
  }

  // controllers
  searchPokemon() {
    // send a GET request to the pokemon api
    axios({
      method: "get",
      url: `https://pokeapi.co/api/v2/pokemon/${this.state.text}`,
      responseType: "json",
    }).then((response) => {
      const { data: pokemon } = response;
      this.setState({
        pokemon,
      });
    });
    // save the current pokemon we've searched
  }

  getEvolutionChain() {

  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({
      text: value,
    });
  }

  toggleShiny(){
    this.setState({
      isShiny: !this.state.isShiny
    })
  }

  // View
  render() {
    const {handleChange, searchPokemon, toggleShiny, getEvolutionChain} = this;
    const {isShiny, pokemon, evolutionText} = this.state;

    return (
      <div className="center-screen">
        <h1>PokéAPI Explorer</h1>
        <p>Enter a Pokémon name or ID to learn about it!</p>
        <button
        style={{
          padding: "10",
          margin: "10px"
        }}
        onClick={toggleShiny}
        >Make it {isShiny ? "normal" : "SHINY"}</button>
        <div>
          <input
            onChange={handleChange}
            type="text"
            id="pokemonInput"
            placeholder="Enter Pokémon name or ID"
          />
          <button onClick={searchPokemon}>Search</button>
        </div>

        <div className="loading">
          <img src="/api/placeholder/50/50" alt="Loading..." />
          <p>Searching for Pokémon...</p>
        </div>

        <div className="error-message"></div>
        {pokemon && (
          <PokemonCard
            pokemonName={pokemon.name}
            image={pokemon.sprites[isShiny ? "front_shiny" : "front_default"]}
            stats={pokemon.stats}
            getEvolutionChain={getEvolutionChain}
          />
        )}
        <p><strong>Evolution chain:</strong> {evolutionText}</p>
      </div>
    );
  }
}

export default Day2;
