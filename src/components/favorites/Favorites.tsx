import React from 'react'
import { Card, Grid } from "@nextui-org/react";
import { useRouter } from 'next/router';

interface FavoritesProps {
  favoritesPokemon: number[] | undefined;
}

const FavoritePokemom = ({favoritesPokemon}: FavoritesProps) => {

  const router = useRouter(); 

  const handleClickFavorite = (id: number) => {
    router.push(`pokemon/${id}`);
  };


  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {favoritesPokemon?.map((id) => (
        <Grid xs={6} sm={3} md={2} xl={1} key={id}>
          <Card
            hoverable
            onClick={() => handleClickFavorite(id)}
            clickeable
            css={{ padding: 10, pointer: "cursor" }}>
            <Card.Image
              alt={`${id}`}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
              width="100%"
              height={140}
            />
          </Card>
        </Grid>
      ))}
    </Grid.Container>
  );
};

export { FavoritePokemom };