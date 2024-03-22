import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import PokemonList from './../../components/PokemonList';
import style from'../../style/pokemon.module.css';

const ClientIndex = () => {
  const router = useRouter();
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0')
      .then((response) => response.json())
      .then((data) => setPokemonList(data.results))
      .catch((error) => console.error('Error fetching Pokemon:', error));
  }, []);

  return (
    <div className={style.pokemonList}>
      <h1 >Pokémon List (Client)</h1>
      <PokemonList pokemonList={pokemonList} router={router} />
    </div>
  );
};

export default ClientIndex;
