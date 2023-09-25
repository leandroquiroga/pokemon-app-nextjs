const toggleFavorites = (name: string) => {


  // Aseguramos que el este codigo se ejecute de lado del cliente. 
  if (typeof window !== 'undefined') {
      let favorites: string[] = JSON.parse(
        localStorage.getItem("favorites") || "[]"
      );

      favorites.includes(name)
        ? (favorites = favorites.filter((pokeName) => pokeName !== name))
        : favorites.push(name);

      localStorage.setItem("favorites", JSON.stringify(favorites));
  }

  return null   
};


export {toggleFavorites};
