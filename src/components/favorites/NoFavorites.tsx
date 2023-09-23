import React from 'react'
import { Container, Image, Text } from "@nextui-org/react";

const NoFavorites = () => {
  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh - 100px)",
        justifyContent: "center",
        alignContent: "center",
      }}>
      <Text h1>No hay favoritos</Text>
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
        alt="No favorites"
        width={250}
        height={250}
        css={{
          opacity: 0.7,
        }}
      />
    </Container>
  );
}

export {
  NoFavorites
}