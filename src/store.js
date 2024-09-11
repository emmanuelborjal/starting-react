import { create } from 'zustand';

const useStore = create(set => ({
  pokemon: [],
  filter: '',
  selectedPokemon: null,
  setPokemon: pokemon =>
    set(state => ({
      ...state,
      pokemon,
    })),
  setFilter: filter =>
    set(state => ({
      ...state,
      filter,
    })),
  setSelectedItem: selectedItem =>
    set(state => ({
      ...state,
      selectedItem,
    })),
}));

fetch('http://localhost:3000/starting-react/pokemon.json')
  .then(res => res.json())
  .then(pokemon =>
    useStore.setState(state => ({
      ...state,
      pokemon,
    }))
  );

export default useStore;
