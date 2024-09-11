import React from 'react';
import useStore from '../store';

import PokemonType from '../pokemonType';

const PokemonInfo = () => {
  const selectedItem = useStore(state => state.selectedItem);

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
