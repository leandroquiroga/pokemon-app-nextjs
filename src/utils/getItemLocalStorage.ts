const getItemLocalStorage = (id: number): boolean => {

  // Aseguramos que el este codigo se ejecute de lado del cliente.
  if (typeof window !== "undefined") {
    let favorites: number[] = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    return favorites.includes(id);
  }

  return false;
};

export { getItemLocalStorage };
