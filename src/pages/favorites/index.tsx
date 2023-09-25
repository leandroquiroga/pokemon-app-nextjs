import React, { useEffect, useState } from 'react'

import { FavoritePokemom, Layout, NoFavorites } from '@/components'
import { pokemon } from '@/utils';

const Favorites = () => {

  const [favoritesPokemon, setFavoritesPokemon] = useState<string[]>();

  useEffect(() => {
    setFavoritesPokemon(pokemon)
  }, []);
  
  return (
    <Layout title="Favoritos - Pokemon">
      {favoritesPokemon?.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemom favoritesPokemon={favoritesPokemon} />
      )}
    </Layout>
  );
}


export default Favorites 