import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PokemonRow from './PokemonRow';

const PokemonTable = () => {
  const dispatch = useDispatch();
  const pokemon = useSelector(state => state.pokemon);
  const filter = useSelector(state => state.filter);

  return (
    <table width="100%">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {pokemon
          .filter(pokemon =>
            pokemon.name.english
              .toLowerCase()
              .includes(filter.toLocaleLowerCase())
          )
          .slice(0, 20)
          .map(pokemon => (
            <PokemonRow
              pokemon={pokemon}
              key={pokemon.id}
              onSelect={pokemon =>
                dispatch({ type: 'SET_SELECTED_ITEM', payload: pokemon })
              }
            />
          ))}
      </tbody>
    </table>
  );
};

export default PokemonTable;
