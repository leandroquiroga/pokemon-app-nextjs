import { DataPokemon, PokemonFull } from "@/interfaces";
import { pokeApi } from "../../api";

const getPokemonData = async ( params: string): Promise<DataPokemon> => {
  const { data } = await pokeApi.get<PokemonFull>(`pokemon/${params}`);

  // Procesamos la data de los archivos estaticos

  const pokemon = {
    id: data.id,
    name: data.name,
    sprites: data.sprites,
  };

  return pokemon;
};

export {
  getPokemonData
}