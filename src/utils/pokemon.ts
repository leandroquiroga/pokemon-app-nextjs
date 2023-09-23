const pokemon = (): number[] => {
  return JSON.parse(localStorage.getItem('favorites') || '[]')
}

export { pokemon }