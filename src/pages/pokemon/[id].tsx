import React, { useState } from 'react'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { Image, Text, Card, Grid, Button, Container } from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import confetti from 'canvas-confetti';

import { PokemonFull } from '@/interfaces';
import { Layout } from '@/components';
import {
  capitalizeLetter,
  getItemLocalStorage,
  getPokemonData,
  toggleFavorites,
} from "@/utils";

import styles from "../../styles/globals.module.css";

interface PokemonPageProps {
  pokemon: PokemonFull
}
const PokemonPage = ({pokemon}: PokemonPageProps) => {
  const { theme } = useNextTheme();

  const [isInFavorites, setIsInFavorites] = useState<boolean>(getItemLocalStorage(pokemon.id!));

  const onToggleFavotire = () => {
    toggleFavorites(pokemon.id!)
    setIsInFavorites(!isInFavorites); 

    if (!isInFavorites) {
      confetti({
        spread: 160,
        ticks: 50,
        decay: 0.94,
        gravity: 0,
        startVelocity: 50,
        shapes: ["star"],
        colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
        particleCount: 140,
        scalar: 1.2,
        origin: { x: 0.80},
        drift: -10
      });
    }
  };

  return (
    <Layout title={capitalizeLetter(pokemon.name!)}>
      <Grid.Container css={{ marginTop: "12px" }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card
            css={{ padding: "30px" }}
            className={`
            ${
              theme === "dark"
                ? styles.cardPokemonDark
                : styles.cardPokemonLigth
            }
            `}>
            <Card.Body>
              <Card.Image
                alt={pokemon.name}
                src={
                  pokemon.sprites?.other?.dream_world?.front_default ||
                  "no_image.png"
                }
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card
            className={`
            ${
              theme === "dark"
                ? styles.cardPokemonDark
                : styles.cardPokemonLigth
            }
            `}>
            <Card.Header
              css={{ display: "flex", justifyContent: "space-between" }}>
              <Text transform="capitalize" h2>
                {pokemon.name}
              </Text>
              <Button color={"gradient"} ghost={isInFavorites} onClick={onToggleFavotire}>
                {!isInFavorites ? "Guardar de favoritos" : "Quitar en favoritos"}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30} small>Sprites:</Text>
              <Container direction="row" display="flex">
                <Image
                  src={pokemon.sprites?.front_default || "no_image.png"}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites?.back_default || "no_image.png"}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites?.front_shiny || "no_image.png"}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites?.back_shiny || "no_image.png"}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};


export const getStaticPaths: GetStaticPaths = async (ctx) => {
  
  const arrParams = [...Array(151)].map((value, index) => `${index + 1}`);
  
  return {
    paths: arrParams.map(id => ({
      params: { id }
    })),
    fallback: false
  }
};

export const getStaticProps: GetStaticProps = async ( {params}: GetStaticPropsContext) => {
  const { id } = params as { id: string };
  const pokemon = await getPokemonData(id);

  return {
    props: {
      pokemon,
    },
  };
};

export default PokemonPage