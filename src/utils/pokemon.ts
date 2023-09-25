const pokemon = (): string[] => {
  return JSON.parse(localStorage.getItem('favorites') || '[]')
}

export { pokemon }