import React from 'react'
import { InferGetStaticPropsType } from "next";
import { pokeApi } from '../../api';
import { Layout, PokemonListCard, SkeletonDashboardPokemon } from '@/components/';
import { Pokemon, PokemonListResponse } from '@/interfaces';

export const getStaticProps = async () => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

  const pokeData: Pokemon[] = data.results.map((pokemon, index) => {
    return {
      ...pokemon,
      id: index + 1,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
        index + 1
      }.svg`,
    };
  });

  return {
    props: { results: pokeData },
  };
};

const Home = ({ results }: InferGetStaticPropsType<typeof getStaticProps>) => {
  
  if (results) {
    return (
      <SkeletonDashboardPokemon />
    )
  }
  return (
    <>
      <Layout title="Pokemon App">
          <PokemonListCard result={results}/>
      </Layout>
    </>
  );
};


export default Home;