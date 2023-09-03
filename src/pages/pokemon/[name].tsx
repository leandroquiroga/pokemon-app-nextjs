import React from 'react'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import { Layout } from '@/components';
import { arrNamePokemon } from '@/utils';
import { pokeApi } from '../../../api';
import { PokemonFull } from '@/interfaces';

interface PokemonPageProps {
  pokemon: PokemonFull
}
const PokemonPage = ({pokemon}: PokemonPageProps) => {

  console.log(pokemon)
  return (
    <Layout title="Pokenon">
      <h1>Hola Mundo</h1>
    </Layout>
  );
};


export const getStaticPaths: GetStaticPaths = async (ctx) => {
  
  const arrParams = arrNamePokemon.map((value) => value);
  
  return {
    paths: arrParams.map(name => ({
      params: { name }
    })),
    fallback: false
  }
};

export const getStaticProps: GetStaticProps = async ( {params}: GetStaticPropsContext) => {

  const { name } = params as { name: string };

  const { data } = await pokeApi.get<PokemonFull>(`pokemon/${name}`)

  return {
    props: {
      pokemon: data
    },
  };
};

export default PokemonPage