import React from 'react'
import { Card, Grid } from "@nextui-org/react";

interface FavoritesProps {
  favoritesPokemon: string[] | undefined;
}

const FavoritePokemom = ({favoritesPokemon}: FavoritesProps) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {favoritesPokemon?.map((id) => (
        <Grid xs={6} sm={3} md={2} xl={1} key={id}>
          <Card hoverable clickeable css={{ padding: 10, pointer: "cursor" }}>
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