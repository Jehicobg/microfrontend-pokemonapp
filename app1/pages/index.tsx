import React, { useEffect, useState } from "react";
import { PokemonCard, usePokemon, ErrorPokemonCard, LoadingPokemonCard } from "shared-components-challenge";

const PokemonRemoteApp: React.FC = () => {
  const [pokemonId, setPokemonId] = useState<number | null>(null);
  const { data, loading, error } = usePokemon(pokemonId ?? 1);

  useEffect(() => {
    const handlePokemonChange = (event: Event) => {
      const customEvent = event as CustomEvent<number>;
      setPokemonId(customEvent.detail + 1);
    };

    document.addEventListener('pokemonChange', handlePokemonChange);

    return () => {
      document.removeEventListener('pokemonChange', handlePokemonChange);
    };
  }, []);


  return <LoadingPokemonCard />;

  // if (loading) {
  //   return (<LoadingPokemonCard />)
  // }

  // if (error) {
  //   return (<ErrorPokemonCard />)
  // }

  // return (
  //   <div>
  //     {data && <PokemonCard pokemon={data} />}
  //   </div>
  // )
}

export default PokemonRemoteApp;