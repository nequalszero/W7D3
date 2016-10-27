import React from 'react';

const PokemonDetail = ({pokemonDetail}) => {
  console.log(pokemonDetail);
  if (pokemonDetail.name ) {
    return (
      <ul>
        <img src={pokemonDetail.image_url}></img>
        <h2>{pokemonDetail.name}</h2>
        <li>{pokemonDetail.poke_type}</li>
        <li>{pokemonDetail.attack}</li>
        <li>{pokemonDetail.defense}</li>
        <li>{pokemonDetail.moves.join(', ')}</li>
        <li>{pokemonDetail.items.map( (item, idx) => { return <img key={item+idx}src={item.image_url}></img>;})}</li>
      </ul>
    );
  } else {
    return <div></div>;
  }
};

export default PokemonDetail;
