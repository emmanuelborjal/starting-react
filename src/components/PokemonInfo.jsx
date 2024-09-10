import React from 'react';
import { useSelector } from 'react-redux';

import PokemonType from '../pokemonType';

const PokemonInfo = () => {
  const selectedItem = useSelector(state => state.selectedItem);

  return (
    selectedItem && (
      <div>
        <h1>{selectedItem.name.english}</h1>
        <table>
          {Object.keys(selectedItem.base).map(key => (
            <tr key={key}>
              <td>{key}</td>
              <td>{selectedItem.base[key]}</td>
            </tr>
          ))}
        </table>
      </div>
    )
  );
};

PokemonInfo.propTypes = PokemonType;

export default PokemonInfo;
