interface ResultPokemon {
  name: string;
  url: string;
  id: number;
  image: string
};
export interface LayoutProps {
  children: JSX.Element | JSX.Element[];
  title?: string;
}; 

export interface PokemonListResponse {
  count?: number;
  next?: string;
  previus?: string;
  results: ResultPokemon[];
};

export interface Pokemon extends ResultPokemon {}