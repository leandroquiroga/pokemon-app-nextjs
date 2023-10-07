const toggleFavorites = (id: number) => {


  // Aseguramos que el este codigo se ejecute de lado del cliente. 
  if (typeof window !== 'undefined') {
      let favorites: number[] = JSON.parse(
        localStorage.getItem("favorites") || "[]"
      );

      favorites.includes(id)
        ? (favorites = favorites.filter((pokeID) => pokeID !== id))
        : favorites.push(id);

      localStorage.setItem("favorites", JSON.stringify(favorites));
  }

  return null   
};


export {toggleFavorites};
