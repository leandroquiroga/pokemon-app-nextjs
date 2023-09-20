const getItemLocalStorage = (id: number) => {
  let valueButton: string;
  let favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  favorites.includes(id)
    ? valueButton = 'Quitar de favoritos'
    : valueButton = 'Guardar en favoritos';

  return valueButton
};

export default { getItemLocalStorage };
