import React, { useContext } from 'react';
import PokemonType from '../pokemonType';
import PokemonContext from '../PokemonContext';

const PokemonInfo = () => {
  const {
    state: { selectedItem },
  } = useContext(PokemonContext);

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
