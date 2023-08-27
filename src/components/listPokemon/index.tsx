import React from 'react'
import { useTheme as useNextTheme } from "next-themes";
import { Image, Text } from "@nextui-org/react";
import { CardFooter, Card } from "@nextui-org/card";

import { Pokemon } from '@/interfaces'
import styles from '../../styles/globals.module.css'

interface ListPokemon { 
  result: Pokemon[]
}

export const PokemonListCard = ({result}: ListPokemon) => {
  const { theme } = useNextTheme();

  return (
    <section className={styles.cardListPokemon}>
      {result.map((pokemon) => (
        <Card
          key={pokemon.name}
          isFooterBlurred
          isBlurred
          isHoverable
          className={`
            ${styles.cardPokemon}
            ${theme === "dark" ? styles.cardPokemonDark : styles.cardPokemonLigth}
            `
          }>
          <Image
            alt={pokemon.name}
            tw="z-0 w-25 h-25"
            src={pokemon.image}
            width={100}
            height={100}
          />
          <CardFooter className={styles.cardFooter}>
            <Text transform="capitalize" h5>
              {pokemon.name}
            </Text>
            <Text em small>
              #{pokemon.id}
            </Text>
          </CardFooter>
        </Card>
      ))}
    </section>
  );
}
