
import React ,{useState} from "react";
import DisplayPokemon from "./DisplayPokemon";
import axios from 'axios'


const Example = (props) => {
    const [err, setErr] = useState("");
    const [pokemon, setPokemon] = useState(null);

    const fetchPokemonThen =() =>{
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(response => response.json())
            .then(response => setPokemon(response))
            .catch(err=>{
                console.log(err)
                setErr("There is a problem")
            })
    }

    const fetchPokemonAxios =() =>{
        axios.get('https://pokeapi.co/api/v2/pokemon')
        .then(response=>{
            setPokemon(response.data)
        })
        
    }

    
    return (
        <div>
            <button onClick={fetchPokemonAxios}> Click here</button>
            {
                pokemon?
                (<DisplayPokemon pokemon = {pokemon} />):
                (<h3> Press the button to fetch it </h3>)
            }
            </div>
    );
}
export default Example;

