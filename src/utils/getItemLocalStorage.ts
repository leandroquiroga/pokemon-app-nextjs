const getItemLocalStorage = (name: string): boolean => {

  // Aseguramos que el este codigo se ejecute de lado del cliente.
  if (typeof window !== "undefined") {
    let favorites: string[] = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    return favorites.includes(name);
  }

  return false;
};

export { getItemLocalStorage };
