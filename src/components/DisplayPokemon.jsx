import React from 'react';

const DisplayPokemon = (props) => {
    const {pokemon} = props


    return (
    <div>
        <ul>
        {pokemon.results.map((poke, i) =>
            <li key={i}> {poke.name} </li>)}

        </ul>

    </div>);
};

export default DisplayPokemon;
