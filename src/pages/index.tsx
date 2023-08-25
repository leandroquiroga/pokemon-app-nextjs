import React from 'react'
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Layout } from '@/components/';
import { pokeApi } from '../../api';


type ResultPokemon = {
  name: string;
  url: string
}
interface ResponsePokeData {
  count?: number;
  next?: string;
  previus?: any;
  pokemons: ResultPokemon[];
}

export const getStaticProps: GetStaticProps<ResponsePokeData> = async () => {
  const { data } = await pokeApi.get("/pokemon?limit=151");

  return {
    props: { pokemons: data?.results},
  };
};

const Home = ( {pokemons}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(pokemons)
  return (
    <>
      <Layout title="Pokemon App">
        <h1>Hola Mundo</h1>
      </Layout>
    </>
  );
};




export default Home;