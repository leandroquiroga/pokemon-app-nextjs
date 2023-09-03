import React from 'react'
import { useTheme as useNextTheme } from "next-themes";
import { Image, Text, Card } from "@nextui-org/react";
import { useRouter } from 'next/router';

import { Pokemon } from '@/interfaces'

import styles from '../../styles/globals.module.css'
interface ListPokemon { 
  result: Pokemon[]
}

export const PokemonListCard = ({result}: ListPokemon) => {
  const router = useRouter();
  const { theme } = useNextTheme();

  const handlePokemonOnClick = (name: string) => {
    router.push(`pokemon/${name}`)
  }

  return (
    <section className={styles.cardListPokemon}>
      {result.map((pokemon) => (
        <Card
          key={pokemon.name}
          onClick={() => handlePokemonOnClick(pokemon.name)}
          className={`
            ${styles.cardPokemon}
            ${theme === "dark" ? styles.cardPokemonDark : styles.cardPokemonLigth}
            `
          }
        >
          <Card.Body>
            <Image
            alt={pokemon.name}
              tw="z-0 w-25 h-25"
              src={pokemon.image}
              width={100}
              height={100}
            />
          </Card.Body>
          <Card.Footer className={styles.cardFooter}>
            <Text transform="capitalize" span>
              {pokemon.name}
            </Text>
            <Text em small>
              #{pokemon.id}
            </Text>
          </Card.Footer>
        </Card>
      ))}
    </section>
  );
}