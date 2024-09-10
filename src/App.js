import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

import './App.css';

import PokemonInfo from './components/PokemonInfo';
import PokemonFilter from './components/PokemonFilter';
import PokemonTable from './components/PokemonTable';

const pokemonReducer = (
  state = {
    pokemon: [],
    filter: '',
    selectedItem: null,
  },
  action
) => {
  switch (action.type) {
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload,
      };
    case 'SET_POKEMON':
      return {
        ...state,
        pokemon: action.payload,
      };
    case 'SET_SELECTED_ITEM':
      return {
        ...state,
        selectedItem: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(pokemonReducer);

const Title = styled.h1`
  text-align: center;
`;
const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-column-gap: 1rem;
`;
const Container = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1rem;
`;

function App() {
  const dispatch = useDispatch();
  const pokemon = useSelector(state => state.pokemon);

  useEffect(() => {
    fetch('http://localhost:3000/starting-react/pokemon.json')
      .then(res => res.json())
      .then(data => dispatch({ type: 'SET_POKEMON', payload: data }));
  }, []);

  if (!pokemon) {
    return <div>Loading data</div>;
  }

  return (
    <Container>
      <Title>Pokemon Search</Title>
      <TwoColumnLayout>
        <div>
          <PokemonFilter />
          <PokemonTable />
        </div>
        <PokemonInfo />
      </TwoColumnLayout>
    </Container>
  );
}

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
